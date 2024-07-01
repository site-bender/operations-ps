import * as Data_Generic_Rep from "../Data.Generic.Rep/index.js";
import * as Data_HeytingAlgebra from "../Data.HeytingAlgebra/index.js";
var genericTT$prime = function (dict) {
    return dict["genericTT'"];
};

// | A `Generic` implementation of the `tt` member from the `HeytingAlgebra` type class.
var genericTT = function (dictGeneric) {
    var to = Data_Generic_Rep.to(dictGeneric);
    return function (dictGenericHeytingAlgebra) {
        return to(genericTT$prime(dictGenericHeytingAlgebra));
    };
};
var genericNot$prime = function (dict) {
    return dict["genericNot'"];
};

// | A `Generic` implementation of the `not` member from the `HeytingAlgebra` type class.
var genericNot = function (dictGeneric) {
    var to = Data_Generic_Rep.to(dictGeneric);
    var from = Data_Generic_Rep.from(dictGeneric);
    return function (dictGenericHeytingAlgebra) {
        var genericNot$prime1 = genericNot$prime(dictGenericHeytingAlgebra);
        return function (x) {
            return to(genericNot$prime1(from(x)));
        };
    };
};
var genericImplies$prime = function (dict) {
    return dict["genericImplies'"];
};

// | A `Generic` implementation of the `implies` member from the `HeytingAlgebra` type class.
var genericImplies = function (dictGeneric) {
    var to = Data_Generic_Rep.to(dictGeneric);
    var from = Data_Generic_Rep.from(dictGeneric);
    return function (dictGenericHeytingAlgebra) {
        var genericImplies$prime1 = genericImplies$prime(dictGenericHeytingAlgebra);
        return function (x) {
            return function (y) {
                return to(genericImplies$prime1(from(x))(from(y)));
            };
        };
    };
};
var genericHeytingAlgebraNoArguments = /* #__PURE__ */ (function () {
    return {
        "genericFF'": Data_Generic_Rep.NoArguments.value,
        "genericTT'": Data_Generic_Rep.NoArguments.value,
        "genericImplies'": function (v) {
            return function (v1) {
                return Data_Generic_Rep.NoArguments.value;
            };
        },
        "genericConj'": function (v) {
            return function (v1) {
                return Data_Generic_Rep.NoArguments.value;
            };
        },
        "genericDisj'": function (v) {
            return function (v1) {
                return Data_Generic_Rep.NoArguments.value;
            };
        },
        "genericNot'": function (v) {
            return Data_Generic_Rep.NoArguments.value;
        }
    };
})();
var genericHeytingAlgebraArgument = function (dictHeytingAlgebra) {
    var implies = Data_HeytingAlgebra.implies(dictHeytingAlgebra);
    var conj = Data_HeytingAlgebra.conj(dictHeytingAlgebra);
    var disj = Data_HeytingAlgebra.disj(dictHeytingAlgebra);
    var not = Data_HeytingAlgebra.not(dictHeytingAlgebra);
    return {
        "genericFF'": Data_HeytingAlgebra.ff(dictHeytingAlgebra),
        "genericTT'": Data_HeytingAlgebra.tt(dictHeytingAlgebra),
        "genericImplies'": function (v) {
            return function (v1) {
                return implies(v)(v1);
            };
        },
        "genericConj'": function (v) {
            return function (v1) {
                return conj(v)(v1);
            };
        },
        "genericDisj'": function (v) {
            return function (v1) {
                return disj(v)(v1);
            };
        },
        "genericNot'": function (v) {
            return not(v);
        }
    };
};
var genericFF$prime = function (dict) {
    return dict["genericFF'"];
};

// | A `Generic` implementation of the `ff` member from the `HeytingAlgebra` type class.
var genericFF = function (dictGeneric) {
    var to = Data_Generic_Rep.to(dictGeneric);
    return function (dictGenericHeytingAlgebra) {
        return to(genericFF$prime(dictGenericHeytingAlgebra));
    };
};
var genericDisj$prime = function (dict) {
    return dict["genericDisj'"];
};

// | A `Generic` implementation of the `disj` member from the `HeytingAlgebra` type class.
var genericDisj = function (dictGeneric) {
    var to = Data_Generic_Rep.to(dictGeneric);
    var from = Data_Generic_Rep.from(dictGeneric);
    return function (dictGenericHeytingAlgebra) {
        var genericDisj$prime1 = genericDisj$prime(dictGenericHeytingAlgebra);
        return function (x) {
            return function (y) {
                return to(genericDisj$prime1(from(x))(from(y)));
            };
        };
    };
};
var genericConj$prime = function (dict) {
    return dict["genericConj'"];
};
var genericHeytingAlgebraConstructor = function (dictGenericHeytingAlgebra) {
    var genericImplies$prime1 = genericImplies$prime(dictGenericHeytingAlgebra);
    var genericConj$prime1 = genericConj$prime(dictGenericHeytingAlgebra);
    var genericDisj$prime1 = genericDisj$prime(dictGenericHeytingAlgebra);
    var genericNot$prime1 = genericNot$prime(dictGenericHeytingAlgebra);
    return {
        "genericFF'": genericFF$prime(dictGenericHeytingAlgebra),
        "genericTT'": genericTT$prime(dictGenericHeytingAlgebra),
        "genericImplies'": function (v) {
            return function (v1) {
                return genericImplies$prime1(v)(v1);
            };
        },
        "genericConj'": function (v) {
            return function (v1) {
                return genericConj$prime1(v)(v1);
            };
        },
        "genericDisj'": function (v) {
            return function (v1) {
                return genericDisj$prime1(v)(v1);
            };
        },
        "genericNot'": function (v) {
            return genericNot$prime1(v);
        }
    };
};
var genericHeytingAlgebraProduct = function (dictGenericHeytingAlgebra) {
    var genericFF$prime1 = genericFF$prime(dictGenericHeytingAlgebra);
    var genericTT$prime1 = genericTT$prime(dictGenericHeytingAlgebra);
    var genericImplies$prime1 = genericImplies$prime(dictGenericHeytingAlgebra);
    var genericConj$prime1 = genericConj$prime(dictGenericHeytingAlgebra);
    var genericDisj$prime1 = genericDisj$prime(dictGenericHeytingAlgebra);
    var genericNot$prime1 = genericNot$prime(dictGenericHeytingAlgebra);
    return function (dictGenericHeytingAlgebra1) {
        var genericImplies$prime2 = genericImplies$prime(dictGenericHeytingAlgebra1);
        var genericConj$prime2 = genericConj$prime(dictGenericHeytingAlgebra1);
        var genericDisj$prime2 = genericDisj$prime(dictGenericHeytingAlgebra1);
        var genericNot$prime2 = genericNot$prime(dictGenericHeytingAlgebra1);
        return {
            "genericFF'": new Data_Generic_Rep.Product(genericFF$prime1, genericFF$prime(dictGenericHeytingAlgebra1)),
            "genericTT'": new Data_Generic_Rep.Product(genericTT$prime1, genericTT$prime(dictGenericHeytingAlgebra1)),
            "genericImplies'": function (v) {
                return function (v1) {
                    return new Data_Generic_Rep.Product(genericImplies$prime1(v.value0)(v1.value0), genericImplies$prime2(v.value1)(v1.value1));
                };
            },
            "genericConj'": function (v) {
                return function (v1) {
                    return new Data_Generic_Rep.Product(genericConj$prime1(v.value0)(v1.value0), genericConj$prime2(v.value1)(v1.value1));
                };
            },
            "genericDisj'": function (v) {
                return function (v1) {
                    return new Data_Generic_Rep.Product(genericDisj$prime1(v.value0)(v1.value0), genericDisj$prime2(v.value1)(v1.value1));
                };
            },
            "genericNot'": function (v) {
                return new Data_Generic_Rep.Product(genericNot$prime1(v.value0), genericNot$prime2(v.value1));
            }
        };
    };
};

// | A `Generic` implementation of the `conj` member from the `HeytingAlgebra` type class.
var genericConj = function (dictGeneric) {
    var to = Data_Generic_Rep.to(dictGeneric);
    var from = Data_Generic_Rep.from(dictGeneric);
    return function (dictGenericHeytingAlgebra) {
        var genericConj$prime1 = genericConj$prime(dictGenericHeytingAlgebra);
        return function (x) {
            return function (y) {
                return to(genericConj$prime1(from(x))(from(y)));
            };
        };
    };
};
export {
    genericConj$prime,
    genericDisj$prime,
    genericFF$prime,
    genericImplies$prime,
    genericNot$prime,
    genericTT$prime,
    genericFF,
    genericTT,
    genericImplies,
    genericConj,
    genericDisj,
    genericNot,
    genericHeytingAlgebraNoArguments,
    genericHeytingAlgebraArgument,
    genericHeytingAlgebraProduct,
    genericHeytingAlgebraConstructor
};