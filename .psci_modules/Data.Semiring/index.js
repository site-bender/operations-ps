import * as $foreign from "./foreign.js";
import * as Data_Symbol from "../Data.Symbol/index.js";
import * as Data_Unit from "../Data.Unit/index.js";
import * as Record_Unsafe from "../Record.Unsafe/index.js";
import * as Type_Proxy from "../Type.Proxy/index.js";
var zeroRecord = function (dict) {
    return dict.zeroRecord;
};
var zero = function (dict) {
    return dict.zero;
};
var semiringUnit = {
    add: function (v) {
        return function (v1) {
            return Data_Unit.unit;
        };
    },
    zero: Data_Unit.unit,
    mul: function (v) {
        return function (v1) {
            return Data_Unit.unit;
        };
    },
    one: Data_Unit.unit
};
var semiringRecordNil = {
    addRecord: function (v) {
        return function (v1) {
            return function (v2) {
                return {};
            };
        };
    },
    mulRecord: function (v) {
        return function (v1) {
            return function (v2) {
                return {};
            };
        };
    },
    oneRecord: function (v) {
        return function (v1) {
            return {};
        };
    },
    zeroRecord: function (v) {
        return function (v1) {
            return {};
        };
    }
};
var semiringProxy = /* #__PURE__ */ (function () {
    return {
        add: function (v) {
            return function (v1) {
                return Type_Proxy["Proxy"].value;
            };
        },
        mul: function (v) {
            return function (v1) {
                return Type_Proxy["Proxy"].value;
            };
        },
        one: Type_Proxy["Proxy"].value,
        zero: Type_Proxy["Proxy"].value
    };
})();
var semiringNumber = {
    add: $foreign.numAdd,
    zero: 0.0,
    mul: $foreign.numMul,
    one: 1.0
};
var semiringInt = {
    add: $foreign.intAdd,
    zero: 0,
    mul: $foreign.intMul,
    one: 1
};
var oneRecord = function (dict) {
    return dict.oneRecord;
};
var one = function (dict) {
    return dict.one;
};
var mulRecord = function (dict) {
    return dict.mulRecord;
};
var mul = function (dict) {
    return dict.mul;
};
var addRecord = function (dict) {
    return dict.addRecord;
};
var semiringRecord = function () {
    return function (dictSemiringRecord) {
        return {
            add: addRecord(dictSemiringRecord)(Type_Proxy["Proxy"].value),
            mul: mulRecord(dictSemiringRecord)(Type_Proxy["Proxy"].value),
            one: oneRecord(dictSemiringRecord)(Type_Proxy["Proxy"].value)(Type_Proxy["Proxy"].value),
            zero: zeroRecord(dictSemiringRecord)(Type_Proxy["Proxy"].value)(Type_Proxy["Proxy"].value)
        };
    };
};
var add = function (dict) {
    return dict.add;
};
var semiringFn = function (dictSemiring) {
    var add1 = add(dictSemiring);
    var zero1 = zero(dictSemiring);
    var mul1 = mul(dictSemiring);
    var one1 = one(dictSemiring);
    return {
        add: function (f) {
            return function (g) {
                return function (x) {
                    return add1(f(x))(g(x));
                };
            };
        },
        zero: function (v) {
            return zero1;
        },
        mul: function (f) {
            return function (g) {
                return function (x) {
                    return mul1(f(x))(g(x));
                };
            };
        },
        one: function (v) {
            return one1;
        }
    };
};
var semiringRecordCons = function (dictIsSymbol) {
    var reflectSymbol = Data_Symbol.reflectSymbol(dictIsSymbol);
    return function () {
        return function (dictSemiringRecord) {
            var addRecord1 = addRecord(dictSemiringRecord);
            var mulRecord1 = mulRecord(dictSemiringRecord);
            var oneRecord1 = oneRecord(dictSemiringRecord);
            var zeroRecord1 = zeroRecord(dictSemiringRecord);
            return function (dictSemiring) {
                var add1 = add(dictSemiring);
                var mul1 = mul(dictSemiring);
                var one1 = one(dictSemiring);
                var zero1 = zero(dictSemiring);
                return {
                    addRecord: function (v) {
                        return function (ra) {
                            return function (rb) {
                                var tail = addRecord1(Type_Proxy["Proxy"].value)(ra)(rb);
                                var key = reflectSymbol(Type_Proxy["Proxy"].value);
                                var insert = Record_Unsafe.unsafeSet(key);
                                var get = Record_Unsafe.unsafeGet(key);
                                return insert(add1(get(ra))(get(rb)))(tail);
                            };
                        };
                    },
                    mulRecord: function (v) {
                        return function (ra) {
                            return function (rb) {
                                var tail = mulRecord1(Type_Proxy["Proxy"].value)(ra)(rb);
                                var key = reflectSymbol(Type_Proxy["Proxy"].value);
                                var insert = Record_Unsafe.unsafeSet(key);
                                var get = Record_Unsafe.unsafeGet(key);
                                return insert(mul1(get(ra))(get(rb)))(tail);
                            };
                        };
                    },
                    oneRecord: function (v) {
                        return function (v1) {
                            var tail = oneRecord1(Type_Proxy["Proxy"].value)(Type_Proxy["Proxy"].value);
                            var key = reflectSymbol(Type_Proxy["Proxy"].value);
                            var insert = Record_Unsafe.unsafeSet(key);
                            return insert(one1)(tail);
                        };
                    },
                    zeroRecord: function (v) {
                        return function (v1) {
                            var tail = zeroRecord1(Type_Proxy["Proxy"].value)(Type_Proxy["Proxy"].value);
                            var key = reflectSymbol(Type_Proxy["Proxy"].value);
                            var insert = Record_Unsafe.unsafeSet(key);
                            return insert(zero1)(tail);
                        };
                    }
                };
            };
        };
    };
};
export {
    add,
    zero,
    mul,
    one,
    addRecord,
    mulRecord,
    oneRecord,
    zeroRecord,
    semiringInt,
    semiringNumber,
    semiringFn,
    semiringUnit,
    semiringProxy,
    semiringRecord,
    semiringRecordNil,
    semiringRecordCons
};
