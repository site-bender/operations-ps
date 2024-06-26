import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Control_Monad from "../Control.Monad/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Traversable from "../Data.Traversable/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect_Uncurried from "../Effect.Uncurried/index.js";
import * as Promise_Internal from "../Promise.Internal/index.js";
var $runtime_lazy = function (name, moduleName, init) {
    var state = 0;
    var val;
    return function (lineNumber) {
        if (state === 2) return val;
        if (state === 1) throw new ReferenceError(name + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
        state = 1;
        val = init();
        state = 2;
        return val;
    };
};
var bindFlipped = /* #__PURE__ */ Control_Bind.bindFlipped(Effect.bindEffect);
var pure = /* #__PURE__ */ Control_Applicative.pure(Effect.applicativeEffect);
var traverse = /* #__PURE__ */ Data_Traversable.traverse(Data_Traversable.traversableArray)(Effect.applicativeEffect);
var map = /* #__PURE__ */ Data_Functor.map(Data_Functor.functorArray);

// | A trivial box that adds a layer between promises to prevent automatic flattening.
var Box = /* #__PURE__ */ (function () {
    function Box(value0) {
        this.value0 = value0;
    };
    Box.create = function (value0) {
        return new Box(value0);
    };
    return Box;
})();

// | A pure `Promise` that has not been executed yet. This type can be used
// | with `do` syntax.
var LazyPromise = function (x) {
    return x;
};
var toPromise = function () {
    return function (v) {
        return bindFlipped(Effect_Uncurried.runEffectFn2(Promise_Internal.then_)(function (v1) {
            return Promise_Internal.resolve(v1.value0);
        }))(v);
    };
};
var race = function (as) {
    return function __do() {
        var as$prime = traverse(function (v) {
            return v;
        })(as)();
        return Promise_Internal.race(as$prime);
    };
};
var newtypeLazyPromise = {
    Coercible0: function () {
        return undefined;
    }
};
var $$new = function (k) {
    return function () {
        return Promise_Internal["new"](function (onResolve, onReject) {
            return k((function () {
                var $41 = Effect_Uncurried.runEffectFn1(onResolve);
                return function ($42) {
                    return $41(Box.create($42));
                };
            })())(Effect_Uncurried.runEffectFn1(onReject))();
        });
    };
};
var fromPromise = function (p) {
    return bindFlipped(Effect_Uncurried.runEffectFn2(Promise_Internal.then_)(function ($43) {
        return Promise_Internal.resolve(Box.create($43));
    }))(p);
};
var $$finally = function (v) {
    return function (v1) {
        var finalize = function __do() {
            var p1$prime = v();
            return Promise_Internal.then_(function (v2) {
                return Promise_Internal.resolve(v2.value0);
            }, p1$prime);
        };
        return function __do() {
            var p2$prime = v1();
            return Promise_Internal["finally"](finalize, p2$prime);
        };
    };
};
var $$catch = function (k) {
    return function (v) {
        return function __do() {
            var p$prime = v();
            return Promise_Internal["catch"](function (a) {
                var v1 = k(a);
                return v1();
            }, p$prime);
        };
    };
};
var monadLazyPromise = {
    Applicative0: function () {
        return applicativeLazyPromise;
    },
    Bind1: function () {
        return bindLazyPromise;
    }
};
var bindLazyPromise = {
    bind: function (v) {
        return function (k) {
            return function __do() {
                var p$prime = v();
                return Promise_Internal.then_(function (v1) {
                    var v2 = k(v1.value0);
                    return v2();
                }, p$prime);
            };
        };
    },
    Apply0: function () {
        return $lazy_applyLazyPromise(0);
    }
};
var applicativeLazyPromise = {
    pure: function ($44) {
        return LazyPromise(pure(Promise_Internal.resolve(Box.create($44))));
    },
    Apply0: function () {
        return $lazy_applyLazyPromise(0);
    }
};
var $lazy_functorLazyPromise = /* #__PURE__ */ $runtime_lazy("functorLazyPromise", "Promise.Lazy", function () {
    return {
        map: Control_Monad.liftM1(monadLazyPromise)
    };
});
var $lazy_applyLazyPromise = /* #__PURE__ */ $runtime_lazy("applyLazyPromise", "Promise.Lazy", function () {
    return {
        apply: Control_Monad.ap(monadLazyPromise),
        Functor0: function () {
            return $lazy_functorLazyPromise(0);
        }
    };
});
var functorLazyPromise = /* #__PURE__ */ $lazy_functorLazyPromise(22);
var applyLazyPromise = /* #__PURE__ */ $lazy_applyLazyPromise(25);
var monadEffectLazyPromise = {
    liftEffect: /* #__PURE__ */ (function () {
        var $45 = Data_Functor.map(Effect.functorEffect)(function ($47) {
            return Promise_Internal.resolve(Box.create($47));
        });
        return function ($46) {
            return LazyPromise($45($46));
        };
    })(),
    Monad0: function () {
        return monadLazyPromise;
    }
};
var all = function (as) {
    var rebox = function (bs) {
        return Promise_Internal.resolve(new Box(map(function (v) {
            return v.value0;
        })(bs)));
    };
    return function __do() {
        var as$prime = traverse(function (v) {
            return v;
        })(as)();
        var as$prime$prime = Promise_Internal.all(as$prime);
        return Promise_Internal.then_(rebox, as$prime$prime);
    };
};
export {
    Box,
    LazyPromise,
    $$new as new,
    $$catch as catch,
    $$finally as finally,
    all,
    race,
    fromPromise,
    toPromise,
    newtypeLazyPromise,
    functorLazyPromise,
    applyLazyPromise,
    applicativeLazyPromise,
    bindLazyPromise,
    monadLazyPromise,
    monadEffectLazyPromise
};
