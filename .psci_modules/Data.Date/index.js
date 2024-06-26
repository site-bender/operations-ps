import * as $foreign from "./foreign.js";
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Apply from "../Control.Apply/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Data_Boolean from "../Data.Boolean/index.js";
import * as Data_Bounded from "../Data.Bounded/index.js";
import * as Data_Date_Component from "../Data.Date.Component/index.js";
import * as Data_Enum from "../Data.Enum/index.js";
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_EuclideanRing from "../Data.EuclideanRing/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Int from "../Data.Int/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Ordering from "../Data.Ordering/index.js";
import * as Data_Show from "../Data.Show/index.js";
import * as Data_Time_Duration from "../Data.Time.Duration/index.js";
var fromEnum = /* #__PURE__ */ Data_Enum.fromEnum(Data_Date_Component.boundedEnumMonth);
var fromJust = /* #__PURE__ */ Data_Maybe.fromJust();
var toEnum = /* #__PURE__ */ Data_Enum.toEnum(Data_Date_Component.boundedEnumWeekday);
var show = /* #__PURE__ */ Data_Show.show(Data_Date_Component.showYear);
var show1 = /* #__PURE__ */ Data_Show.show(Data_Date_Component.showMonth);
var show2 = /* #__PURE__ */ Data_Show.show(Data_Date_Component.showDay);
var fromEnum1 = /* #__PURE__ */ Data_Enum.fromEnum(Data_Date_Component.boundedEnumYear);
var mod = /* #__PURE__ */ Data_EuclideanRing.mod(Data_EuclideanRing.euclideanRingInt);
var toEnum1 = /* #__PURE__ */ Data_Enum.toEnum(Data_Date_Component.boundedEnumDay);
var eq1 = /* #__PURE__ */ Data_Eq.eq(Data_Date_Component.eqYear);
var eq2 = /* #__PURE__ */ Data_Eq.eq(Data_Date_Component.eqMonth);
var eq3 = /* #__PURE__ */ Data_Eq.eq(Data_Date_Component.eqDay);
var compare = /* #__PURE__ */ Data_Ord.compare(Data_Date_Component.ordYear);
var compare1 = /* #__PURE__ */ Data_Ord.compare(Data_Date_Component.ordMonth);
var compare2 = /* #__PURE__ */ Data_Ord.compare(Data_Date_Component.ordDay);
var succ = /* #__PURE__ */ Data_Enum.succ(Data_Date_Component.enumMonth);
var succ1 = /* #__PURE__ */ Data_Enum.succ(Data_Date_Component.enumDay);
var greaterThan = /* #__PURE__ */ Data_Ord.greaterThan(/* #__PURE__ */ Data_Maybe.ordMaybe(Data_Date_Component.ordDay));
var succ2 = /* #__PURE__ */ Data_Enum.succ(Data_Date_Component.enumYear);
var apply = /* #__PURE__ */ Control_Apply.apply(Data_Maybe.applyMaybe);
var map = /* #__PURE__ */ Data_Functor.map(Data_Maybe.functorMaybe);
var pure = /* #__PURE__ */ Control_Applicative.pure(Data_Maybe.applicativeMaybe);
var pred = /* #__PURE__ */ Data_Enum.pred(Data_Date_Component.enumMonth);
var pred1 = /* #__PURE__ */ Data_Enum.pred(Data_Date_Component.enumDay);
var pred2 = /* #__PURE__ */ Data_Enum.pred(Data_Date_Component.enumYear);
var toEnum2 = /* #__PURE__ */ Data_Enum.toEnum(Data_Date_Component.boundedEnumMonth);
var fromEnum2 = /* #__PURE__ */ Data_Enum.fromEnum(Data_Date_Component.boundedEnumDay);
var bindFlipped = /* #__PURE__ */ Control_Bind.bindFlipped(Data_Maybe.bindMaybe);
var bind = /* #__PURE__ */ Control_Bind.bind(Data_Maybe.bindMaybe);

// | A date value in the Gregorian calendar.
var $$Date = /* #__PURE__ */ (function () {
    function $$Date(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
    };
    $$Date.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return new $$Date(value0, value1, value2);
            };
        };
    };
    return $$Date;
})();

// | The year component of a date value.
var year = function (v) {
    return v.value0;
};

// | The weekday for a date value.
var weekday = function (v) {
    var n = $foreign.calcWeekday(v.value0, fromEnum(v.value1), v.value2);
    var $86 = n === 0;
    if ($86) {
        return fromJust(toEnum(7));
    };
    return fromJust(toEnum(n));
};
var showDate = {
    show: function (v) {
        return "(Date " + (show(v.value0) + (" " + (show1(v.value1) + (" " + (show2(v.value2) + ")")))));
    }
};

// | The month component of a date value.
var month = function (v) {
    return v.value1;
};

// | Checks whether a year is a leap year according to the proleptic Gregorian
// | calendar.
var isLeapYear = function (y) {
    var y$prime = fromEnum1(y);
    return mod(y$prime)(4) === 0 && (mod(y$prime)(400) === 0 || !(mod(y$prime)(100) === 0));
};

// | Get the final day of a month and year, accounting for leap years.
var lastDayOfMonth = function (y) {
    return function (m) {
        var unsafeDay = function ($154) {
            return fromJust(toEnum1($154));
        };
        if (m instanceof Data_Date_Component.January) {
            return unsafeDay(31);
        };
        if (m instanceof Data_Date_Component.February) {
            if (isLeapYear(y)) {
                return unsafeDay(29);
            };
            if (Data_Boolean.otherwise) {
                return unsafeDay(28);
            };
        };
        if (m instanceof Data_Date_Component.March) {
            return unsafeDay(31);
        };
        if (m instanceof Data_Date_Component.April) {
            return unsafeDay(30);
        };
        if (m instanceof Data_Date_Component.May) {
            return unsafeDay(31);
        };
        if (m instanceof Data_Date_Component.June) {
            return unsafeDay(30);
        };
        if (m instanceof Data_Date_Component.July) {
            return unsafeDay(31);
        };
        if (m instanceof Data_Date_Component.August) {
            return unsafeDay(31);
        };
        if (m instanceof Data_Date_Component.September) {
            return unsafeDay(30);
        };
        if (m instanceof Data_Date_Component.October) {
            return unsafeDay(31);
        };
        if (m instanceof Data_Date_Component.November) {
            return unsafeDay(30);
        };
        if (m instanceof Data_Date_Component.December) {
            return unsafeDay(31);
        };
        throw new Error("Failed pattern match at Data.Date (line 127, column 22 - line 141, column 27): " + [ m.constructor.name ]);
    };
};
var eqDate = {
    eq: function (x) {
        return function (y) {
            return eq1(x.value0)(y.value0) && eq2(x.value1)(y.value1) && eq3(x.value2)(y.value2);
        };
    }
};
var eq4 = /* #__PURE__ */ Data_Eq.eq(eqDate);
var ordDate = {
    compare: function (x) {
        return function (y) {
            var v = compare(x.value0)(y.value0);
            if (v instanceof Data_Ordering.LT) {
                return Data_Ordering.LT.value;
            };
            if (v instanceof Data_Ordering.GT) {
                return Data_Ordering.GT.value;
            };
            var v1 = compare1(x.value1)(y.value1);
            if (v1 instanceof Data_Ordering.LT) {
                return Data_Ordering.LT.value;
            };
            if (v1 instanceof Data_Ordering.GT) {
                return Data_Ordering.GT.value;
            };
            return compare2(x.value2)(y.value2);
        };
    },
    Eq0: function () {
        return eqDate;
    }
};
var enumDate = {
    succ: function (v) {
        var sm = succ(v.value1);
        var l = lastDayOfMonth(v.value0)(v.value1);
        var sd = (function () {
            var v1 = succ1(v.value2);
            var $118 = greaterThan(v1)(new Data_Maybe.Just(l));
            if ($118) {
                return Data_Maybe.Nothing.value;
            };
            return v1;
        })();
        var m$prime = (function () {
            var $119 = Data_Maybe.isNothing(sd);
            if ($119) {
                return Data_Maybe.fromMaybe(Data_Date_Component.January.value)(sm);
            };
            return v.value1;
        })();
        var y$prime = (function () {
            var $120 = Data_Maybe.isNothing(sd) && Data_Maybe.isNothing(sm);
            if ($120) {
                return succ2(v.value0);
            };
            return new Data_Maybe.Just(v.value0);
        })();
        var d$prime = (function () {
            var $121 = Data_Maybe.isNothing(sd);
            if ($121) {
                return toEnum1(1);
            };
            return sd;
        })();
        return apply(apply(map($$Date.create)(y$prime))(pure(m$prime)))(d$prime);
    },
    pred: function (v) {
        var pm = pred(v.value1);
        var pd = pred1(v.value2);
        var y$prime = (function () {
            var $126 = Data_Maybe.isNothing(pd) && Data_Maybe.isNothing(pm);
            if ($126) {
                return pred2(v.value0);
            };
            return new Data_Maybe.Just(v.value0);
        })();
        var m$prime = (function () {
            var $127 = Data_Maybe.isNothing(pd);
            if ($127) {
                return Data_Maybe.fromMaybe(Data_Date_Component.December.value)(pm);
            };
            return v.value1;
        })();
        var l = lastDayOfMonth(v.value0)(m$prime);
        var d$prime = (function () {
            var $128 = Data_Maybe.isNothing(pd);
            if ($128) {
                return new Data_Maybe.Just(l);
            };
            return pd;
        })();
        return apply(apply(map($$Date.create)(y$prime))(pure(m$prime)))(d$prime);
    },
    Ord0: function () {
        return ordDate;
    }
};
var pred3 = /* #__PURE__ */ Data_Enum.pred(enumDate);
var succ3 = /* #__PURE__ */ Data_Enum.succ(enumDate);

// | Calculates the difference between two dates, returning the result as a
// | duration.
var diff = function (dictDuration) {
    var toDuration = Data_Time_Duration.toDuration(dictDuration);
    return function (v) {
        return function (v1) {
            return toDuration($foreign.calcDiff(v.value0, fromEnum(v.value1), v.value2, v1.value0, fromEnum(v1.value1), v1.value2));
        };
    };
};

// | The day component of a date value.
var day = function (v) {
    return v.value2;
};

// | Constructs a date from year, month, and day components. The resulting date
// | components may not be identical to the input values, as the date will be
// | canonicalised according to the Gregorian calendar. For example, date
// | values for the invalid date 2016-02-31 will be corrected to 2016-03-02.
var canonicalDate = function (y) {
    return function (m) {
        return function (d) {
            var mkDate = function (y$prime) {
                return function (m$prime) {
                    return function (d$prime) {
                        return new $$Date(y$prime, fromJust(toEnum2(m$prime)), d$prime);
                    };
                };
            };
            return $foreign.canonicalDateImpl(mkDate, y, fromEnum(m), d);
        };
    };
};

// | Constructs a date from year, month, and day components. The result will be
// | `Nothing` if the provided values result in an invalid date.
var exactDate = function (y) {
    return function (m) {
        return function (d) {
            var dt = new $$Date(y, m, d);
            var $144 = eq4(canonicalDate(y)(m)(d))(dt);
            if ($144) {
                return new Data_Maybe.Just(dt);
            };
            return Data_Maybe.Nothing.value;
        };
    };
};
var boundedDate = /* #__PURE__ */ (function () {
    return {
        bottom: new $$Date(Data_Bounded.bottom(Data_Date_Component.boundedYear), Data_Bounded.bottom(Data_Date_Component.boundedMonth), Data_Bounded.bottom(Data_Date_Component.boundedDay)),
        top: new $$Date(Data_Bounded.top(Data_Date_Component.boundedYear), Data_Bounded.top(Data_Date_Component.boundedMonth), Data_Bounded.top(Data_Date_Component.boundedDay)),
        Ord0: function () {
            return ordDate;
        }
    };
})();

// | Adjusts a date with a Duration in days. The number of days must
// | already be an integer and fall within the valid range of values
// | for the Int type.
var adjust = function (v) {
    return function (date) {
        var adj = function (v1) {
            return function (v2) {
                if (v1 === 0) {
                    return new Data_Maybe.Just(v2);
                };
                var j = v1 + fromEnum2(v2.value2) | 0;
                var low = j < 1;
                var l = lastDayOfMonth(v2.value0)((function () {
                    if (low) {
                        return Data_Maybe.fromMaybe(Data_Date_Component.December.value)(pred(v2.value1));
                    };
                    return v2.value1;
                })());
                var hi = j > fromEnum2(l);
                var i$prime = (function () {
                    if (low) {
                        return j;
                    };
                    if (hi) {
                        return (j - fromEnum2(l) | 0) - 1 | 0;
                    };
                    if (Data_Boolean.otherwise) {
                        return 0;
                    };
                    throw new Error("Failed pattern match at Data.Date (line 101, column 9 - line 103, column 28): " + [  ]);
                })();
                var dt$prime = (function () {
                    if (low) {
                        return bindFlipped(pred3)(map($$Date.create(v2.value0)(v2.value1))(toEnum1(1)));
                    };
                    if (hi) {
                        return succ3(new $$Date(v2.value0, v2.value1, l));
                    };
                    if (Data_Boolean.otherwise) {
                        return map($$Date.create(v2.value0)(v2.value1))(toEnum1(j));
                    };
                    throw new Error("Failed pattern match at Data.Date (line 104, column 9 - line 106, column 48): " + [  ]);
                })();
                return bindFlipped(adj(i$prime))(dt$prime);
            };
        };
        return bind(Data_Int.fromNumber(v))(Data_Function.flip(adj)(date));
    };
};
export {
    canonicalDate,
    exactDate,
    year,
    month,
    day,
    weekday,
    diff,
    isLeapYear,
    lastDayOfMonth,
    adjust,
    eqDate,
    ordDate,
    boundedDate,
    showDate,
    enumDate
};
export {
    April,
    August,
    December,
    February,
    January,
    July,
    June,
    March,
    May,
    November,
    October,
    September,
    Friday,
    Monday,
    Saturday,
    Sunday,
    Thursday,
    Tuesday,
    Wednesday
} from "../Data.Date.Component/index.js";
