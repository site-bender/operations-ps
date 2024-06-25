// Generated by purs version 0.15.15
import * as Control_Category from "../Control.Category/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_String_Regex from "../Data.String.Regex/index.js";
import * as Partial_Unsafe from "../Partial.Unsafe/index.js";
var identity = /* #__PURE__ */ Control_Category.identity(Control_Category.categoryFn);
var unsafeRegex = function (s) {
    return function (f) {
        return Data_Either.either(Partial_Unsafe.unsafeCrashWith)(identity)(Data_String_Regex.regex(s)(f));
    };
};
export {
    unsafeRegex
};
