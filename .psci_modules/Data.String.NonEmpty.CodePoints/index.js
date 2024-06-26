import * as Data_Array_NonEmpty from "../Data.Array.NonEmpty/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Semigroup_Foldable from "../Data.Semigroup.Foldable/index.js";
import * as Data_String_CodePoints from "../Data.String.CodePoints/index.js";
import * as Data_String_NonEmpty_Internal from "../Data.String.NonEmpty.Internal/index.js";
var fromJust = /* #__PURE__ */ Data_Maybe.fromJust();

// For internal use only. Do not export.
var toNonEmptyString = Data_String_NonEmpty_Internal.NonEmptyString;
var snoc = function (c) {
    return function (s) {
        return toNonEmptyString(s + Data_String_CodePoints.singleton(c));
    };
};
var singleton = function ($21) {
    return toNonEmptyString(Data_String_CodePoints.singleton($21));
};

// For internal use only. Do not export.
var liftS = function (f) {
    return function (v) {
        return f(v);
    };
};
var takeWhile = function (f) {
    var $22 = liftS(Data_String_CodePoints.takeWhile(f));
    return function ($23) {
        return Data_String_NonEmpty_Internal.fromString($22($23));
    };
};
var lastIndexOf$prime = function (pat) {
    var $24 = Data_String_CodePoints["lastIndexOf$prime"](pat);
    return function ($25) {
        return liftS($24($25));
    };
};
var lastIndexOf = function ($26) {
    return liftS(Data_String_CodePoints.lastIndexOf($26));
};
var indexOf$prime = function (pat) {
    var $27 = Data_String_CodePoints["indexOf$prime"](pat);
    return function ($28) {
        return liftS($27($28));
    };
};
var indexOf = function ($29) {
    return liftS(Data_String_CodePoints.indexOf($29));
};

// For internal use only. Do not export.
var fromNonEmptyString = function (v) {
    return v;
};
var length = function ($30) {
    return Data_String_CodePoints.length(fromNonEmptyString($30));
};
var splitAt = function (i) {
    return function (nes) {
        var v = Data_String_CodePoints.splitAt(i)(fromNonEmptyString(nes));
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
        return new Data_Maybe.Just(toNonEmptyString(Data_String_CodePoints.take(i)(s)));
    };
};
var toCodePointArray = function ($31) {
    return Data_String_CodePoints.toCodePointArray(fromNonEmptyString($31));
};
var toNonEmptyCodePointArray = function ($33) {
    return fromJust(Data_Array_NonEmpty.fromArray(toCodePointArray($33)));
};
var uncons = function (nes) {
    var s = fromNonEmptyString(nes);
    return {
        head: fromJust(Data_String_CodePoints.codePointAt(0)(s)),
        tail: Data_String_NonEmpty_Internal.fromString(Data_String_CodePoints.drop(1)(s))
    };
};
var fromFoldable1 = function (dictFoldable1) {
    return Data_Semigroup_Foldable.foldMap1(dictFoldable1)(Data_String_NonEmpty_Internal.semigroupNonEmptyString)(singleton);
};
var fromCodePointArray = function (v) {
    if (v.length === 0) {
        return Data_Maybe.Nothing.value;
    };
    return new Data_Maybe.Just(toNonEmptyString(Data_String_CodePoints.fromCodePointArray(v)));
};
var fromNonEmptyCodePointArray = function ($35) {
    return fromJust(fromCodePointArray(Data_Array_NonEmpty.toArray($35)));
};
var dropWhile = function (f) {
    var $36 = liftS(Data_String_CodePoints.dropWhile(f));
    return function ($37) {
        return Data_String_NonEmpty_Internal.fromString($36($37));
    };
};
var drop = function (i) {
    return function (nes) {
        var s = fromNonEmptyString(nes);
        var $20 = i >= Data_String_CodePoints.length(s);
        if ($20) {
            return Data_Maybe.Nothing.value;
        };
        return new Data_Maybe.Just(toNonEmptyString(Data_String_CodePoints.drop(i)(s)));
    };
};
var countPrefix = function ($38) {
    return liftS(Data_String_CodePoints.countPrefix($38));
};
var cons = function (c) {
    return function (s) {
        return toNonEmptyString(Data_String_CodePoints.singleton(c) + s);
    };
};
var codePointAt = function ($39) {
    return liftS(Data_String_CodePoints.codePointAt($39));
};
export {
    fromCodePointArray,
    fromNonEmptyCodePointArray,
    singleton,
    cons,
    snoc,
    fromFoldable1,
    toCodePointArray,
    toNonEmptyCodePointArray,
    codePointAt,
    indexOf,
    indexOf$prime,
    lastIndexOf,
    lastIndexOf$prime,
    uncons,
    length,
    take,
    takeWhile,
    drop,
    dropWhile,
    countPrefix,
    splitAt
};
