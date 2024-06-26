import * as Data_Function_Uncurried from "../Data.Function.Uncurried/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Halogen_VDom_DOM from "../Halogen.VDom.DOM/index.js";
import * as Halogen_VDom_Machine from "../Halogen.VDom.Machine/index.js";
import * as Halogen_VDom_Util from "../Halogen.VDom.Util/index.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
var $runtime_lazy = function (name, moduleName, init) {
    var state = 0;
    var val;
    return function (lineNumber) {
        if (state === 2) return val;
        if (state === 1) throw new ReferenceError(name + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
        state = 1;
        val = init();
        state = 2;
        return val;
    };
};
var Thunk = /* #__PURE__ */ (function () {
    function Thunk(value0, value1, value2, value3) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
    };
    Thunk.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return new Thunk(value0, value1, value2, value3);
                };
            };
        };
    };
    return Thunk;
})();
var unsafeThunkId = Unsafe_Coerce.unsafeCoerce;
var unsafeEqThunk = function (v, v1) {
    return Halogen_VDom_Util.refEq(v.value0, v1.value0) && (Halogen_VDom_Util.refEq(v.value1, v1.value1) && v.value1(v.value3, v1.value3));
};
var thunk = function (tid, eqFn, f, a) {
    return new Thunk(tid, eqFn, f, a);
};
var thunk1 = function (f, a) {
    return thunk(unsafeThunkId(f), Halogen_VDom_Util.refEq, f, a);
};
var thunk2 = /* #__PURE__ */ (function () {
    var eqFn = function (a, b) {
        return Halogen_VDom_Util.refEq(a["_1"], b["_1"]) && Halogen_VDom_Util.refEq(a["_2"], b["_2"]);
    };
    return function (f, a, b) {
        return thunk(unsafeThunkId(f), eqFn, function (v) {
            return f(v["_1"])(v["_2"]);
        }, {
            "_1": a,
            "_2": b
        });
    };
})();
var thunk3 = /* #__PURE__ */ (function () {
    var eqFn = function (a, b) {
        return Halogen_VDom_Util.refEq(a["_1"], b["_1"]) && (Halogen_VDom_Util.refEq(a["_2"], b["_2"]) && Halogen_VDom_Util.refEq(a["_3"], b["_3"]));
    };
    return function (f, a, b, c) {
        return thunk(unsafeThunkId(f), eqFn, function (v) {
            return f(v["_1"])(v["_2"])(v["_3"]);
        }, {
            "_1": a,
            "_2": b,
            "_3": c
        });
    };
})();
var thunked = function (eqFn) {
    return function (f) {
        var tid = unsafeThunkId({
            f: f
        });
        var eqFn$prime = Data_Function_Uncurried.mkFn2(eqFn);
        return function (a) {
            return thunk(tid, eqFn$prime, f, a);
        };
    };
};
var runThunk = function (v) {
    return v.value2(v.value3);
};
var mapThunk = function (k) {
    return function (v) {
        return new Thunk(v.value0, v.value1, function ($51) {
            return k(v.value2($51));
        }, v.value3);
    };
};
var hoist = mapThunk;
var functorThunk = function (dictFunctor) {
    var map = Data_Functor.map(dictFunctor);
    return {
        map: function (f) {
            return function (v) {
                return new Thunk(v.value0, v.value1, (function () {
                    var $52 = map(f);
                    return function ($53) {
                        return $52(v.value2($53));
                    };
                })(), v.value3);
            };
        }
    };
};
var buildThunk = function (toVDom) {
    var haltThunk = function (state) {
        return Halogen_VDom_Machine.halt(state.vdom);
    };
    var $lazy_patchThunk = $runtime_lazy("patchThunk", "Halogen.VDom.Thunk", function () {
        return function (state, t2) {
            var $48 = unsafeEqThunk(state.thunk, t2);
            if ($48) {
                return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(Halogen_VDom_Machine.extract(state.vdom), state, $lazy_patchThunk(112), haltThunk));
            };
            var vdom = Halogen_VDom_Machine.step(state.vdom, toVDom(runThunk(t2)));
            return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(Halogen_VDom_Machine.extract(vdom), {
                vdom: vdom,
                thunk: t2
            }, $lazy_patchThunk(115), haltThunk));
        };
    });
    var patchThunk = $lazy_patchThunk(108);
    var renderThunk = function (spec) {
        return function (t) {
            var vdom = Halogen_VDom_DOM.buildVDom(spec)(toVDom(runThunk(t)));
            return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(Halogen_VDom_Machine.extract(vdom), {
                thunk: t,
                vdom: vdom
            }, patchThunk, haltThunk));
        };
    };
    return renderThunk;
};
export {
    buildThunk,
    runThunk,
    hoist,
    mapThunk,
    thunked,
    thunk1,
    thunk2,
    thunk3,
    functorThunk
};
