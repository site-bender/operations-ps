// Generated by purs version 0.15.15
import * as Type_Proxy from "../Type.Proxy/index.js";
var reflectBoolean = function (dict) {
    return dict.reflectBoolean;
};
var orTrue = {};
var orFalse = {};
var or = function () {
    return function (v) {
        return function (v1) {
            return Type_Proxy["Proxy"].value;
        };
    };
};
var notTrue = {};
var notFalse = {};
var not = function () {
    return function (v) {
        return Type_Proxy["Proxy"].value;
    };
};
var isBooleanTrue = {
    reflectBoolean: function (v) {
        return true;
    }
};
var isBooleanFalse = {
    reflectBoolean: function (v) {
        return false;
    }
};
var reifyBoolean = function (v) {
    return function (v1) {
        if (v) {
            return v1(isBooleanTrue)(Type_Proxy["Proxy"].value);
        };
        if (!v) {
            return v1(isBooleanFalse)(Type_Proxy["Proxy"].value);
        };
        throw new Error("Failed pattern match at Type.Data.Boolean (line 28, column 1 - line 28, column 82): " + [ v.constructor.name, v1.constructor.name ]);
    };
};
var if_ = function () {
    return function (v) {
        return function (v1) {
            return function (v2) {
                return Type_Proxy["Proxy"].value;
            };
        };
    };
};
var ifTrue = {};
var ifFalse = {};
var andTrue = {};
var andFalse = {};
var and = function () {
    return function (v) {
        return function (v1) {
            return Type_Proxy["Proxy"].value;
        };
    };
};
export {
    reflectBoolean,
    reifyBoolean,
    and,
    or,
    not,
    if_,
    isBooleanTrue,
    isBooleanFalse,
    andTrue,
    andFalse,
    orTrue,
    orFalse,
    notTrue,
    notFalse,
    ifTrue,
    ifFalse
};
//# sourceMappingURL=index.js.map
