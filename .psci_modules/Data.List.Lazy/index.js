// | This module defines a type of _lazy_ linked lists, and associated helper
// | functions and type class instances.
// |
// | _Note_: Depending on your use-case, you may prefer to use
// | `Data.Sequence` instead, which might give better performance for certain
// | use cases. This module is an improvement over `Data.Array` when working with
// | immutable lists of data in a purely-functional setting, but does not have
// | good random-access performance.
import * as Control_Alt from "../Control.Alt/index.js";
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Apply from "../Control.Apply/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Control_Category from "../Control.Category/index.js";
import * as Control_Lazy from "../Control.Lazy/index.js";
import * as Control_Monad_Rec_Class from "../Control.Monad.Rec.Class/index.js";
import * as Data_Boolean from "../Data.Boolean/index.js";
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Foldable from "../Data.Foldable/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_HeytingAlgebra from "../Data.HeytingAlgebra/index.js";
import * as Data_Lazy from "../Data.Lazy/index.js";
import * as Data_List_Internal from "../Data.List.Internal/index.js";
import * as Data_List_Lazy_Types from "../Data.List.Lazy.Types/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Newtype from "../Data.Newtype/index.js";
import * as Data_NonEmpty from "../Data.NonEmpty/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Ordering from "../Data.Ordering/index.js";
import * as Data_Semigroup from "../Data.Semigroup/index.js";
import * as Data_Show from "../Data.Show/index.js";
import * as Data_Traversable from "../Data.Traversable/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
import * as Data_Unfoldable from "../Data.Unfoldable/index.js";
var apply = /* #__PURE__ */ Control_Apply.apply(Data_Lazy.applyLazy);
var map = /* #__PURE__ */ Data_Functor.map(Data_Lazy.functorLazy);
var unwrap = /* #__PURE__ */ Data_Newtype.unwrap();
var sequence = /* #__PURE__ */ Data_Traversable.sequence(Data_List_Lazy_Types.traversableList);
var foldr = /* #__PURE__ */ Data_Foldable.foldr(Data_List_Lazy_Types.foldableList);
var map1 = /* #__PURE__ */ Data_Functor.map(Data_Maybe.functorMaybe);
var tailRecM2 = /* #__PURE__ */ Control_Monad_Rec_Class.tailRecM2(Control_Monad_Rec_Class.monadRecMaybe);
var defer = /* #__PURE__ */ Control_Lazy.defer(Data_List_Lazy_Types.lazyList);
var foldl = /* #__PURE__ */ Data_Foldable.foldl(Data_List_Lazy_Types.foldableList);
var fix = /* #__PURE__ */ Control_Lazy.fix(Data_List_Lazy_Types.lazyList);
var unfoldr = /* #__PURE__ */ Data_Unfoldable.unfoldr(Data_List_Lazy_Types.unfoldableList);
var map2 = /* #__PURE__ */ Data_Functor.map(Data_List_Lazy_Types.functorList);
var bind = /* #__PURE__ */ Control_Bind.bind(Data_Maybe.bindMaybe);
var pure = /* #__PURE__ */ Control_Applicative.pure(Data_Maybe.applicativeMaybe);
var any = /* #__PURE__ */ Data_Foldable.any(Data_List_Lazy_Types.foldableList)(Data_HeytingAlgebra.heytingAlgebraBoolean);
var append1 = /* #__PURE__ */ Data_Semigroup.append(Data_List_Lazy_Types.semigroupList);
var bind1 = /* #__PURE__ */ Control_Bind.bind(Data_List_Lazy_Types.bindList);
var identity = /* #__PURE__ */ Control_Category.identity(Control_Category.categoryFn);

//------------------------------------------------------------------------------
// Sorting ---------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
// Sublists --------------------------------------------------------------------
//------------------------------------------------------------------------------
// | A newtype used in cases where there is a list to be matched.
var Pattern = function (x) {
    return x;
};

//------------------------------------------------------------------------------
// Zipping ---------------------------------------------------------------------
//------------------------------------------------------------------------------
// | Apply a function to pairs of elements at the same positions in two lists,
// | collecting the results in a new list.
// |
// | If one list is longer, elements will be discarded from the longer list.
// |
// | For example
// |
// | ```purescript
// | zipWith (*) (1 : 2 : 3 : Nil) (4 : 5 : 6 : 7 Nil) == 4 : 10 : 18 : Nil
// | ```
// |
// | Running time: `O(min(m, n))`
var zipWith = function (f) {
    return function (xs) {
        return function (ys) {
            var go = function (v) {
                return function (v1) {
                    if (v instanceof Data_List_Lazy_Types.Nil) {
                        return Data_List_Lazy_Types.Nil.value;
                    };
                    if (v1 instanceof Data_List_Lazy_Types.Nil) {
                        return Data_List_Lazy_Types.Nil.value;
                    };
                    if (v instanceof Data_List_Lazy_Types.Cons && v1 instanceof Data_List_Lazy_Types.Cons) {
                        return new Data_List_Lazy_Types.Cons(f(v.value0)(v1.value0), zipWith(f)(v.value1)(v1.value1));
                    };
                    throw new Error("Failed pattern match at Data.List.Lazy (line 705, column 3 - line 705, column 35): " + [ v.constructor.name, v1.constructor.name ]);
                };
            };
            return apply(map(go)(unwrap(xs)))(unwrap(ys));
        };
    };
};

// | A generalization of `zipWith` which accumulates results in some `Applicative`
// | functor.
var zipWithA = function (dictApplicative) {
    var sequence1 = sequence(dictApplicative);
    return function (f) {
        return function (xs) {
            return function (ys) {
                return sequence1(zipWith(f)(xs)(ys));
            };
        };
    };
};

// | Collect pairs of elements at the same positions in two lists.
// |
// | Running time: `O(min(m, n))`
var zip = /* #__PURE__ */ (function () {
    return zipWith(Data_Tuple.Tuple.create);
})();

// | Update the element at the specified index, returning a new list,
// | or return the original list unchanged if the index is out-of-bounds.
// |
// | Running time: `O(n)`
var updateAt = function (n) {
    return function (x) {
        return function (xs) {
            var go = function (v) {
                return function (v1) {
                    if (v1 instanceof Data_List_Lazy_Types.Nil) {
                        return Data_List_Lazy_Types.Nil.value;
                    };
                    if (v === 0 && v1 instanceof Data_List_Lazy_Types.Cons) {
                        return new Data_List_Lazy_Types.Cons(x, v1.value1);
                    };
                    if (v1 instanceof Data_List_Lazy_Types.Cons) {
                        return new Data_List_Lazy_Types.Cons(v1.value0, updateAt(v - 1 | 0)(x)(v1.value1));
                    };
                    throw new Error("Failed pattern match at Data.List.Lazy (line 361, column 3 - line 361, column 17): " + [ v.constructor.name, v1.constructor.name ]);
                };
            };
            return map(go(n))(unwrap(xs));
        };
    };
};

// | Transforms a list of pairs into a list of first components and a list of
// | second components.
var unzip = /* #__PURE__ */ (function () {
    return foldr(function (v) {
        return function (v1) {
            return new Data_Tuple.Tuple(Data_List_Lazy_Types.cons(v.value0)(v1.value0), Data_List_Lazy_Types.cons(v.value1)(v1.value1));
        };
    })(new Data_Tuple.Tuple(Data_List_Lazy_Types.nil, Data_List_Lazy_Types.nil));
})();

// | Break a list into its first element, and the remaining elements,
// | or `Nothing` if the list is empty.
// |
// | Running time: `O(1)`
var uncons = function (xs) {
    var v = Data_List_Lazy_Types.step(xs);
    if (v instanceof Data_List_Lazy_Types.Nil) {
        return Data_Maybe.Nothing.value;
    };
    if (v instanceof Data_List_Lazy_Types.Cons) {
        return new Data_Maybe.Just({
            head: v.value0,
            tail: v.value1
        });
    };
    throw new Error("Failed pattern match at Data.List.Lazy (line 288, column 13 - line 290, column 44): " + [ v.constructor.name ]);
};

// | Convert a list into any unfoldable structure.
// |
// | Running time: `O(n)`
var toUnfoldable = function (dictUnfoldable) {
    return Data_Unfoldable.unfoldr(dictUnfoldable)(function (xs) {
        return map1(function (rec) {
            return new Data_Tuple.Tuple(rec.head, rec.tail);
        })(uncons(xs));
    });
};

// | Take those elements from the front of a list which match a predicate.
// |
// | Running time (worst case): `O(n)`
var takeWhile = function (p) {
    var go = function (v) {
        if (v instanceof Data_List_Lazy_Types.Cons && p(v.value0)) {
            return new Data_List_Lazy_Types.Cons(v.value0, takeWhile(p)(v.value1));
        };
        return Data_List_Lazy_Types.Nil.value;
    };
    var $331 = map(go);
    return function ($332) {
        return Data_List_Lazy_Types.List($331(unwrap($332)));
    };
};

// | Take the specified number of elements from the front of a list.
// |
// | Running time: `O(n)` where `n` is the number of elements to take.
var take = function (n) {
    var go = function (v) {
        return function (v1) {
            if (v1 instanceof Data_List_Lazy_Types.Nil) {
                return Data_List_Lazy_Types.Nil.value;
            };
            if (v1 instanceof Data_List_Lazy_Types.Cons) {
                return new Data_List_Lazy_Types.Cons(v1.value0, take(v - 1 | 0)(v1.value1));
            };
            throw new Error("Failed pattern match at Data.List.Lazy (line 505, column 3 - line 505, column 32): " + [ v.constructor.name, v1.constructor.name ]);
        };
    };
    var $202 = n <= 0;
    if ($202) {
        return Data_Function["const"](Data_List_Lazy_Types.nil);
    };
    var $333 = map(go(n));
    return function ($334) {
        return Data_List_Lazy_Types.List($333(unwrap($334)));
    };
};

// | Get all but the first element of a list, or `Nothing` if the list is empty.
// |
// | Running time: `O(1)`
var tail = function (xs) {
    return map1(function (v) {
        return v.tail;
    })(uncons(xs));
};

// | If the list starts with the given prefix, return the portion of the
// | list left after removing it, as a Just value. Otherwise, return Nothing.
// | * `stripPrefix (Pattern (fromFoldable [1])) (fromFoldable [1,2]) == Just (fromFoldable [2])`
// | * `stripPrefix (Pattern (fromFoldable [])) (fromFoldable [1]) == Just (fromFoldable [1])`
// | * `stripPrefix (Pattern (fromFoldable [2])) (fromFoldable [1]) == Nothing`
// |
// | Running time: `O(n)` where `n` is the number of elements to strip.
var stripPrefix = function (dictEq) {
    var eq = Data_Eq.eq(dictEq);
    return function (v) {
        return function (s) {
            var go = function (prefix) {
                return function (input) {
                    var v1 = Data_List_Lazy_Types.step(prefix);
                    if (v1 instanceof Data_List_Lazy_Types.Nil) {
                        return new Data_Maybe.Just(new Control_Monad_Rec_Class.Done(input));
                    };
                    if (v1 instanceof Data_List_Lazy_Types.Cons) {
                        var v2 = Data_List_Lazy_Types.step(input);
                        if (v2 instanceof Data_List_Lazy_Types.Cons && eq(v1.value0)(v2.value0)) {
                            return new Data_Maybe.Just(new Control_Monad_Rec_Class.Loop({
                                a: v1.value1,
                                b: v2.value1
                            }));
                        };
                        return Data_Maybe.Nothing.value;
                    };
                    throw new Error("Failed pattern match at Data.List.Lazy (line 487, column 21 - line 491, column 19): " + [ v1.constructor.name ]);
                };
            };
            return tailRecM2(go)(v)(s);
        };
    };
};

// | Split a list into two parts:
// |
// | 1. the longest initial segment for which all elements satisfy the specified predicate
// | 2. the remaining elements
// |
// | For example,
// |
// | ```purescript
// | span (\n -> n % 2 == 1) (1 : 3 : 2 : 4 : 5 : Nil) == Tuple (1 : 3 : Nil) (2 : 4 : 5 : Nil)
// | ```
// |
// | Running time: `O(n)`
var span = function (p) {
    return function (xs) {
        var v = uncons(xs);
        if (v instanceof Data_Maybe.Just && p(v.value0.head)) {
            var v1 = span(p)(v.value0.tail);
            return {
                init: Data_List_Lazy_Types.cons(v.value0.head)(v1.init),
                rest: v1.rest
            };
        };
        return {
            init: Data_List_Lazy_Types.nil,
            rest: xs
        };
    };
};

//------------------------------------------------------------------------------
// Extending lists -------------------------------------------------------------
//------------------------------------------------------------------------------
// | Append an element to the end of a list, creating a new list.
// |
// | Running time: `O(n)`
var snoc = function (xs) {
    return function (x) {
        return foldr(Data_List_Lazy_Types.cons)(Data_List_Lazy_Types.cons(x)(Data_List_Lazy_Types.nil))(xs);
    };
};

//------------------------------------------------------------------------------
// List creation ---------------------------------------------------------------
//------------------------------------------------------------------------------
// | Create a list with a single element.
// |
// | Running time: `O(1)`
var singleton = function (a) {
    return Data_List_Lazy_Types.cons(a)(Data_List_Lazy_Types.nil);
};
var showPattern = function (dictShow) {
    var show = Data_Show.show(Data_List_Lazy_Types.showList(dictShow));
    return {
        show: function (v) {
            return "(Pattern " + (show(v) + ")");
        }
    };
};

// | Perform a left scan lazily
var scanlLazy = function (f) {
    return function (acc) {
        return function (xs) {
            var go = function (v) {
                if (v instanceof Data_List_Lazy_Types.Nil) {
                    return Data_List_Lazy_Types.Nil.value;
                };
                if (v instanceof Data_List_Lazy_Types.Cons) {
                    var acc$prime = f(acc)(v.value0);
                    return new Data_List_Lazy_Types.Cons(acc$prime, scanlLazy(f)(acc$prime)(v.value1));
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 776, column 5 - line 776, column 27): " + [ v.constructor.name ]);
            };
            return map(go)(unwrap(xs));
        };
    };
};

//------------------------------------------------------------------------------
// Transformations -------------------------------------------------------------
//------------------------------------------------------------------------------
// | Reverse a list.
// |
// | Running time: `O(n)`
var reverse = function (xs) {
    return defer(function (v) {
        return foldl(Data_Function.flip(Data_List_Lazy_Types.cons))(Data_List_Lazy_Types.nil)(xs);
    });
};

// | Perform a monadic action `n` times collecting all of the results.
var replicateM = function (dictMonad) {
    var pure1 = Control_Applicative.pure(dictMonad.Applicative0());
    var bind2 = Control_Bind.bind(dictMonad.Bind1());
    return function (n) {
        return function (m) {
            if (n < 1) {
                return pure1(Data_List_Lazy_Types.nil);
            };
            if (Data_Boolean.otherwise) {
                return bind2(m)(function (a) {
                    return bind2(replicateM(dictMonad)(n - 1 | 0)(m))(function (as) {
                        return pure1(Data_List_Lazy_Types.cons(a)(as));
                    });
                });
            };
            throw new Error("Failed pattern match at Data.List.Lazy (line 164, column 1 - line 164, column 62): " + [ n.constructor.name, m.constructor.name ]);
        };
    };
};

// | Create a list by repeating an element
var repeat = function (x) {
    return fix(function (xs) {
        return Data_List_Lazy_Types.cons(x)(xs);
    });
};

// | Create a list with repeated instances of a value.
var replicate = function (i) {
    return function (xs) {
        return take(i)(repeat(xs));
    };
};

// | Create a list containing a range of integers, including both endpoints.
var range = function (start) {
    return function (end) {
        if (start > end) {
            var g = function (x) {
                if (x >= end) {
                    return new Data_Maybe.Just(new Data_Tuple.Tuple(x, x - 1 | 0));
                };
                if (Data_Boolean.otherwise) {
                    return Data_Maybe.Nothing.value;
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 151, column 13 - line 152, column 38): " + [ x.constructor.name ]);
            };
            return unfoldr(g)(start);
        };
        if (Data_Boolean.otherwise) {
            var f = function (x) {
                if (x <= end) {
                    return new Data_Maybe.Just(new Data_Tuple.Tuple(x, x + 1 | 0));
                };
                if (Data_Boolean.otherwise) {
                    return Data_Maybe.Nothing.value;
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 156, column 5 - line 157, column 30): " + [ x.constructor.name ]);
            };
            return unfoldr(f)(start);
        };
        throw new Error("Failed pattern match at Data.List.Lazy (line 148, column 1 - line 148, column 32): " + [ start.constructor.name, end.constructor.name ]);
    };
};

// | Returns a tuple of lists of elements which do
// | and do not satisfy a predicate, respectively.
// |
// | Running time: `O(n)`
var partition = function (f) {
    var go = function (x) {
        return function (v) {
            var $230 = f(x);
            if ($230) {
                return {
                    yes: Data_List_Lazy_Types.cons(x)(v.yes),
                    no: v.no
                };
            };
            return {
                yes: v.yes,
                no: Data_List_Lazy_Types.cons(x)(v.no)
            };
        };
    };
    return foldr(go)({
        yes: Data_List_Lazy_Types.nil,
        no: Data_List_Lazy_Types.nil
    });
};

//------------------------------------------------------------------------------
// List size -------------------------------------------------------------------
//------------------------------------------------------------------------------
// | Test whether a list is empty.
// |
// | Running time: `O(1)`
var $$null = function ($335) {
    return Data_Maybe.isNothing(uncons($335));
};

// | Remove duplicate elements from a list based on the provided comparison function.
// | Keeps the first occurrence of each element in the input list,
// | in the same order they appear in the input list.
// |
// | Running time: `O(n log n)`
var nubBy = function (p) {
    var goStep = function (v) {
        return function (v1) {
            if (v1 instanceof Data_List_Lazy_Types.Nil) {
                return Data_List_Lazy_Types.Nil.value;
            };
            if (v1 instanceof Data_List_Lazy_Types.Cons) {
                var v2 = Data_List_Internal.insertAndLookupBy(p)(v1.value0)(v);
                if (v2.found) {
                    return Data_List_Lazy_Types.step(go(v2.result)(v1.value1));
                };
                return new Data_List_Lazy_Types.Cons(v1.value0, go(v2.result)(v1.value1));
            };
            throw new Error("Failed pattern match at Data.List.Lazy (line 613, column 5 - line 613, column 23): " + [ v.constructor.name, v1.constructor.name ]);
        };
    };
    var go = function (s) {
        return function (v) {
            return map(goStep(s))(v);
        };
    };
    return go(Data_List_Internal.emptySet);
};

//------------------------------------------------------------------------------
// Set-like operations ---------------------------------------------------------
//------------------------------------------------------------------------------
// | Remove duplicate elements from a list.
// | Keeps the first occurrence of each element in the input list,
// | in the same order they appear in the input list.
// |
// | Running time: `O(n log n)`
var nub = function (dictOrd) {
    return nubBy(Data_Ord.compare(dictOrd));
};
var newtypePattern = {
    Coercible0: function () {
        return undefined;
    }
};

// | Apply a function to each element in a list, keeping only the results which
// | contain a value.
// |
// | Running time: `O(n)`
var mapMaybe = function (f) {
    var go = function ($copy_v) {
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v) {
            if (v instanceof Data_List_Lazy_Types.Nil) {
                $tco_done = true;
                return Data_List_Lazy_Types.Nil.value;
            };
            if (v instanceof Data_List_Lazy_Types.Cons) {
                var v1 = f(v.value0);
                if (v1 instanceof Data_Maybe.Nothing) {
                    $copy_v = Data_List_Lazy_Types.step(v.value1);
                    return;
                };
                if (v1 instanceof Data_Maybe.Just) {
                    $tco_done = true;
                    return new Data_List_Lazy_Types.Cons(v1.value0, mapMaybe(f)(v.value1));
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 448, column 5 - line 450, column 39): " + [ v1.constructor.name ]);
            };
            throw new Error("Failed pattern match at Data.List.Lazy (line 446, column 3 - line 446, column 15): " + [ v.constructor.name ]);
        };
        while (!$tco_done) {
            $tco_result = $tco_loop($copy_v);
        };
        return $tco_result;
    };
    var $336 = map(go);
    return function ($337) {
        return Data_List_Lazy_Types.List($336(unwrap($337)));
    };
};

// | Attempt a computation multiple times, requiring at least one success.
// |
// | The `Lazy` constraint is used to generate the result lazily, to ensure
// | termination.
var some = function (dictAlternative) {
    var apply1 = Control_Apply.apply((dictAlternative.Applicative0()).Apply0());
    var map3 = Data_Functor.map(((dictAlternative.Plus1()).Alt0()).Functor0());
    return function (dictLazy) {
        var defer1 = Control_Lazy.defer(dictLazy);
        return function (v) {
            return apply1(map3(Data_List_Lazy_Types.cons)(v))(defer1(function (v1) {
                return many(dictAlternative)(dictLazy)(v);
            }));
        };
    };
};

// | Attempt a computation multiple times, returning as many successful results
// | as possible (possibly zero).
// |
// | The `Lazy` constraint is used to generate the result lazily, to ensure
// | termination.
var many = function (dictAlternative) {
    var alt = Control_Alt.alt((dictAlternative.Plus1()).Alt0());
    var pure1 = Control_Applicative.pure(dictAlternative.Applicative0());
    return function (dictLazy) {
        return function (v) {
            return alt(some(dictAlternative)(dictLazy)(v))(pure1(Data_List_Lazy_Types.nil));
        };
    };
};

// | Get the length of a list
// |
// | Running time: `O(n)`
var length = /* #__PURE__ */ foldl(function (l) {
    return function (v) {
        return l + 1 | 0;
    };
})(0);

// | Get the last element in a list, or `Nothing` if the list is empty.
// |
// | Running time: `O(n)`.
var last = /* #__PURE__ */ (function () {
    var go = function ($copy_v) {
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v) {
            if (v instanceof Data_List_Lazy_Types.Cons) {
                if ($$null(v.value1)) {
                    $tco_done = true;
                    return new Data_Maybe.Just(v.value0);
                };
                if (Data_Boolean.otherwise) {
                    $copy_v = Data_List_Lazy_Types.step(v.value1);
                    return;
                };
            };
            $tco_done = true;
            return Data_Maybe.Nothing.value;
        };
        while (!$tco_done) {
            $tco_result = $tco_loop($copy_v);
        };
        return $tco_result;
    };
    return function ($338) {
        return go(Data_List_Lazy_Types.step($338));
    };
})();

// | Create a list by iterating a function
var iterate = function (f) {
    return function (x) {
        return fix(function (xs) {
            return Data_List_Lazy_Types.cons(x)(map2(f)(xs));
        });
    };
};

// | Insert an element into a list at the specified index, or append the element
// | to the end of the list if the index is out-of-bounds, returning a new list.
// |
// | Running time: `O(n)`
var insertAt = function (v) {
    return function (v1) {
        return function (v2) {
            if (v === 0) {
                return Data_List_Lazy_Types.cons(v1)(v2);
            };
            var go = function (v3) {
                if (v3 instanceof Data_List_Lazy_Types.Nil) {
                    return new Data_List_Lazy_Types.Cons(v1, Data_List_Lazy_Types.nil);
                };
                if (v3 instanceof Data_List_Lazy_Types.Cons) {
                    return new Data_List_Lazy_Types.Cons(v3.value0, insertAt(v - 1 | 0)(v1)(v3.value1));
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 340, column 3 - line 340, column 22): " + [ v3.constructor.name ]);
            };
            return map(go)(unwrap(v2));
        };
    };
};

// | Get all but the last element of a list, or `Nothing` if the list is empty.
// |
// | Running time: `O(n)`
var init = /* #__PURE__ */ (function () {
    var go = function (v) {
        if (v instanceof Data_List_Lazy_Types.Cons) {
            if ($$null(v.value1)) {
                return new Data_Maybe.Just(Data_List_Lazy_Types.nil);
            };
            if (Data_Boolean.otherwise) {
                return map1(Data_List_Lazy_Types.cons(v.value0))(go(Data_List_Lazy_Types.step(v.value1)));
            };
        };
        return Data_Maybe.Nothing.value;
    };
    return function ($339) {
        return go(Data_List_Lazy_Types.step($339));
    };
})();

//------------------------------------------------------------------------------
// Indexed operations ----------------------------------------------------------
//------------------------------------------------------------------------------
// | Get the element at the specified index, or `Nothing` if the index is out-of-bounds.
// |
// | Running time: `O(n)` where `n` is the required index.
var index = function (xs) {
    var go = function ($copy_v) {
        return function ($copy_v1) {
            var $tco_var_v = $copy_v;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(v, v1) {
                if (v instanceof Data_List_Lazy_Types.Nil) {
                    $tco_done = true;
                    return Data_Maybe.Nothing.value;
                };
                if (v instanceof Data_List_Lazy_Types.Cons && v1 === 0) {
                    $tco_done = true;
                    return new Data_Maybe.Just(v.value0);
                };
                if (v instanceof Data_List_Lazy_Types.Cons) {
                    $tco_var_v = Data_List_Lazy_Types.step(v.value1);
                    $copy_v1 = v1 - 1 | 0;
                    return;
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 302, column 3 - line 302, column 21): " + [ v.constructor.name, v1.constructor.name ]);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_v, $copy_v1);
            };
            return $tco_result;
        };
    };
    return go(Data_List_Lazy_Types.step(xs));
};

//------------------------------------------------------------------------------
// Non-indexed reads -----------------------------------------------------------
//------------------------------------------------------------------------------
// | Get the first element in a list, or `Nothing` if the list is empty.
// |
// | Running time: `O(1)`.
var head = function (xs) {
    return map1(function (v) {
        return v.head;
    })(uncons(xs));
};

//------------------------------------------------------------------------------
// Transpose -------------------------------------------------------------------
//------------------------------------------------------------------------------
// | The 'transpose' function transposes the rows and columns of its argument.
// | For example,
// |
// |     transpose ((1:2:3:nil) : (4:5:6:nil) : nil) ==
// |       ((1:4:nil) : (2:5:nil) : (3:6:nil) : nil)
// |
// | If some of the rows are shorter than the following rows, their elements are skipped:
// |
// |     transpose ((10:11:nil) : (20:nil) : nil : (30:31:32:nil) : nil) ==
// |       ((10:20:30:nil) : (11:31:nil) : (32:nil) : nil)
var transpose = function (xs) {
    var v = uncons(xs);
    if (v instanceof Data_Maybe.Nothing) {
        return xs;
    };
    if (v instanceof Data_Maybe.Just) {
        var v1 = uncons(v.value0.head);
        if (v1 instanceof Data_Maybe.Nothing) {
            return transpose(v.value0.tail);
        };
        if (v1 instanceof Data_Maybe.Just) {
            return Data_List_Lazy_Types.cons(Data_List_Lazy_Types.cons(v1.value0.head)(mapMaybe(head)(v.value0.tail)))(transpose(Data_List_Lazy_Types.cons(v1.value0.tail)(mapMaybe(tail)(v.value0.tail))));
        };
        throw new Error("Failed pattern match at Data.List.Lazy (line 746, column 7 - line 750, column 72): " + [ v1.constructor.name ]);
    };
    throw new Error("Failed pattern match at Data.List.Lazy (line 742, column 3 - line 750, column 72): " + [ v.constructor.name ]);
};

// | Group equal, consecutive elements of a list into lists, using the specified
// | equivalence relation to determine equality.
// |
// | Running time: `O(n)`
var groupBy = function (eq) {
    var go = function (v) {
        if (v instanceof Data_List_Lazy_Types.Nil) {
            return Data_List_Lazy_Types.Nil.value;
        };
        if (v instanceof Data_List_Lazy_Types.Cons) {
            var v1 = span(eq(v.value0))(v.value1);
            return new Data_List_Lazy_Types.Cons(Data_Lazy.defer(function (v2) {
                return new Data_NonEmpty.NonEmpty(v.value0, v1.init);
            }), groupBy(eq)(v1.rest));
        };
        throw new Error("Failed pattern match at Data.List.Lazy (line 576, column 3 - line 576, column 15): " + [ v.constructor.name ]);
    };
    var $340 = map(go);
    return function ($341) {
        return Data_List_Lazy_Types.List($340(unwrap($341)));
    };
};

// | Group equal, consecutive elements of a list into lists.
// |
// | For example,
// |
// | ```purescript
// | group (1 : 1 : 2 : 2 : 1 : Nil) == (1 : 1 : Nil) : (2 : 2 : Nil) : (1 : Nil) : Nil
// | ```
// |
// | Running time: `O(n)`
var group = function (dictEq) {
    return groupBy(Data_Eq.eq(dictEq));
};
var fromStep = /* #__PURE__ */ (function () {
    var $342 = Control_Applicative.pure(Data_Lazy.applicativeLazy);
    return function ($343) {
        return Data_List_Lazy_Types.List($342($343));
    };
})();

// | Insert an element into a sorted list, using the specified function to determine the ordering
// | of elements.
// |
// | Running time: `O(n)`
var insertBy = function (cmp) {
    return function (x) {
        return function (xs) {
            var go = function (v) {
                if (v instanceof Data_List_Lazy_Types.Nil) {
                    return new Data_List_Lazy_Types.Cons(x, Data_List_Lazy_Types.nil);
                };
                if (v instanceof Data_List_Lazy_Types.Cons) {
                    var v1 = cmp(x)(v.value0);
                    if (v1 instanceof Data_Ordering.GT) {
                        return new Data_List_Lazy_Types.Cons(v.value0, insertBy(cmp)(x)(v.value1));
                    };
                    return new Data_List_Lazy_Types.Cons(x, fromStep(v));
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 238, column 3 - line 238, column 22): " + [ v.constructor.name ]);
            };
            return map(go)(unwrap(xs));
        };
    };
};

// | Insert an element into a sorted list.
// |
// | Running time: `O(n)`
var insert = function (dictOrd) {
    return insertBy(Data_Ord.compare(dictOrd));
};

// | Construct a list from a foldable structure.
// |
// | Running time: `O(n)`
var fromFoldable = function (dictFoldable) {
    return Data_Foldable.foldr(dictFoldable)(Data_List_Lazy_Types.cons)(Data_List_Lazy_Types.nil);
};

// | Perform a right fold lazily
var foldrLazy = function (dictLazy) {
    var defer1 = Control_Lazy.defer(dictLazy);
    return function (op) {
        return function (z) {
            var go = function (xs) {
                var v = Data_List_Lazy_Types.step(xs);
                if (v instanceof Data_List_Lazy_Types.Cons) {
                    return defer1(function (v1) {
                        return op(v.value0)(go(v.value1));
                    });
                };
                if (v instanceof Data_List_Lazy_Types.Nil) {
                    return z;
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 768, column 13 - line 770, column 15): " + [ v.constructor.name ]);
            };
            return go;
        };
    };
};

//------------------------------------------------------------------------------
// Folding ---------------------------------------------------------------------
//------------------------------------------------------------------------------
// | Perform a fold using a monadic step function.
var foldM = function (dictMonad) {
    var pure1 = Control_Applicative.pure(dictMonad.Applicative0());
    var bind2 = Control_Bind.bind(dictMonad.Bind1());
    return function (f) {
        return function (b) {
            return function (xs) {
                var v = uncons(xs);
                if (v instanceof Data_Maybe.Nothing) {
                    return pure1(b);
                };
                if (v instanceof Data_Maybe.Just) {
                    return bind2(f(b)(v.value0.head))(function (b$prime) {
                        return foldM(dictMonad)(f)(b$prime)(v.value0.tail);
                    });
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 759, column 5 - line 762, column 54): " + [ v.constructor.name ]);
            };
        };
    };
};

// | Find the first index for which a predicate holds.
var findIndex = function (fn) {
    var go = function (n) {
        return function (list) {
            return bind(uncons(list))(function (o) {
                var $291 = fn(o.head);
                if ($291) {
                    return pure(n);
                };
                return go(n + 1 | 0)(o.tail);
            });
        };
    };
    return go(0);
};

// | Find the last index for which a predicate holds.
var findLastIndex = function (fn) {
    return function (xs) {
        return map1(function (v) {
            return (length(xs) - 1 | 0) - v | 0;
        })(findIndex(fn)(reverse(xs)));
    };
};

// | Filter where the predicate returns a monadic `Boolean`.
// |
// | For example:
// |
// | ```purescript
// | powerSet :: forall a. [a] -> [[a]]
// | powerSet = filterM (const [true, false])
// | ```
var filterM = function (dictMonad) {
    var pure1 = Control_Applicative.pure(dictMonad.Applicative0());
    var bind2 = Control_Bind.bind(dictMonad.Bind1());
    return function (p) {
        return function (list) {
            var v = uncons(list);
            if (v instanceof Data_Maybe.Nothing) {
                return pure1(Data_List_Lazy_Types.nil);
            };
            if (v instanceof Data_Maybe.Just) {
                return bind2(p(v.value0.head))(function (b) {
                    return bind2(filterM(dictMonad)(p)(v.value0.tail))(function (xs$prime) {
                        return pure1((function () {
                            if (b) {
                                return Data_List_Lazy_Types.cons(v.value0.head)(xs$prime);
                            };
                            return xs$prime;
                        })());
                    });
                });
            };
            throw new Error("Failed pattern match at Data.List.Lazy (line 431, column 5 - line 436, column 48): " + [ v.constructor.name ]);
        };
    };
};

// | Filter a list, keeping the elements which satisfy a predicate function.
// |
// | Running time: `O(n)`
var filter = function (p) {
    var go = function ($copy_v) {
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v) {
            if (v instanceof Data_List_Lazy_Types.Nil) {
                $tco_done = true;
                return Data_List_Lazy_Types.Nil.value;
            };
            if (v instanceof Data_List_Lazy_Types.Cons) {
                if (p(v.value0)) {
                    $tco_done = true;
                    return new Data_List_Lazy_Types.Cons(v.value0, filter(p)(v.value1));
                };
                if (Data_Boolean.otherwise) {
                    $copy_v = Data_List_Lazy_Types.step(v.value1);
                    return;
                };
            };
            throw new Error("Failed pattern match at Data.List.Lazy (line 416, column 3 - line 416, column 15): " + [ v.constructor.name ]);
        };
        while (!$tco_done) {
            $tco_result = $tco_loop($copy_v);
        };
        return $tco_result;
    };
    var $344 = map(go);
    return function ($345) {
        return Data_List_Lazy_Types.List($344(unwrap($345)));
    };
};

// | Calculate the intersection of two lists, using the specified
// | function to determine equality of elements.
// |
// | Running time: `O(n^2)`
var intersectBy = function (eq) {
    return function (xs) {
        return function (ys) {
            return filter(function (x) {
                return any(eq(x))(ys);
            })(xs);
        };
    };
};

// | Calculate the intersection of two lists.
// |
// | Running time: `O(n^2)`
var intersect = function (dictEq) {
    return intersectBy(Data_Eq.eq(dictEq));
};

// | Remove duplicate elements from a list, using the specified
// | function to determine equality of elements.
// |
// | Running time: `O(n^2)`
var nubByEq = function (eq) {
    var go = function (v) {
        if (v instanceof Data_List_Lazy_Types.Nil) {
            return Data_List_Lazy_Types.Nil.value;
        };
        if (v instanceof Data_List_Lazy_Types.Cons) {
            return new Data_List_Lazy_Types.Cons(v.value0, nubByEq(eq)(filter(function (y) {
                return !eq(v.value0)(y);
            })(v.value1)));
        };
        throw new Error("Failed pattern match at Data.List.Lazy (line 633, column 3 - line 633, column 15): " + [ v.constructor.name ]);
    };
    var $346 = map(go);
    return function ($347) {
        return Data_List_Lazy_Types.List($346(unwrap($347)));
    };
};

// | Remove duplicate elements from a list.
// |
// | Running time: `O(n^2)`
var nubEq = function (dictEq) {
    return nubByEq(Data_Eq.eq(dictEq));
};
var eqPattern = function (dictEq) {
    var eq = Data_Eq.eq(Data_List_Lazy_Types.eqList(dictEq));
    return {
        eq: function (x) {
            return function (y) {
                return eq(x)(y);
            };
        }
    };
};
var ordPattern = function (dictOrd) {
    var compare = Data_Ord.compare(Data_List_Lazy_Types.ordList(dictOrd));
    var eqPattern1 = eqPattern(dictOrd.Eq0());
    return {
        compare: function (x) {
            return function (y) {
                return compare(x)(y);
            };
        },
        Eq0: function () {
            return eqPattern1;
        }
    };
};

// | Find the index of the last element equal to the specified element.
var elemLastIndex = function (dictEq) {
    var eq = Data_Eq.eq(dictEq);
    return function (x) {
        return findLastIndex(function (v) {
            return eq(v)(x);
        });
    };
};

// | Find the index of the first element equal to the specified element.
var elemIndex = function (dictEq) {
    var eq = Data_Eq.eq(dictEq);
    return function (x) {
        return findIndex(function (v) {
            return eq(v)(x);
        });
    };
};

// | Drop those elements from the front of a list which match a predicate.
// |
// | Running time (worst case): `O(n)`
var dropWhile = function (p) {
    var go = function ($copy_v) {
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v) {
            if (v instanceof Data_List_Lazy_Types.Cons && p(v.value0)) {
                $copy_v = Data_List_Lazy_Types.step(v.value1);
                return;
            };
            $tco_done = true;
            return fromStep(v);
        };
        while (!$tco_done) {
            $tco_result = $tco_loop($copy_v);
        };
        return $tco_result;
    };
    return function ($348) {
        return go(Data_List_Lazy_Types.step($348));
    };
};

// | Drop the specified number of elements from the front of a list.
// |
// | Running time: `O(n)` where `n` is the number of elements to drop.
var drop = function (n) {
    var go = function ($copy_v) {
        return function ($copy_v1) {
            var $tco_var_v = $copy_v;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(v, v1) {
                if (v === 0) {
                    $tco_done = true;
                    return v1;
                };
                if (v1 instanceof Data_List_Lazy_Types.Nil) {
                    $tco_done = true;
                    return Data_List_Lazy_Types.Nil.value;
                };
                if (v1 instanceof Data_List_Lazy_Types.Cons) {
                    $tco_var_v = v - 1 | 0;
                    $copy_v1 = Data_List_Lazy_Types.step(v1.value1);
                    return;
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 524, column 3 - line 524, column 15): " + [ v.constructor.name, v1.constructor.name ]);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_v, $copy_v1);
            };
            return $tco_result;
        };
    };
    var $349 = map(go(n));
    return function ($350) {
        return Data_List_Lazy_Types.List($349(unwrap($350)));
    };
};

// | Extract a sublist by a start and end index.
var slice = function (start) {
    return function (end) {
        return function (xs) {
            return take(end - start | 0)(drop(start)(xs));
        };
    };
};

// | Delete the first occurrence of an element from a list, using the specified
// | function to determine equality of elements.
// |
// | Running time: `O(n)`
var deleteBy = function (eq) {
    return function (x) {
        return function (xs) {
            var go = function (v) {
                if (v instanceof Data_List_Lazy_Types.Nil) {
                    return Data_List_Lazy_Types.Nil.value;
                };
                if (v instanceof Data_List_Lazy_Types.Cons) {
                    if (eq(x)(v.value0)) {
                        return Data_List_Lazy_Types.step(v.value1);
                    };
                    if (Data_Boolean.otherwise) {
                        return new Data_List_Lazy_Types.Cons(v.value0, deleteBy(eq)(x)(v.value1));
                    };
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 662, column 3 - line 662, column 15): " + [ v.constructor.name ]);
            };
            return map(go)(unwrap(xs));
        };
    };
};

// | Calculate the union of two lists, using the specified
// | function to determine equality of elements.
// |
// | Running time: `O(n^2)`
var unionBy = function (eq) {
    return function (xs) {
        return function (ys) {
            return append1(xs)(foldl(Data_Function.flip(deleteBy(eq)))(nubByEq(eq)(ys))(xs));
        };
    };
};

// | Calculate the union of two lists.
// |
// | Running time: `O(n^2)`
var union = function (dictEq) {
    return unionBy(Data_Eq.eq(dictEq));
};

// | Delete an element from a list at the specified index, returning a new list,
// | or return the original list unchanged if the index is out-of-bounds.
// |
// | Running time: `O(n)`
var deleteAt = function (n) {
    return function (xs) {
        var go = function (v) {
            return function (v1) {
                if (v1 instanceof Data_List_Lazy_Types.Nil) {
                    return Data_List_Lazy_Types.Nil.value;
                };
                if (v === 0 && v1 instanceof Data_List_Lazy_Types.Cons) {
                    return Data_List_Lazy_Types.step(v1.value1);
                };
                if (v1 instanceof Data_List_Lazy_Types.Cons) {
                    return new Data_List_Lazy_Types.Cons(v1.value0, deleteAt(v - 1 | 0)(v1.value1));
                };
                throw new Error("Failed pattern match at Data.List.Lazy (line 350, column 3 - line 350, column 17): " + [ v.constructor.name, v1.constructor.name ]);
            };
        };
        return map(go(n))(unwrap(xs));
    };
};

// | Delete the first occurrence of an element from a list.
// |
// | Running time: `O(n)`
var $$delete = function (dictEq) {
    return deleteBy(Data_Eq.eq(dictEq));
};

// | Delete the first occurrence of each element in the second list from the first list.
// |
// | Running time: `O(n^2)`
var difference = function (dictEq) {
    return foldl(Data_Function.flip($$delete(dictEq)));
};

// | Create a list by repeating another list
var cycle = function (xs) {
    return fix(function (ys) {
        return append1(xs)(ys);
    });
};

// | Apply a function to each element in a list, and flatten the results
// | into a single, new list.
// |
// | Running time: `O(n)`, where `n` is the total number of elements.
var concatMap = /* #__PURE__ */ Data_Function.flip(bind1);

// | Flatten a list of lists.
// |
// | Running time: `O(n)`, where `n` is the total number of elements.
var concat = function (v) {
    return bind1(v)(identity);
};

// | Filter a list of optional values, keeping only the elements which contain
// | a value.
var catMaybes = /* #__PURE__ */ mapMaybe(identity);

// | Update or delete the element at the specified index by applying a
// | function to the current value, returning a new list, or return the
// | original list unchanged if the index is out-of-bounds.
// |
// | Running time: `O(n)`
var alterAt = function (n) {
    return function (f) {
        return function (xs) {
            var go = function (v) {
                return function (v1) {
                    if (v1 instanceof Data_List_Lazy_Types.Nil) {
                        return Data_List_Lazy_Types.Nil.value;
                    };
                    if (v === 0 && v1 instanceof Data_List_Lazy_Types.Cons) {
                        var v2 = f(v1.value0);
                        if (v2 instanceof Data_Maybe.Nothing) {
                            return Data_List_Lazy_Types.step(v1.value1);
                        };
                        if (v2 instanceof Data_Maybe.Just) {
                            return new Data_List_Lazy_Types.Cons(v2.value0, v1.value1);
                        };
                        throw new Error("Failed pattern match at Data.List.Lazy (line 382, column 22 - line 384, column 26): " + [ v2.constructor.name ]);
                    };
                    if (v1 instanceof Data_List_Lazy_Types.Cons) {
                        return new Data_List_Lazy_Types.Cons(v1.value0, alterAt(v - 1 | 0)(f)(v1.value1));
                    };
                    throw new Error("Failed pattern match at Data.List.Lazy (line 381, column 3 - line 381, column 17): " + [ v.constructor.name, v1.constructor.name ]);
                };
            };
            return map(go(n))(unwrap(xs));
        };
    };
};

// | Update the element at the specified index by applying a function to
// | the current value, returning a new list, or return the original list unchanged
// | if the index is out-of-bounds.
// |
// | Running time: `O(n)`
var modifyAt = function (n) {
    return function (f) {
        return alterAt(n)(function ($351) {
            return Data_Maybe.Just.create(f($351));
        });
    };
};
export {
    toUnfoldable,
    fromFoldable,
    singleton,
    range,
    replicate,
    replicateM,
    some,
    many,
    repeat,
    iterate,
    cycle,
    $$null as null,
    length,
    snoc,
    insert,
    insertBy,
    head,
    last,
    tail,
    init,
    uncons,
    index,
    elemIndex,
    elemLastIndex,
    findIndex,
    findLastIndex,
    insertAt,
    deleteAt,
    updateAt,
    modifyAt,
    alterAt,
    reverse,
    concat,
    concatMap,
    filter,
    filterM,
    mapMaybe,
    catMaybes,
    Pattern,
    stripPrefix,
    slice,
    take,
    takeWhile,
    drop,
    dropWhile,
    span,
    group,
    groupBy,
    partition,
    nub,
    nubBy,
    nubEq,
    nubByEq,
    union,
    unionBy,
    $$delete as delete,
    deleteBy,
    difference,
    intersect,
    intersectBy,
    zipWith,
    zipWithA,
    zip,
    unzip,
    transpose,
    foldM,
    foldrLazy,
    scanlLazy,
    eqPattern,
    ordPattern,
    newtypePattern,
    showPattern
};
export {
    all,
    any,
    elem,
    find,
    findMap,
    fold,
    foldMap,
    foldl,
    foldr,
    intercalate,
    notElem
} from "../Data.Foldable/index.js";
export {
    List,
    Cons,
    Nil,
    cons,
    nil,
    step
} from "../Data.List.Lazy.Types/index.js";
export {
    scanl,
    scanr
} from "../Data.Traversable/index.js";
