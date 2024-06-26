import * as $foreign from "./foreign.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
import * as Web_File_FileReader_ReadyState from "../Web.File.FileReader.ReadyState/index.js";
import * as Web_Internal_FFI from "../Web.Internal.FFI/index.js";
var fromJust = /* #__PURE__ */ Data_Maybe.fromJust();
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var readyState = function (fr) {
    return function __do() {
        var rs = $foreign.readyStateImpl(fr)();
        return fromJust(Web_File_FileReader_ReadyState.toEnumReadyState(rs));
    };
};
var fromEventTarget = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("FileReader");
export {
    fileReader,
    error,
    result,
    abort,
    readAsText,
    readAsArrayBuffer,
    readAsDataURL
} from "./foreign.js";
export {
    fromEventTarget,
    toEventTarget,
    readyState
};
