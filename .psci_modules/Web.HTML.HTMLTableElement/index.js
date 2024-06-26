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
var tHead = /* #__PURE__ */ (function () {
    var $3 = map(Data_Nullable.toMaybe);
    return function ($4) {
        return $3($foreign["_tHead"]($4));
    };
})();
var tFoot = /* #__PURE__ */ (function () {
    var $5 = map(Data_Nullable.toMaybe);
    return function ($6) {
        return $5($foreign["_tFoot"]($6));
    };
})();
var setTHead = function ($7) {
    return $foreign["_setTHead"](Data_Nullable.toNullable($7));
};
var setTFoot = function ($8) {
    return $foreign["_setTFoot"](Data_Nullable.toNullable($8));
};
var setCaption = function ($9) {
    return $foreign["_setCaption"](Data_Nullable.toNullable($9));
};
var insertRow$prime = $foreign.insertRowAt;
var insertRow = /* #__PURE__ */ (function () {
    return insertRow$prime(-1 | 0);
})();
var fromParentNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLTableElement");
var fromNonDocumentTypeChildNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLTableElement");
var fromNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLTableElement");
var fromHTMLElement = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLTableElement");
var fromEventTarget = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLTableElement");
var fromElement = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLTableElement");
var fromChildNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLTableElement");
var caption = /* #__PURE__ */ (function () {
    var $10 = map(Data_Nullable.toMaybe);
    return function ($11) {
        return $10($foreign["_caption"]($11));
    };
})();
export {
    createCaption,
    deleteCaption,
    createTHead,
    deleteTHead,
    createTFoot,
    deleteTFoot,
    tBodies,
    createTBody,
    rows,
    deleteRow,
    border,
    setBorder
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
    caption,
    setCaption,
    tHead,
    setTHead,
    tFoot,
    setTFoot,
    insertRow,
    insertRow$prime
};
