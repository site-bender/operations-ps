import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Show from "../Data.Show/index.js";
import * as Data_String_Common from "../Data.String.Common/index.js";
var show = /* #__PURE__ */ Data_Show.show(Data_Show.showString);
var compare = /* #__PURE__ */ Data_Ord.compare(Data_Ord.ordString);

// | A newtype for case insensitive string comparisons and ordering.
var CaseInsensitiveString = function (x) {
    return x;
};
var showCaseInsensitiveString = {
    show: function (v) {
        return "(CaseInsensitiveString " + (show(v) + ")");
    }
};
var newtypeCaseInsensitiveString = {
    Coercible0: function () {
        return undefined;
    }
};
var eqCaseInsensitiveString = {
    eq: function (v) {
        return function (v1) {
            return Data_String_Common.toLower(v) === Data_String_Common.toLower(v1);
        };
    }
};
var ordCaseInsensitiveString = {
    compare: function (v) {
        return function (v1) {
            return compare(Data_String_Common.toLower(v))(Data_String_Common.toLower(v1));
        };
    },
    Eq0: function () {
        return eqCaseInsensitiveString;
    }
};
export {
    CaseInsensitiveString,
    eqCaseInsensitiveString,
    ordCaseInsensitiveString,
    showCaseInsensitiveString,
    newtypeCaseInsensitiveString
};
