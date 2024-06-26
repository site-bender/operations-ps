import * as Control_Category from "../Control.Category/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Functor_Coproduct from "../Data.Functor.Coproduct/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
var prj = function (dict) {
    return dict.prj;
};
var injectReflexive = /* #__PURE__ */ (function () {
    return {
        inj: Control_Category.identity(Control_Category.categoryFn),
        prj: Data_Maybe.Just.create
    };
})();
var injectLeft = /* #__PURE__ */ (function () {
    return {
        inj: function ($7) {
            return Data_Functor_Coproduct.Coproduct(Data_Either.Left.create($7));
        },
        prj: Data_Functor_Coproduct.coproduct(Data_Maybe.Just.create)(Data_Function["const"](Data_Maybe.Nothing.value))
    };
})();
var inj = function (dict) {
    return dict.inj;
};
var injectRight = function (dictInject) {
    return {
        inj: (function () {
            var $8 = inj(dictInject);
            return function ($9) {
                return Data_Functor_Coproduct.Coproduct(Data_Either.Right.create($8($9)));
            };
        })(),
        prj: Data_Functor_Coproduct.coproduct(Data_Function["const"](Data_Maybe.Nothing.value))(prj(dictInject))
    };
};
export {
    inj,
    prj,
    injectReflexive,
    injectLeft,
    injectRight
};
