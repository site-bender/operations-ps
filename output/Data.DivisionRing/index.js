// Generated by purs version 0.15.15
import * as Data_Ring from "../Data.Ring/index.js";
import * as Data_Semiring from "../Data.Semiring/index.js";
var recip = function (dict) {
    return dict.recip;
};
var rightDiv = function (dictDivisionRing) {
    var mul = Data_Semiring.mul((dictDivisionRing.Ring0()).Semiring0());
    var recip1 = recip(dictDivisionRing);
    return function (a) {
        return function (b) {
            return mul(a)(recip1(b));
        };
    };
};
var leftDiv = function (dictDivisionRing) {
    var mul = Data_Semiring.mul((dictDivisionRing.Ring0()).Semiring0());
    var recip1 = recip(dictDivisionRing);
    return function (a) {
        return function (b) {
            return mul(recip1(b))(a);
        };
    };
};
var divisionringNumber = {
    recip: function (x) {
        return 1.0 / x;
    },
    Ring0: function () {
        return Data_Ring.ringNumber;
    }
};
export {
    recip,
    leftDiv,
    rightDiv,
    divisionringNumber
};
export {
    negate,
    sub
} from "../Data.Ring/index.js";
export {
    add,
    mul,
    one,
    zero
} from "../Data.Semiring/index.js";
//# sourceMappingURL=index.js.map
