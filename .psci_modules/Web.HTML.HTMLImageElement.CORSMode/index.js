import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Ordering from "../Data.Ordering/index.js";
var Anonymous = /* #__PURE__ */ (function () {
    function Anonymous() {

    };
    Anonymous.value = new Anonymous();
    return Anonymous;
})();
var UseCredentials = /* #__PURE__ */ (function () {
    function UseCredentials() {

    };
    UseCredentials.value = new UseCredentials();
    return UseCredentials;
})();
var showDecodingHint = {
    show: function (v) {
        if (v instanceof Anonymous) {
            return "Anonymous";
        };
        if (v instanceof UseCredentials) {
            return "UseCredentials";
        };
        throw new Error("Failed pattern match at Web.HTML.HTMLImageElement.CORSMode (line 18, column 10 - line 20, column 39): " + [ v.constructor.name ]);
    }
};
var print = function (v) {
    if (v instanceof Anonymous) {
        return "anonymous";
    };
    if (v instanceof UseCredentials) {
        return "use-credentials";
    };
    throw new Error("Failed pattern match at Web.HTML.HTMLImageElement.CORSMode (line 30, column 9 - line 32, column 38): " + [ v.constructor.name ]);
};
var parse = function (v) {
    if (v === "") {
        return new Data_Maybe.Just(Anonymous.value);
    };
    if (v === "anonymous") {
        return new Data_Maybe.Just(Anonymous.value);
    };
    if (v === "use-credentials") {
        return new Data_Maybe.Just(UseCredentials.value);
    };
    return Data_Maybe.Nothing.value;
};
var eqCORSMode = {
    eq: function (x) {
        return function (y) {
            if (x instanceof Anonymous && y instanceof Anonymous) {
                return true;
            };
            if (x instanceof UseCredentials && y instanceof UseCredentials) {
                return true;
            };
            return false;
        };
    }
};
var ordCORSMode = {
    compare: function (x) {
        return function (y) {
            if (x instanceof Anonymous && y instanceof Anonymous) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof Anonymous) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof Anonymous) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof UseCredentials && y instanceof UseCredentials) {
                return Data_Ordering.EQ.value;
            };
            throw new Error("Failed pattern match at Web.HTML.HTMLImageElement.CORSMode (line 0, column 0 - line 0, column 0): " + [ x.constructor.name, y.constructor.name ]);
        };
    },
    Eq0: function () {
        return eqCORSMode;
    }
};
export {
    Anonymous,
    UseCredentials,
    parse,
    print,
    eqCORSMode,
    ordCORSMode,
    showDecodingHint
};
