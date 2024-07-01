// | This module defines the `Shop` profunctor
import * as Data_Tuple from "../Data.Tuple/index.js";

// | The `Shop` profunctor characterizes a `Lens`.
var Shop = /* #__PURE__ */ (function () {
    function Shop(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Shop.create = function (value0) {
        return function (value1) {
            return new Shop(value0, value1);
        };
    };
    return Shop;
})();
var profunctorShop = {
    dimap: function (f) {
        return function (g) {
            return function (v) {
                return new Shop(function ($31) {
                    return v.value0(f($31));
                }, function (s) {
                    var $32 = v.value1(f(s));
                    return function ($33) {
                        return g($32($33));
                    };
                });
            };
        };
    }
};
var strongShop = {
    first: function (v) {
        return new Shop(function (v1) {
            return v.value0(v1.value0);
        }, function (v1) {
            return function (b) {
                return new Data_Tuple.Tuple(v.value1(v1.value0)(b), v1.value1);
            };
        });
    },
    second: function (v) {
        return new Shop(function (v1) {
            return v.value0(v1.value1);
        }, function (v1) {
            return function (b) {
                return new Data_Tuple.Tuple(v1.value0, v.value1(v1.value1)(b));
            };
        });
    },
    Profunctor0: function () {
        return profunctorShop;
    }
};
export {
    Shop,
    profunctorShop,
    strongShop
};
