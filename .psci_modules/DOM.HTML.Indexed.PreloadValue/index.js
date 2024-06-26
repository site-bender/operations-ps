import * as Data_Ordering from "../Data.Ordering/index.js";
var PreloadNone = /* #__PURE__ */ (function () {
    function PreloadNone() {

    };
    PreloadNone.value = new PreloadNone();
    return PreloadNone;
})();
var PreloadAuto = /* #__PURE__ */ (function () {
    function PreloadAuto() {

    };
    PreloadAuto.value = new PreloadAuto();
    return PreloadAuto;
})();
var PreloadMetadata = /* #__PURE__ */ (function () {
    function PreloadMetadata() {

    };
    PreloadMetadata.value = new PreloadMetadata();
    return PreloadMetadata;
})();
var renderPreloadValue = function (v) {
    if (v instanceof PreloadNone) {
        return "none";
    };
    if (v instanceof PreloadAuto) {
        return "auto";
    };
    if (v instanceof PreloadMetadata) {
        return "metadata";
    };
    throw new Error("Failed pattern match at DOM.HTML.Indexed.PreloadValue (line 14, column 22 - line 17, column 32): " + [ v.constructor.name ]);
};
var eqPreloadValue = {
    eq: function (x) {
        return function (y) {
            if (x instanceof PreloadNone && y instanceof PreloadNone) {
                return true;
            };
            if (x instanceof PreloadAuto && y instanceof PreloadAuto) {
                return true;
            };
            if (x instanceof PreloadMetadata && y instanceof PreloadMetadata) {
                return true;
            };
            return false;
        };
    }
};
var ordPreloadValue = {
    compare: function (x) {
        return function (y) {
            if (x instanceof PreloadNone && y instanceof PreloadNone) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof PreloadNone) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof PreloadNone) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof PreloadAuto && y instanceof PreloadAuto) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof PreloadAuto) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof PreloadAuto) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof PreloadMetadata && y instanceof PreloadMetadata) {
                return Data_Ordering.EQ.value;
            };
            throw new Error("Failed pattern match at DOM.HTML.Indexed.PreloadValue (line 0, column 0 - line 0, column 0): " + [ x.constructor.name, y.constructor.name ]);
        };
    },
    Eq0: function () {
        return eqPreloadValue;
    }
};
export {
    PreloadNone,
    PreloadAuto,
    PreloadMetadata,
    renderPreloadValue,
    eqPreloadValue,
    ordPreloadValue
};
