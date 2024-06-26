import * as $foreign from "./foreign.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Nullable from "../Data.Nullable/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
import * as Data_Unfoldable from "../Data.Unfoldable/index.js";
var map = /* #__PURE__ */ Data_Functor.map(Data_Maybe.functorMaybe);

// | Get `File` at the certain position
var item = function (i) {
    var $5 = $foreign["_item"](i);
    return function ($6) {
        return Data_Nullable.toMaybe($5($6));
    };
};
var items = function (dictUnfoldable) {
    var unfoldr = Data_Unfoldable.unfoldr(dictUnfoldable);
    return function (fl) {
        return unfoldr(function (i) {
            return map(Data_Function.flip(Data_Tuple.Tuple.create)(i + 1 | 0))(item(i)(fl));
        })(0);
    };
};
export {
    length
} from "./foreign.js";
export {
    item,
    items
};
