import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Functor_Invariant from "../Data.Functor.Invariant/index.js";
import * as Data_Monoid from "../Data.Monoid/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Semigroup from "../Data.Semigroup/index.js";
import * as Data_Show from "../Data.Show/index.js";
var Const = function (x) {
    return x;
};
var showConst = function (dictShow) {
    var show = Data_Show.show(dictShow);
    return {
        show: function (v) {
            return "(Const " + (show(v) + ")");
        }
    };
};
var semiringConst = function (dictSemiring) {
    return dictSemiring;
};
var semigroupoidConst = {
    compose: function (v) {
        return function (v1) {
            return v1;
        };
    }
};
var semigroupConst = function (dictSemigroup) {
    return dictSemigroup;
};
var ringConst = function (dictRing) {
    return dictRing;
};
var ordConst = function (dictOrd) {
    return dictOrd;
};
var newtypeConst = {
    Coercible0: function () {
        return undefined;
    }
};
var monoidConst = function (dictMonoid) {
    return dictMonoid;
};
var heytingAlgebraConst = function (dictHeytingAlgebra) {
    return dictHeytingAlgebra;
};
var functorConst = {
    map: function (f) {
        return function (m) {
            return m;
        };
    }
};
var invariantConst = {
    imap: /* #__PURE__ */ Data_Functor_Invariant.imapF(functorConst)
};
var euclideanRingConst = function (dictEuclideanRing) {
    return dictEuclideanRing;
};
var eqConst = function (dictEq) {
    return dictEq;
};
var eq1Const = function (dictEq) {
    var eq = Data_Eq.eq(eqConst(dictEq));
    return {
        eq1: function (dictEq1) {
            return eq;
        }
    };
};
var ord1Const = function (dictOrd) {
    var compare = Data_Ord.compare(ordConst(dictOrd));
    var eq1Const1 = eq1Const(dictOrd.Eq0());
    return {
        compare1: function (dictOrd1) {
            return compare;
        },
        Eq10: function () {
            return eq1Const1;
        }
    };
};
var commutativeRingConst = function (dictCommutativeRing) {
    return dictCommutativeRing;
};
var boundedConst = function (dictBounded) {
    return dictBounded;
};
var booleanAlgebraConst = function (dictBooleanAlgebra) {
    return dictBooleanAlgebra;
};
var applyConst = function (dictSemigroup) {
    var append1 = Data_Semigroup.append(dictSemigroup);
    return {
        apply: function (v) {
            return function (v1) {
                return append1(v)(v1);
            };
        },
        Functor0: function () {
            return functorConst;
        }
    };
};
var applicativeConst = function (dictMonoid) {
    var mempty = Data_Monoid.mempty(dictMonoid);
    var applyConst1 = applyConst(dictMonoid.Semigroup0());
    return {
        pure: function (v) {
            return mempty;
        },
        Apply0: function () {
            return applyConst1;
        }
    };
};
export {
    Const,
    newtypeConst,
    eqConst,
    eq1Const,
    ordConst,
    ord1Const,
    boundedConst,
    showConst,
    semigroupoidConst,
    semigroupConst,
    monoidConst,
    semiringConst,
    ringConst,
    euclideanRingConst,
    commutativeRingConst,
    heytingAlgebraConst,
    booleanAlgebraConst,
    functorConst,
    invariantConst,
    applyConst,
    applicativeConst
};
