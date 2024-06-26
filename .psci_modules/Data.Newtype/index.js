import * as Safe_Coerce from "../Safe.Coerce/index.js";
var coerce = /* #__PURE__ */ Safe_Coerce.coerce();
var wrap = function () {
    return coerce;
};
var wrap1 = /* #__PURE__ */ wrap();
var unwrap = function () {
    return coerce;
};
var unwrap1 = /* #__PURE__ */ unwrap();

// | Much like `under2`, but where the lifted binary function operates on
// | values in a `Functor`.
var underF2 = function () {
    return function () {
        return function () {
            return function () {
                return function (v) {
                    return coerce;
                };
            };
        };
    };
};

// | Much like `under`, but where the lifted function operates on values in a
// | `Functor`:
// |
// | ``` purescript
// | newtype EmailAddress = EmailAddress String
// | derive instance newtypeEmailAddress :: Newtype EmailAddress _
// |
// | isValid :: EmailAddress -> Boolean
// | isValid x = false -- imagine a slightly less strict predicate here
// |
// | findValidEmailString :: Array String -> Maybe String
// | findValidEmailString = underF EmailAddress (Foldable.find isValid)
// | ```
// |
// | The above example also demonstrates that the functor type is polymorphic
// | here too, the input is an `Array` but the result is a `Maybe`.
var underF = function () {
    return function () {
        return function () {
            return function () {
                return function (v) {
                    return coerce;
                };
            };
        };
    };
};

// | The opposite of `over2`: lowers a binary function that operates on `Newtype`d
// | values to operate on the wrapped value instead.
var under2 = function () {
    return function () {
        return function (v) {
            return coerce;
        };
    };
};

// | The opposite of `over`: lowers a function that operates on `Newtype`d
// | values to operate on the wrapped value instead.
// |
// | ``` purescript
// | newtype Degrees = Degrees Number
// | derive instance newtypeDegrees :: Newtype Degrees _
// |
// | newtype NormalDegrees = NormalDegrees Number
// | derive instance newtypeNormalDegrees :: Newtype NormalDegrees _
// |
// | normaliseDegrees :: Degrees -> NormalDegrees
// | normaliseDegrees (Degrees deg) = NormalDegrees (deg % 360.0)
// |
// | asNormalDegrees :: Number -> Number
// | asNormalDegrees = under Degrees normaliseDegrees
// | ```
// |
// | As with `over` the `Newtype` is polymorphic, as illustrated in the example
// | above - both `Degrees` and `NormalDegrees` are instances of `Newtype`,
// | so even though `normaliseDegrees` changes the result type we can still put
// | a `Number` in and get a `Number` out via `under`.
var under = function () {
    return function () {
        return function (v) {
            return coerce;
        };
    };
};

// | Given a constructor for a `Newtype`, this returns the appropriate `unwrap`
// | function.
var un = function () {
    return function (v) {
        return unwrap1;
    };
};

// | Similar to the function from the `Traversable` class, but operating within
// | a newtype instead.
var traverse = function () {
    return function () {
        return function (v) {
            return coerce;
        };
    };
};

// | Much like `over2`, but where the lifted binary function operates on
// | values in a `Functor`.
var overF2 = function () {
    return function () {
        return function () {
            return function () {
                return function (v) {
                    return coerce;
                };
            };
        };
    };
};

// | Much like `over`, but where the lifted function operates on values in a
// | `Functor`:
// |
// | ``` purescript
// | findLabel :: String -> Array Label -> Maybe Label
// | findLabel s = overF Label (Foldable.find (_ == s))
// | ```
// |
// | The above example also demonstrates that the functor type is polymorphic
// | here too, the input is an `Array` but the result is a `Maybe`.
var overF = function () {
    return function () {
        return function () {
            return function () {
                return function (v) {
                    return coerce;
                };
            };
        };
    };
};

// | Lifts a binary function to operate over newtypes.
// |
// | ``` purescript
// | newtype Meter = Meter Int
// | derive newtype instance newtypeMeter :: Newtype Meter _
// | newtype SquareMeter = SquareMeter Int
// | derive newtype instance newtypeSquareMeter :: Newtype SquareMeter _
// |
// | area :: Meter -> Meter -> SquareMeter
// | area = over2 Meter (*)
// | ```
// |
// | The above example also demonstrates that the return type is polymorphic
// | here too.
var over2 = function () {
    return function () {
        return function (v) {
            return coerce;
        };
    };
};

// | Lifts a function operate over newtypes. This can be used to lift a
// | function to manipulate the contents of a single newtype, somewhat like
// | `map` does for a `Functor`:
// |
// | ``` purescript
// | newtype Label = Label String
// | derive instance newtypeLabel :: Newtype Label _
// |
// | toUpperLabel :: Label -> Label
// | toUpperLabel = over Label String.toUpper
// | ```
// |
// | But the result newtype is polymorphic, meaning the result can be returned
// | as an alternative newtype:
// |
// | ``` purescript
// | newtype UppercaseLabel = UppercaseLabel String
// | derive instance newtypeUppercaseLabel :: Newtype UppercaseLabel _
// |
// | toUpperLabel' :: Label -> UppercaseLabel
// | toUpperLabel' = over Label String.toUpper
// | ```
var over = function () {
    return function () {
        return function (v) {
            return coerce;
        };
    };
};
var newtypeMultiplicative = {
    Coercible0: function () {
        return undefined;
    }
};
var newtypeLast = {
    Coercible0: function () {
        return undefined;
    }
};
var newtypeFirst = {
    Coercible0: function () {
        return undefined;
    }
};
var newtypeEndo = {
    Coercible0: function () {
        return undefined;
    }
};
var newtypeDual = {
    Coercible0: function () {
        return undefined;
    }
};
var newtypeDisj = {
    Coercible0: function () {
        return undefined;
    }
};
var newtypeConj = {
    Coercible0: function () {
        return undefined;
    }
};
var newtypeAdditive = {
    Coercible0: function () {
        return undefined;
    }
};

// | This combinator unwraps the newtype, applies a monomorphic function to the 
// | contained value and wraps the result back in the newtype
var modify = function () {
    return function (fn) {
        return function (t) {
            return wrap1(fn(unwrap1(t)));
        };
    };
};

// | Similar to the function from the `Distributive` class, but operating within
// | a newtype instead.
var collect = function () {
    return function () {
        return function (v) {
            return coerce;
        };
    };
};

// | Similar to `ala` but useful for cases where you want to use an additional
// | projection with the higher order function:
// |
// | ``` purescript
// | alaF Additive foldMap String.length ["hello", "world"] -- 10
// | alaF Multiplicative foldMap Math.abs [1.0, -2.0, 3.0, -4.0] -- 24.0
// | ```
// |
// | The type admits other possibilities due to the polymorphic `Functor`
// | constraints, but the case described above works because ((->) a) is a
// | `Functor`.
var alaF = function () {
    return function () {
        return function () {
            return function () {
                return function (v) {
                    return coerce;
                };
            };
        };
    };
};

// | This combinator is for when you have a higher order function that you want
// | to use in the context of some newtype - `foldMap` being a common example:
// |
// | ``` purescript
// | ala Additive foldMap [1,2,3,4] -- 10
// | ala Multiplicative foldMap [1,2,3,4] -- 24
// | ala Conj foldMap [true, false] -- false
// | ala Disj foldMap [true, false] -- true
// | ```
var ala = function () {
    return function () {
        return function () {
            return function (v) {
                return function (f) {
                    return coerce(f(wrap1));
                };
            };
        };
    };
};
export {
    wrap,
    unwrap,
    un,
    modify,
    ala,
    alaF,
    over,
    overF,
    under,
    underF,
    over2,
    overF2,
    under2,
    underF2,
    traverse,
    collect,
    newtypeAdditive,
    newtypeMultiplicative,
    newtypeConj,
    newtypeDisj,
    newtypeDual,
    newtypeEndo,
    newtypeFirst,
    newtypeLast
};
