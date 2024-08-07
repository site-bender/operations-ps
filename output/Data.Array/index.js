// Generated by purs version 0.15.15
import * as $foreign from "./foreign.js";
import * as Control_Alt from "../Control.Alt/index.js";
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Apply from "../Control.Apply/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Control_Category from "../Control.Category/index.js";
import * as Control_Lazy from "../Control.Lazy/index.js";
import * as Control_Monad_Rec_Class from "../Control.Monad.Rec.Class/index.js";
import * as Control_Monad_ST_Internal from "../Control.Monad.ST.Internal/index.js";
import * as Data_Array_ST from "../Data.Array.ST/index.js";
import * as Data_Array_ST_Iterator from "../Data.Array.ST.Iterator/index.js";
import * as Data_Boolean from "../Data.Boolean/index.js";
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Foldable from "../Data.Foldable/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Function_Uncurried from "../Data.Function.Uncurried/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_FunctorWithIndex from "../Data.FunctorWithIndex/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Ordering from "../Data.Ordering/index.js";
import * as Data_Semigroup from "../Data.Semigroup/index.js";
import * as Data_Traversable from "../Data.Traversable/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
import * as Data_Unfoldable from "../Data.Unfoldable/index.js";
var sequence = /* #__PURE__ */ Data_Traversable.sequence(Data_Traversable.traversableArray);
var traverse_ = /* #__PURE__ */ Data_Foldable.traverse_(Control_Monad_ST_Internal.applicativeST);
var $$void = /* #__PURE__ */ Data_Functor["void"](Control_Monad_ST_Internal.functorST);
var intercalate1 = /* #__PURE__ */ Data_Foldable.intercalate(Data_Foldable.foldableArray);
var apply = /* #__PURE__ */ Control_Apply.apply(Data_Maybe.applyMaybe);
var map = /* #__PURE__ */ Data_Functor.map(Data_Maybe.functorMaybe);
var map1 = /* #__PURE__ */ Data_Functor.map(Data_Functor.functorArray);
var map2 = /* #__PURE__ */ Data_Functor.map(Control_Monad_ST_Internal.functorST);
var fromJust = /* #__PURE__ */ Data_Maybe.fromJust();
var when = /* #__PURE__ */ Control_Applicative.when(Control_Monad_ST_Internal.applicativeST);
var notEq = /* #__PURE__ */ Data_Eq.notEq(Data_Ordering.eqOrdering);
var eq1 = /* #__PURE__ */ Data_Eq.eq(Data_Ordering.eqOrdering);
var foldMap1 = /* #__PURE__ */ Data_Foldable.foldMap(Data_Foldable.foldableArray);
var fold1 = /* #__PURE__ */ Data_Foldable.fold(Data_Foldable.foldableArray);
var append = /* #__PURE__ */ Data_Semigroup.append(Data_Semigroup.semigroupArray);
var traverse = /* #__PURE__ */ Data_Traversable.traverse(Data_Traversable.traversableArray);
var zipWith = /* #__PURE__ */ Data_Function_Uncurried.runFn3($foreign.zipWithImpl);
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
var zip = /* #__PURE__ */ (function () {
    return zipWith(Data_Tuple.Tuple.create);
})();
var updateAtIndices = function (dictFoldable) {
    var traverse_1 = traverse_(dictFoldable);
    return function (us) {
        return function (xs) {
            return Data_Array_ST.withArray(function (res) {
                return traverse_1(function (v) {
                    return Data_Array_ST.poke(v.value0)(v.value1)(res);
                })(us);
            })(xs)();
        };
    };
};
var updateAt = /* #__PURE__ */ (function () {
    return Data_Function_Uncurried.runFn5($foreign["_updateAt"])(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
})();
var unsafeIndex = function () {
    return Data_Function_Uncurried.runFn2($foreign.unsafeIndexImpl);
};
var unsafeIndex1 = /* #__PURE__ */ unsafeIndex();
var uncons = /* #__PURE__ */ (function () {
    return Data_Function_Uncurried.runFn3($foreign.unconsImpl)(Data_Function["const"](Data_Maybe.Nothing.value))(function (x) {
        return function (xs) {
            return new Data_Maybe.Just({
                head: x,
                tail: xs
            });
        };
    });
})();
var toUnfoldable = function (dictUnfoldable) {
    var unfoldr = Data_Unfoldable.unfoldr(dictUnfoldable);
    return function (xs) {
        var len = $foreign.length(xs);
        var f = function (i) {
            if (i < len) {
                return new Data_Maybe.Just(new Data_Tuple.Tuple(unsafeIndex1(xs)(i), i + 1 | 0));
            };
            if (Data_Boolean.otherwise) {
                return Data_Maybe.Nothing.value;
            };
            throw new Error("Failed pattern match at Data.Array (line 163, column 3 - line 165, column 26): " + [ i.constructor.name ]);
        };
        return unfoldr(f)(0);
    };
};
var tail = /* #__PURE__ */ (function () {
    return Data_Function_Uncurried.runFn3($foreign.unconsImpl)(Data_Function["const"](Data_Maybe.Nothing.value))(function (v) {
        return function (xs) {
            return new Data_Maybe.Just(xs);
        };
    });
})();
var sortBy = function (comp) {
    return Data_Function_Uncurried.runFn3($foreign.sortByImpl)(comp)(function (v) {
        if (v instanceof Data_Ordering.GT) {
            return 1;
        };
        if (v instanceof Data_Ordering.EQ) {
            return 0;
        };
        if (v instanceof Data_Ordering.LT) {
            return -1 | 0;
        };
        throw new Error("Failed pattern match at Data.Array (line 897, column 38 - line 900, column 11): " + [ v.constructor.name ]);
    });
};
var sortWith = function (dictOrd) {
    var comparing = Data_Ord.comparing(dictOrd);
    return function (f) {
        return sortBy(comparing(f));
    };
};
var sortWith1 = /* #__PURE__ */ sortWith(Data_Ord.ordInt);
var sort = function (dictOrd) {
    var compare = Data_Ord.compare(dictOrd);
    return function (xs) {
        return sortBy(compare)(xs);
    };
};
var snoc = function (xs) {
    return function (x) {
        return Data_Array_ST.withArray(Data_Array_ST.push(x))(xs)();
    };
};
var slice = /* #__PURE__ */ Data_Function_Uncurried.runFn3($foreign.sliceImpl);
var splitAt = function (v) {
    return function (v1) {
        if (v <= 0) {
            return {
                before: [  ],
                after: v1
            };
        };
        return {
            before: slice(0)(v)(v1),
            after: slice(v)($foreign.length(v1))(v1)
        };
    };
};
var take = function (n) {
    return function (xs) {
        var $152 = n < 1;
        if ($152) {
            return [  ];
        };
        return slice(0)(n)(xs);
    };
};
var singleton = function (a) {
    return [ a ];
};
var scanr = /* #__PURE__ */ Data_Function_Uncurried.runFn3($foreign.scanrImpl);
var scanl = /* #__PURE__ */ Data_Function_Uncurried.runFn3($foreign.scanlImpl);
var replicate = /* #__PURE__ */ Data_Function_Uncurried.runFn2($foreign.replicateImpl);
var range = /* #__PURE__ */ Data_Function_Uncurried.runFn2($foreign.rangeImpl);
var partition = /* #__PURE__ */ Data_Function_Uncurried.runFn2($foreign.partitionImpl);
var $$null = function (xs) {
    return $foreign.length(xs) === 0;
};
var modifyAtIndices = function (dictFoldable) {
    var traverse_1 = traverse_(dictFoldable);
    return function (is) {
        return function (f) {
            return function (xs) {
                return Data_Array_ST.withArray(function (res) {
                    return traverse_1(function (i) {
                        return Data_Array_ST.modify(i)(f)(res);
                    })(is);
                })(xs)();
            };
        };
    };
};
var mapWithIndex = /* #__PURE__ */ Data_FunctorWithIndex.mapWithIndex(Data_FunctorWithIndex.functorWithIndexArray);
var intersperse = function (a) {
    return function (arr) {
        var v = $foreign.length(arr);
        if (v < 2) {
            return arr;
        };
        if (Data_Boolean.otherwise) {
            return Data_Array_ST.run((function () {
                var unsafeGetElem = function (idx) {
                    return unsafeIndex1(arr)(idx);
                };
                return function __do() {
                    var out = Data_Array_ST["new"]();
                    Data_Array_ST.push(unsafeGetElem(0))(out)();
                    Control_Monad_ST_Internal["for"](1)(v)(function (idx) {
                        return function __do() {
                            Data_Array_ST.push(a)(out)();
                            return $$void(Data_Array_ST.push(unsafeGetElem(idx))(out))();
                        };
                    })();
                    return out;
                };
            })());
        };
        throw new Error("Failed pattern match at Data.Array (line 623, column 21 - line 633, column 17): " + [ v.constructor.name ]);
    };
};
var intercalate = function (dictMonoid) {
    return intercalate1(dictMonoid);
};
var insertAt = /* #__PURE__ */ (function () {
    return Data_Function_Uncurried.runFn5($foreign["_insertAt"])(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
})();
var init = function (xs) {
    if ($$null(xs)) {
        return Data_Maybe.Nothing.value;
    };
    if (Data_Boolean.otherwise) {
        return new Data_Maybe.Just(slice(0)($foreign.length(xs) - 1 | 0)(xs));
    };
    throw new Error("Failed pattern match at Data.Array (line 351, column 1 - line 351, column 45): " + [ xs.constructor.name ]);
};
var index = /* #__PURE__ */ (function () {
    return Data_Function_Uncurried.runFn4($foreign.indexImpl)(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
})();
var last = function (xs) {
    return index(xs)($foreign.length(xs) - 1 | 0);
};
var unsnoc = function (xs) {
    return apply(map(function (v) {
        return function (v1) {
            return {
                init: v,
                last: v1
            };
        };
    })(init(xs)))(last(xs));
};
var modifyAt = function (i) {
    return function (f) {
        return function (xs) {
            var go = function (x) {
                return updateAt(i)(f(x))(xs);
            };
            return Data_Maybe.maybe(Data_Maybe.Nothing.value)(go)(index(xs)(i));
        };
    };
};
var span = function (p) {
    return function (arr) {
        var go = function ($copy_i) {
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(i) {
                var v = index(arr)(i);
                if (v instanceof Data_Maybe.Just) {
                    var $156 = p(v.value0);
                    if ($156) {
                        $copy_i = i + 1 | 0;
                        return;
                    };
                    $tco_done = true;
                    return new Data_Maybe.Just(i);
                };
                if (v instanceof Data_Maybe.Nothing) {
                    $tco_done = true;
                    return Data_Maybe.Nothing.value;
                };
                throw new Error("Failed pattern match at Data.Array (line 1035, column 5 - line 1037, column 25): " + [ v.constructor.name ]);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($copy_i);
            };
            return $tco_result;
        };
        var breakIndex = go(0);
        if (breakIndex instanceof Data_Maybe.Just && breakIndex.value0 === 0) {
            return {
                init: [  ],
                rest: arr
            };
        };
        if (breakIndex instanceof Data_Maybe.Just) {
            return {
                init: slice(0)(breakIndex.value0)(arr),
                rest: slice(breakIndex.value0)($foreign.length(arr))(arr)
            };
        };
        if (breakIndex instanceof Data_Maybe.Nothing) {
            return {
                init: arr,
                rest: [  ]
            };
        };
        throw new Error("Failed pattern match at Data.Array (line 1022, column 3 - line 1028, column 30): " + [ breakIndex.constructor.name ]);
    };
};
var takeWhile = function (p) {
    return function (xs) {
        return (span(p)(xs)).init;
    };
};
var unzip = function (xs) {
    return (function __do() {
        var fsts = Data_Array_ST["new"]();
        var snds = Data_Array_ST["new"]();
        var iter = Data_Array_ST_Iterator.iterator(function (v) {
            return index(xs)(v);
        })();
        Data_Array_ST_Iterator.iterate(iter)(function (v) {
            return function __do() {
                $$void(Data_Array_ST.push(v.value0)(fsts))();
                return $$void(Data_Array_ST.push(v.value1)(snds))();
            };
        })();
        var fsts$prime = Data_Array_ST.unsafeFreeze(fsts)();
        var snds$prime = Data_Array_ST.unsafeFreeze(snds)();
        return new Data_Tuple.Tuple(fsts$prime, snds$prime);
    })();
};
var head = function (xs) {
    return index(xs)(0);
};
var nubBy = function (comp) {
    return function (xs) {
        var indexedAndSorted = sortBy(function (x) {
            return function (y) {
                return comp(Data_Tuple.snd(x))(Data_Tuple.snd(y));
            };
        })(mapWithIndex(Data_Tuple.Tuple.create)(xs));
        var v = head(indexedAndSorted);
        if (v instanceof Data_Maybe.Nothing) {
            return [  ];
        };
        if (v instanceof Data_Maybe.Just) {
            return map1(Data_Tuple.snd)(sortWith1(Data_Tuple.fst)((function __do() {
                var result = Data_Array_ST.unsafeThaw(singleton(v.value0))();
                Control_Monad_ST_Internal.foreach(indexedAndSorted)(function (v1) {
                    return function __do() {
                        var lst = map2((function () {
                            var $183 = function ($185) {
                                return fromJust(last($185));
                            };
                            return function ($184) {
                                return Data_Tuple.snd($183($184));
                            };
                        })())(Data_Array_ST.unsafeFreeze(result))();
                        return when(notEq(comp(lst)(v1.value1))(Data_Ordering.EQ.value))($$void(Data_Array_ST.push(v1)(result)))();
                    };
                })();
                return Data_Array_ST.unsafeFreeze(result)();
            })()));
        };
        throw new Error("Failed pattern match at Data.Array (line 1115, column 17 - line 1123, column 28): " + [ v.constructor.name ]);
    };
};
var nub = function (dictOrd) {
    return nubBy(Data_Ord.compare(dictOrd));
};
var groupBy = function (op) {
    return function (xs) {
        return (function __do() {
            var result = Data_Array_ST["new"]();
            var iter = Data_Array_ST_Iterator.iterator(function (v) {
                return index(xs)(v);
            })();
            Data_Array_ST_Iterator.iterate(iter)(function (x) {
                return $$void(function __do() {
                    var sub1 = Data_Array_ST["new"]();
                    Data_Array_ST.push(x)(sub1)();
                    Data_Array_ST_Iterator.pushWhile(op(x))(iter)(sub1)();
                    var grp = Data_Array_ST.unsafeFreeze(sub1)();
                    return Data_Array_ST.push(grp)(result)();
                });
            })();
            return Data_Array_ST.unsafeFreeze(result)();
        })();
    };
};
var groupAllBy = function (cmp) {
    var $186 = groupBy(function (x) {
        return function (y) {
            return eq1(cmp(x)(y))(Data_Ordering.EQ.value);
        };
    });
    var $187 = sortBy(cmp);
    return function ($188) {
        return $186($187($188));
    };
};
var groupAll = function (dictOrd) {
    return groupAllBy(Data_Ord.compare(dictOrd));
};
var group = function (dictEq) {
    var eq2 = Data_Eq.eq(dictEq);
    return function (xs) {
        return groupBy(eq2)(xs);
    };
};
var fromFoldable = function (dictFoldable) {
    return Data_Function_Uncurried.runFn2($foreign.fromFoldableImpl)(Data_Foldable.foldr(dictFoldable));
};
var foldr = /* #__PURE__ */ Data_Foldable.foldr(Data_Foldable.foldableArray);
var foldl = /* #__PURE__ */ Data_Foldable.foldl(Data_Foldable.foldableArray);
var transpose = function (xs) {
    var buildNext = function (idx) {
        return Data_Function.flip(foldl)(Data_Maybe.Nothing.value)(function (acc) {
            return function (nextArr) {
                return Data_Maybe.maybe(acc)(function (el) {
                    return new Data_Maybe.Just(Data_Maybe.maybe([ el ])(Data_Function.flip(snoc)(el))(acc));
                })(index(nextArr)(idx));
            };
        })(xs);
    };
    var go = function ($copy_idx) {
        return function ($copy_allArrays) {
            var $tco_var_idx = $copy_idx;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(idx, allArrays) {
                var v = buildNext(idx);
                if (v instanceof Data_Maybe.Nothing) {
                    $tco_done = true;
                    return allArrays;
                };
                if (v instanceof Data_Maybe.Just) {
                    $tco_var_idx = idx + 1 | 0;
                    $copy_allArrays = snoc(allArrays)(v.value0);
                    return;
                };
                throw new Error("Failed pattern match at Data.Array (line 837, column 22 - line 839, column 52): " + [ v.constructor.name ]);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_idx, $copy_allArrays);
            };
            return $tco_result;
        };
    };
    return go(0)([  ]);
};
var foldRecM = function (dictMonadRec) {
    var Monad0 = dictMonadRec.Monad0();
    var pure1 = Control_Applicative.pure(Monad0.Applicative0());
    var bind1 = Control_Bind.bind(Monad0.Bind1());
    var tailRecM2 = Control_Monad_Rec_Class.tailRecM2(dictMonadRec);
    return function (f) {
        return function (b) {
            return function (array) {
                var go = function (res) {
                    return function (i) {
                        if (i >= $foreign.length(array)) {
                            return pure1(new Control_Monad_Rec_Class.Done(res));
                        };
                        if (Data_Boolean.otherwise) {
                            return bind1(f(res)(unsafeIndex1(array)(i)))(function (res$prime) {
                                return pure1(new Control_Monad_Rec_Class.Loop({
                                    a: res$prime,
                                    b: i + 1 | 0
                                }));
                            });
                        };
                        throw new Error("Failed pattern match at Data.Array (line 1349, column 3 - line 1353, column 42): " + [ res.constructor.name, i.constructor.name ]);
                    };
                };
                return tailRecM2(go)(b)(0);
            };
        };
    };
};
var foldMap = function (dictMonoid) {
    return foldMap1(dictMonoid);
};
var foldM = function (dictMonad) {
    var pure1 = Control_Applicative.pure(dictMonad.Applicative0());
    var bind1 = Control_Bind.bind(dictMonad.Bind1());
    return function (f) {
        return function (b) {
            return Data_Function_Uncurried.runFn3($foreign.unconsImpl)(function (v) {
                return pure1(b);
            })(function (a) {
                return function (as) {
                    return bind1(f(b)(a))(function (b$prime) {
                        return foldM(dictMonad)(f)(b$prime)(as);
                    });
                };
            });
        };
    };
};
var fold = function (dictMonoid) {
    return fold1(dictMonoid);
};
var findMap = /* #__PURE__ */ (function () {
    return Data_Function_Uncurried.runFn4($foreign.findMapImpl)(Data_Maybe.Nothing.value)(Data_Maybe.isJust);
})();
var findLastIndex = /* #__PURE__ */ (function () {
    return Data_Function_Uncurried.runFn4($foreign.findLastIndexImpl)(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
})();
var insertBy = function (cmp) {
    return function (x) {
        return function (ys) {
            var i = Data_Maybe.maybe(0)(function (v) {
                return v + 1 | 0;
            })(findLastIndex(function (y) {
                return eq1(cmp(x)(y))(Data_Ordering.GT.value);
            })(ys));
            return fromJust(insertAt(i)(x)(ys));
        };
    };
};
var insert = function (dictOrd) {
    return insertBy(Data_Ord.compare(dictOrd));
};
var findIndex = /* #__PURE__ */ (function () {
    return Data_Function_Uncurried.runFn4($foreign.findIndexImpl)(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
})();
var find = function (f) {
    return function (xs) {
        return map(unsafeIndex1(xs))(findIndex(f)(xs));
    };
};
var filter = /* #__PURE__ */ Data_Function_Uncurried.runFn2($foreign.filterImpl);
var intersectBy = function (eq2) {
    return function (xs) {
        return function (ys) {
            return filter(function (x) {
                return Data_Maybe.isJust(findIndex(eq2(x))(ys));
            })(xs);
        };
    };
};
var intersect = function (dictEq) {
    return intersectBy(Data_Eq.eq(dictEq));
};
var elemLastIndex = function (dictEq) {
    var eq2 = Data_Eq.eq(dictEq);
    return function (x) {
        return findLastIndex(function (v) {
            return eq2(v)(x);
        });
    };
};
var elemIndex = function (dictEq) {
    var eq2 = Data_Eq.eq(dictEq);
    return function (x) {
        return findIndex(function (v) {
            return eq2(v)(x);
        });
    };
};
var notElem = function (dictEq) {
    var elemIndex1 = elemIndex(dictEq);
    return function (a) {
        return function (arr) {
            return Data_Maybe.isNothing(elemIndex1(a)(arr));
        };
    };
};
var elem = function (dictEq) {
    var elemIndex1 = elemIndex(dictEq);
    return function (a) {
        return function (arr) {
            return Data_Maybe.isJust(elemIndex1(a)(arr));
        };
    };
};
var dropWhile = function (p) {
    return function (xs) {
        return (span(p)(xs)).rest;
    };
};
var dropEnd = function (n) {
    return function (xs) {
        return take($foreign.length(xs) - n | 0)(xs);
    };
};
var drop = function (n) {
    return function (xs) {
        var $173 = n < 1;
        if ($173) {
            return xs;
        };
        return slice(n)($foreign.length(xs))(xs);
    };
};
var takeEnd = function (n) {
    return function (xs) {
        return drop($foreign.length(xs) - n | 0)(xs);
    };
};
var deleteAt = /* #__PURE__ */ (function () {
    return Data_Function_Uncurried.runFn4($foreign["_deleteAt"])(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
})();
var deleteBy = function (v) {
    return function (v1) {
        return function (v2) {
            if (v2.length === 0) {
                return [  ];
            };
            return Data_Maybe.maybe(v2)(function (i) {
                return fromJust(deleteAt(i)(v2));
            })(findIndex(v(v1))(v2));
        };
    };
};
var $$delete = function (dictEq) {
    return deleteBy(Data_Eq.eq(dictEq));
};
var difference = function (dictEq) {
    return foldr($$delete(dictEq));
};
var cons = function (x) {
    return function (xs) {
        return append([ x ])(xs);
    };
};
var some = function (dictAlternative) {
    var apply1 = Control_Apply.apply((dictAlternative.Applicative0()).Apply0());
    var map3 = Data_Functor.map(((dictAlternative.Plus1()).Alt0()).Functor0());
    return function (dictLazy) {
        var defer = Control_Lazy.defer(dictLazy);
        return function (v) {
            return apply1(map3(cons)(v))(defer(function (v1) {
                return many(dictAlternative)(dictLazy)(v);
            }));
        };
    };
};
var many = function (dictAlternative) {
    var alt = Control_Alt.alt((dictAlternative.Plus1()).Alt0());
    var pure1 = Control_Applicative.pure(dictAlternative.Applicative0());
    return function (dictLazy) {
        return function (v) {
            return alt(some(dictAlternative)(dictLazy)(v))(pure1([  ]));
        };
    };
};
var concatMap = /* #__PURE__ */ Data_Function.flip(/* #__PURE__ */ Control_Bind.bind(Control_Bind.bindArray));
var mapMaybe = function (f) {
    return concatMap((function () {
        var $189 = Data_Maybe.maybe([  ])(singleton);
        return function ($190) {
            return $189(f($190));
        };
    })());
};
var filterA = function (dictApplicative) {
    var traverse1 = traverse(dictApplicative);
    var map3 = Data_Functor.map((dictApplicative.Apply0()).Functor0());
    return function (p) {
        var $191 = map3(mapMaybe(function (v) {
            if (v.value1) {
                return new Data_Maybe.Just(v.value0);
            };
            return Data_Maybe.Nothing.value;
        }));
        var $192 = traverse1(function (x) {
            return map3(Data_Tuple.Tuple.create(x))(p(x));
        });
        return function ($193) {
            return $191($192($193));
        };
    };
};
var catMaybes = /* #__PURE__ */ mapMaybe(/* #__PURE__ */ Control_Category.identity(Control_Category.categoryFn));
var any = /* #__PURE__ */ Data_Function_Uncurried.runFn2($foreign.anyImpl);
var nubByEq = function (eq2) {
    return function (xs) {
        return (function __do() {
            var arr = Data_Array_ST["new"]();
            Control_Monad_ST_Internal.foreach(xs)(function (x) {
                return function __do() {
                    var e = map2((function () {
                        var $194 = any(function (v) {
                            return eq2(v)(x);
                        });
                        return function ($195) {
                            return !$194($195);
                        };
                    })())(Data_Array_ST.unsafeFreeze(arr))();
                    return when(e)($$void(Data_Array_ST.push(x)(arr)))();
                };
            })();
            return Data_Array_ST.unsafeFreeze(arr)();
        })();
    };
};
var nubEq = function (dictEq) {
    return nubByEq(Data_Eq.eq(dictEq));
};
var unionBy = function (eq2) {
    return function (xs) {
        return function (ys) {
            return append(xs)(foldl(Data_Function.flip(deleteBy(eq2)))(nubByEq(eq2)(ys))(xs));
        };
    };
};
var union = function (dictEq) {
    return unionBy(Data_Eq.eq(dictEq));
};
var alterAt = function (i) {
    return function (f) {
        return function (xs) {
            var go = function (x) {
                var v = f(x);
                if (v instanceof Data_Maybe.Nothing) {
                    return deleteAt(i)(xs);
                };
                if (v instanceof Data_Maybe.Just) {
                    return updateAt(i)(v.value0)(xs);
                };
                throw new Error("Failed pattern match at Data.Array (line 601, column 10 - line 603, column 32): " + [ v.constructor.name ]);
            };
            return Data_Maybe.maybe(Data_Maybe.Nothing.value)(go)(index(xs)(i));
        };
    };
};
var all = /* #__PURE__ */ Data_Function_Uncurried.runFn2($foreign.allImpl);
export {
    length,
    reverse,
    concat
} from "./foreign.js";
export {
    fromFoldable,
    toUnfoldable,
    singleton,
    range,
    replicate,
    some,
    many,
    $$null as null,
    cons,
    snoc,
    insert,
    insertBy,
    head,
    last,
    tail,
    init,
    uncons,
    unsnoc,
    index,
    elem,
    notElem,
    elemIndex,
    elemLastIndex,
    find,
    findMap,
    findIndex,
    findLastIndex,
    insertAt,
    deleteAt,
    updateAt,
    updateAtIndices,
    modifyAt,
    modifyAtIndices,
    alterAt,
    intersperse,
    concatMap,
    filter,
    partition,
    splitAt,
    filterA,
    mapMaybe,
    catMaybes,
    mapWithIndex,
    foldl,
    foldr,
    foldMap,
    fold,
    intercalate,
    transpose,
    scanl,
    scanr,
    sort,
    sortBy,
    sortWith,
    slice,
    take,
    takeEnd,
    takeWhile,
    drop,
    dropEnd,
    dropWhile,
    span,
    group,
    groupAll,
    groupBy,
    groupAllBy,
    nub,
    nubEq,
    nubBy,
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
    any,
    all,
    foldM,
    foldRecM,
    unsafeIndex
};
//# sourceMappingURL=index.js.map
