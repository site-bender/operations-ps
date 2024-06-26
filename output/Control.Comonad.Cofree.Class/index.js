// Generated by purs version 0.15.15
import * as Control_Comonad_Cofree from "../Control.Comonad.Cofree/index.js";
import * as Control_Comonad_Env_Trans from "../Control.Comonad.Env.Trans/index.js";
import * as Control_Comonad_Store_Trans from "../Control.Comonad.Store.Trans/index.js";
import * as Control_Comonad_Traced_Trans from "../Control.Comonad.Traced.Trans/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
var unwrapCofree = function (dict) {
    return dict.unwrapCofree;
};
var comonadCofreeTracedT = function (dictFunctor) {
    return function (dictComonadCofree) {
        var Functor0 = dictComonadCofree.Functor0();
        var map = Data_Functor.map(Functor0);
        var unwrapCofree1 = unwrapCofree(dictComonadCofree);
        var comonadTracedT = Control_Comonad_Traced_Trans.comonadTracedT(dictComonadCofree.Comonad1());
        return function (dictMonoid) {
            var comonadTracedT1 = comonadTracedT(dictMonoid);
            return {
                unwrapCofree: function (v) {
                    return map(Control_Comonad_Traced_Trans.TracedT)(unwrapCofree1(v));
                },
                Functor0: function () {
                    return Functor0;
                },
                Comonad1: function () {
                    return comonadTracedT1;
                }
            };
        };
    };
};
var comonadCofreeStoreT = function (dictFunctor) {
    return function (dictComonadCofree) {
        var Functor0 = dictComonadCofree.Functor0();
        var map = Data_Functor.map(Functor0);
        var unwrapCofree1 = unwrapCofree(dictComonadCofree);
        var comonadStoreT = Control_Comonad_Store_Trans.comonadStoreT(dictComonadCofree.Comonad1());
        return {
            unwrapCofree: function (v) {
                return map(function (x) {
                    return new Data_Tuple.Tuple(x, v.value1);
                })(unwrapCofree1(v.value0));
            },
            Functor0: function () {
                return Functor0;
            },
            Comonad1: function () {
                return comonadStoreT;
            }
        };
    };
};
var comonadCofreeEnvT = function (dictFunctor) {
    return function (dictComonadCofree) {
        var Functor0 = dictComonadCofree.Functor0();
        var map = Data_Functor.map(Functor0);
        var unwrapCofree1 = unwrapCofree(dictComonadCofree);
        var comonadEnvT = Control_Comonad_Env_Trans.comonadEnvT(dictComonadCofree.Comonad1());
        return {
            unwrapCofree: function (v) {
                return map(function (x) {
                    return new Data_Tuple.Tuple(v.value0, x);
                })(unwrapCofree1(v.value1));
            },
            Functor0: function () {
                return Functor0;
            },
            Comonad1: function () {
                return comonadEnvT;
            }
        };
    };
};
var comonadCofreeCofree = function (dictFunctor) {
    var comonadCofree = Control_Comonad_Cofree.comonadCofree(dictFunctor);
    return {
        unwrapCofree: Control_Comonad_Cofree.tail,
        Functor0: function () {
            return dictFunctor;
        },
        Comonad1: function () {
            return comonadCofree;
        }
    };
};
export {
    unwrapCofree,
    comonadCofreeCofree,
    comonadCofreeEnvT,
    comonadCofreeStoreT,
    comonadCofreeTracedT
};
