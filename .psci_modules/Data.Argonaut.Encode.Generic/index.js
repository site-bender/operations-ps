import * as Control_Category from "../Control.Category/index.js";
import * as Data_Argonaut_Core from "../Data.Argonaut.Core/index.js";
import * as Data_Argonaut_Encode_Class from "../Data.Argonaut.Encode.Class/index.js";
import * as Data_Argonaut_Types_Generic from "../Data.Argonaut.Types.Generic/index.js";
import * as Data_Generic_Rep from "../Data.Generic.Rep/index.js";
import * as Data_Semigroup from "../Data.Semigroup/index.js";
import * as Data_Symbol from "../Data.Symbol/index.js";
import * as Foreign_Object from "../Foreign.Object/index.js";
import * as Partial_Unsafe from "../Partial.Unsafe/index.js";
import * as Type_Proxy from "../Type.Proxy/index.js";
var append = /* #__PURE__ */ Data_Semigroup.append(Data_Semigroup.semigroupArray);
var identity = /* #__PURE__ */ Control_Category.identity(Control_Category.categoryFn);
var encodeRepWith = function (dict) {
    return dict.encodeRepWith;
};

// | Encode any `Generic` data structure into `Json`.
// | Takes a record for encoding settings.
var genericEncodeJsonWith = function (dictGeneric) {
    var from = Data_Generic_Rep.from(dictGeneric);
    return function (dictEncodeRep) {
        var encodeRepWith1 = encodeRepWith(dictEncodeRep);
        return function (e) {
            var $73 = encodeRepWith1(e);
            return function ($74) {
                return $73(from($74));
            };
        };
    };
};

// | Encode any `Generic` data structure into `Json`.
var genericEncodeJson = function (dictGeneric) {
    var genericEncodeJsonWith1 = genericEncodeJsonWith(dictGeneric);
    return function (dictEncodeRep) {
        return genericEncodeJsonWith1(dictEncodeRep)(Data_Argonaut_Types_Generic.defaultEncoding);
    };
};
var encodeRepSum = function (dictEncodeRep) {
    var encodeRepWith1 = encodeRepWith(dictEncodeRep);
    return function (dictEncodeRep1) {
        var encodeRepWith2 = encodeRepWith(dictEncodeRep1);
        return {
            encodeRepWith: function (v) {
                return function (v1) {
                    if (v1 instanceof Data_Generic_Rep.Inl) {
                        return encodeRepWith1(v)(v1.value0);
                    };
                    if (v1 instanceof Data_Generic_Rep.Inr) {
                        return encodeRepWith2(v)(v1.value0);
                    };
                    throw new Error("Failed pattern match at Data.Argonaut.Encode.Generic (line 36, column 1 - line 38, column 50): " + [ v.constructor.name, v1.constructor.name ]);
                };
            }
        };
    };
};
var encodeRepNoConstructors = {
    encodeRepWith: function (e) {
        return encodeRepWith(encodeRepNoConstructors)(e);
    }
};
var encodeRepArgsNoArguments = {
    encodeRepArgs: function (v) {
        return [  ];
    }
};
var encodeRepArgsArgument = function (dictEncodeJson) {
    var encodeJson = Data_Argonaut_Encode_Class.encodeJson(dictEncodeJson);
    return {
        encodeRepArgs: function (v) {
            return [ encodeJson(v) ];
        }
    };
};
var encodeRepArgs = function (dict) {
    return dict.encodeRepArgs;
};
var encodeRepArgsProduct = function (dictEncodeRepArgs) {
    var encodeRepArgs1 = encodeRepArgs(dictEncodeRepArgs);
    return function (dictEncodeRepArgs1) {
        var encodeRepArgs2 = encodeRepArgs(dictEncodeRepArgs1);
        return {
            encodeRepArgs: function (v) {
                return append(encodeRepArgs1(v.value0))(encodeRepArgs2(v.value1));
            }
        };
    };
};
var encodeRepConstructor = function (dictIsSymbol) {
    var reflectSymbol = Data_Symbol.reflectSymbol(dictIsSymbol);
    return function (dictEncodeRepArgs) {
        var encodeRepArgs1 = encodeRepArgs(dictEncodeRepArgs);
        return {
            encodeRepWith: function (e) {
                return function (v) {
                    var values = (function () {
                        var vs = encodeRepArgs1(v);
                        if (e.unwrapSingleArguments) {
                            if (vs.length === 1) {
                                return vs[0];
                            };
                            return Data_Argonaut_Core.fromArray(vs);
                        };
                        return Data_Argonaut_Core.fromArray(vs);
                    })();
                    return Data_Argonaut_Core.fromObject(Foreign_Object.insert(e.tagKey)(Data_Argonaut_Core.fromString(reflectSymbol(Type_Proxy["Proxy"].value)))(Foreign_Object.insert(e.valuesKey)(values)(Foreign_Object.empty)));
                };
            }
        };
    };
};
var encodeRep = function (dictEncodeRep) {
    return encodeRepWith(dictEncodeRep)(Data_Argonaut_Types_Generic.defaultEncoding);
};
var encodeLiteralConstructorCannotBeProduct = function () {
    return {
        encodeLiteral: function (v) {
            return function (v1) {
                return Partial_Unsafe.unsafeCrashWith("unreachable encodeLiteral was reached.");
            };
        }
    };
};
var encodeLiteralConstructor = function (dictIsSymbol) {
    var reflectSymbol = Data_Symbol.reflectSymbol(dictIsSymbol);
    return {
        encodeLiteral: function (tagNameTransform) {
            return function (v) {
                return Data_Argonaut_Core.fromString(tagNameTransform(reflectSymbol(Type_Proxy["Proxy"].value)));
            };
        }
    };
};
var encodeLiteral = function (dict) {
    return dict.encodeLiteral;
};
var encodeLiteralSumInst = function (dictEncodeLiteral) {
    var encodeLiteral1 = encodeLiteral(dictEncodeLiteral);
    return function (dictEncodeLiteral1) {
        var encodeLiteral2 = encodeLiteral(dictEncodeLiteral1);
        return {
            encodeLiteral: function (v) {
                return function (v1) {
                    if (v1 instanceof Data_Generic_Rep.Inl) {
                        return encodeLiteral1(v)(v1.value0);
                    };
                    if (v1 instanceof Data_Generic_Rep.Inr) {
                        return encodeLiteral2(v)(v1.value0);
                    };
                    throw new Error("Failed pattern match at Data.Argonaut.Encode.Generic (line 89, column 1 - line 91, column 80): " + [ v.constructor.name, v1.constructor.name ]);
                };
            }
        };
    };
};

// | A function for encoding `Generic` sum types using string literal representations.
// | Takes a function for transforming the tag name in encoding.
var encodeLiteralSumWithTransform = function (dictGeneric) {
    var from = Data_Generic_Rep.from(dictGeneric);
    return function (dictEncodeLiteral) {
        var encodeLiteral1 = encodeLiteral(dictEncodeLiteral);
        return function (tagNameTransform) {
            var $75 = encodeLiteral1(tagNameTransform);
            return function ($76) {
                return $75(from($76));
            };
        };
    };
};

// | A function for encoding `Generic` sum types using string literal representations.
var encodeLiteralSum = function (dictGeneric) {
    var encodeLiteralSumWithTransform1 = encodeLiteralSumWithTransform(dictGeneric);
    return function (dictEncodeLiteral) {
        return encodeLiteralSumWithTransform1(dictEncodeLiteral)(identity);
    };
};
export {
    encodeRep,
    encodeRepWith,
    encodeRepArgs,
    genericEncodeJson,
    genericEncodeJsonWith,
    encodeLiteralSum,
    encodeLiteralSumWithTransform,
    encodeLiteral,
    encodeRepNoConstructors,
    encodeRepSum,
    encodeRepConstructor,
    encodeRepArgsNoArguments,
    encodeRepArgsProduct,
    encodeRepArgsArgument,
    encodeLiteralSumInst,
    encodeLiteralConstructor,
    encodeLiteralConstructorCannotBeProduct
};
