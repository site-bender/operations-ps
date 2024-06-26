import * as Data_HeytingAlgebra from "../Data.HeytingAlgebra/index.js";
var heytingAlgebraRecord = /* #__PURE__ */ Data_HeytingAlgebra.heytingAlgebraRecord();
var booleanAlgebraUnit = {
    HeytingAlgebra0: function () {
        return Data_HeytingAlgebra.heytingAlgebraUnit;
    }
};
var booleanAlgebraRecordNil = {
    HeytingAlgebraRecord0: function () {
        return Data_HeytingAlgebra.heytingAlgebraRecordNil;
    }
};
var booleanAlgebraRecordCons = function (dictIsSymbol) {
    var heytingAlgebraRecordCons = Data_HeytingAlgebra.heytingAlgebraRecordCons(dictIsSymbol)();
    return function () {
        return function (dictBooleanAlgebraRecord) {
            var heytingAlgebraRecordCons1 = heytingAlgebraRecordCons(dictBooleanAlgebraRecord.HeytingAlgebraRecord0());
            return function (dictBooleanAlgebra) {
                var heytingAlgebraRecordCons2 = heytingAlgebraRecordCons1(dictBooleanAlgebra.HeytingAlgebra0());
                return {
                    HeytingAlgebraRecord0: function () {
                        return heytingAlgebraRecordCons2;
                    }
                };
            };
        };
    };
};
var booleanAlgebraRecord = function () {
    return function (dictBooleanAlgebraRecord) {
        var heytingAlgebraRecord1 = heytingAlgebraRecord(dictBooleanAlgebraRecord.HeytingAlgebraRecord0());
        return {
            HeytingAlgebra0: function () {
                return heytingAlgebraRecord1;
            }
        };
    };
};
var booleanAlgebraProxy = {
    HeytingAlgebra0: function () {
        return Data_HeytingAlgebra.heytingAlgebraProxy;
    }
};
var booleanAlgebraFn = function (dictBooleanAlgebra) {
    var heytingAlgebraFunction = Data_HeytingAlgebra.heytingAlgebraFunction(dictBooleanAlgebra.HeytingAlgebra0());
    return {
        HeytingAlgebra0: function () {
            return heytingAlgebraFunction;
        }
    };
};
var booleanAlgebraBoolean = {
    HeytingAlgebra0: function () {
        return Data_HeytingAlgebra.heytingAlgebraBoolean;
    }
};
export {
    booleanAlgebraBoolean,
    booleanAlgebraUnit,
    booleanAlgebraFn,
    booleanAlgebraRecord,
    booleanAlgebraProxy,
    booleanAlgebraRecordNil,
    booleanAlgebraRecordCons
};
export {
    conj,
    disj,
    ff,
    implies,
    not,
    tt
} from "../Data.HeytingAlgebra/index.js";
