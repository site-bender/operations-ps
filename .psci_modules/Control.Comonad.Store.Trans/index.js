// | This module defines the store comonad transformer, `StoreT`.
import * as Control_Comonad from "../Control.Comonad/index.js";
import * as Control_Extend from "../Control.Extend/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";

// | The store comonad transformer.
// |
// | This comonad transformer extends the context of a value in the base comonad so that the value
// | depends on a position of type `s`.
// |
// | The `ComonadStore` type class describes the operations supported by this comonad.
var StoreT = function (x) {
    return x;
};

// | Unwrap a value in the `StoreT` comonad.
var runStoreT = function (v) {
    return v;
};
var newtypeStoreT = {
    Coercible0: function () {
        return undefined;
    }
};
var functorStoreT = function (dictFunctor) {
    var map = Data_Functor.map(dictFunctor);
    return {
        map: function (f) {
            return function (v) {
                return new Data_Tuple.Tuple(map(function (h) {
                    return function ($36) {
                        return f(h($36));
                    };
                })(v.value0), v.value1);
            };
        }
    };
};
var extendStoreT = function (dictExtend) {
    var extend = Control_Extend.extend(dictExtend);
    var functorStoreT1 = functorStoreT(dictExtend.Functor0());
    return {
        extend: function (f) {
            return function (v) {
                return new Data_Tuple.Tuple(extend(function (w$prime) {
                    return function (s$prime) {
                        return f(new Data_Tuple.Tuple(w$prime, s$prime));
                    };
                })(v.value0), v.value1);
            };
        },
        Functor0: function () {
            return functorStoreT1;
        }
    };
};
var comonadTransStoreT = {
    lower: function (dictComonad) {
        var map = Data_Functor.map((dictComonad.Extend0()).Functor0());
        return function (v) {
            return map(function (v1) {
                return v1(v.value1);
            })(v.value0);
        };
    }
};
var comonadStoreT = function (dictComonad) {
    var extract = Control_Comonad.extract(dictComonad);
    var extendStoreT1 = extendStoreT(dictComonad.Extend0());
    return {
        extract: function (v) {
            return extract(v.value0)(v.value1);
        },
        Extend0: function () {
            return extendStoreT1;
        }
    };
};
export {
    StoreT,
    runStoreT,
    newtypeStoreT,
    functorStoreT,
    extendStoreT,
    comonadStoreT,
    comonadTransStoreT
};
