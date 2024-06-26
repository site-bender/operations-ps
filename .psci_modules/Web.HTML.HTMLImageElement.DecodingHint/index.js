import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Ordering from "../Data.Ordering/index.js";
var Sync = /* #__PURE__ */ (function () {
    function Sync() {

    };
    Sync.value = new Sync();
    return Sync;
})();
var Async = /* #__PURE__ */ (function () {
    function Async() {

    };
    Async.value = new Async();
    return Async;
})();
var Auto = /* #__PURE__ */ (function () {
    function Auto() {

    };
    Auto.value = new Auto();
    return Auto;
})();
var showDecodingHint = {
    show: function (v) {
        if (v instanceof Sync) {
            return "Sync";
        };
        if (v instanceof Async) {
            return "Async";
        };
        if (v instanceof Auto) {
            return "Auto";
        };
        throw new Error("Failed pattern match at Web.HTML.HTMLImageElement.DecodingHint (line 19, column 10 - line 22, column 19): " + [ v.constructor.name ]);
    }
};
var print = function (v) {
    if (v instanceof Sync) {
        return "sync";
    };
    if (v instanceof Async) {
        return "async";
    };
    if (v instanceof Auto) {
        return "auto";
    };
    throw new Error("Failed pattern match at Web.HTML.HTMLImageElement.DecodingHint (line 33, column 9 - line 36, column 17): " + [ v.constructor.name ]);
};
var parse = function (v) {
    if (v === "") {
        return new Data_Maybe.Just(Auto.value);
    };
    if (v === "sync") {
        return new Data_Maybe.Just(Sync.value);
    };
    if (v === "async") {
        return new Data_Maybe.Just(Async.value);
    };
    if (v === "auto") {
        return new Data_Maybe.Just(Auto.value);
    };
    return Data_Maybe.Nothing.value;
};
var eqDecodingHint = {
    eq: function (x) {
        return function (y) {
            if (x instanceof Sync && y instanceof Sync) {
                return true;
            };
            if (x instanceof Async && y instanceof Async) {
                return true;
            };
            if (x instanceof Auto && y instanceof Auto) {
                return true;
            };
            return false;
        };
    }
};
var ordDecodingHint = {
    compare: function (x) {
        return function (y) {
            if (x instanceof Sync && y instanceof Sync) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof Sync) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof Sync) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof Async && y instanceof Async) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof Async) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof Async) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof Auto && y instanceof Auto) {
                return Data_Ordering.EQ.value;
            };
            throw new Error("Failed pattern match at Web.HTML.HTMLImageElement.DecodingHint (line 0, column 0 - line 0, column 0): " + [ x.constructor.name, y.constructor.name ]);
        };
    },
    Eq0: function () {
        return eqDecodingHint;
    }
};
export {
    Sync,
    Async,
    Auto,
    parse,
    print,
    eqDecodingHint,
    ordDecodingHint,
    showDecodingHint
};
