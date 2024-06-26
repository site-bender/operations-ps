import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Ordering from "../Data.Ordering/index.js";
var Uppercase = /* #__PURE__ */ (function () {
    function Uppercase() {

    };
    Uppercase.value = new Uppercase();
    return Uppercase;
})();
var Lowercase = /* #__PURE__ */ (function () {
    function Lowercase() {

    };
    Lowercase.value = new Lowercase();
    return Lowercase;
})();
var NumeralDecimal = /* #__PURE__ */ (function () {
    function NumeralDecimal() {

    };
    NumeralDecimal.value = new NumeralDecimal();
    return NumeralDecimal;
})();
var NumeralRoman = /* #__PURE__ */ (function () {
    function NumeralRoman(value0) {
        this.value0 = value0;
    };
    NumeralRoman.create = function (value0) {
        return new NumeralRoman(value0);
    };
    return NumeralRoman;
})();
var OrderedListNumeric = /* #__PURE__ */ (function () {
    function OrderedListNumeric(value0) {
        this.value0 = value0;
    };
    OrderedListNumeric.create = function (value0) {
        return new OrderedListNumeric(value0);
    };
    return OrderedListNumeric;
})();
var OrderedListAlphabetic = /* #__PURE__ */ (function () {
    function OrderedListAlphabetic(value0) {
        this.value0 = value0;
    };
    OrderedListAlphabetic.create = function (value0) {
        return new OrderedListAlphabetic(value0);
    };
    return OrderedListAlphabetic;
})();
var renderOrderedListType = function (v) {
    if (v instanceof OrderedListNumeric && v.value0 instanceof NumeralDecimal) {
        return "1";
    };
    if (v instanceof OrderedListNumeric && (v.value0 instanceof NumeralRoman && v.value0.value0 instanceof Lowercase)) {
        return "i";
    };
    if (v instanceof OrderedListNumeric && (v.value0 instanceof NumeralRoman && v.value0.value0 instanceof Uppercase)) {
        return "I";
    };
    if (v instanceof OrderedListAlphabetic && v.value0 instanceof Lowercase) {
        return "a";
    };
    if (v instanceof OrderedListAlphabetic && v.value0 instanceof Uppercase) {
        return "A";
    };
    throw new Error("Failed pattern match at DOM.HTML.Indexed.OrderedListType (line 27, column 25 - line 32, column 41): " + [ v.constructor.name ]);
};
var eqCaseType = {
    eq: function (x) {
        return function (y) {
            if (x instanceof Uppercase && y instanceof Uppercase) {
                return true;
            };
            if (x instanceof Lowercase && y instanceof Lowercase) {
                return true;
            };
            return false;
        };
    }
};
var eq = /* #__PURE__ */ Data_Eq.eq(eqCaseType);
var eqNumeralType = {
    eq: function (x) {
        return function (y) {
            if (x instanceof NumeralDecimal && y instanceof NumeralDecimal) {
                return true;
            };
            if (x instanceof NumeralRoman && y instanceof NumeralRoman) {
                return eq(x.value0)(y.value0);
            };
            return false;
        };
    }
};
var eq1 = /* #__PURE__ */ Data_Eq.eq(eqNumeralType);
var eqOrderedListType = {
    eq: function (x) {
        return function (y) {
            if (x instanceof OrderedListNumeric && y instanceof OrderedListNumeric) {
                return eq1(x.value0)(y.value0);
            };
            if (x instanceof OrderedListAlphabetic && y instanceof OrderedListAlphabetic) {
                return eq(x.value0)(y.value0);
            };
            return false;
        };
    }
};
var ordCaseType = {
    compare: function (x) {
        return function (y) {
            if (x instanceof Uppercase && y instanceof Uppercase) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof Uppercase) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof Uppercase) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof Lowercase && y instanceof Lowercase) {
                return Data_Ordering.EQ.value;
            };
            throw new Error("Failed pattern match at DOM.HTML.Indexed.OrderedListType (line 0, column 0 - line 0, column 0): " + [ x.constructor.name, y.constructor.name ]);
        };
    },
    Eq0: function () {
        return eqCaseType;
    }
};
var compare = /* #__PURE__ */ Data_Ord.compare(ordCaseType);
var ordNumeralType = {
    compare: function (x) {
        return function (y) {
            if (x instanceof NumeralDecimal && y instanceof NumeralDecimal) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof NumeralDecimal) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof NumeralDecimal) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof NumeralRoman && y instanceof NumeralRoman) {
                return compare(x.value0)(y.value0);
            };
            throw new Error("Failed pattern match at DOM.HTML.Indexed.OrderedListType (line 0, column 0 - line 0, column 0): " + [ x.constructor.name, y.constructor.name ]);
        };
    },
    Eq0: function () {
        return eqNumeralType;
    }
};
var compare1 = /* #__PURE__ */ Data_Ord.compare(ordNumeralType);
var ordOrderedListType = {
    compare: function (x) {
        return function (y) {
            if (x instanceof OrderedListNumeric && y instanceof OrderedListNumeric) {
                return compare1(x.value0)(y.value0);
            };
            if (x instanceof OrderedListNumeric) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof OrderedListNumeric) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof OrderedListAlphabetic && y instanceof OrderedListAlphabetic) {
                return compare(x.value0)(y.value0);
            };
            throw new Error("Failed pattern match at DOM.HTML.Indexed.OrderedListType (line 0, column 0 - line 0, column 0): " + [ x.constructor.name, y.constructor.name ]);
        };
    },
    Eq0: function () {
        return eqOrderedListType;
    }
};
export {
    Uppercase,
    Lowercase,
    NumeralDecimal,
    NumeralRoman,
    OrderedListNumeric,
    OrderedListAlphabetic,
    renderOrderedListType,
    eqCaseType,
    ordCaseType,
    eqNumeralType,
    ordNumeralType,
    eqOrderedListType,
    ordOrderedListType
};
