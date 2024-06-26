import * as $foreign from "./foreign.js";
import * as Data_Function_Uncurried from "../Data.Function.Uncurried/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
var toError = /* #__PURE__ */ (function () {
    return Data_Function_Uncurried.runFn3($foreign["_toError"])(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
})();
export {
    fromError
} from "./foreign.js";
export {
    toError
};
