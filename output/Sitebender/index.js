import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Generic_Rep from "../Data.Generic.Rep/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Show from "../Data.Show/index.js";
import * as Data_Show_Generic from "../Data.Show.Generic/index.js";
import * as Data_String_Common from "../Data.String.Common/index.js";
import * as Effect from "../Effect/index.js";
import * as Web_DOM_ParentNode from "../Web.DOM.ParentNode/index.js";
import * as Web_HTML_HTMLDocument from "../Web.HTML.HTMLDocument/index.js";
import * as Web_HTML_HTMLInputElement from "../Web.HTML.HTMLInputElement/index.js";
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
var FromConstantOpIsSymbol = {
    reflectSymbol: function () {
        return "FromConstantOp";
    }
};
var showRecordFieldsConsNil1 = /* #__PURE__ */ Data_Show.showRecordFieldsConsNil({
    reflectSymbol: function () {
        return "multipliers";
    }
});
var MultiplyOperationIsSymbol = {
    reflectSymbol: function () {
        return "MultiplyOperation";
    }
};
var NegateOperationIsSymbol = {
    reflectSymbol: function () {
        return "NegateOperation";
    }
};
var showRecordFieldsCons = /* #__PURE__ */ Data_Show.showRecordFieldsCons({
    reflectSymbol: function () {
        return "minuend";
    }
});
var showRecordFieldsConsNil2 = /* #__PURE__ */ Data_Show.showRecordFieldsConsNil({
    reflectSymbol: function () {
        return "subtrahend";
    }
});
var SubtractOperationIsSymbol = {
    reflectSymbol: function () {
        return "SubtractOperation";
    }
};
var showRecordFieldsCons1 = /* #__PURE__ */ Data_Show.showRecordFieldsCons({
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
var showRecordFieldsConsNil4 = /* #__PURE__ */ Data_Show.showRecordFieldsConsNil({
    reflectSymbol: function () {
        return "addends";
    }
});
var AddOperationIsSymbol = {
    reflectSymbol: function () {
        return "AddOperation";
    }
};
var pure = /* #__PURE__ */ Control_Applicative.pure(Effect.applicativeEffect);
var bind1 = /* #__PURE__ */ Control_Bind.bind(Data_Maybe.bindMaybe);
var map = /* #__PURE__ */ Data_Functor.map(Effect.functorEffect);
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
var MultiplyOperation = function (x) {
    return x;
};
var NegateOperation = function (x) {
    return x;
};
var SubtractOperation = function (x) {
    return x;
};

// import Web.HTML.Window (document, localStorage, sessionStorage)
// import Web.Storage.Storage (getItem)
var $$Error = function (x) {
    return x;
};
var DivideOperation = function (x) {
    return x;
};
var AddOperation = function (x) {
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

// | FromFormFieldOp (FromFormFieldOperation a)
// | FromLocalStorageOp (FromLocalStorageOperation a)
// | FromSessionStorageOp (FromSessionStorageOperation a)
var genericOperation_ = {
    to: function (x) {
        if (x instanceof Data_Generic_Rep.Inl) {
            return new FromArgumentOp(x.value0);
        };
        if (x instanceof Data_Generic_Rep.Inr) {
            return new FromConstantOp(x.value0);
        };
        throw new Error("Failed pattern match at Sitebender (line 135, column 1 - line 135, column 40): " + [ x.constructor.name ]);
    },
    from: function (x) {
        if (x instanceof FromArgumentOp) {
            return new Data_Generic_Rep.Inl(x.value0);
        };
        if (x instanceof FromConstantOp) {
            return new Data_Generic_Rep.Inr(x.value0);
        };
        throw new Error("Failed pattern match at Sitebender (line 135, column 1 - line 135, column 40): " + [ x.constructor.name ]);
    }
};
var genericShow1 = /* #__PURE__ */ Data_Show_Generic.genericShow(genericOperation_);
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
var genericShowSum = /* #__PURE__ */ Data_Show_Generic.genericShowSum(/* #__PURE__ */ Data_Show_Generic.genericShowConstructor(/* #__PURE__ */ Data_Show_Generic.genericShowArgsArgument(showFromArgumentOperation))({
    reflectSymbol: function () {
        return "FromArgumentOp";
    }
}));
var showOperation = function (dictShow) {
    return {
        show: genericShow1(genericShowSum(Data_Show_Generic.genericShowConstructor(Data_Show_Generic.genericShowArgsArgument(showFromConstantOperation(dictShow)))(FromConstantOpIsSymbol)))
    };
};
var showMultiplyOperation = function (dictShow) {
    return {
        show: genericShow3(Data_Show_Generic.genericShowConstructor(Data_Show_Generic.genericShowArgsArgument(showRecord(showRecordFieldsConsNil1(Data_Show.showArray(showOperation(dictShow))))))(MultiplyOperationIsSymbol))
    };
};
var showNegateOperation = function (dictShow) {
    return {
        show: genericShow2(Data_Show_Generic.genericShowConstructor(Data_Show_Generic.genericShowArgsArgument(showRecord(showRecordFieldsConsNil(showOperation(dictShow)))))(NegateOperationIsSymbol))
    };
};
var showSubtractOperation = function (dictShow) {
    var showOperation1 = showOperation(dictShow);
    return {
        show: genericShow(Data_Show_Generic.genericShowConstructor(Data_Show_Generic.genericShowArgsArgument(showRecord(showRecordFieldsCons(showRecordFieldsConsNil2(showOperation1))(showOperation1))))(SubtractOperationIsSymbol))
    };
};
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
var showDivideOperation = function (dictShow) {
    var showOperation1 = showOperation(dictShow);
    return {
        show: genericShow5(Data_Show_Generic.genericShowConstructor(Data_Show_Generic.genericShowArgsArgument(showRecord(showRecordFieldsCons1(showRecordFieldsConsNil3(showOperation1))(showOperation1))))(DivideOperationIsSymbol))
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
var genericShow6 = /* #__PURE__ */ Data_Show_Generic.genericShow(genericAddOperation_);
var showAddOperation = function (dictShow) {
    return {
        show: genericShow6(Data_Show_Generic.genericShowConstructor(Data_Show_Generic.genericShowArgsArgument(showRecord(showRecordFieldsConsNil4(Data_Show.showArray(showOperation(dictShow))))))(AddOperationIsSymbol))
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
        throw new Error("Failed pattern match at Sitebender (line 253, column 1 - line 253, column 109): " + [ v.constructor.name, v1.constructor.name ]);
    };
};
var getValue = function (v) {
    if (v instanceof Data_Either.Right) {
        return map(Data_Either.Right.create)(Web_HTML_HTMLInputElement.value(v.value0));
    };
    if (v instanceof Data_Either.Left) {
        return pure(new Data_Either.Left(v.value0));
    };
    throw new Error("Failed pattern match at Sitebender (line 260, column 1 - line 260, column 76): " + [ v.constructor.name ]);
};
var getArgValue = function (v) {
    if (v instanceof Data_Maybe.Just) {
        return pure(new Data_Either.Right(v.value0));
    };
    if (v instanceof Data_Maybe.Nothing) {
        return pure(new Data_Either.Left([ "Missing argument." ]));
    };
    throw new Error("Failed pattern match at Sitebender (line 186, column 1 - line 186, column 55): " + [ v.constructor.name ]);
};
var getFromArgument = function (dictOrd) {
    return function (v) {
        return getArgValue;
    };
};

// createFromLocalStorageOp :: String -> Operation String
// createFromLocalStorageOp key = FromLocalStorageOp (FromLocalStorageOperation { key })
// createFromSessionStorageOp :: String -> Operation String
// createFromSessionStorageOp key = FromSessionStorageOp (FromSessionStorageOperation { key })
// createFromFormFieldOp
//   :: { classList :: Maybe (Array String)
//      , form :: Maybe String
//      , id :: Maybe String
//      , name :: Maybe String
//      , selector :: Maybe String
//      , tagName :: Maybe String
//      }
//   -> Operation String
// createFromFormFieldOp record = FromFormFieldOp (FromFormFieldOperation record)
// createMultiplyOp :: ∀ a. EuclideanRing a => Ord a => Array (Calculation a) -> (Calculation a)
// createMultiplyOp multipliers = MultiplyOp (MultiplyOperation { multipliers })
// createNegateOp :: ∀ a. EuclideanRing a => Ord a => Calculation a -> (Calculation a)
// createNegateOp operand = NegateOp (NegateOperation { operand })
// createSubtractOp :: ∀ a. EuclideanRing a => Ord a => Calculation a -> Calculation a -> (Calculation a)
// createSubtractOp minuend subtrahend = SubtractOp (SubtractOperation { minuend, subtrahend })
// add :: ∀ a. EuclideanRing a => Ord a => (AddOperation a) -> Maybe a -> Effect (Either Error a)
// add (AddOperation r) = (\v -> foldl (\x y -> x + (makeOperate y v)) zero r.addends)
// divide :: ∀ a. EuclideanRing a => Ord a => (DivideOperation a) -> Maybe a -> a
// divide (DivideOperation r) = (\v -> (makeCalculate r.dividend v) / (makeCalculate r.divisor v))
var get = function (dictOrd) {
    return function (v) {
        return function (v1) {
            return pure(new Data_Either.Right(v.operand));
        };
    };
};

// getFromFormField :: ∀ a. FromFormFieldOperation a -> Maybe a -> Effect (Either Error String)
// getFromFormField rec _ = do
//   w <- window
//   d <- document w
//   i <- selectFromDocument (createQuerySelector rec) d
//   getValue i
// multiply :: ∀ a. EuclideanRing a => Ord a => (MultiplyOperation a) -> Maybe a -> a
// multiply (MultiplyOperation r) = (\v -> foldl (\x y -> x * (makeCalculate y v)) one r.multipliers)
// negate :: ∀ a. EuclideanRing a => Ord a => (NegateOperation a) -> Maybe a -> a
// negate (NegateOperation r) = (\v -> Ring.negate (makeCalculate r.operand v))
// subtract :: ∀ a. EuclideanRing a => Ord a => (SubtractOperation a) -> Maybe a -> a
// subtract (SubtractOperation r) = (\v -> (makeCalculate r.minuend v) - (makeCalculate r.subtrahend v))
var makeOperate = function (dictOrd) {
    var getFromArgument1 = getFromArgument(dictOrd);
    var get1 = get(dictOrd);
    return function (v) {
        if (v instanceof FromArgumentOp) {
            return getFromArgument1(v.value0);
        };
        if (v instanceof FromConstantOp) {
            return get1(v.value0);
        };
        throw new Error("Failed pattern match at Sitebender (line 280, column 1 - line 280, column 79): " + [ v.constructor.name ]);
    };
};
var createTagNameSelector = function (v) {
    if (v instanceof Data_Maybe.Just) {
        return v.value0;
    };
    if (v instanceof Data_Maybe.Nothing) {
        return "";
    };
    throw new Error("Failed pattern match at Sitebender (line 224, column 1 - line 224, column 48): " + [ v.constructor.name ]);
};
var createNameSelector = function (v) {
    if (v instanceof Data_Maybe.Just) {
        return "[name=" + (v.value0 + "]");
    };
    if (v instanceof Data_Maybe.Nothing) {
        return "";
    };
    throw new Error("Failed pattern match at Sitebender (line 220, column 1 - line 220, column 45): " + [ v.constructor.name ]);
};
var createIdSelector = function (v) {
    if (v instanceof Data_Maybe.Just) {
        return "#" + v.value0;
    };
    if (v instanceof Data_Maybe.Nothing) {
        return "";
    };
    throw new Error("Failed pattern match at Sitebender (line 216, column 1 - line 216, column 43): " + [ v.constructor.name ]);
};
var createFromConstantOp = function (dictEuclideanRing) {
    return function (dictOrd) {
        return function (operand) {
            return new FromConstantOp({
                operand: operand
            });
        };
    };
};

// createAddOp :: ∀ a. EuclideanRing a => Ord a => Array (Operation a) -> (Operation a)
// createAddOp addends = AddOp (AddOperation { addends })
// createDivideOp :: ∀ a. EuclideanRing a => Ord a => Calculation a -> Calculation a -> (Calculation a)
// createDivideOp dividend divisor = DivideOp (DivideOperation { dividend, divisor })
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
    throw new Error("Failed pattern match at Sitebender (line 212, column 1 - line 212, column 45): " + [ v.constructor.name ]);
};

// getFromLocalStorage :: ∀ a. EuclideanRing a => Ord a => FromLocalStorageOperation String -> Maybe a -> Effect (Either Error String)
// getFromLocalStorage (FromLocalStorageOperation { key }) _ = do
//   w <- window
//   s <- localStorage w
//   i <- getItem key s
//   pure (note (Error [ "Cannot get value for `" <> key <> "` from local storage." ]) i)
// getFromSessionStorage :: ∀ a. FromSessionStorageOperation String -> Maybe a -> Effect (Either Error String)
// getFromSessionStorage (FromSessionStorageOperation { key }) _ = do
//   w <- window
//   s <- sessionStorage w
//   i <- getItem key s
//   pure (note (Error [ "Cannot get value for `" <> key <> "` from session storage." ]) i)
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
    throw new Error("Failed pattern match at Sitebender (line 207, column 1 - line 207, column 58): " + [ v.constructor.name ]);
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
export {
    FromArgumentOp,
    FromConstantOp,
    $$Error as Error,
    FromArgumentOperation,
    FromConstantOperation,
    FromFormFieldOperation,
    FromLocalStorageOperation,
    FromSessionStorageOperation,
    createFromArgumentOp,
    createFromConstantOp,
    getValue,
    makeOperate,
    genericError_,
    showError,
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
    genericOperation_,
    showOperation
};
