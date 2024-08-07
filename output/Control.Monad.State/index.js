// Generated by purs version 0.15.15
import * as Control_Monad_State_Class from "../Control.Monad.State.Class/index.js";
import * as Control_Monad_State_Trans from "../Control.Monad.State.Trans/index.js";
import * as Data_Identity from "../Data.Identity/index.js";
import * as Data_Newtype from "../Data.Newtype/index.js";
var unwrap = /* #__PURE__ */ Data_Newtype.unwrap();
var withState = Control_Monad_State_Trans.withStateT;
var runState = function (v) {
    return function ($18) {
        return unwrap(v($18));
    };
};
var mapState = function (f) {
    return Control_Monad_State_Trans.mapStateT(function ($19) {
        return Data_Identity.Identity(f(unwrap($19)));
    });
};
var execState = function (v) {
    return function (s) {
        var v1 = v(s);
        return v1.value1;
    };
};
var evalState = function (v) {
    return function (s) {
        var v1 = v(s);
        return v1.value0;
    };
};
export {
    runState,
    evalState,
    execState,
    mapState,
    withState
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
    StateT,
    evalStateT,
    execStateT,
    lift,
    mapStateT,
    runStateT,
    withStateT
} from "../Control.Monad.State.Trans/index.js";
//# sourceMappingURL=index.js.map
