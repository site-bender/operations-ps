// Generated by purs version 0.15.15
import * as $foreign from "./foreign.js";
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Apply from "../Control.Apply/index.js";
import * as Control_Category from "../Control.Category/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Type_Proxy from "../Type.Proxy/index.js";
var identity = /* #__PURE__ */ Control_Category.identity(Control_Category.categoryFn);
var discard = function (dict) {
    return dict.discard;
};
var bindProxy = {
    bind: function (v) {
        return function (v1) {
            return Type_Proxy["Proxy"].value;
        };
    },
    Apply0: function () {
        return Control_Apply.applyProxy;
    }
};
var bindFn = {
    bind: function (m) {
        return function (f) {
            return function (x) {
                return f(m(x))(x);
            };
        };
    },
    Apply0: function () {
        return Control_Apply.applyFn;
    }
};
var bindArray = {
    bind: $foreign.arrayBind,
    Apply0: function () {
        return Control_Apply.applyArray;
    }
};
var bind = function (dict) {
    return dict.bind;
};
var bindFlipped = function (dictBind) {
    return Data_Function.flip(bind(dictBind));
};
var composeKleisliFlipped = function (dictBind) {
    var bindFlipped1 = bindFlipped(dictBind);
    return function (f) {
        return function (g) {
            return function (a) {
                return bindFlipped1(f)(g(a));
            };
        };
    };
};
var composeKleisli = function (dictBind) {
    var bind1 = bind(dictBind);
    return function (f) {
        return function (g) {
            return function (a) {
                return bind1(f(a))(g);
            };
        };
    };
};
var discardProxy = {
    discard: function (dictBind) {
        return bind(dictBind);
    }
};
var discardUnit = {
    discard: function (dictBind) {
        return bind(dictBind);
    }
};
var ifM = function (dictBind) {
    var bind1 = bind(dictBind);
    return function (cond) {
        return function (t) {
            return function (f) {
                return bind1(cond)(function (cond$prime) {
                    if (cond$prime) {
                        return t;
                    };
                    return f;
                });
            };
        };
    };
};
var join = function (dictBind) {
    var bind1 = bind(dictBind);
    return function (m) {
        return bind1(m)(identity);
    };
};
export {
    bind,
    bindFlipped,
    discard,
    join,
    composeKleisli,
    composeKleisliFlipped,
    ifM,
    bindFn,
    bindArray,
    bindProxy,
    discardUnit,
    discardProxy
};
export {
    liftA1,
    pure,
    unless,
    when
} from "../Control.Applicative/index.js";
export {
    apply
} from "../Control.Apply/index.js";
export {
    map,
    void
} from "../Data.Functor/index.js";
//# sourceMappingURL=index.js.map
