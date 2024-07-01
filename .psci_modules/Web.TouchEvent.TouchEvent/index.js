import * as $foreign from "./foreign.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
import * as Web_Internal_FFI from "../Web.Internal.FFI/index.js";
var toUIEvent = Unsafe_Coerce.unsafeCoerce;
var toEvent = Unsafe_Coerce.unsafeCoerce;
var fromUIEvent = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("TouchEvent");
var fromEvent = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("TouchEvent");
export {
    touches,
    targetTouches,
    changedTouches,
    altKey,
    metaKey,
    ctrlKey,
    shiftKey
} from "./foreign.js";
export {
    fromUIEvent,
    fromEvent,
    toUIEvent,
    toEvent
};