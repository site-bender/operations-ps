import * as Data_Coyoneda from "../Data.Coyoneda/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
var map = /* #__PURE__ */ Data_Functor.map(Data_Coyoneda.functorCoyoneda);
var map1 = /* #__PURE__ */ Data_Functor.map(Data_Functor.functorFn);
var Initialize = /* #__PURE__ */ (function () {
    function Initialize(value0) {
        this.value0 = value0;
    };
    Initialize.create = function (value0) {
        return new Initialize(value0);
    };
    return Initialize;
})();
var Finalize = /* #__PURE__ */ (function () {
    function Finalize(value0) {
        this.value0 = value0;
    };
    Finalize.create = function (value0) {
        return new Finalize(value0);
    };
    return Finalize;
})();
var Receive = /* #__PURE__ */ (function () {
    function Receive(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Receive.create = function (value0) {
        return function (value1) {
            return new Receive(value0, value1);
        };
    };
    return Receive;
})();
var Action = /* #__PURE__ */ (function () {
    function Action(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Action.create = function (value0) {
        return function (value1) {
            return new Action(value0, value1);
        };
    };
    return Action;
})();
var Query = /* #__PURE__ */ (function () {
    function Query(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Query.create = function (value0) {
        return function (value1) {
            return new Query(value0, value1);
        };
    };
    return Query;
})();
var functorHalogenQ = {
    map: function (f) {
        return function (m) {
            if (m instanceof Initialize) {
                return new Initialize(f(m.value0));
            };
            if (m instanceof Finalize) {
                return new Finalize(f(m.value0));
            };
            if (m instanceof Receive) {
                return new Receive(m.value0, f(m.value1));
            };
            if (m instanceof Action) {
                return new Action(m.value0, f(m.value1));
            };
            if (m instanceof Query) {
                return new Query(map(f)(m.value0), map1(f)(m.value1));
            };
            throw new Error("Failed pattern match at Halogen.Query.HalogenQ (line 0, column 0 - line 0, column 0): " + [ m.constructor.name ]);
        };
    }
};
var bifunctorHalogenQ = {
    bimap: function (f) {
        return function (g) {
            return function (v) {
                if (v instanceof Initialize) {
                    return new Initialize(g(v.value0));
                };
                if (v instanceof Finalize) {
                    return new Finalize(g(v.value0));
                };
                if (v instanceof Receive) {
                    return new Receive(f(v.value0), g(v.value1));
                };
                if (v instanceof Action) {
                    return new Action(v.value0, g(v.value1));
                };
                if (v instanceof Query) {
                    return new Query(map(g)(v.value0), map1(g)(v.value1));
                };
                throw new Error("Failed pattern match at Halogen.Query.HalogenQ (line 16, column 15 - line 21, column 45): " + [ v.constructor.name ]);
            };
        };
    }
};
export {
    Initialize,
    Finalize,
    Receive,
    Action,
    Query,
    bifunctorHalogenQ,
    functorHalogenQ
};
