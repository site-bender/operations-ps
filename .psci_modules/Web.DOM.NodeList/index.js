import * as $foreign from "./foreign.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Nullable from "../Data.Nullable/index.js";
import * as Effect from "../Effect/index.js";
import * as Web_DOM_Internal_Types from "../Web.DOM.Internal.Types/index.js";
var map = /* #__PURE__ */ Data_Functor.map(Effect.functorEffect);

// | The item in a NodeList at the specified index, or Nothing if no such node
// | exists.
var item = function (i) {
    var $2 = map(Data_Nullable.toMaybe);
    var $3 = $foreign["_item"](i);
    return function ($4) {
        return $2($3($4));
    };
};
export {
    length,
    toArray
} from "./foreign.js";
export {
    item
};
