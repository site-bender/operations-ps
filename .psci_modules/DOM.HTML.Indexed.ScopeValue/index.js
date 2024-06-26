import * as Data_Ordering from "../Data.Ordering/index.js";
var ScopeRow = /* #__PURE__ */ (function () {
    function ScopeRow() {

    };
    ScopeRow.value = new ScopeRow();
    return ScopeRow;
})();
var ScopeCol = /* #__PURE__ */ (function () {
    function ScopeCol() {

    };
    ScopeCol.value = new ScopeCol();
    return ScopeCol;
})();
var ScopeRowGroup = /* #__PURE__ */ (function () {
    function ScopeRowGroup() {

    };
    ScopeRowGroup.value = new ScopeRowGroup();
    return ScopeRowGroup;
})();
var ScopeColGroup = /* #__PURE__ */ (function () {
    function ScopeColGroup() {

    };
    ScopeColGroup.value = new ScopeColGroup();
    return ScopeColGroup;
})();
var ScopeAuto = /* #__PURE__ */ (function () {
    function ScopeAuto() {

    };
    ScopeAuto.value = new ScopeAuto();
    return ScopeAuto;
})();
var renderScopeValue = function (v) {
    if (v instanceof ScopeRow) {
        return "row";
    };
    if (v instanceof ScopeCol) {
        return "col";
    };
    if (v instanceof ScopeRowGroup) {
        return "rowgroup";
    };
    if (v instanceof ScopeColGroup) {
        return "colgroup";
    };
    if (v instanceof ScopeAuto) {
        return "auto";
    };
    throw new Error("Failed pattern match at DOM.HTML.Indexed.ScopeValue (line 16, column 20 - line 21, column 22): " + [ v.constructor.name ]);
};
var eqScopeValue = {
    eq: function (x) {
        return function (y) {
            if (x instanceof ScopeRow && y instanceof ScopeRow) {
                return true;
            };
            if (x instanceof ScopeCol && y instanceof ScopeCol) {
                return true;
            };
            if (x instanceof ScopeRowGroup && y instanceof ScopeRowGroup) {
                return true;
            };
            if (x instanceof ScopeColGroup && y instanceof ScopeColGroup) {
                return true;
            };
            if (x instanceof ScopeAuto && y instanceof ScopeAuto) {
                return true;
            };
            return false;
        };
    }
};
var ordScopeValue = {
    compare: function (x) {
        return function (y) {
            if (x instanceof ScopeRow && y instanceof ScopeRow) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof ScopeRow) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof ScopeRow) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof ScopeCol && y instanceof ScopeCol) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof ScopeCol) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof ScopeCol) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof ScopeRowGroup && y instanceof ScopeRowGroup) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof ScopeRowGroup) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof ScopeRowGroup) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof ScopeColGroup && y instanceof ScopeColGroup) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof ScopeColGroup) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof ScopeColGroup) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof ScopeAuto && y instanceof ScopeAuto) {
                return Data_Ordering.EQ.value;
            };
            throw new Error("Failed pattern match at DOM.HTML.Indexed.ScopeValue (line 0, column 0 - line 0, column 0): " + [ x.constructor.name, y.constructor.name ]);
        };
    },
    Eq0: function () {
        return eqScopeValue;
    }
};
export {
    ScopeRow,
    ScopeCol,
    ScopeRowGroup,
    ScopeColGroup,
    ScopeAuto,
    renderScopeValue,
    eqScopeValue,
    ordScopeValue
};
