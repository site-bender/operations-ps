// Generated by purs version 0.15.15
import * as Data_BooleanAlgebra from "../Data.BooleanAlgebra/index.js";
import * as Data_HeytingAlgebra from "../Data.HeytingAlgebra/index.js";
var Predicate = function (x) {
    return x;
};
var newtypePredicate = {
    Coercible0: function () {
        return undefined;
    }
};
var heytingAlgebraPredicate = /* #__PURE__ */ Data_HeytingAlgebra.heytingAlgebraFunction(Data_HeytingAlgebra.heytingAlgebraBoolean);
var contravariantPredicate = {
    cmap: function (f) {
        return function (v) {
            return function ($6) {
                return v(f($6));
            };
        };
    }
};
var booleanAlgebraPredicate = /* #__PURE__ */ Data_BooleanAlgebra.booleanAlgebraFn(Data_BooleanAlgebra.booleanAlgebraBoolean);
export {
    Predicate,
    newtypePredicate,
    heytingAlgebraPredicate,
    booleanAlgebraPredicate,
    contravariantPredicate
};
//# sourceMappingURL=index.js.map
