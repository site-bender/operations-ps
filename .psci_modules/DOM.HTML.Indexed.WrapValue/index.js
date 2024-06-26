import * as Data_Ordering from "../Data.Ordering/index.js";
var Hard = /* #__PURE__ */ (function () {
    function Hard() {

    };
    Hard.value = new Hard();
    return Hard;
})();
var Soft = /* #__PURE__ */ (function () {
    function Soft() {

    };
    Soft.value = new Soft();
    return Soft;
})();
var renderWrapValue = function (v) {
    if (v instanceof Hard) {
        return "hard";
    };
    if (v instanceof Soft) {
        return "soft";
    };
    throw new Error("Failed pattern match at DOM.HTML.Indexed.WrapValue (line 13, column 19 - line 15, column 17): " + [ v.constructor.name ]);
};
var eqWrapValue = {
    eq: function (x) {
        return function (y) {
            if (x instanceof Hard && y instanceof Hard) {
                return true;
            };
            if (x instanceof Soft && y instanceof Soft) {
                return true;
            };
            return false;
        };
    }
};
var ordWrapValue = {
    compare: function (x) {
        return function (y) {
            if (x instanceof Hard && y instanceof Hard) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof Hard) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof Hard) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof Soft && y instanceof Soft) {
                return Data_Ordering.EQ.value;
            };
            throw new Error("Failed pattern match at DOM.HTML.Indexed.WrapValue (line 0, column 0 - line 0, column 0): " + [ x.constructor.name, y.constructor.name ]);
        };
    },
    Eq0: function () {
        return eqWrapValue;
    }
};
export {
    Hard,
    Soft,
    renderWrapValue,
    eqWrapValue,
    ordWrapValue
};
