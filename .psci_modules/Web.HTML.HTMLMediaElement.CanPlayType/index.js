import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Ordering from "../Data.Ordering/index.js";
var Unspecified = /* #__PURE__ */ (function () {
    function Unspecified() {

    };
    Unspecified.value = new Unspecified();
    return Unspecified;
})();
var Maybe = /* #__PURE__ */ (function () {
    function Maybe() {

    };
    Maybe.value = new Maybe();
    return Maybe;
})();
var Probably = /* #__PURE__ */ (function () {
    function Probably() {

    };
    Probably.value = new Probably();
    return Probably;
})();
var showCanPlayType = {
    show: function (v) {
        if (v instanceof Unspecified) {
            return "Unspecified";
        };
        if (v instanceof Maybe) {
            return "Maybe";
        };
        if (v instanceof Probably) {
            return "Probably";
        };
        throw new Error("Failed pattern match at Web.HTML.HTMLMediaElement.CanPlayType (line 16, column 10 - line 19, column 27): " + [ v.constructor.name ]);
    }
};
var print = function (v) {
    if (v instanceof Unspecified) {
        return "";
    };
    if (v instanceof Maybe) {
        return "maybe";
    };
    if (v instanceof Probably) {
        return "probably";
    };
    throw new Error("Failed pattern match at Web.HTML.HTMLMediaElement.CanPlayType (line 29, column 9 - line 32, column 25): " + [ v.constructor.name ]);
};
var parse = function (v) {
    if (v === "") {
        return new Data_Maybe.Just(Unspecified.value);
    };
    if (v === "maybe") {
        return new Data_Maybe.Just(Maybe.value);
    };
    if (v === "probably") {
        return new Data_Maybe.Just(Probably.value);
    };
    return Data_Maybe.Nothing.value;
};
var eqCanPlayType = {
    eq: function (x) {
        return function (y) {
            if (x instanceof Unspecified && y instanceof Unspecified) {
                return true;
            };
            if (x instanceof Maybe && y instanceof Maybe) {
                return true;
            };
            if (x instanceof Probably && y instanceof Probably) {
                return true;
            };
            return false;
        };
    }
};
var ordCanPlayType = {
    compare: function (x) {
        return function (y) {
            if (x instanceof Unspecified && y instanceof Unspecified) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof Unspecified) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof Unspecified) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof Maybe && y instanceof Maybe) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof Maybe) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof Maybe) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof Probably && y instanceof Probably) {
                return Data_Ordering.EQ.value;
            };
            throw new Error("Failed pattern match at Web.HTML.HTMLMediaElement.CanPlayType (line 0, column 0 - line 0, column 0): " + [ x.constructor.name, y.constructor.name ]);
        };
    },
    Eq0: function () {
        return eqCanPlayType;
    }
};
export {
    Unspecified,
    Maybe,
    Probably,
    parse,
    print,
    eqCanPlayType,
    ordCanPlayType,
    showCanPlayType
};
