import * as $foreign from "./foreign.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Nullable from "../Data.Nullable/index.js";
import * as Effect from "../Effect/index.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
import * as Web_HTML_HTMLDocument_ReadyState from "../Web.HTML.HTMLDocument.ReadyState/index.js";
import * as Web_HTML_HTMLDocument_VisibilityState from "../Web.HTML.HTMLDocument.VisibilityState/index.js";
import * as Web_Internal_FFI from "../Web.Internal.FFI/index.js";
var map = /* #__PURE__ */ Data_Functor.map(Effect.functorEffect);
var visibilityState = function (doc) {
    return map((function () {
        var $2 = Data_Maybe.fromMaybe(Web_HTML_HTMLDocument_VisibilityState.Visible.value);
        return function ($3) {
            return $2(Web_HTML_HTMLDocument_VisibilityState.parse($3));
        };
    })())(function () {
        return $foreign["_visibilityState"](doc);
    });
};
var toParentNode = Unsafe_Coerce.unsafeCoerce;
var toNonElementParentNode = Unsafe_Coerce.unsafeCoerce;
var toNode = Unsafe_Coerce.unsafeCoerce;
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var toDocument = Unsafe_Coerce.unsafeCoerce;
var title = function (doc) {
    return function () {
        return $foreign["_title"](doc);
    };
};
var setTitle = function (newTitle) {
    return function (doc) {
        return function () {
            return $foreign["_setTitle"](newTitle, doc);
        };
    };
};
var referrer = function (doc) {
    return function () {
        return $foreign["_referrer"](doc);
    };
};
var readyState = function (doc) {
    return map((function () {
        var $4 = Data_Maybe.fromMaybe(Web_HTML_HTMLDocument_ReadyState.Loading.value);
        return function ($5) {
            return $4(Web_HTML_HTMLDocument_ReadyState.parse($5));
        };
    })())(function () {
        return $foreign["_readyState"](doc);
    });
};
var head = function (doc) {
    return map(Data_Nullable.toMaybe)(function () {
        return $foreign["_head"](doc);
    });
};
var fromParentNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLDocument");
var fromNonElementParentNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLDocument");
var fromNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLDocument");
var fromEventTarget = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLDocument");
var fromDocument = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLDocument");
var documentElement = function (doc) {
    return map(Data_Nullable.toMaybe)(function () {
        return $foreign["_documentElement"](doc);
    });
};
var currentScript = function (doc) {
    return map(Data_Nullable.toMaybe)(function () {
        return $foreign["_currentScript"](doc);
    });
};
var body = function (doc) {
    return map(Data_Nullable.toMaybe)(function () {
        return $foreign["_body"](doc);
    });
};
var activeElement = function (doc) {
    return map(Data_Nullable.toMaybe)(function () {
        return $foreign["_activeElement"](doc);
    });
};
export {
    fromDocument,
    fromNode,
    fromParentNode,
    fromNonElementParentNode,
    fromEventTarget,
    toDocument,
    toNode,
    toParentNode,
    toNonElementParentNode,
    toEventTarget,
    documentElement,
    head,
    body,
    readyState,
    visibilityState,
    activeElement,
    currentScript,
    referrer,
    title,
    setTitle
};
