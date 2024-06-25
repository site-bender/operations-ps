// Generated by purs version 0.15.15
import * as Data_Array_NonEmpty from "../Data.Array.NonEmpty/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Semigroup_Foldable from "../Data.Semigroup.Foldable/index.js";
import * as Data_String_CodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data_String_NonEmpty_Internal from "../Data.String.NonEmpty.Internal/index.js";
import * as Data_String_Unsafe from "../Data.String.Unsafe/index.js";
var fromJust = /* #__PURE__ */ Data_Maybe.fromJust();
var toNonEmptyString = Data_String_NonEmpty_Internal.NonEmptyString;
var snoc = function (c) {
    return function (s) {
        return toNonEmptyString(s + Data_String_CodeUnits.singleton(c));
    };
};
var singleton = function ($23) {
    return toNonEmptyString(Data_String_CodeUnits.singleton($23));
};
var liftS = function (f) {
    return function (v) {
        return f(v);
    };
};
var takeWhile = function (f) {
    var $24 = liftS(Data_String_CodeUnits.takeWhile(f));
    return function ($25) {
        return Data_String_NonEmpty_Internal.fromString($24($25));
    };
};
var lastIndexOf$prime = function (pat) {
    var $26 = Data_String_CodeUnits["lastIndexOf$prime"](pat);
    return function ($27) {
        return liftS($26($27));
    };
};
var lastIndexOf = function ($28) {
    return liftS(Data_String_CodeUnits.lastIndexOf($28));
};
var indexOf$prime = function (pat) {
    var $29 = Data_String_CodeUnits["indexOf$prime"](pat);
    return function ($30) {
        return liftS($29($30));
    };
};
var indexOf = function ($31) {
    return liftS(Data_String_CodeUnits.indexOf($31));
};
var fromNonEmptyString = function (v) {
    return v;
};
var length = function ($32) {
    return Data_String_CodeUnits.length(fromNonEmptyString($32));
};
var splitAt = function (i) {
    return function (nes) {
        var v = Data_String_CodeUnits.splitAt(i)(fromNonEmptyString(nes));
        return {
            before: Data_String_NonEmpty_Internal.fromString(v.before),
            after: Data_String_NonEmpty_Internal.fromString(v.after)
        };
    };
};
var take = function (i) {
    return function (nes) {
        var s = fromNonEmptyString(nes);
        var $18 = i < 1;
        if ($18) {
            return Data_Maybe.Nothing.value;
        };
        return new Data_Maybe.Just(toNonEmptyString(Data_String_CodeUnits.take(i)(s)));
    };
};
var takeRight = function (i) {
    return function (nes) {
        var s = fromNonEmptyString(nes);
        var $19 = i < 1;
        if ($19) {
            return Data_Maybe.Nothing.value;
        };
        return new Data_Maybe.Just(toNonEmptyString(Data_String_CodeUnits.takeRight(i)(s)));
    };
};
var toChar = function ($33) {
    return Data_String_CodeUnits.toChar(fromNonEmptyString($33));
};
var toCharArray = function ($34) {
    return Data_String_CodeUnits.toCharArray(fromNonEmptyString($34));
};
var toNonEmptyCharArray = function ($36) {
    return fromJust(Data_Array_NonEmpty.fromArray(toCharArray($36)));
};
var uncons = function (nes) {
    var s = fromNonEmptyString(nes);
    return {
        head: Data_String_Unsafe.charAt(0)(s),
        tail: Data_String_NonEmpty_Internal.fromString(Data_String_CodeUnits.drop(1)(s))
    };
};
var fromFoldable1 = function (dictFoldable1) {
    var $37 = Data_Semigroup_Foldable.fold1(dictFoldable1)(Data_String_NonEmpty_Internal.semigroupNonEmptyString);
    return function ($38) {
        return $37($38);
    };
};
var fromCharArray = function (v) {
    if (v.length === 0) {
        return Data_Maybe.Nothing.value;
    };
    return new Data_Maybe.Just(toNonEmptyString(Data_String_CodeUnits.fromCharArray(v)));
};
var fromNonEmptyCharArray = function ($40) {
    return fromJust(fromCharArray(Data_Array_NonEmpty.toArray($40)));
};
var dropWhile = function (f) {
    var $41 = liftS(Data_String_CodeUnits.dropWhile(f));
    return function ($42) {
        return Data_String_NonEmpty_Internal.fromString($41($42));
    };
};
var dropRight = function (i) {
    return function (nes) {
        var s = fromNonEmptyString(nes);
        var $21 = i >= Data_String_CodeUnits.length(s);
        if ($21) {
            return Data_Maybe.Nothing.value;
        };
        return new Data_Maybe.Just(toNonEmptyString(Data_String_CodeUnits.dropRight(i)(s)));
    };
};
var drop = function (i) {
    return function (nes) {
        var s = fromNonEmptyString(nes);
        var $22 = i >= Data_String_CodeUnits.length(s);
        if ($22) {
            return Data_Maybe.Nothing.value;
        };
        return new Data_Maybe.Just(toNonEmptyString(Data_String_CodeUnits.drop(i)(s)));
    };
};
var countPrefix = function ($43) {
    return liftS(Data_String_CodeUnits.countPrefix($43));
};
var cons = function (c) {
    return function (s) {
        return toNonEmptyString(Data_String_CodeUnits.singleton(c) + s);
    };
};
var charAt = function ($44) {
    return liftS(Data_String_CodeUnits.charAt($44));
};
export {
    fromCharArray,
    fromNonEmptyCharArray,
    singleton,
    cons,
    snoc,
    fromFoldable1,
    toCharArray,
    toNonEmptyCharArray,
    charAt,
    toChar,
    indexOf,
    indexOf$prime,
    lastIndexOf,
    lastIndexOf$prime,
    uncons,
    length,
    take,
    takeRight,
    takeWhile,
    drop,
    dropRight,
    dropWhile,
    countPrefix,
    splitAt
};