import * as $foreign from "./foreign.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
import * as Web_Internal_FFI from "../Web.Internal.FFI/index.js";
var toEvent = Unsafe_Coerce.unsafeCoerce;
var fromEvent = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HashChangeEvent");
export {
    oldURL,
    newURL
} from "./foreign.js";
export {
    fromEvent,
    toEvent
};