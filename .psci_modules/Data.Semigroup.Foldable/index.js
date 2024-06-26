import * as Control_Apply from "../Control.Apply/index.js";
import * as Control_Category from "../Control.Category/index.js";
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Foldable from "../Data.Foldable/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Monoid_Dual from "../Data.Monoid.Dual/index.js";
import * as Data_Newtype from "../Data.Newtype/index.js";
import * as Data_Ord_Max from "../Data.Ord.Max/index.js";
import * as Data_Ord_Min from "../Data.Ord.Min/index.js";
import * as Data_Ordering from "../Data.Ordering/index.js";
import * as Data_Semigroup from "../Data.Semigroup/index.js";
import * as Data_Unit from "../Data.Unit/index.js";
var eq = /* #__PURE__ */ Data_Eq.eq(Data_Ordering.eqOrdering);
var alaF = /* #__PURE__ */ Data_Newtype.alaF()()()();
var identity = /* #__PURE__ */ Control_Category.identity(Control_Category.categoryFn);
var ala = /* #__PURE__ */ Data_Newtype.ala()()();

// | Internal. Used by intercalation functions.
var JoinWith = function (x) {
    return x;
};

// | Internal. Used by foldr1Default and foldl1Default.
var FoldRight1 = /* #__PURE__ */ (function () {
    function FoldRight1(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    FoldRight1.create = function (value0) {
        return function (value1) {
            return new FoldRight1(value0, value1);
        };
    };
    return FoldRight1;
})();
var Act = function (x) {
    return x;
};
var semigroupJoinWith = function (dictSemigroup) {
    var append = Data_Semigroup.append(dictSemigroup);
    return {
        append: function (v) {
            return function (v1) {
                return function (j) {
                    return append(v(j))(append(j)(v1(j)));
                };
            };
        }
    };
};
var semigroupAct = function (dictApply) {
    var applySecond = Control_Apply.applySecond(dictApply);
    return {
        append: function (v) {
            return function (v1) {
                return applySecond(v)(v1);
            };
        }
    };
};
var runFoldRight1 = function (v) {
    return v.value0(v.value1);
};
var mkFoldRight1 = /* #__PURE__ */ (function () {
    return FoldRight1.create(Data_Function["const"]);
})();
var joinee = function (v) {
    return v;
};
var getAct = function (v) {
    return v;
};
var foldr1 = function (dict) {
    return dict.foldr1;
};
var foldl1 = function (dict) {
    return dict.foldl1;
};
var maximumBy = function (dictFoldable1) {
    var foldl11 = foldl1(dictFoldable1);
    return function (cmp) {
        return foldl11(function (x) {
            return function (y) {
                var $120 = eq(cmp(x)(y))(Data_Ordering.GT.value);
                if ($120) {
                    return x;
                };
                return y;
            };
        });
    };
};
var minimumBy = function (dictFoldable1) {
    var foldl11 = foldl1(dictFoldable1);
    return function (cmp) {
        return foldl11(function (x) {
            return function (y) {
                var $121 = eq(cmp(x)(y))(Data_Ordering.LT.value);
                if ($121) {
                    return x;
                };
                return y;
            };
        });
    };
};
var foldableTuple = {
    foldMap1: function (dictSemigroup) {
        return function (f) {
            return function (v) {
                return f(v.value1);
            };
        };
    },
    foldr1: function (v) {
        return function (v1) {
            return v1.value1;
        };
    },
    foldl1: function (v) {
        return function (v1) {
            return v1.value1;
        };
    },
    Foldable0: function () {
        return Data_Foldable.foldableTuple;
    }
};
var foldableMultiplicative = {
    foldr1: function (v) {
        return function (v1) {
            return v1;
        };
    },
    foldl1: function (v) {
        return function (v1) {
            return v1;
        };
    },
    foldMap1: function (dictSemigroup) {
        return function (f) {
            return function (v) {
                return f(v);
            };
        };
    },
    Foldable0: function () {
        return Data_Foldable.foldableMultiplicative;
    }
};
var foldableIdentity = {
    foldMap1: function (dictSemigroup) {
        return function (f) {
            return function (v) {
                return f(v);
            };
        };
    },
    foldl1: function (v) {
        return function (v1) {
            return v1;
        };
    },
    foldr1: function (v) {
        return function (v1) {
            return v1;
        };
    },
    Foldable0: function () {
        return Data_Foldable.foldableIdentity;
    }
};
var foldableDual = {
    foldr1: function (v) {
        return function (v1) {
            return v1;
        };
    },
    foldl1: function (v) {
        return function (v1) {
            return v1;
        };
    },
    foldMap1: function (dictSemigroup) {
        return function (f) {
            return function (v) {
                return f(v);
            };
        };
    },
    Foldable0: function () {
        return Data_Foldable.foldableDual;
    }
};
var foldRight1Semigroup = {
    append: function (v) {
        return function (v1) {
            return new FoldRight1(function (a) {
                return function (f) {
                    return v.value0(f(v.value1)(v1.value0(a)(f)))(f);
                };
            }, v1.value1);
        };
    }
};
var semigroupDual = /* #__PURE__ */ Data_Monoid_Dual.semigroupDual(foldRight1Semigroup);

// | A default implementation of `foldMap1` using `foldr1`.
// |
// | Note: when defining a `Foldable1` instance, this function is unsafe to use
// | in combination with `foldr1Default`.
var foldMap1DefaultR = function (dictFoldable1) {
    var foldr11 = foldr1(dictFoldable1);
    return function (dictFunctor) {
        var map = Data_Functor.map(dictFunctor);
        return function (dictSemigroup) {
            var append = Data_Semigroup.append(dictSemigroup);
            return function (f) {
                var $159 = foldr11(append);
                var $160 = map(f);
                return function ($161) {
                    return $159($160($161));
                };
            };
        };
    };
};

// | A default implementation of `foldMap1` using `foldl1`.
// |
// | Note: when defining a `Foldable1` instance, this function is unsafe to use
// | in combination with `foldl1Default`.
var foldMap1DefaultL = function (dictFoldable1) {
    var foldl11 = foldl1(dictFoldable1);
    return function (dictFunctor) {
        var map = Data_Functor.map(dictFunctor);
        return function (dictSemigroup) {
            var append = Data_Semigroup.append(dictSemigroup);
            return function (f) {
                var $162 = foldl11(append);
                var $163 = map(f);
                return function ($164) {
                    return $162($163($164));
                };
            };
        };
    };
};
var foldMap1 = function (dict) {
    return dict.foldMap1;
};

// | A default implementation of `foldl1` using `foldMap1`.
// |
// | Note: when defining a `Foldable1` instance, this function is unsafe to use
// | in combination with `foldMap1DefaultL`.
var foldl1Default = function (dictFoldable1) {
    var $165 = Data_Function.flip((function () {
        var $167 = alaF(Data_Monoid_Dual.Dual)(foldMap1(dictFoldable1)(semigroupDual))(mkFoldRight1);
        return function ($168) {
            return runFoldRight1($167($168));
        };
    })());
    return function ($166) {
        return $165(Data_Function.flip($166));
    };
};

// | A default implementation of `foldr1` using `foldMap1`.
// |
// | Note: when defining a `Foldable1` instance, this function is unsafe to use
// | in combination with `foldMap1DefaultR`.
var foldr1Default = function (dictFoldable1) {
    return Data_Function.flip((function () {
        var $169 = foldMap1(dictFoldable1)(foldRight1Semigroup)(mkFoldRight1);
        return function ($170) {
            return runFoldRight1($169($170));
        };
    })());
};

// | Fold a data structure, accumulating values in some `Semigroup`,
// | combining adjacent elements using the specified separator.
var intercalateMap = function (dictFoldable1) {
    var foldMap11 = foldMap1(dictFoldable1);
    return function (dictSemigroup) {
        var foldMap12 = foldMap11(semigroupJoinWith(dictSemigroup));
        return function (j) {
            return function (f) {
                return function (foldable) {
                    return joinee(foldMap12(function ($171) {
                        return JoinWith(Data_Function["const"](f($171)));
                    })(foldable))(j);
                };
            };
        };
    };
};

// | Fold a data structure using a `Semigroup` instance,
// | combining adjacent elements using the specified separator.
var intercalate = function (dictFoldable1) {
    var intercalateMap1 = intercalateMap(dictFoldable1);
    return function (dictSemigroup) {
        return Data_Function.flip(intercalateMap1(dictSemigroup))(identity);
    };
};
var maximum = function (dictOrd) {
    var semigroupMax = Data_Ord_Max.semigroupMax(dictOrd);
    return function (dictFoldable1) {
        return ala(Data_Ord_Max.Max)(foldMap1(dictFoldable1)(semigroupMax));
    };
};
var minimum = function (dictOrd) {
    var semigroupMin = Data_Ord_Min.semigroupMin(dictOrd);
    return function (dictFoldable1) {
        return ala(Data_Ord_Min.Min)(foldMap1(dictFoldable1)(semigroupMin));
    };
};

// | Traverse a data structure, performing some effects encoded by an
// | `Apply` instance at each value, ignoring the final result.
var traverse1_ = function (dictFoldable1) {
    var foldMap11 = foldMap1(dictFoldable1);
    return function (dictApply) {
        var voidRight = Data_Functor.voidRight(dictApply.Functor0());
        var foldMap12 = foldMap11(semigroupAct(dictApply));
        return function (f) {
            return function (t) {
                return voidRight(Data_Unit.unit)(getAct(foldMap12(function ($172) {
                    return Act(f($172));
                })(t)));
            };
        };
    };
};

// | A version of `traverse1_` with its arguments flipped.
// |
// | This can be useful when running an action written using do notation
// | for every element in a data structure:
var for1_ = function (dictFoldable1) {
    var traverse1_1 = traverse1_(dictFoldable1);
    return function (dictApply) {
        return Data_Function.flip(traverse1_1(dictApply));
    };
};

// | Perform all of the effects in some data structure in the order
// | given by the `Foldable1` instance, ignoring the final result.
var sequence1_ = function (dictFoldable1) {
    var traverse1_1 = traverse1_(dictFoldable1);
    return function (dictApply) {
        return traverse1_1(dictApply)(identity);
    };
};

// | Fold a data structure, accumulating values in some `Semigroup`.
var fold1 = function (dictFoldable1) {
    var foldMap11 = foldMap1(dictFoldable1);
    return function (dictSemigroup) {
        return foldMap11(dictSemigroup)(identity);
    };
};
export {
    foldMap1,
    fold1,
    foldr1,
    foldl1,
    traverse1_,
    for1_,
    sequence1_,
    foldr1Default,
    foldl1Default,
    foldMap1DefaultR,
    foldMap1DefaultL,
    intercalate,
    intercalateMap,
    maximum,
    maximumBy,
    minimum,
    minimumBy,
    foldableDual,
    foldableMultiplicative,
    foldableTuple,
    foldableIdentity
};
