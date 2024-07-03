import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Plus from "../Control.Plus/index.js";
import * as Data_Foldable from "../Data.Foldable/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_List_Types from "../Data.List.Types/index.js";
import * as Data_Show from "../Data.Show/index.js";
import * as Data_Symbol from "../Data.Symbol/index.js";
import * as Data_Traversable from "../Data.Traversable/index.js";
import * as Data_Variant_Internal from "../Data.Variant.Internal/index.js";
import * as Partial_Unsafe from "../Partial.Unsafe/index.js";
import * as Record_Unsafe from "../Record.Unsafe/index.js";
import * as Type_Proxy from "../Type.Proxy/index.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
var show = /* #__PURE__ */ Data_Show.show(Data_Show.showString);
var UnvariantF = function (x) {
    return x;
};
var Mapper = function (x) {
    return x;
};
var VariantFRep = function (x) {
    return x;
};
var variantFShows = function (dict) {
    return dict.variantFShows;
};
var variantFMaps = function (dict) {
    return dict.variantFMaps;
};

// | A low-level eliminator which reifies the `IsSymbol`, `Cons` and
// | `Functor` constraints require to reconstruct the Variant. This
// | lets you work generically with some VariantF at runtime.
var unvariantF = function (v) {
    return function (f) {
        return (function (dictIsSymbol) {
            var f1 = f(dictIsSymbol)();
            return function () {
                return function (dictFunctor) {
                    return f1(dictFunctor);
                };
            };
        })({
            reflectSymbol: Data_Function["const"](v.type)
        })({})({
            map: v.map
        })(Type_Proxy["Proxy"].value)(v.value);
    };
};
var traverseVFRL = function (dict) {
    return dict.traverseVFRL;
};

// | Traverse over several cases of a variant using a `Record` containing
// | traversals. Each case gets put back at the same label it was matched
// | at, i.e. its label in the record. Labels not found in the record are
// | handled using the fallback function.
var traverseSome = function () {
    return function () {
        return function () {
            return function (dictVariantTags) {
                var variantTags = Data_Variant_Internal.variantTags(dictVariantTags);
                return function (dictVariantFMaps) {
                    var variantFMaps1 = variantFMaps(dictVariantFMaps);
                    return function () {
                        return function () {
                            return function (dictFunctor) {
                                var mapFlipped = Data_Functor.mapFlipped(dictFunctor);
                                return function (r) {
                                    return function (k) {
                                        return function (v) {
                                            if (Record_Unsafe.unsafeHas(v.type)(r)) {
                                                var tags = variantTags(Type_Proxy["Proxy"].value);
                                                var maps = variantFMaps1(Type_Proxy["Proxy"].value);
                                                var map1 = Data_Variant_Internal.lookup("map")(v.type)(tags)(maps);
                                                return mapFlipped(Record_Unsafe.unsafeGet(v.type)(r)(v.value))(function (value) {
                                                    return {
                                                        type: v.type,
                                                        map: map1,
                                                        value: value
                                                    };
                                                });
                                            };
                                            return k(v);
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
var traverseSome1 = /* #__PURE__ */ traverseSome()()();

// | Traverse over some labels (with access to the containers) and use
// | `traverse f` for the rest (just changing the index type).
// |
// | `traverse r f` is like `(traverse f >>> expand) # traverseSome r` but with
// | a more easily solved constraint (i.e. it can be solved once the type of
// | `r` is known).
var traverse = function () {
    return function () {
        return function () {
            return function (dictVariantTags) {
                var traverseSome2 = traverseSome1(dictVariantTags);
                return function (dictVariantFMaps) {
                    var traverseSome3 = traverseSome2(dictVariantFMaps)()();
                    return function () {
                        return function () {
                            return function (dictApplicative) {
                                var Functor0 = (dictApplicative.Apply0()).Functor0();
                                var traverseSome4 = traverseSome3(Functor0);
                                var map1 = Data_Functor.map(Functor0);
                                return function (dictTraversable) {
                                    var traverse1 = Data_Traversable.traverse(dictTraversable)(dictApplicative);
                                    return function (r) {
                                        return function (f) {
                                            return traverseSome4(r)((function () {
                                                var $199 = map1(Unsafe_Coerce.unsafeCoerce);
                                                var $200 = traverse1(f);
                                                return function ($201) {
                                                    return $199($200($201));
                                                };
                                            })());
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
var showVariantFNil = {
    variantFShows: function (v) {
        return function (v1) {
            return Data_List_Types.Nil.value;
        };
    }
};
var showVariantFCons = function (dictVariantFShows) {
    var variantFShows1 = variantFShows(dictVariantFShows);
    return function (dictShow) {
        var show1 = Data_Show.show(dictShow);
        return function (dictShow1) {
            return {
                variantFShows: function (v) {
                    return function (p) {
                        return new Data_List_Types.Cons(show1, variantFShows1(Type_Proxy["Proxy"].value)(p));
                    };
                }
            };
        };
    };
};
var showVariantF = function () {
    return function (dictVariantTags) {
        var variantTags = Data_Variant_Internal.variantTags(dictVariantTags);
        return function (dictVariantFShows) {
            var variantFShows1 = variantFShows(dictVariantFShows);
            return function (dictShow) {
                return {
                    show: function (v1) {
                        var tags = variantTags(Type_Proxy["Proxy"].value);
                        var shows = variantFShows1(Type_Proxy["Proxy"].value)(Type_Proxy["Proxy"].value);
                        var body = Data_Variant_Internal.lookup("show")(v1.type)(tags)(shows)(v1.value);
                        return "(inj @" + (show(v1.type) + (" " + (body + ")")));
                    }
                };
            };
        };
    };
};

// | Map over several cases of a variant using a `Record` containing functions
// | for each case. Each case gets put back at the same label it was matched
// | at, i.e. its label in the record. Labels not found in the record are
// | handled using the fallback function.
var overSome = function () {
    return function () {
        return function () {
            return function (dictVariantTags) {
                var variantTags = Data_Variant_Internal.variantTags(dictVariantTags);
                return function (dictVariantFMaps) {
                    var variantFMaps1 = variantFMaps(dictVariantFMaps);
                    return function () {
                        return function () {
                            return function (r) {
                                return function (k) {
                                    return function (v) {
                                        if (Record_Unsafe.unsafeHas(v.type)(r)) {
                                            var tags = variantTags(Type_Proxy["Proxy"].value);
                                            var maps = variantFMaps1(Type_Proxy["Proxy"].value);
                                            var map1 = Data_Variant_Internal.lookup("map")(v.type)(tags)(maps);
                                            return {
                                                type: v.type,
                                                map: map1,
                                                value: Record_Unsafe.unsafeGet(v.type)(r)(v.value)
                                            };
                                        };
                                        return k(v);
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
var overSome1 = /* #__PURE__ */ overSome()()();

// | Match a `VariantF` with a `Record` containing functions for handling cases.
// | This is similar to `on`, except instead of providing a single label and
// | handler, you can provide a record where each field maps to a particular
// | `VariantF` case.
// |
// | ```purescript
// | onMatch
// |  { foo: \foo -> "Foo: " <> maybe "nothing" id foo
// |  , bar: \bar -> "Bar: " <> snd bar
// |  }
// | ```
// |
// | Polymorphic functions in records (such as `show` or `id`) can lead
// | to inference issues if not all polymorphic variables are specified
// | in usage. When in doubt, label methods with specific types, such as
// | `show :: Int -> String`, or give the whole record an appropriate type.
var onMatch = function () {
    return function () {
        return function () {
            return function (r) {
                return function (k) {
                    return function (v) {
                        if (Record_Unsafe.unsafeHas(v.type)(r)) {
                            return Record_Unsafe.unsafeGet(v.type)(r)(v.value);
                        };
                        return k(v);
                    };
                };
            };
        };
    };
};
var onMatch1 = /* #__PURE__ */ onMatch()()();

// | Attempt to read a variant at a given label by providing branches.
// | The failure branch receives the provided variant, but with the label
// | removed.
var on = function () {
    return function (dictIsSymbol) {
        var reflectSymbol = Data_Symbol.reflectSymbol(dictIsSymbol);
        return function (p) {
            return function (f) {
                return function (g) {
                    return function (r) {
                        if (r.type === reflectSymbol(p)) {
                            return f(r.value);
                        };
                        return g(r);
                    };
                };
            };
        };
    };
};
var on1 = /* #__PURE__ */ on();

// | Attempt to read a variant at a given label.
// | ```purescript
// | case prj (Proxy :: Proxy "foo") maybeAtFoo of
// |   Just (Just i) -> i + 1
// |   _ -> 0
// | ```
var prj = function () {
    return function (dictAlternative) {
        var pure = Control_Applicative.pure(dictAlternative.Applicative0());
        var empty = Control_Plus.empty(dictAlternative.Plus1());
        return function (dictIsSymbol) {
            var on2 = on1(dictIsSymbol);
            return function (p) {
                return on2(p)(pure)(Data_Function["const"](empty));
            };
        };
    };
};
var mapVariantFNil = {
    variantFMaps: function (v) {
        return Data_List_Types.Nil.value;
    }
};
var mapVariantFCons = function (dictVariantFMaps) {
    var variantFMaps1 = variantFMaps(dictVariantFMaps);
    return function (dictFunctor) {
        var map1 = Data_Functor.map(dictFunctor);
        return {
            variantFMaps: function (v) {
                return new Data_List_Types.Cons(map1, variantFMaps1(Type_Proxy["Proxy"].value));
            }
        };
    };
};

// | Inject into the variant at a given label.
// | ```purescript
// | maybeAtFoo :: forall r. VariantF (foo :: Maybe | r) Int
// | maybeAtFoo = inj (Proxy :: Proxy "foo") (Just 42)
// | ```
var inj = function () {
    return function (dictIsSymbol) {
        var reflectSymbol = Data_Symbol.reflectSymbol(dictIsSymbol);
        return function (dictFunctor) {
            var map1 = Data_Functor.map(dictFunctor);
            return function (p) {
                return function (value) {
                    return {
                        type: reflectSymbol(p),
                        value: value,
                        map: map1
                    };
                };
            };
        };
    };
};
var inj1 = /* #__PURE__ */ inj();

// | Map over one case of a variant, putting the result back at the same label,
// | with a fallback function to handle the remaining cases.
var overOne = function () {
    return function () {
        return function (dictIsSymbol) {
            var on2 = on1(dictIsSymbol);
            var inj2 = inj1(dictIsSymbol);
            return function (dictFunctor) {
                var inj3 = inj2(dictFunctor);
                return function (p) {
                    return function (f) {
                        return on2(p)((function () {
                            var $202 = inj3(p);
                            return function ($203) {
                                return $202(f($203));
                            };
                        })());
                    };
                };
            };
        };
    };
};

// | Reconstructs a VariantF given an UnvariantF eliminator.
var revariantF = function (v) {
    return v(function (dictIsSymbol) {
        var inj2 = inj1(dictIsSymbol);
        return function () {
            return function (dictFunctor) {
                return inj2(dictFunctor);
            };
        };
    });
};

// | Traverse over one case of a variant (in a functorial/monadic context `m`),
// | putting the result back at the same label, with a fallback function.
var traverseOne = function () {
    return function () {
        return function (dictIsSymbol) {
            var on2 = on1(dictIsSymbol);
            var inj2 = inj1(dictIsSymbol);
            return function (dictFunctor) {
                var inj3 = inj2(dictFunctor);
                return function (dictFunctor1) {
                    var map1 = Data_Functor.map(dictFunctor1);
                    return function (p) {
                        return function (f) {
                            return on2(p)((function () {
                                var $204 = map1(inj3(p));
                                return function ($205) {
                                    return $204(f($205));
                                };
                            })());
                        };
                    };
                };
            };
        };
    };
};
var functorVariantF = {
    map: function (f) {
        return function (a) {
            return {
                type: a.type,
                value: a.map(f)(a.value),
                map: a.map
            };
        };
    }
};
var map = /* #__PURE__ */ Data_Functor.map(functorVariantF);

// | Map over some labels (with access to the containers) and use `map f` for
// | the rest (just changing the index type). For example:
// |
// | ```purescript
// | over { label: \(Identity a) -> Just (show (a - 5)) } show
// |   :: forall r.
// |     VariantF ( label :: Identity | r ) Int ->
// |     VariantF ( label :: Maybe | r ) String
// | ```
// |
// | `over r f` is like `(map f >>> expand) # overSome r` but with
// | a more easily solved constraint (i.e. it can be solved once the type of
// | `r` is known).
var over = function () {
    return function () {
        return function () {
            return function (dictVariantTags) {
                var overSome2 = overSome1(dictVariantTags);
                return function (dictVariantFMaps) {
                    var overSome3 = overSome2(dictVariantFMaps)()();
                    return function () {
                        return function () {
                            return function (r) {
                                return function (f) {
                                    return overSome3(r)((function () {
                                        var $206 = map(f);
                                        return function ($207) {
                                            return $206($207);
                                        };
                                    })());
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
var foldrVFRL = function (dict) {
    return dict.foldrVFRL;
};
var foldlVFRL = function (dict) {
    return dict.foldlVFRL;
};
var foldMapVFRL = function (dict) {
    return dict.foldMapVFRL;
};
var foldableCons = function (dictIsSymbol) {
    var on2 = on1(dictIsSymbol);
    return function (dictFoldable) {
        var foldr = Data_Foldable.foldr(dictFoldable);
        var foldl = Data_Foldable.foldl(dictFoldable);
        var foldMap = Data_Foldable.foldMap(dictFoldable);
        return function (dictFoldableVFRL) {
            var foldrVFRL1 = foldrVFRL(dictFoldableVFRL);
            var foldlVFRL1 = foldlVFRL(dictFoldableVFRL);
            var foldMapVFRL1 = foldMapVFRL(dictFoldableVFRL);
            return function () {
                return {
                    foldrVFRL: function (v) {
                        return function (f) {
                            return function (b) {
                                return on2(Type_Proxy["Proxy"].value)(foldr(f)(b))(foldrVFRL1(Type_Proxy["Proxy"].value)(f)(b));
                            };
                        };
                    },
                    foldlVFRL: function (v) {
                        return function (f) {
                            return function (b) {
                                return on2(Type_Proxy["Proxy"].value)(foldl(f)(b))(foldlVFRL1(Type_Proxy["Proxy"].value)(f)(b));
                            };
                        };
                    },
                    foldMapVFRL: function (dictMonoid) {
                        var foldMap1 = foldMap(dictMonoid);
                        var foldMapVFRL2 = foldMapVFRL1(dictMonoid);
                        return function (v) {
                            return function (f) {
                                return on2(Type_Proxy["Proxy"].value)(foldMap1(f))(foldMapVFRL2(Type_Proxy["Proxy"].value)(f));
                            };
                        };
                    }
                };
            };
        };
    };
};
var foldableVariantF = function () {
    return function (dictFoldableVFRL) {
        var foldMapVFRL1 = foldMapVFRL(dictFoldableVFRL);
        return {
            foldr: foldrVFRL(dictFoldableVFRL)(Type_Proxy["Proxy"].value),
            foldl: foldlVFRL(dictFoldableVFRL)(Type_Proxy["Proxy"].value),
            foldMap: function (dictMonoid) {
                return foldMapVFRL1(dictMonoid)(Type_Proxy["Proxy"].value);
            }
        };
    };
};
var foldableVariantF1 = /* #__PURE__ */ foldableVariantF();
var traversableVariantF = function () {
    return function (dictTraversableVFRL) {
        var traverseVFRL1 = traverseVFRL(dictTraversableVFRL);
        var foldableVariantF2 = foldableVariantF1(dictTraversableVFRL.FoldableVFRL0());
        return {
            traverse: function (dictApplicative) {
                return traverseVFRL1(dictApplicative)(Type_Proxy["Proxy"].value);
            },
            sequence: function (dictApplicative) {
                return Data_Traversable.sequenceDefault(traversableVariantF()(dictTraversableVFRL))(dictApplicative);
            },
            Functor0: function () {
                return functorVariantF;
            },
            Foldable1: function () {
                return foldableVariantF2;
            }
        };
    };
};

// | Every `VariantF lt a` can be cast to some `VariantF gt a` as long as `lt` is a
// | subset of `gt`.
var expand = function () {
    return Unsafe_Coerce.unsafeCoerce;
};
var expand1 = /* #__PURE__ */ expand();
var traversableCons = function (dictIsSymbol) {
    var on2 = on1(dictIsSymbol);
    var inj2 = inj1(dictIsSymbol);
    var foldableCons1 = foldableCons(dictIsSymbol);
    return function (dictTraversable) {
        var traverse1 = Data_Traversable.traverse(dictTraversable);
        var inj3 = inj2(dictTraversable.Functor0());
        var foldableCons2 = foldableCons1(dictTraversable.Foldable1());
        return function (dictTraversableVFRL) {
            var traverseVFRL1 = traverseVFRL(dictTraversableVFRL);
            var foldableCons3 = foldableCons2(dictTraversableVFRL.FoldableVFRL0())();
            return function () {
                return function () {
                    return {
                        traverseVFRL: function (dictApplicative) {
                            var traverse2 = traverse1(dictApplicative);
                            var map1 = Data_Functor.map((dictApplicative.Apply0()).Functor0());
                            var traverseVFRL2 = traverseVFRL1(dictApplicative);
                            return function (v) {
                                return function (f) {
                                    return on2(Type_Proxy["Proxy"].value)((function () {
                                        var $208 = map1(inj3(Type_Proxy["Proxy"].value));
                                        var $209 = traverse2(f);
                                        return function ($210) {
                                            return $208($209($210));
                                        };
                                    })())((function () {
                                        var $211 = map1(expand1);
                                        var $212 = traverseVFRL2(Type_Proxy["Proxy"].value)(f);
                                        return function ($213) {
                                            return $211($212($213));
                                        };
                                    })());
                                };
                            };
                        },
                        FoldableVFRL0: function () {
                            return foldableCons3;
                        }
                    };
                };
            };
        };
    };
};

// | Combinator for partial matching with a default value in case of failure.
// | ```purescript
// | caseFn :: forall r. VariantF (foo :: Maybe, bar :: Tuple String | r) Int -> String
// | caseFn = default "No match"
// |  # on (Proxy :: Proxy "foo") (\foo -> "Foo: " <> maybe "nothing" show foo)
// |  # on (Proxy :: Proxy "bar") (\bar -> "Bar: " <> show (snd bar))
// | ```
var $$default = function (a) {
    return function (v) {
        return a;
    };
};

// | A `VariantF gt a` can be cast to some `VariantF lt a`, where `lt` is is a subset
// | of `gt`, as long as there is proof that the `VariantF`'s runtime tag is
// | within the subset of `lt`.
var contract = function (dictAlternative) {
    return function (dictContractable) {
        var contractWith = Data_Variant_Internal.contractWith(dictContractable)(dictAlternative);
        return function (v) {
            return contractWith(Type_Proxy["Proxy"].value)(Type_Proxy["Proxy"].value)(v.type)(v);
        };
    };
};

// | Combinator for exhaustive pattern matching.
// | ```purescript
// | caseFn :: VariantF (foo :: Maybe, bar :: Tuple String, baz :: Either String) Int -> String
// | caseFn = case_
// |  # on (Proxy :: Proxy "foo") (\foo -> "Foo: " <> maybe "nothing" show foo)
// |  # on (Proxy :: Proxy "bar") (\bar -> "Bar: " <> show (snd bar))
// |  # on (Proxy :: Proxy "baz") (\baz -> "Baz: " <> either id show baz)
// | ```
var case_ = function (r) {
    return Partial_Unsafe.unsafeCrashWith("Data.Functor.Variant: pattern match failure [" + (r.type + "]"));
};
var foldableNil = {
    foldrVFRL: function (v) {
        return function (v1) {
            return function (v2) {
                return case_;
            };
        };
    },
    foldlVFRL: function (v) {
        return function (v1) {
            return function (v2) {
                return case_;
            };
        };
    },
    foldMapVFRL: function (dictMonoid) {
        return function (v) {
            return function (v1) {
                return case_;
            };
        };
    }
};

// | Combinator for exhaustive pattern matching using an `onMatch` case record.
// | ```purescript
// | matchFn :: VariantF (foo :: Maybe, bar :: Tuple String, baz :: Either String) Int -> String
// | matchFn = match
// |  { foo: \foo -> "Foo: " <> maybe "nothing" show foo
// |  , bar: \bar -> "Bar: " <> show (snd bar)
// |  , baz: \baz -> "Baz: " <> either id show baz
// |  }
// | ```
var match = function () {
    return function () {
        return function () {
            return function (r) {
                return onMatch1(r)(case_);
            };
        };
    };
};
var traversableNil = {
    traverseVFRL: function (dictApplicative) {
        return function (v) {
            return function (v1) {
                return case_;
            };
        };
    },
    FoldableVFRL0: function () {
        return foldableNil;
    }
};
export {
    inj,
    prj,
    on,
    onMatch,
    over,
    overOne,
    overSome,
    case_,
    match,
    $$default as default,
    traverse,
    traverseOne,
    traverseSome,
    expand,
    contract,
    UnvariantF,
    unvariantF,
    revariantF,
    variantFShows,
    variantFMaps,
    traverseVFRL,
    foldrVFRL,
    foldlVFRL,
    foldMapVFRL,
    functorVariantF,
    foldableNil,
    foldableCons,
    traversableNil,
    traversableCons,
    foldableVariantF,
    traversableVariantF,
    showVariantFNil,
    showVariantFCons,
    showVariantF,
    mapVariantFNil,
    mapVariantFCons
};
