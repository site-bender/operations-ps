// Generated by purs version 0.15.15
import * as Control_Comonad_Store_Class from "../Control.Comonad.Store.Class/index.js";
import * as Control_Comonad_Store_Trans from "../Control.Comonad.Store.Trans/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Newtype from "../Data.Newtype/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
var map = /* #__PURE__ */ Data_Functor.map(Data_Tuple.functorTuple);
var unwrap = /* #__PURE__ */ Data_Newtype.unwrap();
var store = function (f) {
    return function (x) {
        return new Data_Tuple.Tuple(f, x);
    };
};
var runStore = function (v) {
    return Data_Tuple.swap(map(unwrap)(Data_Tuple.swap(v)));
};
export {
    runStore,
    store
};
export {
    experiment,
    peek,
    peeks,
    pos,
    seek,
    seeks
} from "../Control.Comonad.Store.Class/index.js";
export {
    StoreT,
    runStoreT
} from "../Control.Comonad.Store.Trans/index.js";
//# sourceMappingURL=index.js.map
