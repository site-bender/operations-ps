import * as Control_Alt from "../Control.Alt/index.js";
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Apply from "../Control.Apply/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Control_Category from "../Control.Category/index.js";
import * as Data_Bifunctor from "../Data.Bifunctor/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Functor_Invariant from "../Data.Functor.Invariant/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
var map = /* #__PURE__ */ Data_Functor.map(Data_Tuple.functorTuple);
var lmap = /* #__PURE__ */ Data_Bifunctor.lmap(Data_Bifunctor.bifunctorTuple);
var identity1 = /* #__PURE__ */ Control_Category.identity(Control_Category.categoryFn);
var Codec = /* #__PURE__ */ (function () {
    function Codec(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Codec.create = function (value0) {
        return function (value1) {
            return new Codec(value0, value1);
        };
    };
    return Codec;
})();
var profunctorCodec = function (dictFunctor) {
    var map1 = Data_Functor.map(dictFunctor);
    return {
        dimap: function (f) {
            return function (g) {
                return function (v) {
                    return new Codec((function () {
                        var $91 = map1(g);
                        return function ($92) {
                            return $91(v.value0($92));
                        };
                    })(), (function () {
                        var $93 = map(g);
                        return function ($94) {
                            return $93(v.value1(f($94)));
                        };
                    })());
                };
            };
        }
    };
};
var functorCodec = function (dictFunctor) {
    var map1 = Data_Functor.map(dictFunctor);
    return {
        map: function (f) {
            return function (v) {
                return new Codec((function () {
                    var $95 = map1(f);
                    return function ($96) {
                        return $95(v.value0($96));
                    };
                })(), (function () {
                    var $97 = map(f);
                    return function ($98) {
                        return $97(v.value1($98));
                    };
                })());
            };
        }
    };
};
var invariantCodec = function (dictFunctor) {
    return {
        imap: Data_Functor_Invariant.imapF(functorCodec(dictFunctor))
    };
};
var applyCodec = function (dictApply) {
    var apply = Control_Apply.apply(dictApply);
    var functorCodec1 = functorCodec(dictApply.Functor0());
    return function (dictSemigroup) {
        var apply1 = Control_Apply.apply(Data_Tuple.applyTuple(dictSemigroup));
        return {
            apply: function (v) {
                return function (v1) {
                    return new Codec(function (a) {
                        return apply(v.value0(a))(v1.value0(a));
                    }, function (c) {
                        return apply1(v.value1(c))(v1.value1(c));
                    });
                };
            },
            Functor0: function () {
                return functorCodec1;
            }
        };
    };
};
var applicativeCodec = function (dictApplicative) {
    var pure = Control_Applicative.pure(dictApplicative);
    var applyCodec1 = applyCodec(dictApplicative.Apply0());
    return function (dictMonoid) {
        var pure1 = Control_Applicative.pure(Data_Tuple.applicativeTuple(dictMonoid));
        var applyCodec2 = applyCodec1(dictMonoid.Semigroup0());
        return {
            pure: function (x) {
                return new Codec(Data_Function["const"](pure(x)), Data_Function["const"](pure1(x)));
            },
            Apply0: function () {
                return applyCodec2;
            }
        };
    };
};
var altCodec = function (dictAlt) {
    var alt = Control_Alt.alt(dictAlt);
    var functorCodec1 = functorCodec(dictAlt.Functor0());
    return {
        alt: function (v) {
            return function (v1) {
                return new Codec(function (a) {
                    return alt(v.value0(a))(v1.value0(a));
                }, v1.value1);
            };
        },
        Functor0: function () {
            return functorCodec1;
        }
    };
};
var hoist = function (f) {
    return function (v) {
        return new Codec(function ($99) {
            return f(v.value0($99));
        }, v.value1);
    };
};
var encode = function (v) {
    return function ($100) {
        return Data_Tuple.fst(v.value1($100));
    };
};
var decode = function (v) {
    return v.value0;
};
var compose = function (dictBind) {
    var composeKleisliFlipped = Control_Bind.composeKleisliFlipped(dictBind);
    return function (v) {
        return function (v1) {
            return new Codec(composeKleisliFlipped(v.value0)(v1.value0), (function () {
                var $101 = lmap(function ($103) {
                    return Data_Tuple.fst(v1.value1($103));
                });
                return function ($102) {
                    return $101(v.value1($102));
                };
            })());
        };
    };
};
var composeFlipped = function (dictBind) {
    return Data_Function.flip(compose(dictBind));
};
var codec$prime = function (f) {
    return function (g) {
        return new Codec(f, function (b) {
            return new Data_Tuple.Tuple(g(b), b);
        });
    };
};
var codec = function (f) {
    return function (g) {
        return new Codec(f, function (b) {
            return new Data_Tuple.Tuple(g(b), b);
        });
    };
};
var fix = function (f) {
    return codec(function (x) {
        return decode(f(fix(f)))(x);
    })(function (x) {
        return encode(f(fix(f)))(x);
    });
};
var identity = function (dictApplicative) {
    return codec(Control_Applicative.pure(dictApplicative))(identity1);
};
export {
    Codec,
    codec,
    codec$prime,
    decode,
    encode,
    hoist,
    identity,
    fix,
    compose,
    composeFlipped,
    functorCodec,
    invariantCodec,
    altCodec,
    applyCodec,
    applicativeCodec,
    profunctorCodec
};
