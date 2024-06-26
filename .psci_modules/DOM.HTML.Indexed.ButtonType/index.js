import * as Data_Ordering from "../Data.Ordering/index.js";
var ButtonButton = /* #__PURE__ */ (function () {
    function ButtonButton() {

    };
    ButtonButton.value = new ButtonButton();
    return ButtonButton;
})();
var ButtonSubmit = /* #__PURE__ */ (function () {
    function ButtonSubmit() {

    };
    ButtonSubmit.value = new ButtonSubmit();
    return ButtonSubmit;
})();
var ButtonReset = /* #__PURE__ */ (function () {
    function ButtonReset() {

    };
    ButtonReset.value = new ButtonReset();
    return ButtonReset;
})();
var renderButtonType = function (v) {
    if (v instanceof ButtonButton) {
        return "button";
    };
    if (v instanceof ButtonSubmit) {
        return "submit";
    };
    if (v instanceof ButtonReset) {
        return "reset";
    };
    throw new Error("Failed pattern match at DOM.HTML.Indexed.ButtonType (line 14, column 20 - line 17, column 25): " + [ v.constructor.name ]);
};
var eqButtonType = {
    eq: function (x) {
        return function (y) {
            if (x instanceof ButtonButton && y instanceof ButtonButton) {
                return true;
            };
            if (x instanceof ButtonSubmit && y instanceof ButtonSubmit) {
                return true;
            };
            if (x instanceof ButtonReset && y instanceof ButtonReset) {
                return true;
            };
            return false;
        };
    }
};
var ordButtonType = {
    compare: function (x) {
        return function (y) {
            if (x instanceof ButtonButton && y instanceof ButtonButton) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof ButtonButton) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof ButtonButton) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof ButtonSubmit && y instanceof ButtonSubmit) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof ButtonSubmit) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof ButtonSubmit) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof ButtonReset && y instanceof ButtonReset) {
                return Data_Ordering.EQ.value;
            };
            throw new Error("Failed pattern match at DOM.HTML.Indexed.ButtonType (line 0, column 0 - line 0, column 0): " + [ x.constructor.name, y.constructor.name ]);
        };
    },
    Eq0: function () {
        return eqButtonType;
    }
};
export {
    ButtonButton,
    ButtonSubmit,
    ButtonReset,
    renderButtonType,
    eqButtonType,
    ordButtonType
};
