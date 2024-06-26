import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Apply from "../Control.Apply/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Control_Category from "../Control.Category/index.js";
import * as Control_Comonad from "../Control.Comonad/index.js";
import * as Control_Extend from "../Control.Extend/index.js";
import * as Control_Semigroupoid from "../Control.Semigroupoid/index.js";
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
var identity = /* #__PURE__ */ Control_Category.identity(Control_Category.categoryFn);
var map = /* #__PURE__ */ Data_Functor.map(Data_Functor.functorFn);
var compose = /* #__PURE__ */ Control_Semigroupoid.compose(Control_Semigroupoid.semigroupoidFn);

// | The Yoneda `Functor`
// |
// | `Yoneda f` is a `Functor` for any type constructor `f`.
var Yoneda = function (x) {
    return x;
};

// | Run a computation of type `Yoneda f a`.
var runYoneda = function (v) {
    return function (k) {
        return v(k);
    };
};

// | Lower a value of type `Yoneda f a` to the type constructor `f`.
var lowerYoneda = function (v) {
    return v(identity);
};

// | Lift a value described by the `Functor` `f` to the `Functor` `Yoneda f`.
var liftYoneda = function (dictFunctor) {
    var map1 = Data_Functor.map(dictFunctor);
    return function (m) {
        return function (k) {
            return map1(k)(m);
        };
    };
};
var monadTransYoneda = {
    lift: function (dictMonad) {
        return liftYoneda(((dictMonad.Bind1()).Apply0()).Functor0());
    }
};

// | Use a natural transformation to change the generating type constructor of a
// | `Yoneda`.
var hoistYoneda = function (nat) {
    return function (v) {
        return map(nat)(v);
    };
};
var functorYoneda = {
    map: function (f) {
        return function (m) {
            return function (k) {
                return runYoneda(m)(function ($77) {
                    return k(f($77));
                });
            };
        };
    }
};
var extendYoneda = function (dictExtend) {
    var extend = Control_Extend.extend(dictExtend);
    var liftYoneda1 = liftYoneda(dictExtend.Functor0());
    return {
        extend: function (f) {
            return function (v) {
                return function (k) {
                    return extend(function ($78) {
                        return k(f(liftYoneda1($78)));
                    })(v(identity));
                };
            };
        },
        Functor0: function () {
            return functorYoneda;
        }
    };
};
var eqYoneda = function (dictEq1) {
    var eq1 = Data_Eq.eq1(dictEq1);
    return function (dictEq) {
        var eq11 = eq1(dictEq);
        return {
            eq: function (x) {
                return function (y) {
                    return eq11(lowerYoneda(x))(lowerYoneda(y));
                };
            }
        };
    };
};
var ordYoneda = function (dictOrd1) {
    var compare1 = Data_Ord.compare1(dictOrd1);
    var eqYoneda1 = eqYoneda(dictOrd1.Eq10());
    return function (dictOrd) {
        var compare11 = compare1(dictOrd);
        var eqYoneda2 = eqYoneda1(dictOrd.Eq0());
        return {
            compare: function (x) {
                return function (y) {
                    return compare11(lowerYoneda(x))(lowerYoneda(y));
                };
            },
            Eq0: function () {
                return eqYoneda2;
            }
        };
    };
};
var eq1Yoneda = function (dictEq1) {
    var eqYoneda1 = eqYoneda(dictEq1);
    return {
        eq1: function (dictEq) {
            return Data_Eq.eq(eqYoneda1(dictEq));
        }
    };
};
var ord1Yoneda = function (dictOrd1) {
    var ordYoneda1 = ordYoneda(dictOrd1);
    var eq1Yoneda1 = eq1Yoneda(dictOrd1.Eq10());
    return {
        compare1: function (dictOrd) {
            return Data_Ord.compare(ordYoneda1(dictOrd));
        },
        Eq10: function () {
            return eq1Yoneda1;
        }
    };
};
var comonadYoneda = function (dictComonad) {
    var extendYoneda1 = extendYoneda(dictComonad.Extend0());
    return {
        extract: (function () {
            var $79 = Control_Comonad.extract(dictComonad);
            return function ($80) {
                return $79(lowerYoneda($80));
            };
        })(),
        Extend0: function () {
            return extendYoneda1;
        }
    };
};
var applyYoneda = function (dictApply) {
    var apply = Control_Apply.apply(dictApply);
    return {
        apply: function (v) {
            return function (v1) {
                return function (k) {
                    return apply(v(compose(k)))(v1(identity));
                };
            };
        },
        Functor0: function () {
            return functorYoneda;
        }
    };
};
var bindYoneda = function (dictBind) {
    var bind = Control_Bind.bind(dictBind);
    var applyYoneda1 = applyYoneda(dictBind.Apply0());
    return {
        bind: function (v) {
            return function (g) {
                return function (k) {
                    return bind(v(identity))(function (a) {
                        return runYoneda(g(a))(k);
                    });
                };
            };
        },
        Apply0: function () {
            return applyYoneda1;
        }
    };
};
var applicativeYoneda = function (dictApplicative) {
    var Apply0 = dictApplicative.Apply0();
    var applyYoneda1 = applyYoneda(Apply0);
    return {
        pure: (function () {
            var $81 = liftYoneda(Apply0.Functor0());
            var $82 = Control_Applicative.pure(dictApplicative);
            return function ($83) {
                return $81($82($83));
            };
        })(),
        Apply0: function () {
            return applyYoneda1;
        }
    };
};
var monadYoneda = function (dictMonad) {
    var applicativeYoneda1 = applicativeYoneda(dictMonad.Applicative0());
    var bindYoneda1 = bindYoneda(dictMonad.Bind1());
    return {
        Applicative0: function () {
            return applicativeYoneda1;
        },
        Bind1: function () {
            return bindYoneda1;
        }
    };
};
export {
    Yoneda,
    runYoneda,
    liftYoneda,
    lowerYoneda,
    hoistYoneda,
    eqYoneda,
    eq1Yoneda,
    ordYoneda,
    ord1Yoneda,
    functorYoneda,
    applyYoneda,
    applicativeYoneda,
    bindYoneda,
    monadYoneda,
    monadTransYoneda,
    extendYoneda,
    comonadYoneda
};
