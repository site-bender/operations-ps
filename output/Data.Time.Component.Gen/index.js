// Generated by purs version 0.15.15
import * as Data_Enum_Gen from "../Data.Enum.Gen/index.js";
import * as Data_Time_Component from "../Data.Time.Component/index.js";
var genSecond = function (dictMonadGen) {
    return Data_Enum_Gen.genBoundedEnum(dictMonadGen)(Data_Time_Component.boundedEnumSecond);
};
var genMinute = function (dictMonadGen) {
    return Data_Enum_Gen.genBoundedEnum(dictMonadGen)(Data_Time_Component.boundedEnumMinute);
};
var genMillisecond = function (dictMonadGen) {
    return Data_Enum_Gen.genBoundedEnum(dictMonadGen)(Data_Time_Component.boundedEnumMillisecond);
};
var genHour = function (dictMonadGen) {
    return Data_Enum_Gen.genBoundedEnum(dictMonadGen)(Data_Time_Component.boundedEnumHour);
};
export {
    genHour,
    genMinute,
    genSecond,
    genMillisecond
};
//# sourceMappingURL=index.js.map
