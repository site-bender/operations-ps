import * as $foreign from "./foreign.js";
import * as Data_Enum from "../Data.Enum/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Nullable from "../Data.Nullable/index.js";
import * as Effect from "../Effect/index.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
import * as Web_DOM_Internal_Types from "../Web.DOM.Internal.Types/index.js";
import * as Web_DOM_NodeType from "../Web.DOM.NodeType/index.js";
import * as Web_Internal_FFI from "../Web.Internal.FFI/index.js";
var map = /* #__PURE__ */ Data_Functor.map(Effect.functorEffect);
var fromJust = /* #__PURE__ */ Data_Maybe.fromJust();
var toEnum = /* #__PURE__ */ Data_Enum.toEnum(Web_DOM_NodeType.boundedEnumNodeType);
var toEventTarget = Unsafe_Coerce.unsafeCoerce;

// | The previous sibling node, or Nothing if there is no previous sibling.
var previousSibling = /* #__PURE__ */ (function () {
    var $4 = map(Data_Nullable.toMaybe);
    return function ($5) {
        return $4($foreign["_previousSibling"]($5));
    };
})();

// | The parent node of the node.
var parentNode = /* #__PURE__ */ (function () {
    var $6 = map(Data_Nullable.toMaybe);
    return function ($7) {
        return $6($foreign["_parentNode"]($7));
    };
})();

// | The parent element of the node.
var parentElement = /* #__PURE__ */ (function () {
    var $8 = map(Data_Nullable.toMaybe);
    return function ($9) {
        return $8($foreign["_parentElement"]($9));
    };
})();

// | The document the node belongs to, unless the node is a document in which
// | case the value is Nothing.
var ownerDocument = /* #__PURE__ */ (function () {
    var $10 = map(Data_Nullable.toMaybe);
    return function ($11) {
        return $10($foreign["_ownerDocument"]($11));
    };
})();

// | If the node type is text, comment, or processing instruction this is
// | `Just` the node's data, or `Nothing` in all other cases.
var nodeValue = /* #__PURE__ */ (function () {
    var $12 = map(Data_Nullable.toMaybe);
    return function ($13) {
        return $12($foreign["_nodeValue"]($13));
    };
})();

// | The type of a node.
var nodeType = function () {
    return function ($14) {
        return fromJust(toEnum($foreign.nodeTypeIndex($14)));
    };
};

// | The next sibling node, or Nothing if there is no next sibling.
var nextSibling = /* #__PURE__ */ (function () {
    var $15 = map(Data_Nullable.toMaybe);
    return function ($16) {
        return $15($foreign["_nextSibling"]($16));
    };
})();
var lookupPrefix = function (p) {
    var $17 = map(Data_Nullable.toMaybe);
    var $18 = $foreign["_lookupPrefix"](p);
    return function ($19) {
        return $17($18($19));
    };
};
var lookupNamespaceURI = function (ns) {
    var $20 = map(Data_Nullable.toMaybe);
    var $21 = $foreign["_lookupNamespaceURI"](ns);
    return function ($22) {
        return $20($21($22));
    };
};

// | The last child of the node, or Nothing if the node has no children.
var lastChild = /* #__PURE__ */ (function () {
    var $23 = map(Data_Nullable.toMaybe);
    return function ($24) {
        return $23($foreign["_lastChild"]($24));
    };
})();
var fromEventTarget = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("Node");

// | The first child of the node, or Nothing if the node has no children.
var firstChild = /* #__PURE__ */ (function () {
    var $25 = map(Data_Nullable.toMaybe);
    return function ($26) {
        return $25($foreign["_firstChild"]($26));
    };
})();
export {
    nodeTypeIndex,
    nodeName,
    baseURI,
    hasChildNodes,
    childNodes,
    setNodeValue,
    textContent,
    setTextContent,
    normalize,
    clone,
    deepClone,
    isEqualNode,
    compareDocumentPositionBits,
    contains,
    isDefaultNamespace,
    insertBefore,
    appendChild,
    replaceChild,
    removeChild
} from "./foreign.js";
export {
    fromEventTarget,
    toEventTarget,
    nodeType,
    ownerDocument,
    parentNode,
    parentElement,
    firstChild,
    lastChild,
    previousSibling,
    nextSibling,
    nodeValue,
    lookupPrefix,
    lookupNamespaceURI
};
