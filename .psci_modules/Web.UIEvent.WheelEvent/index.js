import * as $foreign from "./foreign.js";
import * as Data_Enum from "../Data.Enum/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Ordering from "../Data.Ordering/index.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
import * as Web_Internal_FFI from "../Web.Internal.FFI/index.js";
var fromJust = /* #__PURE__ */ Data_Maybe.fromJust();
var Pixel = /* #__PURE__ */ (function () {
    function Pixel() {

    };
    Pixel.value = new Pixel();
    return Pixel;
})();
var Line = /* #__PURE__ */ (function () {
    function Line() {

    };
    Line.value = new Line();
    return Line;
})();
var Page = /* #__PURE__ */ (function () {
    function Page() {

    };
    Page.value = new Page();
    return Page;
})();
var toUIEvent = Unsafe_Coerce.unsafeCoerce;
var toMouseEvent = Unsafe_Coerce.unsafeCoerce;
var toEvent = Unsafe_Coerce.unsafeCoerce;
var toEnumDeltaMode = function (v) {
    if (v === 0) {
        return new Data_Maybe.Just(Pixel.value);
    };
    if (v === 1) {
        return new Data_Maybe.Just(Line.value);
    };
    if (v === 2) {
        return new Data_Maybe.Just(Page.value);
    };
    return Data_Maybe.Nothing.value;
};
var fromUIEvent = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("WheelEvent");
var fromMouseEvent = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("WheelEvent");
var fromEvent = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("WheelEvent");
var fromEnumDeltaMode = function (v) {
    if (v instanceof Pixel) {
        return 0;
    };
    if (v instanceof Line) {
        return 1;
    };
    if (v instanceof Page) {
        return 2;
    };
    throw new Error("Failed pattern match at Web.UIEvent.WheelEvent (line 91, column 3 - line 94, column 14): " + [ v.constructor.name ]);
};
var eqDeltaMode = {
    eq: function (x) {
        return function (y) {
            if (x instanceof Pixel && y instanceof Pixel) {
                return true;
            };
            if (x instanceof Line && y instanceof Line) {
                return true;
            };
            if (x instanceof Page && y instanceof Page) {
                return true;
            };
            return false;
        };
    }
};
var ordDeltaMode = {
    compare: function (x) {
        return function (y) {
            if (x instanceof Pixel && y instanceof Pixel) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof Pixel) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof Pixel) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof Line && y instanceof Line) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof Line) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof Line) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof Page && y instanceof Page) {
                return Data_Ordering.EQ.value;
            };
            throw new Error("Failed pattern match at Web.UIEvent.WheelEvent (line 0, column 0 - line 0, column 0): " + [ x.constructor.name, y.constructor.name ]);
        };
    },
    Eq0: function () {
        return eqDeltaMode;
    }
};
var enumDeltaMode = {
    succ: /* #__PURE__ */ Data_Enum.defaultSucc(toEnumDeltaMode)(fromEnumDeltaMode),
    pred: /* #__PURE__ */ Data_Enum.defaultPred(toEnumDeltaMode)(fromEnumDeltaMode),
    Ord0: function () {
        return ordDeltaMode;
    }
};
var boundedDeltaMode = /* #__PURE__ */ (function () {
    return {
        bottom: Pixel.value,
        top: Page.value,
        Ord0: function () {
            return ordDeltaMode;
        }
    };
})();
var boundedEnumDeltaMode = {
    cardinality: 3,
    toEnum: toEnumDeltaMode,
    fromEnum: fromEnumDeltaMode,
    Bounded0: function () {
        return boundedDeltaMode;
    },
    Enum1: function () {
        return enumDeltaMode;
    }
};
var toEnum = /* #__PURE__ */ Data_Enum.toEnum(boundedEnumDeltaMode);
var deltaMode = function () {
    return function ($15) {
        return fromJust(toEnum($foreign.deltaModeIndex($15)));
    };
};
export {
    deltaX,
    deltaY,
    deltaZ,
    deltaModeIndex
} from "./foreign.js";
export {
    fromMouseEvent,
    fromUIEvent,
    fromEvent,
    toMouseEvent,
    toUIEvent,
    toEvent,
    deltaMode,
    Pixel,
    Line,
    Page,
    toEnumDeltaMode,
    fromEnumDeltaMode,
    eqDeltaMode,
    ordDeltaMode,
    boundedDeltaMode,
    enumDeltaMode,
    boundedEnumDeltaMode
};
