import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Control_Lazy from "../Control.Lazy/index.js";
import * as Control_Monad_Gen from "../Control.Monad.Gen/index.js";
import * as Control_Monad_Gen_Class from "../Control.Monad.Gen.Class/index.js";
import * as Data_Argonaut_Core from "../Data.Argonaut.Core/index.js";
import * as Data_Array from "../Data.Array/index.js";
import * as Data_Boolean from "../Data.Boolean/index.js";
import * as Data_Foldable from "../Data.Foldable/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_NonEmpty from "../Data.NonEmpty/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_String_Gen from "../Data.String.Gen/index.js";
import * as Data_Unfoldable from "../Data.Unfoldable/index.js";
import * as Foreign_Object from "../Foreign.Object/index.js";
var foldable1NonEmpty = /* #__PURE__ */ Data_NonEmpty.foldable1NonEmpty(Data_Foldable.foldableArray);
var min = /* #__PURE__ */ Data_Ord.min(Data_Ord.ordInt);

// | A generator for `Json` values. Especially useful for writing property-based
// | tests.
var genJson = function (dictMonadGen) {
    var Monad0 = dictMonadGen.Monad0();
    var Bind1 = Monad0.Bind1();
    var map = Data_Functor.map((Bind1.Apply0()).Functor0());
    var chooseFloat = Control_Monad_Gen_Class.chooseFloat(dictMonadGen);
    var chooseBool = Control_Monad_Gen_Class.chooseBool(dictMonadGen);
    var oneOf = Control_Monad_Gen.oneOf(dictMonadGen)(foldable1NonEmpty);
    var pure = Control_Applicative.pure(Monad0.Applicative0());
    var bind = Control_Bind.bind(Bind1);
    var bindFlipped = Control_Bind.bindFlipped(Bind1);
    var foldM = Data_Array.foldM(Monad0);
    var resize = Control_Monad_Gen_Class.resize(dictMonadGen);
    var choose = Control_Monad_Gen.choose(dictMonadGen);
    var sized = Control_Monad_Gen_Class.sized(dictMonadGen);
    return function (dictMonadRec) {
        var genUnicodeString = Data_String_Gen.genUnicodeString(dictMonadRec)(dictMonadGen);
        var unfoldable = Control_Monad_Gen.unfoldable(dictMonadRec)(dictMonadGen)(Data_Unfoldable.unfoldableArray);
        return function (dictLazy) {
            var genJString = map(Data_Argonaut_Core.fromString)(genUnicodeString);
            var genJNumber = map(Data_Argonaut_Core.fromNumber)(chooseFloat(-1000000.0)(1000000.0));
            var genJBoolean = map(Data_Argonaut_Core.fromBoolean)(chooseBool);
            var genLeaf = oneOf(new Data_NonEmpty.NonEmpty(pure(Data_Argonaut_Core.jsonNull), [ genJBoolean, genJNumber, genJString ]));
            var genJArray = map(Data_Argonaut_Core.fromArray)(unfoldable(Control_Lazy.defer(dictLazy)(function (v) {
                return genJson(dictMonadGen)(dictMonadRec)(dictLazy);
            })));
            var extendJObj = function (obj) {
                return function (k) {
                    return bind(genJson(dictMonadGen)(dictMonadRec)(dictLazy))(function (v) {
                        return pure(Data_Argonaut_Core.caseJsonObject(Data_Argonaut_Core.jsonSingletonObject(k)(v))((function () {
                            var $35 = Foreign_Object.insert(k)(v);
                            return function ($36) {
                                return Data_Argonaut_Core.fromObject($35($36));
                            };
                        })())(obj));
                    });
                };
            };
            var genJObject = bindFlipped(foldM(extendJObj)(Data_Argonaut_Core.jsonEmptyObject))(unfoldable(genUnicodeString));
            var genJson$prime = function (size) {
                if (size > 1) {
                    return resize(function (v) {
                        return v - 1 | 0;
                    })(choose(genJArray)(genJObject));
                };
                if (Data_Boolean.otherwise) {
                    return genLeaf;
                };
                throw new Error("Failed pattern match at Data.Argonaut.Gen (line 20, column 3 - line 20, column 30): " + [ size.constructor.name ]);
            };
            return resize(min(5))(sized(genJson$prime));
        };
    };
};
export {
    genJson
};
