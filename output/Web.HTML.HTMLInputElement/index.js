// Generated by purs version 0.15.15
import * as $foreign from "./foreign.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Nullable from "../Data.Nullable/index.js";
import * as Effect from "../Effect/index.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
import * as Web_HTML_SelectionMode from "../Web.HTML.SelectionMode/index.js";
import * as Web_Internal_FFI from "../Web.Internal.FFI/index.js";
var map = /* #__PURE__ */ Data_Functor.map(Effect.functorEffect);
var toParentNode = Unsafe_Coerce.unsafeCoerce;
var toNonDocumentTypeChildNode = Unsafe_Coerce.unsafeCoerce;
var toNode = Unsafe_Coerce.unsafeCoerce;
var toHTMLElement = Unsafe_Coerce.unsafeCoerce;
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var toElement = Unsafe_Coerce.unsafeCoerce;
var toChildNode = Unsafe_Coerce.unsafeCoerce;
var stepUp$prime = $foreign.stepUpBy;
var stepUp = /* #__PURE__ */ stepUp$prime(1);
var stepDown$prime = $foreign.stepDownBy;
var stepDown = /* #__PURE__ */ stepDown$prime(1);
var setRangeText$prime = function (rpl) {
    return function (s) {
        return function (e) {
            return function (mode) {
                return function (area) {
                    return function () {
                        return $foreign["_setRangeText"](rpl, s, e, Web_HTML_SelectionMode.print(mode), area);
                    };
                };
            };
        };
    };
};
var list = /* #__PURE__ */ (function () {
    var $2 = map(Data_Nullable.toMaybe);
    return function ($3) {
        return $2($foreign["_list"]($3));
    };
})();
var fromParentNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLInputElement");
var fromNonDocumentTypeChildNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLInputElement");
var fromNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLInputElement");
var fromHTMLElement = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLInputElement");
var fromEventTarget = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLInputElement");
var fromElement = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLInputElement");
var fromChildNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLInputElement");
var form = /* #__PURE__ */ (function () {
    var $4 = map(Data_Nullable.toMaybe);
    return function ($5) {
        return $4($foreign["_form"]($5));
    };
})();
var files = /* #__PURE__ */ (function () {
    var $6 = map(Data_Nullable.toMaybe);
    return function ($7) {
        return $6($foreign["_files"]($7));
    };
})();
export {
    accept,
    setAccept,
    alt,
    setAlt,
    autocomplete,
    setAutocomplete,
    autofocus,
    setAutofocus,
    defaultChecked,
    setDefaultChecked,
    checked,
    setChecked,
    dirName,
    setDirName,
    disabled,
    setDisabled,
    formAction,
    setFormAction,
    formEnctype,
    setFormEnctype,
    formMethod,
    setFormMethod,
    formNoValidate,
    setFormNoValidate,
    formTarget,
    setFormTarget,
    height,
    setHeight,
    indeterminate,
    setIndeterminate,
    max,
    setMax,
    maxLength,
    setMaxLength,
    min,
    setMin,
    minLength,
    setMinLength,
    multiple,
    setMultiple,
    name,
    setName,
    pattern,
    setPattern,
    placeholder,
    setPlaceholder,
    readOnly,
    setReadOnly,
    required,
    setRequired,
    size,
    setSize,
    src,
    setSrc,
    step,
    setStep,
    type_,
    setType,
    defaultValue,
    setDefaultValue,
    value,
    setValue,
    valueAsDate,
    setValueAsDate,
    valueAsNumber,
    setValueAsNumber,
    width,
    setWidth,
    willValidate,
    validity,
    validationMessage,
    checkValidity,
    reportValidity,
    setCustomValidity,
    labels,
    select,
    selectionStart,
    setSelectionStart,
    selectionEnd,
    setSelectionEnd,
    selectionDirection,
    setSelectionDirection,
    setRangeText,
    setSelectionRange
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
    files,
    list,
    stepUp,
    stepUp$prime,
    stepDown,
    stepDown$prime,
    setRangeText$prime
};
