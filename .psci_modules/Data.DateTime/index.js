import * as $foreign from "./foreign.js";
import * as Control_Apply from "../Control.Apply/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Data_Bounded from "../Data.Bounded/index.js";
import * as Data_Date from "../Data.Date/index.js";
import * as Data_Date_Component from "../Data.Date.Component/index.js";
import * as Data_Enum from "../Data.Enum/index.js";
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Ordering from "../Data.Ordering/index.js";
import * as Data_Show from "../Data.Show/index.js";
import * as Data_Time from "../Data.Time/index.js";
import * as Data_Time_Component from "../Data.Time.Component/index.js";
import * as Data_Time_Duration from "../Data.Time.Duration/index.js";
var fromEnum = /* #__PURE__ */ Data_Enum.fromEnum(Data_Date_Component.boundedEnumYear);
var fromEnum1 = /* #__PURE__ */ Data_Enum.fromEnum(Data_Date_Component.boundedEnumMonth);
var fromEnum2 = /* #__PURE__ */ Data_Enum.fromEnum(Data_Date_Component.boundedEnumDay);
var fromEnum3 = /* #__PURE__ */ Data_Enum.fromEnum(Data_Time_Component.boundedEnumHour);
var fromEnum4 = /* #__PURE__ */ Data_Enum.fromEnum(Data_Time_Component.boundedEnumMinute);
var fromEnum5 = /* #__PURE__ */ Data_Enum.fromEnum(Data_Time_Component.boundedEnumSecond);
var fromEnum6 = /* #__PURE__ */ Data_Enum.fromEnum(Data_Time_Component.boundedEnumMillisecond);
var show = /* #__PURE__ */ Data_Show.show(Data_Date.showDate);
var show1 = /* #__PURE__ */ Data_Show.show(Data_Time.showTime);
var eq = /* #__PURE__ */ Data_Eq.eq(Data_Date.eqDate);
var eq1 = /* #__PURE__ */ Data_Eq.eq(Data_Time.eqTime);
var compare = /* #__PURE__ */ Data_Ord.compare(Data_Date.ordDate);
var compare1 = /* #__PURE__ */ Data_Ord.compare(Data_Time.ordTime);
var bind = /* #__PURE__ */ Control_Bind.bind(Data_Maybe.bindMaybe);
var apply = /* #__PURE__ */ Control_Apply.apply(Data_Maybe.applyMaybe);
var map = /* #__PURE__ */ Data_Functor.map(Data_Maybe.functorMaybe);
var join = /* #__PURE__ */ Control_Bind.join(Data_Maybe.bindMaybe);
var toEnum = /* #__PURE__ */ Data_Enum.toEnum(Data_Date_Component.boundedEnumYear);
var toEnum1 = /* #__PURE__ */ Data_Enum.toEnum(Data_Date_Component.boundedEnumMonth);
var toEnum2 = /* #__PURE__ */ Data_Enum.toEnum(Data_Date_Component.boundedEnumDay);
var toEnum3 = /* #__PURE__ */ Data_Enum.toEnum(Data_Time_Component.boundedEnumHour);
var toEnum4 = /* #__PURE__ */ Data_Enum.toEnum(Data_Time_Component.boundedEnumMinute);
var toEnum5 = /* #__PURE__ */ Data_Enum.toEnum(Data_Time_Component.boundedEnumSecond);
var toEnum6 = /* #__PURE__ */ Data_Enum.toEnum(Data_Time_Component.boundedEnumMillisecond);

// | A date/time value in the Gregorian calendar/UTC time zone.
var DateTime = /* #__PURE__ */ (function () {
    function DateTime(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    DateTime.create = function (value0) {
        return function (value1) {
            return new DateTime(value0, value1);
        };
    };
    return DateTime;
})();
var toRecord = function (v) {
    return {
        year: fromEnum(Data_Date.year(v.value0)),
        month: fromEnum1(Data_Date.month(v.value0)),
        day: fromEnum2(Data_Date.day(v.value0)),
        hour: fromEnum3(Data_Time.hour(v.value1)),
        minute: fromEnum4(Data_Time.minute(v.value1)),
        second: fromEnum5(Data_Time.second(v.value1)),
        millisecond: fromEnum6(Data_Time.millisecond(v.value1))
    };
};
var time = function (v) {
    return v.value1;
};
var showDateTime = {
    show: function (v) {
        return "(DateTime " + (show(v.value0) + (" " + (show1(v.value1) + ")")));
    }
};
var modifyTimeF = function (dictFunctor) {
    var map1 = Data_Functor.map(dictFunctor);
    return function (f) {
        return function (v) {
            return map1(DateTime.create(v.value0))(f(v.value1));
        };
    };
};
var modifyTime = function (f) {
    return function (v) {
        return new DateTime(v.value0, f(v.value1));
    };
};
var modifyDateF = function (dictFunctor) {
    var map1 = Data_Functor.map(dictFunctor);
    return function (f) {
        return function (v) {
            return map1(Data_Function.flip(DateTime.create)(v.value1))(f(v.value0));
        };
    };
};
var modifyDate = function (f) {
    return function (v) {
        return new DateTime(f(v.value0), v.value1);
    };
};
var eqDateTime = {
    eq: function (x) {
        return function (y) {
            return eq(x.value0)(y.value0) && eq1(x.value1)(y.value1);
        };
    }
};
var ordDateTime = {
    compare: function (x) {
        return function (y) {
            var v = compare(x.value0)(y.value0);
            if (v instanceof Data_Ordering.LT) {
                return Data_Ordering.LT.value;
            };
            if (v instanceof Data_Ordering.GT) {
                return Data_Ordering.GT.value;
            };
            return compare1(x.value1)(y.value1);
        };
    },
    Eq0: function () {
        return eqDateTime;
    }
};

// | Calculates the difference between two date/time values, returning the
// | result as a duration.
var diff = function (dictDuration) {
    var toDuration = Data_Time_Duration.toDuration(dictDuration);
    return function (dt1) {
        return function (dt2) {
            return toDuration($foreign.calcDiff(toRecord(dt1), toRecord(dt2)));
        };
    };
};
var date = function (v) {
    return v.value0;
};
var boundedDateTime = /* #__PURE__ */ (function () {
    return {
        bottom: new DateTime(Data_Bounded.bottom(Data_Date.boundedDate), Data_Bounded.bottom(Data_Time.boundedTime)),
        top: new DateTime(Data_Bounded.top(Data_Date.boundedDate), Data_Bounded.top(Data_Time.boundedTime)),
        Ord0: function () {
            return ordDateTime;
        }
    };
})();

// | Adjusts a date/time value with a duration offset. `Nothing` is returned
// | if the resulting date would be outside of the range of valid dates.
var adjust = function (dictDuration) {
    var fromDuration = Data_Time_Duration.fromDuration(dictDuration);
    return function (d) {
        return function (dt) {
            return bind($foreign.adjustImpl(Data_Maybe.Just.create)(Data_Maybe.Nothing.value)(fromDuration(d))(toRecord(dt)))(function (rec) {
                return apply(map(DateTime.create)(join(apply(apply(map(Data_Date.exactDate)(toEnum(rec.year)))(toEnum1(rec.month)))(toEnum2(rec.day)))))(apply(apply(apply(map(Data_Time.Time.create)(toEnum3(rec.hour)))(toEnum4(rec.minute)))(toEnum5(rec.second)))(toEnum6(rec.millisecond)));
            });
        };
    };
};
export {
    DateTime,
    date,
    modifyDate,
    modifyDateF,
    time,
    modifyTime,
    modifyTimeF,
    adjust,
    diff,
    eqDateTime,
    ordDateTime,
    boundedDateTime,
    showDateTime
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
    Wednesday,
    canonicalDate,
    day,
    exactDate,
    month,
    weekday,
    year
} from "../Data.Date/index.js";
export {
    Time,
    hour,
    millisecond,
    minute,
    second,
    setHour,
    setMillisecond,
    setMinute,
    setSecond
} from "../Data.Time/index.js";
