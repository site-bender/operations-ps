// | This module defines a strict catenable list.
// |
// | The implementation is based on a queue where all operations require
// | `O(1)` amortized time.
// |
// | However, any single `uncons` operation may run in `O(n)` time.
// |
// | See [Purely Functional Data Structures](http://www.cs.cmu.edu/~rwh/theses/okasaki.pdf) (Okasaki 1996)
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Apply from "../Control.Apply/index.js";
import * as Control_Monad from "../Control.Monad/index.js";
import * as Data_CatQueue from "../Data.CatQueue/index.js";
import * as Data_Foldable from "../Data.Foldable/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_List_Types from "../Data.List.Types/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Monoid from "../Data.Monoid/index.js";
import * as Data_Semigroup from "../Data.Semigroup/index.js";
import * as Data_Semiring from "../Data.Semiring/index.js";
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

// | A strict catenable list.
// |
// | `CatList` may be empty, represented by `CatNil`.
// |
// | `CatList` may be non-empty, represented by `CatCons`. The `CatCons`
// | data constructor takes the first element of the list and a queue of
// | `CatList`.
var CatNil = /* #__PURE__ */ (function () {
    function CatNil() {

    };
    CatNil.value = new CatNil();
    return CatNil;
})();

// | A strict catenable list.
// |
// | `CatList` may be empty, represented by `CatNil`.
// |
// | `CatList` may be non-empty, represented by `CatCons`. The `CatCons`
// | data constructor takes the first element of the list and a queue of
// | `CatList`.
var CatCons = /* #__PURE__ */ (function () {
    function CatCons(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    CatCons.create = function (value0) {
        return function (value1) {
            return new CatCons(value0, value1);
        };
    };
    return CatCons;
})();
var showCatList = function (dictShow) {
    var show = Data_Show.show(dictShow);
    return {
        show: function (v) {
            if (v instanceof CatNil) {
                return "CatNil";
            };
            if (v instanceof CatCons) {
                return "(CatList " + (show(v.value0) + (" " + (Data_Show.show(Data_CatQueue.showCatQueue(showCatList(dictShow)))(v.value1) + ")")));
            };
            throw new Error("Failed pattern match at Data.CatList (line 147, column 1 - line 149, column 71): " + [ v.constructor.name ]);
        }
    };
};

// | Test whether a catenable list is empty.
// |
// | Running time: `O(1)`
var $$null = function (v) {
    if (v instanceof CatNil) {
        return true;
    };
    return false;
};

// | Links two catenable lists by making appending the queue in the
// | first catenable list to the second catenable list. This operation
// | creates a new catenable list.
// |
// | Running time: `O(1)`
var link = function (v) {
    return function (v1) {
        if (v instanceof CatNil) {
            return v1;
        };
        if (v1 instanceof CatNil) {
            return v;
        };
        if (v instanceof CatCons) {
            return new CatCons(v.value0, Data_CatQueue.snoc(v.value1)(v1));
        };
        throw new Error("Failed pattern match at Data.CatList (line 108, column 1 - line 108, column 54): " + [ v.constructor.name, v1.constructor.name ]);
    };
};

// | Tail recursive version of foldr on `CatList`.
// |
// | Ensures foldl on `List` is tail-recursive.
var foldr = function (k) {
    return function (b) {
        return function (q) {
            var foldl = function ($copy_v) {
                return function ($copy_v1) {
                    return function ($copy_v2) {
                        var $tco_var_v = $copy_v;
                        var $tco_var_v1 = $copy_v1;
                        var $tco_done = false;
                        var $tco_result;
                        function $tco_loop(v, v1, v2) {
                            if (v2 instanceof Data_List_Types.Nil) {
                                $tco_done = true;
                                return v1;
                            };
                            if (v2 instanceof Data_List_Types.Cons) {
                                $tco_var_v = v;
                                $tco_var_v1 = v(v1)(v2.value0);
                                $copy_v2 = v2.value1;
                                return;
                            };
                            throw new Error("Failed pattern match at Data.CatList (line 124, column 3 - line 124, column 59): " + [ v.constructor.name, v1.constructor.name, v2.constructor.name ]);
                        };
                        while (!$tco_done) {
                            $tco_result = $tco_loop($tco_var_v, $tco_var_v1, $copy_v2);
                        };
                        return $tco_result;
                    };
                };
            };
            var go = function ($copy_xs) {
                return function ($copy_ys) {
                    var $tco_var_xs = $copy_xs;
                    var $tco_done1 = false;
                    var $tco_result;
                    function $tco_loop(xs, ys) {
                        var v = Data_CatQueue.uncons(xs);
                        if (v instanceof Data_Maybe.Nothing) {
                            $tco_done1 = true;
                            return foldl(function (x) {
                                return function (i) {
                                    return i(x);
                                };
                            })(b)(ys);
                        };
                        if (v instanceof Data_Maybe.Just) {
                            $tco_var_xs = v.value0.value1;
                            $copy_ys = new Data_List_Types.Cons(k(v.value0.value0), ys);
                            return;
                        };
                        throw new Error("Failed pattern match at Data.CatList (line 120, column 14 - line 122, column 67): " + [ v.constructor.name ]);
                    };
                    while (!$tco_done1) {
                        $tco_result = $tco_loop($tco_var_xs, $copy_ys);
                    };
                    return $tco_result;
                };
            };
            return go(q)(Data_List_Types.Nil.value);
        };
    };
};

// | Decompose a catenable list into a `Tuple` of the first element and
// | the rest of the catenable list.
// |
// | Running time: `O(1)`
// |
// | Note that any single operation may run in `O(n)`.
var uncons = function (v) {
    if (v instanceof CatNil) {
        return Data_Maybe.Nothing.value;
    };
    if (v instanceof CatCons) {
        return new Data_Maybe.Just(new Data_Tuple.Tuple(v.value0, (function () {
            var $66 = Data_CatQueue["null"](v.value1);
            if ($66) {
                return CatNil.value;
            };
            return foldr(link)(CatNil.value)(v.value1);
        })()));
    };
    throw new Error("Failed pattern match at Data.CatList (line 99, column 1 - line 99, column 61): " + [ v.constructor.name ]);
};
var foldableCatList = {
    foldMap: function (dictMonoid) {
        return Data_Foldable.foldMapDefaultL(foldableCatList)(dictMonoid);
    },
    foldr: function (f) {
        return function (s) {
            return function (l) {
                return Data_Foldable.foldrDefault(foldableCatList)(f)(s)(l);
            };
        };
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
                    throw new Error("Failed pattern match at Data.CatList (line 156, column 16 - line 158, column 22): " + [ v.constructor.name ]);
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

// | Number of elements in queue.
// |
// | Running time: `O(n)` in length of queue.
var length = /* #__PURE__ */ Data_Foldable.length(foldableCatList)(Data_Semiring.semiringInt);
var foldMap = function (dictMonoid) {
    var mempty = Data_Monoid.mempty(dictMonoid);
    var append2 = Data_Semigroup.append(dictMonoid.Semigroup0());
    return function (v) {
        return function (v1) {
            if (v1 instanceof CatNil) {
                return mempty;
            };
            if (v1 instanceof CatCons) {
                var d = (function () {
                    var $75 = Data_CatQueue["null"](v1.value1);
                    if ($75) {
                        return CatNil.value;
                    };
                    return foldr(link)(CatNil.value)(v1.value1);
                })();
                return append2(v(v1.value0))(foldMap(dictMonoid)(v)(d));
            };
            throw new Error("Failed pattern match at Data.CatList (line 134, column 1 - line 134, column 62): " + [ v.constructor.name, v1.constructor.name ]);
        };
    };
};

// | Create an empty catenable list.
// |
// | Running time: `O(1)`
var empty = /* #__PURE__ */ (function () {
    return CatNil.value;
})();

// | Append all elements of a catenable list to the end of another
// | catenable list, create a new catenable list.
// |
// | Running time: `O(1)`
var append = link;

// | Append an element to the beginning of the catenable list, creating a new
// | catenable list.
// |
// | Running time: `O(1)`
var cons = function (a) {
    return function (cat) {
        return append(new CatCons(a, Data_CatQueue.empty))(cat);
    };
};
var functorCatList = {
    map: function (v) {
        return function (v1) {
            if (v1 instanceof CatNil) {
                return CatNil.value;
            };
            if (v1 instanceof CatCons) {
                var d = (function () {
                    var $80 = Data_CatQueue["null"](v1.value1);
                    if ($80) {
                        return CatNil.value;
                    };
                    return foldr(link)(CatNil.value)(v1.value1);
                })();
                return cons(v(v1.value0))(Data_Functor.map(functorCatList)(v)(d));
            };
            throw new Error("Failed pattern match at Data.CatList (line 184, column 1 - line 188, column 26): " + [ v.constructor.name, v1.constructor.name ]);
        };
    }
};

// | Create a catenable list with a single item.
// |
// | Running time: `O(1)`
var singleton = function (a) {
    return cons(a)(CatNil.value);
};
var traversableCatList = {
    traverse: function (dictApplicative) {
        var pure = Control_Applicative.pure(dictApplicative);
        var Apply0 = dictApplicative.Apply0();
        var apply = Control_Apply.apply(Apply0);
        var map = Data_Functor.map(Apply0.Functor0());
        return function (v) {
            return function (v1) {
                if (v1 instanceof CatNil) {
                    return pure(CatNil.value);
                };
                if (v1 instanceof CatCons) {
                    var d = (function () {
                        var $85 = Data_CatQueue["null"](v1.value1);
                        if ($85) {
                            return CatNil.value;
                        };
                        return foldr(link)(CatNil.value)(v1.value1);
                    })();
                    return apply(map(cons)(v(v1.value0)))(Data_Traversable.traverse(traversableCatList)(dictApplicative)(v)(d));
                };
                throw new Error("Failed pattern match at Data.CatList (line 174, column 1 - line 182, column 33): " + [ v.constructor.name, v1.constructor.name ]);
            };
        };
    },
    sequence: function (dictApplicative) {
        var pure = Control_Applicative.pure(dictApplicative);
        var Apply0 = dictApplicative.Apply0();
        var apply = Control_Apply.apply(Apply0);
        var map = Data_Functor.map(Apply0.Functor0());
        return function (v) {
            if (v instanceof CatNil) {
                return pure(CatNil.value);
            };
            if (v instanceof CatCons) {
                var d = (function () {
                    var $89 = Data_CatQueue["null"](v.value1);
                    if ($89) {
                        return CatNil.value;
                    };
                    return foldr(link)(CatNil.value)(v.value1);
                })();
                return apply(map(cons)(v.value0))(Data_Traversable.sequence(traversableCatList)(dictApplicative)(d));
            };
            throw new Error("Failed pattern match at Data.CatList (line 174, column 1 - line 182, column 33): " + [ v.constructor.name ]);
        };
    },
    Functor0: function () {
        return functorCatList;
    },
    Foldable1: function () {
        return foldableCatList;
    }
};

// | Running time: `O(1)`
var semigroupCatList = {
    append: append
};
var monoidCatList = /* #__PURE__ */ (function () {
    return {
        mempty: CatNil.value,
        Semigroup0: function () {
            return semigroupCatList;
        }
    };
})();
var monadCatList = {
    Applicative0: function () {
        return applicativeCatList;
    },
    Bind1: function () {
        return bindCatList;
    }
};
var bindCatList = {
    bind: /* #__PURE__ */ Data_Function.flip(/* #__PURE__ */ foldMap(monoidCatList)),
    Apply0: function () {
        return $lazy_applyCatList(0);
    }
};
var applicativeCatList = {
    pure: singleton,
    Apply0: function () {
        return $lazy_applyCatList(0);
    }
};
var $lazy_applyCatList = /* #__PURE__ */ $runtime_lazy("applyCatList", "Data.CatList", function () {
    return {
        apply: Control_Monad.ap(monadCatList),
        Functor0: function () {
            return functorCatList;
        }
    };
});
var applyCatList = /* #__PURE__ */ $lazy_applyCatList(190);

// | Convert any `Foldable` into a `CatList`.
// |
// | Running time: `O(n)`
var fromFoldable = function (dictFoldable) {
    var foldMap1 = Data_Foldable.foldMap(dictFoldable)(monoidCatList);
    return function (f) {
        return foldMap1(singleton)(f);
    };
};

// | Append an element to the end of the catenable list, creating a new
// | catenable list.
// |
// | Running time: `O(1)`
var snoc = function (cat) {
    return function (a) {
        return append(cat)(new CatCons(a, Data_CatQueue.empty));
    };
};
var unfoldable1CatList = {
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
                        throw new Error("Failed pattern match at Data.CatList (line 170, column 24 - line 172, column 57): " + [ v.constructor.name ]);
                    };
                    while (!$tco_done) {
                        $tco_result = $tco_loop($tco_var_source, $copy_memo);
                    };
                    return $tco_result;
                };
            };
            return go(b)(CatNil.value);
        };
    }
};
var unfoldableCatList = {
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
                        throw new Error("Failed pattern match at Data.CatList (line 163, column 24 - line 165, column 57): " + [ v.constructor.name ]);
                    };
                    while (!$tco_done) {
                        $tco_result = $tco_loop($tco_var_source, $copy_memo);
                    };
                    return $tco_result;
                };
            };
            return go(b)(CatNil.value);
        };
    },
    Unfoldable10: function () {
        return unfoldable1CatList;
    }
};
var altCatList = {
    alt: append,
    Functor0: function () {
        return functorCatList;
    }
};
var plusCatList = {
    empty: empty,
    Alt0: function () {
        return altCatList;
    }
};
var alternativeCatList = {
    Applicative0: function () {
        return applicativeCatList;
    },
    Plus1: function () {
        return plusCatList;
    }
};
var monadPlusCatList = {
    Monad0: function () {
        return monadCatList;
    },
    Alternative1: function () {
        return alternativeCatList;
    }
};
export {
    CatNil,
    CatCons,
    empty,
    $$null as null,
    singleton,
    length,
    append,
    cons,
    snoc,
    uncons,
    fromFoldable,
    semigroupCatList,
    monoidCatList,
    showCatList,
    foldableCatList,
    unfoldableCatList,
    unfoldable1CatList,
    traversableCatList,
    functorCatList,
    applyCatList,
    applicativeCatList,
    bindCatList,
    monadCatList,
    altCatList,
    plusCatList,
    alternativeCatList,
    monadPlusCatList
};
