import * as Control_Bind from "../Control.Bind/index.js";
import * as Data_Argonaut_Parser from "../Data.Argonaut.Parser/index.js";
import * as Data_Codec from "../Data.Codec/index.js";
import * as Data_Codec_Argonaut from "../Data.Codec.Argonaut/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Type_Proxy from "../Type.Proxy/index.js";
var bind = /* #__PURE__ */ Control_Bind.bind(Data_Either.bindEither);
var jsonAddOpCodec = /* #__PURE__ */ (function () {
    return Data_Codec_Argonaut.object("AddOp")(Data_Codec_Argonaut.recordProp({
        reflectSymbol: function () {
            return "leftAddend";
        }
    })()(Type_Proxy["Proxy"].value)(Data_Codec_Argonaut["int"])(Data_Codec_Argonaut.recordProp({
        reflectSymbol: function () {
            return "rightAddend";
        }
    })()(Type_Proxy["Proxy"].value)(Data_Codec_Argonaut["int"])(Data_Codec_Argonaut.record)));
})();
var decodeAddOp = /* #__PURE__ */ Data_Codec.decode(jsonAddOpCodec);
var parseAddOp = function (str) {
    return bind(Data_Argonaut_Parser.jsonParser(str))(function (json) {
        var v = decodeAddOp(json);
        if (v instanceof Data_Either.Left) {
            return new Data_Either.Left(Data_Codec_Argonaut.printJsonDecodeError(v.value0));
        };
        if (v instanceof Data_Either.Right) {
            return new Data_Either.Right(v.value0);
        };
        throw new Error("Failed pattern match at Sitebender.Json (line 29, column 3 - line 31, column 27): " + [ v.constructor.name ]);
    });
};
export {
    decodeAddOp,
    jsonAddOpCodec,
    parseAddOp
};
