import * as Data_Lens_Iso_Newtype from "../Data.Lens.Iso.Newtype/index.js";
import * as Data_Lens_Lens_Tuple from "../Data.Lens.Lens.Tuple/index.js";
var _Newtype = /* #__PURE__ */ Data_Lens_Iso_Newtype["_Newtype"]()();

// | Lens for the second component of a `Product`.
var _2 = function (dictStrong) {
    var $11 = _Newtype(dictStrong.Profunctor0());
    var $12 = Data_Lens_Lens_Tuple["_2"](dictStrong);
    return function ($13) {
        return $11($12($13));
    };
};

// | Lens for the first component of a `Product`.
var _1 = function (dictStrong) {
    var $14 = _Newtype(dictStrong.Profunctor0());
    var $15 = Data_Lens_Lens_Tuple["_1"](dictStrong);
    return function ($16) {
        return $14($15($16));
    };
};
export {
    _1,
    _2
};
