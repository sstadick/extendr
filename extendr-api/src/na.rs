use libR_sys::{R_IsNA, R_NaReal};
use crate::Bool;
/// Return true if this primitive is NA.
pub trait CanBeNA {
    fn is_na(&self) -> bool;
    fn na() -> Self;
}

impl CanBeNA for f64 {
    fn is_na(&self) -> bool {
        unsafe { R_IsNA(*self) != 0 }
    }

    fn na() -> f64 {
        unsafe{R_NaReal}
    }
}

impl CanBeNA for i32 {
    fn is_na(&self) -> bool {
        *self == i32::MIN
    }

    fn na() -> i32 {
        i32::MIN
    }
}

impl CanBeNA for Bool {
    fn is_na(&self) -> bool {
        self.0 == i32::MIN
    }

    fn na() -> Bool {
        Bool::from(i32::MIN)
    }
}

impl CanBeNA for &str {
    /// Check for NA in a string by address.
    fn is_na(&self) -> bool {
        self.as_ptr() == na_str().as_ptr()
    }

    fn na() -> Self {
        na_str()
    }
}

/// Special "NA" string that represents null strings.
/// ```
/// use extendr_api::prelude::*;
/// test! {
///     assert!(na_str().as_ptr() != "NA".as_ptr());
///     assert_eq!(na_str(), "NA");
///     assert_eq!("NA".is_na(), false);
///     assert_eq!(na_str().is_na(), true);
/// }
/// ```
pub fn na_str() -> &'static str {
    unsafe { std::str::from_utf8_unchecked(&[b'N', b'A']) }
}