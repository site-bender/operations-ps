import * as Data_Codec_Argonaut from "../Data.Codec.Argonaut/index.js";
import * as Record from "../Record/index.js";
import * as Safe_Coerce from "../Safe.Coerce/index.js";
import * as Type_Proxy from "../Type.Proxy/index.js";
var coerce = /* #__PURE__ */ Safe_Coerce.coerce();

// | Used to wrap codec values provided in `record` to indicate the field is optional.
// |
// | This will only decode the property as `Nothing` if the field does not exist
// | in the object - having a values such as `null` assigned will need handling
// | separately.
// |
// | The property will be omitted when encoding and the value is `Nothing`.
var Optional = function (x) {
    return x;
};
var rowListCodecNil = {
    rowListCodec: function (v) {
        return function (v1) {
            return Data_Codec_Argonaut.record;
        };
    }
};
var rowListCodec = function (dict) {
    return dict.rowListCodec;
};
var rowListCodecCons = function (dictRowListCodec) {
    var rowListCodec1 = rowListCodec(dictRowListCodec);
    return function () {
        return function () {
            return function (dictIsSymbol) {
                var get = Record.get(dictIsSymbol)();
                var recordProp = Data_Codec_Argonaut.recordProp(dictIsSymbol)();
                return {
                    rowListCodec: function (v) {
                        return function (codecs) {
                            var tail = rowListCodec1(Type_Proxy["Proxy"].value)(codecs);
                            var codec = get(Type_Proxy["Proxy"].value)(codecs);
                            return recordProp(Type_Proxy["Proxy"].value)(codec)(tail);
                        };
                    }
                };
            };
        };
    };
};
var rowListCodecConsOptional = function (dictRowListCodec) {
    var rowListCodec1 = rowListCodec(dictRowListCodec);
    return function () {
        return function () {
            return function (dictIsSymbol) {
                var get = Record.get(dictIsSymbol)();
                var recordPropOptional = Data_Codec_Argonaut.recordPropOptional(dictIsSymbol)();
                return {
                    rowListCodec: function (v) {
                        return function (codecs) {
                            var tail = rowListCodec1(Type_Proxy["Proxy"].value)(codecs);
                            var codec = coerce(get(Type_Proxy["Proxy"].value)(codecs));
                            return recordPropOptional(Type_Proxy["Proxy"].value)(codec)(tail);
                        };
                    }
                };
            };
        };
    };
};

// | Constructs a `JPropCodec` for a `Record` from a record of codecs. Commonly
// | the `object` function in this module will be the preferred choice, as that
// | produces a `JsonCodec` instead.
var record = function () {
    return function (dictRowListCodec) {
        return rowListCodec(dictRowListCodec)(Type_Proxy["Proxy"].value);
    };
};
var record1 = /* #__PURE__ */ record();

// | A lowercase alias for `Optional`, provided for stylistic reasons only.
var optional = Optional;

// | Constructs a `JsonCodec` for a `Record` from a name and a record of codecs.
// | The name is used in the error message produced when decoding fails.
// |
// | ```purescript
// | type Person = { name ∷ String, age ∷ Int }
// |
// | personCodec ∷ CA.JsonCodec Person
// | personCodec = CAR.object "Person" { name: CA.string, age: CA.int }
// | ```
var object = function () {
    return function (dictRowListCodec) {
        var record2 = record1(dictRowListCodec);
        return function (name) {
            return function (rec) {
                return Data_Codec_Argonaut.object(name)(record2(rec));
            };
        };
    };
};
export {
    rowListCodec,
    object,
    record,
    Optional,
    optional,
    rowListCodecNil,
    rowListCodecConsOptional,
    rowListCodecCons
};
