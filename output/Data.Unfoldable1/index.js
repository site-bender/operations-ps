// Generated by purs version 0.15.15
import * as $foreign from "./foreign.js";
import * as Data_Boolean from "../Data.Boolean/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Semigroup_Traversable from "../Data.Semigroup.Traversable/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
var fromJust = /* #__PURE__ */ Data_Maybe.fromJust();
var unfoldr1 = function (dict) {
    return dict.unfoldr1;
};
var unfoldable1Maybe = {
    unfoldr1: function (f) {
        return function (b) {
            return new Data_Maybe.Just(Data_Tuple.fst(f(b)));
        };
    }
};
var unfoldable1Array = {
    unfoldr1: /* #__PURE__ */ $foreign.unfoldr1ArrayImpl(Data_Maybe.isNothing)(fromJust)(Data_Tuple.fst)(Data_Tuple.snd)
};
var replicate1 = function (dictUnfoldable1) {
    var unfoldr11 = unfoldr1(dictUnfoldable1);
    return function (n) {
        return function (v) {
            var step = function (i) {
                if (i <= 0) {
                    return new Data_Tuple.Tuple(v, Data_Maybe.Nothing.value);
                };
                if (Data_Boolean.otherwise) {
                    return new Data_Tuple.Tuple(v, new Data_Maybe.Just(i - 1 | 0));
                };
                throw new Error("Failed pattern match at Data.Unfoldable1 (line 68, column 5 - line 68, column 39): " + [ i.constructor.name ]);
            };
            return unfoldr11(step)(n - 1 | 0);
        };
    };
};
var replicate1A = function (dictApply) {
    return function (dictUnfoldable1) {
        var replicate11 = replicate1(dictUnfoldable1);
        return function (dictTraversable1) {
            var sequence1 = Data_Semigroup_Traversable.sequence1(dictTraversable1)(dictApply);
            return function (n) {
                return function (m) {
                    return sequence1(replicate11(n)(m));
                };
            };
        };
    };
};
var singleton = function (dictUnfoldable1) {
    return replicate1(dictUnfoldable1)(1);
};
var range = function (dictUnfoldable1) {
    var unfoldr11 = unfoldr1(dictUnfoldable1);
    return function (start) {
        return function (end) {
            var go = function (delta) {
                return function (i) {
                    var i$prime = i + delta | 0;
                    return new Data_Tuple.Tuple(i, (function () {
                        var $25 = i === end;
                        if ($25) {
                            return Data_Maybe.Nothing.value;
                        };
                        return new Data_Maybe.Just(i$prime);
                    })());
                };
            };
            var delta = (function () {
                var $26 = end >= start;
                if ($26) {
                    return 1;
                };
                return -1 | 0;
            })();
            return unfoldr11(go(delta))(start);
        };
    };
};
var iterateN = function (dictUnfoldable1) {
    var unfoldr11 = unfoldr1(dictUnfoldable1);
    return function (n) {
        return function (f) {
            return function (s) {
                var go = function (v) {
                    return new Data_Tuple.Tuple(v.value0, (function () {
                        var $28 = v.value1 > 0;
                        if ($28) {
                            return new Data_Maybe.Just(new Data_Tuple.Tuple(f(v.value0), v.value1 - 1 | 0));
                        };
                        return Data_Maybe.Nothing.value;
                    })());
                };
                return unfoldr11(go)(new Data_Tuple.Tuple(s, n - 1 | 0));
            };
        };
    };
};
export {
    unfoldr1,
    replicate1,
    replicate1A,
    singleton,
    range,
    iterateN,
    unfoldable1Array,
    unfoldable1Maybe
};
//# sourceMappingURL=index.js.map
