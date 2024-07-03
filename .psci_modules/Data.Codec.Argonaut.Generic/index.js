import * as Control_Alt from "../Control.Alt/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Data_Argonaut_Core from "../Data.Argonaut.Core/index.js";
import * as Data_Codec from "../Data.Codec/index.js";
import * as Data_Codec_Argonaut from "../Data.Codec.Argonaut/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Generic_Rep from "../Data.Generic.Rep/index.js";
import * as Data_Symbol from "../Data.Symbol/index.js";
import * as Type_Proxy from "../Type.Proxy/index.js";
var alt = /* #__PURE__ */ Control_Alt.alt(Data_Either.altEither);
var map = /* #__PURE__ */ Data_Functor.map(Data_Either.functorEither);
var bind = /* #__PURE__ */ Control_Bind.bind(Data_Either.bindEither);
var nullarySumEncode = function (dict) {
    return dict.nullarySumEncode;
};
var nullarySumDecode = function (dict) {
    return dict.nullarySumDecode;
};
var nullarySumCodecSum = function (dictNullarySumCodec) {
    var nullarySumEncode1 = nullarySumEncode(dictNullarySumCodec);
    var nullarySumDecode1 = nullarySumDecode(dictNullarySumCodec);
    return function (dictNullarySumCodec1) {
        var nullarySumEncode2 = nullarySumEncode(dictNullarySumCodec1);
        var nullarySumDecode2 = nullarySumDecode(dictNullarySumCodec1);
        return {
            nullarySumEncode: function (v) {
                if (v instanceof Data_Generic_Rep.Inl) {
                    return nullarySumEncode1(v.value0);
                };
                if (v instanceof Data_Generic_Rep.Inr) {
                    return nullarySumEncode2(v.value0);
                };
                throw new Error("Failed pattern match at Data.Codec.Argonaut.Generic (line 36, column 22 - line 38, column 31): " + [ v.constructor.name ]);
            },
            nullarySumDecode: function (name) {
                return function (j) {
                    return alt(map(Data_Generic_Rep.Inl.create)(nullarySumDecode1(name)(j)))(map(Data_Generic_Rep.Inr.create)(nullarySumDecode2(name)(j)));
                };
            }
        };
    };
};
var nullarySumCodecCtor = function (dictIsSymbol) {
    var reflectSymbol = Data_Symbol.reflectSymbol(dictIsSymbol);
    return {
        nullarySumEncode: function (v) {
            return Data_Argonaut_Core.fromString(reflectSymbol(Type_Proxy["Proxy"].value));
        },
        nullarySumDecode: function (name) {
            return function (j) {
                return bind(Data_Either.note(new Data_Codec_Argonaut.Named(name, new Data_Codec_Argonaut.TypeMismatch("String")))(Data_Argonaut_Core.toString(j)))(function (tag) {
                    var $26 = tag !== reflectSymbol(Type_Proxy["Proxy"].value);
                    if ($26) {
                        return new Data_Either.Left(new Data_Codec_Argonaut.Named(name, new Data_Codec_Argonaut.UnexpectedValue(j)));
                    };
                    return new Data_Either.Right(Data_Generic_Rep.NoArguments.value);
                });
            };
        }
    };
};

// | Encodes nullary sums with a Generic instance as strings that match the constructor names.
// |
// | ```purescript
// | import Data.Argonaut as J
// |
// | data MySum = Ctor1 | Ctor2 | MoarCtors
// | derive instance genericMySum ∷ Generic MySum _
// |
// | encode (nullarySum "MySum") Ctor1 == J.fromString "Ctor1"
// | decode (nullarySum "MySum") (J.fromString "MoarCtors") == Right MoarCtors
// |```
var nullarySum = function (dictGeneric) {
    var to = Data_Generic_Rep.to(dictGeneric);
    var from = Data_Generic_Rep.from(dictGeneric);
    return function (dictNullarySumCodec) {
        var nullarySumDecode1 = nullarySumDecode(dictNullarySumCodec);
        var nullarySumEncode1 = nullarySumEncode(dictNullarySumCodec);
        return function (name) {
            return Data_Codec["codec$prime"]((function () {
                var $27 = map(to);
                var $28 = nullarySumDecode1(name);
                return function ($29) {
                    return $27($28($29));
                };
            })())(function ($30) {
                return nullarySumEncode1(from($30));
            });
        };
    };
};
export {
    nullarySumDecode,
    nullarySumEncode,
    nullarySum,
    nullarySumCodecSum,
    nullarySumCodecCtor
};
