// Generated by purs version 0.15.15
import * as Control_Comonad from "../Control.Comonad/index.js";
import * as Control_Extend from "../Control.Extend/index.js";
import * as Data_Foldable from "../Data.Foldable/index.js";
import * as Data_FoldableWithIndex from "../Data.FoldableWithIndex/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_FunctorWithIndex from "../Data.FunctorWithIndex/index.js";
import * as Data_Traversable from "../Data.Traversable/index.js";
import * as Data_TraversableWithIndex from "../Data.TraversableWithIndex/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
var map = /* #__PURE__ */ Data_Functor.map(Data_Functor.functorFn);
var EnvT = function (x) {
    return x;
};
var withEnvT = function (f) {
    return function (v) {
        return new Data_Tuple.Tuple(f(v.value0), v.value1);
    };
};
var runEnvT = function (v) {
    return v;
};
var newtypeEnvT = {
    Coercible0: function () {
        return undefined;
    }
};
var mapEnvT = function (f) {
    return function (v) {
        return new Data_Tuple.Tuple(v.value0, f(v.value1));
    };
};
var functorEnvT = function (dictFunctor) {
    var map1 = Data_Functor.map(dictFunctor);
    return {
        map: function (f) {
            return function (v) {
                return new Data_Tuple.Tuple(v.value0, map1(f)(v.value1));
            };
        }
    };
};
var functorWithIndexEnvT = function (dictFunctorWithIndex) {
    var mapWithIndex = Data_FunctorWithIndex.mapWithIndex(dictFunctorWithIndex);
    var functorEnvT1 = functorEnvT(dictFunctorWithIndex.Functor0());
    return {
        mapWithIndex: function (f) {
            return function (v) {
                return new Data_Tuple.Tuple(v.value0, mapWithIndex(f)(v.value1));
            };
        },
        Functor0: function () {
            return functorEnvT1;
        }
    };
};
var foldableEnvT = function (dictFoldable) {
    var foldl = Data_Foldable.foldl(dictFoldable);
    var foldr = Data_Foldable.foldr(dictFoldable);
    var foldMap = Data_Foldable.foldMap(dictFoldable);
    return {
        foldl: function (fn) {
            return function (a) {
                return function (v) {
                    return foldl(fn)(a)(v.value1);
                };
            };
        },
        foldr: function (fn) {
            return function (a) {
                return function (v) {
                    return foldr(fn)(a)(v.value1);
                };
            };
        },
        foldMap: function (dictMonoid) {
            var foldMap1 = foldMap(dictMonoid);
            return function (fn) {
                return function (v) {
                    return foldMap1(fn)(v.value1);
                };
            };
        }
    };
};
var foldableWithIndexEnvT = function (dictFoldableWithIndex) {
    var foldlWithIndex = Data_FoldableWithIndex.foldlWithIndex(dictFoldableWithIndex);
    var foldrWithIndex = Data_FoldableWithIndex.foldrWithIndex(dictFoldableWithIndex);
    var foldMapWithIndex = Data_FoldableWithIndex.foldMapWithIndex(dictFoldableWithIndex);
    var foldableEnvT1 = foldableEnvT(dictFoldableWithIndex.Foldable0());
    return {
        foldlWithIndex: function (f) {
            return function (a) {
                return function (v) {
                    return foldlWithIndex(f)(a)(v.value1);
                };
            };
        },
        foldrWithIndex: function (f) {
            return function (a) {
                return function (v) {
                    return foldrWithIndex(f)(a)(v.value1);
                };
            };
        },
        foldMapWithIndex: function (dictMonoid) {
            var foldMapWithIndex1 = foldMapWithIndex(dictMonoid);
            return function (f) {
                return function (v) {
                    return foldMapWithIndex1(f)(v.value1);
                };
            };
        },
        Foldable0: function () {
            return foldableEnvT1;
        }
    };
};
var traversableEnvT = function (dictTraversable) {
    var sequence = Data_Traversable.sequence(dictTraversable);
    var traverse = Data_Traversable.traverse(dictTraversable);
    var functorEnvT1 = functorEnvT(dictTraversable.Functor0());
    var foldableEnvT1 = foldableEnvT(dictTraversable.Foldable1());
    return {
        sequence: function (dictApplicative) {
            var map1 = Data_Functor.map((dictApplicative.Apply0()).Functor0());
            var sequence1 = sequence(dictApplicative);
            return function (v) {
                return map1(map(EnvT)(Data_Tuple.Tuple.create(v.value0)))(sequence1(v.value1));
            };
        },
        traverse: function (dictApplicative) {
            var map1 = Data_Functor.map((dictApplicative.Apply0()).Functor0());
            var traverse1 = traverse(dictApplicative);
            return function (f) {
                return function (v) {
                    return map1(map(EnvT)(Data_Tuple.Tuple.create(v.value0)))(traverse1(f)(v.value1));
                };
            };
        },
        Functor0: function () {
            return functorEnvT1;
        },
        Foldable1: function () {
            return foldableEnvT1;
        }
    };
};
var traversableWithIndexEnvT = function (dictTraversableWithIndex) {
    var traverseWithIndex = Data_TraversableWithIndex.traverseWithIndex(dictTraversableWithIndex);
    var functorWithIndexEnvT1 = functorWithIndexEnvT(dictTraversableWithIndex.FunctorWithIndex0());
    var foldableWithIndexEnvT1 = foldableWithIndexEnvT(dictTraversableWithIndex.FoldableWithIndex1());
    var traversableEnvT1 = traversableEnvT(dictTraversableWithIndex.Traversable2());
    return {
        traverseWithIndex: function (dictApplicative) {
            var map1 = Data_Functor.map((dictApplicative.Apply0()).Functor0());
            var traverseWithIndex1 = traverseWithIndex(dictApplicative);
            return function (f) {
                return function (v) {
                    return map1(map(EnvT)(Data_Tuple.Tuple.create(v.value0)))(traverseWithIndex1(f)(v.value1));
                };
            };
        },
        FunctorWithIndex0: function () {
            return functorWithIndexEnvT1;
        },
        FoldableWithIndex1: function () {
            return foldableWithIndexEnvT1;
        },
        Traversable2: function () {
            return traversableEnvT1;
        }
    };
};
var extendEnvT = function (dictExtend) {
    var Functor0 = dictExtend.Functor0();
    var map1 = Data_Functor.map(Functor0);
    var extend = Control_Extend.extend(dictExtend);
    var functorEnvT1 = functorEnvT(Functor0);
    return {
        extend: function (f) {
            return function (v) {
                return new Data_Tuple.Tuple(v.value0, map1(f)(extend((function () {
                    var $145 = Data_Tuple.Tuple.create(v.value0);
                    return function ($146) {
                        return EnvT($145($146));
                    };
                })())(v.value1)));
            };
        },
        Functor0: function () {
            return functorEnvT1;
        }
    };
};
var comonadTransEnvT = {
    lower: function (dictComonad) {
        return function (v) {
            return v.value1;
        };
    }
};
var comonadEnvT = function (dictComonad) {
    var extract = Control_Comonad.extract(dictComonad);
    var extendEnvT1 = extendEnvT(dictComonad.Extend0());
    return {
        extract: function (v) {
            return extract(v.value1);
        },
        Extend0: function () {
            return extendEnvT1;
        }
    };
};
export {
    EnvT,
    runEnvT,
    withEnvT,
    mapEnvT,
    newtypeEnvT,
    functorEnvT,
    extendEnvT,
    comonadEnvT,
    comonadTransEnvT,
    foldableEnvT,
    traversableEnvT,
    functorWithIndexEnvT,
    foldableWithIndexEnvT,
    traversableWithIndexEnvT
};
//# sourceMappingURL=index.js.map
