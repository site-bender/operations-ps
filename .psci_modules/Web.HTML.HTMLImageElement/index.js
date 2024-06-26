import * as $foreign from "./foreign.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Nullable from "../Data.Nullable/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect_Uncurried from "../Effect.Uncurried/index.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
import * as Web_HTML_HTMLImageElement_CORSMode from "../Web.HTML.HTMLImageElement.CORSMode/index.js";
import * as Web_HTML_HTMLImageElement_DecodingHint from "../Web.HTML.HTMLImageElement.DecodingHint/index.js";
import * as Web_HTML_HTMLImageElement_Laziness from "../Web.HTML.HTMLImageElement.Laziness/index.js";
import * as Web_Internal_FFI from "../Web.Internal.FFI/index.js";
var map = /* #__PURE__ */ Data_Functor.map(Effect.functorEffect);
var toParentNode = Unsafe_Coerce.unsafeCoerce;
var toNonDocumentTypeChildNode = Unsafe_Coerce.unsafeCoerce;
var toNode = Unsafe_Coerce.unsafeCoerce;
var toHTMLElement = Unsafe_Coerce.unsafeCoerce;
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var toElement = Unsafe_Coerce.unsafeCoerce;
var toChildNode = Unsafe_Coerce.unsafeCoerce;
var setLoading = function (laziness) {
    return Effect_Uncurried.runEffectFn2($foreign["_setLoading"])(Web_HTML_HTMLImageElement_Laziness.print(laziness));
};
var setDecoding = function (hint) {
    return Effect_Uncurried.runEffectFn2($foreign["_setDecoding"])(Web_HTML_HTMLImageElement_DecodingHint.print(hint));
};
var setCrossOrigin = function (mode) {
    return Effect_Uncurried.runEffectFn2($foreign["_setCrossOrigin"])(Web_HTML_HTMLImageElement_CORSMode.print(mode));
};
var loading = /* #__PURE__ */ (function () {
    var $3 = map((function () {
        var $6 = Data_Maybe.fromMaybe(Web_HTML_HTMLImageElement_Laziness.Eager.value);
        return function ($7) {
            return $6(Web_HTML_HTMLImageElement_Laziness.parse($7));
        };
    })());
    var $4 = Effect_Uncurried.runEffectFn1($foreign["_loading"]);
    return function ($5) {
        return $3($4($5));
    };
})();
var fromParentNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLImageElement");
var fromNonDocumentTypeChildNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLImageElement");
var fromNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLImageElement");
var fromHTMLElement = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLImageElement");
var fromEventTarget = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLImageElement");
var fromElement = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLImageElement");
var fromChildNode = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("HTMLImageElement");
var decoding = /* #__PURE__ */ (function () {
    var $8 = map((function () {
        var $11 = Data_Maybe.fromMaybe(Web_HTML_HTMLImageElement_DecodingHint.Auto.value);
        return function ($12) {
            return $11(Web_HTML_HTMLImageElement_DecodingHint.parse($12));
        };
    })());
    var $9 = Effect_Uncurried.runEffectFn1($foreign["_decoding"]);
    return function ($10) {
        return $8($9($10));
    };
})();
var crossOrigin = /* #__PURE__ */ (function () {
    var $13 = map(Control_Bind.composeKleisliFlipped(Data_Maybe.bindMaybe)(Web_HTML_HTMLImageElement_CORSMode.parse)(Data_Nullable.toMaybe));
    var $14 = Effect_Uncurried.runEffectFn1($foreign["_crossOrigin"]);
    return function ($15) {
        return $13($14($15));
    };
})();
var create$prime = $foreign.createWithDimensions;
export {
    create,
    alt,
    setAlt,
    src,
    setSrc,
    srcset,
    setSrcset,
    currentSrc,
    sizes,
    setSizes,
    useMap,
    setUseMap,
    isMap,
    setIsMap,
    width,
    setWidth,
    height,
    setHeight,
    naturalWidth,
    naturalHeight,
    referrerPolicy,
    setReferrerPolicy,
    complete
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
    create$prime,
    crossOrigin,
    setCrossOrigin,
    decoding,
    setDecoding,
    loading,
    setLoading
};
