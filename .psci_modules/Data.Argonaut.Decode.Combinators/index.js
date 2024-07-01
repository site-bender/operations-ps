import * as Data_Argonaut_Decode_Class from "../Data.Argonaut.Decode.Class/index.js";
import * as Data_Argonaut_Decode_Decoders from "../Data.Argonaut.Decode.Decoders/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
var map = /* #__PURE__ */ Data_Functor.map(Data_Either.functorEither);

// | Attempt to get the value for a given key on an `Object Json`.
// |
// | The result will be `Right Nothing` if the key and value are not present,
// | or if the key is present and the value is `null`.
// |
// | Use this accessor if the key and value are optional in your object.
// | If the key and value are mandatory, use `getField` (`.:`) instead.
var getFieldOptional$prime = function (dictDecodeJson) {
    return Data_Argonaut_Decode_Decoders["getFieldOptional$prime"](Data_Argonaut_Decode_Class.decodeJson(dictDecodeJson));
};

// | Attempt to get the value for a given key on an `Object Json`.
// |
// | The result will be `Right Nothing` if the key and value are not present,
// | but will fail if the key is present but the value cannot be converted to the right type.
// |
// | This function will treat `null` as a value and attempt to decode it into your desired type.
// | If you would like to treat `null` values the same as absent values, use
// | `getFieldOptional'` (`.:?`) instead.
var getFieldOptional = function (dictDecodeJson) {
    return Data_Argonaut_Decode_Decoders.getFieldOptional(Data_Argonaut_Decode_Class.decodeJson(dictDecodeJson));
};

// | Attempt to get the value for a given key on an `Object Json`.
// |
// | Use this accessor if the key and value *must* be present in your object.
// | If the key and value are optional, use `getFieldOptional'` (`.:?`) instead.
var getField = function (dictDecodeJson) {
    return Data_Argonaut_Decode_Decoders.getField(Data_Argonaut_Decode_Class.decodeJson(dictDecodeJson));
};

// | Helper for use in combination with `.:?` to provide default values for optional
// | `Object Json` fields.
// |
// | Example usage:
// | ```purs
// | newtype MyType = MyType
// |   { foo :: String
// |   , bar :: Maybe Int
// |   , baz :: Boolean
// |   }
// |
// | instance decodeJsonMyType :: DecodeJson MyType where
// |   decodeJson json = do
// |     x <- decodeJson json
// |     foo <- x .: "foo" -- mandatory field
// |     bar <- x .:? "bar" -- optional field
// |     baz <- x .:? "baz" .!= false -- optional field with default value of `false`
// |     pure $ MyType { foo, bar, baz }
// | ```
var defaultField = function (parser) {
    return function ($$default) {
        return map(Data_Maybe.fromMaybe($$default))(parser);
    };
};
export {
    getField,
    getFieldOptional,
    getFieldOptional$prime,
    defaultField
};
