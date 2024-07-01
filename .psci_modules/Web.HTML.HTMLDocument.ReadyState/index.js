import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Ordering from "../Data.Ordering/index.js";
var Loading = /* #__PURE__ */ (function () {
    function Loading() {

    };
    Loading.value = new Loading();
    return Loading;
})();
var Interactive = /* #__PURE__ */ (function () {
    function Interactive() {

    };
    Interactive.value = new Interactive();
    return Interactive;
})();
var Complete = /* #__PURE__ */ (function () {
    function Complete() {

    };
    Complete.value = new Complete();
    return Complete;
})();
var showReadyState = {
    show: function (v) {
        if (v instanceof Loading) {
            return "Loading";
        };
        if (v instanceof Interactive) {
            return "Interactive";
        };
        if (v instanceof Complete) {
            return "Complete";
        };
        throw new Error("Failed pattern match at Web.HTML.HTMLDocument.ReadyState (line 16, column 10 - line 19, column 27): " + [ v.constructor.name ]);
    }
};
var print = function (v) {
    if (v instanceof Loading) {
        return "loading";
    };
    if (v instanceof Interactive) {
        return "interactive";
    };
    if (v instanceof Complete) {
        return "complete";
    };
    throw new Error("Failed pattern match at Web.HTML.HTMLDocument.ReadyState (line 22, column 9 - line 25, column 25): " + [ v.constructor.name ]);
};
var parse = function (v) {
    if (v === "loading") {
        return new Data_Maybe.Just(Loading.value);
    };
    if (v === "interactive") {
        return new Data_Maybe.Just(Interactive.value);
    };
    if (v === "complete") {
        return new Data_Maybe.Just(Complete.value);
    };
    return Data_Maybe.Nothing.value;
};
var eqReadyState = {
    eq: function (x) {
        return function (y) {
            if (x instanceof Loading && y instanceof Loading) {
                return true;
            };
            if (x instanceof Interactive && y instanceof Interactive) {
                return true;
            };
            if (x instanceof Complete && y instanceof Complete) {
                return true;
            };
            return false;
        };
    }
};
var ordReadyState = {
    compare: function (x) {
        return function (y) {
            if (x instanceof Loading && y instanceof Loading) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof Loading) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof Loading) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof Interactive && y instanceof Interactive) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof Interactive) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof Interactive) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof Complete && y instanceof Complete) {
                return Data_Ordering.EQ.value;
            };
            throw new Error("Failed pattern match at Web.HTML.HTMLDocument.ReadyState (line 0, column 0 - line 0, column 0): " + [ x.constructor.name, y.constructor.name ]);
        };
    },
    Eq0: function () {
        return eqReadyState;
    }
};
export {
    Loading,
    Interactive,
    Complete,
    print,
    parse,
    eqReadyState,
    ordReadyState,
    showReadyState
};