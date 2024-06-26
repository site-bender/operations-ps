// | This module defines the `Ref` type for mutable value references, as well
// | as actions for working with them.
// |
// | You'll notice that all of the functions that operate on a `Ref` (e.g.
// | `new`, `read`, `write`) return their result wrapped in an `Effect`.
// | Working with mutable references is considered effectful in PureScript
// | because of the principle of purity: functions should not have side
// | effects, and should return the same result when called with the same
// | arguments. If a `Ref` could be written to without using `Effect`, that
// | would cause a side effect (the effect of changing the result of subsequent
// | reads for that `Ref`). If there were a function for reading the current
// | value of a `Ref` without the result being wrapped in `Effect`, the result
// | of calling that function would change each time a new value was written to
// | the `Ref`. Even creating a new `Ref` is effectful: if there were a
// | function for creating a new `Ref` with the type `forall s. s -> Ref s`,
// | then calling that function twice with the same argument would not give the
// | same result in each case, since you'd end up with two distinct references
// | which could be updated independently of each other.
// |
// | _Note_: `Control.Monad.ST` provides a pure alternative to `Ref` when
// | mutation is restricted to a local scope.
import * as $foreign from "./foreign.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Effect from "../Effect/index.js";
var $$void = /* #__PURE__ */ Data_Functor["void"](Effect.functorEffect);
var $$new = $foreign["_new"];

// | Update the value of a mutable reference by applying a function
// | to the current value.
var modify$prime = $foreign.modifyImpl;

// | Update the value of a mutable reference by applying a function
// | to the current value. The updated value is returned.
var modify = function (f) {
    return modify$prime(function (s) {
        var s$prime = f(s);
        return {
            state: s$prime,
            value: s$prime
        };
    });
};

// | A version of `modify` which does not return the updated value.
var modify_ = function (f) {
    return function (s) {
        return $$void(modify(f)(s));
    };
};
export {
    newWithSelf,
    read,
    write
} from "./foreign.js";
export {
    $$new as new,
    modify$prime,
    modify,
    modify_
};
