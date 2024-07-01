import * as Data_Argonaut_Core from "../Data.Argonaut.Core/index.js";
import * as Data_Argonaut_Decode_Class from "../Data.Argonaut.Decode.Class/index.js";
import * as Data_Argonaut_Encode_Class from "../Data.Argonaut.Encode.Class/index.js";
import * as Data_Argonaut_Parser from "../Data.Argonaut.Parser/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Show from "../Data.Show/index.js";
import * as PSCI_Support from "../PSCI.Support/index.js";
var encodeJson = /* #__PURE__ */ Data_Argonaut_Encode_Class.encodeJson(Data_Argonaut_Encode_Class.encodeJsonJString);
var seven = "{ \"operation\": \"fromConstant\", \"operand\": 7 }";
var eleven = "{ \"operation\": \"fromConstant\", \"operand\": 11 }";
var addOp = /* #__PURE__ */ (function () {
    return "{ \"operation\": \"add\", \"leftAddend\" : " + (seven + (", \"rightAddend\": " + (eleven + " }")));
})();
var myAddOp = /* #__PURE__ */ Data_Argonaut_Parser.jsonParser(addOp);
var op = /* #__PURE__ */ Data_Either.fromRight(myAddOp);
var op2 = /* #__PURE__ */ Data_Either.fromRight(/* #__PURE__ */ encodeJson("{}"))(myAddOp);
var op3 = function (dictDecodeJson) {
    return Data_Either.fromRight(Data_Argonaut_Decode_Class.decodeJson(dictDecodeJson)(Data_Either.fromRight(encodeJson("{}"))(myAddOp)));
};
var op4 = /* #__PURE__ */ Data_Either.fromRight(/* #__PURE__ */ encodeJson("{}"))(/* #__PURE__ */ Data_Argonaut_Decode_Class.decodeJson(Data_Argonaut_Decode_Class.decodeJsonJson)(/* #__PURE__ */ Data_Either.fromRight(/* #__PURE__ */ encodeJson("{}"))(myAddOp)));
var op5 = function (dictDecodeJson) {
    return Data_Argonaut_Decode_Class.decodeJson(dictDecodeJson)(op4);
};
var op6 = /* #__PURE__ */ Data_Either.fromRight(/* #__PURE__ */ encodeJson("{}"))(/* #__PURE__ */ op5(Data_Argonaut_Decode_Class.decodeJsonJson));
var it = /* #__PURE__ */ Data_Argonaut_Core.stringify(op6);
var $dollarmain = /* #__PURE__ */ PSCI_Support["eval"](/* #__PURE__ */ PSCI_Support.evalShow(Data_Show.showString))(it);
export {
    seven,
    eleven,
    addOp,
    myAddOp,
    op,
    op2,
    op3,
    op4,
    op5,
    op6,
    it,
    $dollarmain as $main
};
