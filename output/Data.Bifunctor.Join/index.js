// Generated by purs version 0.15.15
import * as Control_Biapplicative from "../Control.Biapplicative/index.js";
import * as Control_Biapply from "../Control.Biapply/index.js";
import * as Data_Bifunctor from "../Data.Bifunctor/index.js";
import * as Data_Show from "../Data.Show/index.js";
var Join = function (x) {
    return x;
};
var showJoin = function (dictShow) {
    var show = Data_Show.show(dictShow);
    return {
        show: function (v) {
            return "(Join " + (show(v) + ")");
        }
    };
};
var ordJoin = function (dictOrd) {
    return dictOrd;
};
var newtypeJoin = {
    Coercible0: function () {
        return undefined;
    }
};
var eqJoin = function (dictEq) {
    return dictEq;
};
var bifunctorJoin = function (dictBifunctor) {
    var bimap = Data_Bifunctor.bimap(dictBifunctor);
    return {
        map: function (f) {
            return function (v) {
                return bimap(f)(f)(v);
            };
        }
    };
};
var biapplyJoin = function (dictBiapply) {
    var biapply = Control_Biapply.biapply(dictBiapply);
    var bifunctorJoin1 = bifunctorJoin(dictBiapply.Bifunctor0());
    return {
        apply: function (v) {
            return function (v1) {
                return biapply(v)(v1);
            };
        },
        Functor0: function () {
            return bifunctorJoin1;
        }
    };
};
var biapplicativeJoin = function (dictBiapplicative) {
    var bipure = Control_Biapplicative.bipure(dictBiapplicative);
    var biapplyJoin1 = biapplyJoin(dictBiapplicative.Biapply0());
    return {
        pure: function (a) {
            return bipure(a)(a);
        },
        Apply0: function () {
            return biapplyJoin1;
        }
    };
};
export {
    Join,
    newtypeJoin,
    eqJoin,
    ordJoin,
    showJoin,
    bifunctorJoin,
    biapplyJoin,
    biapplicativeJoin
};
//# sourceMappingURL=index.js.map
