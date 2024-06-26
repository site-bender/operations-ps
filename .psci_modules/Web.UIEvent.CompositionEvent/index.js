import * as $foreign from "./foreign.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
import * as Web_Internal_FFI from "../Web.Internal.FFI/index.js";
var toUIEvent = Unsafe_Coerce.unsafeCoerce;
var toEvent = Unsafe_Coerce.unsafeCoerce;
var fromUIEvent = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("CompositionEvent");
var fromEvent = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("CompositionEvent");
export {
    data_
} from "./foreign.js";
export {
    fromUIEvent,
    fromEvent,
    toUIEvent,
    toEvent
};
