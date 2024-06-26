import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Control_Monad_Cont_Trans from "../Control.Monad.Cont.Trans/index.js";
import * as Control_Monad_Except_Trans from "../Control.Monad.Except.Trans/index.js";
import * as Control_Monad_Maybe_Trans from "../Control.Monad.Maybe.Trans/index.js";
import * as Control_Monad_Reader_Trans from "../Control.Monad.Reader.Trans/index.js";
import * as Control_Monad_Writer_Trans from "../Control.Monad.Writer.Trans/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Functor_Compose from "../Data.Functor.Compose/index.js";
import * as Data_Functor_Costar from "../Data.Functor.Costar/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Profunctor_Star from "../Data.Profunctor.Star/index.js";
import * as Data_Unit from "../Data.Unit/index.js";
import * as Effect_Class from "../Effect.Class/index.js";
import * as Effect_Ref from "../Effect.Ref/index.js";
var discard = /* #__PURE__ */ Control_Bind.discard(Control_Bind.discardUnit);

// | The `ParCont` type constructor provides an `Applicative` instance
// | based on `ContT Unit m`, which waits for multiple continuations to be
// | resumed simultaneously.
// |
// | ParCont sections of code can be embedded in sequential code by using
// | the `parallel` and `sequential` functions:
// |
// | ```purescript
// | loadModel :: ContT Unit (Eff (ajax :: AJAX)) Model
// | loadModel = do
// |   token <- authenticate
// |   sequential $
// |     Model <$> parallel (get "/products/popular/" token)
// |           <*> parallel (get "/categories/all" token)
// | ```
var ParCont = function (x) {
    return x;
};
var sequential = function (dict) {
    return dict.sequential;
};
var parallel = function (dict) {
    return dict.parallel;
};
var newtypeParCont = {
    Coercible0: function () {
        return undefined;
    }
};
var monadParWriterT = function (dictMonoid) {
    var applyWriterT = Control_Monad_Writer_Trans.applyWriterT(dictMonoid.Semigroup0());
    return function (dictParallel) {
        var applyWriterT1 = applyWriterT(dictParallel.Apply0());
        var applyWriterT2 = applyWriterT(dictParallel.Apply1());
        return {
            parallel: Control_Monad_Writer_Trans.mapWriterT(parallel(dictParallel)),
            sequential: Control_Monad_Writer_Trans.mapWriterT(sequential(dictParallel)),
            Apply0: function () {
                return applyWriterT1;
            },
            Apply1: function () {
                return applyWriterT2;
            }
        };
    };
};
var monadParStar = function (dictParallel) {
    var parallel1 = parallel(dictParallel);
    var sequential1 = sequential(dictParallel);
    var applyStar = Data_Profunctor_Star.applyStar(dictParallel.Apply0());
    var applyStar1 = Data_Profunctor_Star.applyStar(dictParallel.Apply1());
    return {
        parallel: function (v) {
            return function ($124) {
                return parallel1(v($124));
            };
        },
        sequential: function (v) {
            return function ($125) {
                return sequential1(v($125));
            };
        },
        Apply0: function () {
            return applyStar;
        },
        Apply1: function () {
            return applyStar1;
        }
    };
};
var monadParReaderT = function (dictParallel) {
    var applyReaderT = Control_Monad_Reader_Trans.applyReaderT(dictParallel.Apply0());
    var applyReaderT1 = Control_Monad_Reader_Trans.applyReaderT(dictParallel.Apply1());
    return {
        parallel: Control_Monad_Reader_Trans.mapReaderT(parallel(dictParallel)),
        sequential: Control_Monad_Reader_Trans.mapReaderT(sequential(dictParallel)),
        Apply0: function () {
            return applyReaderT;
        },
        Apply1: function () {
            return applyReaderT1;
        }
    };
};
var monadParMaybeT = function (dictParallel) {
    var parallel1 = parallel(dictParallel);
    var sequential1 = sequential(dictParallel);
    var applyCompose = Data_Functor_Compose.applyCompose(dictParallel.Apply1())(Data_Maybe.applyMaybe);
    return function (dictMonad) {
        var applyMaybeT = Control_Monad_Maybe_Trans.applyMaybeT(dictMonad);
        return {
            parallel: function (v) {
                return parallel1(v);
            },
            sequential: function (v) {
                return sequential1(v);
            },
            Apply0: function () {
                return applyMaybeT;
            },
            Apply1: function () {
                return applyCompose;
            }
        };
    };
};
var monadParExceptT = function (dictParallel) {
    var parallel1 = parallel(dictParallel);
    var sequential1 = sequential(dictParallel);
    var applyCompose = Data_Functor_Compose.applyCompose(dictParallel.Apply1())(Data_Either.applyEither);
    return function (dictMonad) {
        var applyExceptT = Control_Monad_Except_Trans.applyExceptT(dictMonad);
        return {
            parallel: function (v) {
                return parallel1(v);
            },
            sequential: function (v) {
                return sequential1(v);
            },
            Apply0: function () {
                return applyExceptT;
            },
            Apply1: function () {
                return applyCompose;
            }
        };
    };
};
var monadParCostar = function (dictParallel) {
    var sequential1 = sequential(dictParallel);
    var parallel1 = parallel(dictParallel);
    return {
        parallel: function (v) {
            return function ($126) {
                return v(sequential1($126));
            };
        },
        sequential: function (v) {
            return function ($127) {
                return v(parallel1($127));
            };
        },
        Apply0: function () {
            return Data_Functor_Costar.applyCostar;
        },
        Apply1: function () {
            return Data_Functor_Costar.applyCostar;
        }
    };
};
var monadParParCont = function (dictMonadEffect) {
    var applyContT = Control_Monad_Cont_Trans.applyContT(((dictMonadEffect.Monad0()).Bind1()).Apply0());
    return {
        parallel: ParCont,
        sequential: function (v) {
            return v;
        },
        Apply0: function () {
            return applyContT;
        },
        Apply1: function () {
            return applyParCont(dictMonadEffect);
        }
    };
};
var functorParCont = function (dictMonadEffect) {
    var map = Data_Functor.map(Control_Monad_Cont_Trans.functorContT((((dictMonadEffect.Monad0()).Bind1()).Apply0()).Functor0()));
    return {
        map: function (f) {
            var $128 = parallel(monadParParCont(dictMonadEffect));
            var $129 = map(f);
            var $130 = sequential(monadParParCont(dictMonadEffect));
            return function ($131) {
                return $128($129($130($131)));
            };
        }
    };
};
var applyParCont = function (dictMonadEffect) {
    var Bind1 = (dictMonadEffect.Monad0()).Bind1();
    var bind = Control_Bind.bind(Bind1);
    var liftEffect = Effect_Class.liftEffect(dictMonadEffect);
    var discard1 = discard(Bind1);
    return {
        apply: function (v) {
            return function (v1) {
                return function (k) {
                    return bind(liftEffect(Effect_Ref["new"](Data_Maybe.Nothing.value)))(function (ra) {
                        return bind(liftEffect(Effect_Ref["new"](Data_Maybe.Nothing.value)))(function (rb) {
                            return discard1(Control_Monad_Cont_Trans.runContT(v)(function (a) {
                                return bind(liftEffect(Effect_Ref.read(rb)))(function (mb) {
                                    if (mb instanceof Data_Maybe.Nothing) {
                                        return liftEffect(Effect_Ref.write(new Data_Maybe.Just(a))(ra));
                                    };
                                    if (mb instanceof Data_Maybe.Just) {
                                        return k(a(mb.value0));
                                    };
                                    throw new Error("Failed pattern match at Control.Parallel.Class (line 83, column 7 - line 85, column 26): " + [ mb.constructor.name ]);
                                });
                            }))(function () {
                                return Control_Monad_Cont_Trans.runContT(v1)(function (b) {
                                    return bind(liftEffect(Effect_Ref.read(ra)))(function (ma) {
                                        if (ma instanceof Data_Maybe.Nothing) {
                                            return liftEffect(Effect_Ref.write(new Data_Maybe.Just(b))(rb));
                                        };
                                        if (ma instanceof Data_Maybe.Just) {
                                            return k(ma.value0(b));
                                        };
                                        throw new Error("Failed pattern match at Control.Parallel.Class (line 89, column 7 - line 91, column 26): " + [ ma.constructor.name ]);
                                    });
                                });
                            });
                        });
                    });
                };
            };
        },
        Functor0: function () {
            return functorParCont(dictMonadEffect);
        }
    };
};
var applicativeParCont = function (dictMonadEffect) {
    var applyParCont1 = applyParCont(dictMonadEffect);
    return {
        pure: (function () {
            var $132 = parallel(monadParParCont(dictMonadEffect));
            var $133 = Control_Applicative.pure(Control_Monad_Cont_Trans.applicativeContT((dictMonadEffect.Monad0()).Applicative0()));
            return function ($134) {
                return $132($133($134));
            };
        })(),
        Apply0: function () {
            return applyParCont1;
        }
    };
};
var altParCont = function (dictMonadEffect) {
    var Monad0 = dictMonadEffect.Monad0();
    var Bind1 = Monad0.Bind1();
    var bind = Control_Bind.bind(Bind1);
    var liftEffect = Effect_Class.liftEffect(dictMonadEffect);
    var discard1 = discard(Bind1);
    var pure = Control_Applicative.pure(Monad0.Applicative0());
    var functorParCont1 = functorParCont(dictMonadEffect);
    return {
        alt: function (v) {
            return function (v1) {
                return function (k) {
                    return bind(liftEffect(Effect_Ref["new"](false)))(function (done) {
                        return discard1(Control_Monad_Cont_Trans.runContT(v)(function (a) {
                            return bind(liftEffect(Effect_Ref.read(done)))(function (b) {
                                if (b) {
                                    return pure(Data_Unit.unit);
                                };
                                return discard1(liftEffect(Effect_Ref.write(true)(done)))(function () {
                                    return k(a);
                                });
                            });
                        }))(function () {
                            return Control_Monad_Cont_Trans.runContT(v1)(function (a) {
                                return bind(liftEffect(Effect_Ref.read(done)))(function (b) {
                                    if (b) {
                                        return pure(Data_Unit.unit);
                                    };
                                    return discard1(liftEffect(Effect_Ref.write(true)(done)))(function () {
                                        return k(a);
                                    });
                                });
                            });
                        });
                    });
                };
            };
        },
        Functor0: function () {
            return functorParCont1;
        }
    };
};
var plusParCont = function (dictMonadEffect) {
    var pure = Control_Applicative.pure((dictMonadEffect.Monad0()).Applicative0());
    var altParCont1 = altParCont(dictMonadEffect);
    return {
        empty: function (v) {
            return pure(Data_Unit.unit);
        },
        Alt0: function () {
            return altParCont1;
        }
    };
};
var alternativeParCont = function (dictMonadEffect) {
    var applicativeParCont1 = applicativeParCont(dictMonadEffect);
    var plusParCont1 = plusParCont(dictMonadEffect);
    return {
        Applicative0: function () {
            return applicativeParCont1;
        },
        Plus1: function () {
            return plusParCont1;
        }
    };
};
export {
    parallel,
    sequential,
    ParCont,
    monadParExceptT,
    monadParReaderT,
    monadParWriterT,
    monadParMaybeT,
    monadParStar,
    monadParCostar,
    newtypeParCont,
    functorParCont,
    applyParCont,
    applicativeParCont,
    altParCont,
    plusParCont,
    alternativeParCont,
    monadParParCont
};
