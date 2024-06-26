// | This module provides functions for working with object properties
// | of Javascript objects.
import * as $foreign from "./foreign.js";
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Monad_Except_Trans from "../Control.Monad.Except.Trans/index.js";
import * as Data_Boolean from "../Data.Boolean/index.js";
import * as Foreign from "../Foreign/index.js";

// | Get an array of the properties defined on a foreign value
var keys = function (dictMonad) {
    var fail = Foreign.fail(dictMonad);
    var pure = Control_Applicative.pure(Control_Monad_Except_Trans.applicativeExceptT(dictMonad));
    return function (value) {
        if (Foreign.isNull(value)) {
            return fail(new Foreign.TypeMismatch("object", "null"));
        };
        if (Foreign.isUndefined(value)) {
            return fail(new Foreign.TypeMismatch("object", "undefined"));
        };
        if (Foreign.typeOf(value) === "object") {
            return pure($foreign.unsafeKeys(value));
        };
        if (Data_Boolean.otherwise) {
            return fail(new Foreign.TypeMismatch("object", Foreign.typeOf(value)));
        };
        throw new Error("Failed pattern match at Foreign.Keys (line 17, column 1 - line 17, column 93): " + [ value.constructor.name ]);
    };
};
export {
    keys
};
