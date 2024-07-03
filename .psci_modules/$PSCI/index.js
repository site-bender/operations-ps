import * as Data_Tuple from "../Data.Tuple/index.js";
import * as PSCI_Support from "../PSCI.Support/index.js";
import * as Sitebender from "../Sitebender/index.js";
var it = /* #__PURE__ */ (function () {
    return Sitebender.doubleton(new Data_Tuple.Tuple(2, 3));
})();
var $dollarmain = /* #__PURE__ */ PSCI_Support["eval"](/* #__PURE__ */ PSCI_Support.evalShow(Sitebender.showMinTwo))(it);
export {
    it,
    $dollarmain as $main
};
