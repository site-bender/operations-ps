// Generated by purs version 0.15.15
import * as Data_Enum from "../Data.Enum/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Ordering from "../Data.Ordering/index.js";
var None = /* #__PURE__ */ (function () {
    function None() {

    };
    None.value = new None();
    return None;
})();
var Loading = /* #__PURE__ */ (function () {
    function Loading() {

    };
    Loading.value = new Loading();
    return Loading;
})();
var Loaded = /* #__PURE__ */ (function () {
    function Loaded() {

    };
    Loaded.value = new Loaded();
    return Loaded;
})();
var $$Error = /* #__PURE__ */ (function () {
    function $$Error() {

    };
    $$Error.value = new $$Error();
    return $$Error;
})();
var toEnumReadyState = function (v) {
    if (v === 0) {
        return new Data_Maybe.Just(None.value);
    };
    if (v === 1) {
        return new Data_Maybe.Just(Loading.value);
    };
    if (v === 2) {
        return new Data_Maybe.Just(Loaded.value);
    };
    if (v === 3) {
        return new Data_Maybe.Just($$Error.value);
    };
    return Data_Maybe.Nothing.value;
};
var showReadyState = {
    show: function (v) {
        if (v instanceof None) {
            return "None";
        };
        if (v instanceof Loading) {
            return "Loading";
        };
        if (v instanceof Loaded) {
            return "Loaded";
        };
        if (v instanceof $$Error) {
            return "Error";
        };
        throw new Error("Failed pattern match at Web.HTML.HTMLTrackElement.ReadyState (line 30, column 1 - line 34, column 23): " + [ v.constructor.name ]);
    }
};
var fromEnumReadyState = function (v) {
    if (v instanceof None) {
        return 0;
    };
    if (v instanceof Loading) {
        return 1;
    };
    if (v instanceof Loaded) {
        return 2;
    };
    if (v instanceof $$Error) {
        return 3;
    };
    throw new Error("Failed pattern match at Web.HTML.HTMLTrackElement.ReadyState (line 47, column 3 - line 51, column 15): " + [ v.constructor.name ]);
};
var eqReadyState = {
    eq: function (x) {
        return function (y) {
            if (x instanceof None && y instanceof None) {
                return true;
            };
            if (x instanceof Loading && y instanceof Loading) {
                return true;
            };
            if (x instanceof Loaded && y instanceof Loaded) {
                return true;
            };
            if (x instanceof $$Error && y instanceof $$Error) {
                return true;
            };
            return false;
        };
    }
};
var ordReadyState = {
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
            if (x instanceof Loading && y instanceof Loading) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof Loading) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof Loading) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof Loaded && y instanceof Loaded) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof Loaded) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof Loaded) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof $$Error && y instanceof $$Error) {
                return Data_Ordering.EQ.value;
            };
            throw new Error("Failed pattern match at Web.HTML.HTMLTrackElement.ReadyState (line 0, column 0 - line 0, column 0): " + [ x.constructor.name, y.constructor.name ]);
        };
    },
    Eq0: function () {
        return eqReadyState;
    }
};
var enumReadyState = {
    succ: /* #__PURE__ */ Data_Enum.defaultSucc(toEnumReadyState)(fromEnumReadyState),
    pred: /* #__PURE__ */ Data_Enum.defaultPred(toEnumReadyState)(fromEnumReadyState),
    Ord0: function () {
        return ordReadyState;
    }
};
var boundedReadyState = /* #__PURE__ */ (function () {
    return {
        bottom: None.value,
        top: $$Error.value,
        Ord0: function () {
            return ordReadyState;
        }
    };
})();
var boundedEnumReadyState = {
    cardinality: 4,
    toEnum: toEnumReadyState,
    fromEnum: fromEnumReadyState,
    Bounded0: function () {
        return boundedReadyState;
    },
    Enum1: function () {
        return enumReadyState;
    }
};
export {
    None,
    Loading,
    Loaded,
    $$Error as Error,
    toEnumReadyState,
    fromEnumReadyState,
    eqReadyState,
    ordReadyState,
    boundedReadyState,
    enumReadyState,
    boundedEnumReadyState,
    showReadyState
};
