// | This module defines functions for comparing numbers.
import * as Data_Number from "../Data.Number/index.js";

// | A newtype for (small) numbers. It is used as an argument for `eqAbsolute`.
var Tolerance = function (x) {
    return x;
};

// | A newtype for (small) numbers, typically in the range *[0:1]*. It is used
// | as an argument for `eqRelative`.
var Fraction = function (x) {
    return x;
};

// | Compare two `Number`s and return `true` if they are equal up to the
// | given *relative* error (`Fraction` parameter).
// |
// | This comparison is scale-invariant, i.e. if `eqRelative frac x y`, then
// | `eqRelative frac (s * x) (s * y)` for a given scale factor `s > 0.0`
// | (unless one of x, y is exactly `0.0`).
// |
// | Note that the relation that `eqRelative frac` induces on `Number` is
// | not an equivalence relation. It is reflexive and symmetric, but not
// | transitive.
// |
// | Example:
// | ``` purs
// | > (eqRelative (Fraction 0.01)) 133.7 133.0
// | true
// |
// | > (eqRelative (Fraction 0.001)) 133.7 133.0
// | false
// |
// | > (eqRelative (Fraction 0.01)) (0.1 + 0.2) 0.3
// | true
// | ```
var eqRelative = function (v) {
    return function (v1) {
        return function (v2) {
            if (v1 === 0.0) {
                return Data_Number.abs(v2) <= v;
            };
            if (v2 === 0.0) {
                return Data_Number.abs(v1) <= v;
            };
            return Data_Number.abs(v1 - v2) <= (v * Data_Number.abs(v1 + v2)) / 2.0;
        };
    };
};

// | Test if two numbers are approximately equal, up to a relative difference
// | of one part in a million:
// | ``` purs
// | eqApproximate = eqRelative (Fraction 1.0e-6)
// | ```
// |
// | Example
// | ``` purs
// | > 0.1 + 0.2 == 0.3
// | false
// |
// | > 0.1 + 0.2 ≅ 0.3
// | true
// | ```
var eqApproximate = /* #__PURE__ */ eqRelative(1.0e-6);

// | The complement of `eqApproximate`.
var neqApproximate = function (x) {
    return function (y) {
        return !eqApproximate(x)(y);
    };
};

// | Compare two `Number`s and return `true` if they are equal up to the given
// | (absolute) tolerance value. Note that this type of comparison is *not*
// | scale-invariant. The relation induced by `(eqAbsolute (Tolerance eps))` is
// | symmetric and reflexive, but not transitive.
// |
// | Example:
// | ``` purs
// | > (eqAbsolute (Tolerance 1.0)) 133.7 133.0
// | true
// |
// | > (eqAbsolute (Tolerance 0.1)) 133.7 133.0
// | false
// | ```
var eqAbsolute = function (v) {
    return function (x) {
        return function (y) {
            return Data_Number.abs(x - y) <= v;
        };
    };
};
export {
    Fraction,
    eqRelative,
    eqApproximate,
    neqApproximate,
    Tolerance,
    eqAbsolute
};
