import * as Data_Boolean from "../Data.Boolean/index.js";
import * as Data_Foldable from "../Data.Foldable/index.js";
import * as Data_Map_Internal from "../Data.Map.Internal/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Monoid_Alternate from "../Data.Monoid.Alternate/index.js";
import * as Data_Newtype from "../Data.Newtype/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Symbol from "../Data.Symbol/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
import * as Halogen_Data_OrdBox from "../Halogen.Data.OrdBox/index.js";
var un = /* #__PURE__ */ Data_Newtype.un();
var ordTuple = /* #__PURE__ */ Data_Tuple.ordTuple(Data_Ord.ordString)(Halogen_Data_OrdBox.ordOrdBox);
var foldSubmap = /* #__PURE__ */ Data_Map_Internal.foldSubmap(ordTuple);
var pop1 = /* #__PURE__ */ Data_Map_Internal.pop(ordTuple);
var lookup1 = /* #__PURE__ */ Data_Map_Internal.lookup(ordTuple);
var insert1 = /* #__PURE__ */ Data_Map_Internal.insert(ordTuple);
var SlotStorage = function (x) {
    return x;
};
var slots = function () {
    return function (dictIsSymbol) {
        var reflectSymbol = Data_Symbol.reflectSymbol(dictIsSymbol);
        return function (dictOrd) {
            var foldSubmap1 = foldSubmap(Data_Monoid_Alternate.monoidAlternate(Data_Map_Internal.plusMap(dictOrd)));
            return function (sym) {
                return function (v) {
                    var key = reflectSymbol(sym);
                    var go = function (v1) {
                        return function (val) {
                            if (key === v1.value0) {
                                return Data_Map_Internal.singleton(Halogen_Data_OrdBox.unOrdBox(v1.value1))(val);
                            };
                            if (Data_Boolean.otherwise) {
                                return Data_Map_Internal.empty;
                            };
                            throw new Error("Failed pattern match at Halogen.Data.Slot (line 121, column 3 - line 123, column 38): " + [ v1.constructor.name, val.constructor.name ]);
                        };
                    };
                    return un(Data_Monoid_Alternate.Alternate)(foldSubmap1(Data_Maybe.Nothing.value)(Data_Maybe.Nothing.value)(go)(v));
                };
            };
        };
    };
};
var pop = function () {
    return function (dictIsSymbol) {
        var reflectSymbol = Data_Symbol.reflectSymbol(dictIsSymbol);
        return function (dictOrd) {
            var mkOrdBox = Halogen_Data_OrdBox.mkOrdBox(dictOrd);
            return function (sym) {
                return function (key) {
                    return function (v) {
                        return pop1(new Data_Tuple.Tuple(reflectSymbol(sym), mkOrdBox(key)))(v);
                    };
                };
            };
        };
    };
};
var lookup = function () {
    return function (dictIsSymbol) {
        var reflectSymbol = Data_Symbol.reflectSymbol(dictIsSymbol);
        return function (dictOrd) {
            var mkOrdBox = Halogen_Data_OrdBox.mkOrdBox(dictOrd);
            return function (sym) {
                return function (key) {
                    return function (v) {
                        return lookup1(new Data_Tuple.Tuple(reflectSymbol(sym), mkOrdBox(key)))(v);
                    };
                };
            };
        };
    };
};
var insert = function () {
    return function (dictIsSymbol) {
        var reflectSymbol = Data_Symbol.reflectSymbol(dictIsSymbol);
        return function (dictOrd) {
            var mkOrdBox = Halogen_Data_OrdBox.mkOrdBox(dictOrd);
            return function (sym) {
                return function (key) {
                    return function (val) {
                        return function (v) {
                            return insert1(new Data_Tuple.Tuple(reflectSymbol(sym), mkOrdBox(key)))(val)(v);
                        };
                    };
                };
            };
        };
    };
};
var foreachSlot = function (dictApplicative) {
    var traverse_ = Data_Foldable.traverse_(dictApplicative)(Data_Map_Internal.foldableMap);
    return function (v) {
        return function (k) {
            return traverse_(function ($54) {
                return k($54);
            })(v);
        };
    };
};
var empty = Data_Map_Internal.empty;
export {
    empty,
    lookup,
    insert,
    pop,
    slots,
    foreachSlot
};
