import * as Data_Ordering from "../Data.Ordering/index.js";
import * as Type_Proxy from "../Type.Proxy/index.js";
var reflectOrdering = function (dict) {
    return dict.reflectOrdering;
};
var isOrderingLT = {
    reflectOrdering: function (v) {
        return Data_Ordering.LT.value;
    }
};
var isOrderingGT = {
    reflectOrdering: function (v) {
        return Data_Ordering.GT.value;
    }
};
var isOrderingEQ = {
    reflectOrdering: function (v) {
        return Data_Ordering.EQ.value;
    }
};

// | Use a value level `Ordering` as a type-level `Ordering`
var reifyOrdering = function (v) {
    return function (v1) {
        if (v instanceof Data_Ordering.LT) {
            return v1(isOrderingLT)(Type_Proxy["Proxy"].value);
        };
        if (v instanceof Data_Ordering.EQ) {
            return v1(isOrderingEQ)(Type_Proxy["Proxy"].value);
        };
        if (v instanceof Data_Ordering.GT) {
            return v1(isOrderingGT)(Type_Proxy["Proxy"].value);
        };
        throw new Error("Failed pattern match at Type.Data.Ordering (line 29, column 1 - line 29, column 85): " + [ v.constructor.name, v1.constructor.name ]);
    };
};
var invertOrderingLT = {};
var invertOrderingGT = {};
var invertOrderingEQ = {};
var invert = function () {
    return function (v) {
        return Type_Proxy["Proxy"].value;
    };
};
var equalsLTLT = {};
var equalsLTGT = {};
var equalsLTEQ = {};
var equalsGTLT = {};
var equalsGTGT = {};
var equalsGTEQ = {};
var equalsEQLT = {};
var equalsEQGT = {};
var equalsEQEQ = {};
var equals = function () {
    return function (v) {
        return function (v1) {
            return Type_Proxy["Proxy"].value;
        };
    };
};
var appendOrderingLT = {};
var appendOrderingGT = {};
var appendOrderingEQ = {};
var append = function () {
    return function (v) {
        return function (v1) {
            return Type_Proxy["Proxy"].value;
        };
    };
};
export {
    reflectOrdering,
    reifyOrdering,
    append,
    invert,
    equals,
    isOrderingLT,
    isOrderingEQ,
    isOrderingGT,
    appendOrderingLT,
    appendOrderingEQ,
    appendOrderingGT,
    invertOrderingLT,
    invertOrderingEQ,
    invertOrderingGT,
    equalsEQEQ,
    equalsLTLT,
    equalsGTGT,
    equalsEQLT,
    equalsEQGT,
    equalsLTEQ,
    equalsLTGT,
    equalsGTLT,
    equalsGTEQ
};
