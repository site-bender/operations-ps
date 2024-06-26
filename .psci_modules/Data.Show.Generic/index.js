import * as $foreign from "./foreign.js";
import * as Data_Generic_Rep from "../Data.Generic.Rep/index.js";
import * as Data_Semigroup from "../Data.Semigroup/index.js";
import * as Data_Show from "../Data.Show/index.js";
import * as Data_Symbol from "../Data.Symbol/index.js";
import * as Type_Proxy from "../Type.Proxy/index.js";
var append = /* #__PURE__ */ Data_Semigroup.append(Data_Semigroup.semigroupArray);
var genericShowArgsNoArguments = {
    genericShowArgs: function (v) {
        return [  ];
    }
};
var genericShowArgsArgument = function (dictShow) {
    var show = Data_Show.show(dictShow);
    return {
        genericShowArgs: function (v) {
            return [ show(v) ];
        }
    };
};
var genericShowArgs = function (dict) {
    return dict.genericShowArgs;
};
var genericShowArgsProduct = function (dictGenericShowArgs) {
    var genericShowArgs1 = genericShowArgs(dictGenericShowArgs);
    return function (dictGenericShowArgs1) {
        var genericShowArgs2 = genericShowArgs(dictGenericShowArgs1);
        return {
            genericShowArgs: function (v) {
                return append(genericShowArgs1(v.value0))(genericShowArgs2(v.value1));
            }
        };
    };
};
var genericShowConstructor = function (dictGenericShowArgs) {
    var genericShowArgs1 = genericShowArgs(dictGenericShowArgs);
    return function (dictIsSymbol) {
        var reflectSymbol = Data_Symbol.reflectSymbol(dictIsSymbol);
        return {
            "genericShow'": function (v) {
                var ctor = reflectSymbol(Type_Proxy["Proxy"].value);
                var v1 = genericShowArgs1(v);
                if (v1.length === 0) {
                    return ctor;
                };
                return "(" + ($foreign.intercalate(" ")(append([ ctor ])(v1)) + ")");
            }
        };
    };
};
var genericShow$prime = function (dict) {
    return dict["genericShow'"];
};
var genericShowNoConstructors = {
    "genericShow'": function (a) {
        return genericShow$prime(genericShowNoConstructors)(a);
    }
};
var genericShowSum = function (dictGenericShow) {
    var genericShow$prime1 = genericShow$prime(dictGenericShow);
    return function (dictGenericShow1) {
        var genericShow$prime2 = genericShow$prime(dictGenericShow1);
        return {
            "genericShow'": function (v) {
                if (v instanceof Data_Generic_Rep.Inl) {
                    return genericShow$prime1(v.value0);
                };
                if (v instanceof Data_Generic_Rep.Inr) {
                    return genericShow$prime2(v.value0);
                };
                throw new Error("Failed pattern match at Data.Show.Generic (line 26, column 1 - line 28, column 40): " + [ v.constructor.name ]);
            }
        };
    };
};

// | A `Generic` implementation of the `show` member from the `Show` type class.
var genericShow = function (dictGeneric) {
    var from = Data_Generic_Rep.from(dictGeneric);
    return function (dictGenericShow) {
        var genericShow$prime1 = genericShow$prime(dictGenericShow);
        return function (x) {
            return genericShow$prime1(from(x));
        };
    };
};
export {
    genericShow$prime,
    genericShow,
    genericShowArgs,
    genericShowNoConstructors,
    genericShowArgsNoArguments,
    genericShowSum,
    genericShowArgsProduct,
    genericShowConstructor,
    genericShowArgsArgument
};
