// Generated by purs version 0.15.15
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Show from "../Data.Show/index.js";
var Last = function (x) {
    return x;
};
var showLast = function (dictShow) {
    var show = Data_Show.show(dictShow);
    return {
        show: function (v) {
            return "(Last " + (show(v) + ")");
        }
    };
};
var semigroupLast = {
    append: function (v) {
        return function (x) {
            return x;
        };
    }
};
var ordLast = function (dictOrd) {
    return dictOrd;
};
var functorLast = {
    map: function (f) {
        return function (m) {
            return f(m);
        };
    }
};
var eqLast = function (dictEq) {
    return dictEq;
};
var eq1Last = {
    eq1: function (dictEq) {
        return Data_Eq.eq(eqLast(dictEq));
    }
};
var ord1Last = {
    compare1: function (dictOrd) {
        return Data_Ord.compare(ordLast(dictOrd));
    },
    Eq10: function () {
        return eq1Last;
    }
};
var boundedLast = function (dictBounded) {
    return dictBounded;
};
var applyLast = {
    apply: function (v) {
        return function (v1) {
            return v(v1);
        };
    },
    Functor0: function () {
        return functorLast;
    }
};
var bindLast = {
    bind: function (v) {
        return function (f) {
            return f(v);
        };
    },
    Apply0: function () {
        return applyLast;
    }
};
var applicativeLast = {
    pure: Last,
    Apply0: function () {
        return applyLast;
    }
};
var monadLast = {
    Applicative0: function () {
        return applicativeLast;
    },
    Bind1: function () {
        return bindLast;
    }
};
export {
    Last,
    eqLast,
    eq1Last,
    ordLast,
    ord1Last,
    boundedLast,
    showLast,
    functorLast,
    applyLast,
    applicativeLast,
    bindLast,
    monadLast,
    semigroupLast
};
//# sourceMappingURL=index.js.map
