import * as Data_Argonaut_Core from "../Data.Argonaut.Core/index.js";
import * as Data_Argonaut_Encode_Class from "../Data.Argonaut.Encode.Class/index.js";
import * as Data_Argonaut_Encode_Combinators from "../Data.Argonaut.Encode.Combinators/index.js";

// | Encode and stringify a type in one step.
var toJsonString = function (dictEncodeJson) {
    var $3 = Data_Argonaut_Encode_Class.encodeJson(dictEncodeJson);
    return function ($4) {
        return Data_Argonaut_Core.stringify($3($4));
    };
};
export {
    toJsonString
};
export {
    encodeJson
} from "../Data.Argonaut.Encode.Class/index.js";
export {
    assoc,
    assocOptional,
    extend,
    extendOptional
} from "../Data.Argonaut.Encode.Combinators/index.js";