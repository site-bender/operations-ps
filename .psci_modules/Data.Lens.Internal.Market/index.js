// | This module defines the `Market` profunctor
import * as Data_Bifunctor from "../Data.Bifunctor/index.js";
import * as Data_Either from "../Data.Either/index.js";
var lmap = /* #__PURE__ */ Data_Bifunctor.lmap(Data_Bifunctor.bifunctorEither);

// | The `Market` profunctor characterizes a `Prism`.
var Market = /* #__PURE__ */ (function () {
    function Market(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Market.create = function (value0) {
        return function (value1) {
            return new Market(value0, value1);
        };
    };
    return Market;
})();
var profunctorMarket = {
    dimap: function (f) {
        return function (g) {
            return function (v) {
                return new Market(function ($21) {
                    return g(v.value0($21));
                }, (function () {
                    var $22 = lmap(g);
                    return function ($23) {
                        return $22(v.value1(f($23)));
                    };
                })());
            };
        };
    }
};
var functorMarket = {
    map: function (f) {
        return function (v) {
            return new Market(function ($24) {
                return f(v.value0($24));
            }, (function () {
                var $25 = lmap(f);
                return function ($26) {
                    return $25(v.value1($26));
                };
            })());
        };
    }
};
var choiceMarket = {
    left: function (v) {
        return new Market(function ($27) {
            return Data_Either.Left.create(v.value0($27));
        }, Data_Either.either((function () {
            var $28 = lmap(Data_Either.Left.create);
            return function ($29) {
                return $28(v.value1($29));
            };
        })())(function ($30) {
            return Data_Either.Left.create(Data_Either.Right.create($30));
        }));
    },
    right: function (v) {
        return new Market(function ($31) {
            return Data_Either.Right.create(v.value0($31));
        }, Data_Either.either(function ($32) {
            return Data_Either.Left.create(Data_Either.Left.create($32));
        })((function () {
            var $33 = lmap(Data_Either.Right.create);
            return function ($34) {
                return $33(v.value1($34));
            };
        })()));
    },
    Profunctor0: function () {
        return profunctorMarket;
    }
};
export {
    Market,
    functorMarket,
    profunctorMarket,
    choiceMarket
};
