import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Apply from "../Control.Apply/index.js";
import * as Control_Lazy from "../Control.Lazy/index.js";
import * as Control_Monad_Gen from "../Control.Monad.Gen/index.js";
import * as Control_Monad_Gen_Class from "../Control.Monad.Gen.Class/index.js";
import * as Data_Argonaut_JCursor from "../Data.Argonaut.JCursor/index.js";
import * as Data_Boolean from "../Data.Boolean/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_String_Gen from "../Data.String.Gen/index.js";
var min = /* #__PURE__ */ Data_Ord.min(Data_Ord.ordInt);
var genJCursor = function (dictMonadGen) {
    var Monad0 = dictMonadGen.Monad0();
    var Apply0 = (Monad0.Bind1()).Apply0();
    var apply = Control_Apply.apply(Apply0);
    var map = Data_Functor.map(Apply0.Functor0());
    var chooseInt = Control_Monad_Gen_Class.chooseInt(dictMonadGen);
    var resize = Control_Monad_Gen_Class.resize(dictMonadGen);
    var choose = Control_Monad_Gen.choose(dictMonadGen);
    var pure = Control_Applicative.pure(Monad0.Applicative0());
    var sized = Control_Monad_Gen_Class.sized(dictMonadGen);
    return function (dictMonadRec) {
        var genUnicodeString = Data_String_Gen.genUnicodeString(dictMonadRec)(dictMonadGen);
        return function (dictLazy) {
            var defer = Control_Lazy.defer(dictLazy);
            var genIndex = apply(map(Data_Argonaut_JCursor.JIndex.create)(chooseInt(0)(1000)))(defer(function (v) {
                return genJCursor(dictMonadGen)(dictMonadRec)(dictLazy);
            }));
            var genField = apply(map(Data_Argonaut_JCursor.JField.create)(genUnicodeString))(defer(function (v) {
                return genJCursor(dictMonadGen)(dictMonadRec)(dictLazy);
            }));
            var genJCursor$prime = function (size) {
                if (size > 0) {
                    return resize(function (v) {
                        return v - 1 | 0;
                    })(choose(genField)(genIndex));
                };
                if (Data_Boolean.otherwise) {
                    return pure(Data_Argonaut_JCursor.JCursorTop.value);
                };
                throw new Error("Failed pattern match at Data.Argonaut.JCursor.Gen (line 16, column 3 - line 18, column 34): " + [ size.constructor.name ]);
            };
            return resize(min(10))(sized(genJCursor$prime));
        };
    };
};
export {
    genJCursor
};
