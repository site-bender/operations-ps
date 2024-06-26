// | While most of the code in this module is safe, this module does
// | export a few partial functions and the `NonEmptyString` constructor.
// | While the partial functions are obvious from the `Partial` constraint in
// | their type signature, the `NonEmptyString` constructor can be overlooked
// | when searching for issues in one's code. See the constructor's
// | documentation for more information.
import * as Control_Bind from "../Control.Bind/index.js";
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Foldable from "../Data.Foldable/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Monoid from "../Data.Monoid/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Semigroup from "../Data.Semigroup/index.js";
import * as Data_Show from "../Data.Show/index.js";
import * as Data_String_CodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data_String_Common from "../Data.String.Common/index.js";
import * as Data_Symbol from "../Data.Symbol/index.js";
var show = /* #__PURE__ */ Data_Show.show(Data_Show.showString);
var composeKleisliFlipped = /* #__PURE__ */ Control_Bind.composeKleisliFlipped(Data_Maybe.bindMaybe);
var fromJust = /* #__PURE__ */ Data_Maybe.fromJust();

// | A string that is known not to be empty.
// |
// | You can use this constructor to create a `NonEmptyString` that isn't
// | non-empty, breaking the guarantee behind this newtype. It is
// | provided as an escape hatch mainly for the `Data.NonEmpty.CodeUnits`
// | and `Data.NonEmpty.CodePoints` modules. Use this at your own risk
// | when you know what you are doing.
var NonEmptyString = function (x) {
    return x;
};

// | A newtype used in cases to specify a non-empty replacement for a pattern.
var NonEmptyReplacement = function (x) {
    return x;
};

// | Returns the argument converted to uppercase.
// |
// | ```purescript
// | toUpper (NonEmptyString "Hello") == NonEmptyString "HELLO"
// | ```
var toUpper = function (v) {
    return Data_String_Common.toUpper(v);
};

// | Converts a `NonEmptyString` back into a standard `String`.
var toString = function (v) {
    return v;
};

// | Returns the argument converted to lowercase.
// |
// | ```purescript
// | toLower (NonEmptyString "hElLo") == NonEmptyString "hello"
// | ```
var toLower = function (v) {
    return Data_String_Common.toLower(v);
};
var showNonEmptyString = {
    show: function (v) {
        return "(NonEmptyString.unsafeFromString " + (show(v) + ")");
    }
};
var show1 = /* #__PURE__ */ Data_Show.show(showNonEmptyString);
var showNonEmptyReplacement = {
    show: function (v) {
        return "(NonEmptyReplacement " + (show1(v) + ")");
    }
};
var semigroupNonEmptyString = Data_Semigroup.semigroupString;
var semigroupNonEmptyReplacement = semigroupNonEmptyString;

// | Replaces all occurences of the pattern with the replacement string.
// |
// | ```purescript
// | replaceAll (Pattern "<=") (NonEmptyReplacement "≤") (NonEmptyString "a <= b <= c") == NonEmptyString "a ≤ b ≤ c"
// | ```
var replaceAll = function (pat) {
    return function (v) {
        return function (v1) {
            return Data_String_Common.replaceAll(pat)(v)(v1);
        };
    };
};

// | Replaces the first occurence of the pattern with the replacement string.
// |
// | ```purescript
// | replace (Pattern "<=") (NonEmptyReplacement "≤") (NonEmptyString "a <= b <= c") == NonEmptyString "a ≤ b <= c"
// | ```
var replace = function (pat) {
    return function (v) {
        return function (v1) {
            return Data_String_Common.replace(pat)(v)(v1);
        };
    };
};

// | Prepends a string to this non-empty string. Since one of the strings is
// | non-empty we know the result will be too.
// |
// | ```purescript
// | prependString "be" (NonEmptyString "fore") == NonEmptyString "before"
// | prependString "" (NonEmptyString "fore") == NonEmptyString "fore"
// | ```
var prependString = function (s1) {
    return function (v) {
        return s1 + v;
    };
};
var ordNonEmptyString = Data_Ord.ordString;
var ordNonEmptyReplacement = ordNonEmptyString;
var nonEmptyNonEmpty = function (dictIsSymbol) {
    var reflectSymbol = Data_Symbol.reflectSymbol(dictIsSymbol);
    return {
        nes: function (p) {
            return reflectSymbol(p);
        }
    };
};
var nes = function (dict) {
    return dict.nes;
};
var makeNonEmptyBad = function () {
    return {
        nes: function (v) {
            return "";
        }
    };
};

// | Compare two strings in a locale-aware fashion. This is in contrast to
// | the `Ord` instance on `String` which treats strings as arrays of code
// | units:
// |
// | ```purescript
// | NonEmptyString "ä" `localeCompare` NonEmptyString "b" == LT
// | NonEmptyString "ä" `compare` NonEmptyString "b" == GT
// | ```
var localeCompare = function (v) {
    return function (v1) {
        return Data_String_Common.localeCompare(v)(v1);
    };
};
var liftS = function (f) {
    return function (v) {
        return f(v);
    };
};

// | Joins possibly empty strings in a non-empty container together as a new
// | non-empty string, inserting a non-empty string as a separator between them.
// | The result is guaranteed to be non-empty.
// |
// | ```purescript
// | -- array syntax is used for demonstration here, it would need to be a real `Foldable1`
// | joinWith1 (NonEmptyString ", ") ["apple", "banana"] == NonEmptyString "apple, banana"
// | joinWith1 (NonEmptyString "/") ["a", "b", "", "c", ""] == NonEmptyString "a/b//c/"
// | ```
var joinWith1 = function (dictFoldable1) {
    var intercalate = Data_Foldable.intercalate(dictFoldable1.Foldable0())(Data_Monoid.monoidString);
    return function (v) {
        var $59 = intercalate(v);
        return function ($60) {
            return NonEmptyString($59($60));
        };
    };
};

// | Joins the strings in a container together as a new string, inserting the
// | first argument as separator between them. The result is not guaranteed to
// | be non-empty.
// |
// | ```purescript
// | joinWith ", " [NonEmptyString "apple", NonEmptyString "banana"] == "apple, banana"
// | joinWith ", " [] == ""
// | ```
var joinWith = function (dictFoldable) {
    var intercalate = Data_Foldable.intercalate(dictFoldable)(Data_Monoid.monoidString);
    return function (splice) {
        var $61 = intercalate(splice);
        return function ($62) {
            return $61($62);
        };
    };
};

// | Joins non-empty strings in a non-empty container together as a new
// | non-empty string, inserting a possibly empty string as separator between
// | them. The result is guaranteed to be non-empty.
// |
// | ```purescript
// | -- array syntax is used for demonstration here, it would need to be a real `Foldable1`
// | join1With ", " [NonEmptyString "apple", NonEmptyString "banana"] == NonEmptyString "apple, banana"
// | join1With "" [NonEmptyString "apple", NonEmptyString "banana"] == NonEmptyString "applebanana"
// | ```
var join1With = function (dictFoldable1) {
    var joinWith2 = joinWith(dictFoldable1.Foldable0());
    return function (splice) {
        var $63 = joinWith2(splice);
        return function ($64) {
            return NonEmptyString($63($64));
        };
    };
};

// | Creates a `NonEmptyString` from a `String`, returning `Nothing` if the
// | input is empty.
// |
// | ```purescript
// | fromString "" = Nothing
// | fromString "hello" = Just (NES.unsafeFromString "hello")
// | ```
var fromString = function (v) {
    if (v === "") {
        return Data_Maybe.Nothing.value;
    };
    return new Data_Maybe.Just(v);
};

// | If the string starts with the given prefix, return the portion of the
// | string left after removing it. If the prefix does not match or there is no
// | remainder, the result will be `Nothing`.
// |
// | ```purescript
// | stripPrefix (Pattern "http:") (NonEmptyString "http://purescript.org") == Just (NonEmptyString "//purescript.org")
// | stripPrefix (Pattern "http:") (NonEmptyString "https://purescript.org") == Nothing
// | stripPrefix (Pattern "Hello!") (NonEmptyString "Hello!") == Nothing
// | ```
var stripPrefix = function (pat) {
    return composeKleisliFlipped(fromString)(liftS(Data_String_CodeUnits.stripPrefix(pat)));
};

// | If the string ends with the given suffix, return the portion of the
// | string left after removing it. If the suffix does not match or there is no
// | remainder, the result will be `Nothing`.
// |
// | ```purescript
// | stripSuffix (Pattern ".exe") (NonEmptyString "purs.exe") == Just (NonEmptyString "purs")
// | stripSuffix (Pattern ".exe") (NonEmptyString "purs") == Nothing
// | stripSuffix (Pattern "Hello!") (NonEmptyString "Hello!") == Nothing
// | ```
var stripSuffix = function (pat) {
    return composeKleisliFlipped(fromString)(liftS(Data_String_CodeUnits.stripSuffix(pat)));
};

// | Removes whitespace from the beginning and end of a string, including
// | [whitespace characters](http://www.ecma-international.org/ecma-262/5.1/#sec-7.2)
// | and [line terminators](http://www.ecma-international.org/ecma-262/5.1/#sec-7.3).
// | If the string is entirely made up of whitespace the result will be Nothing.
// |
// | ```purescript
// | trim (NonEmptyString "   Hello  \n World\n\t    ") == Just (NonEmptyString "Hello  \n World")
// | trim (NonEmptyString "   \n") == Nothing
// | ```
var trim = function (v) {
    return fromString(Data_String_Common.trim(v));
};

// | A partial version of `fromString`.
var unsafeFromString = function () {
    return function ($65) {
        return fromJust(fromString($65));
    };
};
var eqNonEmptyString = Data_Eq.eqString;
var eqNonEmptyReplacement = eqNonEmptyString;

// | Checks whether the pattern appears in the given string.
// |
// | ```purescript
// | contains (Pattern "needle") (NonEmptyString "haystack with needle") == true
// | contains (Pattern "needle") (NonEmptyString "haystack") == false
// | ```
var contains = function ($66) {
    return liftS(Data_String_CodeUnits.contains($66));
};

// | Appends a string to this non-empty string. Since one of the strings is
// | non-empty we know the result will be too.
// |
// | ```purescript
// | appendString (NonEmptyString "Hello") " world" == NonEmptyString "Hello world"
// | appendString (NonEmptyString "Hello") "" == NonEmptyString "Hello"
// | ```
var appendString = function (v) {
    return function (s2) {
        return v + s2;
    };
};
export {
    nes,
    NonEmptyString,
    NonEmptyReplacement,
    fromString,
    unsafeFromString,
    toString,
    appendString,
    prependString,
    stripPrefix,
    stripSuffix,
    contains,
    localeCompare,
    replace,
    replaceAll,
    toLower,
    toUpper,
    trim,
    joinWith,
    join1With,
    joinWith1,
    liftS,
    eqNonEmptyString,
    ordNonEmptyString,
    semigroupNonEmptyString,
    showNonEmptyString,
    makeNonEmptyBad,
    nonEmptyNonEmpty,
    eqNonEmptyReplacement,
    ordNonEmptyReplacement,
    semigroupNonEmptyReplacement,
    showNonEmptyReplacement
};
