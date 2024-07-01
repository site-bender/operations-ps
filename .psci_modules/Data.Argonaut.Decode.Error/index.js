// | Originally implemented in:
// | https://github.com/garyb/purescript-codec-argonaut
import * as Data_Argonaut_Core from "../Data.Argonaut.Core/index.js";
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Generic_Rep from "../Data.Generic.Rep/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Ordering from "../Data.Ordering/index.js";
import * as Data_Show from "../Data.Show/index.js";
var show = /* #__PURE__ */ Data_Show.show(Data_Show.showString);
var show1 = /* #__PURE__ */ Data_Show.show(Data_Show.showInt);
var eq1 = /* #__PURE__ */ Data_Eq.eq(Data_Argonaut_Core.eqJson);
var compare = /* #__PURE__ */ Data_Ord.compare(Data_Ord.ordString);
var compare1 = /* #__PURE__ */ Data_Ord.compare(Data_Argonaut_Core.ordJson);
var compare2 = /* #__PURE__ */ Data_Ord.compare(Data_Ord.ordInt);

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
        throw new Error("Failed pattern match at Data.Argonaut.Decode.Error (line 24, column 10 - line 30, column 35): " + [ v.constructor.name ]);
    }
};

// | Prints a `JsonDecodeError` as a readable error message.
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
            return "  At object key '" + (v.value0 + ("':\x0a" + go(v.value1)));
        };
        if (v instanceof Named) {
            return "  Under '" + (v.value0 + ("':\x0a" + go(v.value1)));
        };
        if (v instanceof MissingValue) {
            return "  No value was found.";
        };
        throw new Error("Failed pattern match at Data.Argonaut.Decode.Error (line 37, column 8 - line 43, column 44): " + [ v.constructor.name ]);
    };
    return "An error occurred while decoding a JSON value:\x0a" + go(err);
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
        throw new Error("Failed pattern match at Data.Argonaut.Decode.Error (line 21, column 1 - line 21, column 68): " + [ x.constructor.name ]);
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
        throw new Error("Failed pattern match at Data.Argonaut.Decode.Error (line 21, column 1 - line 21, column 68): " + [ x.constructor.name ]);
    }
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
            throw new Error("Failed pattern match at Data.Argonaut.Decode.Error (line 0, column 0 - line 0, column 0): " + [ x.constructor.name, y.constructor.name ]);
        };
    },
    Eq0: function () {
        return eqJsonDecodeError;
    }
};
export {
    TypeMismatch,
    UnexpectedValue,
    AtIndex,
    AtKey,
    Named,
    MissingValue,
    printJsonDecodeError,
    eqJsonDecodeError,
    ordJsonDecodeError,
    genericJsonDecodeError,
    showJsonDecodeError
};
