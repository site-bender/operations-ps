// | This module defines an effect, actions and handlers for working
// | with JavaScript exceptions.
import * as $foreign from "./foreign.js";
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Effect from "../Effect/index.js";
var pure = /* #__PURE__ */ Control_Applicative.pure(Effect.applicativeEffect);
var map = /* #__PURE__ */ Data_Functor.map(Effect.functorEffect);

// | Runs an Eff and returns eventual Exceptions as a `Left` value. If the
// | computation succeeds the result gets wrapped in a `Right`.
// |
// | For example:
// |
// | ```purescript
// | main :: Effect Unit
// | main = do
// |   result <- try (readTextFile UTF8 "README.md")
// |   case result of
// |     Right lines ->
// |       Console.log ("README: \n" <> lines )
// |     Left error ->
// |       Console.error ("Couldn't open README.md. Error was: " <> show error)
// | ```
var $$try = function (action) {
    return $foreign.catchException(function ($3) {
        return pure(Data_Either.Left.create($3));
    })(map(Data_Either.Right.create)(action));
};

// | A shortcut allowing you to throw an error in one step. Defined as
// | `throwException <<< error`.
var $$throw = function ($4) {
    return $foreign.throwException($foreign.error($4));
};

// | Get the stack trace from a JavaScript error
var stack = /* #__PURE__ */ (function () {
    return $foreign.stackImpl(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
})();
var showError = {
    show: $foreign.showErrorImpl
};
export {
    error,
    message,
    name,
    throwException,
    catchException
} from "./foreign.js";
export {
    stack,
    $$throw as throw,
    $$try as try,
    showError
};
