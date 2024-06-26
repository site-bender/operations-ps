import * as Data_Enum from "../Data.Enum/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Ordering from "../Data.Ordering/index.js";
var EMPTY = /* #__PURE__ */ (function () {
    function EMPTY() {

    };
    EMPTY.value = new EMPTY();
    return EMPTY;
})();
var LOADING = /* #__PURE__ */ (function () {
    function LOADING() {

    };
    LOADING.value = new LOADING();
    return LOADING;
})();
var DONE = /* #__PURE__ */ (function () {
    function DONE() {

    };
    DONE.value = new DONE();
    return DONE;
})();
var toEnumReadyState = function (v) {
    if (v === 0) {
        return new Data_Maybe.Just(EMPTY.value);
    };
    if (v === 1) {
        return new Data_Maybe.Just(LOADING.value);
    };
    if (v === 2) {
        return new Data_Maybe.Just(DONE.value);
    };
    return Data_Maybe.Nothing.value;
};
var showReadyState = {
    show: function (v) {
        if (v instanceof EMPTY) {
            return "EMPTY";
        };
        if (v instanceof LOADING) {
            return "LOADING";
        };
        if (v instanceof DONE) {
            return "DONE";
        };
        throw new Error("Failed pattern match at Web.File.FileReader.ReadyState (line 28, column 1 - line 31, column 21): " + [ v.constructor.name ]);
    }
};
var fromEnumReadyState = function (v) {
    if (v instanceof EMPTY) {
        return 0;
    };
    if (v instanceof LOADING) {
        return 1;
    };
    if (v instanceof DONE) {
        return 2;
    };
    throw new Error("Failed pattern match at Web.File.FileReader.ReadyState (line 43, column 3 - line 46, column 14): " + [ v.constructor.name ]);
};
var eqReadyState = {
    eq: function (x) {
        return function (y) {
            if (x instanceof EMPTY && y instanceof EMPTY) {
                return true;
            };
            if (x instanceof LOADING && y instanceof LOADING) {
                return true;
            };
            if (x instanceof DONE && y instanceof DONE) {
                return true;
            };
            return false;
        };
    }
};
var ordReadyState = {
    compare: function (x) {
        return function (y) {
            if (x instanceof EMPTY && y instanceof EMPTY) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof EMPTY) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof EMPTY) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof LOADING && y instanceof LOADING) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof LOADING) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof LOADING) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof DONE && y instanceof DONE) {
                return Data_Ordering.EQ.value;
            };
            throw new Error("Failed pattern match at Web.File.FileReader.ReadyState (line 0, column 0 - line 0, column 0): " + [ x.constructor.name, y.constructor.name ]);
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
        bottom: EMPTY.value,
        top: DONE.value,
        Ord0: function () {
            return ordReadyState;
        }
    };
})();
var boundedEnumReadyState = {
    cardinality: 3,
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
    EMPTY,
    LOADING,
    DONE,
    toEnumReadyState,
    fromEnumReadyState,
    eqReadyState,
    ordReadyState,
    boundedReadyState,
    enumReadyState,
    boundedEnumReadyState,
    showReadyState
};
