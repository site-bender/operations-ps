// Generated by purs version 0.15.15
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Functor_Invariant from "../Data.Functor.Invariant/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Show from "../Data.Show/index.js";
var Identity = function (x) {
    return x;
};
var showIdentity = function (dictShow) {
    var show = Data_Show.show(dictShow);
    return {
        show: function (v) {
            return "(Identity " + (show(v) + ")");
        }
    };
};
var semiringIdentity = function (dictSemiring) {
    return dictSemiring;
};
var semigroupIdentity = function (dictSemigroup) {
    return dictSemigroup;
};
var ringIdentity = function (dictRing) {
    return dictRing;
};
var ordIdentity = function (dictOrd) {
    return dictOrd;
};
var newtypeIdentity = {
    Coercible0: function () {
        return undefined;
    }
};
var monoidIdentity = function (dictMonoid) {
    return dictMonoid;
};
var lazyIdentity = function (dictLazy) {
    return dictLazy;
};
var heytingAlgebraIdentity = function (dictHeytingAlgebra) {
    return dictHeytingAlgebra;
};
var functorIdentity = {
    map: function (f) {
        return function (m) {
            return f(m);
        };
    }
};
var invariantIdentity = {
    imap: /* #__PURE__ */ Data_Functor_Invariant.imapF(functorIdentity)
};
var extendIdentity = {
    extend: function (f) {
        return function (m) {
            return f(m);
        };
    },
    Functor0: function () {
        return functorIdentity;
    }
};
var euclideanRingIdentity = function (dictEuclideanRing) {
    return dictEuclideanRing;
};
var eqIdentity = function (dictEq) {
    return dictEq;
};
var eq1Identity = {
    eq1: function (dictEq) {
        return Data_Eq.eq(eqIdentity(dictEq));
    }
};
var ord1Identity = {
    compare1: function (dictOrd) {
        return Data_Ord.compare(ordIdentity(dictOrd));
    },
    Eq10: function () {
        return eq1Identity;
    }
};
var comonadIdentity = {
    extract: function (v) {
        return v;
    },
    Extend0: function () {
        return extendIdentity;
    }
};
var commutativeRingIdentity = function (dictCommutativeRing) {
    return dictCommutativeRing;
};
var boundedIdentity = function (dictBounded) {
    return dictBounded;
};
var booleanAlgebraIdentity = function (dictBooleanAlgebra) {
    return dictBooleanAlgebra;
};
var applyIdentity = {
    apply: function (v) {
        return function (v1) {
            return v(v1);
        };
    },
    Functor0: function () {
        return functorIdentity;
    }
};
var bindIdentity = {
    bind: function (v) {
        return function (f) {
            return f(v);
        };
    },
    Apply0: function () {
        return applyIdentity;
    }
};
var applicativeIdentity = {
    pure: Identity,
    Apply0: function () {
        return applyIdentity;
    }
};
var monadIdentity = {
    Applicative0: function () {
        return applicativeIdentity;
    },
    Bind1: function () {
        return bindIdentity;
    }
};
var altIdentity = {
    alt: function (x) {
        return function (v) {
            return x;
        };
    },
    Functor0: function () {
        return functorIdentity;
    }
};
export {
    Identity,
    newtypeIdentity,
    eqIdentity,
    ordIdentity,
    boundedIdentity,
    heytingAlgebraIdentity,
    booleanAlgebraIdentity,
    semigroupIdentity,
    monoidIdentity,
    semiringIdentity,
    euclideanRingIdentity,
    ringIdentity,
    commutativeRingIdentity,
    lazyIdentity,
    showIdentity,
    eq1Identity,
    ord1Identity,
    functorIdentity,
    invariantIdentity,
    altIdentity,
    applyIdentity,
    applicativeIdentity,
    bindIdentity,
    monadIdentity,
    extendIdentity,
    comonadIdentity
};
//# sourceMappingURL=index.js.map
