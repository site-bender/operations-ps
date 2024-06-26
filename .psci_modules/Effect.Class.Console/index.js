import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Effect_Class from "../Effect.Class/index.js";
import * as Effect_Console from "../Effect.Console/index.js";
var discard = /* #__PURE__ */ Control_Bind.discard(Control_Bind.discardUnit);
var warnShow = function (dictMonadEffect) {
    var liftEffect = Effect_Class.liftEffect(dictMonadEffect);
    return function (dictShow) {
        var $55 = Effect_Console.warnShow(dictShow);
        return function ($56) {
            return liftEffect($55($56));
        };
    };
};
var warn = function (dictMonadEffect) {
    var $57 = Effect_Class.liftEffect(dictMonadEffect);
    return function ($58) {
        return $57(Effect_Console.warn($58));
    };
};
var timeLog = function (dictMonadEffect) {
    var $59 = Effect_Class.liftEffect(dictMonadEffect);
    return function ($60) {
        return $59(Effect_Console.timeLog($60));
    };
};
var timeEnd = function (dictMonadEffect) {
    var $61 = Effect_Class.liftEffect(dictMonadEffect);
    return function ($62) {
        return $61(Effect_Console.timeEnd($62));
    };
};
var time = function (dictMonadEffect) {
    var $63 = Effect_Class.liftEffect(dictMonadEffect);
    return function ($64) {
        return $63(Effect_Console.time($64));
    };
};
var logShow = function (dictMonadEffect) {
    var liftEffect = Effect_Class.liftEffect(dictMonadEffect);
    return function (dictShow) {
        var $65 = Effect_Console.logShow(dictShow);
        return function ($66) {
            return liftEffect($65($66));
        };
    };
};
var log = function (dictMonadEffect) {
    var $67 = Effect_Class.liftEffect(dictMonadEffect);
    return function ($68) {
        return $67(Effect_Console.log($68));
    };
};
var infoShow = function (dictMonadEffect) {
    var liftEffect = Effect_Class.liftEffect(dictMonadEffect);
    return function (dictShow) {
        var $69 = Effect_Console.infoShow(dictShow);
        return function ($70) {
            return liftEffect($69($70));
        };
    };
};
var info = function (dictMonadEffect) {
    var $71 = Effect_Class.liftEffect(dictMonadEffect);
    return function ($72) {
        return $71(Effect_Console.info($72));
    };
};
var groupEnd = function (dictMonadEffect) {
    return Effect_Class.liftEffect(dictMonadEffect)(Effect_Console.groupEnd);
};
var groupCollapsed = function (dictMonadEffect) {
    var $73 = Effect_Class.liftEffect(dictMonadEffect);
    return function ($74) {
        return $73(Effect_Console.groupCollapsed($74));
    };
};
var group = function (dictMonadEffect) {
    var $75 = Effect_Class.liftEffect(dictMonadEffect);
    return function ($76) {
        return $75(Effect_Console.group($76));
    };
};
var grouped = function (dictMonadEffect) {
    var Monad0 = dictMonadEffect.Monad0();
    var Bind1 = Monad0.Bind1();
    var discard1 = discard(Bind1);
    var group1 = group(dictMonadEffect);
    var bind = Control_Bind.bind(Bind1);
    var groupEnd1 = groupEnd(dictMonadEffect);
    var pure = Control_Applicative.pure(Monad0.Applicative0());
    return function (name) {
        return function (inner) {
            return discard1(group1(name))(function () {
                return bind(inner)(function (result) {
                    return discard1(groupEnd1)(function () {
                        return pure(result);
                    });
                });
            });
        };
    };
};
var errorShow = function (dictMonadEffect) {
    var liftEffect = Effect_Class.liftEffect(dictMonadEffect);
    return function (dictShow) {
        var $77 = Effect_Console.errorShow(dictShow);
        return function ($78) {
            return liftEffect($77($78));
        };
    };
};
var error = function (dictMonadEffect) {
    var $79 = Effect_Class.liftEffect(dictMonadEffect);
    return function ($80) {
        return $79(Effect_Console.error($80));
    };
};
var debugShow = function (dictMonadEffect) {
    var liftEffect = Effect_Class.liftEffect(dictMonadEffect);
    return function (dictShow) {
        var $81 = Effect_Console.debugShow(dictShow);
        return function ($82) {
            return liftEffect($81($82));
        };
    };
};
var debug = function (dictMonadEffect) {
    var $83 = Effect_Class.liftEffect(dictMonadEffect);
    return function ($84) {
        return $83(Effect_Console.debug($84));
    };
};
var clear = function (dictMonadEffect) {
    return Effect_Class.liftEffect(dictMonadEffect)(Effect_Console.clear);
};
export {
    log,
    logShow,
    warn,
    warnShow,
    error,
    errorShow,
    info,
    infoShow,
    debug,
    debugShow,
    time,
    timeLog,
    timeEnd,
    clear,
    group,
    groupCollapsed,
    groupEnd,
    grouped
};
