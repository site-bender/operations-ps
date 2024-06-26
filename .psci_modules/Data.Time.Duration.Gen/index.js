import * as Control_Monad_Gen_Class from "../Control.Monad.Gen.Class/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Time_Duration from "../Data.Time.Duration/index.js";

// | Generates a random `Seconds` duration, up to 10 minutes.
var genSeconds = function (dictMonadGen) {
    return Data_Functor.map((((dictMonadGen.Monad0()).Bind1()).Apply0()).Functor0())(Data_Time_Duration.Seconds)(Control_Monad_Gen_Class.chooseFloat(dictMonadGen)(0.0)(600.0));
};

// | Generates a random `Seconds` duration, up to 10 hours.
var genMinutes = function (dictMonadGen) {
    return Data_Functor.map((((dictMonadGen.Monad0()).Bind1()).Apply0()).Functor0())(Data_Time_Duration.Minutes)(Control_Monad_Gen_Class.chooseFloat(dictMonadGen)(0.0)(600.0));
};

// | Generates a random `Milliseconds` duration, up to 10 minutes.
var genMilliseconds = function (dictMonadGen) {
    return Data_Functor.map((((dictMonadGen.Monad0()).Bind1()).Apply0()).Functor0())(Data_Time_Duration.Milliseconds)(Control_Monad_Gen_Class.chooseFloat(dictMonadGen)(0.0)(600000.0));
};

// | Generates a random `Hours` duration, up to 10 days.
var genHours = function (dictMonadGen) {
    return Data_Functor.map((((dictMonadGen.Monad0()).Bind1()).Apply0()).Functor0())(Data_Time_Duration.Hours)(Control_Monad_Gen_Class.chooseFloat(dictMonadGen)(0.0)(240.0));
};

// | Generates a random `Days` duration, up to 6 weeks.
var genDays = function (dictMonadGen) {
    return Data_Functor.map((((dictMonadGen.Monad0()).Bind1()).Apply0()).Functor0())(Data_Time_Duration.Days)(Control_Monad_Gen_Class.chooseFloat(dictMonadGen)(0.0)(42.0));
};
export {
    genMilliseconds,
    genSeconds,
    genMinutes,
    genHours,
    genDays
};
