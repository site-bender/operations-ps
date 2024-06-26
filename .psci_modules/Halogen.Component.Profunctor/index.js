import * as Data_Bifunctor from "../Data.Bifunctor/index.js";
import * as Data_Profunctor from "../Data.Profunctor/index.js";
import * as Halogen_Component from "../Halogen.Component/index.js";
import * as Halogen_Query_HalogenM from "../Halogen.Query.HalogenM/index.js";
import * as Halogen_Query_HalogenQ from "../Halogen.Query.HalogenQ/index.js";
var dimap = /* #__PURE__ */ Data_Profunctor.dimap(Data_Profunctor.profunctorFn);
var lmap = /* #__PURE__ */ Data_Bifunctor.lmap(Halogen_Query_HalogenQ.bifunctorHalogenQ);
var ProComponent = function (x) {
    return x;
};
var newtypeProComponent = {
    Coercible0: function () {
        return undefined;
    }
};
var dimapSpec = function (dictFunctor) {
    return function (f) {
        return function (g) {
            return function (spec) {
                return {
                    initialState: function ($10) {
                        return spec.initialState(f($10));
                    },
                    render: spec.render,
                    "eval": dimap(lmap(f))(Halogen_Query_HalogenM.mapOutput(g))(spec["eval"])
                };
            };
        };
    };
};
var profunctorProComponent = function (dictFunctor) {
    var dimapSpec1 = dimapSpec(dictFunctor);
    return {
        dimap: function (f) {
            return function (g) {
                return function (v) {
                    return Halogen_Component.unComponent((function () {
                        var $11 = dimapSpec1(f)(g);
                        return function ($12) {
                            return Halogen_Component.mkComponent($11($12));
                        };
                    })())(v);
                };
            };
        }
    };
};
export {
    ProComponent,
    newtypeProComponent,
    profunctorProComponent
};
