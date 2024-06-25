// Generated by purs version 0.15.15
import * as $foreign from "./foreign.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Data_Date from "../Data.Date/index.js";
import * as Data_Date_Component from "../Data.Date.Component/index.js";
import * as Data_DateTime from "../Data.DateTime/index.js";
import * as Data_DateTime_Instant from "../Data.DateTime.Instant/index.js";
import * as Data_Enum from "../Data.Enum/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Identity from "../Data.Identity/index.js";
import * as Data_Int from "../Data.Int/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Show from "../Data.Show/index.js";
import * as Data_Time from "../Data.Time/index.js";
import * as Data_Time_Component from "../Data.Time.Component/index.js";
import * as Data_Time_Duration from "../Data.Time.Duration/index.js";
import * as Foreign from "../Foreign/index.js";
var map = /* #__PURE__ */ Data_Functor.map(Data_Functor.functorFn);
var map1 = /* #__PURE__ */ Data_Functor.map(Data_Maybe.functorMaybe);
var show = /* #__PURE__ */ Data_Show.show(Data_Show.showNumber);
var fromEnum = /* #__PURE__ */ Data_Enum.fromEnum(Data_Date_Component.boundedEnumYear);
var fromEnum1 = /* #__PURE__ */ Data_Enum.fromEnum(Data_Date_Component.boundedEnumMonth);
var fromEnum2 = /* #__PURE__ */ Data_Enum.fromEnum(Data_Date_Component.boundedEnumDay);
var fromEnum3 = /* #__PURE__ */ Data_Enum.fromEnum(Data_Time_Component.boundedEnumHour);
var fromEnum4 = /* #__PURE__ */ Data_Enum.fromEnum(Data_Time_Component.boundedEnumMinute);
var fromEnum5 = /* #__PURE__ */ Data_Enum.fromEnum(Data_Time_Component.boundedEnumSecond);
var fromEnum6 = /* #__PURE__ */ Data_Enum.fromEnum(Data_Time_Component.boundedEnumMillisecond);
var compare = /* #__PURE__ */ Data_Ord.compare(Data_Ord.ordNumber);
var toUTCString = function (dt) {
    return $foreign.dateMethod("toUTCString", dt);
};
var toTimeString = function (dt) {
    return $foreign.dateMethod("toTimeString", dt);
};
var toString = function (dt) {
    return $foreign.dateMethod("toString", dt);
};
var toInstant = /* #__PURE__ */ (function () {
    return Control_Bind.composeKleisliFlipped(Data_Maybe.bindMaybe)(function ($21) {
        return Data_DateTime_Instant.instant(Data_Time_Duration.Milliseconds($21));
    })($foreign.toInstantImpl(Data_Maybe.Just.create)(Data_Maybe.Nothing.value));
})();
var toISOString = function (dt) {
    return $foreign.dateMethodEff("toISOString", dt);
};
var toDateTime = /* #__PURE__ */ map(/* #__PURE__ */ map1(Data_DateTime_Instant.toDateTime))(toInstant);
var toDateString = function (dt) {
    return $foreign.dateMethod("toDateString", dt);
};
var toDate = /* #__PURE__ */ map(/* #__PURE__ */ map1(Data_DateTime.date))(toDateTime);
var readDate = /* #__PURE__ */ Foreign.unsafeReadTagged(Data_Identity.monadIdentity)("Date");
var getUTCSeconds = function (dt) {
    return $foreign.dateMethod("getUTCSeconds", dt);
};
var getUTCMonth = function (dt) {
    return $foreign.dateMethod("getUTCMonth", dt);
};
var getUTCMinutes = function (dt) {
    return $foreign.dateMethod("getUTCMinutes", dt);
};
var getUTCMilliseconds = function (dt) {
    return $foreign.dateMethod("getUTCMilliseconds", dt);
};
var getUTCHours = function (dt) {
    return $foreign.dateMethod("getUTCHours", dt);
};
var getUTCFullYear = function (dt) {
    return $foreign.dateMethod("getUTCFullYear", dt);
};
var getUTCDay = function (dt) {
    return $foreign.dateMethod("getUTCDay", dt);
};
var getUTCDate = function (dt) {
    return $foreign.dateMethod("getUTCDate", dt);
};
var getTimezoneOffset = function (dt) {
    return $foreign.dateMethodEff("getTimezoneOffset", dt);
};
var getTime = function (dt) {
    return $foreign.dateMethod("getTime", dt);
};
var showJSDate = {
    show: function (a) {
        return "(fromTime " + (show(getTime(a)) + ")");
    }
};
var getSeconds = function (dt) {
    return $foreign.dateMethodEff("getSeconds", dt);
};
var getMonth = function (dt) {
    return $foreign.dateMethodEff("getMonth", dt);
};
var getMinutes = function (dt) {
    return $foreign.dateMethodEff("getMinutes", dt);
};
var getMilliseconds = function (dt) {
    return $foreign.dateMethodEff("getMilliseconds", dt);
};
var getHours = function (dt) {
    return $foreign.dateMethodEff("getHours", dt);
};
var getFullYear = function (dt) {
    return $foreign.dateMethodEff("getFullYear", dt);
};
var getDay = function (dt) {
    return $foreign.dateMethodEff("getDay", dt);
};
var getDate = function (dt) {
    return $foreign.dateMethodEff("getDate", dt);
};
var fromDateTime = function (v) {
    return $foreign.jsdate({
        year: Data_Int.toNumber(fromEnum(Data_Date.year(v.value0))),
        month: Data_Int.toNumber(fromEnum1(Data_Date.month(v.value0)) - 1 | 0),
        day: Data_Int.toNumber(fromEnum2(Data_Date.day(v.value0))),
        hour: Data_Int.toNumber(fromEnum3(Data_Time.hour(v.value1))),
        minute: Data_Int.toNumber(fromEnum4(Data_Time.minute(v.value1))),
        second: Data_Int.toNumber(fromEnum5(Data_Time.second(v.value1))),
        millisecond: Data_Int.toNumber(fromEnum6(Data_Time.millisecond(v.value1)))
    });
};
var eqJSDate = {
    eq: function (a) {
        return function (b) {
            return getTime(a) === getTime(b);
        };
    }
};
var ordJSDate = {
    compare: function (a) {
        return function (b) {
            return compare(getTime(a))(getTime(b));
        };
    },
    Eq0: function () {
        return eqJSDate;
    }
};
export {
    isValid,
    fromInstant,
    jsdate,
    jsdateLocal,
    now,
    parse,
    fromTime
} from "./foreign.js";
export {
    readDate,
    fromDateTime,
    toDateTime,
    toDate,
    toInstant,
    getTime,
    getUTCDate,
    getUTCDay,
    getUTCFullYear,
    getUTCHours,
    getUTCMilliseconds,
    getUTCMinutes,
    getUTCMonth,
    getUTCSeconds,
    getDate,
    getDay,
    getFullYear,
    getHours,
    getMilliseconds,
    getMinutes,
    getMonth,
    getSeconds,
    getTimezoneOffset,
    toDateString,
    toISOString,
    toString,
    toTimeString,
    toUTCString,
    eqJSDate,
    ordJSDate,
    showJSDate
};
