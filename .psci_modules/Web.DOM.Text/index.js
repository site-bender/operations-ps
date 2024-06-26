import * as $foreign from "./foreign.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
import * as Web_Internal_FFI from "../Web.Internal.FFI/index.js";
var toNonDocumentTypeChildNode = Unsafe_Coerce.unsafeCoerce;
var toNode = Unsafe_Coerce.unsafeCoerce;
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var toChildNode = Unsafe_Coerce.unsafeCoerce;
var toCharacterData = Unsafe_Coerce.unsafeCoerce;
var fromNonDocumentTypeChildNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("Text");
var fromNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("Text");
var fromEventTarget = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("Text");
var fromChildNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("Text");
var fromCharacterData = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("Text");
export {
    splitText,
    wholeText
} from "./foreign.js";
export {
    fromCharacterData,
    fromNode,
    fromChildNode,
    fromNonDocumentTypeChildNode,
    fromEventTarget,
    toNode,
    toCharacterData,
    toChildNode,
    toNonDocumentTypeChildNode,
    toEventTarget
};
