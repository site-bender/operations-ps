// Generated by purs version 0.15.15
import * as Control_Biapply from "../Control.Biapply/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
var bipure = function (dict) {
    return dict.bipure;
};
var biapplicativeTuple = /* #__PURE__ */ (function () {
    return {
        bipure: Data_Tuple.Tuple.create,
        Biapply0: function () {
            return Control_Biapply.biapplyTuple;
        }
    };
})();
export {
    bipure,
    biapplicativeTuple
};
//# sourceMappingURL=index.js.map
