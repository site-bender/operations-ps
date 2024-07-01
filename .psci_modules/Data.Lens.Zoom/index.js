// | This module defines functions for zooming in a state monad.
import * as Control_Monad_State_Trans from "../Control.Monad.State.Trans/index.js";
import * as Data_Lens_Internal_Focusing from "../Data.Lens.Internal.Focusing/index.js";
import * as Data_Lens_Types from "../Data.Lens.Types/index.js";
import * as Data_Newtype from "../Data.Newtype/index.js";
import * as Data_Profunctor_Star from "../Data.Profunctor.Star/index.js";
var underF = /* #__PURE__ */ Data_Newtype.underF()()()();
var under = /* #__PURE__ */ Data_Newtype.under()();

// | Zooms into a substate in a `StateT` transformer.
var zoom = function (p) {
    var $7 = underF(Data_Lens_Internal_Focusing.Focusing)(under(Data_Profunctor_Star.Star)(p));
    return function ($8) {
        return Control_Monad_State_Trans.StateT($7(Control_Monad_State_Trans.runStateT($8)));
    };
};
export {
    zoom
};
export {
    Exchange,
    Forget,
    Indexed,
    Market,
    Re,
    Shop,
    Stall,
    Tagged,
    wander
} from "../Data.Lens.Types/index.js";
