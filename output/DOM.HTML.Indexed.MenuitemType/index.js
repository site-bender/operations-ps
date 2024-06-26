// Generated by purs version 0.15.15
import * as Data_Ordering from "../Data.Ordering/index.js";
var MenuitemCommand = /* #__PURE__ */ (function () {
    function MenuitemCommand() {

    };
    MenuitemCommand.value = new MenuitemCommand();
    return MenuitemCommand;
})();
var MenuitemCheckbox = /* #__PURE__ */ (function () {
    function MenuitemCheckbox() {

    };
    MenuitemCheckbox.value = new MenuitemCheckbox();
    return MenuitemCheckbox;
})();
var MenuitemRadio = /* #__PURE__ */ (function () {
    function MenuitemRadio() {

    };
    MenuitemRadio.value = new MenuitemRadio();
    return MenuitemRadio;
})();
var renderMenuitemType = function (v) {
    if (v instanceof MenuitemCommand) {
        return "command";
    };
    if (v instanceof MenuitemCheckbox) {
        return "checkbox";
    };
    if (v instanceof MenuitemRadio) {
        return "radio";
    };
    throw new Error("Failed pattern match at DOM.HTML.Indexed.MenuitemType (line 14, column 22 - line 17, column 27): " + [ v.constructor.name ]);
};
var eqMenuitemType = {
    eq: function (x) {
        return function (y) {
            if (x instanceof MenuitemCommand && y instanceof MenuitemCommand) {
                return true;
            };
            if (x instanceof MenuitemCheckbox && y instanceof MenuitemCheckbox) {
                return true;
            };
            if (x instanceof MenuitemRadio && y instanceof MenuitemRadio) {
                return true;
            };
            return false;
        };
    }
};
var ordMenuitemType = {
    compare: function (x) {
        return function (y) {
            if (x instanceof MenuitemCommand && y instanceof MenuitemCommand) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof MenuitemCommand) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof MenuitemCommand) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof MenuitemCheckbox && y instanceof MenuitemCheckbox) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof MenuitemCheckbox) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof MenuitemCheckbox) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof MenuitemRadio && y instanceof MenuitemRadio) {
                return Data_Ordering.EQ.value;
            };
            throw new Error("Failed pattern match at DOM.HTML.Indexed.MenuitemType (line 0, column 0 - line 0, column 0): " + [ x.constructor.name, y.constructor.name ]);
        };
    },
    Eq0: function () {
        return eqMenuitemType;
    }
};
export {
    MenuitemCommand,
    MenuitemCheckbox,
    MenuitemRadio,
    renderMenuitemType,
    eqMenuitemType,
    ordMenuitemType
};
