import * as $foreign from "./foreign.js";
import * as Data_Nullable from "../Data.Nullable/index.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
import * as Web_Internal_FFI from "../Web.Internal.FFI/index.js";
var toEvent = Unsafe_Coerce.unsafeCoerce;
var fromEvent = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("ClipboardEvent");
var clipboardData = function ($1) {
    return Data_Nullable.toMaybe($foreign["_clipboardData"]($1));
};
export {
    fromEvent,
    toEvent,
    clipboardData
};
