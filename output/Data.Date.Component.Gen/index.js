// Generated by purs version 0.15.15
import * as Control_Monad_Gen_Class from "../Control.Monad.Gen.Class/index.js";
import * as Data_Date_Component from "../Data.Date.Component/index.js";
import * as Data_Enum from "../Data.Enum/index.js";
import * as Data_Enum_Gen from "../Data.Enum.Gen/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
var fromJust = /* #__PURE__ */ Data_Maybe.fromJust();
var toEnum = /* #__PURE__ */ Data_Enum.toEnum(Data_Date_Component.boundedEnumYear);
var genYear = function (dictMonadGen) {
    return Data_Functor.map((((dictMonadGen.Monad0()).Bind1()).Apply0()).Functor0())(function ($20) {
        return fromJust(toEnum($20));
    })(Control_Monad_Gen_Class.chooseInt(dictMonadGen)(1900)(2100));
};
var genWeekday = function (dictMonadGen) {
    return Data_Enum_Gen.genBoundedEnum(dictMonadGen)(Data_Date_Component.boundedEnumWeekday);
};
var genMonth = function (dictMonadGen) {
    return Data_Enum_Gen.genBoundedEnum(dictMonadGen)(Data_Date_Component.boundedEnumMonth);
};
var genDay = function (dictMonadGen) {
    return Data_Enum_Gen.genBoundedEnum(dictMonadGen)(Data_Date_Component.boundedEnumDay);
};
export {
    genYear,
    genMonth,
    genDay,
    genWeekday
};
//# sourceMappingURL=index.js.map
