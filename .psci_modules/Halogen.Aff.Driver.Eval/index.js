import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Applicative_Free from "../Control.Applicative.Free/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Control_Monad from "../Control.Monad/index.js";
import * as Control_Monad_Fork_Class from "../Control.Monad.Fork.Class/index.js";
import * as Control_Monad_Free from "../Control.Monad.Free/index.js";
import * as Control_Parallel from "../Control.Parallel/index.js";
import * as Control_Parallel_Class from "../Control.Parallel.Class/index.js";
import * as Data_Boolean from "../Data.Boolean/index.js";
import * as Data_Coyoneda from "../Data.Coyoneda/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Foldable from "../Data.Foldable/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_List_Types from "../Data.List.Types/index.js";
import * as Data_Map_Internal from "../Data.Map.Internal/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Unit from "../Data.Unit/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect_Aff from "../Effect.Aff/index.js";
import * as Effect_Class from "../Effect.Class/index.js";
import * as Effect_Exception from "../Effect.Exception/index.js";
import * as Effect_Ref from "../Effect.Ref/index.js";
import * as Halogen_Aff_Driver_State from "../Halogen.Aff.Driver.State/index.js";
import * as Halogen_Query_ChildQuery from "../Halogen.Query.ChildQuery/index.js";
import * as Halogen_Query_HalogenM from "../Halogen.Query.HalogenM/index.js";
import * as Halogen_Query_HalogenQ from "../Halogen.Query.HalogenQ/index.js";
import * as Halogen_Query_Input from "../Halogen.Query.Input/index.js";
import * as Halogen_Subscription from "../Halogen.Subscription/index.js";
import * as Unsafe_Reference from "../Unsafe.Reference/index.js";
var traverse_ = /* #__PURE__ */ Data_Foldable.traverse_(Effect.applicativeEffect)(Data_Foldable.foldableMaybe);
var bindFlipped = /* #__PURE__ */ Control_Bind.bindFlipped(Data_Maybe.bindMaybe);
var lookup = /* #__PURE__ */ Data_Map_Internal.lookup(Halogen_Query_HalogenM.ordSubscriptionId);
var bind1 = /* #__PURE__ */ Control_Bind.bind(Effect_Aff.bindAff);
var liftEffect = /* #__PURE__ */ Effect_Class.liftEffect(Effect_Aff.monadEffectAff);
var discard = /* #__PURE__ */ Control_Bind.discard(Control_Bind.discardUnit);
var discard1 = /* #__PURE__ */ discard(Effect_Aff.bindAff);
var traverse_1 = /* #__PURE__ */ Data_Foldable.traverse_(Effect_Aff.applicativeAff);
var traverse_2 = /* #__PURE__ */ traverse_1(Data_List_Types.foldableList);
var fork = /* #__PURE__ */ Control_Monad_Fork_Class.fork(Control_Monad_Fork_Class.monadForkAff);
var parSequence_ = /* #__PURE__ */ Control_Parallel.parSequence_(Effect_Aff.parallelAff)(Effect_Aff.applicativeParAff)(Data_List_Types.foldableList);
var pure = /* #__PURE__ */ Control_Applicative.pure(Effect_Aff.applicativeAff);
var map = /* #__PURE__ */ Data_Functor.map(Data_Coyoneda.functorCoyoneda);
var parallel = /* #__PURE__ */ Control_Parallel_Class.parallel(Effect_Aff.parallelAff);
var map1 = /* #__PURE__ */ Data_Functor.map(Effect_Aff.functorAff);
var sequential = /* #__PURE__ */ Control_Parallel_Class.sequential(Effect_Aff.parallelAff);
var map2 = /* #__PURE__ */ Data_Functor.map(Data_Maybe.functorMaybe);
var insert = /* #__PURE__ */ Data_Map_Internal.insert(Halogen_Query_HalogenM.ordSubscriptionId);
var retractFreeAp = /* #__PURE__ */ Control_Applicative_Free.retractFreeAp(Effect_Aff.applicativeParAff);
var $$delete = /* #__PURE__ */ Data_Map_Internal["delete"](Halogen_Query_HalogenM.ordForkId);
var unlessM = /* #__PURE__ */ Control_Monad.unlessM(Effect.monadEffect);
var insert1 = /* #__PURE__ */ Data_Map_Internal.insert(Halogen_Query_HalogenM.ordForkId);
var traverse_3 = /* #__PURE__ */ traverse_1(Data_Foldable.foldableMaybe);
var lookup1 = /* #__PURE__ */ Data_Map_Internal.lookup(Halogen_Query_HalogenM.ordForkId);
var lookup2 = /* #__PURE__ */ Data_Map_Internal.lookup(Data_Ord.ordString);
var foldFree = /* #__PURE__ */ Control_Monad_Free.foldFree(Effect_Aff.monadRecAff);
var alter = /* #__PURE__ */ Data_Map_Internal.alter(Data_Ord.ordString);
var unsubscribe = function (sid) {
    return function (ref) {
        return function __do() {
            var v = Effect_Ref.read(ref)();
            var subs = Effect_Ref.read(v.subscriptions)();
            return traverse_(Halogen_Subscription.unsubscribe)(bindFlipped(lookup(sid))(subs))();
        };
    };
};
var queueOrRun = function (ref) {
    return function (au) {
        return bind1(liftEffect(Effect_Ref.read(ref)))(function (v) {
            if (v instanceof Data_Maybe.Nothing) {
                return au;
            };
            if (v instanceof Data_Maybe.Just) {
                return liftEffect(Effect_Ref.write(new Data_Maybe.Just(new Data_List_Types.Cons(au, v.value0)))(ref));
            };
            throw new Error("Failed pattern match at Halogen.Aff.Driver.Eval (line 188, column 33 - line 190, column 57): " + [ v.constructor.name ]);
        });
    };
};
var handleLifecycle = function (lchs) {
    return function (f) {
        return discard1(liftEffect(Effect_Ref.write({
            initializers: Data_List_Types.Nil.value,
            finalizers: Data_List_Types.Nil.value
        })(lchs)))(function () {
            return bind1(liftEffect(f))(function (result) {
                return bind1(liftEffect(Effect_Ref.read(lchs)))(function (v) {
                    return discard1(traverse_2(fork)(v.finalizers))(function () {
                        return discard1(parSequence_(v.initializers))(function () {
                            return pure(result);
                        });
                    });
                });
            });
        });
    };
};

// We could perhaps do something more intelligent now this isn't baked into
// the virtual-dom rendering. It hasn't really been a problem so far though.
var handleAff = /* #__PURE__ */ Effect_Aff.runAff_(/* #__PURE__ */ Data_Either.either(Effect_Exception.throwException)(/* #__PURE__ */ Data_Function["const"](/* #__PURE__ */ Control_Applicative.pure(Effect.applicativeEffect)(Data_Unit.unit))));
var fresh = function (f) {
    return function (ref) {
        return bind1(liftEffect(Effect_Ref.read(ref)))(function (v) {
            return liftEffect(Effect_Ref["modify$prime"](function (i) {
                return {
                    state: i + 1 | 0,
                    value: f(i)
                };
            })(v.fresh));
        });
    };
};
var evalQ = function (render) {
    return function (ref) {
        return function (q) {
            return bind1(liftEffect(Effect_Ref.read(ref)))(function (v) {
                return evalM(render)(ref)(v["component"]["eval"](new Halogen_Query_HalogenQ.Query(map(Data_Maybe.Just.create)(Data_Coyoneda.liftCoyoneda(q)), Data_Function["const"](Data_Maybe.Nothing.value))));
            });
        };
    };
};
var evalM = function (render) {
    return function (initRef) {
        return function (v) {
            var evalChildQuery = function (ref) {
                return function (cqb) {
                    return bind1(liftEffect(Effect_Ref.read(ref)))(function (v1) {
                        return Halogen_Query_ChildQuery.unChildQueryBox(function (v2) {
                            var evalChild = function (v3) {
                                return parallel(bind1(liftEffect(Effect_Ref.read(v3)))(function (dsx) {
                                    return Halogen_Aff_Driver_State.unDriverStateX(function (ds) {
                                        return evalQ(render)(ds.selfRef)(v2.value1);
                                    })(dsx);
                                }));
                            };
                            return map1(v2.value2)(sequential(v2.value0(Effect_Aff.applicativeParAff)(evalChild)(v1.children)));
                        })(cqb);
                    });
                };
            };
            var go = function (ref) {
                return function (v1) {
                    if (v1 instanceof Halogen_Query_HalogenM.State) {
                        return bind1(liftEffect(Effect_Ref.read(ref)))(function (v2) {
                            var v3 = v1.value0(v2.state);
                            if (Unsafe_Reference.unsafeRefEq(v2.state)(v3.value1)) {
                                return pure(v3.value0);
                            };
                            if (Data_Boolean.otherwise) {
                                return discard1(liftEffect(Effect_Ref.write({
                                    component: v2.component,
                                    refs: v2.refs,
                                    children: v2.children,
                                    childrenIn: v2.childrenIn,
                                    childrenOut: v2.childrenOut,
                                    selfRef: v2.selfRef,
                                    handlerRef: v2.handlerRef,
                                    pendingQueries: v2.pendingQueries,
                                    pendingOuts: v2.pendingOuts,
                                    pendingHandlers: v2.pendingHandlers,
                                    rendering: v2.rendering,
                                    fresh: v2.fresh,
                                    subscriptions: v2.subscriptions,
                                    forks: v2.forks,
                                    lifecycleHandlers: v2.lifecycleHandlers,
                                    state: v3.value1
                                })(ref)))(function () {
                                    return discard1(handleLifecycle(v2.lifecycleHandlers)(render(v2.lifecycleHandlers)(ref)))(function () {
                                        return pure(v3.value0);
                                    });
                                });
                            };
                            throw new Error("Failed pattern match at Halogen.Aff.Driver.Eval (line 86, column 7 - line 92, column 21): " + [ v3.constructor.name ]);
                        });
                    };
                    if (v1 instanceof Halogen_Query_HalogenM.Subscribe) {
                        return bind1(fresh(Halogen_Query_HalogenM.SubscriptionId)(ref))(function (sid) {
                            return bind1(liftEffect(Halogen_Subscription.subscribe(v1.value0(sid))(function (act) {
                                return handleAff(evalF(render)(ref)(new Halogen_Query_Input.Action(act)));
                            })))(function (finalize) {
                                return bind1(liftEffect(Effect_Ref.read(ref)))(function (v2) {
                                    return discard1(liftEffect(Effect_Ref.modify_(map2(insert(sid)(finalize)))(v2.subscriptions)))(function () {
                                        return pure(v1.value1(sid));
                                    });
                                });
                            });
                        });
                    };
                    if (v1 instanceof Halogen_Query_HalogenM.Unsubscribe) {
                        return discard1(liftEffect(unsubscribe(v1.value0)(ref)))(function () {
                            return pure(v1.value1);
                        });
                    };
                    if (v1 instanceof Halogen_Query_HalogenM.Lift) {
                        return v1.value0;
                    };
                    if (v1 instanceof Halogen_Query_HalogenM.ChildQuery) {
                        return evalChildQuery(ref)(v1.value0);
                    };
                    if (v1 instanceof Halogen_Query_HalogenM.Raise) {
                        return bind1(liftEffect(Effect_Ref.read(ref)))(function (v2) {
                            return bind1(liftEffect(Effect_Ref.read(v2.handlerRef)))(function (handler) {
                                return discard1(queueOrRun(v2.pendingOuts)(handler(v1.value0)))(function () {
                                    return pure(v1.value1);
                                });
                            });
                        });
                    };
                    if (v1 instanceof Halogen_Query_HalogenM.Par) {
                        return sequential(retractFreeAp(Control_Applicative_Free.hoistFreeAp((function () {
                            var $119 = evalM(render)(ref);
                            return function ($120) {
                                return parallel($119($120));
                            };
                        })())(v1.value0)));
                    };
                    if (v1 instanceof Halogen_Query_HalogenM.Fork) {
                        return bind1(fresh(Halogen_Query_HalogenM.ForkId)(ref))(function (fid) {
                            return bind1(liftEffect(Effect_Ref.read(ref)))(function (v2) {
                                return bind1(liftEffect(Effect_Ref["new"](false)))(function (doneRef) {
                                    return bind1(fork(Effect_Aff["finally"](liftEffect(function __do() {
                                        Effect_Ref.modify_($$delete(fid))(v2.forks)();
                                        return Effect_Ref.write(true)(doneRef)();
                                    }))(evalM(render)(ref)(v1.value0))))(function (fiber) {
                                        return discard1(liftEffect(unlessM(Effect_Ref.read(doneRef))(Effect_Ref.modify_(insert1(fid)(fiber))(v2.forks))))(function () {
                                            return pure(v1.value1(fid));
                                        });
                                    });
                                });
                            });
                        });
                    };
                    if (v1 instanceof Halogen_Query_HalogenM.Join) {
                        return bind1(liftEffect(Effect_Ref.read(ref)))(function (v2) {
                            return bind1(liftEffect(Effect_Ref.read(v2.forks)))(function (forkMap) {
                                return discard1(traverse_3(Effect_Aff.joinFiber)(lookup1(v1.value0)(forkMap)))(function () {
                                    return pure(v1.value1);
                                });
                            });
                        });
                    };
                    if (v1 instanceof Halogen_Query_HalogenM.Kill) {
                        return bind1(liftEffect(Effect_Ref.read(ref)))(function (v2) {
                            return bind1(liftEffect(Effect_Ref.read(v2.forks)))(function (forkMap) {
                                return discard1(traverse_3(Effect_Aff.killFiber(Effect_Exception.error("Cancelled")))(lookup1(v1.value0)(forkMap)))(function () {
                                    return pure(v1.value1);
                                });
                            });
                        });
                    };
                    if (v1 instanceof Halogen_Query_HalogenM.GetRef) {
                        return bind1(liftEffect(Effect_Ref.read(ref)))(function (v2) {
                            return pure(v1.value1(lookup2(v1.value0)(v2.refs)));
                        });
                    };
                    throw new Error("Failed pattern match at Halogen.Aff.Driver.Eval (line 83, column 12 - line 139, column 33): " + [ v1.constructor.name ]);
                };
            };
            return foldFree(go(initRef))(v);
        };
    };
};
var evalF = function (render) {
    return function (ref) {
        return function (v) {
            if (v instanceof Halogen_Query_Input.RefUpdate) {
                return liftEffect(Data_Function.flip(Effect_Ref.modify_)(ref)(Halogen_Aff_Driver_State.mapDriverState(function (st) {
                    return {
                        component: st.component,
                        state: st.state,
                        children: st.children,
                        childrenIn: st.childrenIn,
                        childrenOut: st.childrenOut,
                        selfRef: st.selfRef,
                        handlerRef: st.handlerRef,
                        pendingQueries: st.pendingQueries,
                        pendingOuts: st.pendingOuts,
                        pendingHandlers: st.pendingHandlers,
                        rendering: st.rendering,
                        fresh: st.fresh,
                        subscriptions: st.subscriptions,
                        forks: st.forks,
                        lifecycleHandlers: st.lifecycleHandlers,
                        refs: alter(Data_Function["const"](v.value1))(v.value0)(st.refs)
                    };
                })));
            };
            if (v instanceof Halogen_Query_Input.Action) {
                return bind1(liftEffect(Effect_Ref.read(ref)))(function (v1) {
                    return evalM(render)(ref)(v1["component"]["eval"](new Halogen_Query_HalogenQ.Action(v.value0, Data_Unit.unit)));
                });
            };
            throw new Error("Failed pattern match at Halogen.Aff.Driver.Eval (line 52, column 20 - line 58, column 62): " + [ v.constructor.name ]);
        };
    };
};
export {
    evalF,
    evalQ,
    evalM,
    handleLifecycle,
    queueOrRun,
    handleAff
};
