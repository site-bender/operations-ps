import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Ordering from "../Data.Ordering/index.js";
var Visible = /* #__PURE__ */ (function () {
    function Visible() {

    };
    Visible.value = new Visible();
    return Visible;
})();
var Hidden = /* #__PURE__ */ (function () {
    function Hidden() {

    };
    Hidden.value = new Hidden();
    return Hidden;
})();
var showVisibilityState = {
    show: function (v) {
        if (v instanceof Visible) {
            return "Visible";
        };
        if (v instanceof Hidden) {
            return "Hidden";
        };
        throw new Error("Failed pattern match at Web.HTML.HTMLDocument.VisibilityState (line 15, column 10 - line 17, column 23): " + [ v.constructor.name ]);
    }
};
var print = function (v) {
    if (v instanceof Visible) {
        return "visible";
    };
    if (v instanceof Hidden) {
        return "hidden";
    };
    throw new Error("Failed pattern match at Web.HTML.HTMLDocument.VisibilityState (line 20, column 9 - line 22, column 21): " + [ v.constructor.name ]);
};
var parse = function (v) {
    if (v === "visible") {
        return new Data_Maybe.Just(Visible.value);
    };
    if (v === "hidden") {
        return new Data_Maybe.Just(Hidden.value);
    };
    return Data_Maybe.Nothing.value;
};
var eqVisibilityState = {
    eq: function (x) {
        return function (y) {
            if (x instanceof Visible && y instanceof Visible) {
                return true;
            };
            if (x instanceof Hidden && y instanceof Hidden) {
                return true;
            };
            return false;
        };
    }
};
var ordVisibilityState = {
    compare: function (x) {
        return function (y) {
            if (x instanceof Visible && y instanceof Visible) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof Visible) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof Visible) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof Hidden && y instanceof Hidden) {
                return Data_Ordering.EQ.value;
            };
            throw new Error("Failed pattern match at Web.HTML.HTMLDocument.VisibilityState (line 0, column 0 - line 0, column 0): " + [ x.constructor.name, y.constructor.name ]);
        };
    },
    Eq0: function () {
        return eqVisibilityState;
    }
};
export {
    Visible,
    Hidden,
    print,
    parse,
    eqVisibilityState,
    ordVisibilityState,
    showVisibilityState
};
