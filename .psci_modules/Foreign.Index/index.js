// | This module defines a type class for types which act like
// | _property indices_.
import * as $foreign from "./foreign.js";
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Control_Monad_Except_Trans from "../Control.Monad.Except.Trans/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Foreign from "../Foreign/index.js";
var unsafeReadProp = function (dictMonad) {
    var fail = Foreign.fail(dictMonad);
    var pure = Control_Applicative.pure(Control_Monad_Except_Trans.applicativeExceptT(dictMonad));
    return function (k) {
        return function (value) {
            return $foreign.unsafeReadPropImpl(fail(new Foreign.TypeMismatch("object", Foreign.typeOf(value))), pure, k, value);
        };
    };
};

// | Attempt to read a value from a foreign value property
var readProp = function (dictMonad) {
    return unsafeReadProp(dictMonad);
};

// | Attempt to read a value from a foreign value at the specified numeric index
var readIndex = function (dictMonad) {
    return unsafeReadProp(dictMonad);
};
var ix = function (dict) {
    return dict.ix;
};
var index = function (dict) {
    return dict.index;
};
var indexableExceptT = function (dictMonad) {
    var bindFlipped = Control_Bind.bindFlipped(Control_Monad_Except_Trans.bindExceptT(dictMonad));
    return {
        ix: function (dictIndex) {
            var index1 = index(dictIndex);
            return function (f) {
                return function (i) {
                    return bindFlipped(Data_Function.flip(index1)(i))(f);
                };
            };
        }
    };
};
var indexableForeign = function (dictMonad) {
    return {
        ix: function (dictIndex) {
            return index(dictIndex);
        }
    };
};
var hasPropertyImpl = function (v) {
    return function (v1) {
        if (Foreign.isNull(v1)) {
            return false;
        };
        if (Foreign.isUndefined(v1)) {
            return false;
        };
        if (Foreign.typeOf(v1) === "object" || Foreign.typeOf(v1) === "function") {
            return $foreign.unsafeHasProperty(v, v1);
        };
        return false;
    };
};
var hasProperty = function (dict) {
    return dict.hasProperty;
};
var hasOwnPropertyImpl = function (v) {
    return function (v1) {
        if (Foreign.isNull(v1)) {
            return false;
        };
        if (Foreign.isUndefined(v1)) {
            return false;
        };
        if (Foreign.typeOf(v1) === "object" || Foreign.typeOf(v1) === "function") {
            return $foreign.unsafeHasOwnProperty(v, v1);
        };
        return false;
    };
};
var indexInt = function (dictMonad) {
    return {
        index: Data_Function.flip(readIndex(dictMonad)),
        hasProperty: hasPropertyImpl,
        hasOwnProperty: hasOwnPropertyImpl,
        errorAt: Foreign.ErrorAtIndex.create
    };
};
var indexString = function (dictMonad) {
    return {
        index: Data_Function.flip(readProp(dictMonad)),
        hasProperty: hasPropertyImpl,
        hasOwnProperty: hasOwnPropertyImpl,
        errorAt: Foreign.ErrorAtProperty.create
    };
};
var hasOwnProperty = function (dict) {
    return dict.hasOwnProperty;
};
var errorAt = function (dict) {
    return dict.errorAt;
};
export {
    readProp,
    readIndex,
    ix,
    index,
    hasProperty,
    hasOwnProperty,
    errorAt,
    indexString,
    indexInt,
    indexableForeign,
    indexableExceptT
};
