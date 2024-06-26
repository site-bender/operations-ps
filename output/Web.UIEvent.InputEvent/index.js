// Generated by purs version 0.15.15
import * as $foreign from "./foreign.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Nullable from "../Data.Nullable/index.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
import * as Web_Internal_FFI from "../Web.Internal.FFI/index.js";
import * as Web_UIEvent_InputEvent_InputType from "../Web.UIEvent.InputEvent.InputType/index.js";
var toUIEvent = Unsafe_Coerce.unsafeCoerce;
var toEvent = Unsafe_Coerce.unsafeCoerce;
var inputType = function ($2) {
    return Web_UIEvent_InputEvent_InputType.parse($foreign["_inputType"]($2));
};
var fromUIEvent = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("InputEvent");
var fromEvent = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("InputEvent");
var data_ = /* #__PURE__ */ Data_Functor.map(Data_Functor.functorFn)(Data_Nullable.toMaybe)($foreign["_data_"]);
export {
    isComposing
} from "./foreign.js";
export {
    fromEvent,
    fromUIEvent,
    toEvent,
    toUIEvent,
    data_,
    inputType
};
