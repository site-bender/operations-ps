import * as Control_Category from "../Control.Category/index.js";
import * as Data_Bifunctor from "../Data.Bifunctor/index.js";
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
var identity = /* #__PURE__ */ Control_Category.identity(Control_Category.categoryFn);
var map = /* #__PURE__ */ Data_Functor.map(Data_Functor.functorArray);
var map1 = /* #__PURE__ */ Data_Functor.map(Data_Tuple.functorTuple);
var Namespace = function (x) {
    return x;
};
var ElemName = function (x) {
    return x;
};

// | The core virtual-dom tree type, where `a` is the type of attributes,
// | and `w` is the type of "widgets". Widgets are machines that have complete
// | control over the lifecycle of some `DOM.Node`.
// |
// | The `Grafted` constructor and associated machinery enables `bimap`
// | fusion using a Coyoneda-like encoding.
var Text = /* #__PURE__ */ (function () {
    function Text(value0) {
        this.value0 = value0;
    };
    Text.create = function (value0) {
        return new Text(value0);
    };
    return Text;
})();

// | The core virtual-dom tree type, where `a` is the type of attributes,
// | and `w` is the type of "widgets". Widgets are machines that have complete
// | control over the lifecycle of some `DOM.Node`.
// |
// | The `Grafted` constructor and associated machinery enables `bimap`
// | fusion using a Coyoneda-like encoding.
var Elem = /* #__PURE__ */ (function () {
    function Elem(value0, value1, value2, value3) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
    };
    Elem.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return new Elem(value0, value1, value2, value3);
                };
            };
        };
    };
    return Elem;
})();

// | The core virtual-dom tree type, where `a` is the type of attributes,
// | and `w` is the type of "widgets". Widgets are machines that have complete
// | control over the lifecycle of some `DOM.Node`.
// |
// | The `Grafted` constructor and associated machinery enables `bimap`
// | fusion using a Coyoneda-like encoding.
var Keyed = /* #__PURE__ */ (function () {
    function Keyed(value0, value1, value2, value3) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
    };
    Keyed.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return new Keyed(value0, value1, value2, value3);
                };
            };
        };
    };
    return Keyed;
})();

// | The core virtual-dom tree type, where `a` is the type of attributes,
// | and `w` is the type of "widgets". Widgets are machines that have complete
// | control over the lifecycle of some `DOM.Node`.
// |
// | The `Grafted` constructor and associated machinery enables `bimap`
// | fusion using a Coyoneda-like encoding.
var Widget = /* #__PURE__ */ (function () {
    function Widget(value0) {
        this.value0 = value0;
    };
    Widget.create = function (value0) {
        return new Widget(value0);
    };
    return Widget;
})();

// | The core virtual-dom tree type, where `a` is the type of attributes,
// | and `w` is the type of "widgets". Widgets are machines that have complete
// | control over the lifecycle of some `DOM.Node`.
// |
// | The `Grafted` constructor and associated machinery enables `bimap`
// | fusion using a Coyoneda-like encoding.
var Grafted = /* #__PURE__ */ (function () {
    function Grafted(value0) {
        this.value0 = value0;
    };
    Grafted.create = function (value0) {
        return new Grafted(value0);
    };
    return Grafted;
})();
var Graft = /* #__PURE__ */ (function () {
    function Graft(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
    };
    Graft.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return new Graft(value0, value1, value2);
            };
        };
    };
    return Graft;
})();
var unGraft = function (f) {
    return function ($61) {
        return f($61);
    };
};
var ordNamespace = Data_Ord.ordString;
var ordElemName = Data_Ord.ordString;
var newtypeNamespace = {
    Coercible0: function () {
        return undefined;
    }
};
var newtypeElemName = {
    Coercible0: function () {
        return undefined;
    }
};
var graft = Unsafe_Coerce.unsafeCoerce;
var functorGraft = {
    map: function (g) {
        return unGraft(function (v) {
            return graft(new Graft(v.value0, function ($62) {
                return g(v.value1($62));
            }, v.value2));
        });
    }
};
var map2 = /* #__PURE__ */ Data_Functor.map(functorGraft);
var functorVDom = {
    map: function (v) {
        return function (v1) {
            if (v1 instanceof Text) {
                return new Text(v1.value0);
            };
            if (v1 instanceof Grafted) {
                return new Grafted(map2(v)(v1.value0));
            };
            return new Grafted(graft(new Graft(identity, v, v1)));
        };
    }
};
var eqNamespace = Data_Eq.eqString;
var eqElemName = Data_Eq.eqString;
var bifunctorGraft = {
    bimap: function (f) {
        return function (g) {
            return unGraft(function (v) {
                return graft(new Graft(function ($63) {
                    return f(v.value0($63));
                }, function ($64) {
                    return g(v.value1($64));
                }, v.value2));
            });
        };
    }
};
var bimap = /* #__PURE__ */ Data_Bifunctor.bimap(bifunctorGraft);
var bifunctorVDom = {
    bimap: function (v) {
        return function (v1) {
            return function (v2) {
                if (v2 instanceof Text) {
                    return new Text(v2.value0);
                };
                if (v2 instanceof Grafted) {
                    return new Grafted(bimap(v)(v1)(v2.value0));
                };
                return new Grafted(graft(new Graft(v, v1, v2)));
            };
        };
    }
};
var runGraft = /* #__PURE__ */ unGraft(function (v) {
    var go = function (v2) {
        if (v2 instanceof Text) {
            return new Text(v2.value0);
        };
        if (v2 instanceof Elem) {
            return new Elem(v2.value0, v2.value1, v.value0(v2.value2), map(go)(v2.value3));
        };
        if (v2 instanceof Keyed) {
            return new Keyed(v2.value0, v2.value1, v.value0(v2.value2), map(map1(go))(v2.value3));
        };
        if (v2 instanceof Widget) {
            return new Widget(v.value1(v2.value0));
        };
        if (v2 instanceof Grafted) {
            return new Grafted(bimap(v.value0)(v.value1)(v2.value0));
        };
        throw new Error("Failed pattern match at Halogen.VDom.Types (line 86, column 7 - line 86, column 27): " + [ v2.constructor.name ]);
    };
    return go(v.value2);
});

// | Replaces "widgets" in the `VDom` with the ability to turn them into other
// | `VDom` nodes.
// |
// | Using this function will fuse any `Graft`s present in the `VDom`.
var renderWidget = function (f) {
    return function (g) {
        return function (v) {
            if (v instanceof Text) {
                return new Text(v.value0);
            };
            if (v instanceof Elem) {
                return new Elem(v.value0, v.value1, f(v.value2), map(renderWidget(f)(g))(v.value3));
            };
            if (v instanceof Keyed) {
                return new Keyed(v.value0, v.value1, f(v.value2), map(map1(renderWidget(f)(g)))(v.value3));
            };
            if (v instanceof Widget) {
                return g(v.value0);
            };
            if (v instanceof Grafted) {
                return renderWidget(f)(g)(runGraft(v.value0));
            };
            throw new Error("Failed pattern match at Halogen.VDom.Types (line 48, column 20 - line 53, column 48): " + [ v.constructor.name ]);
        };
    };
};
export {
    Text,
    Elem,
    Keyed,
    Widget,
    Grafted,
    renderWidget,
    Graft,
    graft,
    unGraft,
    runGraft,
    ElemName,
    Namespace,
    functorVDom,
    bifunctorVDom,
    functorGraft,
    bifunctorGraft,
    newtypeElemName,
    eqElemName,
    ordElemName,
    newtypeNamespace,
    eqNamespace,
    ordNamespace
};
