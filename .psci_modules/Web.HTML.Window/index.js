import * as $foreign from "./foreign.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Nullable from "../Data.Nullable/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Effect from "../Effect/index.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
import * as Web_Internal_FFI from "../Web.Internal.FFI/index.js";
var map = /* #__PURE__ */ Data_Functor.map(Effect.functorEffect);
var compare = /* #__PURE__ */ Data_Ord.compare(Data_Ord.ordInt);
var RequestIdleCallbackId = function (x) {
    return x;
};
var RequestAnimationFrameId = function (x) {
    return x;
};
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var promptDefault = function (msg) {
    return function (defaultText) {
        return function (window) {
            return map(Data_Nullable.toMaybe)($foreign["_prompt"](msg)(defaultText)(window));
        };
    };
};
var prompt = function (msg) {
    return function (window) {
        return map(Data_Nullable.toMaybe)($foreign["_prompt"](msg)("")(window));
    };
};
var opener = function (window) {
    return map(Data_Nullable.toMaybe)($foreign["_opener"](window));
};
var open = function (url$prime) {
    return function (name) {
        return function (features) {
            return function (window) {
                return map(Data_Nullable.toMaybe)($foreign["_open"](url$prime)(name)(features)(window));
            };
        };
    };
};
var fromEventTarget = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("Window");
var eqRequestIdleCallbackId = {
    eq: function (x) {
        return function (y) {
            return x === y;
        };
    }
};
var ordRequestIdleCallbackId = {
    compare: function (x) {
        return function (y) {
            return compare(x)(y);
        };
    },
    Eq0: function () {
        return eqRequestIdleCallbackId;
    }
};
var eqRequestAnimationFrameId = {
    eq: function (x) {
        return function (y) {
            return x === y;
        };
    }
};
var ordRequestAnimationFrameId = {
    compare: function (x) {
        return function (y) {
            return compare(x)(y);
        };
    },
    Eq0: function () {
        return eqRequestAnimationFrameId;
    }
};
export {
    document,
    navigator,
    location,
    history,
    innerWidth,
    innerHeight,
    alert,
    confirm,
    moveBy,
    moveTo,
    close,
    outerHeight,
    outerWidth,
    print,
    resizeBy,
    resizeTo,
    screenX,
    screenY,
    scroll,
    scrollBy,
    scrollX,
    scrollY,
    localStorage,
    sessionStorage,
    requestAnimationFrame,
    cancelAnimationFrame,
    requestIdleCallback,
    cancelIdleCallback,
    parent
} from "./foreign.js";
export {
    toEventTarget,
    fromEventTarget,
    open,
    prompt,
    promptDefault,
    opener,
    eqRequestAnimationFrameId,
    ordRequestAnimationFrameId,
    eqRequestIdleCallbackId,
    ordRequestIdleCallbackId
};
