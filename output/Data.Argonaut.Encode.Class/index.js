// Generated by purs version 0.15.15
import * as Control_Category from "../Control.Category/index.js";
import * as Data_Argonaut_Core from "../Data.Argonaut.Core/index.js";
import * as Data_Argonaut_Encode_Encoders from "../Data.Argonaut.Encode.Encoders/index.js";
import * as Data_Symbol from "../Data.Symbol/index.js";
import * as Foreign_Object from "../Foreign.Object/index.js";
import * as Record from "../Record/index.js";
import * as Type_Proxy from "../Type.Proxy/index.js";
var gEncodeJsonNil = {
    gEncodeJson: function (v) {
        return function (v1) {
            return Foreign_Object.empty;
        };
    }
};
var gEncodeJson = function (dict) {
    return dict.gEncodeJson;
};
var encodeVoid = {
    encodeJson: Data_Argonaut_Encode_Encoders.encodeVoid
};
var encodeRecord = function (dictGEncodeJson) {
    var gEncodeJson1 = gEncodeJson(dictGEncodeJson);
    return function () {
        return {
            encodeJson: function (rec) {
                return Data_Argonaut_Core.fromObject(gEncodeJson1(rec)(Type_Proxy["Proxy"].value));
            }
        };
    };
};
var encodeNonEmptyString = {
    encodeJson: Data_Argonaut_Encode_Encoders.encodeNonEmptyString
};
var encodeJsonUnit = {
    encodeJson: Data_Argonaut_Encode_Encoders.encodeUnit
};
var encodeJsonJson = {
    encodeJson: /* #__PURE__ */ Control_Category.identity(Control_Category.categoryFn)
};
var encodeJsonJString = {
    encodeJson: Data_Argonaut_Encode_Encoders.encodeString
};
var encodeJsonJNumber = {
    encodeJson: Data_Argonaut_Encode_Encoders.encodeNumber
};
var encodeJsonJBoolean = {
    encodeJson: Data_Argonaut_Encode_Encoders.encodeBoolean
};
var encodeJsonInt = {
    encodeJson: Data_Argonaut_Encode_Encoders.encodeInt
};
var encodeJsonCodePoint = {
    encodeJson: Data_Argonaut_Encode_Encoders.encodeCodePoint
};
var encodeJsonChar = {
    encodeJson: Data_Argonaut_Encode_Encoders.encodeChar
};
var encodeJson = function (dict) {
    return dict.encodeJson;
};
var encodeJsonArray = function (dictEncodeJson) {
    return {
        encodeJson: Data_Argonaut_Encode_Encoders.encodeArray(encodeJson(dictEncodeJson))
    };
};
var encodeJsonEither = function (dictEncodeJson) {
    var encodeJson1 = encodeJson(dictEncodeJson);
    return function (dictEncodeJson1) {
        return {
            encodeJson: Data_Argonaut_Encode_Encoders.encodeEither(encodeJson1)(encodeJson(dictEncodeJson1))
        };
    };
};
var encodeJsonList = function (dictEncodeJson) {
    return {
        encodeJson: Data_Argonaut_Encode_Encoders.encodeList(encodeJson(dictEncodeJson))
    };
};
var encodeJsonMaybe = function (dictEncodeJson) {
    return {
        encodeJson: Data_Argonaut_Encode_Encoders.encodeMaybe(encodeJson(dictEncodeJson))
    };
};
var encodeJsonNonEmptyArray = function (dictEncodeJson) {
    return {
        encodeJson: Data_Argonaut_Encode_Encoders.encodeNonEmptyArray(encodeJson(dictEncodeJson))
    };
};
var encodeJsonNonEmptyList = function (dictEncodeJson) {
    return {
        encodeJson: Data_Argonaut_Encode_Encoders.encodeNonEmptyList(encodeJson(dictEncodeJson))
    };
};
var encodeJsonNonEmpty_Array = function (dictEncodeJson) {
    return {
        encodeJson: Data_Argonaut_Encode_Encoders.encodeNonEmpty_Array(encodeJson(dictEncodeJson))
    };
};
var encodeJsonNonEmpty_List = function (dictEncodeJson) {
    return {
        encodeJson: Data_Argonaut_Encode_Encoders.encodeNonEmpty_List(encodeJson(dictEncodeJson))
    };
};
var encodeJsonTuple = function (dictEncodeJson) {
    var encodeJson1 = encodeJson(dictEncodeJson);
    return function (dictEncodeJson1) {
        return {
            encodeJson: Data_Argonaut_Encode_Encoders.encodeTuple(encodeJson1)(encodeJson(dictEncodeJson1))
        };
    };
};
var encodeMap = function (dictOrd) {
    var encodeMap1 = Data_Argonaut_Encode_Encoders.encodeMap(dictOrd);
    return function (dictEncodeJson) {
        var encodeJson1 = encodeJson(dictEncodeJson);
        return function (dictEncodeJson1) {
            return {
                encodeJson: encodeMap1(encodeJson1)(encodeJson(dictEncodeJson1))
            };
        };
    };
};
var encodeSet = function (dictOrd) {
    var encodeSet1 = Data_Argonaut_Encode_Encoders.encodeSet(dictOrd);
    return function (dictEncodeJson) {
        return {
            encodeJson: encodeSet1(encodeJson(dictEncodeJson))
        };
    };
};
var gEncodeJsonCons = function (dictEncodeJson) {
    var encodeJson1 = encodeJson(dictEncodeJson);
    return function (dictGEncodeJson) {
        var gEncodeJson1 = gEncodeJson(dictGEncodeJson);
        return function (dictIsSymbol) {
            var reflectSymbol = Data_Symbol.reflectSymbol(dictIsSymbol);
            var get = Record.get(dictIsSymbol)();
            return function () {
                return {
                    gEncodeJson: function (row) {
                        return function (v) {
                            return Foreign_Object.insert(reflectSymbol(Type_Proxy["Proxy"].value))(encodeJson1(get(Type_Proxy["Proxy"].value)(row)))(gEncodeJson1(row)(Type_Proxy["Proxy"].value));
                        };
                    }
                };
            };
        };
    };
};
var encodeIdentity = function (dictEncodeJson) {
    return {
        encodeJson: Data_Argonaut_Encode_Encoders.encodeIdentity(encodeJson(dictEncodeJson))
    };
};
var encodeForeignObject = function (dictEncodeJson) {
    return {
        encodeJson: Data_Argonaut_Encode_Encoders.encodeForeignObject(encodeJson(dictEncodeJson))
    };
};
export {
    encodeJson,
    gEncodeJson,
    encodeIdentity,
    encodeJsonMaybe,
    encodeJsonTuple,
    encodeJsonEither,
    encodeJsonUnit,
    encodeJsonJBoolean,
    encodeJsonJNumber,
    encodeJsonInt,
    encodeJsonJString,
    encodeJsonJson,
    encodeJsonCodePoint,
    encodeNonEmptyString,
    encodeJsonNonEmpty_Array,
    encodeJsonNonEmptyArray,
    encodeJsonNonEmpty_List,
    encodeJsonNonEmptyList,
    encodeJsonChar,
    encodeJsonArray,
    encodeJsonList,
    encodeForeignObject,
    encodeSet,
    encodeMap,
    encodeVoid,
    encodeRecord,
    gEncodeJsonNil,
    gEncodeJsonCons
};
