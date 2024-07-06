import * as Data_Argonaut_Decode_Class from "../Data.Argonaut.Decode.Class/index.js";
import * as Data_Argonaut_Decode_Error from "../Data.Argonaut.Decode.Error/index.js";
import * as Data_Argonaut_Decode_Generic from "../Data.Argonaut.Decode.Generic/index.js";
import * as Data_Argonaut_Decode_Parser from "../Data.Argonaut.Decode.Parser/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Foldable from "../Data.Foldable/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Generic_Rep from "../Data.Generic.Rep/index.js";
import * as Data_Int from "../Data.Int/index.js";
import * as Data_Semiring from "../Data.Semiring/index.js";
import * as Data_Show from "../Data.Show/index.js";
import * as Data_Show_Generic from "../Data.Show.Generic/index.js";
var OpIntIsSymbol = {
    reflectSymbol: function () {
        return "OpInt";
    }
};
var OpNumberIsSymbol = {
    reflectSymbol: function () {
        return "OpNumber";
    }
};
var showRecord = /* #__PURE__ */ Data_Show.showRecord()();
var valueIsSymbol = {
    reflectSymbol: function () {
        return "value";
    }
};
var showRecordFieldsConsNil = /* #__PURE__ */ Data_Show.showRecordFieldsConsNil(valueIsSymbol);
var FromConstantOperationIsSymbol = {
    reflectSymbol: function () {
        return "FromConstantOperation";
    }
};
var AddOpIsSymbol = {
    reflectSymbol: function () {
        return "AddOp";
    }
};
var FromConstantOpIsSymbol = {
    reflectSymbol: function () {
        return "FromConstantOp";
    }
};
var addendsIsSymbol = {
    reflectSymbol: function () {
        return "addends";
    }
};
var showRecordFieldsConsNil1 = /* #__PURE__ */ Data_Show.showRecordFieldsConsNil(addendsIsSymbol);
var AddOperationIsSymbol = {
    reflectSymbol: function () {
        return "AddOperation";
    }
};
var decodeRepConstructorArg = /* #__PURE__ */ Data_Argonaut_Decode_Generic.decodeRepConstructorArg(AddOpIsSymbol);
var decodeRepConstructorArg1 = /* #__PURE__ */ Data_Argonaut_Decode_Generic.decodeRepConstructorArg(AddOperationIsSymbol);
var foldl = /* #__PURE__ */ Data_Foldable.foldl(Data_Foldable.foldableArray);
var map = /* #__PURE__ */ Data_Functor.map(Data_Functor.functorArray);
var OpInt = /* #__PURE__ */ (function () {
    function OpInt(value0) {
        this.value0 = value0;
    };
    OpInt.create = function (value0) {
        return new OpInt(value0);
    };
    return OpInt;
})();
var OpNumber = /* #__PURE__ */ (function () {
    function OpNumber(value0) {
        this.value0 = value0;
    };
    OpNumber.create = function (value0) {
        return new OpNumber(value0);
    };
    return OpNumber;
})();
var FromConstantOperation = function (x) {
    return x;
};
var AddOp = /* #__PURE__ */ (function () {
    function AddOp(value0) {
        this.value0 = value0;
    };
    AddOp.create = function (value0) {
        return new AddOp(value0);
    };
    return AddOp;
})();
var FromConstantOp = /* #__PURE__ */ (function () {
    function FromConstantOp(value0) {
        this.value0 = value0;
    };
    FromConstantOp.create = function (value0) {
        return new FromConstantOp(value0);
    };
    return FromConstantOp;
})();
var AddOperation = function (x) {
    return x;
};
var genericOperation_ = {
    to: function (x) {
        if (x instanceof Data_Generic_Rep.Inl) {
            return new AddOp(x.value0);
        };
        if (x instanceof Data_Generic_Rep.Inr) {
            return new FromConstantOp(x.value0);
        };
        throw new Error("Failed pattern match at Sitebender.Json (line 51, column 1 - line 51, column 36): " + [ x.constructor.name ]);
    },
    from: function (x) {
        if (x instanceof AddOp) {
            return new Data_Generic_Rep.Inl(x.value0);
        };
        if (x instanceof FromConstantOp) {
            return new Data_Generic_Rep.Inr(x.value0);
        };
        throw new Error("Failed pattern match at Sitebender.Json (line 51, column 1 - line 51, column 36): " + [ x.constructor.name ]);
    }
};
var genericShow = /* #__PURE__ */ Data_Show_Generic.genericShow(genericOperation_);
var genericDecodeJson = /* #__PURE__ */ Data_Argonaut_Decode_Generic.genericDecodeJson(genericOperation_);
var genericOpResult_ = {
    to: function (x) {
        if (x instanceof Data_Generic_Rep.Inl) {
            return new OpInt(x.value0);
        };
        if (x instanceof Data_Generic_Rep.Inr) {
            return new OpNumber(x.value0);
        };
        throw new Error("Failed pattern match at Sitebender.Json (line 18, column 1 - line 18, column 35): " + [ x.constructor.name ]);
    },
    from: function (x) {
        if (x instanceof OpInt) {
            return new Data_Generic_Rep.Inl(x.value0);
        };
        if (x instanceof OpNumber) {
            return new Data_Generic_Rep.Inr(x.value0);
        };
        throw new Error("Failed pattern match at Sitebender.Json (line 18, column 1 - line 18, column 35): " + [ x.constructor.name ]);
    }
};
var genericDecodeJson1 = /* #__PURE__ */ Data_Argonaut_Decode_Generic.genericDecodeJson(genericOpResult_)(/* #__PURE__ */ Data_Argonaut_Decode_Generic.decodeRepSum(/* #__PURE__ */ Data_Argonaut_Decode_Generic.decodeRepConstructorArg(OpIntIsSymbol)(Data_Argonaut_Decode_Class.decodeJsonInt))(/* #__PURE__ */ Data_Argonaut_Decode_Generic.decodeRepConstructorArg(OpNumberIsSymbol)(Data_Argonaut_Decode_Class.decodeJsonNumber)));
var showOpResult = {
    show: /* #__PURE__ */ Data_Show_Generic.genericShow(genericOpResult_)(/* #__PURE__ */ Data_Show_Generic.genericShowSum(/* #__PURE__ */ Data_Show_Generic.genericShowConstructor(/* #__PURE__ */ Data_Show_Generic.genericShowArgsArgument(Data_Show.showInt))(OpIntIsSymbol))(/* #__PURE__ */ Data_Show_Generic.genericShowConstructor(/* #__PURE__ */ Data_Show_Generic.genericShowArgsArgument(Data_Show.showNumber))(OpNumberIsSymbol)))
};
var show = /* #__PURE__ */ Data_Show.show(showOpResult);
var genericFromConstantOperat = {
    to: function (x) {
        return x;
    },
    from: function (x) {
        return x;
    }
};
var genericShow1 = /* #__PURE__ */ Data_Show_Generic.genericShow(genericFromConstantOperat);
var showFromConstantOperation = function (dictShow) {
    return {
        show: genericShow1(Data_Show_Generic.genericShowConstructor(Data_Show_Generic.genericShowArgsArgument(showRecord(showRecordFieldsConsNil(dictShow))))(FromConstantOperationIsSymbol))
    };
};
var genericAddOperation_ = {
    to: function (x) {
        return x;
    },
    from: function (x) {
        return x;
    }
};
var genericShow2 = /* #__PURE__ */ Data_Show_Generic.genericShow(genericAddOperation_);
var genericDecodeJson2 = /* #__PURE__ */ Data_Argonaut_Decode_Generic.genericDecodeJson(genericAddOperation_);
var showOperation = function (dictShow) {
    return {
        show: genericShow(Data_Show_Generic.genericShowSum(Data_Show_Generic.genericShowConstructor(Data_Show_Generic.genericShowArgsArgument(showAddOperation(dictShow)))(AddOpIsSymbol))(Data_Show_Generic.genericShowConstructor(Data_Show_Generic.genericShowArgsArgument(showFromConstantOperation(dictShow)))(FromConstantOpIsSymbol)))
    };
};
var showAddOperation = function (dictShow) {
    return {
        show: genericShow2(Data_Show_Generic.genericShowConstructor(Data_Show_Generic.genericShowArgsArgument(showRecord(showRecordFieldsConsNil1(Data_Show.showArray(showOperation(dictShow))))))(AddOperationIsSymbol))
    };
};
var decodeJsonOpResult = {
    decodeJson: function (a) {
        return genericDecodeJson1(a);
    }
};
var genericDecodeJson3 = /* #__PURE__ */ Data_Argonaut_Decode_Generic.genericDecodeJson(genericFromConstantOperat)(/* #__PURE__ */ Data_Argonaut_Decode_Generic.decodeRepConstructorArg(FromConstantOperationIsSymbol)(/* #__PURE__ */ Data_Argonaut_Decode_Class.decodeRecord(/* #__PURE__ */ Data_Argonaut_Decode_Class.gDecodeJsonCons(/* #__PURE__ */ Data_Argonaut_Decode_Class.decodeFieldId(decodeJsonOpResult))(Data_Argonaut_Decode_Class.gDecodeJsonNil)(valueIsSymbol)()())()));
var decodeJsonFromConstantOpe = {
    decodeJson: function (a) {
        return genericDecodeJson3(a);
    }
};
var decodeRepConstructorArg2 = /* #__PURE__ */ Data_Argonaut_Decode_Generic.decodeRepConstructorArg(FromConstantOpIsSymbol)(decodeJsonFromConstantOpe);
var decodeJsonOperation = {
    decodeJson: function (a) {
        return genericDecodeJson(Data_Argonaut_Decode_Generic.decodeRepSum(decodeRepConstructorArg(decodeJsonAddOperation))(decodeRepConstructorArg2))(a);
    }
};
var decodeJsonAddOperation = {
    decodeJson: function (a) {
        return genericDecodeJson2(decodeRepConstructorArg1(Data_Argonaut_Decode_Class.decodeRecord(Data_Argonaut_Decode_Class.gDecodeJsonCons(Data_Argonaut_Decode_Class.decodeFieldId(Data_Argonaut_Decode_Class.decodeArray(decodeJsonOperation)))(Data_Argonaut_Decode_Class.gDecodeJsonNil)(addendsIsSymbol)()())()))(a);
    }
};
var decodeJson = /* #__PURE__ */ Data_Argonaut_Decode_Class.decodeJson(decodeJsonOperation);
var get = function (v) {
    return v.value;
};
var converting = function (f) {
    return function (g) {
        var toNumber$prime = function (v) {
            if (v instanceof OpNumber) {
                return v.value0;
            };
            if (v instanceof OpInt) {
                return Data_Int.toNumber(v.value0);
            };
            throw new Error("Failed pattern match at Sitebender.Json (line 70, column 15 - line 72, column 26): " + [ v.constructor.name ]);
        };
        return function (v) {
            return function (v1) {
                if (v instanceof OpInt && v1 instanceof OpInt) {
                    return new OpInt(f(v.value0)(v1.value0));
                };
                return new OpNumber(g(toNumber$prime(v))(toNumber$prime(v1)));
            };
        };
    };
};
var plus = /* #__PURE__ */ converting(/* #__PURE__ */ Data_Semiring.add(Data_Semiring.semiringInt))(/* #__PURE__ */ Data_Semiring.add(Data_Semiring.semiringNumber));
var makeOperate = function (v) {
    if (v instanceof AddOp) {
        return add(v.value0);
    };
    if (v instanceof FromConstantOp) {
        return get(v.value0);
    };
    throw new Error("Failed pattern match at Sitebender.Json (line 83, column 1 - line 83, column 37): " + [ v.constructor.name ]);
};
var add = function (v) {
    return foldl(plus)(new OpInt(0))(map(makeOperate)(v.addends));
};
var testMe = function (s) {
    var v = Data_Argonaut_Decode_Parser.parseJson(s);
    if (v instanceof Data_Either.Left) {
        return Data_Argonaut_Decode_Error.printJsonDecodeError(v.value0);
    };
    if (v instanceof Data_Either.Right) {
        var v1 = decodeJson(v.value0);
        if (v1 instanceof Data_Either.Left) {
            return Data_Argonaut_Decode_Error.printJsonDecodeError(v1.value0);
        };
        if (v1 instanceof Data_Either.Right) {
            return show(makeOperate(v1.value0));
        };
        throw new Error("Failed pattern match at Sitebender.Json (line 90, column 19 - line 92, column 40): " + [ v1.constructor.name ]);
    };
    throw new Error("Failed pattern match at Sitebender.Json (line 88, column 12 - line 92, column 40): " + [ v.constructor.name ]);
};
export {
    OpInt,
    OpNumber,
    AddOperation,
    FromConstantOperation,
    AddOp,
    FromConstantOp,
    converting,
    get,
    plus,
    add,
    makeOperate,
    testMe,
    genericOpResult_,
    showOpResult,
    decodeJsonOpResult,
    genericAddOperation_,
    showAddOperation,
    decodeJsonAddOperation,
    genericFromConstantOperat,
    showFromConstantOperation,
    decodeJsonFromConstantOpe,
    genericOperation_,
    showOperation,
    decodeJsonOperation
};
