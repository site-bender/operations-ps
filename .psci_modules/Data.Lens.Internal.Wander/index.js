// | This module defines the `Wander` type class, which is used to define
// | `Traversal`s.
import * as Data_Identity from "../Data.Identity/index.js";
import * as Data_Newtype from "../Data.Newtype/index.js";
import * as Data_Profunctor_Choice from "../Data.Profunctor.Choice/index.js";
import * as Data_Profunctor_Star from "../Data.Profunctor.Star/index.js";
import * as Data_Profunctor_Strong from "../Data.Profunctor.Strong/index.js";
var alaF = /* #__PURE__ */ Data_Newtype.alaF()()()();
var wanderStar = function (dictApplicative) {
    var strongStar = Data_Profunctor_Star.strongStar((dictApplicative.Apply0()).Functor0());
    var choiceStar = Data_Profunctor_Star.choiceStar(dictApplicative);
    return {
        wander: function (t) {
            return function (v) {
                return t(dictApplicative)(v);
            };
        },
        Strong0: function () {
            return strongStar;
        },
        Choice1: function () {
            return choiceStar;
        }
    };
};
var wanderFunction = {
    wander: function (t) {
        return alaF(Data_Identity.Identity)(t(Data_Identity.applicativeIdentity));
    },
    Strong0: function () {
        return Data_Profunctor_Strong.strongFn;
    },
    Choice1: function () {
        return Data_Profunctor_Choice.choiceFn;
    }
};
var wander = function (dict) {
    return dict.wander;
};
export {
    wander,
    wanderFunction,
    wanderStar
};
