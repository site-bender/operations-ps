// Generated by purs version 0.15.15
import * as Effect_Exception from "../Effect.Exception/index.js";
import * as Effect_Unsafe from "../Effect.Unsafe/index.js";
var unsafeThrowException = function ($1) {
    return Effect_Unsafe.unsafePerformEffect(Effect_Exception.throwException($1));
};
var unsafeThrow = function ($2) {
    return unsafeThrowException(Effect_Exception.error($2));
};
export {
    unsafeThrowException,
    unsafeThrow
};
