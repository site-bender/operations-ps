import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Semiring from "../Data.Semiring/index.js";
import * as Data_Show from "../Data.Show/index.js";

// | Monoid and semigroup for semirings under multiplication.
// |
// | ``` purescript
// | Multiplicative x <> Multiplicative y == Multiplicative (x * y)
// | (mempty :: Multiplicative _) == Multiplicative one
// | ```
var Multiplicative = function (x) {
    return x;
};
var showMultiplicative = function (dictShow) {
    var show = Data_Show.show(dictShow);
    return {
        show: function (v) {
            return "(Multiplicative " + (show(v) + ")");
        }
    };
};
var semigroupMultiplicative = function (dictSemiring) {
    var mul = Data_Semiring.mul(dictSemiring);
    return {
        append: function (v) {
            return function (v1) {
                return mul(v)(v1);
            };
        }
    };
};
var ordMultiplicative = function (dictOrd) {
    return dictOrd;
};
var monoidMultiplicative = function (dictSemiring) {
    var semigroupMultiplicative1 = semigroupMultiplicative(dictSemiring);
    return {
        mempty: Data_Semiring.one(dictSemiring),
        Semigroup0: function () {
            return semigroupMultiplicative1;
        }
    };
};
var functorMultiplicative = {
    map: function (f) {
        return function (m) {
            return f(m);
        };
    }
};
var eqMultiplicative = function (dictEq) {
    return dictEq;
};
var eq1Multiplicative = {
    eq1: function (dictEq) {
        return Data_Eq.eq(eqMultiplicative(dictEq));
    }
};
var ord1Multiplicative = {
    compare1: function (dictOrd) {
        return Data_Ord.compare(ordMultiplicative(dictOrd));
    },
    Eq10: function () {
        return eq1Multiplicative;
    }
};
var boundedMultiplicative = function (dictBounded) {
    return dictBounded;
};
var applyMultiplicative = {
    apply: function (v) {
        return function (v1) {
            return v(v1);
        };
    },
    Functor0: function () {
        return functorMultiplicative;
    }
};
var bindMultiplicative = {
    bind: function (v) {
        return function (f) {
            return f(v);
        };
    },
    Apply0: function () {
        return applyMultiplicative;
    }
};
var applicativeMultiplicative = {
    pure: Multiplicative,
    Apply0: function () {
        return applyMultiplicative;
    }
};
var monadMultiplicative = {
    Applicative0: function () {
        return applicativeMultiplicative;
    },
    Bind1: function () {
        return bindMultiplicative;
    }
};
export {
    Multiplicative,
    eqMultiplicative,
    eq1Multiplicative,
    ordMultiplicative,
    ord1Multiplicative,
    boundedMultiplicative,
    showMultiplicative,
    functorMultiplicative,
    applyMultiplicative,
    applicativeMultiplicative,
    bindMultiplicative,
    monadMultiplicative,
    semigroupMultiplicative,
    monoidMultiplicative
};
