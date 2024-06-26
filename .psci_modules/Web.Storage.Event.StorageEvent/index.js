import * as $foreign from "./foreign.js";
import * as Data_Nullable from "../Data.Nullable/index.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
import * as Web_Internal_FFI from "../Web.Internal.FFI/index.js";
var toEvent = Unsafe_Coerce.unsafeCoerce;
var storageArea = function ($1) {
    return Data_Nullable.toMaybe($foreign["_storageArea"]($1));
};
var oldValue = function ($2) {
    return Data_Nullable.toMaybe($foreign["_oldValue"]($2));
};
var newValue = function ($3) {
    return Data_Nullable.toMaybe($foreign["_newValue"]($3));
};
var key = function ($4) {
    return Data_Nullable.toMaybe($foreign["_key"]($4));
};
var fromEvent = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("StorageEvent");
export {
    url
} from "./foreign.js";
export {
    fromEvent,
    toEvent,
    key,
    oldValue,
    newValue,
    storageArea
};
