import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Apply from "../Control.Apply/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Data_Argonaut_Core from "../Data.Argonaut.Core/index.js";
import * as Data_Argonaut_Decode_Error from "../Data.Argonaut.Decode.Error/index.js";
import * as Data_Array from "../Data.Array/index.js";
import * as Data_Array_NonEmpty from "../Data.Array.NonEmpty/index.js";
import * as Data_Array_NonEmpty_Internal from "../Data.Array.NonEmpty.Internal/index.js";
import * as Data_Bifunctor from "../Data.Bifunctor/index.js";
import * as Data_Boolean from "../Data.Boolean/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Foldable from "../Data.Foldable/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Identity from "../Data.Identity/index.js";
import * as Data_Int from "../Data.Int/index.js";
import * as Data_List from "../Data.List/index.js";
import * as Data_List_NonEmpty from "../Data.List.NonEmpty/index.js";
import * as Data_List_Types from "../Data.List.Types/index.js";
import * as Data_Map_Internal from "../Data.Map.Internal/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_NonEmpty from "../Data.NonEmpty/index.js";
import * as Data_Set from "../Data.Set/index.js";
import * as Data_String_CodePoints from "../Data.String.CodePoints/index.js";
import * as Data_String_NonEmpty_Internal from "../Data.String.NonEmpty.Internal/index.js";
import * as Data_Traversable from "../Data.Traversable/index.js";
import * as Data_TraversableWithIndex from "../Data.TraversableWithIndex/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
import * as Data_Unit from "../Data.Unit/index.js";
import * as Foreign_Object from "../Foreign.Object/index.js";
var pure = /* #__PURE__ */ Control_Applicative.pure(Data_Either.applicativeEither);
var map = /* #__PURE__ */ Data_Functor.map(Data_Either.functorEither);
var lmap = /* #__PURE__ */ Data_Bifunctor.lmap(Data_Bifunctor.bifunctorEither);
var bindFlipped = /* #__PURE__ */ Control_Bind.bindFlipped(Data_Either.bindEither);
var composeKleisliFlipped = /* #__PURE__ */ Control_Bind.composeKleisliFlipped(Data_Either.bindEither);
var traverse = /* #__PURE__ */ Data_Traversable.traverse(Data_List_Types.traversableList)(Data_Either.applicativeEither);
var map1 = /* #__PURE__ */ Data_Functor.map(Data_Functor.functorFn);
var fromFoldable = /* #__PURE__ */ Data_List.fromFoldable(Data_Foldable.foldableArray);
var fromFoldable1 = /* #__PURE__ */ Data_Set.fromFoldable(Data_List_Types.foldableList);
var traverse1 = /* #__PURE__ */ Data_Traversable.traverse(Data_Array_NonEmpty_Internal.traversableNonEmptyArray)(Data_Either.applicativeEither);
var traverse2 = /* #__PURE__ */ Data_Traversable.traverse(Data_List_Types.traversableNonEmptyList)(Data_Either.applicativeEither);
var traverse3 = /* #__PURE__ */ Data_Traversable.traverse(/* #__PURE__ */ Data_NonEmpty.traversableNonEmpty(Data_Traversable.traversableArray))(Data_Either.applicativeEither);
var traverse4 = /* #__PURE__ */ Data_Traversable.traverse(/* #__PURE__ */ Data_NonEmpty.traversableNonEmpty(Data_List_Types.traversableList))(Data_Either.applicativeEither);
var traverse5 = /* #__PURE__ */ Data_Traversable.traverse(Foreign_Object.traversableObject)(Data_Either.applicativeEither);
var bind = /* #__PURE__ */ Control_Bind.bind(Data_Either.bindEither);
var traverseWithIndex = /* #__PURE__ */ Data_TraversableWithIndex.traverseWithIndex(Data_TraversableWithIndex.traversableWithIndexArray)(Data_Either.applicativeEither);
var apply = /* #__PURE__ */ Control_Apply.apply(Data_Either.applyEither);
var getFieldOptional$prime = function (decoder) {
    return function (obj) {
        return function (str) {
            var decode = function (json) {
                var $35 = Data_Argonaut_Core.isNull(json);
                if ($35) {
                    return pure(Data_Maybe.Nothing.value);
                };
                return map(Data_Maybe.Just.create)(lmap(Data_Argonaut_Decode_Error.AtKey.create(str))(decoder(json)));
            };
            return Data_Maybe.maybe(pure(Data_Maybe.Nothing.value))(decode)(Foreign_Object.lookup(str)(obj));
        };
    };
};
var getFieldOptional = function (decoder) {
    return function (obj) {
        return function (str) {
            var decode = (function () {
                var $44 = lmap(Data_Argonaut_Decode_Error.AtKey.create(str));
                return function ($45) {
                    return $44(decoder($45));
                };
            })();
            return Data_Maybe.maybe(pure(Data_Maybe.Nothing.value))((function () {
                var $46 = map(Data_Maybe.Just.create);
                return function ($47) {
                    return $46(decode($47));
                };
            })())(Foreign_Object.lookup(str)(obj));
        };
    };
};
var getField = function (decoder) {
    return function (obj) {
        return function (str) {
            return Data_Maybe.maybe(new Data_Either.Left(new Data_Argonaut_Decode_Error.AtKey(str, Data_Argonaut_Decode_Error.MissingValue.value)))((function () {
                var $48 = lmap(Data_Argonaut_Decode_Error.AtKey.create(str));
                return function ($49) {
                    return $48(decoder($49));
                };
            })())(Foreign_Object.lookup(str)(obj));
        };
    };
};
var decodeVoid = function (v) {
    return new Data_Either.Left(new Data_Argonaut_Decode_Error.UnexpectedValue(Data_Argonaut_Core.fromString("Value cannot be Void")));
};
var decodeString = /* #__PURE__ */ (function () {
    return Data_Argonaut_Core.caseJsonString(new Data_Either.Left(new Data_Argonaut_Decode_Error.TypeMismatch("String")))(Data_Either.Right.create);
})();
var decodeNumber = /* #__PURE__ */ (function () {
    return Data_Argonaut_Core.caseJsonNumber(new Data_Either.Left(new Data_Argonaut_Decode_Error.TypeMismatch("Number")))(Data_Either.Right.create);
})();
var decodeNull = /* #__PURE__ */ (function () {
    return Data_Argonaut_Core.caseJsonNull(new Data_Either.Left(new Data_Argonaut_Decode_Error.TypeMismatch("null")))(Data_Function["const"](new Data_Either.Right(Data_Unit.unit)));
})();
var decodeNonEmptyString = function (json) {
    return bindFlipped(Data_Either.note(new Data_Argonaut_Decode_Error.Named("NonEmptyString", new Data_Argonaut_Decode_Error.UnexpectedValue(json))))(map(Data_String_NonEmpty_Internal.fromString)(decodeString(json)));
};
var decodeMaybe = function (decoder) {
    return function (json) {
        if (Data_Argonaut_Core.isNull(json)) {
            return pure(Data_Maybe.Nothing.value);
        };
        if (Data_Boolean.otherwise) {
            return map(Data_Maybe.Just.create)(decoder(json));
        };
        throw new Error("Failed pattern match at Data.Argonaut.Decode.Decoders (line 37, column 1 - line 41, column 38): " + [ decoder.constructor.name, json.constructor.name ]);
    };
};
var decodeJObject = /* #__PURE__ */ (function () {
    var $50 = Data_Either.note(new Data_Argonaut_Decode_Error.TypeMismatch("Object"));
    return function ($51) {
        return $50(Data_Argonaut_Core.toObject($51));
    };
})();
var decodeJArray = /* #__PURE__ */ (function () {
    var $52 = Data_Either.note(new Data_Argonaut_Decode_Error.TypeMismatch("Array"));
    return function ($53) {
        return $52(Data_Argonaut_Core.toArray($53));
    };
})();
var decodeList = function (decoder) {
    return composeKleisliFlipped((function () {
        var $54 = lmap(Data_Argonaut_Decode_Error.Named.create("List"));
        var $55 = traverse(decoder);
        return function ($56) {
            return $54($55($56));
        };
    })())(map1(map(fromFoldable))(decodeJArray));
};
var decodeSet = function (dictOrd) {
    var fromFoldable2 = fromFoldable1(dictOrd);
    return function (decoder) {
        var $57 = map(fromFoldable2);
        var $58 = decodeList(decoder);
        return function ($59) {
            return $57($58($59));
        };
    };
};
var decodeNonEmptyArray = function (decoder) {
    return composeKleisliFlipped((function () {
        var $60 = lmap(Data_Argonaut_Decode_Error.Named.create("NonEmptyArray"));
        var $61 = traverse1(decoder);
        return function ($62) {
            return $60($61($62));
        };
    })())(composeKleisliFlipped((function () {
        var $63 = map(function (x) {
            return Data_Array_NonEmpty["cons$prime"](x.head)(x.tail);
        });
        var $64 = Data_Either.note(new Data_Argonaut_Decode_Error.TypeMismatch("NonEmptyArray"));
        return function ($65) {
            return $63($64(Data_Array.uncons($65)));
        };
    })())(decodeJArray));
};
var decodeNonEmptyList = function (decoder) {
    return composeKleisliFlipped((function () {
        var $66 = lmap(Data_Argonaut_Decode_Error.Named.create("NonEmptyList"));
        var $67 = traverse2(decoder);
        return function ($68) {
            return $66($67($68));
        };
    })())(composeKleisliFlipped((function () {
        var $69 = map(function (x) {
            return Data_List_NonEmpty["cons$prime"](x.head)(x.tail);
        });
        var $70 = Data_Either.note(new Data_Argonaut_Decode_Error.TypeMismatch("NonEmptyList"));
        return function ($71) {
            return $69($70(Data_List.uncons($71)));
        };
    })())(map1(map(fromFoldable))(decodeJArray)));
};
var decodeNonEmpty_Array = function (decoder) {
    return composeKleisliFlipped((function () {
        var $72 = lmap(Data_Argonaut_Decode_Error.Named.create("NonEmpty Array"));
        var $73 = traverse3(decoder);
        return function ($74) {
            return $72($73($74));
        };
    })())(composeKleisliFlipped((function () {
        var $75 = map(function (x) {
            return new Data_NonEmpty.NonEmpty(x.head, x.tail);
        });
        var $76 = Data_Either.note(new Data_Argonaut_Decode_Error.TypeMismatch("NonEmpty Array"));
        return function ($77) {
            return $75($76(Data_Array.uncons($77)));
        };
    })())(decodeJArray));
};
var decodeNonEmpty_List = function (decoder) {
    return composeKleisliFlipped((function () {
        var $78 = lmap(Data_Argonaut_Decode_Error.Named.create("NonEmpty List"));
        var $79 = traverse4(decoder);
        return function ($80) {
            return $78($79($80));
        };
    })())(composeKleisliFlipped((function () {
        var $81 = map(function (x) {
            return new Data_NonEmpty.NonEmpty(x.head, x.tail);
        });
        var $82 = Data_Either.note(new Data_Argonaut_Decode_Error.TypeMismatch("NonEmpty List"));
        return function ($83) {
            return $81($82(Data_List.uncons($83)));
        };
    })())(map1(map(fromFoldable))(decodeJArray)));
};
var decodeInt = /* #__PURE__ */ composeKleisliFlipped(/* #__PURE__ */ (function () {
    var $84 = Data_Either.note(new Data_Argonaut_Decode_Error.TypeMismatch("Integer"));
    return function ($85) {
        return $84(Data_Int.fromNumber($85));
    };
})())(decodeNumber);
var decodeIdentity = function (decoder) {
    return function (json) {
        return map(Data_Identity.Identity)(decoder(json));
    };
};
var decodeForeignObject = function (decoder) {
    return composeKleisliFlipped((function () {
        var $86 = lmap(Data_Argonaut_Decode_Error.Named.create("ForeignObject"));
        var $87 = traverse5(decoder);
        return function ($88) {
            return $86($87($88));
        };
    })())(decodeJObject);
};
var decodeEither = function (decoderA) {
    return function (decoderB) {
        return function (json) {
            return lmap(Data_Argonaut_Decode_Error.Named.create("Either"))(bind(decodeJObject(json))(function (obj) {
                return bind(Data_Either.note(new Data_Argonaut_Decode_Error.AtKey("tag", Data_Argonaut_Decode_Error.MissingValue.value))(Foreign_Object.lookup("tag")(obj)))(function (tag) {
                    return bind(Data_Either.note(new Data_Argonaut_Decode_Error.AtKey("value", Data_Argonaut_Decode_Error.MissingValue.value))(Foreign_Object.lookup("value")(obj)))(function (val) {
                        var v = Data_Argonaut_Core.toString(tag);
                        if (v instanceof Data_Maybe.Just && v.value0 === "Right") {
                            return map(Data_Either.Right.create)(decoderB(val));
                        };
                        if (v instanceof Data_Maybe.Just && v.value0 === "Left") {
                            return map(Data_Either.Left.create)(decoderA(val));
                        };
                        return new Data_Either.Left(new Data_Argonaut_Decode_Error.AtKey("tag", new Data_Argonaut_Decode_Error.UnexpectedValue(tag)));
                    });
                });
            }));
        };
    };
};
var decodeCodePoint = function (json) {
    return bindFlipped(Data_Either.note(new Data_Argonaut_Decode_Error.Named("CodePoint", new Data_Argonaut_Decode_Error.UnexpectedValue(json))))(map(Data_String_CodePoints.codePointAt(0))(decodeString(json)));
};
var decodeBoolean = /* #__PURE__ */ (function () {
    return Data_Argonaut_Core.caseJsonBoolean(new Data_Either.Left(new Data_Argonaut_Decode_Error.TypeMismatch("Boolean")))(Data_Either.Right.create);
})();
var decodeArray = function (decoder) {
    return composeKleisliFlipped((function () {
        var $89 = lmap(Data_Argonaut_Decode_Error.Named.create("Array"));
        var $90 = traverseWithIndex(function (i) {
            var $92 = lmap(Data_Argonaut_Decode_Error.AtIndex.create(i));
            return function ($93) {
                return $92(decoder($93));
            };
        });
        return function ($91) {
            return $89($90($91));
        };
    })())(decodeJArray);
};
var decodeTuple = function (decoderA) {
    return function (decoderB) {
        return function (json) {
            var f = function (v) {
                if (v.length === 2) {
                    return apply(map(Data_Tuple.Tuple.create)(decoderA(v[0])))(decoderB(v[1]));
                };
                return new Data_Either.Left(new Data_Argonaut_Decode_Error.TypeMismatch("Tuple"));
            };
            return bind(decodeArray(Data_Either.Right.create)(json))(f);
        };
    };
};
var decodeMap = function (dictOrd) {
    var fromFoldable2 = Data_Map_Internal.fromFoldable(dictOrd)(Data_List_Types.foldableList);
    return function (decoderA) {
        return function (decoderB) {
            var $94 = map(fromFoldable2);
            var $95 = decodeList(decodeTuple(decoderA)(decoderB));
            return function ($96) {
                return $94($95($96));
            };
        };
    };
};
export {
    decodeIdentity,
    decodeMaybe,
    decodeTuple,
    decodeEither,
    decodeNull,
    decodeBoolean,
    decodeNumber,
    decodeInt,
    decodeString,
    decodeNonEmptyString,
    decodeNonEmpty_Array,
    decodeNonEmptyArray,
    decodeNonEmpty_List,
    decodeNonEmptyList,
    decodeCodePoint,
    decodeForeignObject,
    decodeArray,
    decodeList,
    decodeSet,
    decodeMap,
    decodeVoid,
    decodeJArray,
    decodeJObject,
    getField,
    getFieldOptional,
    getFieldOptional$prime
};
