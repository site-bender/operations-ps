import * as Data_Bounded from "../Data.Bounded/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Show from "../Data.Show/index.js";

// | Provides a `Semigroup` based on the `max` function. If the type has a
// | `Bounded` instance, then a `Monoid` instance is provided too. For example:
// |
// |     unwrap (Max 5 <> Max 6) = 6
// |     mempty :: Max Ordering = Max LT
// |
var Max = function (x) {
    return x;
};
var showMax = function (dictShow) {
    var show = Data_Show.show(dictShow);
    return {
        show: function (v) {
            return "(Max " + (show(v) + ")");
        }
    };
};
var semigroupMax = function (dictOrd) {
    var max = Data_Ord.max(dictOrd);
    return {
        append: function (v) {
            return function (v1) {
                return max(v)(v1);
            };
        }
    };
};
var newtypeMax = {
    Coercible0: function () {
        return undefined;
    }
};
var monoidMax = function (dictBounded) {
    var semigroupMax1 = semigroupMax(dictBounded.Ord0());
    return {
        mempty: Data_Bounded.bottom(dictBounded),
        Semigroup0: function () {
            return semigroupMax1;
        }
    };
};
var eqMax = function (dictEq) {
    return dictEq;
};
var ordMax = function (dictOrd) {
    var compare = Data_Ord.compare(dictOrd);
    var eqMax1 = eqMax(dictOrd.Eq0());
    return {
        compare: function (v) {
            return function (v1) {
                return compare(v)(v1);
            };
        },
        Eq0: function () {
            return eqMax1;
        }
    };
};
export {
    Max,
    newtypeMax,
    eqMax,
    ordMax,
    semigroupMax,
    monoidMax,
    showMax
};
