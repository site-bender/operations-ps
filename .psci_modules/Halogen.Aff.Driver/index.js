import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Control_Monad_Fork_Class from "../Control.Monad.Fork.Class/index.js";
import * as Control_Monad_Rec_Class from "../Control.Monad.Rec.Class/index.js";
import * as Control_Parallel from "../Control.Parallel/index.js";
import * as Data_Foldable from "../Data.Foldable/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_List from "../Data.List/index.js";
import * as Data_List_Types from "../Data.List.Types/index.js";
import * as Data_Map_Internal from "../Data.Map.Internal/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Unit from "../Data.Unit/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect_Aff from "../Effect.Aff/index.js";
import * as Effect_Class from "../Effect.Class/index.js";
import * as Effect_Console from "../Effect.Console/index.js";
import * as Effect_Exception from "../Effect.Exception/index.js";
import * as Effect_Ref from "../Effect.Ref/index.js";
import * as Halogen from "../Halogen/index.js";
import * as Halogen_Aff_Driver_Eval from "../Halogen.Aff.Driver.Eval/index.js";
import * as Halogen_Aff_Driver_State from "../Halogen.Aff.Driver.State/index.js";
import * as Halogen_Component from "../Halogen.Component/index.js";
import * as Halogen_Data_Slot from "../Halogen.Data.Slot/index.js";
import * as Halogen_Query_HalogenQ from "../Halogen.Query.HalogenQ/index.js";
import * as Halogen_Query_Input from "../Halogen.Query.Input/index.js";
import * as Halogen_Subscription from "../Halogen.Subscription/index.js";
var bind = /* #__PURE__ */ Control_Bind.bind(Effect.bindEffect);
var discard = /* #__PURE__ */ Control_Bind.discard(Control_Bind.discardUnit);
var for_ = /* #__PURE__ */ Data_Foldable.for_(Effect.applicativeEffect)(Data_Foldable.foldableMaybe);
var traverse_ = /* #__PURE__ */ Data_Foldable.traverse_(Effect_Aff.applicativeAff)(Data_List_Types.foldableList);
var fork = /* #__PURE__ */ Control_Monad_Fork_Class.fork(Control_Monad_Fork_Class.monadForkAff);
var bindFlipped = /* #__PURE__ */ Control_Bind.bindFlipped(Effect.bindEffect);
var traverse_1 = /* #__PURE__ */ Data_Foldable.traverse_(Effect.applicativeEffect);
var traverse_2 = /* #__PURE__ */ traverse_1(Data_Foldable.foldableMaybe);
var traverse_3 = /* #__PURE__ */ traverse_1(Data_Map_Internal.foldableMap);
var discard2 = /* #__PURE__ */ discard(Effect_Aff.bindAff);
var parSequence_ = /* #__PURE__ */ Control_Parallel.parSequence_(Effect_Aff.parallelAff)(Effect_Aff.applicativeParAff)(Data_List_Types.foldableList);
var liftEffect = /* #__PURE__ */ Effect_Class.liftEffect(Effect_Aff.monadEffectAff);
var pure = /* #__PURE__ */ Control_Applicative.pure(Effect.applicativeEffect);
var map = /* #__PURE__ */ Data_Functor.map(Effect.functorEffect);
var pure1 = /* #__PURE__ */ Control_Applicative.pure(Effect_Aff.applicativeAff);
var when = /* #__PURE__ */ Control_Applicative.when(Effect.applicativeEffect);
var renderStateX = /* #__PURE__ */ Halogen_Aff_Driver_State.renderStateX(Effect.functorEffect);
var $$void = /* #__PURE__ */ Data_Functor["void"](Effect_Aff.functorAff);
var foreachSlot = /* #__PURE__ */ Halogen_Data_Slot.foreachSlot(Effect.applicativeEffect);
var renderStateX_ = /* #__PURE__ */ Halogen_Aff_Driver_State.renderStateX_(Effect.applicativeEffect);
var tailRecM = /* #__PURE__ */ Control_Monad_Rec_Class.tailRecM(Control_Monad_Rec_Class.monadRecEffect);
var voidLeft = /* #__PURE__ */ Data_Functor.voidLeft(Effect.functorEffect);
var bind1 = /* #__PURE__ */ Control_Bind.bind(Effect_Aff.bindAff);
var liftEffect1 = /* #__PURE__ */ Effect_Class.liftEffect(Effect_Class.monadEffectEffect);
var newLifecycleHandlers = /* #__PURE__ */ (function () {
    return Effect_Ref["new"]({
        initializers: Data_List_Types.Nil.value,
        finalizers: Data_List_Types.Nil.value
    });
})();
var handlePending = function (ref) {
    return function __do() {
        var queue = Effect_Ref.read(ref)();
        Effect_Ref.write(Data_Maybe.Nothing.value)(ref)();
        return for_(queue)((function () {
            var $59 = traverse_(fork);
            return function ($60) {
                return Halogen_Aff_Driver_Eval.handleAff($59(Data_List.reverse($60)));
            };
        })())();
    };
};
var cleanupSubscriptionsAndForks = function (v) {
    return function __do() {
        bindFlipped(traverse_2(traverse_3(Halogen_Subscription.unsubscribe)))(Effect_Ref.read(v.subscriptions))();
        Effect_Ref.write(Data_Maybe.Nothing.value)(v.subscriptions)();
        bindFlipped(traverse_3((function () {
            var $61 = Effect_Aff.killFiber(Effect_Exception.error("finalized"));
            return function ($62) {
                return Halogen_Aff_Driver_Eval.handleAff($61($62));
            };
        })()))(Effect_Ref.read(v.forks))();
        return Effect_Ref.write(Data_Map_Internal.empty)(v.forks)();
    };
};
var runUI = function (renderSpec) {
    return function (component) {
        return function (i) {
            var squashChildInitializers = function (lchs) {
                return function (preInits) {
                    return Halogen_Aff_Driver_State.unDriverStateX(function (st) {
                        var parentInitializer = Halogen_Aff_Driver_Eval.evalM(render)(st.selfRef)(st["component"]["eval"](new Halogen_Query_HalogenQ.Initialize(Data_Unit.unit)));
                        return Effect_Ref.modify_(function (handlers) {
                            return {
                                initializers: new Data_List_Types.Cons(discard2(parSequence_(Data_List.reverse(handlers.initializers)))(function () {
                                    return discard2(parentInitializer)(function () {
                                        return liftEffect(function __do() {
                                            handlePending(st.pendingQueries)();
                                            return handlePending(st.pendingOuts)();
                                        });
                                    });
                                }), preInits),
                                finalizers: handlers.finalizers
                            };
                        })(lchs);
                    });
                };
            };
            var runComponent = function (lchs) {
                return function (handler) {
                    return function (j) {
                        return Halogen_Component.unComponent(function (c) {
                            return function __do() {
                                var lchs$prime = newLifecycleHandlers();
                                var $$var = Halogen_Aff_Driver_State.initDriverState(c)(j)(handler)(lchs$prime)();
                                var pre = Effect_Ref.read(lchs)();
                                Effect_Ref.write({
                                    initializers: Data_List_Types.Nil.value,
                                    finalizers: pre.finalizers
                                })(lchs)();
                                bindFlipped(Halogen_Aff_Driver_State.unDriverStateX((function () {
                                    var $63 = render(lchs);
                                    return function ($64) {
                                        return $63((function (v) {
                                            return v.selfRef;
                                        })($64));
                                    };
                                })()))(Effect_Ref.read($$var))();
                                bindFlipped(squashChildInitializers(lchs)(pre.initializers))(Effect_Ref.read($$var))();
                                return $$var;
                            };
                        });
                    };
                };
            };
            var renderChild = function (lchs) {
                return function (handler) {
                    return function (childrenInRef) {
                        return function (childrenOutRef) {
                            return Halogen_Component.unComponentSlot(function (slot) {
                                return function __do() {
                                    var childrenIn = map(slot.pop)(Effect_Ref.read(childrenInRef))();
                                    var $$var = (function () {
                                        if (childrenIn instanceof Data_Maybe.Just) {
                                            Effect_Ref.write(childrenIn.value0.value1)(childrenInRef)();
                                            var dsx = Effect_Ref.read(childrenIn.value0.value0)();
                                            Halogen_Aff_Driver_State.unDriverStateX(function (st) {
                                                return function __do() {
                                                    Data_Function.flip(Effect_Ref.write)(st.handlerRef)((function () {
                                                        var $65 = Data_Maybe.maybe(pure1(Data_Unit.unit))(handler);
                                                        return function ($66) {
                                                            return $65(slot.output($66));
                                                        };
                                                    })())();
                                                    return Halogen_Aff_Driver_Eval.handleAff(Halogen_Aff_Driver_Eval.evalM(render)(st.selfRef)(st["component"]["eval"](new Halogen_Query_HalogenQ.Receive(slot.input, Data_Unit.unit))))();
                                                };
                                            })(dsx)();
                                            return childrenIn.value0.value0;
                                        };
                                        if (childrenIn instanceof Data_Maybe.Nothing) {
                                            return runComponent(lchs)((function () {
                                                var $67 = Data_Maybe.maybe(pure1(Data_Unit.unit))(handler);
                                                return function ($68) {
                                                    return $67(slot.output($68));
                                                };
                                            })())(slot.input)(slot.component)();
                                        };
                                        throw new Error("Failed pattern match at Halogen.Aff.Driver (line 213, column 14 - line 222, column 98): " + [ childrenIn.constructor.name ]);
                                    })();
                                    var isDuplicate = map(function ($69) {
                                        return Data_Maybe.isJust(slot.get($69));
                                    })(Effect_Ref.read(childrenOutRef))();
                                    when(isDuplicate)(Effect_Console.warn("Halogen: Duplicate slot address was detected during rendering, unexpected results may occur"))();
                                    Effect_Ref.modify_(slot.set($$var))(childrenOutRef)();
                                    return bind(Effect_Ref.read($$var))(renderStateX(function (v) {
                                        if (v instanceof Data_Maybe.Nothing) {
                                            return Effect_Exception["throw"]("Halogen internal error: child was not initialized in renderChild");
                                        };
                                        if (v instanceof Data_Maybe.Just) {
                                            return pure(renderSpec.renderChild(v.value0));
                                        };
                                        throw new Error("Failed pattern match at Halogen.Aff.Driver (line 227, column 37 - line 229, column 50): " + [ v.constructor.name ]);
                                    }))();
                                };
                            });
                        };
                    };
                };
            };
            var render = function (lchs) {
                return function ($$var) {
                    return function __do() {
                        var v = Effect_Ref.read($$var)();
                        var shouldProcessHandlers = map(Data_Maybe.isNothing)(Effect_Ref.read(v.pendingHandlers))();
                        when(shouldProcessHandlers)(Effect_Ref.write(new Data_Maybe.Just(Data_List_Types.Nil.value))(v.pendingHandlers))();
                        Effect_Ref.write(Halogen_Data_Slot.empty)(v.childrenOut)();
                        Effect_Ref.write(v.children)(v.childrenIn)();
                        
                        // The following 3 defs are working around a capture bug, see #586
var pendingHandlers = v.pendingHandlers;
                        var handler = (function () {
                            var $70 = Halogen_Aff_Driver_Eval.queueOrRun(pendingHandlers);
                            var $71 = Halogen_Aff_Driver_Eval.evalF(render)(v.selfRef);
                            return function ($72) {
                                return $70($$void($71($72)));
                            };
                        })();
                        var childHandler = (function () {
                            var $73 = Halogen_Aff_Driver_Eval.queueOrRun(v.pendingQueries);
                            return function ($74) {
                                return $73(handler(Halogen_Query_Input.Action.create($74)));
                            };
                        })();
                        var rendering = renderSpec.render(function ($75) {
                            return Halogen_Aff_Driver_Eval.handleAff(handler($75));
                        })(renderChild(lchs)(childHandler)(v.childrenIn)(v.childrenOut))(v.component.render(v.state))(v.rendering)();
                        var children = Effect_Ref.read(v.childrenOut)();
                        var childrenIn = Effect_Ref.read(v.childrenIn)();
                        foreachSlot(childrenIn)(function (v1) {
                            return function __do() {
                                var childDS = Effect_Ref.read(v1)();
                                renderStateX_(renderSpec.removeChild)(childDS)();
                                return finalize(lchs)(childDS)();
                            };
                        })();
                        Data_Function.flip(Effect_Ref.modify_)(v.selfRef)(Halogen_Aff_Driver_State.mapDriverState(function (ds$prime) {
                            return {
                                component: ds$prime.component,
                                state: ds$prime.state,
                                refs: ds$prime.refs,
                                childrenIn: ds$prime.childrenIn,
                                childrenOut: ds$prime.childrenOut,
                                selfRef: ds$prime.selfRef,
                                handlerRef: ds$prime.handlerRef,
                                pendingQueries: ds$prime.pendingQueries,
                                pendingOuts: ds$prime.pendingOuts,
                                pendingHandlers: ds$prime.pendingHandlers,
                                fresh: ds$prime.fresh,
                                subscriptions: ds$prime.subscriptions,
                                forks: ds$prime.forks,
                                lifecycleHandlers: ds$prime.lifecycleHandlers,
                                rendering: new Data_Maybe.Just(rendering),
                                children: children
                            };
                        }))();
                        return when(shouldProcessHandlers)(Data_Function.flip(tailRecM)(Data_Unit.unit)(function (v1) {
                            return function __do() {
                                var handlers = Effect_Ref.read(pendingHandlers)();
                                Effect_Ref.write(new Data_Maybe.Just(Data_List_Types.Nil.value))(pendingHandlers)();
                                traverse_2((function () {
                                    var $76 = traverse_(fork);
                                    return function ($77) {
                                        return Halogen_Aff_Driver_Eval.handleAff($76(Data_List.reverse($77)));
                                    };
                                })())(handlers)();
                                var mmore = Effect_Ref.read(pendingHandlers)();
                                var $52 = Data_Maybe.maybe(false)(Data_List["null"])(mmore);
                                if ($52) {
                                    return voidLeft(Effect_Ref.write(Data_Maybe.Nothing.value)(pendingHandlers))(new Control_Monad_Rec_Class.Done(Data_Unit.unit))();
                                };
                                return new Control_Monad_Rec_Class.Loop(Data_Unit.unit);
                            };
                        }))();
                    };
                };
            };
            var finalize = function (lchs) {
                return Halogen_Aff_Driver_State.unDriverStateX(function (st) {
                    return function __do() {
                        cleanupSubscriptionsAndForks(st)();
                        var f = Halogen_Aff_Driver_Eval.evalM(render)(st.selfRef)(st["component"]["eval"](new Halogen_Query_HalogenQ.Finalize(Data_Unit.unit)));
                        Effect_Ref.modify_(function (handlers) {
                            return {
                                initializers: handlers.initializers,
                                finalizers: new Data_List_Types.Cons(f, handlers.finalizers)
                            };
                        })(lchs)();
                        return foreachSlot(st.children)(function (v) {
                            return function __do() {
                                var dsx = Effect_Ref.read(v)();
                                return finalize(lchs)(dsx)();
                            };
                        })();
                    };
                });
            };
            var evalDriver = function (disposed) {
                return function (ref) {
                    return function (q) {
                        return bind1(liftEffect(Effect_Ref.read(disposed)))(function (v) {
                            if (v) {
                                return pure1(Data_Maybe.Nothing.value);
                            };
                            return Halogen_Aff_Driver_Eval.evalQ(render)(ref)(q);
                        });
                    };
                };
            };
            var dispose = function (disposed) {
                return function (lchs) {
                    return function (dsx) {
                        return Halogen_Aff_Driver_Eval.handleLifecycle(lchs)(function __do() {
                            var v = Effect_Ref.read(disposed)();
                            if (v) {
                                return Data_Unit.unit;
                            };
                            Effect_Ref.write(true)(disposed)();
                            finalize(lchs)(dsx)();
                            return Halogen_Aff_Driver_State.unDriverStateX(function (v1) {
                                return function __do() {
                                    var v2 = liftEffect1(Effect_Ref.read(v1.selfRef))();
                                    return for_(v2.rendering)(renderSpec.dispose)();
                                };
                            })(dsx)();
                        });
                    };
                };
            };
            return bind1(liftEffect(newLifecycleHandlers))(function (lchs) {
                return bind1(liftEffect(Effect_Ref["new"](false)))(function (disposed) {
                    return Halogen_Aff_Driver_Eval.handleLifecycle(lchs)(function __do() {
                        var sio = Halogen_Subscription.create();
                        var dsx = bindFlipped(Effect_Ref.read)(runComponent(lchs)((function () {
                            var $78 = Halogen_Subscription.notify(sio.listener);
                            return function ($79) {
                                return liftEffect($78($79));
                            };
                        })())(i)(component))();
                        return Halogen_Aff_Driver_State.unDriverStateX(function (st) {
                            return pure({
                                query: evalDriver(disposed)(st.selfRef),
                                messages: sio.emitter,
                                dispose: dispose(disposed)(lchs)(dsx)
                            });
                        })(dsx)();
                    });
                });
            });
        };
    };
};
export {
    runUI
};
