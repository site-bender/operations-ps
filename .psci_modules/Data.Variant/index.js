import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Plus from "../Control.Plus/index.js";
import * as Data_Bounded from "../Data.Bounded/index.js";
import * as Data_Enum from "../Data.Enum/index.js";
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_List_Types from "../Data.List.Types/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Show from "../Data.Show/index.js";
import * as Data_Symbol from "../Data.Symbol/index.js";
import * as Data_Variant_Internal from "../Data.Variant.Internal/index.js";
import * as Partial_Unsafe from "../Partial.Unsafe/index.js";
import * as Record_Unsafe from "../Record.Unsafe/index.js";
import * as Type_Proxy from "../Type.Proxy/index.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
var show = /* #__PURE__ */ Data_Show.show(Data_Show.showString);
var Unvariant = function (x) {
    return x;
};
var variantShows = function (dict) {
    return dict.variantShows;
};
var variantOrds = function (dict) {
    return dict.variantOrds;
};
var variantEqs = function (dict) {
    return dict.variantEqs;
};
var variantBoundedEnums = function (dict) {
    return dict.variantBoundedEnums;
};
var variantBounded = function (dict) {
    return dict.variantBounded;
};

// | A low-level eliminator which reifies the `IsSymbol` and `Cons`
// | constraints required to reconstruct the Variant. This lets you
// | work generically with some Variant at runtime.
var unvariant = function (v) {
    return function (f) {
        return (function (dictIsSymbol) {
            var f1 = f(dictIsSymbol)();
            return function () {
                return f1;
            };
        })({
            reflectSymbol: Data_Function["const"](v.type)
        })({})(Type_Proxy["Proxy"].value)(v.value);
    };
};

// | Traverse over several cases of a variant using a `Record` containing
// | traversals. Each case gets put back at the same label it was matched
// | at, i.e. its label in the record. Labels not found in the record are
// | handled using the fallback function.
var traverseSome = function () {
    return function () {
        return function () {
            return function () {
                return function (dictFunctor) {
                    var mapFlipped = Data_Functor.mapFlipped(dictFunctor);
                    return function (r) {
                        return function (k) {
                            return function (v) {
                                if (Record_Unsafe.unsafeHas(v.type)(r)) {
                                    return mapFlipped(Record_Unsafe.unsafeGet(v.type)(r)(v.value))(function (value) {
                                        return {
                                            type: v.type,
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
var traverseSome1 = /* #__PURE__ */ traverseSome()()()();

// | Traverse over some labels and leave the rest unchanged.
// | (Implemented by expanding after `traverseSome`.)
var traverse = function () {
    return function () {
        return function () {
            return function () {
                return function (dictApplicative) {
                    var traverseSome2 = traverseSome1((dictApplicative.Apply0()).Functor0());
                    var pure = Control_Applicative.pure(dictApplicative);
                    return function (r) {
                        return traverseSome2(r)(function ($173) {
                            return pure($173);
                        });
                    };
                };
            };
        };
    };
};
var showVariantNil = {
    variantShows: function (v) {
        return Data_List_Types.Nil.value;
    }
};
var showVariantCons = function (dictVariantShows) {
    var variantShows1 = variantShows(dictVariantShows);
    return function (dictShow) {
        var show1 = Data_Show.show(dictShow);
        return {
            variantShows: function (v) {
                return new Data_List_Types.Cons(show1, variantShows1(Type_Proxy["Proxy"].value));
            }
        };
    };
};
var showVariant = function () {
    return function (dictVariantTags) {
        var variantTags = Data_Variant_Internal.variantTags(dictVariantTags);
        return function (dictVariantShows) {
            var variantShows1 = variantShows(dictVariantShows);
            return {
                show: function (v1) {
                    var tags = variantTags(Type_Proxy["Proxy"].value);
                    var shows = variantShows1(Type_Proxy["Proxy"].value);
                    var body = Data_Variant_Internal.lookup("show")(v1.type)(tags)(shows)(v1.value);
                    return "(inj @" + (show(v1.type) + (" " + (body + ")")));
                }
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
            return function () {
                return function (r) {
                    return function (k) {
                        return function (v) {
                            if (Record_Unsafe.unsafeHas(v.type)(r)) {
                                return {
                                    type: v.type,
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
var overSome1 = /* #__PURE__ */ overSome()()()();

// | Map over some labels and leave the rest unchanged. For example:
// |
// | ```purescript
// | over { label: show :: Int -> String }
// |   :: forall r. Variant ( label :: Int | r ) -> Variant ( label :: String | r )
// | ```
// |
// | `over r` is like `expand # overSome r` but with a more easily
// | solved constraint (i.e. it can be solved once the type of `r` is known).
var over = function () {
    return function () {
        return function () {
            return function () {
                return function (r) {
                    return overSome1(r)(Unsafe_Coerce.unsafeCoerce);
                };
            };
        };
    };
};
var ordVariantNil = {
    variantOrds: function (v) {
        return Data_List_Types.Nil.value;
    }
};
var ordVariantCons = function (dictVariantOrds) {
    var variantOrds1 = variantOrds(dictVariantOrds);
    return function (dictOrd) {
        var compare = Data_Ord.compare(dictOrd);
        return {
            variantOrds: function (v) {
                return new Data_List_Types.Cons(compare, variantOrds1(Type_Proxy["Proxy"].value));
            }
        };
    };
};

// | Match a `Variant` with a `Record` containing functions for handling cases.
// | This is similar to `on`, except instead of providing a single label and
// | handler, you can provide a record where each field maps to a particular
// | `Variant` case.
// |
// | ```purescript
// | onMatch
// |   { foo: \foo -> "Foo: " <> foo
// |   , bar: \bar -> "Bar: " <> bar
// |   }
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
// | case prj (Proxy :: Proxy "foo") intAtFoo of
// |   Just i  -> i + 1
// |   Nothing -> 0
// | ```
var prj = function () {
    return function (dictIsSymbol) {
        var on2 = on1(dictIsSymbol);
        return function (dictAlternative) {
            var pure = Control_Applicative.pure(dictAlternative.Applicative0());
            var empty = Control_Plus.empty(dictAlternative.Plus1());
            return function (p) {
                return on2(p)(pure)(Data_Function["const"](empty));
            };
        };
    };
};

// | Inject into the variant at a given label.
// | ```purescript
// | intAtFoo :: forall r. Variant (foo :: Int | r)
// | intAtFoo = inj (Proxy :: Proxy "foo") 42
// | ```
var inj = function () {
    return function (dictIsSymbol) {
        var reflectSymbol = Data_Symbol.reflectSymbol(dictIsSymbol);
        return function (p) {
            return function (value) {
                return {
                    type: reflectSymbol(p),
                    value: value
                };
            };
        };
    };
};
var inj1 = /* #__PURE__ */ inj();

// | Map over one case of a variant, putting the result back at the same label,
// | with a fallback function to handle the remaining cases.
var overOne = function (dictIsSymbol) {
    var on2 = on1(dictIsSymbol);
    var inj2 = inj1(dictIsSymbol);
    return function () {
        return function () {
            return function (p) {
                return function (f) {
                    return on2(p)((function () {
                        var $174 = inj2(p);
                        return function ($175) {
                            return $174(f($175));
                        };
                    })());
                };
            };
        };
    };
};

// | Reconstructs a Variant given an Unvariant eliminator.
var revariant = function (v) {
    return v(function (dictIsSymbol) {
        var inj2 = inj1(dictIsSymbol);
        return function () {
            return inj2;
        };
    });
};

// | Traverse over one case of a variant (in a functorial/monadic context `m`),
// | putting the result back at the same label, with a fallback function.
var traverseOne = function (dictIsSymbol) {
    var on2 = on1(dictIsSymbol);
    var inj2 = inj1(dictIsSymbol);
    return function () {
        return function () {
            return function (dictFunctor) {
                var map = Data_Functor.map(dictFunctor);
                return function (p) {
                    return function (f) {
                        return on2(p)((function () {
                            var $176 = map(inj2(p));
                            return function ($177) {
                                return $176(f($177));
                            };
                        })());
                    };
                };
            };
        };
    };
};

// | Every `Variant lt` can be cast to some `Variant gt` as long as `lt` is a
// | subset of `gt`.
var expand = function () {
    return Unsafe_Coerce.unsafeCoerce;
};
var eqVariantNil = {
    variantEqs: function (v) {
        return Data_List_Types.Nil.value;
    }
};
var eqVariantCons = function (dictVariantEqs) {
    var variantEqs1 = variantEqs(dictVariantEqs);
    return function (dictEq) {
        var eq1 = Data_Eq.eq(dictEq);
        return {
            variantEqs: function (v) {
                return new Data_List_Types.Cons(eq1, variantEqs1(Type_Proxy["Proxy"].value));
            }
        };
    };
};
var eqVariant = function () {
    return function (dictVariantTags) {
        var variantTags = Data_Variant_Internal.variantTags(dictVariantTags);
        return function (dictVariantEqs) {
            var variantEqs1 = variantEqs(dictVariantEqs);
            return {
                eq: function (v1) {
                    return function (v2) {
                        var tags = variantTags(Type_Proxy["Proxy"].value);
                        var eqs = variantEqs1(Type_Proxy["Proxy"].value);
                        return Data_Variant_Internal.lookupEq(tags)(eqs)(v1)(v2);
                    };
                }
            };
        };
    };
};
var eqVariant1 = /* #__PURE__ */ eqVariant();
var ordVariant = function () {
    return function (dictVariantTags) {
        var variantTags = Data_Variant_Internal.variantTags(dictVariantTags);
        var eqVariant2 = eqVariant1(dictVariantTags);
        return function (dictVariantEqs) {
            var eqVariant3 = eqVariant2(dictVariantEqs);
            return function (dictVariantOrds) {
                var variantOrds1 = variantOrds(dictVariantOrds);
                return {
                    compare: function (v1) {
                        return function (v2) {
                            var tags = variantTags(Type_Proxy["Proxy"].value);
                            var ords = variantOrds1(Type_Proxy["Proxy"].value);
                            return Data_Variant_Internal.lookupOrd(tags)(ords)(v1)(v2);
                        };
                    },
                    Eq0: function () {
                        return eqVariant3;
                    }
                };
            };
        };
    };
};
var ordVariant1 = /* #__PURE__ */ ordVariant();
var enumVariant = function () {
    return function (dictVariantTags) {
        var variantTags = Data_Variant_Internal.variantTags(dictVariantTags);
        var ordVariant2 = ordVariant1(dictVariantTags);
        return function (dictVariantEqs) {
            var ordVariant3 = ordVariant2(dictVariantEqs);
            return function (dictVariantOrds) {
                var ordVariant4 = ordVariant3(dictVariantOrds);
                return function (dictVariantBoundedEnums) {
                    var variantBoundedEnums1 = variantBoundedEnums(dictVariantBoundedEnums);
                    var variantBounded1 = variantBounded(dictVariantBoundedEnums.VariantBounded0());
                    return {
                        pred: function (a) {
                            var tags = variantTags(Type_Proxy["Proxy"].value);
                            var dicts = variantBoundedEnums1(Type_Proxy["Proxy"].value);
                            var bounds = variantBounded1(Type_Proxy["Proxy"].value);
                            return Data_Variant_Internal.lookupPred(a)(tags)(bounds)(dicts);
                        },
                        succ: function (a) {
                            var tags = variantTags(Type_Proxy["Proxy"].value);
                            var dicts = variantBoundedEnums1(Type_Proxy["Proxy"].value);
                            var bounds = variantBounded1(Type_Proxy["Proxy"].value);
                            return Data_Variant_Internal.lookupSucc(a)(tags)(bounds)(dicts);
                        },
                        Ord0: function () {
                            return ordVariant4;
                        }
                    };
                };
            };
        };
    };
};
var enumVariant1 = /* #__PURE__ */ enumVariant();

// | Combinator for partial matching with a default value in case of failure.
// | ```purescript
// | caseFn :: forall r. Variant (foo :: Int, bar :: String | r) -> String
// | caseFn = default "No match"
// |  # on (Proxy :: Proxy "foo") (\foo -> "Foo: " <> show foo)
// |  # on (Proxy :: Proxy "bar") (\bar -> "Bar: " <> bar)
// | ```
var $$default = function (a) {
    return function (v) {
        return a;
    };
};

// | A `Variant gt` can be cast to some `Variant lt`, where `lt` is is a subset
// | of `gt`, as long as there is proof that the `Variant`'s runtime tag is
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
// | caseFn :: Variant (foo :: Int, bar :: String, baz :: Boolean) -> String
// | caseFn = case_
// |  # on (Proxy :: Proxy "foo") (\foo -> "Foo: " <> show foo)
// |  # on (Proxy :: Proxy "bar") (\bar -> "Bar: " <> bar)
// |  # on (Proxy :: Proxy "baz") (\baz -> "Baz: " <> show baz)
// | ```
var case_ = function (r) {
    return Partial_Unsafe.unsafeCrashWith("Data.Variant: pattern match failure [" + (r.type + "]"));
};

// | Combinator for exhaustive pattern matching using an `onMatch` case record.
// | ```purescript
// | matchFn :: Variant (foo :: Int, bar :: String, baz :: Boolean) -> String
// | matchFn = match
// |   { foo: \foo -> "Foo: " <> show foo
// |   , bar: \bar -> "Bar: " <> bar
// |   , baz: \baz -> "Baz: " <> show baz
// |   }
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
var boundedVariantNil = {
    variantBounded: function (v) {
        return Data_List_Types.Nil.value;
    }
};
var enumVariantNil = {
    variantBoundedEnums: function (v) {
        return Data_List_Types.Nil.value;
    },
    VariantBounded0: function () {
        return boundedVariantNil;
    }
};
var boundedVariantCons = function (dictVariantBounded) {
    var variantBounded1 = variantBounded(dictVariantBounded);
    return function (dictBounded) {
        var top = Data_Bounded.top(dictBounded);
        var bottom = Data_Bounded.bottom(dictBounded);
        return {
            variantBounded: function (v) {
                var dict = {
                    top: top,
                    bottom: bottom
                };
                return new Data_List_Types.Cons(dict, variantBounded1(Type_Proxy["Proxy"].value));
            }
        };
    };
};
var enumVariantCons = function (dictVariantBoundedEnums) {
    var variantBoundedEnums1 = variantBoundedEnums(dictVariantBoundedEnums);
    var boundedVariantCons1 = boundedVariantCons(dictVariantBoundedEnums.VariantBounded0());
    return function (dictBoundedEnum) {
        var Enum1 = dictBoundedEnum.Enum1();
        var pred = Data_Enum.pred(Enum1);
        var succ = Data_Enum.succ(Enum1);
        var fromEnum = Data_Enum.fromEnum(dictBoundedEnum);
        var toEnum = Data_Enum.toEnum(dictBoundedEnum);
        var cardinality = Data_Enum.cardinality(dictBoundedEnum);
        var boundedVariantCons2 = boundedVariantCons1(dictBoundedEnum.Bounded0());
        return {
            variantBoundedEnums: function (v) {
                var dict = {
                    pred: pred,
                    succ: succ,
                    fromEnum: fromEnum,
                    toEnum: toEnum,
                    cardinality: cardinality
                };
                return new Data_List_Types.Cons(dict, variantBoundedEnums1(Type_Proxy["Proxy"].value));
            },
            VariantBounded0: function () {
                return boundedVariantCons2;
            }
        };
    };
};
var boundedVariant = function () {
    return function (dictVariantTags) {
        var variantTags = Data_Variant_Internal.variantTags(dictVariantTags);
        var ordVariant2 = ordVariant1(dictVariantTags);
        return function (dictVariantEqs) {
            var ordVariant3 = ordVariant2(dictVariantEqs);
            return function (dictVariantOrds) {
                var ordVariant4 = ordVariant3(dictVariantOrds);
                return function (dictVariantBounded) {
                    var variantBounded1 = variantBounded(dictVariantBounded);
                    return {
                        top: (function () {
                            var tags = variantTags(Type_Proxy["Proxy"].value);
                            var dicts = variantBounded1(Type_Proxy["Proxy"].value);
                            return Data_Variant_Internal.lookupLast("top")(function (v) {
                                return v.top;
                            })(tags)(dicts);
                        })(),
                        bottom: (function () {
                            var tags = variantTags(Type_Proxy["Proxy"].value);
                            var dicts = variantBounded1(Type_Proxy["Proxy"].value);
                            return Data_Variant_Internal.lookupFirst("bottom")(function (v) {
                                return v.bottom;
                            })(tags)(dicts);
                        })(),
                        Ord0: function () {
                            return ordVariant4;
                        }
                    };
                };
            };
        };
    };
};
var boundedVariant1 = /* #__PURE__ */ boundedVariant();
var boundedEnumVariant = function () {
    return function (dictVariantTags) {
        var variantTags = Data_Variant_Internal.variantTags(dictVariantTags);
        var boundedVariant2 = boundedVariant1(dictVariantTags);
        var enumVariant2 = enumVariant1(dictVariantTags);
        return function (dictVariantEqs) {
            var boundedVariant3 = boundedVariant2(dictVariantEqs);
            var enumVariant3 = enumVariant2(dictVariantEqs);
            return function (dictVariantOrds) {
                var boundedVariant4 = boundedVariant3(dictVariantOrds);
                var enumVariant4 = enumVariant3(dictVariantOrds);
                return function (dictVariantBoundedEnums) {
                    var variantBoundedEnums1 = variantBoundedEnums(dictVariantBoundedEnums);
                    var boundedVariant5 = boundedVariant4(dictVariantBoundedEnums.VariantBounded0());
                    var enumVariant5 = enumVariant4(dictVariantBoundedEnums);
                    return {
                        cardinality: Data_Variant_Internal.lookupCardinality(variantBoundedEnums1(Type_Proxy["Proxy"].value)),
                        fromEnum: function (a) {
                            var tags = variantTags(Type_Proxy["Proxy"].value);
                            var dicts = variantBoundedEnums1(Type_Proxy["Proxy"].value);
                            return Data_Variant_Internal.lookupFromEnum(a)(tags)(dicts);
                        },
                        toEnum: function (n) {
                            var tags = variantTags(Type_Proxy["Proxy"].value);
                            var dicts = variantBoundedEnums1(Type_Proxy["Proxy"].value);
                            return Data_Variant_Internal.lookupToEnum(n)(tags)(dicts);
                        },
                        Bounded0: function () {
                            return boundedVariant5;
                        },
                        Enum1: function () {
                            return enumVariant5;
                        }
                    };
                };
            };
        };
    };
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
    Unvariant,
    unvariant,
    revariant,
    variantEqs,
    variantOrds,
    variantShows,
    variantBounded,
    variantBoundedEnums,
    eqVariantNil,
    eqVariantCons,
    eqVariant,
    boundedVariantNil,
    boundedVariantCons,
    boundedVariant,
    enumVariantNil,
    enumVariantCons,
    enumVariant,
    boundedEnumVariant,
    ordVariantNil,
    ordVariantCons,
    ordVariant,
    showVariantNil,
    showVariantCons,
    showVariant
};