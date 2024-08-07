// Generated by purs version 0.15.15
import * as $foreign from "./foreign.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Ordering from "../Data.Ordering/index.js";
import * as Data_Symbol from "../Data.Symbol/index.js";
import * as Data_Unit from "../Data.Unit/index.js";
import * as Record_Unsafe from "../Record.Unsafe/index.js";
import * as Type_Proxy from "../Type.Proxy/index.js";
var ordRecord = /* #__PURE__ */ Data_Ord.ordRecord();
var topRecord = function (dict) {
    return dict.topRecord;
};
var top = function (dict) {
    return dict.top;
};
var boundedUnit = {
    top: Data_Unit.unit,
    bottom: Data_Unit.unit,
    Ord0: function () {
        return Data_Ord.ordUnit;
    }
};
var boundedRecordNil = {
    topRecord: function (v) {
        return function (v1) {
            return {};
        };
    },
    bottomRecord: function (v) {
        return function (v1) {
            return {};
        };
    },
    OrdRecord0: function () {
        return Data_Ord.ordRecordNil;
    }
};
var boundedProxy = /* #__PURE__ */ (function () {
    return {
        bottom: Type_Proxy["Proxy"].value,
        top: Type_Proxy["Proxy"].value,
        Ord0: function () {
            return Data_Ord.ordProxy;
        }
    };
})();
var boundedOrdering = /* #__PURE__ */ (function () {
    return {
        top: Data_Ordering.GT.value,
        bottom: Data_Ordering.LT.value,
        Ord0: function () {
            return Data_Ord.ordOrdering;
        }
    };
})();
var boundedNumber = {
    top: $foreign.topNumber,
    bottom: $foreign.bottomNumber,
    Ord0: function () {
        return Data_Ord.ordNumber;
    }
};
var boundedInt = {
    top: $foreign.topInt,
    bottom: $foreign.bottomInt,
    Ord0: function () {
        return Data_Ord.ordInt;
    }
};
var boundedChar = {
    top: $foreign.topChar,
    bottom: $foreign.bottomChar,
    Ord0: function () {
        return Data_Ord.ordChar;
    }
};
var boundedBoolean = {
    top: true,
    bottom: false,
    Ord0: function () {
        return Data_Ord.ordBoolean;
    }
};
var bottomRecord = function (dict) {
    return dict.bottomRecord;
};
var boundedRecord = function () {
    return function (dictBoundedRecord) {
        var ordRecord1 = ordRecord(dictBoundedRecord.OrdRecord0());
        return {
            top: topRecord(dictBoundedRecord)(Type_Proxy["Proxy"].value)(Type_Proxy["Proxy"].value),
            bottom: bottomRecord(dictBoundedRecord)(Type_Proxy["Proxy"].value)(Type_Proxy["Proxy"].value),
            Ord0: function () {
                return ordRecord1;
            }
        };
    };
};
var bottom = function (dict) {
    return dict.bottom;
};
var boundedRecordCons = function (dictIsSymbol) {
    var reflectSymbol = Data_Symbol.reflectSymbol(dictIsSymbol);
    return function (dictBounded) {
        var top1 = top(dictBounded);
        var bottom1 = bottom(dictBounded);
        var Ord0 = dictBounded.Ord0();
        return function () {
            return function () {
                return function (dictBoundedRecord) {
                    var topRecord1 = topRecord(dictBoundedRecord);
                    var bottomRecord1 = bottomRecord(dictBoundedRecord);
                    var ordRecordCons = Data_Ord.ordRecordCons(dictBoundedRecord.OrdRecord0())()(dictIsSymbol)(Ord0);
                    return {
                        topRecord: function (v) {
                            return function (rowProxy) {
                                var tail = topRecord1(Type_Proxy["Proxy"].value)(rowProxy);
                                var key = reflectSymbol(Type_Proxy["Proxy"].value);
                                var insert = Record_Unsafe.unsafeSet(key);
                                return insert(top1)(tail);
                            };
                        },
                        bottomRecord: function (v) {
                            return function (rowProxy) {
                                var tail = bottomRecord1(Type_Proxy["Proxy"].value)(rowProxy);
                                var key = reflectSymbol(Type_Proxy["Proxy"].value);
                                var insert = Record_Unsafe.unsafeSet(key);
                                return insert(bottom1)(tail);
                            };
                        },
                        OrdRecord0: function () {
                            return ordRecordCons;
                        }
                    };
                };
            };
        };
    };
};
export {
    bottom,
    top,
    bottomRecord,
    topRecord,
    boundedBoolean,
    boundedInt,
    boundedChar,
    boundedOrdering,
    boundedUnit,
    boundedNumber,
    boundedProxy,
    boundedRecordNil,
    boundedRecordCons,
    boundedRecord
};
export {
    EQ,
    GT,
    LT,
    compare
} from "../Data.Ord/index.js";
//# sourceMappingURL=index.js.map
