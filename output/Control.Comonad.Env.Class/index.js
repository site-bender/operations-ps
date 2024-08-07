// Generated by purs version 0.15.15
import * as Control_Comonad_Env_Trans from "../Control.Comonad.Env.Trans/index.js";
import * as Control_Comonad_Store_Trans from "../Control.Comonad.Store.Trans/index.js";
import * as Control_Comonad_Traced_Trans from "../Control.Comonad.Traced.Trans/index.js";
import * as Control_Comonad_Trans_Class from "../Control.Comonad.Trans.Class/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
var lower = /* #__PURE__ */ Control_Comonad_Trans_Class.lower(Control_Comonad_Store_Trans.comonadTransStoreT);
var local = function (dict) {
    return dict.local;
};
var comonadAskTuple = {
    ask: Data_Tuple.fst,
    Comonad0: function () {
        return Data_Tuple.comonadTuple;
    }
};
var comonadEnvTuple = {
    local: function (f) {
        return function (v) {
            return new Data_Tuple.Tuple(f(v.value0), v.value1);
        };
    },
    ComonadAsk0: function () {
        return comonadAskTuple;
    }
};
var comonadAskEnvT = function (dictComonad) {
    var comonadEnvT = Control_Comonad_Env_Trans.comonadEnvT(dictComonad);
    return {
        ask: function (v) {
            return Data_Tuple.fst(v);
        },
        Comonad0: function () {
            return comonadEnvT;
        }
    };
};
var comonadEnvEnvT = function (dictComonad) {
    var comonadAskEnvT1 = comonadAskEnvT(dictComonad);
    return {
        local: function (f) {
            return function (v) {
                return new Data_Tuple.Tuple(f(v.value0), v.value1);
            };
        },
        ComonadAsk0: function () {
            return comonadAskEnvT1;
        }
    };
};
var ask = function (dict) {
    return dict.ask;
};
var asks = function (dictComonadAsk) {
    var ask1 = ask(dictComonadAsk);
    return function (f) {
        return function (x) {
            return f(ask1(x));
        };
    };
};
var comonadAskStoreT = function (dictComonadAsk) {
    var Comonad0 = dictComonadAsk.Comonad0();
    var comonadStoreT = Control_Comonad_Store_Trans.comonadStoreT(Comonad0);
    return {
        ask: (function () {
            var $55 = ask(dictComonadAsk);
            var $56 = lower(Comonad0);
            return function ($57) {
                return $55($56($57));
            };
        })(),
        Comonad0: function () {
            return comonadStoreT;
        }
    };
};
var comonadEnvStoreT = function (dictComonadEnv) {
    var local1 = local(dictComonadEnv);
    var comonadAskStoreT1 = comonadAskStoreT(dictComonadEnv.ComonadAsk0());
    return {
        local: function (f) {
            return function (v) {
                return new Data_Tuple.Tuple(local1(f)(v.value0), v.value1);
            };
        },
        ComonadAsk0: function () {
            return comonadAskStoreT1;
        }
    };
};
var comonadAskTracedT = function (dictComonadAsk) {
    var ask1 = ask(dictComonadAsk);
    var Comonad0 = dictComonadAsk.Comonad0();
    var comonadTracedT = Control_Comonad_Traced_Trans.comonadTracedT(Comonad0);
    return function (dictMonoid) {
        var comonadTracedT1 = comonadTracedT(dictMonoid);
        return {
            ask: (function () {
                var $58 = Control_Comonad_Trans_Class.lower(Control_Comonad_Traced_Trans.comonadTransTracedT(dictMonoid))(Comonad0);
                return function ($59) {
                    return ask1($58($59));
                };
            })(),
            Comonad0: function () {
                return comonadTracedT1;
            }
        };
    };
};
var comonadEnvTracedT = function (dictComonadEnv) {
    var local1 = local(dictComonadEnv);
    var comonadAskTracedT1 = comonadAskTracedT(dictComonadEnv.ComonadAsk0());
    return function (dictMonoid) {
        var comonadAskTracedT2 = comonadAskTracedT1(dictMonoid);
        return {
            local: function (f) {
                return function (v) {
                    return local1(f)(v);
                };
            },
            ComonadAsk0: function () {
                return comonadAskTracedT2;
            }
        };
    };
};
export {
    ask,
    local,
    asks,
    comonadAskTuple,
    comonadEnvTuple,
    comonadAskEnvT,
    comonadEnvEnvT,
    comonadAskTracedT,
    comonadEnvTracedT,
    comonadAskStoreT,
    comonadEnvStoreT
};
//# sourceMappingURL=index.js.map
