// Generated by purs version 0.15.15
import * as $foreign from "./foreign.js";
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Nullable from "../Data.Nullable/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Effect from "../Effect/index.js";
var map = /* #__PURE__ */ Data_Functor.map(Effect.functorEffect);
var QuerySelector = function (x) {
    return x;
};
var querySelector = function (qs) {
    var $2 = map(Data_Nullable.toMaybe);
    var $3 = $foreign["_querySelector"](qs);
    return function ($4) {
        return $2($3($4));
    };
};
var ordQuerySelector = Data_Ord.ordString;
var newtypeQuerySelector = {
    Coercible0: function () {
        return undefined;
    }
};
var lastElementChild = /* #__PURE__ */ (function () {
    var $5 = map(Data_Nullable.toMaybe);
    return function ($6) {
        return $5($foreign["_lastElementChild"]($6));
    };
})();
var firstElementChild = /* #__PURE__ */ (function () {
    var $7 = map(Data_Nullable.toMaybe);
    return function ($8) {
        return $7($foreign["_firstElementChild"]($8));
    };
})();
var eqQuerySelector = Data_Eq.eqString;
export {
    children,
    childElementCount,
    querySelectorAll
} from "./foreign.js";
export {
    firstElementChild,
    lastElementChild,
    QuerySelector,
    querySelector,
    eqQuerySelector,
    ordQuerySelector,
    newtypeQuerySelector
};
//# sourceMappingURL=index.js.map
