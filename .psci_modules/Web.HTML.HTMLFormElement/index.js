import * as $foreign from "./foreign.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
import * as Web_Internal_FFI from "../Web.Internal.FFI/index.js";
var toParentNode = Unsafe_Coerce.unsafeCoerce;
var toNonDocumentTypeChildNode = Unsafe_Coerce.unsafeCoerce;
var toNode = Unsafe_Coerce.unsafeCoerce;
var toHTMLElement = Unsafe_Coerce.unsafeCoerce;
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var toElement = Unsafe_Coerce.unsafeCoerce;
var toChildNode = Unsafe_Coerce.unsafeCoerce;
var fromParentNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLFormElement");
var fromNonDocumentTypeChildNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLFormElement");
var fromNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLFormElement");
var fromHTMLElement = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLFormElement");
var fromEventTarget = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLFormElement");
var fromElement = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLFormElement");
var fromChildNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLFormElement");
export {
    acceptCharset,
    setAcceptCharset,
    action,
    setAction,
    autocomplete,
    setAutocomplete,
    enctype,
    setEnctype,
    encoding,
    setEncoding,
    method,
    setMethod,
    name,
    setName,
    noValidate,
    setNoValidate,
    target,
    setTarget,
    length,
    submit,
    reset,
    checkValidity,
    reportValidity
} from "./foreign.js";
export {
    fromHTMLElement,
    fromElement,
    fromNode,
    fromChildNode,
    fromNonDocumentTypeChildNode,
    fromParentNode,
    fromEventTarget,
    toHTMLElement,
    toElement,
    toNode,
    toChildNode,
    toNonDocumentTypeChildNode,
    toParentNode,
    toEventTarget
};
