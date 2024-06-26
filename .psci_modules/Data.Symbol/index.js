import * as $foreign from "./foreign.js";
import * as Type_Proxy from "../Type.Proxy/index.js";
var reifySymbol = function (s) {
    return function (f) {
        return $foreign.unsafeCoerce(function (dictIsSymbol) {
            return f(dictIsSymbol);
        })({
            reflectSymbol: function (v) {
                return s;
            }
        })(Type_Proxy["Proxy"].value);
    };
};
var reflectSymbol = function (dict) {
    return dict.reflectSymbol;
};
export {
    reflectSymbol,
    reifySymbol
};
