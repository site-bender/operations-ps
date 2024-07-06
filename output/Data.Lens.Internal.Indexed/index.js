// Generated by purs version 0.15.15
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Lens_Internal_Wander from "../Data.Lens.Internal.Wander/index.js";
import * as Data_Profunctor from "../Data.Profunctor/index.js";
import * as Data_Profunctor_Choice from "../Data.Profunctor.Choice/index.js";
import * as Data_Profunctor_Strong from "../Data.Profunctor.Strong/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
var second = /* #__PURE__ */ Data_Profunctor_Strong.second(Data_Profunctor_Strong.strongFn);
var Indexed = function (x) {
    return x;
};
var profunctorIndexed = function (dictProfunctor) {
    var dimap = Data_Profunctor.dimap(dictProfunctor);
    return {
        dimap: function (f) {
            return function (g) {
                return function (v) {
                    return dimap(second(f))(g)(v);
                };
            };
        }
    };
};
var strongIndexed = function (dictStrong) {
    var Profunctor0 = dictStrong.Profunctor0();
    var lcmap = Data_Profunctor.lcmap(Profunctor0);
    var first = Data_Profunctor_Strong.first(dictStrong);
    var second1 = Data_Profunctor_Strong.second(dictStrong);
    var profunctorIndexed1 = profunctorIndexed(Profunctor0);
    return {
        first: function (v) {
            return lcmap(function (v1) {
                return new Data_Tuple.Tuple(new Data_Tuple.Tuple(v1.value0, v1.value1.value0), v1.value1.value1);
            })(first(v));
        },
        second: function (v) {
            return lcmap(function (v1) {
                return new Data_Tuple.Tuple(v1.value1.value0, new Data_Tuple.Tuple(v1.value0, v1.value1.value1));
            })(second1(v));
        },
        Profunctor0: function () {
            return profunctorIndexed1;
        }
    };
};
var newtypeIndexed = {
    Coercible0: function () {
        return undefined;
    }
};
var choiceIndexed = function (dictChoice) {
    var Profunctor0 = dictChoice.Profunctor0();
    var lcmap = Data_Profunctor.lcmap(Profunctor0);
    var left = Data_Profunctor_Choice.left(dictChoice);
    var right = Data_Profunctor_Choice.right(dictChoice);
    var profunctorIndexed1 = profunctorIndexed(Profunctor0);
    return {
        left: function (v) {
            return lcmap(function (v1) {
                return Data_Either.either((function () {
                    var $63 = Data_Tuple.Tuple.create(v1.value0);
                    return function ($64) {
                        return Data_Either.Left.create($63($64));
                    };
                })())(Data_Either.Right.create)(v1.value1);
            })(left(v));
        },
        right: function (v) {
            return lcmap(function (v1) {
                return Data_Either.either(Data_Either.Left.create)((function () {
                    var $65 = Data_Tuple.Tuple.create(v1.value0);
                    return function ($66) {
                        return Data_Either.Right.create($65($66));
                    };
                })())(v1.value1);
            })(right(v));
        },
        Profunctor0: function () {
            return profunctorIndexed1;
        }
    };
};
var wanderIndexed = function (dictWander) {
    var wander = Data_Lens_Internal_Wander.wander(dictWander);
    var strongIndexed1 = strongIndexed(dictWander.Strong0());
    var choiceIndexed1 = choiceIndexed(dictWander.Choice1());
    return {
        wander: function (trav) {
            return function (v) {
                return wander(function (dictApplicative) {
                    var trav2 = trav(dictApplicative);
                    return function (ia2fb) {
                        return function (v1) {
                            return trav2((function () {
                                var $67 = Data_Tuple.Tuple.create(v1.value0);
                                return function ($68) {
                                    return ia2fb($67($68));
                                };
                            })())(v1.value1);
                        };
                    };
                })(v);
            };
        },
        Strong0: function () {
            return strongIndexed1;
        },
        Choice1: function () {
            return choiceIndexed1;
        }
    };
};
export {
    Indexed,
    newtypeIndexed,
    profunctorIndexed,
    strongIndexed,
    choiceIndexed,
    wanderIndexed
};
//# sourceMappingURL=index.js.map
