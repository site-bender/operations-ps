import * as Control_Monad_Reader_Trans from "../Control.Monad.Reader.Trans/index.js";
import * as Control_Monad_Trans_Class from "../Control.Monad.Trans.Class/index.js";
import * as Effect_Aff from "../Effect.Aff/index.js";
var lift = /* #__PURE__ */ Control_Monad_Trans_Class.lift(Control_Monad_Reader_Trans.monadTransReaderT);
var Completed = /* #__PURE__ */ (function () {
    function Completed(value0) {
        this.value0 = value0;
    };
    Completed.create = function (value0) {
        return new Completed(value0);
    };
    return Completed;
})();
var Failed = /* #__PURE__ */ (function () {
    function Failed(value0) {
        this.value0 = value0;
    };
    Failed.create = function (value0) {
        return new Failed(value0);
    };
    return Failed;
})();
var Killed = /* #__PURE__ */ (function () {
    function Killed(value0) {
        this.value0 = value0;
    };
    Killed.create = function (value0) {
        return new Killed(value0);
    };
    return Killed;
})();
var uninterruptible = function (dict) {
    return dict.uninterruptible;
};
var suspend = function (dict) {
    return dict.suspend;
};
var never = function (dict) {
    return dict.never;
};
var monadForkAff = {
    suspend: Effect_Aff.suspendAff,
    fork: Effect_Aff.forkAff,
    join: Effect_Aff.joinFiber,
    Monad0: function () {
        return Effect_Aff.monadAff;
    },
    Functor1: function () {
        return Effect_Aff.functorFiber;
    }
};
var monadKillAff = {
    kill: Effect_Aff.killFiber,
    MonadFork0: function () {
        return monadForkAff;
    },
    MonadThrow1: function () {
        return Effect_Aff.monadThrowAff;
    }
};
var monadBracketAff = {
    bracket: function (acquire) {
        return function (release) {
            return function (run) {
                return Effect_Aff.generalBracket(acquire)({
                    completed: function ($44) {
                        return release(Completed.create($44));
                    },
                    failed: function ($45) {
                        return release(Failed.create($45));
                    },
                    killed: function ($46) {
                        return release(Killed.create($46));
                    }
                })(run);
            };
        };
    },
    uninterruptible: Effect_Aff.invincible,
    never: Effect_Aff.never,
    MonadKill0: function () {
        return monadKillAff;
    },
    MonadError1: function () {
        return Effect_Aff.monadErrorAff;
    }
};
var kill = function (dict) {
    return dict.kill;
};
var join = function (dict) {
    return dict.join;
};
var fork = function (dict) {
    return dict.fork;
};
var monadForkReaderT = function (dictMonadFork) {
    var suspend1 = suspend(dictMonadFork);
    var fork1 = fork(dictMonadFork);
    var Monad0 = dictMonadFork.Monad0();
    var monadReaderT = Control_Monad_Reader_Trans.monadReaderT(Monad0);
    var Functor1 = dictMonadFork.Functor1();
    return {
        suspend: function (v) {
            return function ($47) {
                return suspend1(v($47));
            };
        },
        fork: function (v) {
            return function ($48) {
                return fork1(v($48));
            };
        },
        join: (function () {
            var $49 = lift(Monad0);
            var $50 = join(dictMonadFork);
            return function ($51) {
                return $49($50($51));
            };
        })(),
        Monad0: function () {
            return monadReaderT;
        },
        Functor1: function () {
            return Functor1;
        }
    };
};
var monadKillReaderT = function (dictMonadKill) {
    var MonadThrow1 = dictMonadKill.MonadThrow1();
    var lift1 = lift(MonadThrow1.Monad0());
    var kill1 = kill(dictMonadKill);
    var monadForkReaderT1 = monadForkReaderT(dictMonadKill.MonadFork0());
    var monadThrowReaderT = Control_Monad_Reader_Trans.monadThrowReaderT(MonadThrow1);
    return {
        kill: function (e) {
            var $52 = kill1(e);
            return function ($53) {
                return lift1($52($53));
            };
        },
        MonadFork0: function () {
            return monadForkReaderT1;
        },
        MonadThrow1: function () {
            return monadThrowReaderT;
        }
    };
};
var bracket = function (dict) {
    return dict.bracket;
};
var monadBracketReaderT = function (dictMonadBracket) {
    var bracket1 = bracket(dictMonadBracket);
    var uninterruptible1 = uninterruptible(dictMonadBracket);
    var MonadError1 = dictMonadBracket.MonadError1();
    var monadKillReaderT1 = monadKillReaderT(dictMonadBracket.MonadKill0());
    var monadErrorReaderT = Control_Monad_Reader_Trans.monadErrorReaderT(MonadError1);
    return {
        bracket: function (v) {
            return function (release) {
                return function (run) {
                    return function (r) {
                        return bracket1(v(r))(function (c) {
                            return function (a) {
                                return Control_Monad_Reader_Trans.runReaderT(release(c)(a))(r);
                            };
                        })(function (a) {
                            return Control_Monad_Reader_Trans.runReaderT(run(a))(r);
                        });
                    };
                };
            };
        },
        uninterruptible: function (k) {
            return function (r) {
                return uninterruptible1(Control_Monad_Reader_Trans.runReaderT(k)(r));
            };
        },
        never: lift((MonadError1.MonadThrow0()).Monad0())(never(dictMonadBracket)),
        MonadKill0: function () {
            return monadKillReaderT1;
        },
        MonadError1: function () {
            return monadErrorReaderT;
        }
    };
};
export {
    bracket,
    fork,
    join,
    kill,
    never,
    suspend,
    uninterruptible,
    Completed,
    Failed,
    Killed,
    monadForkAff,
    monadForkReaderT,
    monadKillAff,
    monadKillReaderT,
    monadBracketAff,
    monadBracketReaderT
};
