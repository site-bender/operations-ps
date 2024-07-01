import * as Data_Enum from "../Data.Enum/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Ordering from "../Data.Ordering/index.js";
var None = /* #__PURE__ */ (function () {
    function None() {

    };
    None.value = new None();
    return None;
})();
var Capturing = /* #__PURE__ */ (function () {
    function Capturing() {

    };
    Capturing.value = new Capturing();
    return Capturing;
})();
var AtTarget = /* #__PURE__ */ (function () {
    function AtTarget() {

    };
    AtTarget.value = new AtTarget();
    return AtTarget;
})();
var Bubbling = /* #__PURE__ */ (function () {
    function Bubbling() {

    };
    Bubbling.value = new Bubbling();
    return Bubbling;
})();
var toEnumEventPhase = function (v) {
    if (v === 0) {
        return new Data_Maybe.Just(None.value);
    };
    if (v === 1) {
        return new Data_Maybe.Just(Capturing.value);
    };
    if (v === 2) {
        return new Data_Maybe.Just(AtTarget.value);
    };
    if (v === 3) {
        return new Data_Maybe.Just(Bubbling.value);
    };
    return Data_Maybe.Nothing.value;
};
var fromEnumEventPhase = function (v) {
    if (v instanceof None) {
        return 0;
    };
    if (v instanceof Capturing) {
        return 1;
    };
    if (v instanceof AtTarget) {
        return 2;
    };
    if (v instanceof Bubbling) {
        return 3;
    };
    throw new Error("Failed pattern match at Web.Event.EventPhase (line 40, column 3 - line 44, column 18): " + [ v.constructor.name ]);
};
var eqEventPhase = {
    eq: function (x) {
        return function (y) {
            if (x instanceof None && y instanceof None) {
                return true;
            };
            if (x instanceof Capturing && y instanceof Capturing) {
                return true;
            };
            if (x instanceof AtTarget && y instanceof AtTarget) {
                return true;
            };
            if (x instanceof Bubbling && y instanceof Bubbling) {
                return true;
            };
            return false;
        };
    }
};
var ordEventPhase = {
    compare: function (x) {
        return function (y) {
            if (x instanceof None && y instanceof None) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof None) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof None) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof Capturing && y instanceof Capturing) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof Capturing) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof Capturing) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof AtTarget && y instanceof AtTarget) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof AtTarget) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof AtTarget) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof Bubbling && y instanceof Bubbling) {
                return Data_Ordering.EQ.value;
            };
            throw new Error("Failed pattern match at Web.Event.EventPhase (line 0, column 0 - line 0, column 0): " + [ x.constructor.name, y.constructor.name ]);
        };
    },
    Eq0: function () {
        return eqEventPhase;
    }
};
var enumEventPhase = {
    succ: /* #__PURE__ */ Data_Enum.defaultSucc(toEnumEventPhase)(fromEnumEventPhase),
    pred: /* #__PURE__ */ Data_Enum.defaultPred(toEnumEventPhase)(fromEnumEventPhase),
    Ord0: function () {
        return ordEventPhase;
    }
};
var boundedEventPhase = /* #__PURE__ */ (function () {
    return {
        bottom: None.value,
        top: Bubbling.value,
        Ord0: function () {
            return ordEventPhase;
        }
    };
})();
var boundedEnumEventPhase = {
    cardinality: 4,
    toEnum: toEnumEventPhase,
    fromEnum: fromEnumEventPhase,
    Bounded0: function () {
        return boundedEventPhase;
    },
    Enum1: function () {
        return enumEventPhase;
    }
};
export {
    None,
    Capturing,
    AtTarget,
    Bubbling,
    toEnumEventPhase,
    fromEnumEventPhase,
    eqEventPhase,
    ordEventPhase,
    boundedEventPhase,
    enumEventPhase,
    boundedEnumEventPhase
};