import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Data_Bifunctor from "../Data.Bifunctor/index.js";
import * as Data_Coyoneda from "../Data.Coyoneda/index.js";
import * as Data_Foldable from "../Data.Foldable/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Unit from "../Data.Unit/index.js";
import * as Halogen_Data_Slot from "../Halogen.Data.Slot/index.js";
import * as Halogen_HTML_Core from "../Halogen.HTML.Core/index.js";
import * as Halogen_Query_HalogenM from "../Halogen.Query.HalogenM/index.js";
import * as Halogen_Query_HalogenQ from "../Halogen.Query.HalogenQ/index.js";
import * as Halogen_VDom_Thunk from "../Halogen.VDom.Thunk/index.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
var voidLeft = /* #__PURE__ */ Data_Functor.voidLeft(Halogen_Query_HalogenM.functorHalogenM);
var traverse_ = /* #__PURE__ */ Data_Foldable.traverse_(Halogen_Query_HalogenM.applicativeHalogenM)(Data_Foldable.foldableMaybe);
var map = /* #__PURE__ */ Data_Functor.map(Halogen_Query_HalogenM.functorHalogenM);
var lmap = /* #__PURE__ */ Data_Bifunctor.lmap(Halogen_HTML_Core.bifunctorHTML);
var map1 = /* #__PURE__ */ Data_Functor.map(Data_Functor.functorFn);
var map2 = /* #__PURE__ */ Data_Functor.map(Data_Maybe.functorMaybe);
var bimap = /* #__PURE__ */ Data_Bifunctor.bimap(Halogen_HTML_Core.bifunctorHTML);
var pure = /* #__PURE__ */ Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM);
var lookup = /* #__PURE__ */ Halogen_Data_Slot.lookup();
var pop = /* #__PURE__ */ Halogen_Data_Slot.pop();
var insert = /* #__PURE__ */ Halogen_Data_Slot.insert();
var ComponentSlot = /* #__PURE__ */ (function () {
    function ComponentSlot(value0) {
        this.value0 = value0;
    };
    ComponentSlot.create = function (value0) {
        return new ComponentSlot(value0);
    };
    return ComponentSlot;
})();
var ThunkSlot = /* #__PURE__ */ (function () {
    function ThunkSlot(value0) {
        this.value0 = value0;
    };
    ThunkSlot.create = function (value0) {
        return new ThunkSlot(value0);
    };
    return ThunkSlot;
})();

// | Exposes the inner details of a [`ComponentSlot`](#t:ComponentSlot) to a
// | function to produce a new result.
// |
// |  The hidden details will not be allowed to be revealed in the result
// | of the function - if any of the hidden types (state, action, set of slots)
// | appear in the result, the compiler will complain about an escaped skolem.
var unComponentSlot = Unsafe_Coerce.unsafeCoerce;

// | Exposes the inner details of a [`Component`](#t:Component) to a function
// | to produce a new result.
// |
// | The hidden details will not be allowed to be revealed in the result
// | of the function - if any of the hidden types (state, action, set of slots)
// | appear in the result, the compiler will complain about an escaped skolem.
var unComponent = Unsafe_Coerce.unsafeCoerce;

// | Accepts an `EvalSpec` to produce an `eval` function for a component. For
// | example:
// |
// | ```purescript
// | -- use `defaultEval` and override fields selectively
// | H.mkEval (H.defaultEval { handleAction = ?handleAction })
// |
// | -- or specify all the fields in the `EvalSpec`
// | H.mkEval
// |   { handleAction: ?handleAction
// |   , handleQuery: ?handleQuery
// |   , receive: ?receive
// |   , initialize: ?initialize
// |   , finalize: ?finalize
// |   }
// | ```
var mkEval = function (args) {
    return function (v) {
        if (v instanceof Halogen_Query_HalogenQ.Initialize) {
            return voidLeft(traverse_(args.handleAction)(args.initialize))(v.value0);
        };
        if (v instanceof Halogen_Query_HalogenQ.Finalize) {
            return voidLeft(traverse_(args.handleAction)(args.finalize))(v.value0);
        };
        if (v instanceof Halogen_Query_HalogenQ.Receive) {
            return voidLeft(traverse_(args.handleAction)(args.receive(v.value0)))(v.value1);
        };
        if (v instanceof Halogen_Query_HalogenQ.Action) {
            return voidLeft(args.handleAction(v.value0))(v.value1);
        };
        if (v instanceof Halogen_Query_HalogenQ.Query) {
            return Data_Coyoneda.unCoyoneda(function (g) {
                var $45 = map(Data_Maybe.maybe(v.value1(Data_Unit.unit))(g));
                return function ($46) {
                    return $45(args.handleQuery($46));
                };
            })(v.value0);
        };
        throw new Error("Failed pattern match at Halogen.Component (line 182, column 15 - line 192, column 71): " + [ v.constructor.name ]);
    };
};

// | Constructs [`ComponentSlotBox`](#t:ComponentSlot) from a [`ComponentSlotSpec`](#t:ComponentSlotSpec).
var mkComponentSlot = Unsafe_Coerce.unsafeCoerce;

// | Constructs a [`Component`](#t:Component) from a [`ComponentSpec`](#t:ComponentSpec).
var mkComponent = Unsafe_Coerce.unsafeCoerce;

// | Changes the [`ComponentSlot`](#t:ComponentSlot)'s `m` type.
var hoistSlot = function (dictFunctor) {
    return function (nat) {
        return function (v) {
            if (v instanceof ComponentSlot) {
                return unComponentSlot(function (slot) {
                    return new ComponentSlot(mkComponentSlot({
                        get: slot.get,
                        pop: slot.pop,
                        set: slot.set,
                        input: slot.input,
                        output: slot.output,
                        component: hoist(dictFunctor)(nat)(slot.component)
                    }));
                })(v.value0);
            };
            if (v instanceof ThunkSlot) {
                return new ThunkSlot(Halogen_VDom_Thunk.hoist(lmap(hoistSlot(dictFunctor)(nat)))(v.value0));
            };
            throw new Error("Failed pattern match at Halogen.Component (line 279, column 17 - line 284, column 53): " + [ v.constructor.name ]);
        };
    };
};

// | Changes the [`Component`](#t:Component)'s `m` type. A use case for this
// | might be to interpret some `Free` monad as `Aff` so the component can be
// | used with `runUI`.
var hoist = function (dictFunctor) {
    var hoist1 = Halogen_Query_HalogenM.hoist(dictFunctor);
    return function (nat) {
        return unComponent(function (c) {
            return mkComponent({
                initialState: c.initialState,
                render: (function () {
                    var $47 = lmap(hoistSlot(dictFunctor)(nat));
                    return function ($48) {
                        return $47(c.render($48));
                    };
                })(),
                "eval": (function () {
                    var $49 = hoist1(nat);
                    return function ($50) {
                        return $49(c["eval"]($50));
                    };
                })()
            });
        });
    };
};
var functorComponentSlotBox = {
    map: function (f) {
        return unComponentSlot(function (slot) {
            return mkComponentSlot({
                get: slot.get,
                pop: slot.pop,
                set: slot.set,
                component: slot.component,
                input: slot.input,
                output: map1(map2(f))(slot.output)
            });
        });
    }
};
var map3 = /* #__PURE__ */ Data_Functor.map(functorComponentSlotBox);
var functorComponentSlot = {
    map: function (f) {
        return function (v) {
            if (v instanceof ComponentSlot) {
                return new ComponentSlot(map3(f)(v.value0));
            };
            if (v instanceof ThunkSlot) {
                return new ThunkSlot(Halogen_VDom_Thunk.mapThunk(bimap(Data_Functor.map(functorComponentSlot)(f))(f))(v.value0));
            };
            throw new Error("Failed pattern match at Halogen.Component (line 209, column 11 - line 211, column 74): " + [ v.constructor.name ]);
        };
    }
};

// | A default value for `mkEval` that will result in an `eval` that nothing at
// | all - all incoming actions and queries will be ignored, and no receiver,
// | initializer, or finalizer will be specified.
// |
// | Usually this will be used with record update syntax to override fields to
// | specify things as needed. If a component only needs to handle actions,
// | for instance, a usage might be something like this:
// |
// | ```purescript
// | H.mkComponent
// |   { initialState
// |   , render
// |   , eval: H.mkEval (H.defaultEval { handleAction = ?handleAction })
// |   }
// | ```
var defaultEval = /* #__PURE__ */ (function () {
    return {
        handleAction: Data_Function["const"](pure(Data_Unit.unit)),
        handleQuery: Data_Function["const"](pure(Data_Maybe.Nothing.value)),
        receive: Data_Function["const"](Data_Maybe.Nothing.value),
        initialize: Data_Maybe.Nothing.value,
        finalize: Data_Maybe.Nothing.value
    };
})();

// | Constructs a [`ComponentSlot`](#t:ComponentSlot).
// |
// | Takes:
// | - the slot address label
// | - the slot address index
// | - the component for the slot
// | - the input value to pass to the component
// | - a function mapping outputs from the component to a query in the parent
var componentSlot = function () {
    return function (dictIsSymbol) {
        var lookup1 = lookup(dictIsSymbol);
        var pop1 = pop(dictIsSymbol);
        var insert1 = insert(dictIsSymbol);
        return function (dictOrd) {
            var lookup2 = lookup1(dictOrd);
            var pop2 = pop1(dictOrd);
            var insert2 = insert1(dictOrd);
            return function (label) {
                return function (p) {
                    return function (comp) {
                        return function (input) {
                            return function (output) {
                                return mkComponentSlot({
                                    get: lookup2(label)(p),
                                    pop: pop2(label)(p),
                                    set: insert2(label)(p),
                                    component: comp,
                                    input: input,
                                    output: output
                                });
                            };
                        };
                    };
                };
            };
        };
    };
};
export {
    mkComponent,
    unComponent,
    hoist,
    mkEval,
    defaultEval,
    ComponentSlot,
    ThunkSlot,
    componentSlot,
    mkComponentSlot,
    unComponentSlot,
    hoistSlot,
    functorComponentSlotBox,
    functorComponentSlot
};
