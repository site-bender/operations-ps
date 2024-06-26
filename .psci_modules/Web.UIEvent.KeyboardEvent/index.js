// | Functions that expose the KeyboardEvent API.
// |
// | https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent
// |
// | Note: The deprecated attributes `.keyCode`, `.charCode`, and
// | `.which` are deliberately omitted. It is currently recommended to use
// | `KeyboardEvent.key` instead.
// |
// | If browser support for `KeyboardEvent.key` is not yet widespread
// | enough for your use case, consider using a polyfill
// | (e.g. https://github.com/inexorabletash/polyfill#keyboard-events)
// | or use the purescript FFI to access the deprecated attributes you
// | want to work with.
// |
import * as $foreign from "./foreign.js";
import * as Data_Enum from "../Data.Enum/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Ordering from "../Data.Ordering/index.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
import * as Web_Internal_FFI from "../Web.Internal.FFI/index.js";
var fromJust = /* #__PURE__ */ Data_Maybe.fromJust();
var Standard = /* #__PURE__ */ (function () {
    function Standard() {

    };
    Standard.value = new Standard();
    return Standard;
})();
var Left = /* #__PURE__ */ (function () {
    function Left() {

    };
    Left.value = new Left();
    return Left;
})();
var Right = /* #__PURE__ */ (function () {
    function Right() {

    };
    Right.value = new Right();
    return Right;
})();
var Numpad = /* #__PURE__ */ (function () {
    function Numpad() {

    };
    Numpad.value = new Numpad();
    return Numpad;
})();
var toUIEvent = Unsafe_Coerce.unsafeCoerce;
var toEvent = Unsafe_Coerce.unsafeCoerce;
var toEnumKeyLocation = function (v) {
    if (v === 0) {
        return new Data_Maybe.Just(Standard.value);
    };
    if (v === 1) {
        return new Data_Maybe.Just(Left.value);
    };
    if (v === 2) {
        return new Data_Maybe.Just(Right.value);
    };
    if (v === 3) {
        return new Data_Maybe.Just(Numpad.value);
    };
    return Data_Maybe.Nothing.value;
};
var fromUIEvent = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("KeyboardEvent");
var fromEvent = /* #__PURE__ */ Web_Internal_FFI.unsafeReadProtoTagged("KeyboardEvent");
var fromEnumKeyLocation = function (v) {
    if (v instanceof Standard) {
        return 0;
    };
    if (v instanceof Left) {
        return 1;
    };
    if (v instanceof Right) {
        return 2;
    };
    if (v instanceof Numpad) {
        return 3;
    };
    throw new Error("Failed pattern match at Web.UIEvent.KeyboardEvent (line 107, column 3 - line 111, column 16): " + [ v.constructor.name ]);
};
var eqKeyLocation = {
    eq: function (x) {
        return function (y) {
            if (x instanceof Standard && y instanceof Standard) {
                return true;
            };
            if (x instanceof Left && y instanceof Left) {
                return true;
            };
            if (x instanceof Right && y instanceof Right) {
                return true;
            };
            if (x instanceof Numpad && y instanceof Numpad) {
                return true;
            };
            return false;
        };
    }
};
var ordKeyLocation = {
    compare: function (x) {
        return function (y) {
            if (x instanceof Standard && y instanceof Standard) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof Standard) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof Standard) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof Left && y instanceof Left) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof Left) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof Left) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof Right && y instanceof Right) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof Right) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof Right) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof Numpad && y instanceof Numpad) {
                return Data_Ordering.EQ.value;
            };
            throw new Error("Failed pattern match at Web.UIEvent.KeyboardEvent (line 0, column 0 - line 0, column 0): " + [ x.constructor.name, y.constructor.name ]);
        };
    },
    Eq0: function () {
        return eqKeyLocation;
    }
};
var enumKeyLocation = {
    succ: /* #__PURE__ */ Data_Enum.defaultSucc(toEnumKeyLocation)(fromEnumKeyLocation),
    pred: /* #__PURE__ */ Data_Enum.defaultPred(toEnumKeyLocation)(fromEnumKeyLocation),
    Ord0: function () {
        return ordKeyLocation;
    }
};
var boundedKeyLocation = /* #__PURE__ */ (function () {
    return {
        bottom: Standard.value,
        top: Numpad.value,
        Ord0: function () {
            return ordKeyLocation;
        }
    };
})();
var boundedEnumKeyLocation = {
    cardinality: 4,
    toEnum: toEnumKeyLocation,
    fromEnum: fromEnumKeyLocation,
    Bounded0: function () {
        return boundedKeyLocation;
    },
    Enum1: function () {
        return enumKeyLocation;
    }
};
var toEnum = /* #__PURE__ */ Data_Enum.toEnum(boundedEnumKeyLocation);
var location = function () {
    return function ($15) {
        return fromJust(toEnum($foreign.locationIndex($15)));
    };
};
export {
    key,
    code,
    locationIndex,
    ctrlKey,
    shiftKey,
    altKey,
    metaKey,
    repeat,
    isComposing,
    getModifierState
} from "./foreign.js";
export {
    fromUIEvent,
    fromEvent,
    toUIEvent,
    toEvent,
    location,
    Standard,
    Left,
    Right,
    Numpad,
    toEnumKeyLocation,
    fromEnumKeyLocation,
    eqKeyLocation,
    ordKeyLocation,
    boundedKeyLocation,
    enumKeyLocation,
    boundedEnumKeyLocation
};
