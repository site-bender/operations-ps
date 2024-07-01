// Generated by purs version 0.15.15
import * as Control_Alternative from "../Control.Alternative/index.js";
import * as Control_Category from "../Control.Category/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_HeytingAlgebra from "../Data.HeytingAlgebra/index.js";
import * as Data_Lens_Internal_Market from "../Data.Lens.Internal.Market/index.js";
import * as Data_Lens_Internal_Tagged from "../Data.Lens.Internal.Tagged/index.js";
import * as Data_Lens_Types from "../Data.Lens.Types/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Newtype from "../Data.Newtype/index.js";
import * as Data_Profunctor from "../Data.Profunctor/index.js";
import * as Data_Profunctor_Choice from "../Data.Profunctor.Choice/index.js";
import * as Data_Traversable from "../Data.Traversable/index.js";
var identity = /* #__PURE__ */ Control_Category.identity(Control_Category.categoryFn);
var guard = /* #__PURE__ */ Control_Alternative.guard(Data_Maybe.alternativeMaybe);
var withPrism = function (l) {
    return function (f) {
        var v = l(new Data_Lens_Internal_Market.Market(identity, Data_Either.Right.create));
        return f(v.value0)(v.value1);
    };
};
var review = /* #__PURE__ */ Data_Newtype.under()()(Data_Lens_Internal_Tagged.Tagged);
var prism = function (to) {
    return function (fro) {
        return function (dictChoice) {
            var Profunctor0 = dictChoice.Profunctor0();
            var dimap = Data_Profunctor.dimap(Profunctor0);
            var right = Data_Profunctor_Choice.right(dictChoice);
            var rmap = Data_Profunctor.rmap(Profunctor0);
            return function (pab) {
                return dimap(fro)(Data_Either.either(identity)(identity))(right(rmap(to)(pab)));
            };
        };
    };
};
var prism$prime = function (to) {
    return function (fro) {
        return function (dictChoice) {
            return prism(to)(function (s) {
                return Data_Maybe.maybe(new Data_Either.Left(s))(Data_Either.Right.create)(fro(s));
            })(dictChoice);
        };
    };
};
var nearly = function (x) {
    return function (f) {
        return function (dictChoice) {
            return prism$prime(Data_Function["const"](x))(function ($38) {
                return guard(f($38));
            })(dictChoice);
        };
    };
};
var only = function (dictEq) {
    var eq = Data_Eq.eq(dictEq);
    return function (x) {
        return function (dictChoice) {
            return nearly(x)(function (v) {
                return eq(v)(x);
            })(dictChoice);
        };
    };
};
var matching = function (l) {
    return withPrism(l)(function (v) {
        return function (f) {
            return f;
        };
    });
};
var is = function (dictHeytingAlgebra) {
    var ff = Data_HeytingAlgebra.ff(dictHeytingAlgebra);
    var tt = Data_HeytingAlgebra.tt(dictHeytingAlgebra);
    return function (l) {
        var $39 = Data_Either.either(Data_Function["const"](ff))(Data_Function["const"](tt));
        var $40 = matching(l);
        return function ($41) {
            return $39($40($41));
        };
    };
};
var isn$primet = function (dictHeytingAlgebra) {
    var not = Data_HeytingAlgebra.not(dictHeytingAlgebra);
    var is1 = is(dictHeytingAlgebra);
    return function (l) {
        var $42 = is1(l);
        return function ($43) {
            return not($42($43));
        };
    };
};
var clonePrism = function (l) {
    return function (dictChoice) {
        return withPrism(l)(function (x) {
            return function (y) {
                return function (p) {
                    return prism(x)(y)(dictChoice)(p);
                };
            };
        });
    };
};
var below = function (dictTraversable) {
    var map = Data_Functor.map(dictTraversable.Functor0());
    var traverse = Data_Traversable.traverse(dictTraversable)(Data_Either.applicativeEither);
    return function (k) {
        return function (dictChoice) {
            return withPrism(k)(function (bt) {
                return function (seta) {
                    return prism(map(bt))(function (s) {
                        var v = traverse(seta)(s);
                        if (v instanceof Data_Either.Left) {
                            return new Data_Either.Left(s);
                        };
                        if (v instanceof Data_Either.Right) {
                            return new Data_Either.Right(v.value0);
                        };
                        throw new Error("Failed pattern match at Data.Lens.Prism (line 199, column 7 - line 201, column 27): " + [ v.constructor.name ]);
                    })(dictChoice);
                };
            });
        };
    };
};
export {
    prism$prime,
    prism,
    only,
    nearly,
    review,
    is,
    isn$primet,
    matching,
    clonePrism,
    withPrism,
    below
};
