import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Ord from "../Data.Ord/index.js";

// | A value carrying its `Ord` instance so it can be used at a later date
// | without the need for evidence of the instance.
var OrdBox = /* #__PURE__ */ (function () {
    function OrdBox(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
    };
    OrdBox.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return new OrdBox(value0, value1, value2);
            };
        };
    };
    return OrdBox;
})();
var unOrdBox = function (v) {
    return v.value2;
};
var mkOrdBox = function (dictOrd) {
    return OrdBox.create(Data_Eq.eq(dictOrd.Eq0()))(Data_Ord.compare(dictOrd));
};
var eqOrdBox = {
    eq: function (v) {
        return function (v1) {
            return v.value0(v.value2)(v1.value2);
        };
    }
};
var ordOrdBox = {
    compare: function (v) {
        return function (v1) {
            return v.value1(v.value2)(v1.value2);
        };
    },
    Eq0: function () {
        return eqOrdBox;
    }
};
export {
    mkOrdBox,
    unOrdBox,
    eqOrdBox,
    ordOrdBox
};
