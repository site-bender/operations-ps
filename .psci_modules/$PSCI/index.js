import * as Data_Either from "../Data.Either/index.js";
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_EuclideanRing from "../Data.EuclideanRing/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Semiring from "../Data.Semiring/index.js";
import * as Data_Show from "../Data.Show/index.js";
import * as PSCI_Support from "../PSCI.Support/index.js";
var divide = function (dictEq) {
    var eq = Data_Eq.eq(dictEq);
    return function (dictEuclideanRing) {
        var zero = Data_Semiring.zero(((dictEuclideanRing.CommutativeRing0()).Ring0()).Semiring0());
        var div = Data_EuclideanRing.div(dictEuclideanRing);
        return function (dictOrd) {
            return function (v) {
                return function (v1) {
                    if (eq(v1)(zero)) {
                        return new Data_Either.Left("Divide by zero error.");
                    };
                    return new Data_Either.Right(div(v)(v1));
                };
            };
        };
    };
};
var it = /* #__PURE__ */ divide(Data_Eq.eqNumber)(Data_EuclideanRing.euclideanRingNumber)(Data_Ord.ordNumber)(15.0)(3.0);
var $dollarmain = /* #__PURE__ */ PSCI_Support["eval"](/* #__PURE__ */ PSCI_Support.evalShow(/* #__PURE__ */ Data_Either.showEither(Data_Show.showString)(Data_Show.showNumber)))(it);
export {
    divide,
    it,
    $dollarmain as $main
};
