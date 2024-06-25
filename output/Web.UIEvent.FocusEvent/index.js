// Generated by purs version 0.15.15
import * as $foreign from "./foreign.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Nullable from "../Data.Nullable/index.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
import * as Web_Internal_FFI from "../Web.Internal.FFI/index.js";
var toUIEvent = Unsafe_Coerce.unsafeCoerce;
var toEvent = Unsafe_Coerce.unsafeCoerce;
var relatedTarget = /* #__PURE__ */ Data_Functor.map(Data_Functor.functorFn)(Data_Nullable.toMaybe)($foreign["_relatedTarget"]);
var fromUIEvent = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("FocusEvent");
var fromEvent = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("FocusEvent");
export {
    fromUIEvent,
    fromEvent,
    toUIEvent,
    toEvent,
    relatedTarget
};
