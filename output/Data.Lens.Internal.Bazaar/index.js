// Generated by purs version 0.15.15
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Data_Bitraversable from "../Data.Bitraversable/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Traversable from "../Data.Traversable/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
var bitraverse = /* #__PURE__ */ Data_Bitraversable.bitraverse(Data_Bitraversable.bitraversableEither);
var traverse = /* #__PURE__ */ Data_Traversable.traverse(Data_Traversable.traversableEither);
var Bazaar = function (x) {
    return x;
};
var runBazaar = function (v) {
    return function (dictApplicative) {
        return v(dictApplicative);
    };
};
var profunctorBazaar = {
    dimap: function (f) {
        return function (g) {
            return function (v) {
                return function (dictApplicative) {
                    var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
                    var b1 = v(dictApplicative);
                    return function (pafb) {
                        return function (s) {
                            return map(g)(b1(pafb)(f(s)));
                        };
                    };
                };
            };
        };
    }
};
var strongBazaar = {
    first: function (v) {
        return function (dictApplicative) {
            var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
            var b1 = v(dictApplicative);
            return function (pafb) {
                return function (v1) {
                    return map(Data_Function.flip(Data_Tuple.Tuple.create)(v1.value1))(b1(pafb)(v1.value0));
                };
            };
        };
    },
    second: function (v) {
        return function (dictApplicative) {
            var map = Data_Functor.map((dictApplicative.Apply0()).Functor0());
            var b1 = v(dictApplicative);
            return function (pafb) {
                return function (v1) {
                    return map(Data_Tuple.Tuple.create(v1.value0))(b1(pafb)(v1.value1));
                };
            };
        };
    },
    Profunctor0: function () {
        return profunctorBazaar;
    }
};
var choiceBazaar = {
    left: function (v) {
        return function (dictApplicative) {
            var bitraverse1 = bitraverse(dictApplicative);
            var b1 = v(dictApplicative);
            var pure = Control_Applicative.pure(dictApplicative);
            return function (pafb) {
                return function (e) {
                    return bitraverse1(b1(pafb))(pure)(e);
                };
            };
        };
    },
    right: function (v) {
        return function (dictApplicative) {
            var traverse1 = traverse(dictApplicative);
            var b1 = v(dictApplicative);
            return function (pafb) {
                return function (e) {
                    return traverse1(b1(pafb))(e);
                };
            };
        };
    },
    Profunctor0: function () {
        return profunctorBazaar;
    }
};
var wanderBazaar = {
    wander: function (w) {
        return function (v) {
            return function (dictApplicative) {
                var w2 = w(dictApplicative);
                var f1 = v(dictApplicative);
                return function (pafb) {
                    return function (s) {
                        return w2(f1(pafb))(s);
                    };
                };
            };
        };
    },
    Strong0: function () {
        return strongBazaar;
    },
    Choice1: function () {
        return choiceBazaar;
    }
};
export {
    Bazaar,
    runBazaar,
    profunctorBazaar,
    strongBazaar,
    choiceBazaar,
    wanderBazaar
};
//# sourceMappingURL=index.js.map
