//! Module metadata
//!
//! This data is returned by get_module_metadata()
//! which is generated by [extendr_module!].
use crate::robj::IntoRobj;
use crate::*;
use std::io::Write;

/// Metadata function argument.
#[derive(Debug, PartialEq)]
pub struct Arg {
    pub name: &'static str,
    pub arg_type: &'static str,
}

/// Metadata function.
#[derive(Debug, PartialEq)]
pub struct Func {
    pub doc: &'static str,
    pub name: &'static str,
    pub args: Vec<Arg>,
    pub return_type: &'static str,
    pub func_ptr: *const u8,
    pub hidden: bool,
}

/// Metadata Impl.
#[derive(Debug, PartialEq)]
pub struct Impl {
    pub doc: &'static str,
    pub name: &'static str,
    pub methods: Vec<Func>,
}

/// Module metadata.
#[derive(Debug, PartialEq)]
pub struct Metadata {
    pub name: &'static str,
    pub functions: Vec<Func>,
    pub impls: Vec<Impl>,
}

impl From<Arg> for Robj {
    fn from(val: Arg) -> Self {
        List(&[r!(val.name), r!(val.arg_type)])
            .into_robj()
            .set_names(&["name", "arg_type"])
            .expect("From<Arg> failed")
    }
}

impl From<Func> for Robj {
    fn from(val: Func) -> Self {
        List(&[
            r!(val.doc),
            r!(val.name),
            r!(List(val.args)),
            r!(val.return_type),
            r!(val.hidden),
        ])
        .into_robj()
        .set_names(&["doc", "name", "args", "return.type", "hidden"])
        .expect("From<Func> failed")
    }
}

impl From<Impl> for Robj {
    fn from(val: Impl) -> Self {
        List(&[r!(val.doc), r!(val.name), r!(List(val.methods))])
            .into_robj()
            .set_names(&["doc", "name", "methods"])
            .expect("From<Impl> failed")
    }
}

impl From<Metadata> for Robj {
    fn from(val: Metadata) -> Self {
        List(&[r!(val.name), r!(List(val.functions)), r!(List(val.impls))])
            .into_robj()
            .set_names(&["name", "functions", "impls"])
            .expect("From<Metadata> failed")
    }
}

fn write_doc(w: &mut Vec<u8>, doc: &str) -> std::io::Result<()> {
    if !doc.is_empty() {
        write!(w, "#'")?;
        for c in doc.chars() {
            if c == '\n' {
                write!(w, "\n#'")?;
            } else {
                write!(w, "{}", c)?;
            }
        }
        writeln!(w, "")?;
    }
    Ok(())
}

/// Wraps invalid R identifers, like `_function_name`, into backticks.
fn sanitize_identifier(name: &str) -> String {
    if name.starts_with('_') {
        format!("`{}`", name)
    } else {
        name.to_string()
    }
}

/// Generate a wrapper for a non-method function.
fn write_function_wrapper(
    w: &mut Vec<u8>,
    func: &Func,
    package_name: &str,
    use_symbols: bool,
) -> std::io::Result<()> {
    if func.hidden {
        return Ok(());
    }

    write_doc(w, func.doc)?;

    let args = func
        .args
        .iter()
        .map(|arg| sanitize_identifier(arg.name))
        .collect::<Vec<_>>()
        .join(", ");

    if func.return_type == "()" {
        write!(
            w,
            "{} <- function({}) invisible(.Call(",
            sanitize_identifier(func.name),
            args
        )?;
    } else {
        write!(
            w,
            "{} <- function({}) .Call(",
            sanitize_identifier(func.name),
            args
        )?;
    }

    if use_symbols {
        write!(w, "wrap__{}", func.name)?;
    } else {
        write!(w, "\"wrap__{}\"", func.name)?;
    }

    if !func.args.is_empty() {
        write!(w, ", {}", args)?;
    }

    if !use_symbols {
        write!(w, ", PACKAGE = \"{}\"", package_name)?;
    }

    if func.return_type == "()" {
        writeln!(w, "))\n")?;
    } else {
        writeln!(w, ")\n")?;
    }

    Ok(())
}

/// Generate a wrapper for a method.
fn write_method_wrapper(
    w: &mut Vec<u8>,
    func: &Func,
    package_name: &str,
    use_symbols: bool,
    class_name: &str,
) -> std::io::Result<()> {
    if func.hidden {
        return Ok(());
    }

    let actual_args = func
        .args
        .iter()
        .map(|arg| sanitize_identifier(arg.name))
        .collect::<Vec<_>>();
    let formal_args = if !actual_args.is_empty() && actual_args[0] == "self" {
        // Skip a leading "self" argument.
        // This is supplied by the environment.
        actual_args
            .iter()
            .skip(1)
            .map(|x| x.to_string())
            .collect::<Vec<_>>()
    } else {
        actual_args.clone()
    };

    let formal_args = formal_args.join(", ");
    let actual_args = actual_args.join(", ");

    // Both `class_name` and `func.name` should be processed
    // because they are exposed to R
    if func.return_type == "()" {
        write!(
            w,
            "{}${} <- function({}) invisible(.Call(",
            sanitize_identifier(class_name),
            sanitize_identifier(func.name),
            formal_args
        )?;
    } else {
        write!(
            w,
            "{}${} <- function({}) .Call(",
            sanitize_identifier(class_name),
            sanitize_identifier(func.name),
            formal_args
        )?;
    }

    // Here no processing is needed because of `wrap__` prefix
    if use_symbols {
        write!(w, "wrap__{}__{}", class_name, func.name)?;
    } else {
        write!(w, "\"wrap__{}__{}\"", class_name, func.name)?;
    }

    if !actual_args.is_empty() {
        write!(w, ", {}", actual_args)?;
    }

    if !use_symbols {
        write!(w, ", PACKAGE = \"{}\"", package_name)?;
    }

    if func.return_type == "()" {
        writeln!(w, "))\n")?;
    } else {
        writeln!(w, ")\n")?;
    }

    Ok(())
}

/// Generate a wrapper for an implementation block.
fn write_impl_wrapper(
    w: &mut Vec<u8>,
    imp: &Impl,
    package_name: &str,
    use_symbols: bool,
) -> std::io::Result<()> {
    let exported = imp.doc.contains("@export");

    write_doc(w, imp.doc)?;

    let imp_name_fixed = sanitize_identifier(imp.name);

    // Using fixed name because it is exposed to R
    writeln!(w, "{} <- new.env(parent = emptyenv())\n", imp_name_fixed)?;

    for func in &imp.methods {
        // write_doc(& mut w, func.doc)?;
        // `imp.name` is passed as is and sanitized within the function
        write_method_wrapper(w, func, package_name, use_symbols, imp.name)?;
    }

    if exported {
        writeln!(w, "#' @rdname {}", imp.name)?;
        writeln!(w, "#' @usage NULL")?;
        writeln!(w, "#' @export")?;
    } else {
        // we always export the `$` method so the method is correctly
        // added to the NAMESPACE even if we don't export the class
        // itself and its initializers.
        writeln!(w, "#' @export")?;
    }
    // LHS with dollar operator is wrapped in ``, so pass name as is,
    // but in the body `imp_name_fixed` is called as valid R function,
    // so we pass preprocessed value
    writeln!(w, "`$.{}` <- function (self, name) {{ func <- {}[[name]]; environment(func) <- environment(); func }}\n", imp.name, imp_name_fixed)?;

    Ok(())
}

impl Metadata {
    pub fn make_r_wrappers(
        &self,
        use_symbols: bool,
        package_name: &str,
    ) -> std::io::Result<String> {
        let mut w = Vec::new();

        writeln!(
            w,
            r#"# Generated by extendr: Do not edit by hand
#
# This file was created with the following call:
#   .Call("wrap__make_{}_wrappers", use_symbols = {}, package_name = "{}")
"#,
            self.name,
            if use_symbols { "TRUE" } else { "FALSE" },
            package_name
        )?;

        if use_symbols {
            writeln!(w, "#' @docType package")?;
            writeln!(w, "#' @usage NULL")?;
            writeln!(w, "#' @useDynLib {}, .registration = TRUE", package_name)?;
            writeln!(w, "NULL")?;
            writeln!(w, "")?;
        }

        for func in &self.functions {
            write_function_wrapper(&mut w, func, package_name, use_symbols)?;
        }

        for imp in &self.impls {
            write_impl_wrapper(&mut w, imp, package_name, use_symbols)?;
        }
        unsafe { Ok(String::from_utf8_unchecked(w)) }
    }
}