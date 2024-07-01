// | Provides operators for a DSL to construct `Json` values:
// |
// | ```purs
// | myJson =
// |  "key1" := value1
// |    ~> "key2" :=? value2
// |    ~>? "key3" := value3
// |    ~> jsonEmptyObject
// | ```
import * as Data_Argonaut_Encode_Class from "../Data.Argonaut.Encode.Class/index.js";
import * as Data_Argonaut_Encode_Encoders from "../Data.Argonaut.Encode.Encoders/index.js";

// | The named Encoders of the `(~>?)` operator.
var extendOptional = function (dictEncodeJson) {
    return Data_Argonaut_Encode_Encoders.extendOptional(Data_Argonaut_Encode_Class.encodeJson(dictEncodeJson));
};

// | The named Encoders of the `(~>)` operator.
var extend = function (dictEncodeJson) {
    return Data_Argonaut_Encode_Encoders.extend(Data_Argonaut_Encode_Class.encodeJson(dictEncodeJson));
};

// | The named Encoders of the `(:=?)` operator.
var assocOptional = function (dictEncodeJson) {
    return Data_Argonaut_Encode_Encoders.assocOptional(Data_Argonaut_Encode_Class.encodeJson(dictEncodeJson));
};

// | The named Encoders of the `(:=)` operator.
var assoc = function (dictEncodeJson) {
    return Data_Argonaut_Encode_Encoders.assoc(Data_Argonaut_Encode_Class.encodeJson(dictEncodeJson));
};
export {
    assoc,
    assocOptional,
    extend,
    extendOptional
};
