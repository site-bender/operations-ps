import * as $foreign from "./foreign.js";
import * as Foreign_Object_ST from "../Foreign.Object.ST/index.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
var unsafeLookup = $foreign.unsafeGetAny;
var unsafeFreeze = Unsafe_Coerce.unsafeCoerce;
var pokeMutMap = $foreign.unsafeSetAny;
var newMutMap = Foreign_Object_ST["new"];
var deleteMutMap = $foreign.unsafeDeleteAny;
export {
    unsafeGetAny,
    unsafeHasAny,
    unsafeSetAny,
    unsafeDeleteAny,
    forE,
    forEachE,
    forInE,
    replicateE,
    diffWithIxE,
    diffWithKeyAndIxE,
    strMapWithIxE,
    refEq,
    createTextNode,
    setTextContent,
    createElement,
    insertChildIx,
    removeChild,
    parentNode,
    setAttribute,
    removeAttribute,
    hasAttribute,
    addEventListener,
    removeEventListener,
    jsUndefined
} from "./foreign.js";
export {
    newMutMap,
    pokeMutMap,
    deleteMutMap,
    unsafeFreeze,
    unsafeLookup
};
