// | Codecs that are compatible with `purescript-argonaut-codecs`.
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Data_Argonaut_Core from "../Data.Argonaut.Core/index.js";
import * as Data_Bifunctor from "../Data.Bifunctor/index.js";
import * as Data_Boolean from "../Data.Boolean/index.js";
import * as Data_Codec from "../Data.Codec/index.js";
import * as Data_Codec_Argonaut from "../Data.Codec.Argonaut/index.js";
import * as Data_Codec_Argonaut_Common from "../Data.Codec.Argonaut.Common/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Foldable from "../Data.Foldable/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Traversable from "../Data.Traversable/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
import * as Data_Unfoldable from "../Data.Unfoldable/index.js";
import * as Foreign_Object from "../Foreign.Object/index.js";
var pure = /* #__PURE__ */ Control_Applicative.pure(Data_Either.applicativeEither);
var bimap = /* #__PURE__ */ Data_Bifunctor.bimap(Data_Bifunctor.bifunctorEither);
var fromFoldable = /* #__PURE__ */ Foreign_Object.fromFoldable(Data_Foldable.foldableArray);
var composeKleisliFlipped = /* #__PURE__ */ Control_Bind.composeKleisliFlipped(Data_Either.bindEither);
var lmap = /* #__PURE__ */ Data_Bifunctor.lmap(Data_Bifunctor.bifunctorEither);
var map = /* #__PURE__ */ Data_Functor.map(Data_Either.functorEither);
var traverse = /* #__PURE__ */ Data_Traversable.traverse(Data_Traversable.traversableArray)(Data_Either.applicativeEither);
var toUnfoldable = /* #__PURE__ */ Foreign_Object.toUnfoldable(Data_Unfoldable.unfoldableArray);
var map1 = /* #__PURE__ */ Data_Functor.map(Foreign_Object.functorObject);

// | A codec for `Maybe` values.
// |
// | Encodes and decodes `Nothing` as `null`
// |
// | Note: this codec cannot represent nested `Maybe` values in a lossless
// | manner.
var maybe = function (codec) {
    var enc = function (v) {
        if (v instanceof Data_Maybe.Nothing) {
            return Data_Argonaut_Core.jsonNull;
        };
        if (v instanceof Data_Maybe.Just) {
            return Data_Codec.encode(codec)(v.value0);
        };
        throw new Error("Failed pattern match at Data.Codec.Argonaut.Compat (line 35, column 9 - line 37, column 28): " + [ v.constructor.name ]);
    };
    var dec = function (j) {
        if (Data_Argonaut_Core.isNull(j)) {
            return pure(Data_Maybe.Nothing.value);
        };
        if (Data_Boolean.otherwise) {
            return bimap(Data_Codec_Argonaut.Named.create("Maybe"))(Data_Maybe.Just.create)(Data_Codec.decode(codec)(j));
        };
        throw new Error("Failed pattern match at Data.Codec.Argonaut.Compat (line 29, column 3 - line 29, column 50): " + [ j.constructor.name ]);
    };
    return Data_Codec["codec$prime"](dec)(enc);
};

// | A codec for `StrMap` values.
// |
// | Encodes as a JSON object with the keys as properties.
// |
// | ```purescript
// | encode (foreignObject int) (Foreign.Object.fromFoldable [Tuple "a" 1, Tuple "b" 2]) == "{ \"a\": 1, \"b\": 2}"
// | ```
var foreignObject = function (codec) {
    var decodeItem = function (v) {
        return bimap(Data_Codec_Argonaut.AtKey.create(v.value0))(Data_Tuple.Tuple.create(v.value0))(Data_Codec.decode(codec)(v.value1));
    };
    return Data_Codec["codec$prime"](composeKleisliFlipped((function () {
        var $19 = lmap(Data_Codec_Argonaut.Named.create("StrMap"));
        var $20 = map(fromFoldable);
        var $21 = traverse(decodeItem);
        return function ($22) {
            return $19($20($21(toUnfoldable($22))));
        };
    })())(Data_Codec.decode(Data_Codec_Argonaut.jobject)))((function () {
        var $23 = Data_Codec.encode(Data_Codec_Argonaut.jobject);
        var $24 = map1(Data_Codec.encode(codec));
        return function ($25) {
            return $23($24($25));
        };
    })());
};
export {
    foreignObject,
    maybe
};
export {
    Codec,
    AtIndex,
    AtKey,
    MissingValue,
    Named,
    TypeMismatch,
    UnexpectedValue,
    array,
    boolean,
    char,
    codePoint,
    codec,
    codec$prime,
    coercible,
    decode,
    either,
    encode,
    fix,
    hoist,
    identity,
    index,
    indexedArray,
    int,
    jarray,
    jobject,
    json,
    list,
    map,
    named,
    nonEmptyArray,
    nonEmptyList,
    nonEmptySet,
    nonEmptyString,
    null,
    number,
    object,
    printJsonDecodeError,
    prismaticCodec,
    prop,
    record,
    recordProp,
    recordPropOptional,
    set,
    strMap,
    string,
    tuple,
    void
} from "../Data.Codec.Argonaut.Common/index.js";
