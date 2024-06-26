import * as $foreign from "./foreign.js";
import * as Control_Semigroupoid from "../Control.Semigroupoid/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Unit from "../Data.Unit/index.js";
import * as Type_Proxy from "../Type.Proxy/index.js";
var map = function (dict) {
    return dict.map;
};

// | `mapFlipped` is `map` with its arguments reversed. For example:
// |
// | ```purescript
// | [1, 2, 3] <#> \n -> n * n
// | ```
var mapFlipped = function (dictFunctor) {
    var map1 = map(dictFunctor);
    return function (fa) {
        return function (f) {
            return map1(f)(fa);
        };
    };
};

// | The `void` function is used to ignore the type wrapped by a
// | [`Functor`](#functor), replacing it with `Unit` and keeping only the type
// | information provided by the type constructor itself.
// |
// | `void` is often useful when using `do` notation to change the return type
// | of a monadic computation:
// |
// | ```purescript
// | main = forE 1 10 \n -> void do
// |   print n
// |   print (n * n)
// | ```
var $$void = function (dictFunctor) {
    return map(dictFunctor)(Data_Function["const"](Data_Unit.unit));
};

// | A version of `voidRight` with its arguments flipped.
var voidLeft = function (dictFunctor) {
    var map1 = map(dictFunctor);
    return function (f) {
        return function (x) {
            return map1(Data_Function["const"](x))(f);
        };
    };
};

// | Ignore the return value of a computation, using the specified return value
// | instead.
var voidRight = function (dictFunctor) {
    var map1 = map(dictFunctor);
    return function (x) {
        return map1(Data_Function["const"](x));
    };
};
var functorProxy = {
    map: function (v) {
        return function (v1) {
            return Type_Proxy["Proxy"].value;
        };
    }
};
var functorFn = {
    map: /* #__PURE__ */ Control_Semigroupoid.compose(Control_Semigroupoid.semigroupoidFn)
};
var functorArray = {
    map: $foreign.arrayMap
};

// | Apply a value in a computational context to a value in no context.
// |
// | Generalizes `flip`.
// |
// | ```purescript
// | longEnough :: String -> Bool
// | hasSymbol :: String -> Bool
// | hasDigit :: String -> Bool
// | password :: String
// |
// | validate :: String -> Array Bool
// | validate = flap [longEnough, hasSymbol, hasDigit]
// | ```
// |
// | ```purescript
// | flap (-) 3 4 == 1
// | threeve <$> Just 1 <@> 'a' <*> Just true == Just (threeve 1 'a' true)
// | ```
var flap = function (dictFunctor) {
    var map1 = map(dictFunctor);
    return function (ff) {
        return function (x) {
            return map1(function (f) {
                return f(x);
            })(ff);
        };
    };
};
export {
    map,
    mapFlipped,
    $$void as void,
    voidRight,
    voidLeft,
    flap,
    functorFn,
    functorArray,
    functorProxy
};
