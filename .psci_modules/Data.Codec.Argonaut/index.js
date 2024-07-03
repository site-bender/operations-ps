import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Control_Category from "../Control.Category/index.js";
import * as Data_Argonaut_Core from "../Data.Argonaut.Core/index.js";
import * as Data_Array from "../Data.Array/index.js";
import * as Data_Bifunctor from "../Data.Bifunctor/index.js";
import * as Data_Codec from "../Data.Codec/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Generic_Rep from "../Data.Generic.Rep/index.js";
import * as Data_Int from "../Data.Int/index.js";
import * as Data_List_Types from "../Data.List.Types/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Ordering from "../Data.Ordering/index.js";
import * as Data_Show from "../Data.Show/index.js";
import * as Data_String_CodePoints from "../Data.String.CodePoints/index.js";
import * as Data_String_CodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data_Symbol from "../Data.Symbol/index.js";
import * as Data_TraversableWithIndex from "../Data.TraversableWithIndex/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
import * as Data_Void from "../Data.Void/index.js";
import * as Foreign_Object from "../Foreign.Object/index.js";
import * as Record_Unsafe from "../Record.Unsafe/index.js";
import * as Safe_Coerce from "../Safe.Coerce/index.js";
var show = /* #__PURE__ */ Data_Show.show(Data_Show.showString);
var show1 = /* #__PURE__ */ Data_Show.show(Data_Show.showInt);
var bind = /* #__PURE__ */ Control_Bind.bind(Data_Either.bindEither);
var lmap = /* #__PURE__ */ Data_Bifunctor.lmap(Data_Bifunctor.bifunctorEither);
var map = /* #__PURE__ */ Data_Functor.map(Data_Either.functorEither);
var pure = /* #__PURE__ */ Control_Applicative.pure(Data_Either.applicativeEither);
var pure1 = /* #__PURE__ */ Control_Applicative.pure(Data_List_Types.applicativeList);
var bindFlipped = /* #__PURE__ */ Control_Bind.bindFlipped(Data_Either.bindEither);
var fromFoldable = /* #__PURE__ */ Foreign_Object.fromFoldable(Data_List_Types.foldableList);
var composeKleisliFlipped = /* #__PURE__ */ Control_Bind.composeKleisliFlipped(Data_Maybe.bindMaybe);
var fromFoldable1 = /* #__PURE__ */ Data_Array.fromFoldable(Data_List_Types.foldableList);
var eq1 = /* #__PURE__ */ Data_Eq.eq(Data_Argonaut_Core.eqJson);
var compare = /* #__PURE__ */ Data_Ord.compare(Data_Ord.ordString);
var compare1 = /* #__PURE__ */ Data_Ord.compare(Data_Argonaut_Core.ordJson);
var compare2 = /* #__PURE__ */ Data_Ord.compare(Data_Ord.ordInt);
var bimap = /* #__PURE__ */ Data_Bifunctor.bimap(Data_Bifunctor.bifunctorEither);
var coerce = /* #__PURE__ */ Safe_Coerce.coerce();
var traverseWithIndex = /* #__PURE__ */ Data_TraversableWithIndex.traverseWithIndex(Data_TraversableWithIndex.traversableWithIndexArray)(Data_Either.applicativeEither);
var map1 = /* #__PURE__ */ Data_Functor.map(Data_Functor.functorArray);

// | Error type for failures while decoding.
var TypeMismatch = /* #__PURE__ */ (function () {
    function TypeMismatch(value0) {
        this.value0 = value0;
    };
    TypeMismatch.create = function (value0) {
        return new TypeMismatch(value0);
    };
    return TypeMismatch;
})();

// | Error type for failures while decoding.
var UnexpectedValue = /* #__PURE__ */ (function () {
    function UnexpectedValue(value0) {
        this.value0 = value0;
    };
    UnexpectedValue.create = function (value0) {
        return new UnexpectedValue(value0);
    };
    return UnexpectedValue;
})();

// | Error type for failures while decoding.
var AtIndex = /* #__PURE__ */ (function () {
    function AtIndex(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    AtIndex.create = function (value0) {
        return function (value1) {
            return new AtIndex(value0, value1);
        };
    };
    return AtIndex;
})();

// | Error type for failures while decoding.
var AtKey = /* #__PURE__ */ (function () {
    function AtKey(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    AtKey.create = function (value0) {
        return function (value1) {
            return new AtKey(value0, value1);
        };
    };
    return AtKey;
})();

// | Error type for failures while decoding.
var Named = /* #__PURE__ */ (function () {
    function Named(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Named.create = function (value0) {
        return function (value1) {
            return new Named(value0, value1);
        };
    };
    return Named;
})();

// | Error type for failures while decoding.
var MissingValue = /* #__PURE__ */ (function () {
    function MissingValue() {

    };
    MissingValue.value = new MissingValue();
    return MissingValue;
})();
var showJsonDecodeError = {
    show: function (v) {
        if (v instanceof TypeMismatch) {
            return "(TypeMismatch " + (show(v.value0) + ")");
        };
        if (v instanceof UnexpectedValue) {
            return "(UnexpectedValue " + (Data_Argonaut_Core.stringify(v.value0) + ")");
        };
        if (v instanceof AtIndex) {
            return "(AtIndex " + (show1(v.value0) + (" " + (Data_Show.show(showJsonDecodeError)(v.value1) + ")")));
        };
        if (v instanceof AtKey) {
            return "(AtKey " + (show(v.value0) + (" " + (Data_Show.show(showJsonDecodeError)(v.value1) + ")")));
        };
        if (v instanceof Named) {
            return "(Named " + (show(v.value0) + (" " + (Data_Show.show(showJsonDecodeError)(v.value1) + ")")));
        };
        if (v instanceof MissingValue) {
            return "MissingValue";
        };
        throw new Error("Failed pattern match at Data.Codec.Argonaut (line 77, column 10 - line 83, column 34): " + [ v.constructor.name ]);
    }
};

// | Used with `record` to define an optional field.
// |
// | This will only decode the property as `Nothing` if the field does not exist
// | in the object - having a values such as `null` assigned will need handling
// | separately.
// |
// | The property will be omitted when encoding and the value is `Nothing`.
var recordPropOptional = function (dictIsSymbol) {
    var reflectSymbol = Data_Symbol.reflectSymbol(dictIsSymbol);
    return function () {
        return function (p) {
            return function (codecA) {
                return function (codecR) {
                    var key = reflectSymbol(p);
                    var enc$prime = function (val) {
                        var w = Data_Codec.encode(codecR)(val);
                        var v = Record_Unsafe.unsafeGet(key)(val);
                        if (v instanceof Data_Maybe.Just) {
                            return new Data_List_Types.Cons(new Data_Tuple.Tuple(key, Data_Codec.encode(codecA)(v.value0)), w);
                        };
                        if (v instanceof Data_Maybe.Nothing) {
                            return w;
                        };
                        throw new Error("Failed pattern match at Data.Codec.Argonaut (line 308, column 5 - line 310, column 18): " + [ v.constructor.name ]);
                    };
                    var dec$prime = function (obj) {
                        return bind(Data_Codec.decode(codecR)(obj))(function (r) {
                            return bind(lmap(AtKey.create(key))((function () {
                                var v = Foreign_Object.lookup(key)(obj);
                                if (v instanceof Data_Maybe.Just) {
                                    return map(Data_Maybe.Just.create)(Data_Codec.decode(codecA)(v.value0));
                                };
                                return new Data_Either.Right(Data_Maybe.Nothing.value);
                            })()))(function (a) {
                                return pure(Record_Unsafe.unsafeSet(key)(a)(r));
                            });
                        });
                    };
                    return Data_Codec.codec(dec$prime)(enc$prime);
                };
            };
        };
    };
};

// | Used with `record` to define codecs for record types that encode into JSON
// | objects of the same shape. See the comment on `record` for an example.
var recordProp = function (dictIsSymbol) {
    var reflectSymbol = Data_Symbol.reflectSymbol(dictIsSymbol);
    return function () {
        return function (p) {
            return function (codecA) {
                return function (codecR) {
                    var enc$prime = function (key) {
                        return function (val) {
                            return new Data_List_Types.Cons(new Data_Tuple.Tuple(key, Data_Codec.encode(codecA)(Record_Unsafe.unsafeGet(key)(val))), Data_Codec.encode(codecR)(val));
                        };
                    };
                    var dec$prime = function (key) {
                        return function (obj) {
                            return bind(Data_Codec.decode(codecR)(obj))(function (r) {
                                return bind(lmap(AtKey.create(key))((function () {
                                    var v = Foreign_Object.lookup(key)(obj);
                                    if (v instanceof Data_Maybe.Just) {
                                        return Data_Codec.decode(codecA)(v.value0);
                                    };
                                    if (v instanceof Data_Maybe.Nothing) {
                                        return new Data_Either.Left(MissingValue.value);
                                    };
                                    throw new Error("Failed pattern match at Data.Codec.Argonaut (line 264, column 29 - line 266, column 34): " + [ v.constructor.name ]);
                                })()))(function (a) {
                                    return pure(Record_Unsafe.unsafeSet(key)(a)(r));
                                });
                            });
                        };
                    };
                    var key = reflectSymbol(p);
                    return Data_Codec.codec(dec$prime(key))(enc$prime(key));
                };
            };
        };
    };
};

// | The starting value for a object-record codec. Used with `recordProp` it
// | provides a convenient method for defining codecs for record types that
// | encode into JSON objects of the same shape.
// |
// | For example, to encode a record as the JSON object
// | `{ "name": "Karl", "age": 25 }` we would define a codec like this:
// | ```
// | import Data.Codec.Argonaut as CA
// | import Type.Proxy (Proxy(..))
// |
// | type Person = { name ∷ String, age ∷ Int }
// |
// | codecPerson ∷ CA.JsonCodec Person
// | codecPerson =
// |   CA.object "Person" $ CA.record
// |     # CA.recordProp (Proxy :: _ "name") CA.string
// |     # CA.recordProp (Proxy :: _ "age") CA.int
// | ```
// |
// | See also `Data.Codec.Argonaut.Record.object` for a more commonly useful
// | version of this function.
var record = /* #__PURE__ */ (function () {
    return new Data_Codec.Codec(Data_Function["const"](pure({})), Control_Applicative.pure(Data_Tuple.applicativeTuple(Data_List_Types.monoidList)));
})();

// | A codec for a property of an object.
var prop = function (key) {
    return function (codec) {
        return Data_Codec.codec(function (obj) {
            return lmap(AtKey.create(key))(Data_Maybe.maybe(new Data_Either.Left(MissingValue.value))(Data_Codec.decode(codec))(Foreign_Object.lookup(key)(obj)));
        })((function () {
            var $200 = Data_Tuple.Tuple.create(key);
            var $201 = Data_Codec.encode(codec);
            return function ($202) {
                return pure1($200($201($202)));
            };
        })());
    };
};

// | Adapts an existing codec with a pair of functions to allow a value to be
// | further refined. If the inner decoder fails an `UnexpectedValue` error will
// | be raised for JSON input.
// |
// | This function is named as such as the pair of functions it accepts
// | correspond with the `preview` and `review` functions of a `Prism`-style lens.
// |
// | An example of this would be a codec for `Data.String.NonEmpty.NonEmptyString`:
// |
// | ```purescript
// | nonEmptyString ∷ CA.JsonCodec NES.NonEmptyString
// | nonEmptyString = CA.prismaticCodec "NonEmptyString" NES.fromString NES.toString CA.string
// | ```
// |
// | Another example might be to handle a mapping from a small sum type to
// | strings:
// |
// | ```purescript
// | data Direction = North | South | West | East
// |
// | directionCodec :: JsonCodec Direction
// | directionCodec = CA.prismaticCodec "Direction" dec enc string
// |   where
// |     dec = case _ of
// |       "N" -> Just North
// |       "S" -> Just South
// |       "W" -> Just West
// |       "E" -> Just East
// |       _ -> Nothing
// |
// |     enc = case _ of
// |       North -> "N"
// |       South -> "S"
// |       West -> "W"
// |       East -> "E"
// | ```
// |
// | Although for this latter case there are some other options too, in the form
// | of `Data.Codec.Argonaut.Generic.nullarySum` and `Data.Codec.Argonaut.Sum.enumSum`.
var prismaticCodec = function (name) {
    return function (f) {
        return function (g) {
            return function (codec) {
                return Data_Codec["codec$prime"](function (j) {
                    return bindFlipped((function () {
                        var $203 = Data_Either.note(new Named(name, new UnexpectedValue(j)));
                        return function ($204) {
                            return $203(f($204));
                        };
                    })())(Data_Codec.decode(codec)(j));
                })((function () {
                    var $205 = Data_Codec.encode(codec);
                    return function ($206) {
                        return $205(g($206));
                    };
                })());
            };
        };
    };
};

// | Prints a `JsonDecodeError` as a somewhat readable error message.
var printJsonDecodeError = function (err) {
    var go = function (v) {
        if (v instanceof TypeMismatch) {
            return "  Expected value of type '" + (v.value0 + "'.");
        };
        if (v instanceof UnexpectedValue) {
            return "  Unexpected value " + (Data_Argonaut_Core.stringify(v.value0) + ".");
        };
        if (v instanceof AtIndex) {
            return "  At array index " + (show1(v.value0) + (":\x0a" + go(v.value1)));
        };
        if (v instanceof AtKey) {
            return "  At object key " + (v.value0 + (":\x0a" + go(v.value1)));
        };
        if (v instanceof Named) {
            return "  Under '" + (v.value0 + ("':\x0a" + go(v.value1)));
        };
        if (v instanceof MissingValue) {
            return "  No value was found.";
        };
        throw new Error("Failed pattern match at Data.Codec.Argonaut (line 90, column 8 - line 96, column 43): " + [ v.constructor.name ]);
    };
    return "An error occurred while decoding a JSON value:\x0a" + go(err);
};

// | A codec for introducing names into error messages - useful when definiting a codec for a type
// | synonym for a record, for instance.
var named = function (name) {
    return function (codec) {
        return Data_Codec["codec$prime"]((function () {
            var $207 = lmap(Named.create(name));
            var $208 = Data_Codec.decode(codec);
            return function ($209) {
                return $207($208($209));
            };
        })())(Data_Codec.encode(codec));
    };
};
var jsonPrimCodec = function (ty) {
    return function (f) {
        return Data_Codec["codec$prime"]((function () {
            var $210 = Data_Maybe.maybe(new Data_Either.Left(new TypeMismatch(ty)))(pure);
            return function ($211) {
                return $210(f($211));
            };
        })());
    };
};

// | A codec for `null` values in `Json`.
var $$null = /* #__PURE__ */ jsonPrimCodec("Null")(Data_Argonaut_Core.toNull)(/* #__PURE__ */ Data_Function["const"](Data_Argonaut_Core.jsonNull));

// | A codec for `Number` values in `Json`.
var number = /* #__PURE__ */ jsonPrimCodec("Number")(Data_Argonaut_Core.toNumber)(Data_Argonaut_Core.fromNumber);

// | A codec for `String` values in `Json`.
var string = /* #__PURE__ */ jsonPrimCodec("String")(Data_Argonaut_Core.toString)(Data_Argonaut_Core.fromString);

// | A codec for `Void` values.
var $$void = /* #__PURE__ */ (function () {
    return jsonPrimCodec("Void")(Data_Function["const"](Data_Maybe.Nothing.value))(Data_Void.absurd);
})();

// | The "identity codec" for `Json` values.
var json = /* #__PURE__ */ Data_Codec["codec$prime"](pure)(/* #__PURE__ */ Control_Category.identity(Control_Category.categoryFn));

// | A codec for `JObject` values in `Json`.
var jobject = /* #__PURE__ */ jsonPrimCodec("Object")(Data_Argonaut_Core.toObject)(Data_Argonaut_Core.fromObject);

// | A codec for objects that are encoded with specific properties.
// |
// | See also `Data.Codec.Argonaut.Record.object` for a more commonly useful
// | version of this function.
var object = function (name) {
    return function (codec) {
        return Data_Codec["codec$prime"](function (j) {
            return lmap(Named.create(name))(bindFlipped(Data_Codec.decode(codec))(Data_Codec.decode(jobject)(j)));
        })(function (a) {
            return Data_Codec.encode(jobject)(fromFoldable(Data_Codec.encode(codec)(a)));
        });
    };
};

// | A codec for `Array Json` values in `Json`. This does not decode the values
// | of the array, for that use `array` for a general array decoder, or
// | `indexedArray` with `index` to decode fixed length array encodings.
var jarray = /* #__PURE__ */ jsonPrimCodec("Array")(Data_Argonaut_Core.toArray)(Data_Argonaut_Core.fromArray);

// | A codec for `Int` values in `Json`.
var $$int = /* #__PURE__ */ jsonPrimCodec("Int")(/* #__PURE__ */ composeKleisliFlipped(Data_Int.fromNumber)(Data_Argonaut_Core.toNumber))(function ($212) {
    return Data_Argonaut_Core.fromNumber(Data_Int.toNumber($212));
});

// | A codec for types that are encoded as an array with a specific layout.
// |
// | For example, if we'd like to encode a `Person` as a 2-element array, like
// | `["Rashida", 37]`, we could write the following codec:
// |
// | ```purescript
// | import Data.Codec ((~))
// | import Data.Codec.Argonaut as CA
// |
// | type Person = { name ∷ String, age ∷ Int }
// |
// | codecPerson ∷ CA.JsonCodec Person
// | codecPerson = CA.indexedArray "Test Object" $
// |   { name: _, age: _ }
// |     <$> _.name ~ CA.index 0 CA.string
// |     <*> _.age ~ CA.index 1 CA.int
// | ```
var indexedArray = function (name) {
    return function (codec) {
        return Data_Codec["codec$prime"](function (j) {
            return lmap(Named.create(name))(bindFlipped(Data_Codec.decode(codec))(Data_Codec.decode(jarray)(j)));
        })(function (a) {
            return Data_Codec.encode(jarray)(fromFoldable1(Data_Codec.encode(codec)(a)));
        });
    };
};

// | A codec for an item in an `indexedArray`.
var index = function (ix) {
    return function (codec) {
        return Data_Codec.codec(function (xs) {
            return lmap(AtIndex.create(ix))(Data_Maybe.maybe(new Data_Either.Left(MissingValue.value))(Data_Codec.decode(codec))(Data_Array.index(xs)(ix)));
        })((function () {
            var $213 = Data_Codec.encode(codec);
            return function ($214) {
                return pure1($213($214));
            };
        })());
    };
};
var genericJsonDecodeError = {
    to: function (x) {
        if (x instanceof Data_Generic_Rep.Inl) {
            return new TypeMismatch(x.value0);
        };
        if (x instanceof Data_Generic_Rep.Inr && x.value0 instanceof Data_Generic_Rep.Inl) {
            return new UnexpectedValue(x.value0.value0);
        };
        if (x instanceof Data_Generic_Rep.Inr && (x.value0 instanceof Data_Generic_Rep.Inr && x.value0.value0 instanceof Data_Generic_Rep.Inl)) {
            return new AtIndex(x.value0.value0.value0.value0, x.value0.value0.value0.value1);
        };
        if (x instanceof Data_Generic_Rep.Inr && (x.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0 instanceof Data_Generic_Rep.Inr && x.value0.value0.value0 instanceof Data_Generic_Rep.Inl))) {
            return new AtKey(x.value0.value0.value0.value0.value0, x.value0.value0.value0.value0.value1);
        };
        if (x instanceof Data_Generic_Rep.Inr && (x.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0 instanceof Data_Generic_Rep.Inr && x.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inl)))) {
            return new Named(x.value0.value0.value0.value0.value0.value0, x.value0.value0.value0.value0.value0.value1);
        };
        if (x instanceof Data_Generic_Rep.Inr && (x.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0 instanceof Data_Generic_Rep.Inr && x.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr)))) {
            return MissingValue.value;
        };
        throw new Error("Failed pattern match at Data.Codec.Argonaut (line 74, column 1 - line 74, column 67): " + [ x.constructor.name ]);
    },
    from: function (x) {
        if (x instanceof TypeMismatch) {
            return new Data_Generic_Rep.Inl(x.value0);
        };
        if (x instanceof UnexpectedValue) {
            return new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inl(x.value0));
        };
        if (x instanceof AtIndex) {
            return new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inl(new Data_Generic_Rep.Product(x.value0, x.value1))));
        };
        if (x instanceof AtKey) {
            return new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inl(new Data_Generic_Rep.Product(x.value0, x.value1)))));
        };
        if (x instanceof Named) {
            return new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inl(new Data_Generic_Rep.Product(x.value0, x.value1))))));
        };
        if (x instanceof MissingValue) {
            return new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(Data_Generic_Rep.NoArguments.value)))));
        };
        throw new Error("Failed pattern match at Data.Codec.Argonaut (line 74, column 1 - line 74, column 67): " + [ x.constructor.name ]);
    }
};

// | Helper function for defining recursive codecs in situations where the codec
// | definition causes a _"The value of <codec> is undefined here"_ error.
// |
// | ```purescript
// | import Data.Codec.Argonaut as CA
// | import Data.Codec.Argonaut.Common as CAC
// | import Data.Codec.Argonaut.Record as CAR
// | import Data.Maybe (Maybe)
// | import Data.Newtype (class Newtype)
// | import Data.Profunctor (wrapIso)
// |
// | newtype IntList = IntList { cell ∷ Int, rest ∷ Maybe IntList }
// |
// | derive instance newtypeLoopyList ∷ Newtype IntList _
// |
// | codecIntList ∷ CA.JsonCodec IntList
// | codecIntList =
// |   CA.fix \codec →
// |     wrapIso IntList $
// |       CAR.object "IntList" { cell: CA.int, rest: CAC.maybe codec }
// | ```
var fix = function (f) {
    return Data_Codec["codec$prime"](function (x) {
        return Data_Codec.decode(f(fix(f)))(x);
    })(function (x) {
        return Data_Codec.encode(f(fix(f)))(x);
    });
};
var eqJsonDecodeError = {
    eq: function (x) {
        return function (y) {
            if (x instanceof TypeMismatch && y instanceof TypeMismatch) {
                return x.value0 === y.value0;
            };
            if (x instanceof UnexpectedValue && y instanceof UnexpectedValue) {
                return eq1(x.value0)(y.value0);
            };
            if (x instanceof AtIndex && y instanceof AtIndex) {
                return x.value0 === y.value0 && Data_Eq.eq(eqJsonDecodeError)(x.value1)(y.value1);
            };
            if (x instanceof AtKey && y instanceof AtKey) {
                return x.value0 === y.value0 && Data_Eq.eq(eqJsonDecodeError)(x.value1)(y.value1);
            };
            if (x instanceof Named && y instanceof Named) {
                return x.value0 === y.value0 && Data_Eq.eq(eqJsonDecodeError)(x.value1)(y.value1);
            };
            if (x instanceof MissingValue && y instanceof MissingValue) {
                return true;
            };
            return false;
        };
    }
};
var ordJsonDecodeError = {
    compare: function (x) {
        return function (y) {
            if (x instanceof TypeMismatch && y instanceof TypeMismatch) {
                return compare(x.value0)(y.value0);
            };
            if (x instanceof TypeMismatch) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof TypeMismatch) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof UnexpectedValue && y instanceof UnexpectedValue) {
                return compare1(x.value0)(y.value0);
            };
            if (x instanceof UnexpectedValue) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof UnexpectedValue) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof AtIndex && y instanceof AtIndex) {
                var v = compare2(x.value0)(y.value0);
                if (v instanceof Data_Ordering.LT) {
                    return Data_Ordering.LT.value;
                };
                if (v instanceof Data_Ordering.GT) {
                    return Data_Ordering.GT.value;
                };
                return Data_Ord.compare(ordJsonDecodeError)(x.value1)(y.value1);
            };
            if (x instanceof AtIndex) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof AtIndex) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof AtKey && y instanceof AtKey) {
                var v = compare(x.value0)(y.value0);
                if (v instanceof Data_Ordering.LT) {
                    return Data_Ordering.LT.value;
                };
                if (v instanceof Data_Ordering.GT) {
                    return Data_Ordering.GT.value;
                };
                return Data_Ord.compare(ordJsonDecodeError)(x.value1)(y.value1);
            };
            if (x instanceof AtKey) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof AtKey) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof Named && y instanceof Named) {
                var v = compare(x.value0)(y.value0);
                if (v instanceof Data_Ordering.LT) {
                    return Data_Ordering.LT.value;
                };
                if (v instanceof Data_Ordering.GT) {
                    return Data_Ordering.GT.value;
                };
                return Data_Ord.compare(ordJsonDecodeError)(x.value1)(y.value1);
            };
            if (x instanceof Named) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof Named) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof MissingValue && y instanceof MissingValue) {
                return Data_Ordering.EQ.value;
            };
            throw new Error("Failed pattern match at Data.Codec.Argonaut (line 0, column 0 - line 0, column 0): " + [ x.constructor.name, y.constructor.name ]);
        };
    },
    Eq0: function () {
        return eqJsonDecodeError;
    }
};

// | A codec for types that can be safely coerced.
// |
// | Accepts the name of the target type as an argument to improve error messaging when the inner
// | codec fails.
var coercible = function () {
    return function (name) {
        return function (codec) {
            return Data_Codec["codec$prime"]((function () {
                var $215 = bimap(Named.create(name))(coerce);
                var $216 = Data_Codec.decode(codec);
                return function ($217) {
                    return $215($216($217));
                };
            })())(coerce(Data_Codec.encode(codec)));
        };
    };
};

// | A codec for `Codepoint` values in `Json`.
var codePoint = /* #__PURE__ */ jsonPrimCodec("CodePoint")(/* #__PURE__ */ composeKleisliFlipped(/* #__PURE__ */ Data_String_CodePoints.codePointAt(0))(Data_Argonaut_Core.toString))(function ($218) {
    return Data_Argonaut_Core.fromString(Data_String_CodePoints.singleton($218));
});

// | A codec for `Char` values in `Json`.
var $$char = /* #__PURE__ */ jsonPrimCodec("Char")(/* #__PURE__ */ composeKleisliFlipped(Data_String_CodeUnits.toChar)(Data_Argonaut_Core.toString))(function ($219) {
    return Data_Argonaut_Core.fromString(Data_String_CodeUnits.singleton($219));
});

// | A codec for `Boolean` values in `Json`.
var $$boolean = /* #__PURE__ */ jsonPrimCodec("Boolean")(Data_Argonaut_Core.toBoolean)(Data_Argonaut_Core.fromBoolean);

// | A codec for arbitrary length `Array`s where every item in the array
// | shares the same type.
// |
// | ``` purescript
// | import Data.Codec.Argonaut as CA
// |
// | codecIntArray ∷ CA.JsonCodec (Array Int)
// | codecIntArray = CA.array CA.int
// | ```
var array = function (codec) {
    return Data_Codec["codec$prime"](function (j) {
        return bindFlipped(traverseWithIndex(function (ix) {
            return function (j$prime) {
                return lmap(AtIndex.create(ix))(Data_Codec.decode(codec)(j$prime));
            };
        }))(Data_Codec.decode(jarray)(j));
    })(function (a) {
        return Data_Argonaut_Core.fromArray(map1(Data_Codec.encode(codec))(a));
    });
};
export {
    TypeMismatch,
    UnexpectedValue,
    AtIndex,
    AtKey,
    Named,
    MissingValue,
    printJsonDecodeError,
    json,
    $$null as null,
    $$boolean as boolean,
    number,
    $$int as int,
    string,
    codePoint,
    $$char as char,
    jarray,
    jobject,
    $$void as void,
    array,
    indexedArray,
    index,
    object,
    prop,
    record,
    recordProp,
    recordPropOptional,
    fix,
    named,
    coercible,
    prismaticCodec,
    eqJsonDecodeError,
    ordJsonDecodeError,
    genericJsonDecodeError,
    showJsonDecodeError
};
export {
    Codec,
    codec,
    codec$prime,
    decode,
    encode,
    hoist,
    identity
} from "../Data.Codec/index.js";
