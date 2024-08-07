// Generated by purs version 0.15.15
import * as $foreign from "./foreign.js";
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Effect from "../Effect/index.js";
var pure = /* #__PURE__ */ Control_Applicative.pure(Effect.applicativeEffect);
var map = /* #__PURE__ */ Data_Functor.map(Effect.functorEffect);
var $$try = function (action) {
    return $foreign.catchException(function ($3) {
        return pure(Data_Either.Left.create($3));
    })(map(Data_Either.Right.create)(action));
};
var $$throw = function ($4) {
    return $foreign.throwException($foreign.error($4));
};
var stack = /* #__PURE__ */ (function () {
    return $foreign.stackImpl(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
})();
var showError = {
    show: $foreign.showErrorImpl
};
export {
    catchException,
    error,
    errorWithCause,
    errorWithName,
    message,
    name,
    throwException
} from "./foreign.js";
export {
    stack,
    $$throw as throw,
    $$try as try,
    showError
};
//# sourceMappingURL=index.js.map
