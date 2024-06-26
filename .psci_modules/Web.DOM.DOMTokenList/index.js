import * as $foreign from "./foreign.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Nullable from "../Data.Nullable/index.js";
import * as Effect from "../Effect/index.js";
var map = /* #__PURE__ */ Data_Functor.map(Effect.functorEffect);
var item = function (index) {
    var $2 = map(Data_Nullable.toMaybe);
    var $3 = $foreign["_item"](index);
    return function ($4) {
        return $2($3($4));
    };
};
export {
    add,
    contains,
    remove,
    toggle,
    toggleForce
} from "./foreign.js";
export {
    item
};
