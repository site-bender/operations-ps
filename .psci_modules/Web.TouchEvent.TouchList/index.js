import * as $foreign from "./foreign.js";
import * as Data_Nullable from "../Data.Nullable/index.js";
var item = function (i) {
    return function (l) {
        return Data_Nullable.toMaybe($foreign["_item"](i, l));
    };
};
export {
    length
} from "./foreign.js";
export {
    item
};
