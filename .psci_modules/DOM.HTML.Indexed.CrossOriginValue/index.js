import * as Data_Ordering from "../Data.Ordering/index.js";
var Anonymous = /* #__PURE__ */ (function () {
    function Anonymous() {

    };
    Anonymous.value = new Anonymous();
    return Anonymous;
})();
var UseCredentials = /* #__PURE__ */ (function () {
    function UseCredentials() {

    };
    UseCredentials.value = new UseCredentials();
    return UseCredentials;
})();
var renderCrossOriginValue = function (v) {
    if (v instanceof Anonymous) {
        return "anonymous";
    };
    if (v instanceof UseCredentials) {
        return "use-credentials";
    };
    throw new Error("Failed pattern match at DOM.HTML.Indexed.CrossOriginValue (line 13, column 26 - line 15, column 38): " + [ v.constructor.name ]);
};
var eqCrossOriginValue = {
    eq: function (x) {
        return function (y) {
            if (x instanceof Anonymous && y instanceof Anonymous) {
                return true;
            };
            if (x instanceof UseCredentials && y instanceof UseCredentials) {
                return true;
            };
            return false;
        };
    }
};
var ordCrossOriginValue = {
    compare: function (x) {
        return function (y) {
            if (x instanceof Anonymous && y instanceof Anonymous) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof Anonymous) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof Anonymous) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof UseCredentials && y instanceof UseCredentials) {
                return Data_Ordering.EQ.value;
            };
            throw new Error("Failed pattern match at DOM.HTML.Indexed.CrossOriginValue (line 0, column 0 - line 0, column 0): " + [ x.constructor.name, y.constructor.name ]);
        };
    },
    Eq0: function () {
        return eqCrossOriginValue;
    }
};
export {
    Anonymous,
    UseCredentials,
    renderCrossOriginValue,
    eqCrossOriginValue,
    ordCrossOriginValue
};
