// Generated by purs version 0.15.15
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Apply from "../Control.Apply/index.js";
import * as Data_Bifunctor from "../Data.Bifunctor/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Monoid from "../Data.Monoid/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Semigroup from "../Data.Semigroup/index.js";
import * as Data_Show from "../Data.Show/index.js";
var V = function (x) {
    return x;
};
var validation = function (v) {
    return function (v1) {
        return function (v2) {
            if (v2 instanceof Data_Either.Left) {
                return v(v2.value0);
            };
            if (v2 instanceof Data_Either.Right) {
                return v1(v2.value0);
            };
            throw new Error("Failed pattern match at Data.Validation.Semigroup (line 48, column 1 - line 48, column 84): " + [ v.constructor.name, v1.constructor.name, v2.constructor.name ]);
        };
    };
};
var toEither = function (v) {
    return v;
};
var showV = function (dictShow) {
    var show = Data_Show.show(dictShow);
    return function (dictShow1) {
        var show1 = Data_Show.show(dictShow1);
        return {
            show: function (v) {
                if (v instanceof Data_Either.Left) {
                    return "invalid (" + (show(v.value0) + ")");
                };
                if (v instanceof Data_Either.Right) {
                    return "pure (" + (show1(v.value0) + ")");
                };
                throw new Error("Failed pattern match at Data.Validation.Semigroup (line 81, column 10 - line 83, column 55): " + [ v.constructor.name ]);
            }
        };
    };
};
var newtypeV = {
    Coercible0: function () {
        return undefined;
    }
};
var isValid = function (v) {
    if (v instanceof Data_Either.Right) {
        return true;
    };
    return false;
};
var invalid = function ($100) {
    return V(Data_Either.Left.create($100));
};
var functorV = Data_Either.functorEither;
var foldableV = {
    foldMap: function (dictMonoid) {
        return validation(Data_Function["const"](Data_Monoid.mempty(dictMonoid)));
    },
    foldr: function (f) {
        return function (b) {
            return validation(Data_Function["const"](b))(Data_Function.flip(f)(b));
        };
    },
    foldl: function (f) {
        return function (b) {
            return validation(Data_Function["const"](b))(f(b));
        };
    }
};
var traversableV = {
    sequence: function (dictApplicative) {
        return validation((function () {
            var $101 = Control_Applicative.pure(dictApplicative);
            return function ($102) {
                return $101(V(Data_Either.Left.create($102)));
            };
        })())(Data_Functor.map((dictApplicative.Apply0()).Functor0())(function ($103) {
            return V(Data_Either.Right.create($103));
        }));
    },
    traverse: function (dictApplicative) {
        var pure = Control_Applicative.pure(dictApplicative);
        var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
        return function (f) {
            return validation(function ($104) {
                return pure(V(Data_Either.Left.create($104)));
            })((function () {
                var $105 = map(function ($107) {
                    return V(Data_Either.Right.create($107));
                });
                return function ($106) {
                    return $105(f($106));
                };
            })());
        };
    },
    Functor0: function () {
        return functorV;
    },
    Foldable1: function () {
        return foldableV;
    }
};
var eqV = function (dictEq) {
    var eqEither = Data_Either.eqEither(dictEq);
    return function (dictEq1) {
        var eq = Data_Eq.eq(eqEither(dictEq1));
        return {
            eq: function (x) {
                return function (y) {
                    return eq(x)(y);
                };
            }
        };
    };
};
var ordV = function (dictOrd) {
    var ordEither = Data_Either.ordEither(dictOrd);
    var eqV1 = eqV(dictOrd.Eq0());
    return function (dictOrd1) {
        var compare = Data_Ord.compare(ordEither(dictOrd1));
        var eqV2 = eqV1(dictOrd1.Eq0());
        return {
            compare: function (x) {
                return function (y) {
                    return compare(x)(y);
                };
            },
            Eq0: function () {
                return eqV2;
            }
        };
    };
};
var eq1V = function (dictEq) {
    var eqV1 = eqV(dictEq);
    return {
        eq1: function (dictEq1) {
            return Data_Eq.eq(eqV1(dictEq1));
        }
    };
};
var ord1V = function (dictOrd) {
    var ordV1 = ordV(dictOrd);
    var eq1V1 = eq1V(dictOrd.Eq0());
    return {
        compare1: function (dictOrd1) {
            return Data_Ord.compare(ordV1(dictOrd1));
        },
        Eq10: function () {
            return eq1V1;
        }
    };
};
var bifunctorV = Data_Bifunctor.bifunctorEither;
var applyV = function (dictSemigroup) {
    var append1 = Data_Semigroup.append(dictSemigroup);
    return {
        apply: function (v) {
            return function (v1) {
                if (v instanceof Data_Either.Left && v1 instanceof Data_Either.Left) {
                    return new Data_Either.Left(append1(v.value0)(v1.value0));
                };
                if (v instanceof Data_Either.Left) {
                    return new Data_Either.Left(v.value0);
                };
                if (v1 instanceof Data_Either.Left) {
                    return new Data_Either.Left(v1.value0);
                };
                if (v instanceof Data_Either.Right && v1 instanceof Data_Either.Right) {
                    return new Data_Either.Right(v.value0(v1.value0));
                };
                throw new Error("Failed pattern match at Data.Validation.Semigroup (line 89, column 1 - line 93, column 54): " + [ v.constructor.name, v1.constructor.name ]);
            };
        },
        Functor0: function () {
            return functorV;
        }
    };
};
var semigroupV = function (dictSemigroup) {
    var lift2 = Control_Apply.lift2(applyV(dictSemigroup));
    return function (dictSemigroup1) {
        return {
            append: lift2(Data_Semigroup.append(dictSemigroup1))
        };
    };
};
var applicativeV = function (dictSemigroup) {
    var applyV1 = applyV(dictSemigroup);
    return {
        pure: function ($108) {
            return V(Data_Either.Right.create($108));
        },
        Apply0: function () {
            return applyV1;
        }
    };
};
var monoidV = function (dictSemigroup) {
    var pure = Control_Applicative.pure(applicativeV(dictSemigroup));
    var semigroupV1 = semigroupV(dictSemigroup);
    return function (dictMonoid) {
        var semigroupV2 = semigroupV1(dictMonoid.Semigroup0());
        return {
            mempty: pure(Data_Monoid.mempty(dictMonoid)),
            Semigroup0: function () {
                return semigroupV2;
            }
        };
    };
};
var andThen = function (v1) {
    return function (f) {
        return validation(invalid)(f)(v1);
    };
};
export {
    V,
    validation,
    invalid,
    isValid,
    toEither,
    andThen,
    newtypeV,
    eqV,
    eq1V,
    ordV,
    ord1V,
    showV,
    functorV,
    bifunctorV,
    applyV,
    applicativeV,
    semigroupV,
    monoidV,
    foldableV,
    traversableV
};
