// | This module defines the `Focusing` functor
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Apply from "../Control.Apply/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
var map = /* #__PURE__ */ Data_Functor.map(Data_Tuple.functorTuple);

// | The functor used to zoom into `StateT`.
var Focusing = function (x) {
    return x;
};
var newtypeFocusing = {
    Coercible0: function () {
        return undefined;
    }
};
var focusingFunctor = function (dictFunctor) {
    var map1 = Data_Functor.map(dictFunctor);
    return {
        map: function (f) {
            return function (v) {
                return map1(map(f))(v);
            };
        }
    };
};
var focusingApply = function (dictApply) {
    var apply = Control_Apply.apply(dictApply);
    var Functor0 = dictApply.Functor0();
    var map1 = Data_Functor.map(Functor0);
    var focusingFunctor1 = focusingFunctor(Functor0);
    return function (dictSemigroup) {
        var apply1 = Control_Apply.apply(Data_Tuple.applyTuple(dictSemigroup));
        return {
            apply: function (v) {
                return function (v1) {
                    return apply(map1(apply1)(v))(v1);
                };
            },
            Functor0: function () {
                return focusingFunctor1;
            }
        };
    };
};
var focusingApplicative = function (dictApplicative) {
    var pure = Control_Applicative.pure(dictApplicative);
    var focusingApply1 = focusingApply(dictApplicative.Apply0());
    return function (dictMonoid) {
        var focusingApply2 = focusingApply1(dictMonoid.Semigroup0());
        return {
            pure: (function () {
                var $28 = Control_Applicative.pure(Data_Tuple.applicativeTuple(dictMonoid));
                return function ($29) {
                    return Focusing(pure($28($29)));
                };
            })(),
            Apply0: function () {
                return focusingApply2;
            }
        };
    };
};
export {
    Focusing,
    newtypeFocusing,
    focusingFunctor,
    focusingApply,
    focusingApplicative
};
