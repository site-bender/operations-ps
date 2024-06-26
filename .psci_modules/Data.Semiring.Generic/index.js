import * as Data_Generic_Rep from "../Data.Generic.Rep/index.js";
import * as Data_Semiring from "../Data.Semiring/index.js";
var genericZero$prime = function (dict) {
    return dict["genericZero'"];
};

// | A `Generic` implementation of the `zero` member from the `Semiring` type class.
var genericZero = function (dictGeneric) {
    var to = Data_Generic_Rep.to(dictGeneric);
    return function (dictGenericSemiring) {
        return to(genericZero$prime(dictGenericSemiring));
    };
};
var genericSemiringNoArguments = /* #__PURE__ */ (function () {
    return {
        "genericAdd'": function (v) {
            return function (v1) {
                return Data_Generic_Rep.NoArguments.value;
            };
        },
        "genericZero'": Data_Generic_Rep.NoArguments.value,
        "genericMul'": function (v) {
            return function (v1) {
                return Data_Generic_Rep.NoArguments.value;
            };
        },
        "genericOne'": Data_Generic_Rep.NoArguments.value
    };
})();
var genericSemiringArgument = function (dictSemiring) {
    var add = Data_Semiring.add(dictSemiring);
    var mul = Data_Semiring.mul(dictSemiring);
    return {
        "genericAdd'": function (v) {
            return function (v1) {
                return add(v)(v1);
            };
        },
        "genericZero'": Data_Semiring.zero(dictSemiring),
        "genericMul'": function (v) {
            return function (v1) {
                return mul(v)(v1);
            };
        },
        "genericOne'": Data_Semiring.one(dictSemiring)
    };
};
var genericOne$prime = function (dict) {
    return dict["genericOne'"];
};

// | A `Generic` implementation of the `one` member from the `Semiring` type class.
var genericOne = function (dictGeneric) {
    var to = Data_Generic_Rep.to(dictGeneric);
    return function (dictGenericSemiring) {
        return to(genericOne$prime(dictGenericSemiring));
    };
};
var genericMul$prime = function (dict) {
    return dict["genericMul'"];
};

// | A `Generic` implementation of the `mul` member from the `Semiring` type class.
var genericMul = function (dictGeneric) {
    var to = Data_Generic_Rep.to(dictGeneric);
    var from = Data_Generic_Rep.from(dictGeneric);
    return function (dictGenericSemiring) {
        var genericMul$prime1 = genericMul$prime(dictGenericSemiring);
        return function (x) {
            return function (y) {
                return to(genericMul$prime1(from(x))(from(y)));
            };
        };
    };
};
var genericAdd$prime = function (dict) {
    return dict["genericAdd'"];
};
var genericSemiringConstructor = function (dictGenericSemiring) {
    var genericAdd$prime1 = genericAdd$prime(dictGenericSemiring);
    var genericMul$prime1 = genericMul$prime(dictGenericSemiring);
    return {
        "genericAdd'": function (v) {
            return function (v1) {
                return genericAdd$prime1(v)(v1);
            };
        },
        "genericZero'": genericZero$prime(dictGenericSemiring),
        "genericMul'": function (v) {
            return function (v1) {
                return genericMul$prime1(v)(v1);
            };
        },
        "genericOne'": genericOne$prime(dictGenericSemiring)
    };
};
var genericSemiringProduct = function (dictGenericSemiring) {
    var genericAdd$prime1 = genericAdd$prime(dictGenericSemiring);
    var genericZero$prime1 = genericZero$prime(dictGenericSemiring);
    var genericMul$prime1 = genericMul$prime(dictGenericSemiring);
    var genericOne$prime1 = genericOne$prime(dictGenericSemiring);
    return function (dictGenericSemiring1) {
        var genericAdd$prime2 = genericAdd$prime(dictGenericSemiring1);
        var genericMul$prime2 = genericMul$prime(dictGenericSemiring1);
        return {
            "genericAdd'": function (v) {
                return function (v1) {
                    return new Data_Generic_Rep.Product(genericAdd$prime1(v.value0)(v1.value0), genericAdd$prime2(v.value1)(v1.value1));
                };
            },
            "genericZero'": new Data_Generic_Rep.Product(genericZero$prime1, genericZero$prime(dictGenericSemiring1)),
            "genericMul'": function (v) {
                return function (v1) {
                    return new Data_Generic_Rep.Product(genericMul$prime1(v.value0)(v1.value0), genericMul$prime2(v.value1)(v1.value1));
                };
            },
            "genericOne'": new Data_Generic_Rep.Product(genericOne$prime1, genericOne$prime(dictGenericSemiring1))
        };
    };
};

// | A `Generic` implementation of the `add` member from the `Semiring` type class.
var genericAdd = function (dictGeneric) {
    var to = Data_Generic_Rep.to(dictGeneric);
    var from = Data_Generic_Rep.from(dictGeneric);
    return function (dictGenericSemiring) {
        var genericAdd$prime1 = genericAdd$prime(dictGenericSemiring);
        return function (x) {
            return function (y) {
                return to(genericAdd$prime1(from(x))(from(y)));
            };
        };
    };
};
export {
    genericAdd$prime,
    genericMul$prime,
    genericOne$prime,
    genericZero$prime,
    genericZero,
    genericOne,
    genericAdd,
    genericMul,
    genericSemiringNoArguments,
    genericSemiringArgument,
    genericSemiringProduct,
    genericSemiringConstructor
};
