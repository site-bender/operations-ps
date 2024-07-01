// | This module defines the `Re` profunctor
import * as Data_Profunctor from "../Data.Profunctor/index.js";
import * as Data_Profunctor_Choice from "../Data.Profunctor.Choice/index.js";
import * as Data_Profunctor_Cochoice from "../Data.Profunctor.Cochoice/index.js";
import * as Data_Profunctor_Costrong from "../Data.Profunctor.Costrong/index.js";
import * as Data_Profunctor_Strong from "../Data.Profunctor.Strong/index.js";
var Re = function (x) {
    return x;
};
var profunctorRe = function (dictProfunctor) {
    var dimap = Data_Profunctor.dimap(dictProfunctor);
    return {
        dimap: function (f) {
            return function (g) {
                return function (v) {
                    var $43 = dimap(g)(f);
                    return function ($44) {
                        return v($43($44));
                    };
                };
            };
        }
    };
};
var strongRe = function (dictStrong) {
    var first = Data_Profunctor_Strong.first(dictStrong);
    var second = Data_Profunctor_Strong.second(dictStrong);
    var profunctorRe1 = profunctorRe(dictStrong.Profunctor0());
    return {
        unfirst: function (v) {
            return function ($45) {
                return v(first($45));
            };
        },
        unsecond: function (v) {
            return function ($46) {
                return v(second($46));
            };
        },
        Profunctor0: function () {
            return profunctorRe1;
        }
    };
};
var newtypeRe = {
    Coercible0: function () {
        return undefined;
    }
};
var costrongRe = function (dictCostrong) {
    var unfirst = Data_Profunctor_Costrong.unfirst(dictCostrong);
    var unsecond = Data_Profunctor_Costrong.unsecond(dictCostrong);
    var profunctorRe1 = profunctorRe(dictCostrong.Profunctor0());
    return {
        first: function (v) {
            return function ($47) {
                return v(unfirst($47));
            };
        },
        second: function (v) {
            return function ($48) {
                return v(unsecond($48));
            };
        },
        Profunctor0: function () {
            return profunctorRe1;
        }
    };
};
var cochoiceRe = function (dictCochoice) {
    var unleft = Data_Profunctor_Cochoice.unleft(dictCochoice);
    var unright = Data_Profunctor_Cochoice.unright(dictCochoice);
    var profunctorRe1 = profunctorRe(dictCochoice.Profunctor0());
    return {
        left: function (v) {
            return function ($49) {
                return v(unleft($49));
            };
        },
        right: function (v) {
            return function ($50) {
                return v(unright($50));
            };
        },
        Profunctor0: function () {
            return profunctorRe1;
        }
    };
};
var choiceRe = function (dictChoice) {
    var left = Data_Profunctor_Choice.left(dictChoice);
    var right = Data_Profunctor_Choice.right(dictChoice);
    var profunctorRe1 = profunctorRe(dictChoice.Profunctor0());
    return {
        unleft: function (v) {
            return function ($51) {
                return v(left($51));
            };
        },
        unright: function (v) {
            return function ($52) {
                return v(right($52));
            };
        },
        Profunctor0: function () {
            return profunctorRe1;
        }
    };
};
export {
    Re,
    newtypeRe,
    profunctorRe,
    choiceRe,
    cochoiceRe,
    strongRe,
    costrongRe
};
