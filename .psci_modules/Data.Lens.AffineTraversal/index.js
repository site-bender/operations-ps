// | This module defines functions for working with affine traversals.
// | An `AffineTraversal` is a `Traversal` that applies to at most one element.
// |
// | These arise most frequently as the composition of a `Lens` with a `Prism`.
import * as Control_Category from "../Control.Category/index.js";
import * as Control_Semigroupoid from "../Control.Semigroupoid/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Lens_Internal_Stall from "../Data.Lens.Internal.Stall/index.js";
import * as Data_Lens_Types from "../Data.Lens.Types/index.js";
import * as Data_Profunctor from "../Data.Profunctor/index.js";
import * as Data_Profunctor_Choice from "../Data.Profunctor.Choice/index.js";
import * as Data_Profunctor_Strong from "../Data.Profunctor.Strong/index.js";
var identity = /* #__PURE__ */ Control_Category.identity(Control_Category.categoryFn);
var fanout = /* #__PURE__ */ Data_Profunctor_Strong.fanout(Control_Semigroupoid.semigroupoidFn)(Data_Profunctor_Strong.strongFn);
var withAffineTraversal = function (l) {
    return function (f) {
        var v = l(new Data_Lens_Internal_Stall.Stall(Data_Function["const"](identity), Data_Either.Right.create));
        return f(v.value0)(v.value1);
    };
};
var affineTraversal$prime = function (to) {
    return function (dictStrong) {
        var second = Data_Profunctor_Strong.second(dictStrong);
        return function (dictChoice) {
            var dimap = Data_Profunctor.dimap(dictChoice.Profunctor0());
            var right = Data_Profunctor_Choice.right(dictChoice);
            return function (pab) {
                return dimap(to)(function (v) {
                    return Data_Either.either(identity)(v.value0)(v.value1);
                })(second(right(pab)));
            };
        };
    };
};
var affineTraversal = function (set) {
    return function (pre) {
        return function (dictStrong) {
            return function (dictChoice) {
                return affineTraversal$prime(fanout(set)(pre))(dictStrong)(dictChoice);
            };
        };
    };
};
var cloneAffineTraversal = function (l) {
    return function (dictStrong) {
        return function (dictChoice) {
            return withAffineTraversal(l)(function (x) {
                return function (y) {
                    return function (p) {
                        return affineTraversal(x)(y)(dictStrong)(dictChoice)(p);
                    };
                };
            });
        };
    };
};
export {
    affineTraversal,
    affineTraversal$prime,
    withAffineTraversal,
    cloneAffineTraversal
};
