import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Applicative_Free from "../Control.Applicative.Free/index.js";
import * as Control_Apply from "../Control.Apply/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Control_Monad_Gen from "../Control.Monad.Gen/index.js";
import * as Data_Foldable from "../Data.Foldable/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_NonEmpty from "../Data.NonEmpty/index.js";
var foldable1NonEmpty = /* #__PURE__ */ Data_NonEmpty.foldable1NonEmpty(Data_Foldable.foldableArray);
var pure = /* #__PURE__ */ Control_Applicative.pure(Control_Applicative_Free.applicativeFreeAp);
var apply = /* #__PURE__ */ Control_Apply.apply(Control_Applicative_Free.applyFreeAp);
var mapFlipped = /* #__PURE__ */ Data_Functor.mapFlipped(Control_Applicative_Free.functorFreeAp);
var genFree = function (dictMonadGen) {
    var oneOf = Control_Monad_Gen.oneOf(dictMonadGen)(foldable1NonEmpty);
    var Monad0 = dictMonadGen.Monad0();
    var Bind1 = Monad0.Bind1();
    var mapFlipped1 = Data_Functor.mapFlipped((Bind1.Apply0()).Functor0());
    var bind = Control_Bind.bind(Bind1);
    var pure1 = Control_Applicative.pure(Monad0.Applicative0());
    return function (dictMonadRec) {
        return function (genF) {
            return function (genA) {
                return function (genA2A) {
                    return oneOf(new Data_NonEmpty.NonEmpty(mapFlipped1(genA)(pure), [ bind(genF)(function (fUnit) {
                        return bind(genA)(function (a) {
                            return pure1(apply(pure(Data_Function["const"](a)))(Control_Applicative_Free.liftFreeAp(fUnit)));
                        });
                    }), bind(genF)(function (fUnit) {
                        return bind(genA)(function (a) {
                            return bind(genA2A)(function (a2a) {
                                return pure1(mapFlipped(apply(pure(Data_Function["const"](a)))(Control_Applicative_Free.liftFreeAp(fUnit)))(a2a));
                            });
                        });
                    }), bind(genF)(function (fUnit) {
                        return bind(genA)(function (a) {
                            return bind(genA2A)(function (a2a) {
                                return pure1(mapFlipped(mapFlipped(Control_Applicative_Free.liftFreeAp(fUnit))(Data_Function["const"](a)))(a2a));
                            });
                        });
                    }), bind(genA)(function (a) {
                        return bind(genA2A)(function (a2a) {
                            return pure1(mapFlipped(pure(a))(a2a));
                        });
                    }) ]));
                };
            };
        };
    };
};
export {
    genFree
};
