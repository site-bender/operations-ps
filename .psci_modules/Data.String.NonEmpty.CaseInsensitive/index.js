import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Show from "../Data.Show/index.js";
import * as Data_String_NonEmpty_Internal from "../Data.String.NonEmpty.Internal/index.js";
var show = /* #__PURE__ */ Data_Show.show(Data_String_NonEmpty_Internal.showNonEmptyString);
var eq = /* #__PURE__ */ Data_Eq.eq(Data_String_NonEmpty_Internal.eqNonEmptyString);
var compare = /* #__PURE__ */ Data_Ord.compare(Data_String_NonEmpty_Internal.ordNonEmptyString);

// | A newtype for case insensitive string comparisons and ordering.
var CaseInsensitiveNonEmptyString = function (x) {
    return x;
};
var showCaseInsensitiveNonEmptyString = {
    show: function (v) {
        return "(CaseInsensitiveNonEmptyString " + (show(v) + ")");
    }
};
var newtypeCaseInsensitiveNonEmptyString = {
    Coercible0: function () {
        return undefined;
    }
};
var eqCaseInsensitiveNonEmptyString = {
    eq: function (v) {
        return function (v1) {
            return eq(Data_String_NonEmpty_Internal.toLower(v))(Data_String_NonEmpty_Internal.toLower(v1));
        };
    }
};
var ordCaseInsensitiveNonEmptyString = {
    compare: function (v) {
        return function (v1) {
            return compare(Data_String_NonEmpty_Internal.toLower(v))(Data_String_NonEmpty_Internal.toLower(v1));
        };
    },
    Eq0: function () {
        return eqCaseInsensitiveNonEmptyString;
    }
};
export {
    CaseInsensitiveNonEmptyString,
    eqCaseInsensitiveNonEmptyString,
    ordCaseInsensitiveNonEmptyString,
    showCaseInsensitiveNonEmptyString,
    newtypeCaseInsensitiveNonEmptyString
};