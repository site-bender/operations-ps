import * as $foreign from "./foreign.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Nullable from "../Data.Nullable/index.js";
import * as Effect from "../Effect/index.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
import * as Web_Internal_FFI from "../Web.Internal.FFI/index.js";
var map = /* #__PURE__ */ Data_Functor.map(Effect.functorEffect);
var toParentNode = Unsafe_Coerce.unsafeCoerce;
var toNonDocumentTypeChildNode = Unsafe_Coerce.unsafeCoerce;
var toNode = Unsafe_Coerce.unsafeCoerce;
var toHTMLElement = Unsafe_Coerce.unsafeCoerce;
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var toElement = Unsafe_Coerce.unsafeCoerce;
var toChildNode = Unsafe_Coerce.unsafeCoerce;
var fromParentNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLLabelElement");
var fromNonDocumentTypeChildNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLLabelElement");
var fromNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLLabelElement");
var fromHTMLElement = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLLabelElement");
var fromEventTarget = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLLabelElement");
var fromElement = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLLabelElement");
var fromChildNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLLabelElement");
var form = /* #__PURE__ */ (function () {
    var $2 = map(Data_Nullable.toMaybe);
    return function ($3) {
        return $2($foreign["_form"]($3));
    };
})();
var control = /* #__PURE__ */ (function () {
    var $4 = map(Data_Nullable.toMaybe);
    return function ($5) {
        return $4($foreign["_control"]($5));
    };
})();
export {
    htmlFor,
    setHtmlFor
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
    form,
    control
};