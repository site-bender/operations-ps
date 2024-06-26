import * as Data_Ring from "../Data.Ring/index.js";
import * as Data_Semiring from "../Data.Semiring/index.js";
var recip = function (dict) {
    return dict.recip;
};

// | Right division, defined as `rightDiv a b = a * recip b`. Left and right
// | division are distinct in this module because a `DivisionRing` is not
// | necessarily commutative.
// |
// | If the type `a` is also a `EuclideanRing`, then this function is
// | equivalent to `div` from the `EuclideanRing` class. When working
// | abstractly, `div` should generally be preferred, unless you know that you
// | need your code to work with noncommutative rings.
var rightDiv = function (dictDivisionRing) {
    var mul = Data_Semiring.mul((dictDivisionRing.Ring0()).Semiring0());
    var recip1 = recip(dictDivisionRing);
    return function (a) {
        return function (b) {
            return mul(a)(recip1(b));
        };
    };
};

// | Left division, defined as `leftDiv a b = recip b * a`. Left and right
// | division are distinct in this module because a `DivisionRing` is not
// | necessarily commutative.
// |
// | If the type `a` is also a `EuclideanRing`, then this function is
// | equivalent to `div` from the `EuclideanRing` class. When working
// | abstractly, `div` should generally be preferred, unless you know that you
// | need your code to work with noncommutative rings.
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
