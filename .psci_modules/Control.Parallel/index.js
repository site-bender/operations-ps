import * as Control_Apply from "../Control.Apply/index.js";
import * as Control_Category from "../Control.Category/index.js";
import * as Control_Parallel_Class from "../Control.Parallel.Class/index.js";
import * as Data_Foldable from "../Data.Foldable/index.js";
import * as Data_Traversable from "../Data.Traversable/index.js";
var identity = /* #__PURE__ */ Control_Category.identity(Control_Category.categoryFn);

// | Traverse a collection in parallel, discarding any results.
var parTraverse_ = function (dictParallel) {
    var sequential = Control_Parallel_Class.sequential(dictParallel);
    var parallel = Control_Parallel_Class.parallel(dictParallel);
    return function (dictApplicative) {
        var traverse_ = Data_Foldable.traverse_(dictApplicative);
        return function (dictFoldable) {
            var traverse_1 = traverse_(dictFoldable);
            return function (f) {
                var $51 = traverse_1(function ($53) {
                    return parallel(f($53));
                });
                return function ($52) {
                    return sequential($51($52));
                };
            };
        };
    };
};

// | Traverse a collection in parallel.
var parTraverse = function (dictParallel) {
    var sequential = Control_Parallel_Class.sequential(dictParallel);
    var parallel = Control_Parallel_Class.parallel(dictParallel);
    return function (dictApplicative) {
        return function (dictTraversable) {
            var traverse = Data_Traversable.traverse(dictTraversable)(dictApplicative);
            return function (f) {
                var $54 = traverse(function ($56) {
                    return parallel(f($56));
                });
                return function ($55) {
                    return sequential($54($55));
                };
            };
        };
    };
};
var parSequence_ = function (dictParallel) {
    var parTraverse_1 = parTraverse_(dictParallel);
    return function (dictApplicative) {
        var parTraverse_2 = parTraverse_1(dictApplicative);
        return function (dictFoldable) {
            return parTraverse_2(dictFoldable)(identity);
        };
    };
};
var parSequence = function (dictParallel) {
    var parTraverse1 = parTraverse(dictParallel);
    return function (dictApplicative) {
        var parTraverse2 = parTraverse1(dictApplicative);
        return function (dictTraversable) {
            return parTraverse2(dictTraversable)(identity);
        };
    };
};

// | Race a collection in parallel while mapping to some effect.
var parOneOfMap = function (dictParallel) {
    var sequential = Control_Parallel_Class.sequential(dictParallel);
    var parallel = Control_Parallel_Class.parallel(dictParallel);
    return function (dictAlternative) {
        var Plus1 = dictAlternative.Plus1();
        return function (dictFoldable) {
            var oneOfMap = Data_Foldable.oneOfMap(dictFoldable)(Plus1);
            return function (dictFunctor) {
                return function (f) {
                    var $57 = oneOfMap(function ($59) {
                        return parallel(f($59));
                    });
                    return function ($58) {
                        return sequential($57($58));
                    };
                };
            };
        };
    };
};

// | Race a collection in parallel.
var parOneOf = function (dictParallel) {
    var sequential = Control_Parallel_Class.sequential(dictParallel);
    var parallel = Control_Parallel_Class.parallel(dictParallel);
    return function (dictAlternative) {
        var Plus1 = dictAlternative.Plus1();
        return function (dictFoldable) {
            var oneOfMap = Data_Foldable.oneOfMap(dictFoldable)(Plus1);
            return function (dictFunctor) {
                var $60 = oneOfMap(parallel);
                return function ($61) {
                    return sequential($60($61));
                };
            };
        };
    };
};

// | Apply a function to an argument under a type constructor in parallel.
var parApply = function (dictParallel) {
    var sequential = Control_Parallel_Class.sequential(dictParallel);
    var apply = Control_Apply.apply(dictParallel.Apply1());
    var parallel = Control_Parallel_Class.parallel(dictParallel);
    return function (mf) {
        return function (ma) {
            return sequential(apply(parallel(mf))(parallel(ma)));
        };
    };
};
export {
    parApply,
    parTraverse,
    parTraverse_,
    parSequence,
    parSequence_,
    parOneOf,
    parOneOfMap
};
export {
    ParCont,
    parallel,
    sequential
} from "../Control.Parallel.Class/index.js";
