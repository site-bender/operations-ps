// | This module defines functions for working with getters.
import * as Control_Category from "../Control.Category/index.js";
import * as Control_Monad_State_Class from "../Control.Monad.State.Class/index.js";
import * as Control_Semigroupoid from "../Control.Semigroupoid/index.js";
import * as Data_Lens_Types from "../Data.Lens.Types/index.js";
import * as Data_Newtype from "../Data.Newtype/index.js";
import * as Data_Profunctor_Strong from "../Data.Profunctor.Strong/index.js";
var unwrap = /* #__PURE__ */ Data_Newtype.unwrap();
var identity = /* #__PURE__ */ Control_Category.identity(Control_Category.categoryFn);
var fanout = /* #__PURE__ */ Data_Profunctor_Strong.fanout(Control_Semigroupoid.semigroupoidFn)(Data_Profunctor_Strong.strongFn);

// | View the focus of a `Getter`.
var view = function (l) {
    return unwrap(l(identity));
};

// | Synonym for `view`, flipped.
var viewOn = function (s) {
    return function (l) {
        return view(l)(s);
    };
};

// | View the focus of a `Getter` in the state of a monad.
var use = function (dictMonadState) {
    var gets = Control_Monad_State_Class.gets(dictMonadState);
    return function (p) {
        return gets(function (v) {
            return viewOn(v)(p);
        });
    };
};

// | Convert a function into a getter.
var to = function (f) {
    return function (p) {
        var $10 = unwrap(p);
        return function ($11) {
            return $10(f($11));
        };
    };
};

// | Combine two getters.
var takeBoth = function (l) {
    return function (r) {
        return to(fanout(view(l))(view(r)));
    };
};

// | View the focus of a `Getter` and its index.
var iview = function (l) {
    return unwrap(l(identity));
};

// | View the focus of a `Getter` and its index in the state of a monad.
var iuse = function (dictMonadState) {
    var gets = Control_Monad_State_Class.gets(dictMonadState);
    return function (p) {
        return gets(iview(p));
    };
};
var cloneGetter = function (g) {
    return to(view(g));
};
export {
    viewOn,
    view,
    to,
    takeBoth,
    use,
    iview,
    iuse,
    cloneGetter
};
export {
    Indexed
} from "../Data.Lens.Types/index.js";
