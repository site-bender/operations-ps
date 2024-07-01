import * as Data_Const from "../Data.Const/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Monoid from "../Data.Monoid/index.js";
import * as Data_Newtype from "../Data.Newtype/index.js";
import * as Data_Semigroup from "../Data.Semigroup/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
var alaF = /* #__PURE__ */ Data_Newtype.alaF()()()();
var Forget = function (x) {
    return x;
};
var semigroupForget = function (dictSemigroup) {
    return Data_Semigroup.semigroupFn(dictSemigroup);
};
var profunctorForget = {
    dimap: function (f) {
        return function (v) {
            return function (v1) {
                return function ($36) {
                    return v1(f($36));
                };
            };
        };
    }
};
var strongForget = {
    first: function (v) {
        return function ($37) {
            return v(Data_Tuple.fst($37));
        };
    },
    second: function (v) {
        return function ($38) {
            return v(Data_Tuple.snd($38));
        };
    },
    Profunctor0: function () {
        return profunctorForget;
    }
};
var newtypeForget = {
    Coercible0: function () {
        return undefined;
    }
};
var monoidForget = function (dictMonoid) {
    return Data_Monoid.monoidFn(dictMonoid);
};
var cochoiceForget = {
    unleft: function (v) {
        return function ($39) {
            return v(Data_Either.Left.create($39));
        };
    },
    unright: function (v) {
        return function ($40) {
            return v(Data_Either.Right.create($40));
        };
    },
    Profunctor0: function () {
        return profunctorForget;
    }
};
var choiceForget = function (dictMonoid) {
    var mempty = Data_Monoid.mempty(Data_Monoid.monoidFn(dictMonoid));
    return {
        left: function (v) {
            return Data_Either.either(v)(mempty);
        },
        right: function (v) {
            return Data_Either.either(mempty)(v);
        },
        Profunctor0: function () {
            return profunctorForget;
        }
    };
};
var wanderForget = function (dictMonoid) {
    var applicativeConst = Data_Const.applicativeConst(dictMonoid);
    var choiceForget1 = choiceForget(dictMonoid);
    return {
        wander: function (f) {
            return function (v) {
                return alaF(Data_Const.Const)(f(applicativeConst))(v);
            };
        },
        Strong0: function () {
            return strongForget;
        },
        Choice1: function () {
            return choiceForget1;
        }
    };
};
export {
    Forget,
    newtypeForget,
    semigroupForget,
    monoidForget,
    profunctorForget,
    choiceForget,
    strongForget,
    cochoiceForget,
    wanderForget
};
