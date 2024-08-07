// Generated by purs version 0.15.15
import * as Control_Bind from "../Control.Bind/index.js";
import * as Data_Argonaut_Core from "../Data.Argonaut.Core/index.js";
import * as Data_Argonaut_Decode_Decoders from "../Data.Argonaut.Decode.Decoders/index.js";
import * as Data_Argonaut_Decode_Error from "../Data.Argonaut.Decode.Error/index.js";
import * as Data_Bifunctor from "../Data.Bifunctor/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Symbol from "../Data.Symbol/index.js";
import * as Foreign_Object from "../Foreign.Object/index.js";
import * as Record from "../Record/index.js";
import * as Type_Proxy from "../Type.Proxy/index.js";
var bind = /* #__PURE__ */ Control_Bind.bind(Data_Either.bindEither);
var lmap = /* #__PURE__ */ Data_Bifunctor.lmap(Data_Bifunctor.bifunctorEither);
var map = /* #__PURE__ */ Data_Functor.map(Data_Maybe.functorMaybe);
var gDecodeJsonNil = {
    gDecodeJson: function (v) {
        return function (v1) {
            return new Data_Either.Right({});
        };
    }
};
var gDecodeJson = function (dict) {
    return dict.gDecodeJson;
};
var decodeVoid = {
    decodeJson: Data_Argonaut_Decode_Decoders.decodeVoid
};
var decodeRecord = function (dictGDecodeJson) {
    var gDecodeJson1 = gDecodeJson(dictGDecodeJson);
    return function () {
        return {
            decodeJson: function (json) {
                var v = Data_Argonaut_Core.toObject(json);
                if (v instanceof Data_Maybe.Just) {
                    return gDecodeJson1(v.value0)(Type_Proxy["Proxy"].value);
                };
                if (v instanceof Data_Maybe.Nothing) {
                    return new Data_Either.Left(new Data_Argonaut_Decode_Error.TypeMismatch("Object"));
                };
                throw new Error("Failed pattern match at Data.Argonaut.Decode.Class (line 103, column 5 - line 105, column 46): " + [ v.constructor.name ]);
            }
        };
    };
};
var decodeJsonString = {
    decodeJson: Data_Argonaut_Decode_Decoders.decodeString
};
var decodeJsonNumber = {
    decodeJson: Data_Argonaut_Decode_Decoders.decodeNumber
};
var decodeJsonNull = {
    decodeJson: Data_Argonaut_Decode_Decoders.decodeNull
};
var decodeJsonNonEmptyString = {
    decodeJson: Data_Argonaut_Decode_Decoders.decodeNonEmptyString
};
var decodeJsonJson = /* #__PURE__ */ (function () {
    return {
        decodeJson: Data_Either.Right.create
    };
})();
var decodeJsonInt = {
    decodeJson: Data_Argonaut_Decode_Decoders.decodeInt
};
var decodeJsonField = function (dict) {
    return dict.decodeJsonField;
};
var gDecodeJsonCons = function (dictDecodeJsonField) {
    var decodeJsonField1 = decodeJsonField(dictDecodeJsonField);
    return function (dictGDecodeJson) {
        var gDecodeJson1 = gDecodeJson(dictGDecodeJson);
        return function (dictIsSymbol) {
            var reflectSymbol = Data_Symbol.reflectSymbol(dictIsSymbol);
            var insert = Record.insert(dictIsSymbol)()();
            return function () {
                return function () {
                    return {
                        gDecodeJson: function (object) {
                            return function (v) {
                                var fieldName = reflectSymbol(Type_Proxy["Proxy"].value);
                                var fieldValue = Foreign_Object.lookup(fieldName)(object);
                                var v1 = decodeJsonField1(fieldValue);
                                if (v1 instanceof Data_Maybe.Just) {
                                    return bind(lmap(Data_Argonaut_Decode_Error.AtKey.create(fieldName))(v1.value0))(function (val) {
                                        return bind(gDecodeJson1(object)(Type_Proxy["Proxy"].value))(function (rest) {
                                            return new Data_Either.Right(insert(Type_Proxy["Proxy"].value)(val)(rest));
                                        });
                                    });
                                };
                                if (v1 instanceof Data_Maybe.Nothing) {
                                    return new Data_Either.Left(new Data_Argonaut_Decode_Error.AtKey(fieldName, Data_Argonaut_Decode_Error.MissingValue.value));
                                };
                                throw new Error("Failed pattern match at Data.Argonaut.Decode.Class (line 127, column 5 - line 134, column 44): " + [ v1.constructor.name ]);
                            };
                        }
                    };
                };
            };
        };
    };
};
var decodeJsonCodePoint = {
    decodeJson: Data_Argonaut_Decode_Decoders.decodeCodePoint
};
var decodeJsonBoolean = {
    decodeJson: Data_Argonaut_Decode_Decoders.decodeBoolean
};
var decodeJson = function (dict) {
    return dict.decodeJson;
};
var decodeJsonEither = function (dictDecodeJson) {
    var decodeJson1 = decodeJson(dictDecodeJson);
    return function (dictDecodeJson1) {
        return {
            decodeJson: Data_Argonaut_Decode_Decoders.decodeEither(decodeJson1)(decodeJson(dictDecodeJson1))
        };
    };
};
var decodeJsonMaybe = function (dictDecodeJson) {
    return {
        decodeJson: Data_Argonaut_Decode_Decoders.decodeMaybe(decodeJson(dictDecodeJson))
    };
};
var decodeJsonNonEmptyArray = function (dictDecodeJson) {
    return {
        decodeJson: Data_Argonaut_Decode_Decoders.decodeNonEmptyArray(decodeJson(dictDecodeJson))
    };
};
var decodeJsonNonEmptyList = function (dictDecodeJson) {
    return {
        decodeJson: Data_Argonaut_Decode_Decoders.decodeNonEmptyList(decodeJson(dictDecodeJson))
    };
};
var decodeJsonNonEmpty_Array = function (dictDecodeJson) {
    return {
        decodeJson: Data_Argonaut_Decode_Decoders.decodeNonEmpty_Array(decodeJson(dictDecodeJson))
    };
};
var decodeJsonNonEmpty_List = function (dictDecodeJson) {
    return {
        decodeJson: Data_Argonaut_Decode_Decoders.decodeNonEmpty_List(decodeJson(dictDecodeJson))
    };
};
var decodeJsonTuple = function (dictDecodeJson) {
    var decodeJson1 = decodeJson(dictDecodeJson);
    return function (dictDecodeJson1) {
        return {
            decodeJson: Data_Argonaut_Decode_Decoders.decodeTuple(decodeJson1)(decodeJson(dictDecodeJson1))
        };
    };
};
var decodeList = function (dictDecodeJson) {
    return {
        decodeJson: Data_Argonaut_Decode_Decoders.decodeList(decodeJson(dictDecodeJson))
    };
};
var decodeMap = function (dictOrd) {
    var decodeMap1 = Data_Argonaut_Decode_Decoders.decodeMap(dictOrd);
    return function (dictDecodeJson) {
        var decodeJson1 = decodeJson(dictDecodeJson);
        return function (dictDecodeJson1) {
            return {
                decodeJson: decodeMap1(decodeJson1)(decodeJson(dictDecodeJson1))
            };
        };
    };
};
var decodeSet = function (dictOrd) {
    var decodeSet1 = Data_Argonaut_Decode_Decoders.decodeSet(dictOrd);
    return function (dictDecodeJson) {
        return {
            decodeJson: decodeSet1(decodeJson(dictDecodeJson))
        };
    };
};
var decodeIdentity = function (dictDecodeJson) {
    return {
        decodeJson: Data_Argonaut_Decode_Decoders.decodeIdentity(decodeJson(dictDecodeJson))
    };
};
var decodeForeignObject = function (dictDecodeJson) {
    return {
        decodeJson: Data_Argonaut_Decode_Decoders.decodeForeignObject(decodeJson(dictDecodeJson))
    };
};
var decodeFieldMaybe = function (dictDecodeJson) {
    var decodeJson1 = decodeJson(decodeJsonMaybe(dictDecodeJson));
    return {
        decodeJsonField: function (v) {
            if (v instanceof Data_Maybe.Nothing) {
                return new Data_Maybe.Just(new Data_Either.Right(Data_Maybe.Nothing.value));
            };
            if (v instanceof Data_Maybe.Just) {
                return new Data_Maybe.Just(decodeJson1(v.value0));
            };
            throw new Error("Failed pattern match at Data.Argonaut.Decode.Class (line 139, column 1 - line 143, column 49): " + [ v.constructor.name ]);
        }
    };
};
var decodeFieldId = function (dictDecodeJson) {
    var decodeJson1 = decodeJson(dictDecodeJson);
    return {
        decodeJsonField: function (j) {
            return map(decodeJson1)(j);
        }
    };
};
var decodeArray = function (dictDecodeJson) {
    return {
        decodeJson: Data_Argonaut_Decode_Decoders.decodeArray(decodeJson(dictDecodeJson))
    };
};
export {
    decodeJson,
    decodeJsonField,
    gDecodeJson,
    decodeIdentity,
    decodeJsonMaybe,
    decodeJsonTuple,
    decodeJsonEither,
    decodeJsonNull,
    decodeJsonBoolean,
    decodeJsonNumber,
    decodeJsonInt,
    decodeJsonString,
    decodeJsonNonEmptyString,
    decodeJsonJson,
    decodeJsonNonEmpty_Array,
    decodeJsonNonEmptyArray,
    decodeJsonNonEmpty_List,
    decodeJsonNonEmptyList,
    decodeJsonCodePoint,
    decodeForeignObject,
    decodeArray,
    decodeList,
    decodeSet,
    decodeMap,
    decodeVoid,
    decodeRecord,
    gDecodeJsonNil,
    gDecodeJsonCons,
    decodeFieldMaybe,
    decodeFieldId
};
//# sourceMappingURL=index.js.map
