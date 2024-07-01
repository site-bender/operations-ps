import * as Data_Symbol from "../Data.Symbol/index.js";
import * as Type_Proxy from "../Type.Proxy/index.js";
var uncons = function () {
    return function (v) {
        return {
            head: Type_Proxy["Proxy"].value,
            tail: Type_Proxy["Proxy"].value
        };
    };
};
var equalsSymbol = function () {
    return function () {
        return {};
    };
};
var equals = function () {
    return function (v) {
        return function (v1) {
            return Type_Proxy["Proxy"].value;
        };
    };
};
var compare = function () {
    return function (v) {
        return function (v1) {
            return Type_Proxy["Proxy"].value;
        };
    };
};
var append = function () {
    return function (v) {
        return function (v1) {
            return Type_Proxy["Proxy"].value;
        };
    };
};
export {
    append,
    compare,
    uncons,
    equals,
    equalsSymbol
};
export {
    reflectSymbol,
    reifySymbol
} from "../Data.Symbol/index.js";