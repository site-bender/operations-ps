import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
var ChildQuery = /* #__PURE__ */ (function () {
    function ChildQuery(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
    };
    ChildQuery.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return new ChildQuery(value0, value1, value2);
            };
        };
    };
    return ChildQuery;
})();
var unChildQueryBox = Unsafe_Coerce.unsafeCoerce;
var mkChildQueryBox = Unsafe_Coerce.unsafeCoerce;
var functorChildQuery = {
    map: function (f) {
        return unChildQueryBox(function (v) {
            return mkChildQueryBox(new ChildQuery(function (dictApplicative) {
                return v.value0(dictApplicative);
            }, v.value1, function ($8) {
                return f(v.value2($8));
            }));
        });
    }
};
export {
    ChildQuery,
    mkChildQueryBox,
    unChildQueryBox,
    functorChildQuery
};