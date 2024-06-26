import * as Control_Alt from "../Control.Alt/index.js";
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Apply from "../Control.Apply/index.js";
import * as Control_Category from "../Control.Category/index.js";
import * as Data_Bounded from "../Data.Bounded/index.js";
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Functor_Invariant from "../Data.Functor.Invariant/index.js";
import * as Data_Generic_Rep from "../Data.Generic.Rep/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Ordering from "../Data.Ordering/index.js";
import * as Data_Semigroup from "../Data.Semigroup/index.js";
import * as Data_Semiring from "../Data.Semiring/index.js";
import * as Data_Show from "../Data.Show/index.js";
import * as Data_Unit from "../Data.Unit/index.js";
var identity = /* #__PURE__ */ Control_Category.identity(Control_Category.categoryFn);

// | The `Maybe` type is used to represent optional values and can be seen as
// | something like a type-safe `null`, where `Nothing` is `null` and `Just x`
// | is the non-null value `x`.
var Nothing = /* #__PURE__ */ (function () {
    function Nothing() {

    };
    Nothing.value = new Nothing();
    return Nothing;
})();

// | The `Maybe` type is used to represent optional values and can be seen as
// | something like a type-safe `null`, where `Nothing` is `null` and `Just x`
// | is the non-null value `x`.
var Just = /* #__PURE__ */ (function () {
    function Just(value0) {
        this.value0 = value0;
    };
    Just.create = function (value0) {
        return new Just(value0);
    };
    return Just;
})();

// | The `Show` instance allows `Maybe` values to be rendered as a string with
// | `show` whenever there is an `Show` instance for the type the `Maybe`
// | contains.
var showMaybe = function (dictShow) {
    var show = Data_Show.show(dictShow);
    return {
        show: function (v) {
            if (v instanceof Just) {
                return "(Just " + (show(v.value0) + ")");
            };
            if (v instanceof Nothing) {
                return "Nothing";
            };
            throw new Error("Failed pattern match at Data.Maybe (line 223, column 1 - line 225, column 28): " + [ v.constructor.name ]);
        }
    };
};

// | The `Semigroup` instance enables use of the operator `<>` on `Maybe` values
// | whenever there is a `Semigroup` instance for the type the `Maybe` contains.
// | The exact behaviour of `<>` depends on the "inner" `Semigroup` instance,
// | but generally captures the notion of appending or combining things.
// |
// | ``` purescript
// | Just x <> Just y = Just (x <> y)
// | Just x <> Nothing = Just x
// | Nothing <> Just y = Just y
// | Nothing <> Nothing = Nothing
// | ```
var semigroupMaybe = function (dictSemigroup) {
    var append1 = Data_Semigroup.append(dictSemigroup);
    return {
        append: function (v) {
            return function (v1) {
                if (v instanceof Nothing) {
                    return v1;
                };
                if (v1 instanceof Nothing) {
                    return v;
                };
                if (v instanceof Just && v1 instanceof Just) {
                    return new Just(append1(v.value0)(v1.value0));
                };
                throw new Error("Failed pattern match at Data.Maybe (line 182, column 1 - line 185, column 43): " + [ v.constructor.name, v1.constructor.name ]);
            };
        }
    };
};

// | One or none.
// |
// | ```purescript
// | optional empty = pure Nothing
// | ```
// |
// | The behaviour of `optional (pure x)` depends on whether the `Alt` instance
// | satisfy the left catch law (`pure a <|> b = pure a`).
// |
// | `Either e` does:
// |
// | ```purescript
// | optional (Right x) = Right (Just x)
// | ```
// |
// | But `Array` does not:
// |
// | ```purescript
// | optional [x] = [Just x, Nothing]
// | ```
var optional = function (dictAlt) {
    var alt = Control_Alt.alt(dictAlt);
    var map1 = Data_Functor.map(dictAlt.Functor0());
    return function (dictApplicative) {
        var pure = Control_Applicative.pure(dictApplicative);
        return function (a) {
            return alt(map1(Just.create)(a))(pure(Nothing.value));
        };
    };
};
var monoidMaybe = function (dictSemigroup) {
    var semigroupMaybe1 = semigroupMaybe(dictSemigroup);
    return {
        mempty: Nothing.value,
        Semigroup0: function () {
            return semigroupMaybe1;
        }
    };
};

// | Similar to `maybe` but for use in cases where the default value may be
// | expensive to compute. As PureScript is not lazy, the standard `maybe` has
// | to evaluate the default value before returning the result, whereas here
// | the value is only computed when the `Maybe` is known to be `Nothing`.
// |
// | ``` purescript
// | maybe' (\_ -> x) f Nothing == x
// | maybe' (\_ -> x) f (Just y) == f y
// | ```
var maybe$prime = function (v) {
    return function (v1) {
        return function (v2) {
            if (v2 instanceof Nothing) {
                return v(Data_Unit.unit);
            };
            if (v2 instanceof Just) {
                return v1(v2.value0);
            };
            throw new Error("Failed pattern match at Data.Maybe (line 250, column 1 - line 250, column 62): " + [ v.constructor.name, v1.constructor.name, v2.constructor.name ]);
        };
    };
};

// | Takes a default value, a function, and a `Maybe` value. If the `Maybe`
// | value is `Nothing` the default value is returned, otherwise the function
// | is applied to the value inside the `Just` and the result is returned.
// |
// | ``` purescript
// | maybe x f Nothing == x
// | maybe x f (Just y) == f y
// | ```
var maybe = function (v) {
    return function (v1) {
        return function (v2) {
            if (v2 instanceof Nothing) {
                return v;
            };
            if (v2 instanceof Just) {
                return v1(v2.value0);
            };
            throw new Error("Failed pattern match at Data.Maybe (line 237, column 1 - line 237, column 51): " + [ v.constructor.name, v1.constructor.name, v2.constructor.name ]);
        };
    };
};

// | Returns `true` when the `Maybe` value is `Nothing`.
var isNothing = /* #__PURE__ */ maybe(true)(/* #__PURE__ */ Data_Function["const"](false));

// | Returns `true` when the `Maybe` value was constructed with `Just`.
var isJust = /* #__PURE__ */ maybe(false)(/* #__PURE__ */ Data_Function["const"](true));
var genericMaybe = {
    to: function (x) {
        if (x instanceof Data_Generic_Rep.Inl) {
            return Nothing.value;
        };
        if (x instanceof Data_Generic_Rep.Inr) {
            return new Just(x.value0);
        };
        throw new Error("Failed pattern match at Data.Maybe (line 227, column 1 - line 227, column 52): " + [ x.constructor.name ]);
    },
    from: function (x) {
        if (x instanceof Nothing) {
            return new Data_Generic_Rep.Inl(Data_Generic_Rep.NoArguments.value);
        };
        if (x instanceof Just) {
            return new Data_Generic_Rep.Inr(x.value0);
        };
        throw new Error("Failed pattern match at Data.Maybe (line 227, column 1 - line 227, column 52): " + [ x.constructor.name ]);
    }
};

// | The `Functor` instance allows functions to transform the contents of a
// | `Just` with the `<$>` operator:
// |
// | ``` purescript
// | f <$> Just x == Just (f x)
// | ```
// |
// | `Nothing` values are left untouched:
// |
// | ``` purescript
// | f <$> Nothing == Nothing
// | ```
var functorMaybe = {
    map: function (v) {
        return function (v1) {
            if (v1 instanceof Just) {
                return new Just(v(v1.value0));
            };
            return Nothing.value;
        };
    }
};
var map = /* #__PURE__ */ Data_Functor.map(functorMaybe);
var invariantMaybe = {
    imap: /* #__PURE__ */ Data_Functor_Invariant.imapF(functorMaybe)
};

// | Similar to `fromMaybe` but for use in cases where the default value may be
// | expensive to compute. As PureScript is not lazy, the standard `fromMaybe`
// | has to evaluate the default value before returning the result, whereas here
// | the value is only computed when the `Maybe` is known to be `Nothing`.
// |
// | ``` purescript
// | fromMaybe' (\_ -> x) Nothing == x
// | fromMaybe' (\_ -> x) (Just y) == y
// | ```
var fromMaybe$prime = function (a) {
    return maybe$prime(a)(identity);
};

// | Takes a default value, and a `Maybe` value. If the `Maybe` value is
// | `Nothing` the default value is returned, otherwise the value inside the
// | `Just` is returned.
// |
// | ``` purescript
// | fromMaybe x Nothing == x
// | fromMaybe x (Just y) == y
// | ```
var fromMaybe = function (a) {
    return maybe(a)(identity);
};

// | A partial function that extracts the value from the `Just` data
// | constructor. Passing `Nothing` to `fromJust` will throw an error at
// | runtime.
var fromJust = function () {
    return function (v) {
        if (v instanceof Just) {
            return v.value0;
        };
        throw new Error("Failed pattern match at Data.Maybe (line 288, column 1 - line 288, column 46): " + [ v.constructor.name ]);
    };
};

// | The `Extend` instance allows sequencing of `Maybe` values and functions
// | that accept a `Maybe a` and return a non-`Maybe` result using the
// | `<<=` operator.
// |
// | ``` purescript
// | f <<= Nothing = Nothing
// | f <<= x = Just (f x)
// | ```
var extendMaybe = {
    extend: function (v) {
        return function (v1) {
            if (v1 instanceof Nothing) {
                return Nothing.value;
            };
            return new Just(v(v1));
        };
    },
    Functor0: function () {
        return functorMaybe;
    }
};

// | The `Eq` instance allows `Maybe` values to be checked for equality with
// | `==` and inequality with `/=` whenever there is an `Eq` instance for the
// | type the `Maybe` contains.
var eqMaybe = function (dictEq) {
    var eq = Data_Eq.eq(dictEq);
    return {
        eq: function (x) {
            return function (y) {
                if (x instanceof Nothing && y instanceof Nothing) {
                    return true;
                };
                if (x instanceof Just && y instanceof Just) {
                    return eq(x.value0)(y.value0);
                };
                return false;
            };
        }
    };
};

// | The `Ord` instance allows `Maybe` values to be compared with
// | `compare`, `>`, `>=`, `<` and `<=` whenever there is an `Ord` instance for
// | the type the `Maybe` contains.
// |
// | `Nothing` is considered to be less than any `Just` value.
var ordMaybe = function (dictOrd) {
    var compare = Data_Ord.compare(dictOrd);
    var eqMaybe1 = eqMaybe(dictOrd.Eq0());
    return {
        compare: function (x) {
            return function (y) {
                if (x instanceof Nothing && y instanceof Nothing) {
                    return Data_Ordering.EQ.value;
                };
                if (x instanceof Nothing) {
                    return Data_Ordering.LT.value;
                };
                if (y instanceof Nothing) {
                    return Data_Ordering.GT.value;
                };
                if (x instanceof Just && y instanceof Just) {
                    return compare(x.value0)(y.value0);
                };
                throw new Error("Failed pattern match at Data.Maybe (line 0, column 0 - line 0, column 0): " + [ x.constructor.name, y.constructor.name ]);
            };
        },
        Eq0: function () {
            return eqMaybe1;
        }
    };
};
var eq1Maybe = {
    eq1: function (dictEq) {
        return Data_Eq.eq(eqMaybe(dictEq));
    }
};
var ord1Maybe = {
    compare1: function (dictOrd) {
        return Data_Ord.compare(ordMaybe(dictOrd));
    },
    Eq10: function () {
        return eq1Maybe;
    }
};
var boundedMaybe = function (dictBounded) {
    var ordMaybe1 = ordMaybe(dictBounded.Ord0());
    return {
        top: new Just(Data_Bounded.top(dictBounded)),
        bottom: Nothing.value,
        Ord0: function () {
            return ordMaybe1;
        }
    };
};

// | The `Apply` instance allows functions contained within a `Just` to
// | transform a value contained within a `Just` using the `apply` operator:
// |
// | ``` purescript
// | Just f <*> Just x == Just (f x)
// | ```
// |
// | `Nothing` values are left untouched:
// |
// | ``` purescript
// | Just f <*> Nothing == Nothing
// | Nothing <*> Just x == Nothing
// | ```
// |
// | Combining `Functor`'s `<$>` with `Apply`'s `<*>` can be used transform a
// | pure function to take `Maybe`-typed arguments so `f :: a -> b -> c`
// | becomes `f :: Maybe a -> Maybe b -> Maybe c`:
// |
// | ``` purescript
// | f <$> Just x <*> Just y == Just (f x y)
// | ```
// |
// | The `Nothing`-preserving behaviour of both operators means the result of
// | an expression like the above but where any one of the values is `Nothing`
// | means the whole result becomes `Nothing` also:
// |
// | ``` purescript
// | f <$> Nothing <*> Just y == Nothing
// | f <$> Just x <*> Nothing == Nothing
// | f <$> Nothing <*> Nothing == Nothing
// | ```
var applyMaybe = {
    apply: function (v) {
        return function (v1) {
            if (v instanceof Just) {
                return map(v.value0)(v1);
            };
            if (v instanceof Nothing) {
                return Nothing.value;
            };
            throw new Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): " + [ v.constructor.name, v1.constructor.name ]);
        };
    },
    Functor0: function () {
        return functorMaybe;
    }
};
var apply = /* #__PURE__ */ Control_Apply.apply(applyMaybe);

// | The `Bind` instance allows sequencing of `Maybe` values and functions that
// | return a `Maybe` by using the `>>=` operator:
// |
// | ``` purescript
// | Just x >>= f = f x
// | Nothing >>= f = Nothing
// | ```
var bindMaybe = {
    bind: function (v) {
        return function (v1) {
            if (v instanceof Just) {
                return v1(v.value0);
            };
            if (v instanceof Nothing) {
                return Nothing.value;
            };
            throw new Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): " + [ v.constructor.name, v1.constructor.name ]);
        };
    },
    Apply0: function () {
        return applyMaybe;
    }
};
var semiringMaybe = function (dictSemiring) {
    var add = Data_Semiring.add(dictSemiring);
    var mul = Data_Semiring.mul(dictSemiring);
    return {
        zero: Nothing.value,
        one: new Just(Data_Semiring.one(dictSemiring)),
        add: function (v) {
            return function (v1) {
                if (v instanceof Nothing) {
                    return v1;
                };
                if (v1 instanceof Nothing) {
                    return v;
                };
                if (v instanceof Just && v1 instanceof Just) {
                    return new Just(add(v.value0)(v1.value0));
                };
                throw new Error("Failed pattern match at Data.Maybe (line 190, column 1 - line 198, column 28): " + [ v.constructor.name, v1.constructor.name ]);
            };
        },
        mul: function (x) {
            return function (y) {
                return apply(map(mul)(x))(y);
            };
        }
    };
};

// | The `Applicative` instance enables lifting of values into `Maybe` with the
// | `pure` function:
// |
// | ``` purescript
// | pure x :: Maybe _ == Just x
// | ```
// |
// | Combining `Functor`'s `<$>` with `Apply`'s `<*>` and `Applicative`'s
// | `pure` can be used to pass a mixture of `Maybe` and non-`Maybe` typed
// | values to a function that does not usually expect them, by using `pure`
// | for any value that is not already `Maybe` typed:
// |
// | ``` purescript
// | f <$> Just x <*> pure y == Just (f x y)
// | ```
// |
// | Even though `pure = Just` it is recommended to use `pure` in situations
// | like this as it allows the choice of `Applicative` to be changed later
// | without having to go through and replace `Just` with a new constructor.
var applicativeMaybe = /* #__PURE__ */ (function () {
    return {
        pure: Just.create,
        Apply0: function () {
            return applyMaybe;
        }
    };
})();

// | The `Monad` instance guarantees that there are both `Applicative` and
// | `Bind` instances for `Maybe`. This also enables the `do` syntactic sugar:
// |
// | ``` purescript
// | do
// |   x' <- x
// |   y' <- y
// |   pure (f x' y')
// | ```
// |
// | Which is equivalent to:
// |
// | ``` purescript
// | x >>= (\x' -> y >>= (\y' -> pure (f x' y')))
// | ```
// |
// | Which is equivalent to:
// |
// | ``` purescript
// | case x of
// |   Nothing -> Nothing
// |   Just x' -> case y of
// |     Nothing -> Nothing
// |     Just y' -> Just (f x' y')
// | ```
var monadMaybe = {
    Applicative0: function () {
        return applicativeMaybe;
    },
    Bind1: function () {
        return bindMaybe;
    }
};

// | The `Alt` instance allows for a choice to be made between two `Maybe`
// | values with the `<|>` operator, where the first `Just` encountered
// | is taken.
// |
// | ``` purescript
// | Just x <|> Just y == Just x
// | Nothing <|> Just y == Just y
// | Nothing <|> Nothing == Nothing
// | ```
var altMaybe = {
    alt: function (v) {
        return function (v1) {
            if (v instanceof Nothing) {
                return v1;
            };
            return v;
        };
    },
    Functor0: function () {
        return functorMaybe;
    }
};

// | The `Plus` instance provides a default `Maybe` value:
// |
// | ``` purescript
// | empty :: Maybe _ == Nothing
// | ```
var plusMaybe = /* #__PURE__ */ (function () {
    return {
        empty: Nothing.value,
        Alt0: function () {
            return altMaybe;
        }
    };
})();

// | The `Alternative` instance guarantees that there are both `Applicative` and
// | `Plus` instances for `Maybe`.
var alternativeMaybe = {
    Applicative0: function () {
        return applicativeMaybe;
    },
    Plus1: function () {
        return plusMaybe;
    }
};
export {
    Nothing,
    Just,
    maybe,
    maybe$prime,
    fromMaybe,
    fromMaybe$prime,
    isJust,
    isNothing,
    fromJust,
    optional,
    functorMaybe,
    applyMaybe,
    applicativeMaybe,
    altMaybe,
    plusMaybe,
    alternativeMaybe,
    bindMaybe,
    monadMaybe,
    extendMaybe,
    invariantMaybe,
    semigroupMaybe,
    monoidMaybe,
    semiringMaybe,
    eqMaybe,
    eq1Maybe,
    ordMaybe,
    ord1Maybe,
    boundedMaybe,
    showMaybe,
    genericMaybe
};
