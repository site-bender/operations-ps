import * as Data_Array from "../Data.Array/index.js";
import * as Data_Boolean from "../Data.Boolean/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Nullable from "../Data.Nullable/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
import * as Halogen_VDom_Machine from "../Halogen.VDom.Machine/index.js";
import * as Halogen_VDom_Types from "../Halogen.VDom.Types/index.js";
import * as Halogen_VDom_Util from "../Halogen.VDom.Util/index.js";
import * as Web_DOM_Element from "../Web.DOM.Element/index.js";
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

// | Widget machines recursively reference the configured spec to potentially
// | enable recursive trees of Widgets.
var VDomSpec = function (x) {
    return x;
};
var haltWidget = function (v) {
    return Halogen_VDom_Machine.halt(v.widget);
};
var $lazy_patchWidget = /* #__PURE__ */ $runtime_lazy("patchWidget", "Halogen.VDom.DOM", function () {
    return function (state, vdom) {
        if (vdom instanceof Halogen_VDom_Types.Grafted) {
            return $lazy_patchWidget(291)(state, Halogen_VDom_Types.runGraft(vdom.value0));
        };
        if (vdom instanceof Halogen_VDom_Types.Widget) {
            var res = Halogen_VDom_Machine.step(state.widget, vdom.value0);
            var res$prime = Halogen_VDom_Machine.unStep(function (v) {
                return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(v.value0, {
                    build: state.build,
                    widget: res
                }, $lazy_patchWidget(296), haltWidget));
            })(res);
            return res$prime;
        };
        haltWidget(state);
        return state.build(vdom);
    };
});
var patchWidget = /* #__PURE__ */ $lazy_patchWidget(286);
var haltText = function (v) {
    var parent = Halogen_VDom_Util.parentNode(v.node);
    return Halogen_VDom_Util.removeChild(v.node, parent);
};
var $lazy_patchText = /* #__PURE__ */ $runtime_lazy("patchText", "Halogen.VDom.DOM", function () {
    return function (state, vdom) {
        if (vdom instanceof Halogen_VDom_Types.Grafted) {
            return $lazy_patchText(82)(state, Halogen_VDom_Types.runGraft(vdom.value0));
        };
        if (vdom instanceof Halogen_VDom_Types.Text) {
            if (state.value === vdom.value0) {
                return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(state.node, state, $lazy_patchText(85), haltText));
            };
            if (Data_Boolean.otherwise) {
                var nextState = {
                    build: state.build,
                    node: state.node,
                    value: vdom.value0
                };
                Halogen_VDom_Util.setTextContent(vdom.value0, state.node);
                return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(state.node, nextState, $lazy_patchText(89), haltText));
            };
        };
        haltText(state);
        return state.build(vdom);
    };
});
var patchText = /* #__PURE__ */ $lazy_patchText(77);
var haltKeyed = function (v) {
    var parent = Halogen_VDom_Util.parentNode(v.node);
    Halogen_VDom_Util.removeChild(v.node, parent);
    Halogen_VDom_Util.forInE(v.children, function (v1, s) {
        return Halogen_VDom_Machine.halt(s);
    });
    return Halogen_VDom_Machine.halt(v.attrs);
};
var haltElem = function (v) {
    var parent = Halogen_VDom_Util.parentNode(v.node);
    Halogen_VDom_Util.removeChild(v.node, parent);
    Halogen_VDom_Util.forEachE(v.children, Halogen_VDom_Machine.halt);
    return Halogen_VDom_Machine.halt(v.attrs);
};
var eqElemSpec = function (ns1, v, ns2, v1) {
    var $63 = v === v1;
    if ($63) {
        if (ns1 instanceof Data_Maybe.Just && (ns2 instanceof Data_Maybe.Just && ns1.value0 === ns2.value0)) {
            return true;
        };
        if (ns1 instanceof Data_Maybe.Nothing && ns2 instanceof Data_Maybe.Nothing) {
            return true;
        };
        return false;
    };
    return false;
};
var $lazy_patchElem = /* #__PURE__ */ $runtime_lazy("patchElem", "Halogen.VDom.DOM", function () {
    return function (state, vdom) {
        if (vdom instanceof Halogen_VDom_Types.Grafted) {
            return $lazy_patchElem(135)(state, Halogen_VDom_Types.runGraft(vdom.value0));
        };
        if (vdom instanceof Halogen_VDom_Types.Elem && eqElemSpec(state.ns, state.name, vdom.value0, vdom.value1)) {
            var v = Data_Array.length(vdom.value3);
            var v1 = Data_Array.length(state.children);
            if (v1 === 0 && v === 0) {
                var attrs2 = Halogen_VDom_Machine.step(state.attrs, vdom.value2);
                var nextState = {
                    build: state.build,
                    node: state.node,
                    attrs: attrs2,
                    ns: vdom.value0,
                    name: vdom.value1,
                    children: state.children
                };
                return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(state.node, nextState, $lazy_patchElem(149), haltElem));
            };
            var onThis = function (v2, s) {
                return Halogen_VDom_Machine.halt(s);
            };
            var onThese = function (ix, s, v2) {
                var res = Halogen_VDom_Machine.step(s, v2);
                Halogen_VDom_Util.insertChildIx(ix, Halogen_VDom_Machine.extract(res), state.node);
                return res;
            };
            var onThat = function (ix, v2) {
                var res = state.build(v2);
                Halogen_VDom_Util.insertChildIx(ix, Halogen_VDom_Machine.extract(res), state.node);
                return res;
            };
            var children2 = Halogen_VDom_Util.diffWithIxE(state.children, vdom.value3, onThese, onThis, onThat);
            var attrs2 = Halogen_VDom_Machine.step(state.attrs, vdom.value2);
            var nextState = {
                build: state.build,
                node: state.node,
                attrs: attrs2,
                ns: vdom.value0,
                name: vdom.value1,
                children: children2
            };
            return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(state.node, nextState, $lazy_patchElem(172), haltElem));
        };
        haltElem(state);
        return state.build(vdom);
    };
});
var patchElem = /* #__PURE__ */ $lazy_patchElem(130);
var $lazy_patchKeyed = /* #__PURE__ */ $runtime_lazy("patchKeyed", "Halogen.VDom.DOM", function () {
    return function (state, vdom) {
        if (vdom instanceof Halogen_VDom_Types.Grafted) {
            return $lazy_patchKeyed(222)(state, Halogen_VDom_Types.runGraft(vdom.value0));
        };
        if (vdom instanceof Halogen_VDom_Types.Keyed && eqElemSpec(state.ns, state.name, vdom.value0, vdom.value1)) {
            var v = Data_Array.length(vdom.value3);
            if (state.length === 0 && v === 0) {
                var attrs2 = Halogen_VDom_Machine.step(state.attrs, vdom.value2);
                var nextState = {
                    build: state.build,
                    node: state.node,
                    attrs: attrs2,
                    ns: vdom.value0,
                    name: vdom.value1,
                    children: state.children,
                    length: 0
                };
                return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(state.node, nextState, $lazy_patchKeyed(237), haltKeyed));
            };
            var onThis = function (v2, s) {
                return Halogen_VDom_Machine.halt(s);
            };
            var onThese = function (v2, ix$prime, s, v3) {
                var res = Halogen_VDom_Machine.step(s, v3.value1);
                Halogen_VDom_Util.insertChildIx(ix$prime, Halogen_VDom_Machine.extract(res), state.node);
                return res;
            };
            var onThat = function (v2, ix, v3) {
                var res = state.build(v3.value1);
                Halogen_VDom_Util.insertChildIx(ix, Halogen_VDom_Machine.extract(res), state.node);
                return res;
            };
            var children2 = Halogen_VDom_Util.diffWithKeyAndIxE(state.children, vdom.value3, Data_Tuple.fst, onThese, onThis, onThat);
            var attrs2 = Halogen_VDom_Machine.step(state.attrs, vdom.value2);
            var nextState = {
                build: state.build,
                node: state.node,
                attrs: attrs2,
                ns: vdom.value0,
                name: vdom.value1,
                children: children2,
                length: v
            };
            return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(state.node, nextState, $lazy_patchKeyed(261), haltKeyed));
        };
        haltKeyed(state);
        return state.build(vdom);
    };
});
var patchKeyed = /* #__PURE__ */ $lazy_patchKeyed(217);
var buildWidget = function (v, build, w) {
    var res = v.buildWidget(v)(w);
    var res$prime = Halogen_VDom_Machine.unStep(function (v1) {
        return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(v1.value0, {
            build: build,
            widget: res
        }, patchWidget, haltWidget));
    })(res);
    return res$prime;
};
var buildText = function (v, build, s) {
    var node = Halogen_VDom_Util.createTextNode(s, v.document);
    var state = {
        build: build,
        node: node,
        value: s
    };
    return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(node, state, patchText, haltText));
};
var buildKeyed = function (v, build, ns1, name1, as1, ch1) {
    var el = Halogen_VDom_Util.createElement(Data_Nullable.toNullable(ns1), name1, v.document);
    var node = Web_DOM_Element.toNode(el);
    var onChild = function (v1, ix, v2) {
        var res = build(v2.value1);
        Halogen_VDom_Util.insertChildIx(ix, Halogen_VDom_Machine.extract(res), node);
        return res;
    };
    var children = Halogen_VDom_Util.strMapWithIxE(ch1, Data_Tuple.fst, onChild);
    var attrs = v.buildAttributes(el)(as1);
    var state = {
        build: build,
        node: node,
        attrs: attrs,
        ns: ns1,
        name: name1,
        children: children,
        length: Data_Array.length(ch1)
    };
    return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(node, state, patchKeyed, haltKeyed));
};
var buildElem = function (v, build, ns1, name1, as1, ch1) {
    var el = Halogen_VDom_Util.createElement(Data_Nullable.toNullable(ns1), name1, v.document);
    var node = Web_DOM_Element.toNode(el);
    var onChild = function (ix, child) {
        var res = build(child);
        Halogen_VDom_Util.insertChildIx(ix, Halogen_VDom_Machine.extract(res), node);
        return res;
    };
    var children = Halogen_VDom_Util.forE(ch1, onChild);
    var attrs = v.buildAttributes(el)(as1);
    var state = {
        build: build,
        node: node,
        attrs: attrs,
        ns: ns1,
        name: name1,
        children: children
    };
    return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(node, state, patchElem, haltElem));
};

// | Starts an initial `VDom` machine by providing a `VDomSpec`.
// |
// | ```purescript
// | main = do
// |   machine1 ← buildVDom spec vdomTree1
// |   machine2 ← Machine.step machine1 vdomTree2
// |   machine3 ← Machine.step machine2 vdomTree3
// |   ...
// | ````
var buildVDom = function (spec) {
    var $lazy_build = $runtime_lazy("build", "Halogen.VDom.DOM", function () {
        return function (v) {
            if (v instanceof Halogen_VDom_Types.Text) {
                return buildText(spec, $lazy_build(59), v.value0);
            };
            if (v instanceof Halogen_VDom_Types.Elem) {
                return buildElem(spec, $lazy_build(60), v.value0, v.value1, v.value2, v.value3);
            };
            if (v instanceof Halogen_VDom_Types.Keyed) {
                return buildKeyed(spec, $lazy_build(61), v.value0, v.value1, v.value2, v.value3);
            };
            if (v instanceof Halogen_VDom_Types.Widget) {
                return buildWidget(spec, $lazy_build(62), v.value0);
            };
            if (v instanceof Halogen_VDom_Types.Grafted) {
                return $lazy_build(63)(Halogen_VDom_Types.runGraft(v.value0));
            };
            throw new Error("Failed pattern match at Halogen.VDom.DOM (line 58, column 27 - line 63, column 52): " + [ v.constructor.name ]);
        };
    });
    var build = $lazy_build(58);
    return build;
};
export {
    VDomSpec,
    buildVDom,
    buildText,
    buildElem,
    buildKeyed,
    buildWidget
};
