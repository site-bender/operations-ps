import * as Data_Enum from "../Data.Enum/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Ordering from "../Data.Ordering/index.js";
var Empty = /* #__PURE__ */ (function () {
    function Empty() {

    };
    Empty.value = new Empty();
    return Empty;
})();
var Idle = /* #__PURE__ */ (function () {
    function Idle() {

    };
    Idle.value = new Idle();
    return Idle;
})();
var Loading = /* #__PURE__ */ (function () {
    function Loading() {

    };
    Loading.value = new Loading();
    return Loading;
})();
var NoSource = /* #__PURE__ */ (function () {
    function NoSource() {

    };
    NoSource.value = new NoSource();
    return NoSource;
})();
var toEnumNetworkState = function (v) {
    if (v === 0) {
        return new Data_Maybe.Just(Empty.value);
    };
    if (v === 1) {
        return new Data_Maybe.Just(Idle.value);
    };
    if (v === 2) {
        return new Data_Maybe.Just(Loading.value);
    };
    if (v === 3) {
        return new Data_Maybe.Just(NoSource.value);
    };
    return Data_Maybe.Nothing.value;
};
var showNetworkState = {
    show: function (v) {
        if (v instanceof Empty) {
            return "Empty";
        };
        if (v instanceof Idle) {
            return "Idle";
        };
        if (v instanceof Loading) {
            return "Loading";
        };
        if (v instanceof NoSource) {
            return "NoSource";
        };
        throw new Error("Failed pattern match at Web.HTML.HTMLMediaElement.NetworkState (line 30, column 1 - line 34, column 29): " + [ v.constructor.name ]);
    }
};
var fromEnumNetworkState = function (v) {
    if (v instanceof Empty) {
        return 0;
    };
    if (v instanceof Idle) {
        return 1;
    };
    if (v instanceof Loading) {
        return 2;
    };
    if (v instanceof NoSource) {
        return 3;
    };
    throw new Error("Failed pattern match at Web.HTML.HTMLMediaElement.NetworkState (line 47, column 3 - line 51, column 18): " + [ v.constructor.name ]);
};
var eqNetworkState = {
    eq: function (x) {
        return function (y) {
            if (x instanceof Empty && y instanceof Empty) {
                return true;
            };
            if (x instanceof Idle && y instanceof Idle) {
                return true;
            };
            if (x instanceof Loading && y instanceof Loading) {
                return true;
            };
            if (x instanceof NoSource && y instanceof NoSource) {
                return true;
            };
            return false;
        };
    }
};
var ordNetworkState = {
    compare: function (x) {
        return function (y) {
            if (x instanceof Empty && y instanceof Empty) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof Empty) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof Empty) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof Idle && y instanceof Idle) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof Idle) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof Idle) {
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
            if (x instanceof NoSource && y instanceof NoSource) {
                return Data_Ordering.EQ.value;
            };
            throw new Error("Failed pattern match at Web.HTML.HTMLMediaElement.NetworkState (line 0, column 0 - line 0, column 0): " + [ x.constructor.name, y.constructor.name ]);
        };
    },
    Eq0: function () {
        return eqNetworkState;
    }
};
var enumNetworkState = {
    succ: /* #__PURE__ */ Data_Enum.defaultSucc(toEnumNetworkState)(fromEnumNetworkState),
    pred: /* #__PURE__ */ Data_Enum.defaultPred(toEnumNetworkState)(fromEnumNetworkState),
    Ord0: function () {
        return ordNetworkState;
    }
};
var boundedNetworkState = /* #__PURE__ */ (function () {
    return {
        bottom: Empty.value,
        top: NoSource.value,
        Ord0: function () {
            return ordNetworkState;
        }
    };
})();
var boundedEnumNetworkState = {
    cardinality: 4,
    toEnum: toEnumNetworkState,
    fromEnum: fromEnumNetworkState,
    Bounded0: function () {
        return boundedNetworkState;
    },
    Enum1: function () {
        return enumNetworkState;
    }
};
export {
    Empty,
    Idle,
    Loading,
    NoSource,
    eqNetworkState,
    ordNetworkState,
    boundedNetworkState,
    enumNetworkState,
    boundedEnumNetworkState,
    showNetworkState
};
