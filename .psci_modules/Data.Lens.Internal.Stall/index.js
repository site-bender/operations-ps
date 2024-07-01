// | This module defines the `Stall` profunctor
import * as Data_Bifunctor from "../Data.Bifunctor/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
var map = /* #__PURE__ */ Data_Functor.map(Data_Functor.functorFn);
var lmap = /* #__PURE__ */ Data_Bifunctor.lmap(Data_Bifunctor.bifunctorEither);

// | The `Stall` profunctor characterizes an `AffineTraversal`.
var Stall = /* #__PURE__ */ (function () {
    function Stall(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Stall.create = function (value0) {
        return function (value1) {
            return new Stall(value0, value1);
        };
    };
    return Stall;
})();
var profunctorStall = {
    dimap: function (f) {
        return function (g) {
            return function (v) {
                return new Stall((function () {
                    var $64 = map(g);
                    return function ($65) {
                        return $64(v.value0(f($65)));
                    };
                })(), (function () {
                    var $66 = lmap(g);
                    return function ($67) {
                        return $66(v.value1(f($67)));
                    };
                })());
            };
        };
    }
};
var strongStall = {
    first: function (v) {
        return new Stall(function (v1) {
            return function (b) {
                return new Data_Tuple.Tuple(v.value0(v1.value0)(b), v1.value1);
            };
        }, function (v1) {
            return lmap(function (t) {
                return new Data_Tuple.Tuple(t, v1.value1);
            })(v.value1(v1.value0));
        });
    },
    second: function (v) {
        return new Stall(function (v1) {
            return function (b) {
                return new Data_Tuple.Tuple(v1.value0, v.value0(v1.value1)(b));
            };
        }, function (v1) {
            return lmap(Data_Tuple.Tuple.create(v1.value0))(v.value1(v1.value1));
        });
    },
    Profunctor0: function () {
        return profunctorStall;
    }
};
var functorStall = {
    map: function (f) {
        return function (v) {
            return new Stall((function () {
                var $68 = map(f);
                return function ($69) {
                    return $68(v.value0($69));
                };
            })(), (function () {
                var $70 = lmap(f);
                return function ($71) {
                    return $70(v.value1($71));
                };
            })());
        };
    }
};
var choiceStall = {
    left: function (v) {
        return new Stall(function (v1) {
            if (v1 instanceof Data_Either.Left) {
                return function (b) {
                    return new Data_Either.Left(v.value0(v1.value0)(b));
                };
            };
            if (v1 instanceof Data_Either.Right) {
                return function (v2) {
                    return new Data_Either.Right(v1.value0);
                };
            };
            throw new Error("Failed pattern match at Data.Lens.Internal.Stall (line 36, column 9 - line 38, column 35): " + [ v1.constructor.name ]);
        }, function (v1) {
            if (v1 instanceof Data_Either.Left) {
                return lmap(Data_Either.Left.create)(v.value1(v1.value0));
            };
            if (v1 instanceof Data_Either.Right) {
                return new Data_Either.Left(new Data_Either.Right(v1.value0));
            };
            throw new Error("Failed pattern match at Data.Lens.Internal.Stall (line 40, column 9 - line 42, column 36): " + [ v1.constructor.name ]);
        });
    },
    right: function (v) {
        return new Stall(function (v1) {
            if (v1 instanceof Data_Either.Left) {
                return function (v2) {
                    return new Data_Either.Left(v1.value0);
                };
            };
            if (v1 instanceof Data_Either.Right) {
                return function (b) {
                    return new Data_Either.Right(v.value0(v1.value0)(b));
                };
            };
            throw new Error("Failed pattern match at Data.Lens.Internal.Stall (line 47, column 9 - line 49, column 41): " + [ v1.constructor.name ]);
        }, function (v1) {
            if (v1 instanceof Data_Either.Left) {
                return new Data_Either.Left(new Data_Either.Left(v1.value0));
            };
            if (v1 instanceof Data_Either.Right) {
                return lmap(Data_Either.Right.create)(v.value1(v1.value0));
            };
            throw new Error("Failed pattern match at Data.Lens.Internal.Stall (line 51, column 9 - line 53, column 38): " + [ v1.constructor.name ]);
        });
    },
    Profunctor0: function () {
        return profunctorStall;
    }
};
export {
    Stall,
    functorStall,
    profunctorStall,
    strongStall,
    choiceStall
};