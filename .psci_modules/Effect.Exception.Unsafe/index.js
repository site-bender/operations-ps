import * as Effect_Exception from "../Effect.Exception/index.js";
import * as Effect_Unsafe from "../Effect.Unsafe/index.js";

// | Throw an exception in pure code. This function should be used very
// | sparingly, as it can cause unexpected crashes at runtime.
var unsafeThrowException = function ($1) {
    return Effect_Unsafe.unsafePerformEffect(Effect_Exception.throwException($1));
};

// | Defined as `unsafeThrowException <<< error`.
var unsafeThrow = function ($2) {
    return unsafeThrowException(Effect_Exception.error($2));
};
export {
    unsafeThrowException,
    unsafeThrow
};
