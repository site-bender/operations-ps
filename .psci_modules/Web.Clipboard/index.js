import * as $foreign from "./foreign.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
import * as Web_Internal_FFI from "../Web.Internal.FFI/index.js";
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var fromEventTarget = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("Clipboard");
export {
    clipboard,
    readText,
    writeText
} from "./foreign.js";
export {
    toEventTarget,
    fromEventTarget
};
