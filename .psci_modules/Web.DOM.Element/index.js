import * as $foreign from "./foreign.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Nullable from "../Data.Nullable/index.js";
import * as Data_Show from "../Data.Show/index.js";
import * as Effect from "../Effect/index.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
import * as Web_DOM_Internal_Types from "../Web.DOM.Internal.Types/index.js";
import * as Web_DOM_ParentNode from "../Web.DOM.ParentNode/index.js";
import * as Web_DOM_ShadowRoot from "../Web.DOM.ShadowRoot/index.js";
import * as Web_Internal_FFI from "../Web.Internal.FFI/index.js";
var show = /* #__PURE__ */ Data_Show.show(Web_DOM_ShadowRoot.showShadowRootMode);
var map = /* #__PURE__ */ Data_Functor.map(Effect.functorEffect);
var toParentNode = Unsafe_Coerce.unsafeCoerce;
var toNonDocumentTypeChildNode = Unsafe_Coerce.unsafeCoerce;
var toNode = Unsafe_Coerce.unsafeCoerce;
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var toChildNode = Unsafe_Coerce.unsafeCoerce;
var prefix = function ($3) {
    return Data_Nullable.toMaybe($foreign["_prefix"]($3));
};
var namespaceURI = function ($4) {
    return Data_Nullable.toMaybe($foreign["_namespaceURI"]($4));
};
var initToProps = function (init) {
    return {
        mode: show(init.mode),
        delegatesFocus: init.delegatesFocus
    };
};
var getElementsByTagNameNS = function ($5) {
    return $foreign["_getElementsByTagNameNS"](Data_Nullable.toNullable($5));
};
var getAttribute = function (attr) {
    var $6 = map(Data_Nullable.toMaybe);
    var $7 = $foreign["_getAttribute"](attr);
    return function ($8) {
        return $6($7($8));
    };
};
var fromParentNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("Element");
var fromNonDocumentTypeChildNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("Element");
var fromNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("Element");
var fromEventTarget = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("Element");
var fromChildNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("Element");
var closest = function (qs) {
    var $9 = map(Data_Nullable.toMaybe);
    var $10 = $foreign["_closest"](qs);
    return function ($11) {
        return $9($10($11));
    };
};
var attachShadow = function ($12) {
    return $foreign["_attachShadow"](initToProps($12));
};
export {
    localName,
    tagName,
    id,
    setId,
    className,
    classList,
    setClassName,
    getElementsByTagName,
    getElementsByClassName,
    setAttribute,
    hasAttribute,
    removeAttribute,
    matches,
    scrollTop,
    setScrollTop,
    scrollLeft,
    setScrollLeft,
    scrollWidth,
    scrollHeight,
    clientTop,
    clientLeft,
    clientWidth,
    clientHeight,
    getBoundingClientRect
} from "./foreign.js";
export {
    fromNode,
    fromChildNode,
    fromNonDocumentTypeChildNode,
    fromParentNode,
    fromEventTarget,
    toNode,
    toChildNode,
    toNonDocumentTypeChildNode,
    toParentNode,
    toEventTarget,
    namespaceURI,
    prefix,
    getElementsByTagNameNS,
    getAttribute,
    closest,
    attachShadow
};
