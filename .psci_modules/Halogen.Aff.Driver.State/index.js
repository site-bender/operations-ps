import * as Data_Foldable from "../Data.Foldable/index.js";
import * as Data_List_Types from "../Data.List.Types/index.js";
import * as Data_Map_Internal from "../Data.Map.Internal/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Effect_Ref from "../Effect.Ref/index.js";
import * as Halogen_Data_Slot from "../Halogen.Data.Slot/index.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
var DriverStateRef = function (x) {
    return x;
};
var DriverState = function (x) {
    return x;
};
var unRenderStateX = Unsafe_Coerce.unsafeCoerce;
var unDriverStateX = Unsafe_Coerce.unsafeCoerce;
var renderStateX_ = function (dictApplicative) {
    var traverse_ = Data_Foldable.traverse_(dictApplicative)(Data_Foldable.foldableMaybe);
    return function (f) {
        return unDriverStateX(function (st) {
            return traverse_(f)(st.rendering);
        });
    };
};
var mkRenderStateX = Unsafe_Coerce.unsafeCoerce;
var renderStateX = function (dictFunctor) {
    return function (f) {
        return unDriverStateX(function (st) {
            return mkRenderStateX(f(st.rendering));
        });
    };
};
var mkDriverStateXRef = Unsafe_Coerce.unsafeCoerce;
var mapDriverState = function (f) {
    return function (v) {
        return f(v);
    };
};
var initDriverState = function (component) {
    return function (input) {
        return function (handler) {
            return function (lchs) {
                return function __do() {
                    var selfRef = Effect_Ref["new"]({})();
                    var childrenIn = Effect_Ref["new"](Halogen_Data_Slot.empty)();
                    var childrenOut = Effect_Ref["new"](Halogen_Data_Slot.empty)();
                    var handlerRef = Effect_Ref["new"](handler)();
                    var pendingQueries = Effect_Ref["new"](new Data_Maybe.Just(Data_List_Types.Nil.value))();
                    var pendingOuts = Effect_Ref["new"](new Data_Maybe.Just(Data_List_Types.Nil.value))();
                    var pendingHandlers = Effect_Ref["new"](Data_Maybe.Nothing.value)();
                    var fresh = Effect_Ref["new"](1)();
                    var subscriptions = Effect_Ref["new"](new Data_Maybe.Just(Data_Map_Internal.empty))();
                    var forks = Effect_Ref["new"](Data_Map_Internal.empty)();
                    var ds = {
                        component: component,
                        state: component.initialState(input),
                        refs: Data_Map_Internal.empty,
                        children: Halogen_Data_Slot.empty,
                        childrenIn: childrenIn,
                        childrenOut: childrenOut,
                        selfRef: selfRef,
                        handlerRef: handlerRef,
                        pendingQueries: pendingQueries,
                        pendingOuts: pendingOuts,
                        pendingHandlers: pendingHandlers,
                        rendering: Data_Maybe.Nothing.value,
                        fresh: fresh,
                        subscriptions: subscriptions,
                        forks: forks,
                        lifecycleHandlers: lchs
                    };
                    Effect_Ref.write(ds)(selfRef)();
                    return mkDriverStateXRef(selfRef);
                };
            };
        };
    };
};
export {
    DriverState,
    mapDriverState,
    DriverStateRef,
    unDriverStateX,
    mkDriverStateXRef,
    renderStateX,
    renderStateX_,
    unRenderStateX,
    initDriverState
};
