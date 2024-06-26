import * as $foreign from "./foreign.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Nullable from "../Data.Nullable/index.js";
import * as Effect from "../Effect/index.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
import * as Web_Internal_FFI from "../Web.Internal.FFI/index.js";
var toParentNode = Unsafe_Coerce.unsafeCoerce;
var toNonDocumentTypeChildNode = Unsafe_Coerce.unsafeCoerce;
var toNode = Unsafe_Coerce.unsafeCoerce;
var toHTMLElement = Unsafe_Coerce.unsafeCoerce;
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var toElement = Unsafe_Coerce.unsafeCoerce;
var toChildNode = Unsafe_Coerce.unsafeCoerce;
var fromParentNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLFieldSetElement");
var fromNonDocumentTypeChildNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLFieldSetElement");
var fromNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLFieldSetElement");
var fromHTMLElement = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLFieldSetElement");
var fromEventTarget = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLFieldSetElement");
var fromElement = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLFieldSetElement");
var fromChildNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLFieldSetElement");
var form = /* #__PURE__ */ (function () {
    var $2 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    return function ($3) {
        return $2($foreign["_form"]($3));
    };
})();
export {
    disabled,
    setDisabled,
    name,
    setName,
    type_,
    setType,
    willValidate,
    validity,
    validationMessage,
    checkValidity,
    reportValidity,
    setCustomValidity
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
    toEventTarget,
    form
};
