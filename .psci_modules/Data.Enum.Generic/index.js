import * as Control_Apply from "../Control.Apply/index.js";
import * as Data_Boolean from "../Data.Boolean/index.js";
import * as Data_Bounded_Generic from "../Data.Bounded.Generic/index.js";
import * as Data_Enum from "../Data.Enum/index.js";
import * as Data_EuclideanRing from "../Data.EuclideanRing/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Generic_Rep from "../Data.Generic.Rep/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Newtype from "../Data.Newtype/index.js";
var map = /* #__PURE__ */ Data_Functor.map(Data_Maybe.functorMaybe);
var unwrap = /* #__PURE__ */ Data_Newtype.unwrap();
var apply = /* #__PURE__ */ Control_Apply.apply(Data_Maybe.applyMaybe);
var div = /* #__PURE__ */ Data_EuclideanRing.div(Data_EuclideanRing.euclideanRingInt);
var mod = /* #__PURE__ */ Data_EuclideanRing.mod(Data_EuclideanRing.euclideanRingInt);
var genericToEnum$prime = function (dict) {
    return dict["genericToEnum'"];
};

// | A `Generic` implementation of the `toEnum` member from the `BoundedEnum`
// | type class.
var genericToEnum = function (dictGeneric) {
    var to = Data_Generic_Rep.to(dictGeneric);
    return function (dictGenericBoundedEnum) {
        var $153 = map(to);
        var $154 = genericToEnum$prime(dictGenericBoundedEnum);
        return function ($155) {
            return $153($154($155));
        };
    };
};
var genericSucc$prime = function (dict) {
    return dict["genericSucc'"];
};

// | A `Generic` implementation of the `succ` member from the `Enum` type class.
var genericSucc = function (dictGeneric) {
    var to = Data_Generic_Rep.to(dictGeneric);
    var from = Data_Generic_Rep.from(dictGeneric);
    return function (dictGenericEnum) {
        var $156 = map(to);
        var $157 = genericSucc$prime(dictGenericEnum);
        return function ($158) {
            return $156($157(from($158)));
        };
    };
};
var genericPred$prime = function (dict) {
    return dict["genericPred'"];
};

// | A `Generic` implementation of the `pred` member from the `Enum` type class.
var genericPred = function (dictGeneric) {
    var to = Data_Generic_Rep.to(dictGeneric);
    var from = Data_Generic_Rep.from(dictGeneric);
    return function (dictGenericEnum) {
        var $159 = map(to);
        var $160 = genericPred$prime(dictGenericEnum);
        return function ($161) {
            return $159($160(from($161)));
        };
    };
};
var genericFromEnum$prime = function (dict) {
    return dict["genericFromEnum'"];
};

// | A `Generic` implementation of the `fromEnum` member from the `BoundedEnum`
// | type class.
var genericFromEnum = function (dictGeneric) {
    var from = Data_Generic_Rep.from(dictGeneric);
    return function (dictGenericBoundedEnum) {
        var $162 = genericFromEnum$prime(dictGenericBoundedEnum);
        return function ($163) {
            return $162(from($163));
        };
    };
};
var genericEnumSum = function (dictGenericEnum) {
    var genericPred$prime1 = genericPred$prime(dictGenericEnum);
    var genericSucc$prime1 = genericSucc$prime(dictGenericEnum);
    return function (dictGenericTop) {
        var genericTop$prime = Data_Bounded_Generic["genericTop$prime"](dictGenericTop);
        return function (dictGenericEnum1) {
            var genericPred$prime2 = genericPred$prime(dictGenericEnum1);
            var genericSucc$prime2 = genericSucc$prime(dictGenericEnum1);
            return function (dictGenericBottom) {
                var genericBottom$prime = Data_Bounded_Generic["genericBottom$prime"](dictGenericBottom);
                return {
                    "genericPred'": function (v) {
                        if (v instanceof Data_Generic_Rep.Inl) {
                            return map(Data_Generic_Rep.Inl.create)(genericPred$prime1(v.value0));
                        };
                        if (v instanceof Data_Generic_Rep.Inr) {
                            var v1 = genericPred$prime2(v.value0);
                            if (v1 instanceof Data_Maybe.Nothing) {
                                return new Data_Maybe.Just(new Data_Generic_Rep.Inl(genericTop$prime));
                            };
                            if (v1 instanceof Data_Maybe.Just) {
                                return new Data_Maybe.Just(new Data_Generic_Rep.Inr(v1.value0));
                            };
                            throw new Error("Failed pattern match at Data.Enum.Generic (line 30, column 14 - line 32, column 31): " + [ v1.constructor.name ]);
                        };
                        throw new Error("Failed pattern match at Data.Enum.Generic (line 28, column 18 - line 32, column 31): " + [ v.constructor.name ]);
                    },
                    "genericSucc'": function (v) {
                        if (v instanceof Data_Generic_Rep.Inl) {
                            var v1 = genericSucc$prime1(v.value0);
                            if (v1 instanceof Data_Maybe.Nothing) {
                                return new Data_Maybe.Just(new Data_Generic_Rep.Inr(genericBottom$prime));
                            };
                            if (v1 instanceof Data_Maybe.Just) {
                                return new Data_Maybe.Just(new Data_Generic_Rep.Inl(v1.value0));
                            };
                            throw new Error("Failed pattern match at Data.Enum.Generic (line 34, column 14 - line 36, column 31): " + [ v1.constructor.name ]);
                        };
                        if (v instanceof Data_Generic_Rep.Inr) {
                            return map(Data_Generic_Rep.Inr.create)(genericSucc$prime2(v.value0));
                        };
                        throw new Error("Failed pattern match at Data.Enum.Generic (line 33, column 18 - line 37, column 36): " + [ v.constructor.name ]);
                    }
                };
            };
        };
    };
};
var genericEnumProduct = function (dictGenericEnum) {
    var genericPred$prime1 = genericPred$prime(dictGenericEnum);
    var genericSucc$prime1 = genericSucc$prime(dictGenericEnum);
    return function (dictGenericTop) {
        return function (dictGenericBottom) {
            return function (dictGenericEnum1) {
                var genericPred$prime2 = genericPred$prime(dictGenericEnum1);
                var genericSucc$prime2 = genericSucc$prime(dictGenericEnum1);
                return function (dictGenericTop1) {
                    var genericTop$prime = Data_Bounded_Generic["genericTop$prime"](dictGenericTop1);
                    return function (dictGenericBottom1) {
                        var genericBottom$prime = Data_Bounded_Generic["genericBottom$prime"](dictGenericBottom1);
                        return {
                            "genericPred'": function (v) {
                                var v1 = genericPred$prime2(v.value1);
                                if (v1 instanceof Data_Maybe.Just) {
                                    return new Data_Maybe.Just(new Data_Generic_Rep.Product(v.value0, v1.value0));
                                };
                                if (v1 instanceof Data_Maybe.Nothing) {
                                    return map(Data_Function.flip(Data_Generic_Rep.Product.create)(genericTop$prime))(genericPred$prime1(v.value0));
                                };
                                throw new Error("Failed pattern match at Data.Enum.Generic (line 40, column 32 - line 42, column 59): " + [ v1.constructor.name ]);
                            },
                            "genericSucc'": function (v) {
                                var v1 = genericSucc$prime2(v.value1);
                                if (v1 instanceof Data_Maybe.Just) {
                                    return new Data_Maybe.Just(new Data_Generic_Rep.Product(v.value0, v1.value0));
                                };
                                if (v1 instanceof Data_Maybe.Nothing) {
                                    return map(Data_Function.flip(Data_Generic_Rep.Product.create)(genericBottom$prime))(genericSucc$prime1(v.value0));
                                };
                                throw new Error("Failed pattern match at Data.Enum.Generic (line 43, column 32 - line 45, column 62): " + [ v1.constructor.name ]);
                            }
                        };
                    };
                };
            };
        };
    };
};
var genericEnumNoArguments = {
    "genericPred'": function (v) {
        return Data_Maybe.Nothing.value;
    },
    "genericSucc'": function (v) {
        return Data_Maybe.Nothing.value;
    }
};
var genericEnumConstructor = function (dictGenericEnum) {
    var genericPred$prime1 = genericPred$prime(dictGenericEnum);
    var genericSucc$prime1 = genericSucc$prime(dictGenericEnum);
    return {
        "genericPred'": function (v) {
            return map(Data_Generic_Rep.Constructor)(genericPred$prime1(v));
        },
        "genericSucc'": function (v) {
            return map(Data_Generic_Rep.Constructor)(genericSucc$prime1(v));
        }
    };
};
var genericEnumArgument = function (dictEnum) {
    var pred = Data_Enum.pred(dictEnum);
    var succ = Data_Enum.succ(dictEnum);
    return {
        "genericPred'": function (v) {
            return map(Data_Generic_Rep.Argument)(pred(v));
        },
        "genericSucc'": function (v) {
            return map(Data_Generic_Rep.Argument)(succ(v));
        }
    };
};
var genericCardinality$prime = function (dict) {
    return dict["genericCardinality'"];
};

// | A `Generic` implementation of the `cardinality` member from the
// | `BoundedEnum` type class.
var genericCardinality = function (dictGeneric) {
    return function (dictGenericBoundedEnum) {
        return unwrap(genericCardinality$prime(dictGenericBoundedEnum));
    };
};
var genericBoundedEnumSum = function (dictGenericBoundedEnum) {
    var genericCardinality$prime1 = genericCardinality$prime(dictGenericBoundedEnum);
    var genericToEnum$prime1 = genericToEnum$prime(dictGenericBoundedEnum);
    var genericFromEnum$prime1 = genericFromEnum$prime(dictGenericBoundedEnum);
    return function (dictGenericBoundedEnum1) {
        var genericToEnum$prime2 = genericToEnum$prime(dictGenericBoundedEnum1);
        var genericFromEnum$prime2 = genericFromEnum$prime(dictGenericBoundedEnum1);
        return {
            "genericCardinality'": unwrap(genericCardinality$prime1) + unwrap(genericCardinality$prime(dictGenericBoundedEnum1)) | 0,
            "genericToEnum'": function (n) {
                var to = function (v) {
                    if (n >= 0 && n < v) {
                        return map(Data_Generic_Rep.Inl.create)(genericToEnum$prime1(n));
                    };
                    if (Data_Boolean.otherwise) {
                        return map(Data_Generic_Rep.Inr.create)(genericToEnum$prime2(n - v | 0));
                    };
                    throw new Error("Failed pattern match at Data.Enum.Generic (line 83, column 5 - line 83, column 43): " + [ v.constructor.name ]);
                };
                return to(genericCardinality$prime1);
            },
            "genericFromEnum'": function (v) {
                if (v instanceof Data_Generic_Rep.Inl) {
                    return genericFromEnum$prime1(v.value0);
                };
                if (v instanceof Data_Generic_Rep.Inr) {
                    return genericFromEnum$prime2(v.value0) + unwrap(genericCardinality$prime1) | 0;
                };
                throw new Error("Failed pattern match at Data.Enum.Generic (line 87, column 22 - line 89, column 80): " + [ v.constructor.name ]);
            }
        };
    };
};
var genericBoundedEnumProduct = function (dictGenericBoundedEnum) {
    var genericCardinality$prime1 = genericCardinality$prime(dictGenericBoundedEnum);
    var genericToEnum$prime1 = genericToEnum$prime(dictGenericBoundedEnum);
    var genericFromEnum$prime1 = genericFromEnum$prime(dictGenericBoundedEnum);
    return function (dictGenericBoundedEnum1) {
        var genericCardinality$prime2 = genericCardinality$prime(dictGenericBoundedEnum1);
        var genericToEnum$prime2 = genericToEnum$prime(dictGenericBoundedEnum1);
        var genericFromEnum$prime2 = genericFromEnum$prime(dictGenericBoundedEnum1);
        return {
            "genericCardinality'": unwrap(genericCardinality$prime1) * unwrap(genericCardinality$prime2) | 0,
            "genericToEnum'": function (n) {
                var to = function (v) {
                    return apply(map(Data_Generic_Rep.Product.create)(genericToEnum$prime1(div(n)(v))))(genericToEnum$prime2(mod(n)(v)));
                };
                return to(genericCardinality$prime2);
            },
            "genericFromEnum'": (function () {
                var from = function (v) {
                    return function (v1) {
                        return (genericFromEnum$prime1(v1.value0) * v | 0) + genericFromEnum$prime2(v1.value1) | 0;
                    };
                };
                return from(genericCardinality$prime2);
            })()
        };
    };
};
var genericBoundedEnumNoArguments = {
    "genericCardinality'": 1,
    "genericToEnum'": function (i) {
        var $150 = i === 0;
        if ($150) {
            return new Data_Maybe.Just(Data_Generic_Rep.NoArguments.value);
        };
        return Data_Maybe.Nothing.value;
    },
    "genericFromEnum'": function (v) {
        return 0;
    }
};
var genericBoundedEnumConstructor = function (dictGenericBoundedEnum) {
    var genericToEnum$prime1 = genericToEnum$prime(dictGenericBoundedEnum);
    var genericFromEnum$prime1 = genericFromEnum$prime(dictGenericBoundedEnum);
    return {
        "genericCardinality'": unwrap(genericCardinality$prime(dictGenericBoundedEnum)),
        "genericToEnum'": function (i) {
            return map(Data_Generic_Rep.Constructor)(genericToEnum$prime1(i));
        },
        "genericFromEnum'": function (v) {
            return genericFromEnum$prime1(v);
        }
    };
};
var genericBoundedEnumArgument = function (dictBoundedEnum) {
    var toEnum = Data_Enum.toEnum(dictBoundedEnum);
    var fromEnum = Data_Enum.fromEnum(dictBoundedEnum);
    return {
        "genericCardinality'": unwrap(Data_Enum.cardinality(dictBoundedEnum)),
        "genericToEnum'": function (i) {
            return map(Data_Generic_Rep.Argument)(toEnum(i));
        },
        "genericFromEnum'": function (v) {
            return fromEnum(v);
        }
    };
};
export {
    genericCardinality$prime,
    genericFromEnum$prime,
    genericPred$prime,
    genericSucc$prime,
    genericToEnum$prime,
    genericPred,
    genericSucc,
    genericCardinality,
    genericToEnum,
    genericFromEnum,
    genericEnumNoArguments,
    genericEnumArgument,
    genericEnumConstructor,
    genericEnumSum,
    genericEnumProduct,
    genericBoundedEnumNoArguments,
    genericBoundedEnumArgument,
    genericBoundedEnumConstructor,
    genericBoundedEnumSum,
    genericBoundedEnumProduct
};
