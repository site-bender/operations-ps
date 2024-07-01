// | This module defines the `ComonadStore` type class and its instances.
import * as Control_Comonad from "../Control.Comonad/index.js";
import * as Control_Comonad_Env_Trans from "../Control.Comonad.Env.Trans/index.js";
import * as Control_Comonad_Store_Trans from "../Control.Comonad.Store.Trans/index.js";
import * as Control_Comonad_Traced_Trans from "../Control.Comonad.Traced.Trans/index.js";
import * as Control_Comonad_Trans_Class from "../Control.Comonad.Trans.Class/index.js";
import * as Control_Extend from "../Control.Extend/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
var lower = /* #__PURE__ */ Control_Comonad_Trans_Class.lower(Control_Comonad_Env_Trans.comonadTransEnvT);
var pos = function (dict) {
    return dict.pos;
};
var peek = function (dict) {
    return dict.peek;
};

// | Extract a value from a position which depends on the current position.
var peeks = function (dictComonadStore) {
    var peek1 = peek(dictComonadStore);
    var pos1 = pos(dictComonadStore);
    return function (f) {
        return function (x) {
            return peek1(f(pos1(x)))(x);
        };
    };
};

// | Reposition the focus at the specified position, which depends on the current position.
var seeks = function (dictComonadStore) {
    var peeks1 = peeks(dictComonadStore);
    var duplicate = Control_Extend.duplicate((dictComonadStore.Comonad0()).Extend0());
    return function (f) {
        var $50 = peeks1(f);
        return function ($51) {
            return $50(duplicate($51));
        };
    };
};

// | Reposition the focus at the specified position.
var seek = function (dictComonadStore) {
    var peek1 = peek(dictComonadStore);
    var duplicate = Control_Extend.duplicate((dictComonadStore.Comonad0()).Extend0());
    return function (s) {
        var $52 = peek1(s);
        return function ($53) {
            return $52(duplicate($53));
        };
    };
};

// | Extract a collection of values from positions which depend on the current position.
var experiment = function (dictComonadStore) {
    var peek1 = peek(dictComonadStore);
    var pos1 = pos(dictComonadStore);
    return function (dictFunctor) {
        var map = Data_Functor.map(dictFunctor);
        return function (f) {
            return function (x) {
                return map(Data_Function.flip(peek1)(x))(f(pos1(x)));
            };
        };
    };
};
var comonadStoreTracedT = function (dictComonadStore) {
    var pos1 = pos(dictComonadStore);
    var Comonad0 = dictComonadStore.Comonad0();
    var peek1 = peek(dictComonadStore);
    var comonadTracedT = Control_Comonad_Traced_Trans.comonadTracedT(Comonad0);
    return function (dictMonoid) {
        var lower1 = Control_Comonad_Trans_Class.lower(Control_Comonad_Traced_Trans.comonadTransTracedT(dictMonoid))(Comonad0);
        var comonadTracedT1 = comonadTracedT(dictMonoid);
        return {
            pos: function ($54) {
                return pos1(lower1($54));
            },
            peek: function (s) {
                var $55 = peek1(s);
                return function ($56) {
                    return $55(lower1($56));
                };
            },
            Comonad0: function () {
                return comonadTracedT1;
            }
        };
    };
};
var comonadStoreStoreT = function (dictComonad) {
    var extract = Control_Comonad.extract(dictComonad);
    var comonadStoreT = Control_Comonad_Store_Trans.comonadStoreT(dictComonad);
    return {
        pos: function (v) {
            return v.value1;
        },
        peek: function (s) {
            return function (v) {
                return extract(v.value0)(s);
            };
        },
        Comonad0: function () {
            return comonadStoreT;
        }
    };
};
var comonadStoreEnvT = function (dictComonadStore) {
    var Comonad0 = dictComonadStore.Comonad0();
    var lower1 = lower(Comonad0);
    var peek1 = peek(dictComonadStore);
    var comonadEnvT = Control_Comonad_Env_Trans.comonadEnvT(Comonad0);
    return {
        pos: (function () {
            var $57 = pos(dictComonadStore);
            return function ($58) {
                return $57(lower1($58));
            };
        })(),
        peek: function (s) {
            var $59 = peek1(s);
            return function ($60) {
                return $59(lower1($60));
            };
        },
        Comonad0: function () {
            return comonadEnvT;
        }
    };
};
export {
    peek,
    pos,
    experiment,
    peeks,
    seek,
    seeks,
    comonadStoreStoreT,
    comonadStoreEnvT,
    comonadStoreTracedT
};