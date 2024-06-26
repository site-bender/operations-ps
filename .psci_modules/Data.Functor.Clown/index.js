import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Apply from "../Control.Apply/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Functor_Contravariant from "../Data.Functor.Contravariant/index.js";
import * as Data_Show from "../Data.Show/index.js";
var Clown = function (x) {
    return x;
};
var showClown = function (dictShow) {
    var show = Data_Show.show(dictShow);
    return {
        show: function (v) {
            return "(Clown " + (show(v) + ")");
        }
    };
};
var profunctorClown = function (dictContravariant) {
    var cmap = Data_Functor_Contravariant.cmap(dictContravariant);
    return {
        dimap: function (f) {
            return function (v) {
                return function (v1) {
                    return cmap(f)(v1);
                };
            };
        }
    };
};
var ordClown = function (dictOrd) {
    return dictOrd;
};
var newtypeClown = {
    Coercible0: function () {
        return undefined;
    }
};
var hoistClown = function (f) {
    return function (v) {
        return f(v);
    };
};
var functorClown = {
    map: function (v) {
        return function (v1) {
            return v1;
        };
    }
};
var eqClown = function (dictEq) {
    return dictEq;
};
var bifunctorClown = function (dictFunctor) {
    var map = Data_Functor.map(dictFunctor);
    return {
        bimap: function (f) {
            return function (v) {
                return function (v1) {
                    return map(f)(v1);
                };
            };
        }
    };
};
var biapplyClown = function (dictApply) {
    var apply = Control_Apply.apply(dictApply);
    var bifunctorClown1 = bifunctorClown(dictApply.Functor0());
    return {
        biapply: function (v) {
            return function (v1) {
                return apply(v)(v1);
            };
        },
        Bifunctor0: function () {
            return bifunctorClown1;
        }
    };
};
var biapplicativeClown = function (dictApplicative) {
    var pure = Control_Applicative.pure(dictApplicative);
    var biapplyClown1 = biapplyClown(dictApplicative.Apply0());
    return {
        bipure: function (a) {
            return function (v) {
                return pure(a);
            };
        },
        Biapply0: function () {
            return biapplyClown1;
        }
    };
};
export {
    Clown,
    hoistClown,
    newtypeClown,
    eqClown,
    ordClown,
    showClown,
    functorClown,
    bifunctorClown,
    biapplyClown,
    biapplicativeClown,
    profunctorClown
};
