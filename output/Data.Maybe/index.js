// Generated by purs version 0.15.15
import * as Control_Alt from "../Control.Alt/index.js";
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Apply from "../Control.Apply/index.js";
import * as Control_Category from "../Control.Category/index.js";
import * as Data_Bounded from "../Data.Bounded/index.js";
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Functor_Invariant from "../Data.Functor.Invariant/index.js";
import * as Data_Generic_Rep from "../Data.Generic.Rep/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Ordering from "../Data.Ordering/index.js";
import * as Data_Semigroup from "../Data.Semigroup/index.js";
import * as Data_Semiring from "../Data.Semiring/index.js";
import * as Data_Show from "../Data.Show/index.js";
import * as Data_Unit from "../Data.Unit/index.js";
var identity = /* #__PURE__ */ Control_Category.identity(Control_Category.categoryFn);
var Nothing = /* #__PURE__ */ (function () {
    function Nothing() {

    };
    Nothing.value = new Nothing();
    return Nothing;
})();
var Just = /* #__PURE__ */ (function () {
    function Just(value0) {
        this.value0 = value0;
    };
    Just.create = function (value0) {
        return new Just(value0);
    };
    return Just;
})();
var showMaybe = function (dictShow) {
    var show = Data_Show.show(dictShow);
    return {
        show: function (v) {
            if (v instanceof Just) {
                return "(Just " + (show(v.value0) + ")");
            };
            if (v instanceof Nothing) {
                return "Nothing";
            };
            throw new Error("Failed pattern match at Data.Maybe (line 223, column 1 - line 225, column 28): " + [ v.constructor.name ]);
        }
    };
};
var semigroupMaybe = function (dictSemigroup) {
    var append1 = Data_Semigroup.append(dictSemigroup);
    return {
        append: function (v) {
            return function (v1) {
                if (v instanceof Nothing) {
                    return v1;
                };
                if (v1 instanceof Nothing) {
                    return v;
                };
                if (v instanceof Just && v1 instanceof Just) {
                    return new Just(append1(v.value0)(v1.value0));
                };
                throw new Error("Failed pattern match at Data.Maybe (line 182, column 1 - line 185, column 43): " + [ v.constructor.name, v1.constructor.name ]);
            };
        }
    };
};
var optional = function (dictAlt) {
    var alt = Control_Alt.alt(dictAlt);
    var map1 = Data_Functor.map(dictAlt.Functor0());
    return function (dictApplicative) {
        var pure = Control_Applicative.pure(dictApplicative);
        return function (a) {
            return alt(map1(Just.create)(a))(pure(Nothing.value));
        };
    };
};
var monoidMaybe = function (dictSemigroup) {
    var semigroupMaybe1 = semigroupMaybe(dictSemigroup);
    return {
        mempty: Nothing.value,
        Semigroup0: function () {
            return semigroupMaybe1;
        }
    };
};
var maybe$prime = function (v) {
    return function (v1) {
        return function (v2) {
            if (v2 instanceof Nothing) {
                return v(Data_Unit.unit);
            };
            if (v2 instanceof Just) {
                return v1(v2.value0);
            };
            throw new Error("Failed pattern match at Data.Maybe (line 250, column 1 - line 250, column 62): " + [ v.constructor.name, v1.constructor.name, v2.constructor.name ]);
        };
    };
};
var maybe = function (v) {
    return function (v1) {
        return function (v2) {
            if (v2 instanceof Nothing) {
                return v;
            };
            if (v2 instanceof Just) {
                return v1(v2.value0);
            };
            throw new Error("Failed pattern match at Data.Maybe (line 237, column 1 - line 237, column 51): " + [ v.constructor.name, v1.constructor.name, v2.constructor.name ]);
        };
    };
};
var isNothing = /* #__PURE__ */ maybe(true)(/* #__PURE__ */ Data_Function["const"](false));
var isJust = /* #__PURE__ */ maybe(false)(/* #__PURE__ */ Data_Function["const"](true));
var genericMaybe = {
    to: function (x) {
        if (x instanceof Data_Generic_Rep.Inl) {
            return Nothing.value;
        };
        if (x instanceof Data_Generic_Rep.Inr) {
            return new Just(x.value0);
        };
        throw new Error("Failed pattern match at Data.Maybe (line 227, column 1 - line 227, column 52): " + [ x.constructor.name ]);
    },
    from: function (x) {
        if (x instanceof Nothing) {
            return new Data_Generic_Rep.Inl(Data_Generic_Rep.NoArguments.value);
        };
        if (x instanceof Just) {
            return new Data_Generic_Rep.Inr(x.value0);
        };
        throw new Error("Failed pattern match at Data.Maybe (line 227, column 1 - line 227, column 52): " + [ x.constructor.name ]);
    }
};
var functorMaybe = {
    map: function (v) {
        return function (v1) {
            if (v1 instanceof Just) {
                return new Just(v(v1.value0));
            };
            return Nothing.value;
        };
    }
};
var map = /* #__PURE__ */ Data_Functor.map(functorMaybe);
var invariantMaybe = {
    imap: /* #__PURE__ */ Data_Functor_Invariant.imapF(functorMaybe)
};
var fromMaybe$prime = function (a) {
    return maybe$prime(a)(identity);
};
var fromMaybe = function (a) {
    return maybe(a)(identity);
};
var fromJust = function () {
    return function (v) {
        if (v instanceof Just) {
            return v.value0;
        };
        throw new Error("Failed pattern match at Data.Maybe (line 288, column 1 - line 288, column 46): " + [ v.constructor.name ]);
    };
};
var extendMaybe = {
    extend: function (v) {
        return function (v1) {
            if (v1 instanceof Nothing) {
                return Nothing.value;
            };
            return new Just(v(v1));
        };
    },
    Functor0: function () {
        return functorMaybe;
    }
};
var eqMaybe = function (dictEq) {
    var eq = Data_Eq.eq(dictEq);
    return {
        eq: function (x) {
            return function (y) {
                if (x instanceof Nothing && y instanceof Nothing) {
                    return true;
                };
                if (x instanceof Just && y instanceof Just) {
                    return eq(x.value0)(y.value0);
                };
                return false;
            };
        }
    };
};
var ordMaybe = function (dictOrd) {
    var compare = Data_Ord.compare(dictOrd);
    var eqMaybe1 = eqMaybe(dictOrd.Eq0());
    return {
        compare: function (x) {
            return function (y) {
                if (x instanceof Nothing && y instanceof Nothing) {
                    return Data_Ordering.EQ.value;
                };
                if (x instanceof Nothing) {
                    return Data_Ordering.LT.value;
                };
                if (y instanceof Nothing) {
                    return Data_Ordering.GT.value;
                };
                if (x instanceof Just && y instanceof Just) {
                    return compare(x.value0)(y.value0);
                };
                throw new Error("Failed pattern match at Data.Maybe (line 0, column 0 - line 0, column 0): " + [ x.constructor.name, y.constructor.name ]);
            };
        },
        Eq0: function () {
            return eqMaybe1;
        }
    };
};
var eq1Maybe = {
    eq1: function (dictEq) {
        return Data_Eq.eq(eqMaybe(dictEq));
    }
};
var ord1Maybe = {
    compare1: function (dictOrd) {
        return Data_Ord.compare(ordMaybe(dictOrd));
    },
    Eq10: function () {
        return eq1Maybe;
    }
};
var boundedMaybe = function (dictBounded) {
    var ordMaybe1 = ordMaybe(dictBounded.Ord0());
    return {
        top: new Just(Data_Bounded.top(dictBounded)),
        bottom: Nothing.value,
        Ord0: function () {
            return ordMaybe1;
        }
    };
};
var applyMaybe = {
    apply: function (v) {
        return function (v1) {
            if (v instanceof Just) {
                return map(v.value0)(v1);
            };
            if (v instanceof Nothing) {
                return Nothing.value;
            };
            throw new Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): " + [ v.constructor.name, v1.constructor.name ]);
        };
    },
    Functor0: function () {
        return functorMaybe;
    }
};
var apply = /* #__PURE__ */ Control_Apply.apply(applyMaybe);
var bindMaybe = {
    bind: function (v) {
        return function (v1) {
            if (v instanceof Just) {
                return v1(v.value0);
            };
            if (v instanceof Nothing) {
                return Nothing.value;
            };
            throw new Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): " + [ v.constructor.name, v1.constructor.name ]);
        };
    },
    Apply0: function () {
        return applyMaybe;
    }
};
var semiringMaybe = function (dictSemiring) {
    var add = Data_Semiring.add(dictSemiring);
    var mul = Data_Semiring.mul(dictSemiring);
    return {
        zero: Nothing.value,
        one: new Just(Data_Semiring.one(dictSemiring)),
        add: function (v) {
            return function (v1) {
                if (v instanceof Nothing) {
                    return v1;
                };
                if (v1 instanceof Nothing) {
                    return v;
                };
                if (v instanceof Just && v1 instanceof Just) {
                    return new Just(add(v.value0)(v1.value0));
                };
                throw new Error("Failed pattern match at Data.Maybe (line 190, column 1 - line 198, column 28): " + [ v.constructor.name, v1.constructor.name ]);
            };
        },
        mul: function (x) {
            return function (y) {
                return apply(map(mul)(x))(y);
            };
        }
    };
};
var applicativeMaybe = /* #__PURE__ */ (function () {
    return {
        pure: Just.create,
        Apply0: function () {
            return applyMaybe;
        }
    };
})();
var monadMaybe = {
    Applicative0: function () {
        return applicativeMaybe;
    },
    Bind1: function () {
        return bindMaybe;
    }
};
var altMaybe = {
    alt: function (v) {
        return function (v1) {
            if (v instanceof Nothing) {
                return v1;
            };
            return v;
        };
    },
    Functor0: function () {
        return functorMaybe;
    }
};
var plusMaybe = /* #__PURE__ */ (function () {
    return {
        empty: Nothing.value,
        Alt0: function () {
            return altMaybe;
        }
    };
})();
var alternativeMaybe = {
    Applicative0: function () {
        return applicativeMaybe;
    },
    Plus1: function () {
        return plusMaybe;
    }
};
export {
    Nothing,
    Just,
    maybe,
    maybe$prime,
    fromMaybe,
    fromMaybe$prime,
    isJust,
    isNothing,
    fromJust,
    optional,
    functorMaybe,
    applyMaybe,
    applicativeMaybe,
    altMaybe,
    plusMaybe,
    alternativeMaybe,
    bindMaybe,
    monadMaybe,
    extendMaybe,
    invariantMaybe,
    semigroupMaybe,
    monoidMaybe,
    semiringMaybe,
    eqMaybe,
    eq1Maybe,
    ordMaybe,
    ord1Maybe,
    boundedMaybe,
    showMaybe,
    genericMaybe
};
//# sourceMappingURL=index.js.map
