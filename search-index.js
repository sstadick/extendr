var searchIndex = JSON.parse('{\
"extendr_api":{"doc":"A safe and user friendly R extension interface.","i":[[23,"extendr","extendr_api","Generate bindings for a single function.",null,null],[14,"extendr_module","","Define a module and export symbols to R Example:",null,null],[3,"Bool","","Bool is a wrapper for i32 in the context of an R\'s…",null,null],[12,"0","","",0,null],[3,"ListIter","","",null,null],[3,"PairlistIter","","Iterator over the objects in a vector or string.",null,null],[3,"PairlistTagIter","","Iterator over pairlist tag names.",null,null],[3,"StrIter","","Iterator over strings or string factors.",null,null],[3,"Symbol","","Wrapper for creating symbols.",null,null],[12,"0","","",1,null],[3,"Character","","Wrapper for creating character objects. These are used…",null,null],[12,"0","","",2,null],[3,"Raw","","Wrapper for creating raw (byte) objects.",null,null],[12,"0","","",3,null],[3,"Lang","","Wrapper for creating language objects.",null,null],[12,"0","","",4,null],[3,"Pairlist","","Wrapper for creating pair list (LISTSXP) objects.",null,null],[12,"names_and_values","","",5,null],[3,"List","","Wrapper for creating list (VECSXP) objects.",null,null],[12,"0","","",6,null],[3,"Expr","","Wrapper for creating expression objects.",null,null],[12,"0","","",7,null],[3,"Env","","Wrapper for creating environments.",null,null],[12,"parent","","",8,null],[12,"names_and_values","","",8,null],[3,"Func","","Wrapper for creating functions (CLOSSXP).",null,null],[12,"formals","","",9,null],[12,"body","","",9,null],[12,"env","","",9,null],[3,"Promise","","",null,null],[12,"code","","",10,null],[12,"env","","",10,null],[12,"value","","",10,null],[12,"seen","","",10,null],[3,"Primitive","","Wrapper for creating and reading Primitive functions.",null,null],[12,"0","","",11,null],[3,"Array","","Wrapper for creating and using matrices and arrays.",null,null],[4,"Error","","",null,null],[13,"NotFound","","",12,null],[13,"NotAVectorType","","",12,null],[13,"ParseError","","",12,null],[13,"Other","","",12,null],[4,"Robj","","Wrapper for an R S-expression pointer (SEXP).",null,null],[5,"new_env","","Create a new, empty environment parented on global_env()",null,[[],["robj",4]]],[5,"new_env_with_capacity","","Create a new, empty environment parented on global_env()…",null,[[],["robj",4]]],[5,"global_var","","Get a global variable from global_env() and ancestors. If…",null,[[["into",8],["robj",4]],[["robj",4],["result",6]]]],[5,"local_var","","Get a local variable from current_env() and ancestors.",null,[[["into",8],["robj",4]],[["robj",4],["result",6]]]],[5,"global_function","","Get a global function from global_env() and ancestors.",null,[[["into",8],["robj",4]],[["option",4],["robj",4]]]],[5,"find_namespace","","Find a namespace by name.",null,[[["into",8],["robj",4]],[["option",4],["robj",4]]]],[5,"current_env","","The current interpreter environment.",null,[[],["robj",4]]],[5,"global_env","","The \\\"global\\\" environment",null,[[],["robj",4]]],[5,"empty_env","","An empty environment at the root of the environment tree",null,[[],["robj",4]]],[5,"base_env","","The base environment; formerly R_NilValue",null,[[],["robj",4]]],[5,"base_namespace","","The namespace for base.",null,[[],["robj",4]]],[5,"namespace_registry","","For registered namespaces.",null,[[],["robj",4]]],[5,"srcref","","Current srcref, for debuggers",null,[[],["robj",4]]],[5,"nil_value","","The nil object",null,[[],["robj",4]]],[5,"unbound_value","","Unbound marker",null,[[],["robj",4]]],[5,"missing_arg","","Missing argument marker",null,[[],["robj",4]]],[5,"base_symbol","","\\\"base\\\"",null,[[],["robj",4]]],[5,"brace_symbol","","\\\"{\\\"",null,[[],["robj",4]]],[5,"bracket_2_symbol","","\\\"[[\\\"",null,[[],["robj",4]]],[5,"bracket_symbol","","\\\"[\\\"",null,[[],["robj",4]]],[5,"class_symbol","","\\\"class\\\"",null,[[],["robj",4]]],[5,"device_symbol","","\\\".Device\\\"",null,[[],["robj",4]]],[5,"dimnames_symbol","","\\\"dimnames\\\"",null,[[],["robj",4]]],[5,"dim_symbol","","\\\"dim\\\"",null,[[],["robj",4]]],[5,"dollar_symbol","","\\\"$\\\"",null,[[],["robj",4]]],[5,"dots_symbol","","\\\"...\\\"",null,[[],["robj",4]]],[5,"double_colon_symbol","","\\\"::\\\"",null,[[],["robj",4]]],[5,"lastvalue_symbol","","\\\".Last.value\\\"",null,[[],["robj",4]]],[5,"levels_symbol","","\\\"levels\\\"",null,[[],["robj",4]]],[5,"mode_symbol","","\\\"mode\\\"",null,[[],["robj",4]]],[5,"na_rm_symbol","","\\\"na.rm\\\"",null,[[],["robj",4]]],[5,"name_symbol","","\\\"name\\\"",null,[[],["robj",4]]],[5,"names_symbol","","\\\"names\\\"",null,[[],["robj",4]]],[5,"namespace_env_symbol","","NAMESPACE_.\\\"",null,[[],["robj",4]]],[5,"package_symbol","","\\\"package\\\"",null,[[],["robj",4]]],[5,"previous_symbol","","\\\"previous\\\"",null,[[],["robj",4]]],[5,"quote_symbol","","\\\"quote\\\"",null,[[],["robj",4]]],[5,"row_names_symbol","","\\\"row.names\\\"",null,[[],["robj",4]]],[5,"seeds_symbol","","\\\".Random.seed\\\"",null,[[],["robj",4]]],[5,"sort_list_symbol","","\\\"sort.list\\\"",null,[[],["robj",4]]],[5,"source_symbol","","\\\"source\\\"",null,[[],["robj",4]]],[5,"spec_symbol","","\\\"spec\\\"",null,[[],["robj",4]]],[5,"tsp_symbol","","\\\"tsp\\\"",null,[[],["robj",4]]],[5,"triple_colon_symbol","","\\\":::\\\"",null,[[],["robj",4]]],[5,"dot_defined","","\\\".defined\\\"",null,[[],["robj",4]]],[5,"dot_method","","\\\".Method\\\"",null,[[],["robj",4]]],[5,"dot_package_name","","\\\"packageName\\\"",null,[[],["robj",4]]],[5,"dot_target","","\\\".target\\\"",null,[[],["robj",4]]],[5,"na_string","","NA_STRING as a CHARSXP",null,[[],["robj",4]]],[5,"blank_string","","\\\"\\\" as a CHARSXP",null,[[],["robj",4]]],[5,"blank_scalar_string","","\\\"\\\" as a STRSXP",null,[[],["robj",4]]],[5,"test","","Extendr test harness.",null,[[["fnonce",8]]]],[5,"handle_panic","","This function is used by the wrapper logic to catch panics…",null,[[]]],[5,"single_threaded","","Run a function single threaded. Note: This will fail badly…",null,[[]]],[11,"to_bool","","Convert this Bool to a bool. Note NA will be true.",0,[[]]],[11,"from_bool","","Convert this construct a Bool from a rust boolean.",0,[[]]],[11,"is_true","","Test if TRUE",0,[[]]],[11,"is_false","","Test if FALSE",0,[[]]],[11,"new","","Make an empty list iterator.",13,[[]]],[11,"new","","Make an empty list iterator.",14,[[]]],[11,"new","","Make an empty str iterator.",15,[[]]],[11,"as_pairlist_iter","","Get an iterator over a pairlist objects.",16,[[],[["option",4],["pairlistiter",3]]]],[11,"as_pairlist_tag_iter","","Get an iterator over pairlist tags.",16,[[],[["pairlisttagiter",3],["option",4]]]],[11,"as_list_iter","","Get an iterator over a list (VECSXP).",16,[[],[["option",4],["listiter",3]]]],[11,"as_str_iter","","Get an iterator over a string vector. Returns None if the…",16,[[],[["striter",3],["option",4]]]],[11,"dollar","","Do the equivalent of x$y",16,[[],[["robj",4],["result",6]]]],[11,"slice","","Do the equivalent of `x[y]`",16,[[],[["robj",4],["result",6]]]],[11,"index","","Do the equivalent of `x[[y]]`",16,[[],[["robj",4],["result",6]]]],[11,"tilde","","Do the equivalent of x ~ y",16,[[],[["robj",4],["result",6]]]],[11,"double_colon","","Do the equivalent of x :: y",16,[[],[["robj",4],["result",6]]]],[11,"is_null","","Return true if this is the null object.",16,[[]]],[11,"is_symbol","","Return true if this is a symbol.",16,[[]]],[11,"is_logical","","Return true if this is a boolean (logical) vector",16,[[]]],[11,"is_real","","Return true if this is a real (f64) vector.",16,[[]]],[11,"is_complex","","Return true if this is a complex vector.",16,[[]]],[11,"is_expr","","Return true if this is an expression.",16,[[]]],[11,"is_environment","","Return true if this is an environment.",16,[[]]],[11,"is_promise","","Return true if this is an environment.",16,[[]]],[11,"is_string","","Return true if this is a string.",16,[[]]],[11,"is_object","","Return true if this is an object.",16,[[]]],[11,"get_current_srcref","","Get the source ref.",16,[[],["robj",4]]],[11,"get_src_filename","","Get the source filename.",16,[[],["robj",4]]],[11,"as_char","","Convert to a string vector.",16,[[],["robj",4]]],[11,"coerce_vector","","Convert to vectors of many kinds.",16,[[],["robj",4]]],[11,"pair_to_vector_list","","Convert a pairlist (LISTSXP) to a vector list (VECSXP).",16,[[],["robj",4]]],[11,"vector_to_pair_list","","Convert a vector list (VECSXP) to a pair list (LISTSXP)",16,[[],["robj",4]]],[11,"as_character_factor","","Convert a factor to a string vector.",16,[[],["robj",4]]],[11,"alloc_matrix","","Allocate a matrix object.",16,[[["sexptype",6]],["robj",4]]],[11,"duplicate","","Compatible way to duplicate an object. Use obj.clone()…",16,[[]]],[11,"find_function","","Find a function in an environment ignoring other variables.",16,[[["into",8],["robj",4]],[["option",4],["robj",4]]]],[11,"find_var","","Find a variable in an environment.",16,[[["into",8],["robj",4]],[["option",4],["robj",4]]]],[11,"eval_promise","","If this object is a promise, evaluate it, otherwise return…",16,[[],[["robj",4],["result",6]]]],[11,"ncols","","Number of columns of a matrix",16,[[]]],[11,"nrows","","Number of rows of a matrix",16,[[]]],[11,"xlengthgets","","Copy a vector and resize it. See.…",16,[[],[["robj",4],["result",6]]]],[11,"alloc_vector","","Allocated an owned object of a certain type.",16,[[],["robj",4]]],[11,"conformable","","Return true if two arrays have identical dims.",16,[[["robj",4]]]],[11,"is_array","","Return true if this is an array.",16,[[]]],[11,"is_factor","","Return true if this is factor.",16,[[]]],[11,"is_frame","","Return true if this is a data frame.",16,[[]]],[11,"is_function","","Return true if this is a function.",16,[[]]],[11,"is_integer","","Return true if this is an integer vector (INTSXP) but not…",16,[[]]],[11,"is_language","","Return true if this is a language object (LANGSXP).",16,[[]]],[11,"is_pairlist","","Return true if this is NILSXP or LISTSXP.",16,[[]]],[11,"is_matrix","","Return true if this is a matrix.",16,[[]]],[11,"is_list","","Return true if this is NILSXP or VECSXP.",16,[[]]],[11,"is_number","","Return true if this is INTSXP, LGLSXP or REALSXP but not a…",16,[[]]],[11,"is_primitive","","Return true if this is a primitive function BUILTINSXP,…",16,[[]]],[11,"is_ts","","Return true if this is a time series vector (see tsp).",16,[[]]],[11,"is_user_binop","","Return true if this is a user defined binop.",16,[[]]],[11,"is_valid_string","","Return true if this is a valid string.",16,[[]]],[11,"is_valid_string_f","","Return true if this is a valid string.",16,[[]]],[11,"is_vector","","Return true if this is a vector.",16,[[]]],[11,"is_vector_atomic","","Return true if this is an atomic vector.",16,[[]]],[11,"is_vector_list","","Return true if this is a vector list.",16,[[]]],[11,"is_vectorizable","","Return true if this is can be made into a vector.",16,[[]]],[11,"is_missing_arg","","",16,[[]]],[11,"is_unbound_value","","",16,[[]]],[11,"is_package_env","","",16,[[]]],[11,"package_env_name","","",16,[[],["robj",4]]],[11,"is_namespace_env","","",16,[[]]],[11,"namespace_env_spec","","",16,[[],["robj",4]]],[11,"len","","Get the extended length of the object.",16,[[]]],[11,"local","","Get a variable from an enviroment, but not its ancestors.",16,[[["into",8],["robj",4]],[["option",4],["robj",4]]]],[11,"set_local","","Set or define a variable in an enviroment.",16,[[["into",8],["robj",4]]]],[11,"parent","","Get the parent of an environment.",16,[[],[["option",4],["robj",4]]]],[11,"is_na","","Is this object is an NA scalar? Works for character,…",16,[[]]],[11,"as_integer_slice","","Get a read-only reference to the content of an integer…",16,[[],["option",4]]],[11,"as_integer_iter","","Get an iterator over integer elements of this slice.",16,[[],[["option",4],["integeriter",6]]]],[11,"as_integer_vector","","Get a Vec copied from the object.",16,[[],[["option",4],["vec",3]]]],[11,"as_logical_slice","","Get a read-only reference to the content of a logical…",16,[[],["option",4]]],[11,"as_logical_vector","","Get a Vec copied from the object using the tri-state…",16,[[],[["option",4],["vec",3]]]],[11,"as_logical_iter","","Get an iterator over logical elements of this slice.",16,[[],[["option",4],["logicaliter",6]]]],[11,"as_real_slice","","Get a read-only reference to the content of a double…",16,[[],["option",4]]],[11,"as_real_iter","","Get an iterator over real elements of this slice.",16,[[],[["realiter",6],["option",4]]]],[11,"as_real_vector","","Get a Vec copied from the object.",16,[[],[["vec",3],["option",4]]]],[11,"as_raw_slice","","Get a read-only reference to the content of an integer or…",16,[[],["option",4]]],[11,"as_integer_slice_mut","","Get a read-write reference to the content of an integer or…",16,[[],["option",4]]],[11,"as_real_slice_mut","","Get a read-write reference to the content of a double…",16,[[],["option",4]]],[11,"as_raw_slice_mut","","Get a read-write reference to the content of a raw vector.",16,[[],["option",4]]],[11,"as_string_vector","","Get a vector of owned strings. Owned strings have long…",16,[[],[["vec",3],["option",4]]]],[11,"as_str_vector","","Get a vector of string references. String references…",16,[[],[["vec",3],["option",4]]]],[11,"as_str","","Get a read-only reference to a scalar string type.",16,[[],["option",4]]],[11,"as_integer","","Get a scalar integer.",16,[[],["option",4]]],[11,"as_real","","Get a scalar real.",16,[[],["option",4]]],[11,"as_bool","","Get a scalar rust boolean.",16,[[],["option",4]]],[11,"as_logical","","Get a scalar boolean as a tri-boolean [Bool] value.",16,[[],[["option",4],["bool",3]]]],[11,"eval","","Evaluate the expression in R and return an error or an R…",16,[[],[["robj",4],["result",6]]]],[11,"eval_blind","","Evaluate the expression and return NULL or an R object.",16,[[],["robj",4]]],[11,"parse","","Parse a string into an R executable object",16,[[],[["robj",4],["result",6]]]],[11,"eval_string","","Parse a string into an R executable object and run it.",16,[[],[["robj",4],["result",6]]]],[11,"is_owned","","Return true if the object is owned by this wrapper. If so,…",16,[[]]],[11,"get_attrib","","Get a specific attribute as a borrowed robj if it exists.",16,[[],[["option",4],["robj",4]]]],[11,"set_attrib","","Set a specific attribute and return the value.",16,[[],["robj",4]]],[11,"names","","Get the names attribute as a string iterator if one exists.",16,[[],[["striter",3],["option",4]]]],[11,"dim","","Get the dim attribute as an integer iterator if one exists.",16,[[],[["option",4],["integeriter",6]]]],[11,"dimnames","","Get the dimnames attribute as a list iterator if one exists.",16,[[],[["option",4],["listiter",3]]]],[11,"as_named_list_iter","","Return an iterator over names and values of a list if they…",16,[[],[["option",4],["namedlistiter",6]]]],[11,"class","","Get the class attribute as a string iterator if one exists.",16,[[],[["striter",3],["option",4]]]],[11,"inherits","","Return true if this class inherits this class.",16,[[]]],[11,"levels","","Get the levels attribute as a string iterator if one exists.",16,[[],[["striter",3],["option",4]]]],[11,"ls","","Get the names in an environment.",16,[[],[["vec",3],["option",4]]]],[11,"as_symbol","","Convert a symbol object to a Symbol wrapper.",16,[[],[["option",4],["symbol",3]]]],[11,"as_character","","Convert a character object to a Character wrapper.",16,[[],[["option",4],["character",3]]]],[11,"as_raw","","Convert a raw object to a Character wrapper.",16,[[],[["option",4],["raw",3]]]],[11,"as_lang","","Convert a language object to a Lang wrapper.",16,[[],[["lang",3],["option",4]]]],[11,"as_pairlist","","Convert a pair list object (LISTSXP) to a Pairlist wrapper.",16,[[],[["option",4],["pairlist",3]]]],[11,"as_list","","Convert a list object (VECSXP) to a List wrapper.",16,[[],[["list",3],["option",4]]]],[11,"as_expr","","Convert an expression object (EXPRSXP) to a Expr wrapper.",16,[[],[["expr",3],["option",4]]]],[11,"as_environment","","Convert an environment object (ENVSXP) to a Env wrapper.",16,[[],[["env",3],["option",4]]]],[11,"as_func","","Convert a function object (CLOSXP) to a Func wrapper.",16,[[],[["func",3],["option",4]]]],[11,"as_promise","","Get a wrapper for a promise.",16,[[],[["promise",3],["option",4]]]],[11,"data","","Get the underlying data fro this array.",17,[[]]],[11,"dim","","Get the dimensions for this array.",17,[[]]],[11,"new","","Make a new vector type.",17,[[]]],[11,"nrows","","Get the number of rows.",17,[[]]],[11,"new","","Create a new matrix wrapper.",17,[[]]],[11,"nrows","","Get the number of rows.",17,[[]]],[11,"ncols","","Get the number of columns.",17,[[]]],[11,"new","","Create a new matrix wrapper.",17,[[]]],[11,"nrows","","Get the number of rows.",17,[[]]],[11,"ncols","","Get the number of columns.",17,[[]]],[11,"nsub","","Get the number of submatrices.",17,[[]]],[11,"as_vector","","",16,[[],[["option",4],["vector",6]]]],[11,"as_matrix","","",16,[[],[["option",4],["matrix",6]]]],[11,"as_matrix3d","","",16,[[],[["option",4],["matrix3d",6]]]],[6,"Result","","",null,null],[6,"NamedListIter","","Iterator over name-value pairs in lists.",null,null],[6,"IntegerIter","","Iterator over primitives in integer objects.",null,null],[6,"RealIter","","Iterator over primitives in real objects.",null,null],[6,"LogicalIter","","Iterator over primitives in logical objects.",null,null],[6,"Vector","","",null,null],[6,"Matrix","","",null,null],[6,"Matrix3D","","",null,null],[17,"TRUE","","TRUE value eg. `r!(TRUE)`",null,null],[17,"FALSE","","FALSE value eg. `r!(FALSE)`",null,null],[17,"NULL","","NULL value eg. `r!(NULL)`",null,null],[17,"NA_INTEGER","","NA value for integers eg. `r!(NA_INTEGER)`",null,null],[17,"NA_REAL","","NA value for real values eg. `r!(NA_REAL)`",null,null],[17,"NA_STRING","","NA value for strings. `r!(NA_STRING)`",null,null],[17,"NA_LOGICAL","","NA value for logical. `r!(NA_LOGICAL)`",null,null],[8,"FromRobj","","Trait used for incomming parameter conversion.",null,null],[11,"from_robj","","",18,[[["robj",4]],["result",4]]],[8,"ToVectorValue","","`ToVectorValue` is a trait that allows many different…",null,null],[11,"sexptype","","",19,[[],["sexptype",6]]],[11,"to_real","","",19,[[]]],[11,"to_integer","","",19,[[]]],[11,"to_logical","","",19,[[]]],[11,"to_raw","","",19,[[]]],[11,"to_sexp","","",19,[[],["sexp",6]]],[8,"RobjItertools","","Extensions to iterators for R objects including…",null,null],[11,"collect_robj","","Convert a wide range of iterators to Robj.",20,[[],["robj",4]]],[8,"AsTypedSlice","","Generic access to typed slices in an Robj.",null,null],[11,"as_typed_slice","","",21,[[],["option",4]]],[11,"as_typed_slice_mut","","",21,[[],["option",4]]],[8,"IsNA","","Return true if this primitive is NA.",null,null],[10,"is_na","","",22,[[]]],[14,"call","","The call! macro calls an R function with Rust parameters.…",null,null],[14,"lang","","A macro for constructing R langage objects.",null,null],[14,"r","","Convert a rust expression to an R object.",null,null],[14,"R","","Call inline R source code from Rust.",null,null],[14,"var","","Get a local variable from the calling function or a global…",null,null],[14,"global","","Get a global variable.",null,null],[14,"sym","","The sym! macro install symbols. You should cache your…",null,null],[14,"c","","Concatenation operator.",null,null],[14,"rep","","Create a vector with repeating elements.",null,null],[14,"read_table","","Read a CSV file.",null,null],[14,"list","","Create a list.",null,null],[14,"data_frame","","Create a dataframe.",null,null],[14,"factor","","Create a factor.",null,null],[14,"rprint","","Print via the R output stream.",null,null],[14,"rprintln","","Print with a newline via the R output stream.",null,null],[14,"reprint","","Print via the R error stream.",null,null],[14,"reprintln","","Print with a newline via the R output stream.",null,null],[14,"test","","Macro for running tests.",null,null],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",23,[[]]],[11,"into","","",23,[[]]],[11,"into_iter","","",23,[[]]],[11,"to_owned","","",23,[[]]],[11,"clone_into","","",23,[[]]],[11,"borrow","","",23,[[]]],[11,"borrow_mut","","",23,[[]]],[11,"try_from","","",23,[[],["result",4]]],[11,"try_into","","",23,[[],["result",4]]],[11,"type_id","","",23,[[],["typeid",3]]],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"into_iter","","",13,[[]]],[11,"to_owned","","",13,[[]]],[11,"clone_into","","",13,[[]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"from","","",14,[[]]],[11,"into","","",14,[[]]],[11,"into_iter","","",14,[[]]],[11,"to_owned","","",14,[[]]],[11,"clone_into","","",14,[[]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"from","","",15,[[]]],[11,"into","","",15,[[]]],[11,"into_iter","","",15,[[]]],[11,"to_owned","","",15,[[]]],[11,"clone_into","","",15,[[]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"to_owned","","",6,[[]]],[11,"clone_into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_owned","","",7,[[]]],[11,"clone_into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"to_owned","","",8,[[]]],[11,"clone_into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"to_owned","","",9,[[]]],[11,"clone_into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"to_owned","","",10,[[]]],[11,"clone_into","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"to_owned","","",11,[[]]],[11,"clone_into","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"from","","",17,[[]]],[11,"into","","",17,[[]]],[11,"borrow","","",17,[[]]],[11,"borrow_mut","","",17,[[]]],[11,"try_from","","",17,[[],["result",4]]],[11,"try_into","","",17,[[],["result",4]]],[11,"type_id","","",17,[[],["typeid",3]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"to_string","","",12,[[],["string",3]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"from","","",16,[[]]],[11,"into","","",16,[[]]],[11,"to_owned","","",16,[[]]],[11,"clone_into","","",16,[[]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"from_robj","","",15,[[["robj",4]],["result",4]]],[11,"from_robj","","",23,[[["robj",4]],["result",4]]],[11,"from_robj","","",24,[[["robj",4]],["result",4]]],[11,"from_robj","","",25,[[["robj",4]],["result",4]]],[11,"from_robj","","",26,[[["robj",4]],["result",4]]],[11,"from_robj","","",16,[[["robj",4]],["result",4]]],[11,"sexptype","","",0,[[],["sexptype",6]]],[11,"to_logical","","",0,[[]]],[11,"as_typed_slice","","",16,[[],["option",4]]],[11,"as_typed_slice_mut","","",16,[[],["option",4]]],[11,"as_typed_slice","","",16,[[],["option",4]]],[11,"as_typed_slice_mut","","",16,[[],["option",4]]],[11,"as_typed_slice","","",16,[[],["option",4]]],[11,"as_typed_slice_mut","","",16,[[],["option",4]]],[11,"as_typed_slice","","",16,[[],["option",4]]],[11,"as_typed_slice_mut","","",16,[[],["option",4]]],[11,"is_na","","",0,[[]]],[11,"drop","","",16,[[]]],[11,"from","","",12,[[["box",3],["error",8]],["error",4]]],[11,"from","","",12,[[],["error",4]]],[11,"from","","",0,[[]]],[11,"from","","",0,[[]]],[11,"from","","",16,[[]]],[11,"from","","",16,[[["result",6]]]],[11,"from","","",16,[[["character",3]]]],[11,"from","","",16,[[["robj",4]]]],[11,"from","","",16,[[]]],[11,"from","","",16,[[]]],[11,"from","","",16,[[]]],[11,"from","","",16,[[]]],[11,"from","","",16,[[]]],[11,"from","","",16,[[]]],[11,"from","","",16,[[]]],[11,"from","","",16,[[]]],[11,"from","","",16,[[]]],[11,"from","","",16,[[]]],[11,"from","","",16,[[]]],[11,"from","","",16,[[]]],[11,"from","","",16,[[]]],[11,"from","","",16,[[]]],[11,"from","","",16,[[]]],[11,"from","","",16,[[]]],[11,"from","","",16,[[]]],[11,"from","","",16,[[]]],[11,"from","","",16,[[]]],[11,"from","","",16,[[]]],[11,"from","","",16,[[["vec",3]]]],[11,"from","","",16,[[]]],[11,"from","","",16,[[["range",3]]]],[11,"from","","",16,[[["rangeinclusive",3]]]],[11,"from","","Make a list object from an array of Robjs.",16,[[["list",3]]]],[11,"from","","Make an expression object from an array of Robjs.",16,[[["expr",3]]]],[11,"from","","Make a raw object from bytes.",16,[[["raw",3]]]],[11,"from","","Make a symbol object.",16,[[["symbol",3]]]],[11,"from","","Make a primitive object, or NULL if not available.",16,[[["primitive",3]]]],[11,"from","","Convert a wrapper to an R language object.",16,[[["lang",3]]]],[11,"from","","Convert a wrapper to an R environment object.",16,[[["env",3]]]],[11,"from","","Convert a wrapper to a LISTSXP object.",16,[[["pairlist",3]]]],[11,"from","","",1,[[]]],[11,"from","","",16,[[["vector",6]]]],[11,"from","","",16,[[["array",3]]]],[11,"from","","",16,[[["array",3]]]],[11,"size_hint","","",23,[[]]],[11,"next","","",23,[[],["option",4]]],[11,"nth","","",23,[[],["option",4]]],[11,"next","","",13,[[],["option",4]]],[11,"next","","",14,[[],["option",4]]],[11,"size_hint","","",15,[[]]],[11,"next","","",15,[[],["option",4]]],[11,"nth","","",15,[[],["option",4]]],[11,"clone","","",0,[[]]],[11,"clone","","",23,[[],["listiter",3]]],[11,"clone","","",13,[[],["pairlistiter",3]]],[11,"clone","","",14,[[],["pairlisttagiter",3]]],[11,"clone","","",15,[[],["striter",3]]],[11,"clone","","",16,[[]]],[11,"clone","","",1,[[],["symbol",3]]],[11,"clone","","",2,[[],["character",3]]],[11,"clone","","",3,[[],["raw",3]]],[11,"clone","","",4,[[],["lang",3]]],[11,"clone","","",5,[[],["pairlist",3]]],[11,"clone","","",6,[[],["list",3]]],[11,"clone","","",7,[[],["expr",3]]],[11,"clone","","",8,[[],["env",3]]],[11,"clone","","",9,[[],["func",3]]],[11,"clone","","",10,[[],["promise",3]]],[11,"clone","","",11,[[],["primitive",3]]],[11,"default","","",16,[[]]],[11,"eq","","",12,[[["error",4]]]],[11,"ne","","",12,[[["error",4]]]],[11,"eq","","",0,[[["bool",3]]]],[11,"ne","","",0,[[["bool",3]]]],[11,"eq","","",16,[[]]],[11,"eq","","",16,[[]]],[11,"eq","","",16,[[]]],[11,"eq","","",16,[[["robj",4]]]],[11,"eq","","",1,[[["symbol",3]]]],[11,"ne","","",1,[[["symbol",3]]]],[11,"eq","","",2,[[["character",3]]]],[11,"ne","","",2,[[["character",3]]]],[11,"eq","","",3,[[["raw",3]]]],[11,"ne","","",3,[[["raw",3]]]],[11,"eq","","",4,[[["lang",3]]]],[11,"ne","","",4,[[["lang",3]]]],[11,"eq","","",5,[[["pairlist",3]]]],[11,"ne","","",5,[[["pairlist",3]]]],[11,"eq","","",6,[[["list",3]]]],[11,"ne","","",6,[[["list",3]]]],[11,"eq","","",7,[[["expr",3]]]],[11,"ne","","",7,[[["expr",3]]]],[11,"eq","","",8,[[["env",3]]]],[11,"ne","","",8,[[["env",3]]]],[11,"eq","","",9,[[["func",3]]]],[11,"ne","","",9,[[["func",3]]]],[11,"eq","","",10,[[["promise",3]]]],[11,"ne","","",10,[[["promise",3]]]],[11,"eq","","",11,[[["primitive",3]]]],[11,"ne","","",11,[[["primitive",3]]]],[11,"eq","","",17,[[["array",3]]]],[11,"ne","","",17,[[["array",3]]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",23,[[["formatter",3]],["result",6]]],[11,"fmt","","",13,[[["formatter",3]],["result",6]]],[11,"fmt","","",14,[[["formatter",3]],["result",6]]],[11,"fmt","","",15,[[["formatter",3]],["result",6]]],[11,"fmt","","",16,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",11,[[["formatter",3]],["result",6]]],[11,"fmt","","",17,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"div","","Divide two R objects, consuming the left hand side. panics…",16,[[]]],[11,"sub","","Subtract two R objects, consuming the left hand side.…",16,[[]]],[11,"add","","Add two R objects, consuming the left hand side. panics on…",16,[[]]],[11,"mul","","Multiply two R objects, consuming the left hand side.…",16,[[]]],[11,"index","","Zero-based indexing in row, column order.",17,[[]]],[11,"index_mut","","Zero-based mutable indexing in row, column order.",17,[[]]],[11,"source","","",12,[[],[["option",4],["error",8]]]],[11,"from_robj","","",18,[[["robj",4]],["result",4]]],[11,"sexptype","","",19,[[],["sexptype",6]]],[11,"to_real","","",19,[[]]],[11,"to_integer","","",19,[[]]],[11,"to_logical","","",19,[[]]],[11,"to_raw","","",19,[[]]],[11,"to_sexp","","",19,[[],["sexp",6]]],[11,"collect_robj","","Convert a wide range of iterators to Robj.",20,[[],["robj",4]]],[11,"as_typed_slice","","",21,[[],["option",4]]],[11,"as_typed_slice_mut","","",21,[[],["option",4]]],[11,"new","","Make a new vector type.",27,[[]]],[11,"nrows","","Get the number of rows.",27,[[]]],[11,"new","","Create a new matrix wrapper.",28,[[]]],[11,"nrows","","Get the number of rows.",28,[[]]],[11,"ncols","","Get the number of columns.",28,[[]]],[11,"new","","Create a new matrix wrapper.",29,[[]]],[11,"nrows","","Get the number of rows.",29,[[]]],[11,"ncols","","Get the number of columns.",29,[[]]],[11,"nsub","","Get the number of submatrices.",29,[[]]]],"p":[[3,"Bool"],[3,"Symbol"],[3,"Character"],[3,"Raw"],[3,"Lang"],[3,"Pairlist"],[3,"List"],[3,"Expr"],[3,"Env"],[3,"Func"],[3,"Promise"],[3,"Primitive"],[4,"Error"],[3,"PairlistIter"],[3,"PairlistTagIter"],[3,"StrIter"],[4,"Robj"],[3,"Array"],[8,"FromRobj"],[8,"ToVectorValue"],[8,"RobjItertools"],[8,"AsTypedSlice"],[8,"IsNA"],[3,"ListIter"],[6,"IntegerIter"],[6,"RealIter"],[6,"LogicalIter"],[6,"Vector"],[6,"Matrix"],[6,"Matrix3D"]]},\
"extendr_engine":{"doc":"A sigleton instance of the R interpreter.","i":[[5,"start_r","extendr_engine","",null,[[]]],[5,"end_r","","Close down the R interpreter. Note you won\'t be able to…",null,[[]]]],"p":[]},\
"extendr_macros":{"doc":"Macros for generating wrappers for rust functions.","i":[[23,"extendr","extendr_macros","Generate bindings for a single function.",null,null],[14,"extendr_module","","Define a module and export symbols to R Example:",null,null]],"p":[]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);