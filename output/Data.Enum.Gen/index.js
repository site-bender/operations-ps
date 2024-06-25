// Generated by purs version 0.15.15
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Monad_Gen from "../Control.Monad.Gen/index.js";
import * as Data_Bounded from "../Data.Bounded/index.js";
import * as Data_Enum from "../Data.Enum/index.js";
import * as Data_Foldable from "../Data.Foldable/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_NonEmpty from "../Data.NonEmpty/index.js";
import * as Data_Unfoldable1 from "../Data.Unfoldable1/index.js";
var foldable1NonEmpty = /* #__PURE__ */ Data_NonEmpty.foldable1NonEmpty(Data_Foldable.foldableArray);
var genBoundedEnum = function (dictMonadGen) {
    var elements = Control_Monad_Gen.elements(dictMonadGen)(foldable1NonEmpty);
    var pure = Control_Applicative.pure((dictMonadGen.Monad0()).Applicative0());
    return function (dictBoundedEnum) {
        var Enum1 = dictBoundedEnum.Enum1();
        var Bounded0 = dictBoundedEnum.Bounded0();
        var bottom = Data_Bounded.bottom(Bounded0);
        var v = Data_Enum.succ(Enum1)(bottom);
        if (v instanceof Data_Maybe.Just) {
            var possibilities = Data_Enum.enumFromTo(Enum1)(Data_Unfoldable1.unfoldable1Array)(v.value0)(Data_Bounded.top(Bounded0));
            return elements(new Data_NonEmpty.NonEmpty(bottom, possibilities));
        };
        if (v instanceof Data_Maybe.Nothing) {
            return pure(bottom);
        };
        throw new Error("Failed pattern match at Data.Enum.Gen (line 13, column 3 - line 18, column 18): " + [ v.constructor.name ]);
    };
};
export {
    genBoundedEnum
};
