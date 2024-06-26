import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Ordering from "../Data.Ordering/index.js";
import * as Data_Show from "../Data.Show/index.js";
var show = /* #__PURE__ */ Data_Show.show(Data_Show.showNumber);
var compare = /* #__PURE__ */ Data_Ord.compare(Data_Ord.ordNumber);
var Any = /* #__PURE__ */ (function () {
    function Any() {

    };
    Any.value = new Any();
    return Any;
})();
var Step = /* #__PURE__ */ (function () {
    function Step(value0) {
        this.value0 = value0;
    };
    Step.create = function (value0) {
        return new Step(value0);
    };
    return Step;
})();
var renderStepValue = function (v) {
    if (v instanceof Any) {
        return "any";
    };
    if (v instanceof Step) {
        return show(v.value0);
    };
    throw new Error("Failed pattern match at DOM.HTML.Indexed.StepValue (line 13, column 19 - line 15, column 19): " + [ v.constructor.name ]);
};
var eqStepValue = {
    eq: function (x) {
        return function (y) {
            if (x instanceof Any && y instanceof Any) {
                return true;
            };
            if (x instanceof Step && y instanceof Step) {
                return x.value0 === y.value0;
            };
            return false;
        };
    }
};
var ordStepValue = {
    compare: function (x) {
        return function (y) {
            if (x instanceof Any && y instanceof Any) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof Any) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof Any) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof Step && y instanceof Step) {
                return compare(x.value0)(y.value0);
            };
            throw new Error("Failed pattern match at DOM.HTML.Indexed.StepValue (line 0, column 0 - line 0, column 0): " + [ x.constructor.name, y.constructor.name ]);
        };
    },
    Eq0: function () {
        return eqStepValue;
    }
};
export {
    Any,
    Step,
    renderStepValue,
    eqStepValue,
    ordStepValue
};
