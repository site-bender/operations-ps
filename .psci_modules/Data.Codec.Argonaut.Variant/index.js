import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Data_Codec from "../Data.Codec/index.js";
import * as Data_Codec_Argonaut from "../Data.Codec.Argonaut/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Symbol from "../Data.Symbol/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
import * as Data_Variant from "../Data.Variant/index.js";
import * as Foreign_Object from "../Foreign.Object/index.js";
import * as Foreign_Object_ST from "../Foreign.Object.ST/index.js";
import * as Record from "../Record/index.js";
import * as Type_Equality from "../Type.Equality/index.js";
import * as Type_Proxy from "../Type.Proxy/index.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
var on = /* #__PURE__ */ Data_Variant.on();
var voidLeft = /* #__PURE__ */ Data_Functor.voidLeft(Data_Tuple.functorTuple);
var bind1 = /* #__PURE__ */ Control_Bind.bind(Data_Either.bindEither);
var pure1 = /* #__PURE__ */ Control_Applicative.pure(Data_Either.applicativeEither);
var inj = /* #__PURE__ */ Data_Variant.inj();
var map = /* #__PURE__ */ Data_Functor.map(Data_Either.functorEither);
var from = /* #__PURE__ */ Type_Equality.from(Type_Equality.refl);
var variantCodec = function (dict) {
    return dict.variantCodec;
};

// | Builds a codec for a variant from a record, similar to the way
// | `Variant.match` works to pattern match on a variant.
// |
// | Commonly used to write decoders for sum-types, by providing a mapping from
// | and to a Variant from that type and then using `dimap`.
// |
// | Each field in the record accepts an `Either`, where `Right` is used to
// | specify a codec used for the constructor, and `Left` is used to specify a
// | static value (generally as `Left unit` for nullary constructors).
// |
// | The variant will be encoded as a JSON object of the form
// | `{ "tag": <name>, "value": <value> }`, where `<name>` is the name of the
// | variant case, and `<value>` is the associated value (omitted in the case
// | of static `Left`-defined values).
// |
// |```purescript
// | codecMaybeMatch ∷ ∀ a. JA.JsonCodec a → JA.JsonCodec (Maybe a)
// | codecMaybeMatch codecA =
// |   dimap toVariant fromVariant
// |     (JAV.variantMatch
// |       { just: Right codecA
// |       , nothing: Left unit
// |       })
// |   where
// |   toVariant = case _ of
// |     Just a → V.inj (Proxy ∷ _ "just") a
// |     Nothing → V.inj (Proxy ∷ _ "nothing") unit
// |   fromVariant = V.match
// |     { just: Just
// |     , nothing: \_ → Nothing
// |     }
// |```
var variantMatch = function () {
    return function (dictVariantCodec) {
        return variantCodec(dictVariantCodec)(Type_Proxy["Proxy"].value);
    };
};
var variantCase = function (dictIsSymbol) {
    var on1 = on(dictIsSymbol);
    var reflectSymbol = Data_Symbol.reflectSymbol(dictIsSymbol);
    var inj1 = inj(dictIsSymbol);
    return function () {
        return function (proxy) {
            return function (eacodec) {
                return function (v) {
                    var enc$prime = function (v1) {
                        return on1(proxy)(function (v$prime) {
                            return Data_Function.flip(Data_Tuple.Tuple.create)(v1)(Data_Codec.encode(Data_Codec_Argonaut.jobject)(Foreign_Object.runST(function __do() {
                                var obj = Foreign_Object_ST["new"]();
                                Foreign_Object_ST.poke("tag")(Data_Codec.encode(Data_Codec_Argonaut.string)(reflectSymbol(proxy)))(obj)();
                                if (eacodec instanceof Data_Either.Left) {
                                    return obj;
                                };
                                if (eacodec instanceof Data_Either.Right) {
                                    return Foreign_Object_ST.poke("value")(Data_Codec.encode(eacodec.value0)(v$prime))(obj)();
                                };
                                throw new Error("Failed pattern match at Data.Codec.Argonaut.Variant (line 119, column 13 - line 121, column 68): " + [ eacodec.constructor.name ]);
                            })));
                        })(function (v$prime) {
                            return voidLeft(v.value1(v$prime))(v1);
                        })(v1);
                    };
                    var dec$prime = function (j) {
                        return bind1(Data_Codec.decode(Data_Codec_Argonaut.jobject)(j))(function (obj) {
                            return bind1(Data_Codec.decode(Data_Codec_Argonaut.prop("tag")(Data_Codec_Argonaut.string))(obj))(function (tag) {
                                var $36 = tag === reflectSymbol(proxy);
                                if ($36) {
                                    if (eacodec instanceof Data_Either.Left) {
                                        return pure1(inj1(proxy)(eacodec.value0));
                                    };
                                    if (eacodec instanceof Data_Either.Right) {
                                        return bind1(Data_Codec.decode(Data_Codec_Argonaut.prop("value")(Data_Codec_Argonaut.json))(obj))(function (value) {
                                            return map(inj1(proxy))(Data_Codec.decode(eacodec.value0)(value));
                                        });
                                    };
                                    throw new Error("Failed pattern match at Data.Codec.Argonaut.Variant (line 104, column 7 - line 108, column 43): " + [ eacodec.constructor.name ]);
                                };
                                return map(Unsafe_Coerce.unsafeCoerce)(v.value0(j));
                            });
                        });
                    };
                    return new Data_Codec.Codec(dec$prime, enc$prime);
                };
            };
        };
    };
};
var variantCodecCons = function (dictVariantCodec) {
    var variantCodec1 = variantCodec(dictVariantCodec);
    return function () {
        return function () {
            return function (dictIsSymbol) {
                var get = Record.get(dictIsSymbol)();
                var variantCase1 = variantCase(dictIsSymbol)();
                return function (dictTypeEquals) {
                    return {
                        variantCodec: function (v) {
                            return function (codecs) {
                                var tail = variantCodec1(Type_Proxy["Proxy"].value)(codecs);
                                var codec = from(get(Type_Proxy["Proxy"].value)(codecs));
                                return variantCase1(Type_Proxy["Proxy"].value)(codec)(tail);
                            };
                        }
                    };
                };
            };
        };
    };
};

// | Builds codecs for variants in combination with `variantCase`.
// |
// | Provides an alternative means of building variant codecs to that of
// | `variantMatch`, often for cases where the codec is being constructed
// | with a fold or some other similar technique.
// |
// |```purescript
// | codecMaybe ∷ ∀ a. JA.JsonCodec a → JA.JsonCodec (Maybe a)
// | codecMaybe codecA =
// |   dimap toVariant fromVariant
// |     (JAV.variant
// |       # JAV.variantCase _Just (Right codecA)
// |       # JAV.variantCase _Nothing (Left unit))
// |   where
// |   toVariant = case _ of
// |     Just a → V.inj _Just a
// |     Nothing → V.inj _Nothing unit
// |   fromVariant = V.case_
// |     # V.on _Just Just
// |     # V.on _Nothing (const Nothing)
// |   _Just = Proxy ∷ Proxy "just"
// |   _Nothing = Proxy ∷ Proxy "nothing"
// |```
var variant = /* #__PURE__ */ (function () {
    return new Data_Codec.Codec(function ($42) {
        return Data_Either.Left.create(Data_Codec_Argonaut.UnexpectedValue.create($42));
    }, Data_Variant.case_);
})();
var variantCodecNil = {
    variantCodec: function (v) {
        return function (v1) {
            return variant;
        };
    }
};
export {
    variantCodec,
    variantMatch,
    variant,
    variantCase,
    variantCodecNil,
    variantCodecCons
};
