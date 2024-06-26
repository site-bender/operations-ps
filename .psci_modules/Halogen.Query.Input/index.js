import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
var RefLabel = function (x) {
    return x;
};
var RefUpdate = /* #__PURE__ */ (function () {
    function RefUpdate(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    RefUpdate.create = function (value0) {
        return function (value1) {
            return new RefUpdate(value0, value1);
        };
    };
    return RefUpdate;
})();
var Action = /* #__PURE__ */ (function () {
    function Action(value0) {
        this.value0 = value0;
    };
    Action.create = function (value0) {
        return new Action(value0);
    };
    return Action;
})();
var ordRefLabel = Data_Ord.ordString;
var newtypeRefLabel = {
    Coercible0: function () {
        return undefined;
    }
};
var functorInput = {
    map: function (f) {
        return function (m) {
            if (m instanceof RefUpdate) {
                return new RefUpdate(m.value0, m.value1);
            };
            if (m instanceof Action) {
                return new Action(f(m.value0));
            };
            throw new Error("Failed pattern match at Halogen.Query.Input (line 0, column 0 - line 0, column 0): " + [ m.constructor.name ]);
        };
    }
};
var eqRefLabel = Data_Eq.eqString;
export {
    RefLabel,
    RefUpdate,
    Action,
    newtypeRefLabel,
    eqRefLabel,
    ordRefLabel,
    functorInput
};
