// | This module defines the state monad transformer, `StateT`.
import * as Control_Alt from "../Control.Alt/index.js";
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Apply from "../Control.Apply/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Control_Monad from "../Control.Monad/index.js";
import * as Control_Monad_Cont_Class from "../Control.Monad.Cont.Class/index.js";
import * as Control_Monad_Error_Class from "../Control.Monad.Error.Class/index.js";
import * as Control_Monad_Reader_Class from "../Control.Monad.Reader.Class/index.js";
import * as Control_Monad_Rec_Class from "../Control.Monad.Rec.Class/index.js";
import * as Control_Monad_State_Class from "../Control.Monad.State.Class/index.js";
import * as Control_Monad_Trans_Class from "../Control.Monad.Trans.Class/index.js";
import * as Control_Monad_Writer_Class from "../Control.Monad.Writer.Class/index.js";
import * as Control_Plus from "../Control.Plus/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Monoid from "../Data.Monoid/index.js";
import * as Data_Semigroup from "../Data.Semigroup/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
import * as Data_Unit from "../Data.Unit/index.js";
import * as Effect_Class from "../Effect.Class/index.js";

// | The state monad transformer.
// |
// | This monad transformer extends the base monad with the operations `get`
// | and `put` which can be used to model a single piece of mutable state.
// |
// | The `MonadState` type class describes the operations supported by this monad.
var StateT = function (x) {
    return x;
};

// | Modify the final state in a `StateT` monad action.
var withStateT = function (f) {
    return function (v) {
        return function ($193) {
            return v(f($193));
        };
    };
};

// | Run a computation in the `StateT` monad.
var runStateT = function (v) {
    return v;
};
var newtypeStateT = {
    Coercible0: function () {
        return undefined;
    }
};
var monadTransStateT = {
    lift: function (dictMonad) {
        var bind = Control_Bind.bind(dictMonad.Bind1());
        var pure = Control_Applicative.pure(dictMonad.Applicative0());
        return function (m) {
            return function (s) {
                return bind(m)(function (x) {
                    return pure(new Data_Tuple.Tuple(x, s));
                });
            };
        };
    }
};
var lift = /* #__PURE__ */ Control_Monad_Trans_Class.lift(monadTransStateT);

// | Change the result type in a `StateT` monad action.
var mapStateT = function (f) {
    return function (v) {
        return function ($194) {
            return f(v($194));
        };
    };
};
var lazyStateT = {
    defer: function (f) {
        return function (s) {
            var v = f(Data_Unit.unit);
            return v(s);
        };
    }
};
var functorStateT = function (dictFunctor) {
    var map = Data_Functor.map(dictFunctor);
    return {
        map: function (f) {
            return function (v) {
                return function (s) {
                    return map(function (v1) {
                        return new Data_Tuple.Tuple(f(v1.value0), v1.value1);
                    })(v(s));
                };
            };
        }
    };
};

// | Run a computation in the `StateT` monad discarding the result.
var execStateT = function (dictFunctor) {
    var map = Data_Functor.map(dictFunctor);
    return function (v) {
        return function (s) {
            return map(Data_Tuple.snd)(v(s));
        };
    };
};

// | Run a computation in the `StateT` monad, discarding the final state.
var evalStateT = function (dictFunctor) {
    var map = Data_Functor.map(dictFunctor);
    return function (v) {
        return function (s) {
            return map(Data_Tuple.fst)(v(s));
        };
    };
};
var monadStateT = function (dictMonad) {
    return {
        Applicative0: function () {
            return applicativeStateT(dictMonad);
        },
        Bind1: function () {
            return bindStateT(dictMonad);
        }
    };
};
var bindStateT = function (dictMonad) {
    var bind = Control_Bind.bind(dictMonad.Bind1());
    return {
        bind: function (v) {
            return function (f) {
                return function (s) {
                    return bind(v(s))(function (v1) {
                        var v3 = f(v1.value0);
                        return v3(v1.value1);
                    });
                };
            };
        },
        Apply0: function () {
            return applyStateT(dictMonad);
        }
    };
};
var applyStateT = function (dictMonad) {
    var functorStateT1 = functorStateT(((dictMonad.Bind1()).Apply0()).Functor0());
    return {
        apply: Control_Monad.ap(monadStateT(dictMonad)),
        Functor0: function () {
            return functorStateT1;
        }
    };
};
var applicativeStateT = function (dictMonad) {
    var pure = Control_Applicative.pure(dictMonad.Applicative0());
    return {
        pure: function (a) {
            return function (s) {
                return pure(new Data_Tuple.Tuple(a, s));
            };
        },
        Apply0: function () {
            return applyStateT(dictMonad);
        }
    };
};
var semigroupStateT = function (dictMonad) {
    var lift2 = Control_Apply.lift2(applyStateT(dictMonad));
    return function (dictSemigroup) {
        return {
            append: lift2(Data_Semigroup.append(dictSemigroup))
        };
    };
};
var monadAskStateT = function (dictMonadAsk) {
    var Monad0 = dictMonadAsk.Monad0();
    var monadStateT1 = monadStateT(Monad0);
    return {
        ask: lift(Monad0)(Control_Monad_Reader_Class.ask(dictMonadAsk)),
        Monad0: function () {
            return monadStateT1;
        }
    };
};
var monadReaderStateT = function (dictMonadReader) {
    var monadAskStateT1 = monadAskStateT(dictMonadReader.MonadAsk0());
    return {
        local: (function () {
            var $195 = Control_Monad_Reader_Class.local(dictMonadReader);
            return function ($196) {
                return mapStateT($195($196));
            };
        })(),
        MonadAsk0: function () {
            return monadAskStateT1;
        }
    };
};
var monadContStateT = function (dictMonadCont) {
    var callCC = Control_Monad_Cont_Class.callCC(dictMonadCont);
    var monadStateT1 = monadStateT(dictMonadCont.Monad0());
    return {
        callCC: function (f) {
            return function (s) {
                return callCC(function (c) {
                    var v = f(function (a) {
                        return function (s$prime) {
                            return c(new Data_Tuple.Tuple(a, s$prime));
                        };
                    });
                    return v(s);
                });
            };
        },
        Monad0: function () {
            return monadStateT1;
        }
    };
};
var monadEffectState = function (dictMonadEffect) {
    var Monad0 = dictMonadEffect.Monad0();
    var monadStateT1 = monadStateT(Monad0);
    return {
        liftEffect: (function () {
            var $197 = lift(Monad0);
            var $198 = Effect_Class.liftEffect(dictMonadEffect);
            return function ($199) {
                return $197($198($199));
            };
        })(),
        Monad0: function () {
            return monadStateT1;
        }
    };
};
var monadRecStateT = function (dictMonadRec) {
    var Monad0 = dictMonadRec.Monad0();
    var bind = Control_Bind.bind(Monad0.Bind1());
    var pure = Control_Applicative.pure(Monad0.Applicative0());
    var tailRecM = Control_Monad_Rec_Class.tailRecM(dictMonadRec);
    var monadStateT1 = monadStateT(Monad0);
    return {
        tailRecM: function (f) {
            return function (a) {
                var f$prime = function (v) {
                    var v1 = f(v.value0);
                    return bind(v1(v.value1))(function (v2) {
                        return pure((function () {
                            if (v2.value0 instanceof Control_Monad_Rec_Class.Loop) {
                                return new Control_Monad_Rec_Class.Loop(new Data_Tuple.Tuple(v2.value0.value0, v2.value1));
                            };
                            if (v2.value0 instanceof Control_Monad_Rec_Class.Done) {
                                return new Control_Monad_Rec_Class.Done(new Data_Tuple.Tuple(v2.value0.value0, v2.value1));
                            };
                            throw new Error("Failed pattern match at Control.Monad.State.Trans (line 87, column 16 - line 89, column 40): " + [ v2.value0.constructor.name ]);
                        })());
                    });
                };
                return function (s) {
                    return tailRecM(f$prime)(new Data_Tuple.Tuple(a, s));
                };
            };
        },
        Monad0: function () {
            return monadStateT1;
        }
    };
};
var monadStateStateT = function (dictMonad) {
    var pure = Control_Applicative.pure(dictMonad.Applicative0());
    var monadStateT1 = monadStateT(dictMonad);
    return {
        state: function (f) {
            return function ($200) {
                return pure(f($200));
            };
        },
        Monad0: function () {
            return monadStateT1;
        }
    };
};
var monadTellStateT = function (dictMonadTell) {
    var Monad1 = dictMonadTell.Monad1();
    var Semigroup0 = dictMonadTell.Semigroup0();
    var monadStateT1 = monadStateT(Monad1);
    return {
        tell: (function () {
            var $201 = lift(Monad1);
            var $202 = Control_Monad_Writer_Class.tell(dictMonadTell);
            return function ($203) {
                return $201($202($203));
            };
        })(),
        Semigroup0: function () {
            return Semigroup0;
        },
        Monad1: function () {
            return monadStateT1;
        }
    };
};
var monadWriterStateT = function (dictMonadWriter) {
    var MonadTell1 = dictMonadWriter.MonadTell1();
    var Monad1 = MonadTell1.Monad1();
    var bind = Control_Bind.bind(Monad1.Bind1());
    var listen = Control_Monad_Writer_Class.listen(dictMonadWriter);
    var pure = Control_Applicative.pure(Monad1.Applicative0());
    var pass = Control_Monad_Writer_Class.pass(dictMonadWriter);
    var Monoid0 = dictMonadWriter.Monoid0();
    var monadTellStateT1 = monadTellStateT(MonadTell1);
    return {
        listen: function (m) {
            return function (s) {
                return bind(listen(m(s)))(function (v) {
                    return pure(new Data_Tuple.Tuple(new Data_Tuple.Tuple(v.value0.value0, v.value1), v.value0.value1));
                });
            };
        },
        pass: function (m) {
            return function (s) {
                return pass(bind(m(s))(function (v) {
                    return pure(new Data_Tuple.Tuple(new Data_Tuple.Tuple(v.value0.value0, v.value1), v.value0.value1));
                }));
            };
        },
        Monoid0: function () {
            return Monoid0;
        },
        MonadTell1: function () {
            return monadTellStateT1;
        }
    };
};
var monadThrowStateT = function (dictMonadThrow) {
    var Monad0 = dictMonadThrow.Monad0();
    var lift1 = lift(Monad0);
    var throwError = Control_Monad_Error_Class.throwError(dictMonadThrow);
    var monadStateT1 = monadStateT(Monad0);
    return {
        throwError: function (e) {
            return lift1(throwError(e));
        },
        Monad0: function () {
            return monadStateT1;
        }
    };
};
var monadErrorStateT = function (dictMonadError) {
    var catchError = Control_Monad_Error_Class.catchError(dictMonadError);
    var monadThrowStateT1 = monadThrowStateT(dictMonadError.MonadThrow0());
    return {
        catchError: function (v) {
            return function (h) {
                return function (s) {
                    return catchError(v(s))(function (e) {
                        var v1 = h(e);
                        return v1(s);
                    });
                };
            };
        },
        MonadThrow0: function () {
            return monadThrowStateT1;
        }
    };
};
var monoidStateT = function (dictMonad) {
    var pure = Control_Applicative.pure(applicativeStateT(dictMonad));
    var semigroupStateT1 = semigroupStateT(dictMonad);
    return function (dictMonoid) {
        var semigroupStateT2 = semigroupStateT1(dictMonoid.Semigroup0());
        return {
            mempty: pure(Data_Monoid.mempty(dictMonoid)),
            Semigroup0: function () {
                return semigroupStateT2;
            }
        };
    };
};
var altStateT = function (dictMonad) {
    return function (dictAlt) {
        var alt = Control_Alt.alt(dictAlt);
        var functorStateT1 = functorStateT(dictAlt.Functor0());
        return {
            alt: function (v) {
                return function (v1) {
                    return function (s) {
                        return alt(v(s))(v1(s));
                    };
                };
            },
            Functor0: function () {
                return functorStateT1;
            }
        };
    };
};
var plusStateT = function (dictMonad) {
    var altStateT1 = altStateT(dictMonad);
    return function (dictPlus) {
        var empty = Control_Plus.empty(dictPlus);
        var altStateT2 = altStateT1(dictPlus.Alt0());
        return {
            empty: function (v) {
                return empty;
            },
            Alt0: function () {
                return altStateT2;
            }
        };
    };
};
var alternativeStateT = function (dictMonad) {
    var applicativeStateT1 = applicativeStateT(dictMonad);
    var plusStateT1 = plusStateT(dictMonad);
    return function (dictAlternative) {
        var plusStateT2 = plusStateT1(dictAlternative.Plus1());
        return {
            Applicative0: function () {
                return applicativeStateT1;
            },
            Plus1: function () {
                return plusStateT2;
            }
        };
    };
};
var monadPlusStateT = function (dictMonadPlus) {
    var Monad0 = dictMonadPlus.Monad0();
    var monadStateT1 = monadStateT(Monad0);
    var alternativeStateT1 = alternativeStateT(Monad0)(dictMonadPlus.Alternative1());
    return {
        Monad0: function () {
            return monadStateT1;
        },
        Alternative1: function () {
            return alternativeStateT1;
        }
    };
};
export {
    StateT,
    runStateT,
    evalStateT,
    execStateT,
    mapStateT,
    withStateT,
    newtypeStateT,
    functorStateT,
    applyStateT,
    applicativeStateT,
    altStateT,
    plusStateT,
    alternativeStateT,
    bindStateT,
    monadStateT,
    monadRecStateT,
    monadPlusStateT,
    monadTransStateT,
    lazyStateT,
    monadEffectState,
    monadContStateT,
    monadThrowStateT,
    monadErrorStateT,
    monadAskStateT,
    monadReaderStateT,
    monadStateStateT,
    monadTellStateT,
    monadWriterStateT,
    semigroupStateT,
    monoidStateT
};
export {
    get,
    gets,
    modify,
    modify_,
    put,
    state
} from "../Control.Monad.State.Class/index.js";
export {
    lift
} from "../Control.Monad.Trans.Class/index.js";
