import * as $foreign from "./foreign.js";
import * as Data_Ord from "../Data.Ord/index.js";
var compare = /* #__PURE__ */ Data_Ord.compare(Data_Ord.ordString);
var compare1 = /* #__PURE__ */ Data_Ord.compare(Data_Ord.ordInt);
var URL = function (x) {
    return x;
};

// DocumentTitle will set value of `document.title`
var DocumentTitle = function (x) {
    return x;
};
var Delta = function (x) {
    return x;
};
var newtypeURL = {
    Coercible0: function () {
        return undefined;
    }
};
var newtypeDocumentTitle = {
    Coercible0: function () {
        return undefined;
    }
};
var newtypeDelta = {
    Coercible0: function () {
        return undefined;
    }
};
var eqURL = {
    eq: function (x) {
        return function (y) {
            return x === y;
        };
    }
};
var ordURL = {
    compare: function (x) {
        return function (y) {
            return compare(x)(y);
        };
    },
    Eq0: function () {
        return eqURL;
    }
};
var eqDocumentTitle = {
    eq: function (x) {
        return function (y) {
            return x === y;
        };
    }
};
var ordDocumentTitle = {
    compare: function (x) {
        return function (y) {
            return compare(x)(y);
        };
    },
    Eq0: function () {
        return eqDocumentTitle;
    }
};
var eqDelta = {
    eq: function (x) {
        return function (y) {
            return x === y;
        };
    }
};
var ordDelta = {
    compare: function (x) {
        return function (y) {
            return compare1(x)(y);
        };
    },
    Eq0: function () {
        return eqDelta;
    }
};
export {
    back,
    forward,
    go,
    pushState,
    replaceState,
    state
} from "./foreign.js";
export {
    DocumentTitle,
    Delta,
    URL,
    eqDocumentTitle,
    ordDocumentTitle,
    newtypeDocumentTitle,
    eqDelta,
    ordDelta,
    newtypeDelta,
    eqURL,
    ordURL,
    newtypeURL
};
