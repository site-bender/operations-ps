import * as $foreign from "./foreign.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
var unsafeReadProtoTagged = function (name) {
    return function (value) {
        return $foreign["_unsafeReadProtoTagged"](Data_Maybe.Nothing.value, Data_Maybe.Just.create, name, value);
    };
};
export {
    unsafeReadProtoTagged
};
