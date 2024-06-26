import * as $foreign from "./foreign.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
import * as Web_Internal_FFI from "../Web.Internal.FFI/index.js";
var toNode = Unsafe_Coerce.unsafeCoerce;
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var toChildNode = Unsafe_Coerce.unsafeCoerce;
var fromNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("DocumentType");
var fromEventTarget = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("DocumentType");
var fromChildNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("DocumentType");
export {
    name,
    publicId,
    systemId
} from "./foreign.js";
export {
    fromNode,
    fromChildNode,
    fromEventTarget,
    toNode,
    toChildNode,
    toEventTarget
};
