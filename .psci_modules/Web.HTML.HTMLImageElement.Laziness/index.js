import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Ordering from "../Data.Ordering/index.js";
var Eager = /* #__PURE__ */ (function () {
    function Eager() {

    };
    Eager.value = new Eager();
    return Eager;
})();
var Lazy = /* #__PURE__ */ (function () {
    function Lazy() {

    };
    Lazy.value = new Lazy();
    return Lazy;
})();
var showDecodingHint = {
    show: function (v) {
        if (v instanceof Eager) {
            return "Eager";
        };
        if (v instanceof Lazy) {
            return "Lazy";
        };
        throw new Error("Failed pattern match at Web.HTML.HTMLImageElement.Laziness (line 18, column 10 - line 20, column 19): " + [ v.constructor.name ]);
    }
};
var print = function (v) {
    if (v instanceof Eager) {
        return "eager";
    };
    if (v instanceof Lazy) {
        return "lazy";
    };
    throw new Error("Failed pattern match at Web.HTML.HTMLImageElement.Laziness (line 30, column 9 - line 32, column 17): " + [ v.constructor.name ]);
};
var parse = function (v) {
    if (v === "") {
        return new Data_Maybe.Just(Eager.value);
    };
    if (v === "eager") {
        return new Data_Maybe.Just(Eager.value);
    };
    if (v === "lazy") {
        return new Data_Maybe.Just(Lazy.value);
    };
    return Data_Maybe.Nothing.value;
};
var eqDecodingHint = {
    eq: function (x) {
        return function (y) {
            if (x instanceof Eager && y instanceof Eager) {
                return true;
            };
            if (x instanceof Lazy && y instanceof Lazy) {
                return true;
            };
            return false;
        };
    }
};
var ordDecodingHint = {
    compare: function (x) {
        return function (y) {
            if (x instanceof Eager && y instanceof Eager) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof Eager) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof Eager) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof Lazy && y instanceof Lazy) {
                return Data_Ordering.EQ.value;
            };
            throw new Error("Failed pattern match at Web.HTML.HTMLImageElement.Laziness (line 0, column 0 - line 0, column 0): " + [ x.constructor.name, y.constructor.name ]);
        };
    },
    Eq0: function () {
        return eqDecodingHint;
    }
};
export {
    Eager,
    Lazy,
    parse,
    print,
    eqDecodingHint,
    ordDecodingHint,
    showDecodingHint
};
