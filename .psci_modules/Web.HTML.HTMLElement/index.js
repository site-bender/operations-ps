import * as $foreign from "./foreign.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Nullable from "../Data.Nullable/index.js";
import * as Effect from "../Effect/index.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
var toParentNode = Unsafe_Coerce.unsafeCoerce;
var toNonDocumentTypeChildNode = Unsafe_Coerce.unsafeCoerce;
var toNode = Unsafe_Coerce.unsafeCoerce;
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var toElement = Unsafe_Coerce.unsafeCoerce;
var toChildNode = Unsafe_Coerce.unsafeCoerce;
var offsetParent = /* #__PURE__ */ (function () {
    var $2 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    return function ($3) {
        return $2($foreign["_offsetParent"]($3));
    };
})();
var fromParentNode = function (x) {
    return $foreign["_read"](Data_Maybe.Nothing.value, Data_Maybe.Just.create, x);
};
var fromNonDocumentTypeChildNode = function (x) {
    return $foreign["_read"](Data_Maybe.Nothing.value, Data_Maybe.Just.create, x);
};
var fromNode = function (x) {
    return $foreign["_read"](Data_Maybe.Nothing.value, Data_Maybe.Just.create, x);
};
var fromEventTarget = function (x) {
    return $foreign["_read"](Data_Maybe.Nothing.value, Data_Maybe.Just.create, x);
};
var fromElement = function (x) {
    return $foreign["_read"](Data_Maybe.Nothing.value, Data_Maybe.Just.create, x);
};
var fromChildNode = function (x) {
    return $foreign["_read"](Data_Maybe.Nothing.value, Data_Maybe.Just.create, x);
};
export {
    title,
    setTitle,
    lang,
    setLang,
    dir,
    setDir,
    hidden,
    setHidden,
    tabIndex,
    setTabIndex,
    draggable,
    setDraggable,
    contentEditable,
    setContentEditable,
    isContentEditable,
    spellcheck,
    setSpellcheck,
    click,
    focus,
    blur,
    offsetTop,
    offsetLeft,
    offsetWidth,
    offsetHeight
} from "./foreign.js";
export {
    fromElement,
    fromNode,
    fromChildNode,
    fromNonDocumentTypeChildNode,
    fromParentNode,
    fromEventTarget,
    toElement,
    toNode,
    toChildNode,
    toNonDocumentTypeChildNode,
    toParentNode,
    toEventTarget,
    offsetParent
};
