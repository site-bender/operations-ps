import * as Control_Semigroupoid from "../Control.Semigroupoid/index.js";
import * as Data_Profunctor from "../Data.Profunctor/index.js";
var closedFunction = {
    closed: /* #__PURE__ */ Control_Semigroupoid.compose(Control_Semigroupoid.semigroupoidFn),
    Profunctor0: function () {
        return Data_Profunctor.profunctorFn;
    }
};
var closed = function (dict) {
    return dict.closed;
};
export {
    closed,
    closedFunction
};
