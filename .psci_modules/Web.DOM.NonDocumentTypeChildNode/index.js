import * as $foreign from "./foreign.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Nullable from "../Data.Nullable/index.js";
import * as Effect from "../Effect/index.js";
var map = /* #__PURE__ */ Data_Functor.map(Effect.functorEffect);

// | The previous sibling that is an element, or Nothing if no such element exists.
var previousElementSibling = /* #__PURE__ */ (function () {
    var $2 = map(Data_Nullable.toMaybe);
    return function ($3) {
        return $2($foreign["_previousElementSibling"]($3));
    };
})();

// | The next sibling that is an element, or Nothing if no such element exists.
var nextElementSibling = /* #__PURE__ */ (function () {
    var $4 = map(Data_Nullable.toMaybe);
    return function ($5) {
        return $4($foreign["_nextElementSibling"]($5));
    };
})();
export {
    previousElementSibling,
    nextElementSibling
};
