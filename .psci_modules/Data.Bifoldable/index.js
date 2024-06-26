import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Apply from "../Control.Apply/index.js";
import * as Control_Category from "../Control.Category/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Foldable from "../Data.Foldable/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Monoid from "../Data.Monoid/index.js";
import * as Data_Monoid_Conj from "../Data.Monoid.Conj/index.js";
import * as Data_Monoid_Disj from "../Data.Monoid.Disj/index.js";
import * as Data_Monoid_Dual from "../Data.Monoid.Dual/index.js";
import * as Data_Monoid_Endo from "../Data.Monoid.Endo/index.js";
import * as Data_Newtype from "../Data.Newtype/index.js";
import * as Data_Semigroup from "../Data.Semigroup/index.js";
import * as Data_Unit from "../Data.Unit/index.js";
var identity = /* #__PURE__ */ Control_Category.identity(Control_Category.categoryFn);
var unwrap = /* #__PURE__ */ Data_Newtype.unwrap();
var monoidEndo = /* #__PURE__ */ Data_Monoid_Endo.monoidEndo(Control_Category.categoryFn);
var monoidDual = /* #__PURE__ */ Data_Monoid_Dual.monoidDual(monoidEndo);
var bifoldr = function (dict) {
    return dict.bifoldr;
};

// | Traverse a data structure, accumulating effects using an `Applicative` functor,
// | ignoring the final result.
var bitraverse_ = function (dictBifoldable) {
    var bifoldr1 = bifoldr(dictBifoldable);
    return function (dictApplicative) {
        var applySecond = Control_Apply.applySecond(dictApplicative.Apply0());
        var pure = Control_Applicative.pure(dictApplicative);
        return function (f) {
            return function (g) {
                return bifoldr1(function ($207) {
                    return applySecond(f($207));
                })(function ($208) {
                    return applySecond(g($208));
                })(pure(Data_Unit.unit));
            };
        };
    };
};

// | A version of `bitraverse_` with the data structure as the first argument.
var bifor_ = function (dictBifoldable) {
    var bitraverse_1 = bitraverse_(dictBifoldable);
    return function (dictApplicative) {
        var bitraverse_2 = bitraverse_1(dictApplicative);
        return function (t) {
            return function (f) {
                return function (g) {
                    return bitraverse_2(f)(g)(t);
                };
            };
        };
    };
};

// | Collapse a data structure, collecting effects using an `Applicative` functor,
// | ignoring the final result.
var bisequence_ = function (dictBifoldable) {
    var bitraverse_1 = bitraverse_(dictBifoldable);
    return function (dictApplicative) {
        return bitraverse_1(dictApplicative)(identity)(identity);
    };
};
var bifoldl = function (dict) {
    return dict.bifoldl;
};
var bifoldableTuple = {
    bifoldMap: function (dictMonoid) {
        var append = Data_Semigroup.append(dictMonoid.Semigroup0());
        return function (f) {
            return function (g) {
                return function (v) {
                    return append(f(v.value0))(g(v.value1));
                };
            };
        };
    },
    bifoldr: function (f) {
        return function (g) {
            return function (z) {
                return function (v) {
                    return f(v.value0)(g(v.value1)(z));
                };
            };
        };
    },
    bifoldl: function (f) {
        return function (g) {
            return function (z) {
                return function (v) {
                    return g(f(z)(v.value0))(v.value1);
                };
            };
        };
    }
};
var bifoldableJoker = function (dictFoldable) {
    var foldr = Data_Foldable.foldr(dictFoldable);
    var foldl = Data_Foldable.foldl(dictFoldable);
    var foldMap = Data_Foldable.foldMap(dictFoldable);
    return {
        bifoldr: function (v) {
            return function (r) {
                return function (u) {
                    return function (v1) {
                        return foldr(r)(u)(v1);
                    };
                };
            };
        },
        bifoldl: function (v) {
            return function (r) {
                return function (u) {
                    return function (v1) {
                        return foldl(r)(u)(v1);
                    };
                };
            };
        },
        bifoldMap: function (dictMonoid) {
            var foldMap1 = foldMap(dictMonoid);
            return function (v) {
                return function (r) {
                    return function (v1) {
                        return foldMap1(r)(v1);
                    };
                };
            };
        }
    };
};
var bifoldableEither = {
    bifoldr: function (v) {
        return function (v1) {
            return function (v2) {
                return function (v3) {
                    if (v3 instanceof Data_Either.Left) {
                        return v(v3.value0)(v2);
                    };
                    if (v3 instanceof Data_Either.Right) {
                        return v1(v3.value0)(v2);
                    };
                    throw new Error("Failed pattern match at Data.Bifoldable (line 62, column 1 - line 68, column 32): " + [ v.constructor.name, v1.constructor.name, v2.constructor.name, v3.constructor.name ]);
                };
            };
        };
    },
    bifoldl: function (v) {
        return function (v1) {
            return function (v2) {
                return function (v3) {
                    if (v3 instanceof Data_Either.Left) {
                        return v(v2)(v3.value0);
                    };
                    if (v3 instanceof Data_Either.Right) {
                        return v1(v2)(v3.value0);
                    };
                    throw new Error("Failed pattern match at Data.Bifoldable (line 62, column 1 - line 68, column 32): " + [ v.constructor.name, v1.constructor.name, v2.constructor.name, v3.constructor.name ]);
                };
            };
        };
    },
    bifoldMap: function (dictMonoid) {
        return function (v) {
            return function (v1) {
                return function (v2) {
                    if (v2 instanceof Data_Either.Left) {
                        return v(v2.value0);
                    };
                    if (v2 instanceof Data_Either.Right) {
                        return v1(v2.value0);
                    };
                    throw new Error("Failed pattern match at Data.Bifoldable (line 62, column 1 - line 68, column 32): " + [ v.constructor.name, v1.constructor.name, v2.constructor.name ]);
                };
            };
        };
    }
};
var bifoldableConst = {
    bifoldr: function (f) {
        return function (v) {
            return function (z) {
                return function (v1) {
                    return f(v1)(z);
                };
            };
        };
    },
    bifoldl: function (f) {
        return function (v) {
            return function (z) {
                return function (v1) {
                    return f(z)(v1);
                };
            };
        };
    },
    bifoldMap: function (dictMonoid) {
        return function (f) {
            return function (v) {
                return function (v1) {
                    return f(v1);
                };
            };
        };
    }
};
var bifoldableClown = function (dictFoldable) {
    var foldr = Data_Foldable.foldr(dictFoldable);
    var foldl = Data_Foldable.foldl(dictFoldable);
    var foldMap = Data_Foldable.foldMap(dictFoldable);
    return {
        bifoldr: function (l) {
            return function (v) {
                return function (u) {
                    return function (v1) {
                        return foldr(l)(u)(v1);
                    };
                };
            };
        },
        bifoldl: function (l) {
            return function (v) {
                return function (u) {
                    return function (v1) {
                        return foldl(l)(u)(v1);
                    };
                };
            };
        },
        bifoldMap: function (dictMonoid) {
            var foldMap1 = foldMap(dictMonoid);
            return function (l) {
                return function (v) {
                    return function (v1) {
                        return foldMap1(l)(v1);
                    };
                };
            };
        }
    };
};

// | A default implementation of `bifoldMap` using `bifoldr`.
// |
// | Note: when defining a `Bifoldable` instance, this function is unsafe to
// | use in combination with `bifoldrDefault`.
var bifoldMapDefaultR = function (dictBifoldable) {
    var bifoldr1 = bifoldr(dictBifoldable);
    return function (dictMonoid) {
        var append = Data_Semigroup.append(dictMonoid.Semigroup0());
        var mempty = Data_Monoid.mempty(dictMonoid);
        return function (f) {
            return function (g) {
                return bifoldr1(function ($209) {
                    return append(f($209));
                })(function ($210) {
                    return append(g($210));
                })(mempty);
            };
        };
    };
};

// | A default implementation of `bifoldMap` using `bifoldl`.
// |
// | Note: when defining a `Bifoldable` instance, this function is unsafe to
// | use in combination with `bifoldlDefault`.
var bifoldMapDefaultL = function (dictBifoldable) {
    var bifoldl1 = bifoldl(dictBifoldable);
    return function (dictMonoid) {
        var append = Data_Semigroup.append(dictMonoid.Semigroup0());
        var mempty = Data_Monoid.mempty(dictMonoid);
        return function (f) {
            return function (g) {
                return bifoldl1(function (m) {
                    return function (a) {
                        return append(m)(f(a));
                    };
                })(function (m) {
                    return function (b) {
                        return append(m)(g(b));
                    };
                })(mempty);
            };
        };
    };
};
var bifoldMap = function (dict) {
    return dict.bifoldMap;
};
var bifoldableFlip = function (dictBifoldable) {
    var bifoldr1 = bifoldr(dictBifoldable);
    var bifoldl1 = bifoldl(dictBifoldable);
    var bifoldMap1 = bifoldMap(dictBifoldable);
    return {
        bifoldr: function (r) {
            return function (l) {
                return function (u) {
                    return function (v) {
                        return bifoldr1(l)(r)(u)(v);
                    };
                };
            };
        },
        bifoldl: function (r) {
            return function (l) {
                return function (u) {
                    return function (v) {
                        return bifoldl1(l)(r)(u)(v);
                    };
                };
            };
        },
        bifoldMap: function (dictMonoid) {
            var bifoldMap2 = bifoldMap1(dictMonoid);
            return function (r) {
                return function (l) {
                    return function (v) {
                        return bifoldMap2(l)(r)(v);
                    };
                };
            };
        }
    };
};

// | A default implementation of `bifoldl` using `bifoldMap`.
// |
// | Note: when defining a `Bifoldable` instance, this function is unsafe to
// | use in combination with `bifoldMapDefaultL`.
var bifoldlDefault = function (dictBifoldable) {
    var bifoldMap1 = bifoldMap(dictBifoldable)(monoidDual);
    return function (f) {
        return function (g) {
            return function (z) {
                return function (p) {
                    return unwrap(unwrap(bifoldMap1((function () {
                        var $211 = Data_Function.flip(f);
                        return function ($212) {
                            return Data_Monoid_Dual.Dual(Data_Monoid_Endo.Endo($211($212)));
                        };
                    })())((function () {
                        var $213 = Data_Function.flip(g);
                        return function ($214) {
                            return Data_Monoid_Dual.Dual(Data_Monoid_Endo.Endo($213($214)));
                        };
                    })())(p)))(z);
                };
            };
        };
    };
};

// | A default implementation of `bifoldr` using `bifoldMap`.
// |
// | Note: when defining a `Bifoldable` instance, this function is unsafe to
// | use in combination with `bifoldMapDefaultR`.
var bifoldrDefault = function (dictBifoldable) {
    var bifoldMap1 = bifoldMap(dictBifoldable)(monoidEndo);
    return function (f) {
        return function (g) {
            return function (z) {
                return function (p) {
                    return unwrap(bifoldMap1(function ($215) {
                        return Data_Monoid_Endo.Endo(f($215));
                    })(function ($216) {
                        return Data_Monoid_Endo.Endo(g($216));
                    })(p))(z);
                };
            };
        };
    };
};
var bifoldableProduct2 = function (dictBifoldable) {
    var bifoldMap1 = bifoldMap(dictBifoldable);
    return function (dictBifoldable1) {
        var bifoldMap2 = bifoldMap(dictBifoldable1);
        return {
            bifoldr: function (l) {
                return function (r) {
                    return function (u) {
                        return function (m) {
                            return bifoldrDefault(bifoldableProduct2(dictBifoldable)(dictBifoldable1))(l)(r)(u)(m);
                        };
                    };
                };
            },
            bifoldl: function (l) {
                return function (r) {
                    return function (u) {
                        return function (m) {
                            return bifoldlDefault(bifoldableProduct2(dictBifoldable)(dictBifoldable1))(l)(r)(u)(m);
                        };
                    };
                };
            },
            bifoldMap: function (dictMonoid) {
                var append = Data_Semigroup.append(dictMonoid.Semigroup0());
                var bifoldMap3 = bifoldMap1(dictMonoid);
                var bifoldMap4 = bifoldMap2(dictMonoid);
                return function (l) {
                    return function (r) {
                        return function (v) {
                            return append(bifoldMap3(l)(r)(v.value0))(bifoldMap4(l)(r)(v.value1));
                        };
                    };
                };
            }
        };
    };
};

// | Fold a data structure, accumulating values in a monoidal type.
var bifold = function (dictBifoldable) {
    var bifoldMap1 = bifoldMap(dictBifoldable);
    return function (dictMonoid) {
        return bifoldMap1(dictMonoid)(identity)(identity);
    };
};

// | Test whether a predicate holds at any position in a data structure.
var biany = function (dictBifoldable) {
    var bifoldMap1 = bifoldMap(dictBifoldable);
    return function (dictBooleanAlgebra) {
        var bifoldMap2 = bifoldMap1(Data_Monoid_Disj.monoidDisj(dictBooleanAlgebra.HeytingAlgebra0()));
        return function (p) {
            return function (q) {
                var $217 = bifoldMap2(function ($219) {
                    return Data_Monoid_Disj.Disj(p($219));
                })(function ($220) {
                    return Data_Monoid_Disj.Disj(q($220));
                });
                return function ($218) {
                    return unwrap($217($218));
                };
            };
        };
    };
};

// | Test whether a predicate holds at all positions in a data structure.
var biall = function (dictBifoldable) {
    var bifoldMap1 = bifoldMap(dictBifoldable);
    return function (dictBooleanAlgebra) {
        var bifoldMap2 = bifoldMap1(Data_Monoid_Conj.monoidConj(dictBooleanAlgebra.HeytingAlgebra0()));
        return function (p) {
            return function (q) {
                var $221 = bifoldMap2(function ($223) {
                    return Data_Monoid_Conj.Conj(p($223));
                })(function ($224) {
                    return Data_Monoid_Conj.Conj(q($224));
                });
                return function ($222) {
                    return unwrap($221($222));
                };
            };
        };
    };
};
export {
    bifoldMap,
    bifoldl,
    bifoldr,
    bifoldrDefault,
    bifoldlDefault,
    bifoldMapDefaultR,
    bifoldMapDefaultL,
    bifold,
    bitraverse_,
    bifor_,
    bisequence_,
    biany,
    biall,
    bifoldableClown,
    bifoldableJoker,
    bifoldableFlip,
    bifoldableProduct2,
    bifoldableEither,
    bifoldableTuple,
    bifoldableConst
};
