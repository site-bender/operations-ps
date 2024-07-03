import * as Control_Apply from "../Control.Apply/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Data_Array from "../Data.Array/index.js";
import * as Data_Array_NonEmpty from "../Data.Array.NonEmpty/index.js";
import * as Data_Codec from "../Data.Codec/index.js";
import * as Data_Codec_Argonaut from "../Data.Codec.Argonaut/index.js";
import * as Data_Codec_Argonaut_Sum from "../Data.Codec.Argonaut.Sum/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Foldable from "../Data.Foldable/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_List from "../Data.List/index.js";
import * as Data_List_NonEmpty from "../Data.List.NonEmpty/index.js";
import * as Data_List_Types from "../Data.List.Types/index.js";
import * as Data_Map_Internal from "../Data.Map.Internal/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Profunctor from "../Data.Profunctor/index.js";
import * as Data_Set from "../Data.Set/index.js";
import * as Data_Set_NonEmpty from "../Data.Set.NonEmpty/index.js";
import * as Data_String_NonEmpty_Internal from "../Data.String.NonEmpty.Internal/index.js";
import * as Data_Traversable from "../Data.Traversable/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
import * as Data_Unfoldable from "../Data.Unfoldable/index.js";
import * as Foreign_Object from "../Foreign.Object/index.js";
var apply = /* #__PURE__ */ Control_Apply.apply(/* #__PURE__ */ Data_Codec.applyCodec(Data_Either.applyEither)(Data_List_Types.semigroupList));
var map1 = /* #__PURE__ */ Data_Functor.map(/* #__PURE__ */ Data_Codec.functorCodec(Data_Either.functorEither));
var profunctorCodec = /* #__PURE__ */ Data_Codec.profunctorCodec(Data_Either.functorEither);
var lcmap = /* #__PURE__ */ Data_Profunctor.lcmap(profunctorCodec);
var composeKleisliFlipped = /* #__PURE__ */ Control_Bind.composeKleisliFlipped(Data_Either.bindEither);
var map2 = /* #__PURE__ */ Data_Functor.map(Data_Either.functorEither);
var fromFoldableWithIndex = /* #__PURE__ */ Data_Map_Internal.fromFoldableWithIndex(Data_Ord.ordString)(Foreign_Object.foldableWithIndexObject);
var traverse = /* #__PURE__ */ Data_Traversable.traverse(Foreign_Object.traversableObject)(Data_Either.applicativeEither);
var fromFoldableWithIndex1 = /* #__PURE__ */ Foreign_Object.fromFoldableWithIndex(Data_Map_Internal.foldableWithIndexMap);
var map3 = /* #__PURE__ */ Data_Functor.map(Data_Map_Internal.functorMap);
var dimap = /* #__PURE__ */ Data_Profunctor.dimap(profunctorCodec);
var fromFoldable = /* #__PURE__ */ Data_Array.fromFoldable(Data_Set.foldableSet);
var fromFoldable1 = /* #__PURE__ */ Data_Set.fromFoldable(Data_Foldable.foldableArray);
var fromFoldable2 = /* #__PURE__ */ Data_Set_NonEmpty.fromFoldable(Data_Foldable.foldableArray);
var toUnfoldable = /* #__PURE__ */ Data_Set_NonEmpty.toUnfoldable(Data_Unfoldable.unfoldableArray);
var fromFoldable3 = /* #__PURE__ */ Data_List_NonEmpty.fromFoldable(Data_Foldable.foldableArray);
var fromFoldable4 = /* #__PURE__ */ Data_Array.fromFoldable(Data_List_Types.foldableNonEmptyList);
var toUnfoldable1 = /* #__PURE__ */ Data_Map_Internal.toUnfoldable(Data_Unfoldable.unfoldableArray);
var fromFoldable5 = /* #__PURE__ */ Data_Array.fromFoldable(Data_List_Types.foldableList);
var fromFoldable6 = /* #__PURE__ */ Data_List.fromFoldable(Data_Foldable.foldableArray);

// | A codec for `Tuple` values.
// |
// | Encodes as a two-element array in JSON.
var tuple = function (codecA) {
    return function (codecB) {
        return Data_Codec_Argonaut.indexedArray("Tuple")(apply(map1(Data_Tuple.Tuple.create)(lcmap(Data_Tuple.fst)(Data_Codec_Argonaut.index(0)(codecA))))(lcmap(Data_Tuple.snd)(Data_Codec_Argonaut.index(1)(codecB))));
    };
};

// | A codec for `Map` values which have string keys.
// |
// | Encodes as an object in JSON.
var strMap = function (codec) {
    return Data_Codec["codec$prime"](composeKleisliFlipped((function () {
        var $54 = map2(fromFoldableWithIndex);
        var $55 = traverse(Data_Codec.decode(codec));
        return function ($56) {
            return $54($55($56));
        };
    })())(Data_Codec.decode(Data_Codec_Argonaut.jobject)))((function () {
        var $57 = Data_Codec.encode(Data_Codec_Argonaut.jobject);
        var $58 = map3(Data_Codec.encode(codec));
        return function ($59) {
            return $57(fromFoldableWithIndex1($58($59)));
        };
    })());
};

// | A codec for `Set` values.
// |
// | Encodes as an array in JSON.
var set = function (dictOrd) {
    var fromFoldable7 = fromFoldable1(dictOrd);
    return function (codec) {
        return dimap(fromFoldable)(fromFoldable7)(Data_Codec_Argonaut.named("Set")(Data_Codec_Argonaut.array(codec)));
    };
};

// | A codec for `NonEmptyString` values.
// |
// | Encodes as the standard type in JSON, but will fail to decode if the string is empty.
var nonEmptyString = /* #__PURE__ */ Data_Codec_Argonaut.prismaticCodec("NonEmptyString")(Data_String_NonEmpty_Internal.fromString)(Data_String_NonEmpty_Internal.toString)(Data_Codec_Argonaut.string);

// | A codec for `NonEmptySet` values.
// |
// | Encodes as an array in JSON.
var nonEmptySet = function (dictOrd) {
    var fromFoldable7 = fromFoldable2(dictOrd);
    return function (codec) {
        return Data_Codec_Argonaut.prismaticCodec("NonEmptySet")(fromFoldable7)(toUnfoldable)(Data_Codec_Argonaut.array(codec));
    };
};

// | A codec for `NonEmptyList` values.
// |
// | Encodes as an array in JSON.
var nonEmptyList = function (codec) {
    return Data_Codec_Argonaut.prismaticCodec("NonEmptyList")(fromFoldable3)(fromFoldable4)(Data_Codec_Argonaut.array(codec));
};

// | A codec for `NonEmptyArray` values.
// |
// | Encodes as the standard type in JSON, but will fail to decode if the array is empty.
var nonEmptyArray = function (codec) {
    return Data_Codec_Argonaut.prismaticCodec("NonEmptyArray")(Data_Array_NonEmpty.fromArray)(Data_Array_NonEmpty.toArray)(Data_Codec_Argonaut.array(codec));
};

// | A codec for `Maybe` values.
// |
// | NOTE: This is not suitable to en/decode null values. If you need these kinds of codecs,
// | look into `Data.Codec.Argonaut.Compat`
var maybe = function (codec) {
    var printTag = function (v) {
        if (!v) {
            return "Nothing";
        };
        if (v) {
            return "Just";
        };
        throw new Error("Failed pattern match at Data.Codec.Argonaut.Common (line 45, column 14 - line 47, column 18): " + [ v.constructor.name ]);
    };
    var parseTag = function (v) {
        if (v === "Nothing") {
            return new Data_Maybe.Just(false);
        };
        if (v === "Just") {
            return new Data_Maybe.Just(true);
        };
        return Data_Maybe.Nothing.value;
    };
    var enc = function (v) {
        if (v instanceof Data_Maybe.Nothing) {
            return new Data_Tuple.Tuple(false, Data_Maybe.Nothing.value);
        };
        if (v instanceof Data_Maybe.Just) {
            return new Data_Tuple.Tuple(true, new Data_Maybe.Just(Data_Codec.encode(codec)(v.value0)));
        };
        throw new Error("Failed pattern match at Data.Codec.Argonaut.Common (line 55, column 9 - line 57, column 48): " + [ v.constructor.name ]);
    };
    var dec = function (v) {
        if (!v) {
            return new Data_Either.Left(Data_Maybe.Nothing.value);
        };
        if (v) {
            return new Data_Either.Right((function () {
                var $60 = map2(Data_Maybe.Just.create);
                var $61 = Data_Codec.decode(codec);
                return function ($62) {
                    return $60($61($62));
                };
            })());
        };
        throw new Error("Failed pattern match at Data.Codec.Argonaut.Common (line 52, column 9 - line 54, column 47): " + [ v.constructor.name ]);
    };
    return Data_Codec_Argonaut_Sum.taggedSum("Maybe")(printTag)(parseTag)(dec)(enc);
};

// | A codec for `Map` values.
// |
// | Encodes as an array of two-element key/value arrays in JSON.
var map = function (dictOrd) {
    var fromFoldable7 = Data_Map_Internal.fromFoldable(dictOrd)(Data_Foldable.foldableArray);
    return function (codecA) {
        return function (codecB) {
            return dimap(toUnfoldable1)(fromFoldable7)(Data_Codec_Argonaut.named("Map")(Data_Codec_Argonaut.array(tuple(codecA)(codecB))));
        };
    };
};

// | A codec for `List` values.
// |
// | Encodes as an array in JSON.
var list = function (codec) {
    return dimap(fromFoldable5)(fromFoldable6)(Data_Codec_Argonaut.named("List")(Data_Codec_Argonaut.array(codec)));
};

// | A codec for `Object` values.
// |
// | Encodes as an array of two-element key/value arrays in JSON.
var foreignObject = /* #__PURE__ */ (function () {
    var $63 = dimap(Foreign_Object.toUnfoldable(Data_Unfoldable.unfoldableArray))(Foreign_Object.fromFoldable(Data_Foldable.foldableArray));
    var $64 = tuple(Data_Codec_Argonaut.string);
    return function ($65) {
        return $63(Data_Codec_Argonaut.array($64($65)));
    };
})();

// | A codec for `Either` values.
var either = function (codecA) {
    return function (codecB) {
        var printTag = function (v) {
            if (v) {
                return "Left";
            };
            if (!v) {
                return "Right";
            };
            throw new Error("Failed pattern match at Data.Codec.Argonaut.Common (line 72, column 14 - line 74, column 20): " + [ v.constructor.name ]);
        };
        var parseTag = function (v) {
            if (v === "Left") {
                return new Data_Maybe.Just(true);
            };
            if (v === "Right") {
                return new Data_Maybe.Just(false);
            };
            return Data_Maybe.Nothing.value;
        };
        var enc = function (v) {
            if (v instanceof Data_Either.Left) {
                return new Data_Tuple.Tuple(true, new Data_Maybe.Just(Data_Codec.encode(codecA)(v.value0)));
            };
            if (v instanceof Data_Either.Right) {
                return new Data_Tuple.Tuple(false, new Data_Maybe.Just(Data_Codec.encode(codecB)(v.value0)));
            };
            throw new Error("Failed pattern match at Data.Codec.Argonaut.Common (line 82, column 9 - line 84, column 51): " + [ v.constructor.name ]);
        };
        var dec = function (v) {
            if (v) {
                return new Data_Either.Right((function () {
                    var $66 = map2(Data_Either.Left.create);
                    var $67 = Data_Codec.decode(codecA);
                    return function ($68) {
                        return $66($67($68));
                    };
                })());
            };
            if (!v) {
                return new Data_Either.Right((function () {
                    var $69 = map2(Data_Either.Right.create);
                    var $70 = Data_Codec.decode(codecB);
                    return function ($71) {
                        return $69($70($71));
                    };
                })());
            };
            throw new Error("Failed pattern match at Data.Codec.Argonaut.Common (line 79, column 9 - line 81, column 50): " + [ v.constructor.name ]);
        };
        return Data_Codec_Argonaut_Sum.taggedSum("Either")(printTag)(parseTag)(dec)(enc);
    };
};
export {
    either,
    foreignObject,
    list,
    map,
    maybe,
    nonEmptyArray,
    nonEmptyList,
    nonEmptySet,
    nonEmptyString,
    set,
    strMap,
    tuple
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
    named,
    null,
    number,
    object,
    printJsonDecodeError,
    prismaticCodec,
    prop,
    record,
    recordProp,
    recordPropOptional,
    string,
    void
} from "../Data.Codec.Argonaut/index.js";
