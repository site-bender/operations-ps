import * as $foreign from "./foreign.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
import * as Web_Internal_FFI from "../Web.Internal.FFI/index.js";
var Mouse = /* #__PURE__ */ (function () {
    function Mouse() {

    };
    Mouse.value = new Mouse();
    return Mouse;
})();
var Touch = /* #__PURE__ */ (function () {
    function Touch() {

    };
    Touch.value = new Touch();
    return Touch;
})();
var Pen = /* #__PURE__ */ (function () {
    function Pen() {

    };
    Pen.value = new Pen();
    return Pen;
})();
var toUIEvent = Unsafe_Coerce.unsafeCoerce;
var toMouseEvent = Unsafe_Coerce.unsafeCoerce;
var toEvent = Unsafe_Coerce.unsafeCoerce;
var pointerType = function (e) {
    var v = $foreign.pointerTypeImpl(e);
    if (v === "pen") {
        return Pen.value;
    };
    if (v === "touch") {
        return Touch.value;
    };
    return Mouse.value;
};
var fromUIEvent = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("PointerEvent");
var fromMouseEvent = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("PointerEvent");
var fromEvent = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("PointerEvent");
export {
    altitudeAngle,
    azimuthAngle,
    getCoalescedEvents,
    getPredictedEvents,
    height,
    isPrimary,
    pointerId,
    pressure,
    tangentialPressure,
    tiltX,
    tiltY,
    twist,
    width
} from "./foreign.js";
export {
    Mouse,
    Touch,
    Pen,
    fromEvent,
    fromMouseEvent,
    fromUIEvent,
    pointerType,
    toEvent,
    toMouseEvent,
    toUIEvent
};
