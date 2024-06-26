import * as $foreign from "./foreign.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
var Open = /* #__PURE__ */ (function () {
    function Open() {

    };
    Open.value = new Open();
    return Open;
})();
var Closed = /* #__PURE__ */ (function () {
    function Closed() {

    };
    Closed.value = new Closed();
    return Closed;
})();
var toNode = Unsafe_Coerce.unsafeCoerce;
var showShadowRootMode = {
    show: function (v) {
        if (v instanceof Open) {
            return "open";
        };
        if (v instanceof Closed) {
            return "closed";
        };
        throw new Error("Failed pattern match at Web.DOM.ShadowRoot (line 22, column 1 - line 24, column 25): " + [ v.constructor.name ]);
    }
};
var mode = /* #__PURE__ */ (function () {
    var modeFromString = function (v) {
        if (v === "open") {
            return new Data_Maybe.Just(Open.value);
        };
        if (v === "closed") {
            return new Data_Maybe.Just(Closed.value);
        };
        return Data_Maybe.Nothing.value;
    };
    return function ($5) {
        return modeFromString($foreign["_mode"]($5));
    };
})();
export {
    host
} from "./foreign.js";
export {
    Open,
    Closed,
    toNode,
    mode,
    showShadowRootMode
};
