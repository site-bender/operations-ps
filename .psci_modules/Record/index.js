import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Symbol from "../Data.Symbol/index.js";
import * as Record_Unsafe from "../Record.Unsafe/index.js";
import * as Record_Unsafe_Union from "../Record.Unsafe.Union/index.js";
import * as Type_Proxy from "../Type.Proxy/index.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";

// | Merges two records with the first record's labels taking precedence in the
// | case of overlaps. Unlike `merge`, this does not remove duplicate labels
// | from the resulting record type. This can result in better inference for
// | some pipelines, deferring the need for a `Nub` constraint.
// |
// | For example:
// |
// | ```purescript
// | union { x: 1, y: "y" } { y: 2, z: true }
// |  :: { x :: Int, y :: String, y :: Int, z :: Boolean }
// | ```
var union = function () {
    return function (l) {
        return function (r) {
            return Record_Unsafe_Union.unsafeUnionFn(l, r);
        };
    };
};

// | Set a property for a label which is specified using a value-level proxy for
// | a type-level string.
// |
// | For example:
// |
// | ```purescript
// | set (Proxy :: Proxy "x")
// |   :: forall r a b. a -> { x :: b | r } -> { x :: a | r }
// | ```
var set = function (dictIsSymbol) {
    var reflectSymbol = Data_Symbol.reflectSymbol(dictIsSymbol);
    return function () {
        return function () {
            return function (l) {
                return function (b) {
                    return function (r) {
                        return Record_Unsafe.unsafeSet(reflectSymbol(l))(b)(r);
                    };
                };
            };
        };
    };
};

// | A coercion which removes duplicate labels from a record's type.
var nub = function () {
    return Unsafe_Coerce.unsafeCoerce;
};

// | Merges two records with the first record's labels taking precedence in the
// | case of overlaps.
// |
// | For example:
// |
// | ```purescript
// | merge { x: 1, y: "y" } { y: 2, z: true }
// |  :: { x :: Int, y :: String, z :: Boolean }
// | ```
var merge = function () {
    return function () {
        return function (l) {
            return function (r) {
                return Record_Unsafe_Union.unsafeUnionFn(l, r);
            };
        };
    };
};

// | Insert a new property for a label which is specified using a value-level proxy for
// | a type-level string.
// |
// | For example:
// |
// | ```purescript
// | insert (Proxy :: Proxy "x")
// |   :: forall r a. Lacks "x" r => a -> { | r } -> { x :: a | r }
// | ```
var insert = function (dictIsSymbol) {
    var reflectSymbol = Data_Symbol.reflectSymbol(dictIsSymbol);
    return function () {
        return function () {
            return function (l) {
                return function (a) {
                    return function (r) {
                        return Record_Unsafe.unsafeSet(reflectSymbol(l))(a)(r);
                    };
                };
            };
        };
    };
};

// | Get a property for a label which is specified using a value-level proxy for
// | a type-level string.
// |
// | For example:
// |
// | ```purescript
// | get (Proxy :: Proxy "x") :: forall r a. { x :: a | r } -> a
// | ```
var get = function (dictIsSymbol) {
    var reflectSymbol = Data_Symbol.reflectSymbol(dictIsSymbol);
    return function () {
        return function (l) {
            return function (r) {
                return Record_Unsafe.unsafeGet(reflectSymbol(l))(r);
            };
        };
    };
};

// | Modify a property for a label which is specified using a value-level proxy for
// | a type-level string.
// |
// | For example:
// |
// | ```purescript
// | modify (Proxy :: Proxy "x")
// |   :: forall r a b. (a -> b) -> { x :: a | r } -> { x :: b | r }
// | ```
var modify = function (dictIsSymbol) {
    var set1 = set(dictIsSymbol)()();
    var get1 = get(dictIsSymbol)();
    return function () {
        return function () {
            return function (l) {
                return function (f) {
                    return function (r) {
                        return set1(l)(f(get1(l)(r)))(r);
                    };
                };
            };
        };
    };
};
var equalFieldsNil = {
    equalFields: function (v) {
        return function (v1) {
            return function (v2) {
                return true;
            };
        };
    }
};
var equalFields = function (dict) {
    return dict.equalFields;
};
var equalFieldsCons = function (dictIsSymbol) {
    var get1 = get(dictIsSymbol)();
    return function (dictEq) {
        var eq = Data_Eq.eq(dictEq);
        return function () {
            return function (dictEqualFields) {
                var equalFields1 = equalFields(dictEqualFields);
                return {
                    equalFields: function (v) {
                        return function (a) {
                            return function (b) {
                                var get$prime = get1(Type_Proxy["Proxy"].value);
                                var equalRest = equalFields1(Type_Proxy["Proxy"].value);
                                return eq(get$prime(a))(get$prime(b)) && equalRest(a)(b);
                            };
                        };
                    }
                };
            };
        };
    };
};

// | Check two records of the same type for equality.
var equal = function () {
    return function (dictEqualFields) {
        var equalFields1 = equalFields(dictEqualFields);
        return function (a) {
            return function (b) {
                return equalFields1(Type_Proxy["Proxy"].value)(a)(b);
            };
        };
    };
};

// | Merges two records where no labels overlap. This restriction exhibits
// | better inference than `merge` when the resulting record type is known,
// | but one argument is not.
// |
// | For example, hole `?help` is inferred to have type `{ b :: Int }` here:
// |
// | ```purescript
// | disjointUnion { a: 5 } ?help :: { a :: Int, b :: Int }
// | ```
var disjointUnion = function () {
    return function () {
        return function (l) {
            return function (r) {
                return Record_Unsafe_Union.unsafeUnionFn(l, r);
            };
        };
    };
};

// | Delete a property for a label which is specified using a value-level proxy for
// | a type-level string.
// |
// | Note that the type of the resulting row must _lack_ the specified property.
// | Since duplicate labels are allowed, this is checked with a type class constraint.
// |
// | For example:
// |
// | ```purescript
// | delete (Proxy :: Proxy "x")
// |   :: forall r a. Lacks "x" r => { x :: a | r } -> { | r }
// | ```
var $$delete = function (dictIsSymbol) {
    var reflectSymbol = Data_Symbol.reflectSymbol(dictIsSymbol);
    return function () {
        return function () {
            return function (l) {
                return function (r) {
                    return Record_Unsafe.unsafeDelete(reflectSymbol(l))(r);
                };
            };
        };
    };
};

// | Rename a property for a label which is specified using a value-level proxy for
// | a type-level string.
// |
// | Note that the type of the resulting row must _lack_ the specified property.
// | Since duplicate labels are allowed, this is checked with a type class constraint.
// |
// | For example:
// |
// | ```purescript
// | rename (Proxy :: Proxy "x") (Proxy :: Proxy "y")
// |   :: forall a r. Lacks "x" r => Lacks "y" r => { x :: a | r} -> { y :: a | r}
// | ```
var rename = function (dictIsSymbol) {
    var get1 = get(dictIsSymbol)();
    var delete1 = $$delete(dictIsSymbol)()();
    return function (dictIsSymbol1) {
        var insert1 = insert(dictIsSymbol1)()();
        return function () {
            return function () {
                return function () {
                    return function () {
                        return function (prev) {
                            return function (next) {
                                return function (record) {
                                    return insert1(next)(get1(prev)(record))(delete1(prev)(record));
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
export {
    get,
    set,
    modify,
    insert,
    $$delete as delete,
    rename,
    equal,
    merge,
    union,
    disjointUnion,
    nub,
    equalFields,
    equalFieldsCons,
    equalFieldsNil
};
