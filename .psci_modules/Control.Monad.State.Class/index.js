// | This module defines the `MonadState` type class and its instances.
import * as Data_Tuple from "../Data.Tuple/index.js";
import * as Data_Unit from "../Data.Unit/index.js";
var state = function (dict) {
    return dict.state;
};

// | Set the state.
var put = function (dictMonadState) {
    var state1 = state(dictMonadState);
    return function (s) {
        return state1(function (v) {
            return new Data_Tuple.Tuple(Data_Unit.unit, s);
        });
    };
};
var modify_ = function (dictMonadState) {
    var state1 = state(dictMonadState);
    return function (f) {
        return state1(function (s) {
            return new Data_Tuple.Tuple(Data_Unit.unit, f(s));
        });
    };
};

// | Modify the state by applying a function to the current state. The returned
// | value is the new state value.
var modify = function (dictMonadState) {
    var state1 = state(dictMonadState);
    return function (f) {
        return state1(function (s) {
            var s$prime = f(s);
            return new Data_Tuple.Tuple(s$prime, s$prime);
        });
    };
};

// | Get a value which depends on the current state.
var gets = function (dictMonadState) {
    var state1 = state(dictMonadState);
    return function (f) {
        return state1(function (s) {
            return new Data_Tuple.Tuple(f(s), s);
        });
    };
};

// | Get the current state.
var get = function (dictMonadState) {
    return state(dictMonadState)(function (s) {
        return new Data_Tuple.Tuple(s, s);
    });
};
export {
    state,
    get,
    gets,
    put,
    modify,
    modify_
};
