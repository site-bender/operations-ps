import * as Data_Ordering from "../Data.Ordering/index.js";
var DirLTR = /* #__PURE__ */ (function () {
    function DirLTR() {

    };
    DirLTR.value = new DirLTR();
    return DirLTR;
})();
var DirRTL = /* #__PURE__ */ (function () {
    function DirRTL() {

    };
    DirRTL.value = new DirRTL();
    return DirRTL;
})();
var DirAuto = /* #__PURE__ */ (function () {
    function DirAuto() {

    };
    DirAuto.value = new DirAuto();
    return DirAuto;
})();
var renderDirValue = function (v) {
    if (v instanceof DirLTR) {
        return "ltr";
    };
    if (v instanceof DirRTL) {
        return "rtl";
    };
    if (v instanceof DirAuto) {
        return "auto";
    };
    throw new Error("Failed pattern match at DOM.HTML.Indexed.DirValue (line 14, column 18 - line 17, column 20): " + [ v.constructor.name ]);
};
var eqDirValue = {
    eq: function (x) {
        return function (y) {
            if (x instanceof DirLTR && y instanceof DirLTR) {
                return true;
            };
            if (x instanceof DirRTL && y instanceof DirRTL) {
                return true;
            };
            if (x instanceof DirAuto && y instanceof DirAuto) {
                return true;
            };
            return false;
        };
    }
};
var ordDirValue = {
    compare: function (x) {
        return function (y) {
            if (x instanceof DirLTR && y instanceof DirLTR) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof DirLTR) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof DirLTR) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof DirRTL && y instanceof DirRTL) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof DirRTL) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof DirRTL) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof DirAuto && y instanceof DirAuto) {
                return Data_Ordering.EQ.value;
            };
            throw new Error("Failed pattern match at DOM.HTML.Indexed.DirValue (line 0, column 0 - line 0, column 0): " + [ x.constructor.name, y.constructor.name ]);
        };
    },
    Eq0: function () {
        return eqDirValue;
    }
};
export {
    DirLTR,
    DirRTL,
    DirAuto,
    renderDirValue,
    eqDirValue,
    ordDirValue
};
