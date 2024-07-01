import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Data_Array from "../Data.Array/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_EuclideanRing from "../Data.EuclideanRing/index.js";
import * as Data_Generic_Rep from "../Data.Generic.Rep/index.js";
import * as Data_Int from "../Data.Int/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Number from "../Data.Number/index.js";
import * as Data_Show from "../Data.Show/index.js";
import * as Data_Show_Generic from "../Data.Show.Generic/index.js";
import * as Data_String_Common from "../Data.String.Common/index.js";
import * as Effect from "../Effect/index.js";
import * as Web_DOM_ParentNode from "../Web.DOM.ParentNode/index.js";
import * as Web_HTML from "../Web.HTML/index.js";
import * as Web_HTML_HTMLDocument from "../Web.HTML.HTMLDocument/index.js";
import * as Web_HTML_HTMLInputElement from "../Web.HTML.HTMLInputElement/index.js";
import * as Web_HTML_Window from "../Web.HTML.Window/index.js";
import * as Web_Storage_Storage from "../Web.Storage.Storage/index.js";
var showRecord = /* #__PURE__ */ Data_Show.showRecord()();
var genericShowConstructor = /* #__PURE__ */ Data_Show_Generic.genericShowConstructor(/* #__PURE__ */ Data_Show_Generic.genericShowArgsArgument(/* #__PURE__ */ showRecord(/* #__PURE__ */ Data_Show.showRecordFieldsConsNil({
    reflectSymbol: function () {
        return "key";
    }
})(Data_Show.showString))));
var showMaybe = /* #__PURE__ */ Data_Maybe.showMaybe(Data_Show.showString);
var showArray = /* #__PURE__ */ Data_Show.showArray(Data_Show.showString);
var showRecordFieldsConsNil = /* #__PURE__ */ Data_Show.showRecordFieldsConsNil({
    reflectSymbol: function () {
        return "operand";
    }
});
var FromConstantOperationIsSymbol = {
    reflectSymbol: function () {
        return "FromConstantOperation";
    }
};
var showRecordFieldsCons = /* #__PURE__ */ Data_Show.showRecordFieldsCons({
    reflectSymbol: function () {
        return "minuend";
    }
});
var showRecordFieldsConsNil1 = /* #__PURE__ */ Data_Show.showRecordFieldsConsNil({
    reflectSymbol: function () {
        return "subtrahend";
    }
});
var SubtractOperationIsSymbol = {
    reflectSymbol: function () {
        return "SubtractOperation";
    }
};
var AddOpIsSymbol = {
    reflectSymbol: function () {
        return "AddOp";
    }
};
var DivideOpIsSymbol = {
    reflectSymbol: function () {
        return "DivideOp";
    }
};
var FromConstantOpIsSymbol = {
    reflectSymbol: function () {
        return "FromConstantOp";
    }
};
var MultiplyOpIsSymbol = {
    reflectSymbol: function () {
        return "MultiplyOp";
    }
};
var NegateOpIsSymbol = {
    reflectSymbol: function () {
        return "NegateOp";
    }
};
var SubtractOpIsSymbol = {
    reflectSymbol: function () {
        return "SubtractOp";
    }
};
var NegateOperationIsSymbol = {
    reflectSymbol: function () {
        return "NegateOperation";
    }
};
var showRecordFieldsCons1 = /* #__PURE__ */ Data_Show.showRecordFieldsCons({
    reflectSymbol: function () {
        return "multiplicand";
    }
});
var showRecordFieldsConsNil2 = /* #__PURE__ */ Data_Show.showRecordFieldsConsNil({
    reflectSymbol: function () {
        return "multiplier";
    }
});
var MultiplyOperationIsSymbol = {
    reflectSymbol: function () {
        return "MultiplyOperation";
    }
};
var showRecordFieldsCons2 = /* #__PURE__ */ Data_Show.showRecordFieldsCons({
    reflectSymbol: function () {
        return "dividend";
    }
});
var showRecordFieldsConsNil3 = /* #__PURE__ */ Data_Show.showRecordFieldsConsNil({
    reflectSymbol: function () {
        return "divisor";
    }
});
var DivideOperationIsSymbol = {
    reflectSymbol: function () {
        return "DivideOperation";
    }
};
var showRecordFieldsCons3 = /* #__PURE__ */ Data_Show.showRecordFieldsCons({
    reflectSymbol: function () {
        return "leftAddend";
    }
});
var showRecordFieldsConsNil4 = /* #__PURE__ */ Data_Show.showRecordFieldsConsNil({
    reflectSymbol: function () {
        return "rightAddend";
    }
});
var AddOperationIsSymbol = {
    reflectSymbol: function () {
        return "AddOperation";
    }
};
var pure = /* #__PURE__ */ Control_Applicative.pure(Effect.applicativeEffect);
var bind1 = /* #__PURE__ */ Control_Bind.bind(Data_Maybe.bindMaybe);
var div1 = /* #__PURE__ */ Data_EuclideanRing.div(Data_EuclideanRing.euclideanRingInt);
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
var FromSessionStorageOperation = function (x) {
    return x;
};
var FromLocalStorageOperation = function (x) {
    return x;
};
var FromFormFieldOperation = function (x) {
    return x;
};
var FromConstantOperation = function (x) {
    return x;
};
var FromArgumentOperation = function (x) {
    return x;
};
var $$Error = function (x) {
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
var DivideOp = /* #__PURE__ */ (function () {
    function DivideOp(value0) {
        this.value0 = value0;
    };
    DivideOp.create = function (value0) {
        return new DivideOp(value0);
    };
    return DivideOp;
})();
var FromArgumentOp = /* #__PURE__ */ (function () {
    function FromArgumentOp(value0) {
        this.value0 = value0;
    };
    FromArgumentOp.create = function (value0) {
        return new FromArgumentOp(value0);
    };
    return FromArgumentOp;
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
var FromFormFieldOp = /* #__PURE__ */ (function () {
    function FromFormFieldOp(value0) {
        this.value0 = value0;
    };
    FromFormFieldOp.create = function (value0) {
        return new FromFormFieldOp(value0);
    };
    return FromFormFieldOp;
})();
var FromLocalStorageOp = /* #__PURE__ */ (function () {
    function FromLocalStorageOp(value0) {
        this.value0 = value0;
    };
    FromLocalStorageOp.create = function (value0) {
        return new FromLocalStorageOp(value0);
    };
    return FromLocalStorageOp;
})();
var FromSessionStorageOp = /* #__PURE__ */ (function () {
    function FromSessionStorageOp(value0) {
        this.value0 = value0;
    };
    FromSessionStorageOp.create = function (value0) {
        return new FromSessionStorageOp(value0);
    };
    return FromSessionStorageOp;
})();
var MultiplyOp = /* #__PURE__ */ (function () {
    function MultiplyOp(value0) {
        this.value0 = value0;
    };
    MultiplyOp.create = function (value0) {
        return new MultiplyOp(value0);
    };
    return MultiplyOp;
})();
var NegateOp = /* #__PURE__ */ (function () {
    function NegateOp(value0) {
        this.value0 = value0;
    };
    NegateOp.create = function (value0) {
        return new NegateOp(value0);
    };
    return NegateOp;
})();
var SubtractOp = /* #__PURE__ */ (function () {
    function SubtractOp(value0) {
        this.value0 = value0;
    };
    SubtractOp.create = function (value0) {
        return new SubtractOp(value0);
    };
    return SubtractOp;
})();
var AddOperation = function (x) {
    return x;
};
var DivideOperation = function (x) {
    return x;
};
var MultiplyOperation = function (x) {
    return x;
};
var NegateOperation = function (x) {
    return x;
};
var SubtractOperation = function (x) {
    return x;
};
var genericSubtractOperation_ = {
    to: function (x) {
        return x;
    },
    from: function (x) {
        return x;
    }
};
var genericShow = /* #__PURE__ */ Data_Show_Generic.genericShow(genericSubtractOperation_);
var genericOperation_ = {
    to: function (x) {
        if (x instanceof Data_Generic_Rep.Inl) {
            return new AddOp(x.value0);
        };
        if (x instanceof Data_Generic_Rep.Inr && x.value0 instanceof Data_Generic_Rep.Inl) {
            return new DivideOp(x.value0.value0);
        };
        if (x instanceof Data_Generic_Rep.Inr && (x.value0 instanceof Data_Generic_Rep.Inr && x.value0.value0 instanceof Data_Generic_Rep.Inl)) {
            return new FromArgumentOp(x.value0.value0.value0);
        };
        if (x instanceof Data_Generic_Rep.Inr && (x.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0 instanceof Data_Generic_Rep.Inr && x.value0.value0.value0 instanceof Data_Generic_Rep.Inl))) {
            return new FromConstantOp(x.value0.value0.value0.value0);
        };
        if (x instanceof Data_Generic_Rep.Inr && (x.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0 instanceof Data_Generic_Rep.Inr && x.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inl)))) {
            return new FromFormFieldOp(x.value0.value0.value0.value0.value0);
        };
        if (x instanceof Data_Generic_Rep.Inr && (x.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr && x.value0.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inl))))) {
            return new FromLocalStorageOp(x.value0.value0.value0.value0.value0.value0);
        };
        if (x instanceof Data_Generic_Rep.Inr && (x.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr && x.value0.value0.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inl)))))) {
            return new FromSessionStorageOp(x.value0.value0.value0.value0.value0.value0.value0);
        };
        if (x instanceof Data_Generic_Rep.Inr && (x.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr && x.value0.value0.value0.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inl))))))) {
            return new MultiplyOp(x.value0.value0.value0.value0.value0.value0.value0.value0);
        };
        if (x instanceof Data_Generic_Rep.Inr && (x.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr && x.value0.value0.value0.value0.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inl)))))))) {
            return new NegateOp(x.value0.value0.value0.value0.value0.value0.value0.value0.value0);
        };
        if (x instanceof Data_Generic_Rep.Inr && (x.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr && (x.value0.value0.value0.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr && x.value0.value0.value0.value0.value0.value0.value0.value0 instanceof Data_Generic_Rep.Inr)))))))) {
            return new SubtractOp(x.value0.value0.value0.value0.value0.value0.value0.value0.value0);
        };
        throw new Error("Failed pattern match at Sitebender (line 167, column 1 - line 167, column 36): " + [ x.constructor.name ]);
    },
    from: function (x) {
        if (x instanceof AddOp) {
            return new Data_Generic_Rep.Inl(x.value0);
        };
        if (x instanceof DivideOp) {
            return new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inl(x.value0));
        };
        if (x instanceof FromArgumentOp) {
            return new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inl(x.value0)));
        };
        if (x instanceof FromConstantOp) {
            return new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inl(x.value0))));
        };
        if (x instanceof FromFormFieldOp) {
            return new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inl(x.value0)))));
        };
        if (x instanceof FromLocalStorageOp) {
            return new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inl(x.value0))))));
        };
        if (x instanceof FromSessionStorageOp) {
            return new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inl(x.value0)))))));
        };
        if (x instanceof MultiplyOp) {
            return new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inl(x.value0))))))));
        };
        if (x instanceof NegateOp) {
            return new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inl(x.value0)))))))));
        };
        if (x instanceof SubtractOp) {
            return new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(new Data_Generic_Rep.Inr(x.value0)))))))));
        };
        throw new Error("Failed pattern match at Sitebender (line 167, column 1 - line 167, column 36): " + [ x.constructor.name ]);
    }
};
var genericShow1 = /* #__PURE__ */ Data_Show_Generic.genericShow(genericOperation_);
var genericOpResult_ = {
    to: function (x) {
        if (x instanceof Data_Generic_Rep.Inl) {
            return new OpInt(x.value0);
        };
        if (x instanceof Data_Generic_Rep.Inr) {
            return new OpNumber(x.value0);
        };
        throw new Error("Failed pattern match at Sitebender (line 72, column 1 - line 72, column 35): " + [ x.constructor.name ]);
    },
    from: function (x) {
        if (x instanceof OpInt) {
            return new Data_Generic_Rep.Inl(x.value0);
        };
        if (x instanceof OpNumber) {
            return new Data_Generic_Rep.Inr(x.value0);
        };
        throw new Error("Failed pattern match at Sitebender (line 72, column 1 - line 72, column 35): " + [ x.constructor.name ]);
    }
};
var showOpResult = {
    show: /* #__PURE__ */ Data_Show_Generic.genericShow(genericOpResult_)(/* #__PURE__ */ Data_Show_Generic.genericShowSum(/* #__PURE__ */ Data_Show_Generic.genericShowConstructor(/* #__PURE__ */ Data_Show_Generic.genericShowArgsArgument(Data_Show.showInt))({
        reflectSymbol: function () {
            return "OpInt";
        }
    }))(/* #__PURE__ */ Data_Show_Generic.genericShowConstructor(/* #__PURE__ */ Data_Show_Generic.genericShowArgsArgument(Data_Show.showNumber))({
        reflectSymbol: function () {
            return "OpNumber";
        }
    })))
};
var genericNegateOperation_ = {
    to: function (x) {
        return x;
    },
    from: function (x) {
        return x;
    }
};
var genericShow2 = /* #__PURE__ */ Data_Show_Generic.genericShow(genericNegateOperation_);
var genericMultiplyOperation_ = {
    to: function (x) {
        return x;
    },
    from: function (x) {
        return x;
    }
};
var genericShow3 = /* #__PURE__ */ Data_Show_Generic.genericShow(genericMultiplyOperation_);
var genericFromSessionStorage = {
    to: function (x) {
        return x;
    },
    from: function (x) {
        return x;
    }
};
var showFromSessionStorageOpe = {
    show: /* #__PURE__ */ Data_Show_Generic.genericShow(genericFromSessionStorage)(/* #__PURE__ */ genericShowConstructor({
        reflectSymbol: function () {
            return "FromSessionStorageOperation";
        }
    }))
};
var genericShowSum = /* #__PURE__ */ Data_Show_Generic.genericShowSum(/* #__PURE__ */ Data_Show_Generic.genericShowConstructor(/* #__PURE__ */ Data_Show_Generic.genericShowArgsArgument(showFromSessionStorageOpe))({
    reflectSymbol: function () {
        return "FromSessionStorageOp";
    }
}));
var genericFromLocalStorageOp = {
    to: function (x) {
        return x;
    },
    from: function (x) {
        return x;
    }
};
var showFromLocalStorageOpera = {
    show: /* #__PURE__ */ Data_Show_Generic.genericShow(genericFromLocalStorageOp)(/* #__PURE__ */ genericShowConstructor({
        reflectSymbol: function () {
            return "FromLocalStorageOperation";
        }
    }))
};
var genericShowSum1 = /* #__PURE__ */ Data_Show_Generic.genericShowSum(/* #__PURE__ */ Data_Show_Generic.genericShowConstructor(/* #__PURE__ */ Data_Show_Generic.genericShowArgsArgument(showFromLocalStorageOpera))({
    reflectSymbol: function () {
        return "FromLocalStorageOp";
    }
}));
var genericFromFormFieldOpera = {
    to: function (x) {
        return x;
    },
    from: function (x) {
        return x;
    }
};
var showFromFormFieldOperatio = {
    show: /* #__PURE__ */ Data_Show_Generic.genericShow(genericFromFormFieldOpera)(/* #__PURE__ */ Data_Show_Generic.genericShowConstructor(/* #__PURE__ */ Data_Show_Generic.genericShowArgsArgument(/* #__PURE__ */ showRecord(/* #__PURE__ */ Data_Show.showRecordFieldsCons({
        reflectSymbol: function () {
            return "classList";
        }
    })(/* #__PURE__ */ Data_Show.showRecordFieldsCons({
        reflectSymbol: function () {
            return "form";
        }
    })(/* #__PURE__ */ Data_Show.showRecordFieldsCons({
        reflectSymbol: function () {
            return "id";
        }
    })(/* #__PURE__ */ Data_Show.showRecordFieldsCons({
        reflectSymbol: function () {
            return "name";
        }
    })(/* #__PURE__ */ Data_Show.showRecordFieldsCons({
        reflectSymbol: function () {
            return "selector";
        }
    })(/* #__PURE__ */ Data_Show.showRecordFieldsConsNil({
        reflectSymbol: function () {
            return "tagName";
        }
    })(showMaybe))(showMaybe))(showMaybe))(showMaybe))(showMaybe))(/* #__PURE__ */ Data_Maybe.showMaybe(showArray)))))({
        reflectSymbol: function () {
            return "FromFormFieldOperation";
        }
    }))
};
var genericShowSum2 = /* #__PURE__ */ Data_Show_Generic.genericShowSum(/* #__PURE__ */ Data_Show_Generic.genericShowConstructor(/* #__PURE__ */ Data_Show_Generic.genericShowArgsArgument(showFromFormFieldOperatio))({
    reflectSymbol: function () {
        return "FromFormFieldOp";
    }
}));
var genericFromConstantOperat = {
    to: function (x) {
        return x;
    },
    from: function (x) {
        return x;
    }
};
var genericShow4 = /* #__PURE__ */ Data_Show_Generic.genericShow(genericFromConstantOperat);
var showFromConstantOperation = function (dictShow) {
    return {
        show: genericShow4(Data_Show_Generic.genericShowConstructor(Data_Show_Generic.genericShowArgsArgument(showRecord(showRecordFieldsConsNil(dictShow))))(FromConstantOperationIsSymbol))
    };
};
var genericFromArgumentOperat = {
    to: function (x) {
        return x;
    },
    from: function (x) {
        return x;
    }
};
var showFromArgumentOperation = {
    show: /* #__PURE__ */ Data_Show_Generic.genericShow(genericFromArgumentOperat)(/* #__PURE__ */ Data_Show_Generic.genericShowConstructor(/* #__PURE__ */ Data_Show_Generic.genericShowArgsArgument(/* #__PURE__ */ showRecord(Data_Show.showRecordFieldsNil)))({
        reflectSymbol: function () {
            return "FromArgumentOperation";
        }
    }))
};
var genericShowSum3 = /* #__PURE__ */ Data_Show_Generic.genericShowSum(/* #__PURE__ */ Data_Show_Generic.genericShowConstructor(/* #__PURE__ */ Data_Show_Generic.genericShowArgsArgument(showFromArgumentOperation))({
    reflectSymbol: function () {
        return "FromArgumentOp";
    }
}));
var genericError_ = {
    to: function (x) {
        return x;
    },
    from: function (x) {
        return x;
    }
};
var showError = {
    show: /* #__PURE__ */ Data_Show_Generic.genericShow(genericError_)(/* #__PURE__ */ Data_Show_Generic.genericShowConstructor(/* #__PURE__ */ Data_Show_Generic.genericShowArgsArgument(showArray))({
        reflectSymbol: function () {
            return "Error";
        }
    }))
};
var genericDivideOperation_ = {
    to: function (x) {
        return x;
    },
    from: function (x) {
        return x;
    }
};
var genericShow5 = /* #__PURE__ */ Data_Show_Generic.genericShow(genericDivideOperation_);
var genericAddOperation_ = {
    to: function (x) {
        return x;
    },
    from: function (x) {
        return x;
    }
};
var genericShow6 = /* #__PURE__ */ Data_Show_Generic.genericShow(genericAddOperation_);
var showSubtractOperation = function (dictShow) {
    return {
        show: genericShow(Data_Show_Generic.genericShowConstructor(Data_Show_Generic.genericShowArgsArgument(showRecord(showRecordFieldsCons(showRecordFieldsConsNil1(showOperation(dictShow)))(showOperation(dictShow)))))(SubtractOperationIsSymbol))
    };
};
var showOperation = function (dictShow) {
    return {
        show: genericShow1(Data_Show_Generic.genericShowSum(Data_Show_Generic.genericShowConstructor(Data_Show_Generic.genericShowArgsArgument(showAddOperation(dictShow)))(AddOpIsSymbol))(Data_Show_Generic.genericShowSum(Data_Show_Generic.genericShowConstructor(Data_Show_Generic.genericShowArgsArgument(showDivideOperation(dictShow)))(DivideOpIsSymbol))(genericShowSum3(Data_Show_Generic.genericShowSum(Data_Show_Generic.genericShowConstructor(Data_Show_Generic.genericShowArgsArgument(showFromConstantOperation(dictShow)))(FromConstantOpIsSymbol))(genericShowSum2(genericShowSum1(genericShowSum(Data_Show_Generic.genericShowSum(Data_Show_Generic.genericShowConstructor(Data_Show_Generic.genericShowArgsArgument(showMultiplyOperation(dictShow)))(MultiplyOpIsSymbol))(Data_Show_Generic.genericShowSum(Data_Show_Generic.genericShowConstructor(Data_Show_Generic.genericShowArgsArgument(showNegateOperation(dictShow)))(NegateOpIsSymbol))(Data_Show_Generic.genericShowConstructor(Data_Show_Generic.genericShowArgsArgument(showSubtractOperation(dictShow)))(SubtractOpIsSymbol)))))))))))
    };
};
var showNegateOperation = function (dictShow) {
    return {
        show: genericShow2(Data_Show_Generic.genericShowConstructor(Data_Show_Generic.genericShowArgsArgument(showRecord(showRecordFieldsConsNil(showOperation(dictShow)))))(NegateOperationIsSymbol))
    };
};
var showMultiplyOperation = function (dictShow) {
    return {
        show: genericShow3(Data_Show_Generic.genericShowConstructor(Data_Show_Generic.genericShowArgsArgument(showRecord(showRecordFieldsCons1(showRecordFieldsConsNil2(showOperation(dictShow)))(showOperation(dictShow)))))(MultiplyOperationIsSymbol))
    };
};
var showDivideOperation = function (dictShow) {
    return {
        show: genericShow5(Data_Show_Generic.genericShowConstructor(Data_Show_Generic.genericShowArgsArgument(showRecord(showRecordFieldsCons2(showRecordFieldsConsNil3(showOperation(dictShow)))(showOperation(dictShow)))))(DivideOperationIsSymbol))
    };
};
var showAddOperation = function (dictShow) {
    return {
        show: genericShow6(Data_Show_Generic.genericShowConstructor(Data_Show_Generic.genericShowArgsArgument(showRecord(showRecordFieldsCons3(showRecordFieldsConsNil4(showOperation(dictShow)))(showOperation(dictShow)))))(AddOperationIsSymbol))
    };
};
var sum = function (v) {
    return function (v1) {
        if (v instanceof OpInt && v1 instanceof OpInt) {
            return new OpInt((function () {
                var $373 = v1.value0 === 0;
                if ($373) {
                    return 0;
                };
                return v.value0 + v1.value0 | 0;
            })());
        };
        if (v instanceof OpInt && v1 instanceof OpNumber) {
            return new OpNumber((function () {
                var $376 = v1.value0 === 0.0;
                if ($376) {
                    return 0.0;
                };
                return Data_Int.toNumber(v.value0) + v1.value0;
            })());
        };
        if (v instanceof OpNumber && v1 instanceof OpInt) {
            return new OpNumber((function () {
                var $379 = v1.value0 === 0;
                if ($379) {
                    return 0.0;
                };
                return v.value0 + Data_Int.toNumber(v1.value0);
            })());
        };
        if (v instanceof OpNumber && v1 instanceof OpNumber) {
            return new OpNumber((function () {
                var $382 = v1.value0 === 0.0;
                if ($382) {
                    return 0.0;
                };
                return v.value0 + v1.value0;
            })());
        };
        throw new Error("Failed pattern match at Sitebender (line 217, column 1 - line 217, column 40): " + [ v.constructor.name, v1.constructor.name ]);
    };
};
var sub = function (v) {
    return function (v1) {
        if (v instanceof OpInt && v1 instanceof OpInt) {
            return new OpInt(v.value0 - v1.value0 | 0);
        };
        if (v instanceof OpInt && v1 instanceof OpNumber) {
            return new OpNumber(Data_Int.toNumber(v.value0) - v1.value0);
        };
        if (v instanceof OpNumber && v1 instanceof OpInt) {
            return new OpNumber(v.value0 - Data_Int.toNumber(v1.value0));
        };
        if (v instanceof OpNumber && v1 instanceof OpNumber) {
            return new OpNumber(v.value0 - v1.value0);
        };
        throw new Error("Failed pattern match at Sitebender (line 382, column 1 - line 382, column 40): " + [ v.constructor.name, v1.constructor.name ]);
    };
};
var showQS = function (v) {
    return v;
};
var selectFromDocument = function (v) {
    return function (v1) {
        if (v instanceof Data_Either.Right) {
            var el = Web_DOM_ParentNode.querySelector(v.value0)(Web_HTML_HTMLDocument.toParentNode(v1));
            return function __do() {
                var m = el();
                return Data_Either.note([ "Cannot find element using selector `" + (showQS(v.value0) + "`.") ])(bind1(m)(Web_HTML_HTMLInputElement.fromElement));
            };
        };
        if (v instanceof Data_Either.Left) {
            return pure(new Data_Either.Left(v.value0));
        };
        throw new Error("Failed pattern match at Sitebender (line 326, column 1 - line 326, column 109): " + [ v.constructor.name, v1.constructor.name ]);
    };
};
var neg = function (v) {
    if (v instanceof OpInt) {
        return new OpInt(-v.value0 | 0);
    };
    if (v instanceof OpNumber) {
        return new OpNumber(-v.value0);
    };
    throw new Error("Failed pattern match at Sitebender (line 367, column 1 - line 367, column 28): " + [ v.constructor.name ]);
};
var mult = function (v) {
    return function (v1) {
        if (v instanceof OpInt && v1 instanceof OpInt) {
            return new OpInt((function () {
                var $405 = v1.value0 === 0;
                if ($405) {
                    return 0;
                };
                return v.value0 * v1.value0 | 0;
            })());
        };
        if (v instanceof OpInt && v1 instanceof OpNumber) {
            return new OpNumber((function () {
                var $408 = v1.value0 === 0.0;
                if ($408) {
                    return 0.0;
                };
                return Data_Int.toNumber(v.value0) * v1.value0;
            })());
        };
        if (v instanceof OpNumber && v1 instanceof OpInt) {
            return new OpNumber((function () {
                var $411 = v1.value0 === 0;
                if ($411) {
                    return 0.0;
                };
                return v.value0 * Data_Int.toNumber(v1.value0);
            })());
        };
        if (v instanceof OpNumber && v1 instanceof OpNumber) {
            return new OpNumber((function () {
                var $414 = v1.value0 === 0.0;
                if ($414) {
                    return 0.0;
                };
                return v.value0 * v1.value0;
            })());
        };
        throw new Error("Failed pattern match at Sitebender (line 348, column 1 - line 348, column 41): " + [ v.constructor.name, v1.constructor.name ]);
    };
};
var getArgValue = function (v) {
    if (v instanceof Data_Maybe.Just) {
        return pure(new Data_Either.Right(v.value0));
    };
    if (v instanceof Data_Maybe.Nothing) {
        return pure(new Data_Either.Left([ "Missing argument." ]));
    };
    throw new Error("Failed pattern match at Sitebender (line 259, column 1 - line 259, column 64): " + [ v.constructor.name ]);
};
var getFromArgument = function (v) {
    return getArgValue;
};
var get = function (v) {
    return function (v1) {
        return pure(new Data_Either.Right(v.operand));
    };
};
var fromString = function (v) {
    if (v instanceof Data_Maybe.Nothing) {
        return Data_Maybe.Nothing.value;
    };
    if (v instanceof Data_Maybe.Just) {
        var v1 = Data_Int.fromString(v.value0);
        if (v1 instanceof Data_Maybe.Just) {
            return new Data_Maybe.Just(new OpInt(v1.value0));
        };
        if (v1 instanceof Data_Maybe.Nothing) {
            var v2 = Data_Number.fromString(v.value0);
            if (v2 instanceof Data_Maybe.Just) {
                return new Data_Maybe.Just(new OpNumber(v2.value0));
            };
            if (v2 instanceof Data_Maybe.Nothing) {
                return Data_Maybe.Nothing.value;
            };
            throw new Error("Failed pattern match at Sitebender (line 175, column 14 - line 177, column 23): " + [ v2.constructor.name ]);
        };
        throw new Error("Failed pattern match at Sitebender (line 173, column 23 - line 177, column 23): " + [ v1.constructor.name ]);
    };
    throw new Error("Failed pattern match at Sitebender (line 171, column 1 - line 171, column 45): " + [ v.constructor.name ]);
};
var getFromLocalStorage = function (v) {
    return function (v1) {
        return function __do() {
            var w = Web_HTML.window();
            var s = Web_HTML_Window.localStorage(w)();
            var i = Web_Storage_Storage.getItem(v.key)(s)();
            return Data_Either.note([ "Cannot get value for `" + (v.key + "` from local storage.") ])(fromString(i));
        };
    };
};
var getFromSessionStorage = function (v) {
    return function (v1) {
        return function __do() {
            var w = Web_HTML.window();
            var s = Web_HTML_Window.sessionStorage(w)();
            var i = Web_Storage_Storage.getItem(v.key)(s)();
            return Data_Either.note([ "Cannot get value for `" + (v.key + "` from session storage.") ])(fromString(i));
        };
    };
};
var getValue = function (v) {
    if (v instanceof Data_Either.Right) {
        return function __do() {
            var v1 = Web_HTML_HTMLInputElement.value(v.value0)();
            var v2 = fromString(new Data_Maybe.Just(v1));
            if (v2 instanceof Data_Maybe.Just) {
                return new Data_Either.Right(v2.value0);
            };
            if (v2 instanceof Data_Maybe.Nothing) {
                return new Data_Either.Left([ "Cannot retrieve value from form input." ]);
            };
            throw new Error("Failed pattern match at Sitebender (line 336, column 3 - line 338, column 80): " + [ v2.constructor.name ]);
        };
    };
    if (v instanceof Data_Either.Left) {
        return pure(new Data_Either.Left(v.value0));
    };
    throw new Error("Failed pattern match at Sitebender (line 333, column 1 - line 333, column 78): " + [ v.constructor.name ]);
};
var doTheNegation = function (v) {
    if (v instanceof Data_Either.Left) {
        return new Data_Either.Left(v.value0);
    };
    if (v instanceof Data_Either.Right) {
        return new Data_Either.Right(neg(v.value0));
    };
    throw new Error("Failed pattern match at Sitebender (line 371, column 1 - line 371, column 64): " + [ v.constructor.name ]);
};
var div = function (v) {
    return function (v1) {
        if (v instanceof OpInt && v1 instanceof OpInt) {
            return new OpInt((function () {
                var $443 = v1.value0 === 0;
                if ($443) {
                    return 0;
                };
                return div1(v.value0)(v1.value0);
            })());
        };
        if (v instanceof OpInt && v1 instanceof OpNumber) {
            return new OpNumber((function () {
                var $446 = v1.value0 === 0.0;
                if ($446) {
                    return 0.0;
                };
                return Data_Int.toNumber(v.value0) / v1.value0;
            })());
        };
        if (v instanceof OpNumber && v1 instanceof OpInt) {
            return new OpNumber((function () {
                var $449 = v1.value0 === 0;
                if ($449) {
                    return 0.0;
                };
                return v.value0 / Data_Int.toNumber(v1.value0);
            })());
        };
        if (v instanceof OpNumber && v1 instanceof OpNumber) {
            return new OpNumber((function () {
                var $452 = v1.value0 === 0.0;
                if ($452) {
                    return 0.0;
                };
                return v.value0 / v1.value0;
            })());
        };
        throw new Error("Failed pattern match at Sitebender (line 236, column 1 - line 236, column 40): " + [ v.constructor.name, v1.constructor.name ]);
    };
};
var createTagNameSelector = function (v) {
    if (v instanceof Data_Maybe.Just) {
        return v.value0;
    };
    if (v instanceof Data_Maybe.Nothing) {
        return "";
    };
    throw new Error("Failed pattern match at Sitebender (line 297, column 1 - line 297, column 48): " + [ v.constructor.name ]);
};
var createSubtractOp = function (minuend) {
    return function (subtrahend) {
        return new SubtractOp({
            minuend: minuend,
            subtrahend: subtrahend
        });
    };
};
var createNegateOp = function (operand) {
    return new NegateOp({
        operand: operand
    });
};
var createNameSelector = function (v) {
    if (v instanceof Data_Maybe.Just) {
        return "[name=" + (v.value0 + "]");
    };
    if (v instanceof Data_Maybe.Nothing) {
        return "";
    };
    throw new Error("Failed pattern match at Sitebender (line 293, column 1 - line 293, column 45): " + [ v.constructor.name ]);
};
var createMultiplyOp = function (multiplicand) {
    return function (multiplier) {
        return new MultiplyOp({
            multiplicand: multiplicand,
            multiplier: multiplier
        });
    };
};
var createIdSelector = function (v) {
    if (v instanceof Data_Maybe.Just) {
        return "#" + v.value0;
    };
    if (v instanceof Data_Maybe.Nothing) {
        return "";
    };
    throw new Error("Failed pattern match at Sitebender (line 289, column 1 - line 289, column 43): " + [ v.constructor.name ]);
};
var createFromSessionStorageOp = function (key) {
    return new FromSessionStorageOp({
        key: key
    });
};
var createFromLocalStorageOp = function (key) {
    return new FromLocalStorageOp({
        key: key
    });
};
var createFromFormFieldOp = function (record) {
    return new FromFormFieldOp(record);
};
var createFromConstantOp = function (operand) {
    return new FromConstantOp({
        operand: operand
    });
};
var createFromArgumentOp = function (v) {
    return new FromArgumentOp({});
};
var createFormSelector = function (v) {
    if (v instanceof Data_Maybe.Just) {
        return "#" + (v.value0 + " ");
    };
    if (v instanceof Data_Maybe.Nothing) {
        return "";
    };
    throw new Error("Failed pattern match at Sitebender (line 285, column 1 - line 285, column 45): " + [ v.constructor.name ]);
};
var createDivideOp = function (dividend) {
    return function (divisor) {
        return new DivideOp({
            dividend: dividend,
            divisor: divisor
        });
    };
};
var createClassListSelector = function (v) {
    if (v instanceof Data_Maybe.Nothing) {
        return "";
    };
    if (v instanceof Data_Maybe.Just && v.value0.length === 0) {
        return "";
    };
    if (v instanceof Data_Maybe.Just) {
        return "." + Data_String_Common.joinWith(".")(v.value0);
    };
    throw new Error("Failed pattern match at Sitebender (line 280, column 1 - line 280, column 58): " + [ v.constructor.name ]);
};
var createQuerySelector = function (v) {
    if (v.classList instanceof Data_Maybe.Nothing && (v.form instanceof Data_Maybe.Nothing && (v.id instanceof Data_Maybe.Nothing && (v.name instanceof Data_Maybe.Nothing && (v.selector instanceof Data_Maybe.Nothing && v.tagName instanceof Data_Maybe.Nothing))))) {
        return new Data_Either.Left([ "Cannot find element without a selector." ]);
    };
    if (v.selector instanceof Data_Maybe.Just) {
        return new Data_Either.Right(v.selector.value0);
    };
    return new Data_Either.Right(createFormSelector(v.form) + (createTagNameSelector(v.tagName) + (createIdSelector(v.id) + (createClassListSelector(v.classList) + createNameSelector(v.name)))));
};
var getFromFormField = function (rec) {
    return function (v) {
        return function __do() {
            var w = Web_HTML.window();
            var d = Web_HTML_Window.document(w)();
            var i = selectFromDocument(createQuerySelector(rec))(d)();
            return getValue(i)();
        };
    };
};
var createAddOp = function (leftAddend) {
    return function (rightAddend) {
        return new AddOp({
            leftAddend: leftAddend,
            rightAddend: rightAddend
        });
    };
};
var concat = function (v) {
    return function (v1) {
        return Data_Array.concat([ v, v1 ]);
    };
};
var doTheAddition = function (v) {
    return function (v1) {
        if (v instanceof Data_Either.Left && v1 instanceof Data_Either.Left) {
            return new Data_Either.Left(concat(v.value0)(v1.value0));
        };
        if (v instanceof Data_Either.Left) {
            return new Data_Either.Left(v.value0);
        };
        if (v1 instanceof Data_Either.Left) {
            return new Data_Either.Left(v1.value0);
        };
        if (v instanceof Data_Either.Right && v1 instanceof Data_Either.Right) {
            return new Data_Either.Right(sum(v.value0)(v1.value0));
        };
        throw new Error("Failed pattern match at Sitebender (line 223, column 1 - line 223, column 89): " + [ v.constructor.name, v1.constructor.name ]);
    };
};
var doTheDivision = function (v) {
    return function (v1) {
        if (v instanceof Data_Either.Left && v1 instanceof Data_Either.Left) {
            return new Data_Either.Left(concat(v.value0)(v1.value0));
        };
        if (v instanceof Data_Either.Left) {
            return new Data_Either.Left(v.value0);
        };
        if (v1 instanceof Data_Either.Left) {
            return new Data_Either.Left(v1.value0);
        };
        if (v instanceof Data_Either.Right && v1 instanceof Data_Either.Right) {
            return new Data_Either.Right(div(v.value0)(v1.value0));
        };
        throw new Error("Failed pattern match at Sitebender (line 242, column 1 - line 242, column 89): " + [ v.constructor.name, v1.constructor.name ]);
    };
};
var doTheMultiplication = function (v) {
    return function (v1) {
        if (v instanceof Data_Either.Left && v1 instanceof Data_Either.Left) {
            return new Data_Either.Left(concat(v.value0)(v1.value0));
        };
        if (v instanceof Data_Either.Left) {
            return new Data_Either.Left(v.value0);
        };
        if (v1 instanceof Data_Either.Left) {
            return new Data_Either.Left(v1.value0);
        };
        if (v instanceof Data_Either.Right && v1 instanceof Data_Either.Right) {
            return new Data_Either.Right(mult(v.value0)(v1.value0));
        };
        throw new Error("Failed pattern match at Sitebender (line 354, column 1 - line 354, column 95): " + [ v.constructor.name, v1.constructor.name ]);
    };
};
var doTheSubtraction = function (v) {
    return function (v1) {
        if (v instanceof Data_Either.Left && v1 instanceof Data_Either.Left) {
            return new Data_Either.Left(concat(v.value0)(v1.value0));
        };
        if (v instanceof Data_Either.Left) {
            return new Data_Either.Left(v.value0);
        };
        if (v1 instanceof Data_Either.Left) {
            return new Data_Either.Left(v1.value0);
        };
        if (v instanceof Data_Either.Right && v1 instanceof Data_Either.Right) {
            return new Data_Either.Right(sub(v.value0)(v1.value0));
        };
        throw new Error("Failed pattern match at Sitebender (line 388, column 1 - line 388, column 92): " + [ v.constructor.name, v1.constructor.name ]);
    };
};
var subtract = function (v) {
    return function (v1) {
        return function __do() {
            var m = makeOperate(v.minuend)(v1)();
            var s = makeOperate(v.subtrahend)(v1)();
            return doTheSubtraction(m)(s);
        };
    };
};
var negate = function (v) {
    return function (v1) {
        return function __do() {
            var o = makeOperate(v.operand)(v1)();
            return doTheNegation(o);
        };
    };
};
var multiply = function (v) {
    return function (v1) {
        return function __do() {
            var a1 = makeOperate(v.multiplicand)(v1)();
            var a2 = makeOperate(v.multiplier)(v1)();
            return doTheMultiplication(a1)(a2);
        };
    };
};
var makeOperate = function (v) {
    if (v instanceof AddOp) {
        return add(v.value0);
    };
    if (v instanceof DivideOp) {
        return divide(v.value0);
    };
    if (v instanceof FromArgumentOp) {
        return getFromArgument(v.value0);
    };
    if (v instanceof FromConstantOp) {
        return get(v.value0);
    };
    if (v instanceof FromLocalStorageOp) {
        return getFromLocalStorage(v.value0);
    };
    if (v instanceof FromSessionStorageOp) {
        return getFromSessionStorage(v.value0);
    };
    if (v instanceof FromFormFieldOp) {
        return getFromFormField(v.value0);
    };
    if (v instanceof MultiplyOp) {
        return multiply(v.value0);
    };
    if (v instanceof NegateOp) {
        return negate(v.value0);
    };
    if (v instanceof SubtractOp) {
        return subtract(v.value0);
    };
    throw new Error("Failed pattern match at Sitebender (line 402, column 1 - line 402, column 77): " + [ v.constructor.name ]);
};
var divide = function (v) {
    return function (v1) {
        return function __do() {
            var dd = makeOperate(v.dividend)(v1)();
            var dr = makeOperate(v.divisor)(v1)();
            return doTheDivision(dd)(dr);
        };
    };
};
var add = function (v) {
    return function (v1) {
        return function __do() {
            var a1 = makeOperate(v.leftAddend)(v1)();
            var a2 = makeOperate(v.rightAddend)(v1)();
            return doTheAddition(a1)(a2);
        };
    };
};
export {
    AddOp,
    DivideOp,
    FromArgumentOp,
    FromConstantOp,
    FromFormFieldOp,
    FromLocalStorageOp,
    FromSessionStorageOp,
    MultiplyOp,
    NegateOp,
    SubtractOp,
    $$Error as Error,
    AddOperation,
    DivideOperation,
    MultiplyOperation,
    NegateOperation,
    SubtractOperation,
    FromArgumentOperation,
    FromConstantOperation,
    FromFormFieldOperation,
    FromLocalStorageOperation,
    FromSessionStorageOperation,
    createAddOp,
    createDivideOp,
    createFromArgumentOp,
    createFromConstantOp,
    createFromFormFieldOp,
    createFromLocalStorageOp,
    createFromSessionStorageOp,
    createMultiplyOp,
    createNegateOp,
    createSubtractOp,
    getFromFormField,
    getFromLocalStorage,
    getFromSessionStorage,
    getValue,
    makeOperate,
    OpInt,
    OpNumber,
    genericError_,
    showError,
    genericOpResult_,
    showOpResult,
    genericAddOperation_,
    showAddOperation,
    genericDivideOperation_,
    showDivideOperation,
    genericFromConstantOperat,
    showFromConstantOperation,
    genericFromArgumentOperat,
    showFromArgumentOperation,
    genericFromLocalStorageOp,
    showFromLocalStorageOpera,
    genericFromSessionStorage,
    showFromSessionStorageOpe,
    genericFromFormFieldOpera,
    showFromFormFieldOperatio,
    genericMultiplyOperation_,
    showMultiplyOperation,
    genericNegateOperation_,
    showNegateOperation,
    genericSubtractOperation_,
    showSubtractOperation,
    genericOperation_,
    showOperation
};
