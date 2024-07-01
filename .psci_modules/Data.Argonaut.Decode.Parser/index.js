import * as Data_Argonaut_Decode_Error from "../Data.Argonaut.Decode.Error/index.js";
import * as Data_Argonaut_Parser from "../Data.Argonaut.Parser/index.js";
import * as Data_Bifunctor from "../Data.Bifunctor/index.js";

// | Attempt to parse a string as `Json`, failing with a typed error if the
// | JSON string is malformed.
var parseJson = /* #__PURE__ */ (function () {
    var $3 = Data_Bifunctor.lmap(Data_Bifunctor.bifunctorEither)(function (v) {
        return new Data_Argonaut_Decode_Error.TypeMismatch("JSON");
    });
    return function ($4) {
        return $3(Data_Argonaut_Parser.jsonParser($4));
    };
})();
export {
    parseJson
};
