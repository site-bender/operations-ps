// | This module defines a strict double-ended queue.
// |
// | The queue implementation is based on a pair of lists where all
// | operations require `O(1)` amortized time.
// |
// | However, any single `uncons` operation may run in `O(n)` time.
// |
// | See [Simple and Efficient Purely Functional Queues and Dequeues](http://www.westpoint.edu/eecs/SiteAssets/SitePages/Faculty%20Publication%20Documents/Okasaki/jfp95queue.pdf) (Okasaki 1995)
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Apply from "../Control.Apply/index.js";
import * as Control_Monad from "../Control.Monad/index.js";
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Foldable from "../Data.Foldable/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_List from "../Data.List/index.js";
import * as Data_List_Types from "../Data.List.Types/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Ordering from "../Data.Ordering/index.js";
import * as Data_Semigroup from "../Data.Semigroup/index.js";
import * as Data_Show from "../Data.Show/index.js";
import * as Data_Traversable from "../Data.Traversable/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
var $runtime_lazy = function (name, moduleName, init) {
    var state = 0;
    var val;
    return function (lineNumber) {
        if (state === 2) return val;
        if (state === 1) throw new ReferenceError(name + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
        state = 1;
        val = init();
        state = 2;
        return val;
    };
};
var map = /* #__PURE__ */ Data_Functor.map(Data_List_Types.functorList);

// | A strict double-ended queue (dequeue) representated using a pair of lists.
var CatQueue = /* #__PURE__ */ (function () {
    function CatQueue(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    CatQueue.create = function (value0) {
        return function (value1) {
            return new CatQueue(value0, value1);
        };
    };
    return CatQueue;
})();

// | Decompose a queue into a `Tuple` of the last element and the rest of the queue.
// |
// | Running time: `O(1)`
// |
// | Note that any single operation may run in `O(n)`.
var unsnoc = function ($copy_v) {
    var $tco_done = false;
    var $tco_result;
    function $tco_loop(v) {
        if (v.value1 instanceof Data_List_Types.Cons) {
            $tco_done = true;
            return new Data_Maybe.Just(new Data_Tuple.Tuple(v.value1.value0, new CatQueue(v.value0, v.value1.value1)));
        };
        if (v.value0 instanceof Data_List_Types.Nil && v.value1 instanceof Data_List_Types.Nil) {
            $tco_done = true;
            return Data_Maybe.Nothing.value;
        };
        if (v.value1 instanceof Data_List_Types.Nil) {
            $copy_v = new CatQueue(Data_List_Types.Nil.value, Data_List.reverse(v.value0));
            return;
        };
        throw new Error("Failed pattern match at Data.CatQueue (line 92, column 1 - line 92, column 63): " + [ v.constructor.name ]);
    };
    while (!$tco_done) {
        $tco_result = $tco_loop($copy_v);
    };
    return $tco_result;
};

// | Decompose a queue into a `Tuple` of the first element and the rest of the queue.
// |
// | Running time: `O(1)`
// |
// | Note that any single operation may run in `O(n)`.
var uncons = function ($copy_v) {
    var $tco_done = false;
    var $tco_result;
    function $tco_loop(v) {
        if (v.value0 instanceof Data_List_Types.Nil && v.value1 instanceof Data_List_Types.Nil) {
            $tco_done = true;
            return Data_Maybe.Nothing.value;
        };
        if (v.value0 instanceof Data_List_Types.Nil) {
            $copy_v = new CatQueue(Data_List.reverse(v.value1), Data_List_Types.Nil.value);
            return;
        };
        if (v.value0 instanceof Data_List_Types.Cons) {
            $tco_done = true;
            return new Data_Maybe.Just(new Data_Tuple.Tuple(v.value0.value0, new CatQueue(v.value0.value1, v.value1)));
        };
        throw new Error("Failed pattern match at Data.CatQueue (line 82, column 1 - line 82, column 63): " + [ v.constructor.name ]);
    };
    while (!$tco_done) {
        $tco_result = $tco_loop($copy_v);
    };
    return $tco_result;
};

// | Append an element to the end of the queue, creating a new queue.
// |
// | Running time: `O(1)`
var snoc = function (v) {
    return function (a) {
        return new CatQueue(v.value0, new Data_List_Types.Cons(a, v.value1));
    };
};
var showCatQueue = function (dictShow) {
    var show = Data_Show.show(Data_List_Types.showList(dictShow));
    return {
        show: function (v) {
            return "(CatQueue " + (show(v.value0) + (" " + (show(v.value1) + ")")));
        }
    };
};

// | Test whether a queue is empty.
// |
// | Running time: `O(1)`
var $$null = function (v) {
    if (v.value0 instanceof Data_List_Types.Nil && v.value1 instanceof Data_List_Types.Nil) {
        return true;
    };
    return false;
};

// | Number of elements in queue.
// |
// | Running time: `O(n)` in length of queue.
var length = function (v) {
    return Data_List.length(v.value0) + Data_List.length(v.value1) | 0;
};
var functorCatQueue = {
    map: function (f) {
        return function (v) {
            return new CatQueue(map(f)(v.value0), map(f)(v.value1));
        };
    }
};
var foldableCatQueue = {
    foldMap: function (dictMonoid) {
        return Data_Foldable.foldMapDefaultL(foldableCatQueue)(dictMonoid);
    },
    foldr: function (f) {
        return Data_Foldable.foldrDefault(foldableCatQueue)(f);
    },
    foldl: function (f) {
        var go = function ($copy_acc) {
            return function ($copy_q) {
                var $tco_var_acc = $copy_acc;
                var $tco_done = false;
                var $tco_result;
                function $tco_loop(acc, q) {
                    var v = uncons(q);
                    if (v instanceof Data_Maybe.Just) {
                        $tco_var_acc = f(acc)(v.value0.value0);
                        $copy_q = v.value0.value1;
                        return;
                    };
                    if (v instanceof Data_Maybe.Nothing) {
                        $tco_done = true;
                        return acc;
                    };
                    throw new Error("Failed pattern match at Data.CatQueue (line 147, column 16 - line 149, column 22): " + [ v.constructor.name ]);
                };
                while (!$tco_done) {
                    $tco_result = $tco_loop($tco_var_acc, $copy_q);
                };
                return $tco_result;
            };
        };
        return go;
    }
};
var foldl = /* #__PURE__ */ Data_Foldable.foldl(foldableCatQueue);

// | Running time: `O(n) in the length of the second queue`
var semigroupCatQueue = {
    append: /* #__PURE__ */ foldl(snoc)
};

// | Create an empty queue.
// |
// | Running time: `O(1)`
var empty = /* #__PURE__ */ (function () {
    return new CatQueue(Data_List_Types.Nil.value, Data_List_Types.Nil.value);
})();
var monoidCatQueue = {
    mempty: empty,
    Semigroup0: function () {
        return semigroupCatQueue;
    }
};

// | Create a queue containing a single element.
// |
// | Running time: `O(1)`
var singleton = /* #__PURE__ */ snoc(empty);

// | Convert any `Foldable` into a `CatQueue`.
// |
// | Running time: `O(n)`
var fromFoldable = function (dictFoldable) {
    var foldMap = Data_Foldable.foldMap(dictFoldable)(monoidCatQueue);
    return function (f) {
        return foldMap(singleton)(f);
    };
};
var traversableCatQueue = {
    traverse: function (dictApplicative) {
        var Apply0 = dictApplicative.Apply0();
        var map1 = Data_Functor.map(Apply0.Functor0());
        var lift2 = Control_Apply.lift2(Apply0);
        var pure = Control_Applicative.pure(dictApplicative);
        return function (f) {
            var $123 = map1(foldl(snoc)(empty));
            var $124 = foldl(function (acc) {
                var $126 = lift2(snoc)(acc);
                return function ($127) {
                    return $126(f($127));
                };
            })(pure(empty));
            return function ($125) {
                return $123($124($125));
            };
        };
    },
    sequence: function (dictApplicative) {
        return Data_Traversable.sequenceDefault(traversableCatQueue)(dictApplicative);
    },
    Functor0: function () {
        return functorCatQueue;
    },
    Foldable1: function () {
        return foldableCatQueue;
    }
};
var unfoldable1CatQueue = {
    unfoldr1: function (f) {
        return function (b) {
            var go = function ($copy_source) {
                return function ($copy_memo) {
                    var $tco_var_source = $copy_source;
                    var $tco_done = false;
                    var $tco_result;
                    function $tco_loop(source, memo) {
                        var v = f(source);
                        if (v.value1 instanceof Data_Maybe.Nothing) {
                            $tco_done = true;
                            return snoc(memo)(v.value0);
                        };
                        if (v.value1 instanceof Data_Maybe.Just) {
                            $tco_var_source = v.value1.value0;
                            $copy_memo = snoc(memo)(v.value0);
                            return;
                        };
                        throw new Error("Failed pattern match at Data.CatQueue (line 154, column 24 - line 156, column 57): " + [ v.constructor.name ]);
                    };
                    while (!$tco_done) {
                        $tco_result = $tco_loop($tco_var_source, $copy_memo);
                    };
                    return $tco_result;
                };
            };
            return go(b)(empty);
        };
    }
};
var unfoldableCatQueue = {
    unfoldr: function (f) {
        return function (b) {
            var go = function ($copy_source) {
                return function ($copy_memo) {
                    var $tco_var_source = $copy_source;
                    var $tco_done = false;
                    var $tco_result;
                    function $tco_loop(source, memo) {
                        var v = f(source);
                        if (v instanceof Data_Maybe.Nothing) {
                            $tco_done = true;
                            return memo;
                        };
                        if (v instanceof Data_Maybe.Just) {
                            $tco_var_source = v.value0.value1;
                            $copy_memo = snoc(memo)(v.value0.value0);
                            return;
                        };
                        throw new Error("Failed pattern match at Data.CatQueue (line 161, column 24 - line 163, column 57): " + [ v.constructor.name ]);
                    };
                    while (!$tco_done) {
                        $tco_result = $tco_loop($tco_var_source, $copy_memo);
                    };
                    return $tco_result;
                };
            };
            return go(b)(empty);
        };
    },
    Unfoldable10: function () {
        return unfoldable1CatQueue;
    }
};
var cqEq = function (dictEq) {
    var elemEq = Data_Eq.eq(dictEq);
    var go = function ($copy_xs) {
        return function ($copy_ys) {
            var $tco_var_xs = $copy_xs;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(xs, ys) {
                var v = uncons(ys);
                var v1 = uncons(xs);
                if (v1 instanceof Data_Maybe.Just && (v instanceof Data_Maybe.Just && elemEq(v1.value0.value0)(v.value0.value0))) {
                    $tco_var_xs = v1.value0.value1;
                    $copy_ys = v.value0.value1;
                    return;
                };
                if (v1 instanceof Data_Maybe.Nothing && v instanceof Data_Maybe.Nothing) {
                    $tco_done = true;
                    return true;
                };
                $tco_done = true;
                return false;
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_xs, $copy_ys);
            };
            return $tco_result;
        };
    };
    return go;
};
var eqCatQueue = function (dictEq) {
    return {
        eq: cqEq(dictEq)
    };
};
var cqCompare = function (dictOrd) {
    var elemCompare = Data_Ord.compare(dictOrd);
    var go = function ($copy_xs) {
        return function ($copy_ys) {
            var $tco_var_xs = $copy_xs;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(xs, ys) {
                var v = uncons(ys);
                var v1 = uncons(xs);
                if (v1 instanceof Data_Maybe.Just && v instanceof Data_Maybe.Just) {
                    var v2 = elemCompare(v1.value0.value0)(v.value0.value0);
                    if (v2 instanceof Data_Ordering.EQ) {
                        $tco_var_xs = v1.value0.value1;
                        $copy_ys = v.value0.value1;
                        return;
                    };
                    $tco_done = true;
                    return v2;
                };
                if (v1 instanceof Data_Maybe.Just && v instanceof Data_Maybe.Nothing) {
                    $tco_done = true;
                    return Data_Ordering.GT.value;
                };
                if (v1 instanceof Data_Maybe.Nothing && v instanceof Data_Maybe.Just) {
                    $tco_done = true;
                    return Data_Ordering.LT.value;
                };
                if (v1 instanceof Data_Maybe.Nothing && v instanceof Data_Maybe.Nothing) {
                    $tco_done = true;
                    return Data_Ordering.EQ.value;
                };
                throw new Error("Failed pattern match at Data.CatQueue (line 117, column 16 - line 124, column 30): " + [ v1.constructor.name, v.constructor.name ]);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_xs, $copy_ys);
            };
            return $tco_result;
        };
    };
    return go;
};
var ordCatQueue = function (dictOrd) {
    var eqCatQueue1 = eqCatQueue(dictOrd.Eq0());
    return {
        compare: cqCompare(dictOrd),
        Eq0: function () {
            return eqCatQueue1;
        }
    };
};

// | Append an element to the beginning of the queue, creating a new queue.
// |
// | Running time: `O(1)`
var cons = function (a) {
    return function (v) {
        return new CatQueue(new Data_List_Types.Cons(a, v.value0), v.value1);
    };
};
var monadCatQueue = {
    Applicative0: function () {
        return applicativeCatQueue;
    },
    Bind1: function () {
        return bindCatQueue;
    }
};
var bindCatQueue = {
    bind: /* #__PURE__ */ Data_Function.flip(/* #__PURE__ */ Data_Foldable.foldMap(foldableCatQueue)(monoidCatQueue)),
    Apply0: function () {
        return $lazy_applyCatQueue(0);
    }
};
var applicativeCatQueue = {
    pure: singleton,
    Apply0: function () {
        return $lazy_applyCatQueue(0);
    }
};
var $lazy_applyCatQueue = /* #__PURE__ */ $runtime_lazy("applyCatQueue", "Data.CatQueue", function () {
    return {
        apply: Control_Monad.ap(monadCatQueue),
        Functor0: function () {
            return functorCatQueue;
        }
    };
});
var applyCatQueue = /* #__PURE__ */ $lazy_applyCatQueue(174);
var altCatQueue = {
    alt: /* #__PURE__ */ Data_Semigroup.append(semigroupCatQueue),
    Functor0: function () {
        return functorCatQueue;
    }
};
var plusCatQueue = {
    empty: empty,
    Alt0: function () {
        return altCatQueue;
    }
};
var alternativeCatQueue = {
    Applicative0: function () {
        return applicativeCatQueue;
    },
    Plus1: function () {
        return plusCatQueue;
    }
};
var monadPlusCatQueue = {
    Monad0: function () {
        return monadCatQueue;
    },
    Alternative1: function () {
        return alternativeCatQueue;
    }
};
export {
    CatQueue,
    empty,
    $$null as null,
    singleton,
    length,
    cons,
    snoc,
    uncons,
    unsnoc,
    fromFoldable,
    eqCatQueue,
    ordCatQueue,
    semigroupCatQueue,
    monoidCatQueue,
    showCatQueue,
    foldableCatQueue,
    unfoldable1CatQueue,
    unfoldableCatQueue,
    traversableCatQueue,
    functorCatQueue,
    applyCatQueue,
    applicativeCatQueue,
    bindCatQueue,
    monadCatQueue,
    altCatQueue,
    plusCatQueue,
    alternativeCatQueue,
    monadPlusCatQueue
};
