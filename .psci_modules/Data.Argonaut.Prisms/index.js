import * as Data_Argonaut_Core from "../Data.Argonaut.Core/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Lens_Prism from "../Data.Lens.Prism/index.js";
var _String = function (dictChoice) {
    return Data_Lens_Prism["prism$prime"](Data_Argonaut_Core.fromString)(Data_Argonaut_Core.toString)(dictChoice);
};
var _Object = function (dictChoice) {
    return Data_Lens_Prism["prism$prime"](Data_Argonaut_Core.fromObject)(Data_Argonaut_Core.toObject)(dictChoice);
};
var _Number = function (dictChoice) {
    return Data_Lens_Prism["prism$prime"](Data_Argonaut_Core.fromNumber)(Data_Argonaut_Core.toNumber)(dictChoice);
};
var _Null = function (dictChoice) {
    return Data_Lens_Prism["prism$prime"](Data_Function["const"](Data_Argonaut_Core.jsonNull))(Data_Argonaut_Core.toNull)(dictChoice);
};
var _Boolean = function (dictChoice) {
    return Data_Lens_Prism["prism$prime"](Data_Argonaut_Core.fromBoolean)(Data_Argonaut_Core.toBoolean)(dictChoice);
};
var _Array = function (dictChoice) {
    return Data_Lens_Prism["prism$prime"](Data_Argonaut_Core.fromArray)(Data_Argonaut_Core.toArray)(dictChoice);
};
export {
    _Null,
    _Boolean,
    _Number,
    _String,
    _Array,
    _Object
};
