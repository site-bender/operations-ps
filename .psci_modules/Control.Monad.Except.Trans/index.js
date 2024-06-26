// | This module defines the _exception monad transformer_ `ExceptT`.
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Apply from "../Control.Apply/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Control_Category from "../Control.Category/index.js";
import * as Control_Monad from "../Control.Monad/index.js";
import * as Control_Monad_Cont_Class from "../Control.Monad.Cont.Class/index.js";
import * as Control_Monad_Error_Class from "../Control.Monad.Error.Class/index.js";
import * as Control_Monad_Reader_Class from "../Control.Monad.Reader.Class/index.js";
import * as Control_Monad_Rec_Class from "../Control.Monad.Rec.Class/index.js";
import * as Control_Monad_State_Class from "../Control.Monad.State.Class/index.js";
import * as Control_Monad_Trans_Class from "../Control.Monad.Trans.Class/index.js";
import * as Control_Monad_Writer_Class from "../Control.Monad.Writer.Class/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Monoid from "../Data.Monoid/index.js";
import * as Data_Semigroup from "../Data.Semigroup/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
import * as Effect_Class from "../Effect.Class/index.js";
var map = /* #__PURE__ */ Data_Functor.map(Data_Either.functorEither);
var identity = /* #__PURE__ */ Control_Category.identity(Control_Category.categoryFn);

// | A monad transformer which adds exceptions to other monads, in the same way
// | as `Except`. As before, `e` is the type of exceptions, and `a` is the type
// | of successful results. The new type parameter `m` is the inner monad that
// | computations run in.
var ExceptT = function (x) {
    return x;
};

// | Transform any exceptions thrown by an `ExceptT` computation using the given function.
var withExceptT = function (dictFunctor) {
    var map1 = Data_Functor.map(dictFunctor);
    return function (f) {
        return function (v) {
            var mapLeft = function (v1) {
                return function (v2) {
                    if (v2 instanceof Data_Either.Right) {
                        return new Data_Either.Right(v2.value0);
                    };
                    if (v2 instanceof Data_Either.Left) {
                        return new Data_Either.Left(v1(v2.value0));
                    };
                    throw new Error("Failed pattern match at Control.Monad.Except.Trans (line 42, column 3 - line 42, column 32): " + [ v1.constructor.name, v2.constructor.name ]);
                };
            };
            return map1(mapLeft(f))(v);
        };
    };
};

// | The inverse of `ExceptT`. Run a computation in the `ExceptT` monad.
var runExceptT = function (v) {
    return v;
};
var newtypeExceptT = {
    Coercible0: function () {
        return undefined;
    }
};
var monadTransExceptT = {
    lift: function (dictMonad) {
        var bind = Control_Bind.bind(dictMonad.Bind1());
        var pure = Control_Applicative.pure(dictMonad.Applicative0());
        return function (m) {
            return bind(m)(function (a) {
                return pure(new Data_Either.Right(a));
            });
        };
    }
};
var lift = /* #__PURE__ */ Control_Monad_Trans_Class.lift(monadTransExceptT);

// | Transform the unwrapped computation using the given function.
var mapExceptT = function (f) {
    return function (v) {
        return f(v);
    };
};
var functorExceptT = function (dictFunctor) {
    var map1 = Data_Functor.map(dictFunctor);
    return {
        map: function (f) {
            return mapExceptT(map1(map(f)));
        }
    };
};

// | Construct a computation in the `ExceptT` transformer from an `Either` value.
var except = function (dictApplicative) {
    var $185 = Control_Applicative.pure(dictApplicative);
    return function ($186) {
        return ExceptT($185($186));
    };
};
var monadExceptT = function (dictMonad) {
    return {
        Applicative0: function () {
            return applicativeExceptT(dictMonad);
        },
        Bind1: function () {
            return bindExceptT(dictMonad);
        }
    };
};
var bindExceptT = function (dictMonad) {
    var bind = Control_Bind.bind(dictMonad.Bind1());
    var pure = Control_Applicative.pure(dictMonad.Applicative0());
    return {
        bind: function (v) {
            return function (k) {
                return bind(v)(Data_Either.either(function ($187) {
                    return pure(Data_Either.Left.create($187));
                })(function (a) {
                    var v1 = k(a);
                    return v1;
                }));
            };
        },
        Apply0: function () {
            return applyExceptT(dictMonad);
        }
    };
};
var applyExceptT = function (dictMonad) {
    var functorExceptT1 = functorExceptT(((dictMonad.Bind1()).Apply0()).Functor0());
    return {
        apply: Control_Monad.ap(monadExceptT(dictMonad)),
        Functor0: function () {
            return functorExceptT1;
        }
    };
};
var applicativeExceptT = function (dictMonad) {
    return {
        pure: (function () {
            var $188 = Control_Applicative.pure(dictMonad.Applicative0());
            return function ($189) {
                return ExceptT($188(Data_Either.Right.create($189)));
            };
        })(),
        Apply0: function () {
            return applyExceptT(dictMonad);
        }
    };
};
var semigroupExceptT = function (dictMonad) {
    var lift2 = Control_Apply.lift2(applyExceptT(dictMonad));
    return function (dictSemigroup) {
        return {
            append: lift2(Data_Semigroup.append(dictSemigroup))
        };
    };
};
var monadAskExceptT = function (dictMonadAsk) {
    var Monad0 = dictMonadAsk.Monad0();
    var monadExceptT1 = monadExceptT(Monad0);
    return {
        ask: lift(Monad0)(Control_Monad_Reader_Class.ask(dictMonadAsk)),
        Monad0: function () {
            return monadExceptT1;
        }
    };
};
var monadReaderExceptT = function (dictMonadReader) {
    var local = Control_Monad_Reader_Class.local(dictMonadReader);
    var monadAskExceptT1 = monadAskExceptT(dictMonadReader.MonadAsk0());
    return {
        local: function (f) {
            return mapExceptT(local(f));
        },
        MonadAsk0: function () {
            return monadAskExceptT1;
        }
    };
};
var monadContExceptT = function (dictMonadCont) {
    var callCC = Control_Monad_Cont_Class.callCC(dictMonadCont);
    var monadExceptT1 = monadExceptT(dictMonadCont.Monad0());
    return {
        callCC: function (f) {
            return callCC(function (c) {
                var v = f(function (a) {
                    return c(new Data_Either.Right(a));
                });
                return v;
            });
        },
        Monad0: function () {
            return monadExceptT1;
        }
    };
};
var monadEffectExceptT = function (dictMonadEffect) {
    var Monad0 = dictMonadEffect.Monad0();
    var monadExceptT1 = monadExceptT(Monad0);
    return {
        liftEffect: (function () {
            var $190 = lift(Monad0);
            var $191 = Effect_Class.liftEffect(dictMonadEffect);
            return function ($192) {
                return $190($191($192));
            };
        })(),
        Monad0: function () {
            return monadExceptT1;
        }
    };
};
var monadRecExceptT = function (dictMonadRec) {
    var tailRecM = Control_Monad_Rec_Class.tailRecM(dictMonadRec);
    var Monad0 = dictMonadRec.Monad0();
    var bind = Control_Bind.bind(Monad0.Bind1());
    var pure = Control_Applicative.pure(Monad0.Applicative0());
    var monadExceptT1 = monadExceptT(Monad0);
    return {
        tailRecM: function (f) {
            var $193 = tailRecM(function (a) {
                var v = f(a);
                return bind(v)(function (m$prime) {
                    return pure((function () {
                        if (m$prime instanceof Data_Either.Left) {
                            return new Control_Monad_Rec_Class.Done(new Data_Either.Left(m$prime.value0));
                        };
                        if (m$prime instanceof Data_Either.Right && m$prime.value0 instanceof Control_Monad_Rec_Class.Loop) {
                            return new Control_Monad_Rec_Class.Loop(m$prime.value0.value0);
                        };
                        if (m$prime instanceof Data_Either.Right && m$prime.value0 instanceof Control_Monad_Rec_Class.Done) {
                            return new Control_Monad_Rec_Class.Done(new Data_Either.Right(m$prime.value0.value0));
                        };
                        throw new Error("Failed pattern match at Control.Monad.Except.Trans (line 74, column 14 - line 77, column 43): " + [ m$prime.constructor.name ]);
                    })());
                });
            });
            return function ($194) {
                return ExceptT($193($194));
            };
        },
        Monad0: function () {
            return monadExceptT1;
        }
    };
};
var monadStateExceptT = function (dictMonadState) {
    var Monad0 = dictMonadState.Monad0();
    var lift1 = lift(Monad0);
    var state = Control_Monad_State_Class.state(dictMonadState);
    var monadExceptT1 = monadExceptT(Monad0);
    return {
        state: function (f) {
            return lift1(state(f));
        },
        Monad0: function () {
            return monadExceptT1;
        }
    };
};
var monadTellExceptT = function (dictMonadTell) {
    var Monad1 = dictMonadTell.Monad1();
    var Semigroup0 = dictMonadTell.Semigroup0();
    var monadExceptT1 = monadExceptT(Monad1);
    return {
        tell: (function () {
            var $195 = lift(Monad1);
            var $196 = Control_Monad_Writer_Class.tell(dictMonadTell);
            return function ($197) {
                return $195($196($197));
            };
        })(),
        Semigroup0: function () {
            return Semigroup0;
        },
        Monad1: function () {
            return monadExceptT1;
        }
    };
};
var monadWriterExceptT = function (dictMonadWriter) {
    var MonadTell1 = dictMonadWriter.MonadTell1();
    var Monad1 = MonadTell1.Monad1();
    var bind = Control_Bind.bind(Monad1.Bind1());
    var listen = Control_Monad_Writer_Class.listen(dictMonadWriter);
    var pure = Control_Applicative.pure(Monad1.Applicative0());
    var pass = Control_Monad_Writer_Class.pass(dictMonadWriter);
    var Monoid0 = dictMonadWriter.Monoid0();
    var monadTellExceptT1 = monadTellExceptT(MonadTell1);
    return {
        listen: mapExceptT(function (m) {
            return bind(listen(m))(function (v) {
                return pure(map(function (r) {
                    return new Data_Tuple.Tuple(r, v.value1);
                })(v.value0));
            });
        }),
        pass: mapExceptT(function (m) {
            return pass(bind(m)(function (a) {
                return pure((function () {
                    if (a instanceof Data_Either.Left) {
                        return new Data_Tuple.Tuple(new Data_Either.Left(a.value0), identity);
                    };
                    if (a instanceof Data_Either.Right) {
                        return new Data_Tuple.Tuple(new Data_Either.Right(a.value0.value0), a.value0.value1);
                    };
                    throw new Error("Failed pattern match at Control.Monad.Except.Trans (line 134, column 10 - line 136, column 45): " + [ a.constructor.name ]);
                })());
            }));
        }),
        Monoid0: function () {
            return Monoid0;
        },
        MonadTell1: function () {
            return monadTellExceptT1;
        }
    };
};
var monadThrowExceptT = function (dictMonad) {
    var monadExceptT1 = monadExceptT(dictMonad);
    return {
        throwError: (function () {
            var $198 = Control_Applicative.pure(dictMonad.Applicative0());
            return function ($199) {
                return ExceptT($198(Data_Either.Left.create($199)));
            };
        })(),
        Monad0: function () {
            return monadExceptT1;
        }
    };
};
var monadErrorExceptT = function (dictMonad) {
    var bind = Control_Bind.bind(dictMonad.Bind1());
    var pure = Control_Applicative.pure(dictMonad.Applicative0());
    var monadThrowExceptT1 = monadThrowExceptT(dictMonad);
    return {
        catchError: function (v) {
            return function (k) {
                return bind(v)(Data_Either.either(function (a) {
                    var v1 = k(a);
                    return v1;
                })(function ($200) {
                    return pure(Data_Either.Right.create($200));
                }));
            };
        },
        MonadThrow0: function () {
            return monadThrowExceptT1;
        }
    };
};
var monoidExceptT = function (dictMonad) {
    var pure = Control_Applicative.pure(applicativeExceptT(dictMonad));
    var semigroupExceptT1 = semigroupExceptT(dictMonad);
    return function (dictMonoid) {
        var semigroupExceptT2 = semigroupExceptT1(dictMonoid.Semigroup0());
        return {
            mempty: pure(Data_Monoid.mempty(dictMonoid)),
            Semigroup0: function () {
                return semigroupExceptT2;
            }
        };
    };
};
var altExceptT = function (dictSemigroup) {
    var append = Data_Semigroup.append(dictSemigroup);
    return function (dictMonad) {
        var Bind1 = dictMonad.Bind1();
        var bind = Control_Bind.bind(Bind1);
        var pure = Control_Applicative.pure(dictMonad.Applicative0());
        var functorExceptT1 = functorExceptT((Bind1.Apply0()).Functor0());
        return {
            alt: function (v) {
                return function (v1) {
                    return bind(v)(function (rm) {
                        if (rm instanceof Data_Either.Right) {
                            return pure(new Data_Either.Right(rm.value0));
                        };
                        if (rm instanceof Data_Either.Left) {
                            return bind(v1)(function (rn) {
                                if (rn instanceof Data_Either.Right) {
                                    return pure(new Data_Either.Right(rn.value0));
                                };
                                if (rn instanceof Data_Either.Left) {
                                    return pure(new Data_Either.Left(append(rm.value0)(rn.value0)));
                                };
                                throw new Error("Failed pattern match at Control.Monad.Except.Trans (line 86, column 9 - line 88, column 49): " + [ rn.constructor.name ]);
                            });
                        };
                        throw new Error("Failed pattern match at Control.Monad.Except.Trans (line 82, column 5 - line 88, column 49): " + [ rm.constructor.name ]);
                    });
                };
            },
            Functor0: function () {
                return functorExceptT1;
            }
        };
    };
};
var plusExceptT = function (dictMonoid) {
    var mempty = Data_Monoid.mempty(dictMonoid);
    var altExceptT1 = altExceptT(dictMonoid.Semigroup0());
    return function (dictMonad) {
        var altExceptT2 = altExceptT1(dictMonad);
        return {
            empty: Control_Monad_Error_Class.throwError(monadThrowExceptT(dictMonad))(mempty),
            Alt0: function () {
                return altExceptT2;
            }
        };
    };
};
var alternativeExceptT = function (dictMonoid) {
    var plusExceptT1 = plusExceptT(dictMonoid);
    return function (dictMonad) {
        var applicativeExceptT1 = applicativeExceptT(dictMonad);
        var plusExceptT2 = plusExceptT1(dictMonad);
        return {
            Applicative0: function () {
                return applicativeExceptT1;
            },
            Plus1: function () {
                return plusExceptT2;
            }
        };
    };
};
var monadPlusExceptT = function (dictMonoid) {
    var alternativeExceptT1 = alternativeExceptT(dictMonoid);
    return function (dictMonad) {
        var monadExceptT1 = monadExceptT(dictMonad);
        var alternativeExceptT2 = alternativeExceptT1(dictMonad);
        return {
            Monad0: function () {
                return monadExceptT1;
            },
            Alternative1: function () {
                return alternativeExceptT2;
            }
        };
    };
};
export {
    ExceptT,
    runExceptT,
    withExceptT,
    mapExceptT,
    except,
    newtypeExceptT,
    functorExceptT,
    applyExceptT,
    applicativeExceptT,
    bindExceptT,
    monadExceptT,
    monadRecExceptT,
    altExceptT,
    plusExceptT,
    alternativeExceptT,
    monadPlusExceptT,
    monadTransExceptT,
    monadEffectExceptT,
    monadContExceptT,
    monadThrowExceptT,
    monadErrorExceptT,
    monadAskExceptT,
    monadReaderExceptT,
    monadStateExceptT,
    monadTellExceptT,
    monadWriterExceptT,
    semigroupExceptT,
    monoidExceptT
};
export {
    catchError,
    throwError
} from "../Control.Monad.Error.Class/index.js";
export {
    lift
} from "../Control.Monad.Trans.Class/index.js";
