// Generated by purs version 0.15.15
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Apply from "../Control.Apply/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Newtype from "../Data.Newtype/index.js";
import * as Data_Show from "../Data.Show/index.js";
var un = /* #__PURE__ */ Data_Newtype.un();
var Joker = function (x) {
    return x;
};
var showJoker = function (dictShow) {
    var show = Data_Show.show(dictShow);
    return {
        show: function (v) {
            return "(Joker " + (show(v) + ")");
        }
    };
};
var profunctorJoker = function (dictFunctor) {
    var map = Data_Functor.map(dictFunctor);
    return {
        dimap: function (v) {
            return function (g) {
                return function (v1) {
                    return map(g)(v1);
                };
            };
        }
    };
};
var ordJoker = function (dictOrd) {
    return dictOrd;
};
var newtypeJoker = {
    Coercible0: function () {
        return undefined;
    }
};
var hoistJoker = function (f) {
    return function (v) {
        return f(v);
    };
};
var functorJoker = function (dictFunctor) {
    var map = Data_Functor.map(dictFunctor);
    return {
        map: function (f) {
            return function (v) {
                return map(f)(v);
            };
        }
    };
};
var eqJoker = function (dictEq) {
    return dictEq;
};
var choiceJoker = function (dictFunctor) {
    var map = Data_Functor.map(dictFunctor);
    var profunctorJoker1 = profunctorJoker(dictFunctor);
    return {
        left: function (v) {
            return map(Data_Either.Left.create)(v);
        },
        right: function (v) {
            return map(Data_Either.Right.create)(v);
        },
        Profunctor0: function () {
            return profunctorJoker1;
        }
    };
};
var bifunctorJoker = function (dictFunctor) {
    var map = Data_Functor.map(dictFunctor);
    return {
        bimap: function (v) {
            return function (g) {
                return function (v1) {
                    return map(g)(v1);
                };
            };
        }
    };
};
var biapplyJoker = function (dictApply) {
    var apply = Control_Apply.apply(dictApply);
    var bifunctorJoker1 = bifunctorJoker(dictApply.Functor0());
    return {
        biapply: function (v) {
            return function (v1) {
                return apply(v)(v1);
            };
        },
        Bifunctor0: function () {
            return bifunctorJoker1;
        }
    };
};
var biapplicativeJoker = function (dictApplicative) {
    var pure = Control_Applicative.pure(dictApplicative);
    var biapplyJoker1 = biapplyJoker(dictApplicative.Apply0());
    return {
        bipure: function (v) {
            return function (b) {
                return pure(b);
            };
        },
        Biapply0: function () {
            return biapplyJoker1;
        }
    };
};
var applyJoker = function (dictApply) {
    var apply = Control_Apply.apply(dictApply);
    var functorJoker1 = functorJoker(dictApply.Functor0());
    return {
        apply: function (v) {
            return function (v1) {
                return apply(v)(v1);
            };
        },
        Functor0: function () {
            return functorJoker1;
        }
    };
};
var bindJoker = function (dictBind) {
    var bind = Control_Bind.bind(dictBind);
    var applyJoker1 = applyJoker(dictBind.Apply0());
    return {
        bind: function (v) {
            return function (amb) {
                return bind(v)((function () {
                    var $76 = un(Joker);
                    return function ($77) {
                        return $76(amb($77));
                    };
                })());
            };
        },
        Apply0: function () {
            return applyJoker1;
        }
    };
};
var applicativeJoker = function (dictApplicative) {
    var applyJoker1 = applyJoker(dictApplicative.Apply0());
    return {
        pure: (function () {
            var $78 = Control_Applicative.pure(dictApplicative);
            return function ($79) {
                return Joker($78($79));
            };
        })(),
        Apply0: function () {
            return applyJoker1;
        }
    };
};
var monadJoker = function (dictMonad) {
    var applicativeJoker1 = applicativeJoker(dictMonad.Applicative0());
    var bindJoker1 = bindJoker(dictMonad.Bind1());
    return {
        Applicative0: function () {
            return applicativeJoker1;
        },
        Bind1: function () {
            return bindJoker1;
        }
    };
};
export {
    Joker,
    hoistJoker,
    newtypeJoker,
    eqJoker,
    ordJoker,
    showJoker,
    functorJoker,
    applyJoker,
    applicativeJoker,
    bindJoker,
    monadJoker,
    bifunctorJoker,
    biapplyJoker,
    biapplicativeJoker,
    profunctorJoker,
    choiceJoker
};
//# sourceMappingURL=index.js.map
