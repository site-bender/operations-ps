import * as Control_Alt from "../Control.Alt/index.js";
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Control_Category from "../Control.Category/index.js";
import * as Data_Argonaut_Core from "../Data.Argonaut.Core/index.js";
import * as Data_Argonaut_Decode_Class from "../Data.Argonaut.Decode.Class/index.js";
import * as Data_Argonaut_Decode_Error from "../Data.Argonaut.Decode.Error/index.js";
import * as Data_Argonaut_Types_Generic from "../Data.Argonaut.Types.Generic/index.js";
import * as Data_Array from "../Data.Array/index.js";
import * as Data_Bifunctor from "../Data.Bifunctor/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Generic_Rep from "../Data.Generic.Rep/index.js";
import * as Data_Symbol from "../Data.Symbol/index.js";
import * as Foreign_Object from "../Foreign.Object/index.js";
import * as Partial_Unsafe from "../Partial.Unsafe/index.js";
import * as Type_Proxy from "../Type.Proxy/index.js";
var bind = /* #__PURE__ */ Control_Bind.bind(Data_Either.bindEither);
var discard = /* #__PURE__ */ Control_Bind.discard(Control_Bind.discardUnit)(Data_Either.bindEither);
var when = /* #__PURE__ */ Control_Applicative.when(Data_Either.applicativeEither);
var pure = /* #__PURE__ */ Control_Applicative.pure(Data_Either.applicativeEither);
var map = /* #__PURE__ */ Data_Functor.map(Data_Either.functorEither);
var alt = /* #__PURE__ */ Control_Alt.alt(Data_Either.altEither);
var identity = /* #__PURE__ */ Control_Category.identity(Control_Category.categoryFn);
var lmap = /* #__PURE__ */ Data_Bifunctor.lmap(Data_Bifunctor.bifunctorEither);
var notEq1 = /* #__PURE__ */ Data_Eq.notEq(/* #__PURE__ */ Data_Eq.eqArray(Data_Argonaut_Core.eqJson));
var withTag = function (e) {
    return function (j) {
        return function (name) {
            var decodingErr = Data_Argonaut_Decode_Error.Named.create(name);
            return bind(Data_Either.note(decodingErr(new Data_Argonaut_Decode_Error.TypeMismatch("Object")))(Data_Argonaut_Core.toObject(j)))(function (jObj) {
                return bind(Data_Either.note(decodingErr(new Data_Argonaut_Decode_Error.AtKey(e.tagKey, Data_Argonaut_Decode_Error.MissingValue.value)))(Foreign_Object.lookup(e.tagKey)(jObj)))(function (jTag) {
                    return bind(Data_Either.note(decodingErr(new Data_Argonaut_Decode_Error.AtKey(e.tagKey, new Data_Argonaut_Decode_Error.TypeMismatch("String"))))(Data_Argonaut_Core.toString(jTag)))(function (tag) {
                        return discard(when(tag !== name)(new Data_Either.Left(decodingErr(new Data_Argonaut_Decode_Error.AtKey(e.tagKey, new Data_Argonaut_Decode_Error.UnexpectedValue(Data_Argonaut_Core.fromString(tag)))))))(function () {
                            return pure({
                                tag: tag,
                                decodingErr: decodingErr
                            });
                        });
                    });
                });
            });
        };
    };
};
var withTagAndValues = function (e) {
    return function (j) {
        return function (name) {
            return bind(withTag(e)(j)(name))(function (v) {
                return bind(Data_Either.note(v.decodingErr(new Data_Argonaut_Decode_Error.TypeMismatch("Object")))(Data_Argonaut_Core.toObject(j)))(function (jObj) {
                    return bind(Data_Either.note(v.decodingErr(new Data_Argonaut_Decode_Error.AtKey(e.valuesKey, Data_Argonaut_Decode_Error.MissingValue.value)))(Foreign_Object.lookup(e.valuesKey)(jObj)))(function (values) {
                        return pure({
                            tag: v.tag,
                            values: values,
                            decodingErr: v.decodingErr
                        });
                    });
                });
            });
        };
    };
};
var decodeRepWith = function (dict) {
    return dict.decodeRepWith;
};

// | Decode `Json` representation of a value which has a `Generic` type.
// | Takes a record for encoding settings.
var genericDecodeJsonWith = function (dictGeneric) {
    var to = Data_Generic_Rep.to(dictGeneric);
    return function (dictDecodeRep) {
        var decodeRepWith1 = decodeRepWith(dictDecodeRep);
        return function (e) {
            var $101 = map(to);
            var $102 = decodeRepWith1(e);
            return function ($103) {
                return $101($102($103));
            };
        };
    };
};

// | Decode `Json` representation of a value which has a `Generic` type.
var genericDecodeJson = function (dictGeneric) {
    var genericDecodeJsonWith1 = genericDecodeJsonWith(dictGeneric);
    return function (dictDecodeRep) {
        return genericDecodeJsonWith1(dictDecodeRep)(Data_Argonaut_Types_Generic.defaultEncoding);
    };
};
var decodeRepSum = function (dictDecodeRep) {
    var decodeRepWith1 = decodeRepWith(dictDecodeRep);
    return function (dictDecodeRep1) {
        var decodeRepWith2 = decodeRepWith(dictDecodeRep1);
        return {
            decodeRepWith: function (e) {
                return function (j) {
                    return alt(map(Data_Generic_Rep.Inl.create)(decodeRepWith1(e)(j)))(map(Data_Generic_Rep.Inr.create)(decodeRepWith2(e)(j)));
                };
            }
        };
    };
};
var decodeRepNoConstructors = {
    decodeRepWith: function (v) {
        return function (v1) {
            return new Data_Either.Left(new Data_Argonaut_Decode_Error.UnexpectedValue(Data_Argonaut_Core.fromString("NoConstructors (Cannot decode empty data type)")));
        };
    }
};
var decodeRepArgsNoArguments = {
    decodeRepArgs: function (js) {
        return new Data_Either.Right({
            init: Data_Generic_Rep.NoArguments.value,
            rest: js
        });
    }
};
var decodeRepArgsArgument = function (dictDecodeJson) {
    var decodeJson = Data_Argonaut_Decode_Class.decodeJson(dictDecodeJson);
    return {
        decodeRepArgs: function (js) {
            return bind(Data_Either.note(new Data_Argonaut_Decode_Error.TypeMismatch("NonEmptyArray"))(Data_Array.uncons(js)))(function (v) {
                return map(function ($104) {
                    return (function (v1) {
                        return {
                            init: v1,
                            rest: v.tail
                        };
                    })(Data_Generic_Rep.Argument($104));
                })(decodeJson(v.head));
            });
        }
    };
};
var decodeRepArgs = function (dict) {
    return dict.decodeRepArgs;
};
var decodeRepArgsProduct = function (dictDecodeRepArgs) {
    var decodeRepArgs1 = decodeRepArgs(dictDecodeRepArgs);
    return function (dictDecodeRepArgs1) {
        var decodeRepArgs2 = decodeRepArgs(dictDecodeRepArgs1);
        return {
            decodeRepArgs: function (js) {
                return bind(decodeRepArgs1(js))(function (v) {
                    return bind(decodeRepArgs2(v.rest))(function (v1) {
                        return pure({
                            init: new Data_Generic_Rep.Product(v.init, v1.init),
                            rest: v1.rest
                        });
                    });
                });
            }
        };
    };
};
var decodeRep = function (dictDecodeRep) {
    return decodeRepWith(dictDecodeRep)(Data_Argonaut_Types_Generic.defaultEncoding);
};
var decodeLiteralConstructorCannotTakeProduct = function () {
    return {
        decodeLiteral: function (v) {
            return function (v1) {
                return Partial_Unsafe.unsafeCrashWith("unreachable DecodeLiteral was reached.");
            };
        }
    };
};
var decodeLiteralConstructor = function (dictIsSymbol) {
    var reflectSymbol = Data_Symbol.reflectSymbol(dictIsSymbol);
    return {
        decodeLiteral: function (tagNameTransform) {
            return function (j) {
                var name = reflectSymbol(Type_Proxy["Proxy"].value);
                var decodingErr = Data_Argonaut_Decode_Error.Named.create(name);
                return bind(Data_Either.note(decodingErr(new Data_Argonaut_Decode_Error.TypeMismatch("String")))(Data_Argonaut_Core.toString(j)))(function (tag) {
                    return discard(when(tag !== tagNameTransform(name))(new Data_Either.Left(decodingErr(new Data_Argonaut_Decode_Error.UnexpectedValue(Data_Argonaut_Core.fromString(tag))))))(function () {
                        return pure(Data_Generic_Rep.NoArguments.value);
                    });
                });
            };
        }
    };
};
var decodeLiteral = function (dict) {
    return dict.decodeLiteral;
};
var decodeLiteralSumInst = function (dictDecodeLiteral) {
    var decodeLiteral1 = decodeLiteral(dictDecodeLiteral);
    return function (dictDecodeLiteral1) {
        var decodeLiteral2 = decodeLiteral(dictDecodeLiteral1);
        return {
            decodeLiteral: function (tagNameTransform) {
                return function (j) {
                    return alt(map(Data_Generic_Rep.Inl.create)(decodeLiteral1(tagNameTransform)(j)))(map(Data_Generic_Rep.Inr.create)(decodeLiteral2(tagNameTransform)(j)));
                };
            }
        };
    };
};

// | A function for decoding `Generic` sum types using string literal representations.
// | Takes a function for transforming the tag name in encoding.
var decodeLiteralSumWithTransform = function (dictGeneric) {
    var to = Data_Generic_Rep.to(dictGeneric);
    return function (dictDecodeLiteral) {
        var decodeLiteral1 = decodeLiteral(dictDecodeLiteral);
        return function (tagNameTransform) {
            var $105 = map(to);
            var $106 = decodeLiteral1(tagNameTransform);
            return function ($107) {
                return $105($106($107));
            };
        };
    };
};

// | A function for decoding `Generic` sum types using string literal representations.
var decodeLiteralSum = function (dictGeneric) {
    var decodeLiteralSumWithTransform1 = decodeLiteralSumWithTransform(dictGeneric);
    return function (dictDecodeLiteral) {
        return decodeLiteralSumWithTransform1(dictDecodeLiteral)(identity);
    };
};
var construct = function (dictDecodeRepArgs) {
    var decodeRepArgs1 = decodeRepArgs(dictDecodeRepArgs);
    return function (e) {
        return function (valuesArray) {
            return function (decodingErr) {
                return bind(lmap(decodingErr)(decodeRepArgs1(valuesArray)))(function (v) {
                    return discard(when(notEq1(v.rest)([  ]))(new Data_Either.Left(decodingErr(new Data_Argonaut_Decode_Error.AtKey(e.valuesKey, new Data_Argonaut_Decode_Error.UnexpectedValue(Data_Argonaut_Core.fromArray(v.rest)))))))(function () {
                        return pure(v.init);
                    });
                });
            };
        };
    };
};
var construct1 = /* #__PURE__ */ construct(decodeRepArgsNoArguments);
var decodeRepConstructor = function (dictIsSymbol) {
    var reflectSymbol = Data_Symbol.reflectSymbol(dictIsSymbol);
    return function (dictDecodeRepArgs) {
        var construct2 = construct(dictDecodeRepArgs);
        return {
            decodeRepWith: function (e) {
                return function (j) {
                    var name = reflectSymbol(Type_Proxy["Proxy"].value);
                    return bind(withTagAndValues(e)(j)(name))(function (v) {
                        return bind(Data_Either.note(v.decodingErr(new Data_Argonaut_Decode_Error.AtKey(e.valuesKey, new Data_Argonaut_Decode_Error.TypeMismatch("Array"))))(Data_Argonaut_Core.toArray(v.values)))(function (valuesArray) {
                            return construct2(e)(valuesArray)(v.decodingErr);
                        });
                    });
                };
            }
        };
    };
};
var decodeRepConstructorArg = function (dictIsSymbol) {
    var reflectSymbol = Data_Symbol.reflectSymbol(dictIsSymbol);
    return function (dictDecodeJson) {
        var construct2 = construct(decodeRepArgsArgument(dictDecodeJson));
        return {
            decodeRepWith: function (e) {
                return function (j) {
                    var name = reflectSymbol(Type_Proxy["Proxy"].value);
                    return bind(withTagAndValues(e)(j)(name))(function (v) {
                        if (e.unwrapSingleArguments) {
                            return construct2(e)([ v.values ])(v.decodingErr);
                        };
                        return bind(Data_Either.note(v.decodingErr(new Data_Argonaut_Decode_Error.AtKey(e.valuesKey, new Data_Argonaut_Decode_Error.TypeMismatch("Array"))))(Data_Argonaut_Core.toArray(v.values)))(function (valuesArray) {
                            return construct2(e)(valuesArray)(v.decodingErr);
                        });
                    });
                };
            }
        };
    };
};
var decodeRepConstructorNoArgs = function (dictIsSymbol) {
    var reflectSymbol = Data_Symbol.reflectSymbol(dictIsSymbol);
    return {
        decodeRepWith: function (e) {
            return function (j) {
                var name = reflectSymbol(Type_Proxy["Proxy"].value);
                return bind(withTag(e)(j)(name))(function (v) {
                    return construct1(e)([  ])(v.decodingErr);
                });
            };
        }
    };
};
export {
    decodeRep,
    decodeRepWith,
    decodeRepArgs,
    genericDecodeJson,
    genericDecodeJsonWith,
    decodeLiteralSum,
    decodeLiteralSumWithTransform,
    decodeLiteral,
    decodeRepNoConstructors,
    decodeRepSum,
    decodeRepConstructorNoArgs,
    decodeRepConstructorArg,
    decodeRepConstructor,
    decodeRepArgsNoArguments,
    decodeRepArgsProduct,
    decodeRepArgsArgument,
    decodeLiteralSumInst,
    decodeLiteralConstructor,
    decodeLiteralConstructorCannotTakeProduct
};
