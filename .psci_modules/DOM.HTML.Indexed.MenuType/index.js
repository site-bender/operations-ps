import * as Data_Ordering from "../Data.Ordering/index.js";
var MenuList = /* #__PURE__ */ (function () {
    function MenuList() {

    };
    MenuList.value = new MenuList();
    return MenuList;
})();
var MenuContext = /* #__PURE__ */ (function () {
    function MenuContext() {

    };
    MenuContext.value = new MenuContext();
    return MenuContext;
})();
var MenuToolbar = /* #__PURE__ */ (function () {
    function MenuToolbar() {

    };
    MenuToolbar.value = new MenuToolbar();
    return MenuToolbar;
})();
var renderMenuType = function (v) {
    if (v instanceof MenuList) {
        return "list";
    };
    if (v instanceof MenuContext) {
        return "context";
    };
    if (v instanceof MenuToolbar) {
        return "toolbar";
    };
    throw new Error("Failed pattern match at DOM.HTML.Indexed.MenuType (line 14, column 18 - line 17, column 27): " + [ v.constructor.name ]);
};
var eqMenuType = {
    eq: function (x) {
        return function (y) {
            if (x instanceof MenuList && y instanceof MenuList) {
                return true;
            };
            if (x instanceof MenuContext && y instanceof MenuContext) {
                return true;
            };
            if (x instanceof MenuToolbar && y instanceof MenuToolbar) {
                return true;
            };
            return false;
        };
    }
};
var ordMenuType = {
    compare: function (x) {
        return function (y) {
            if (x instanceof MenuList && y instanceof MenuList) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof MenuList) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof MenuList) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof MenuContext && y instanceof MenuContext) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof MenuContext) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof MenuContext) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof MenuToolbar && y instanceof MenuToolbar) {
                return Data_Ordering.EQ.value;
            };
            throw new Error("Failed pattern match at DOM.HTML.Indexed.MenuType (line 0, column 0 - line 0, column 0): " + [ x.constructor.name, y.constructor.name ]);
        };
    },
    Eq0: function () {
        return eqMenuType;
    }
};
export {
    MenuList,
    MenuContext,
    MenuToolbar,
    renderMenuType,
    eqMenuType,
    ordMenuType
};
