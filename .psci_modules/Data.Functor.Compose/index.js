import * as Control_Alt from "../Control.Alt/index.js";
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Apply from "../Control.Apply/index.js";
import * as Control_Plus from "../Control.Plus/index.js";
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Functor_App from "../Data.Functor.App/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Show from "../Data.Show/index.js";
var Compose = function (x) {
    return x;
};
var showCompose = function (dictShow) {
    var show = Data_Show.show(dictShow);
    return {
        show: function (v) {
            return "(Compose " + (show(v) + ")");
        }
    };
};
var newtypeCompose = {
    Coercible0: function () {
        return undefined;
    }
};
var functorCompose = function (dictFunctor) {
    var map = Data_Functor.map(dictFunctor);
    return function (dictFunctor1) {
        var map1 = Data_Functor.map(dictFunctor1);
        return {
            map: function (f) {
                return function (v) {
                    return map(map1(f))(v);
                };
            }
        };
    };
};
var eqCompose = function (dictEq1) {
    var eq1 = Data_Eq.eq1(dictEq1);
    return function (dictEq11) {
        var eqApp = Data_Functor_App.eqApp(dictEq11);
        return function (dictEq) {
            var eq11 = eq1(eqApp(dictEq));
            return {
                eq: function (v) {
                    return function (v1) {
                        return eq11(Data_Functor_App.hoistLiftApp(v))(Data_Functor_App.hoistLiftApp(v1));
                    };
                }
            };
        };
    };
};
var ordCompose = function (dictOrd1) {
    var compare1 = Data_Ord.compare1(dictOrd1);
    var eqCompose1 = eqCompose(dictOrd1.Eq10());
    return function (dictOrd11) {
        var ordApp = Data_Functor_App.ordApp(dictOrd11);
        var eqCompose2 = eqCompose1(dictOrd11.Eq10());
        return function (dictOrd) {
            var compare11 = compare1(ordApp(dictOrd));
            var eqCompose3 = eqCompose2(dictOrd.Eq0());
            return {
                compare: function (v) {
                    return function (v1) {
                        return compare11(Data_Functor_App.hoistLiftApp(v))(Data_Functor_App.hoistLiftApp(v1));
                    };
                },
                Eq0: function () {
                    return eqCompose3;
                }
            };
        };
    };
};
var eq1Compose = function (dictEq1) {
    var eqCompose1 = eqCompose(dictEq1);
    return function (dictEq11) {
        var eqCompose2 = eqCompose1(dictEq11);
        return {
            eq1: function (dictEq) {
                return Data_Eq.eq(eqCompose2(dictEq));
            }
        };
    };
};
var ord1Compose = function (dictOrd1) {
    var ordCompose1 = ordCompose(dictOrd1);
    var eq1Compose1 = eq1Compose(dictOrd1.Eq10());
    return function (dictOrd11) {
        var ordCompose2 = ordCompose1(dictOrd11);
        var eq1Compose2 = eq1Compose1(dictOrd11.Eq10());
        return {
            compare1: function (dictOrd) {
                return Data_Ord.compare(ordCompose2(dictOrd));
            },
            Eq10: function () {
                return eq1Compose2;
            }
        };
    };
};
var bihoistCompose = function (dictFunctor) {
    var map = Data_Functor.map(dictFunctor);
    return function (natF) {
        return function (natG) {
            return function (v) {
                return natF(map(natG)(v));
            };
        };
    };
};
var applyCompose = function (dictApply) {
    var apply = Control_Apply.apply(dictApply);
    var Functor0 = dictApply.Functor0();
    var map = Data_Functor.map(Functor0);
    var functorCompose1 = functorCompose(Functor0);
    return function (dictApply1) {
        var apply1 = Control_Apply.apply(dictApply1);
        var functorCompose2 = functorCompose1(dictApply1.Functor0());
        return {
            apply: function (v) {
                return function (v1) {
                    return apply(map(apply1)(v))(v1);
                };
            },
            Functor0: function () {
                return functorCompose2;
            }
        };
    };
};
var applicativeCompose = function (dictApplicative) {
    var pure = Control_Applicative.pure(dictApplicative);
    var applyCompose1 = applyCompose(dictApplicative.Apply0());
    return function (dictApplicative1) {
        var applyCompose2 = applyCompose1(dictApplicative1.Apply0());
        return {
            pure: (function () {
                var $112 = Control_Applicative.pure(dictApplicative1);
                return function ($113) {
                    return Compose(pure($112($113)));
                };
            })(),
            Apply0: function () {
                return applyCompose2;
            }
        };
    };
};
var altCompose = function (dictAlt) {
    var alt = Control_Alt.alt(dictAlt);
    var functorCompose1 = functorCompose(dictAlt.Functor0());
    return function (dictFunctor) {
        var functorCompose2 = functorCompose1(dictFunctor);
        return {
            alt: function (v) {
                return function (v1) {
                    return alt(v)(v1);
                };
            },
            Functor0: function () {
                return functorCompose2;
            }
        };
    };
};
var plusCompose = function (dictPlus) {
    var empty = Control_Plus.empty(dictPlus);
    var altCompose1 = altCompose(dictPlus.Alt0());
    return function (dictFunctor) {
        var altCompose2 = altCompose1(dictFunctor);
        return {
            empty: empty,
            Alt0: function () {
                return altCompose2;
            }
        };
    };
};
var alternativeCompose = function (dictAlternative) {
    var applicativeCompose1 = applicativeCompose(dictAlternative.Applicative0());
    var plusCompose1 = plusCompose(dictAlternative.Plus1());
    return function (dictApplicative) {
        var applicativeCompose2 = applicativeCompose1(dictApplicative);
        var plusCompose2 = plusCompose1((dictApplicative.Apply0()).Functor0());
        return {
            Applicative0: function () {
                return applicativeCompose2;
            },
            Plus1: function () {
                return plusCompose2;
            }
        };
    };
};
export {
    Compose,
    bihoistCompose,
    newtypeCompose,
    eqCompose,
    eq1Compose,
    ordCompose,
    ord1Compose,
    showCompose,
    functorCompose,
    applyCompose,
    applicativeCompose,
    altCompose,
    plusCompose,
    alternativeCompose
};
