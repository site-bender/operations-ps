import * as Data_Lens_Iso_Newtype from "../Data.Lens.Iso.Newtype/index.js";
import * as Data_Lens_Prism_Either from "../Data.Lens.Prism.Either/index.js";
var _Newtype = /* #__PURE__ */ Data_Lens_Iso_Newtype["_Newtype"]()();

// | Prism for the `right` of a `Coproduct`.
var _Right = function (dictChoice) {
    var $11 = _Newtype(dictChoice.Profunctor0());
    var $12 = Data_Lens_Prism_Either["_Right"](dictChoice);
    return function ($13) {
        return $11($12($13));
    };
};

// | Prism for the `left` of a `Coproduct`.
var _Left = function (dictChoice) {
    var $14 = _Newtype(dictChoice.Profunctor0());
    var $15 = Data_Lens_Prism_Either["_Left"](dictChoice);
    return function ($16) {
        return $14($15($16));
    };
};
export {
    _Left,
    _Right
};
