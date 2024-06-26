// | This module provides type definitions and implementations for the
// | `Document` interface, which is part of the W3C DOM API.
// |
// | The DOM API doesn't actually give you any way of getting hold of a
// | `Document` by itself. To do that, you will need to look at one of the
// | other APIs which build on the DOM API. For example, `window.document` is
// | part of the HTML5 API, and so the relevant binding can be found in
// | `Web.HTML.Window`, which is part of the `purescript-web-html` package.
import * as $foreign from "./foreign.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Nullable from "../Data.Nullable/index.js";
import * as Effect from "../Effect/index.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
import * as Web_Internal_FFI from "../Web.Internal.FFI/index.js";
var toParentNode = Unsafe_Coerce.unsafeCoerce;
var toNonElementParentNode = Unsafe_Coerce.unsafeCoerce;
var toNode = Unsafe_Coerce.unsafeCoerce;
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var getElementsByTagNameNS = function ($2) {
    return $foreign["_getElementsByTagNameNS"](Data_Nullable.toNullable($2));
};
var fromParentNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("Document");
var fromNonElementParentNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("Document");
var fromNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("Document");
var fromEventTarget = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("Document");
var documentElement = /* #__PURE__ */ (function () {
    var $3 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    return function ($4) {
        return $3($foreign["_documentElement"]($4));
    };
})();
var doctype = function ($5) {
    return Data_Nullable.toMaybe($foreign["_doctype"]($5));
};
var createElementNS = function ($6) {
    return $foreign["_createElementNS"](Data_Nullable.toNullable($6));
};
export {
    url,
    documentURI,
    origin,
    compatMode,
    characterSet,
    contentType,
    getElementsByTagName,
    getElementsByClassName,
    createElement,
    createDocumentFragment,
    createTextNode,
    createComment,
    createProcessingInstruction,
    importNode,
    adoptNode
} from "./foreign.js";
export {
    fromNode,
    fromParentNode,
    fromNonElementParentNode,
    fromEventTarget,
    toNode,
    toParentNode,
    toNonElementParentNode,
    toEventTarget,
    doctype,
    documentElement,
    getElementsByTagNameNS,
    createElementNS
};
