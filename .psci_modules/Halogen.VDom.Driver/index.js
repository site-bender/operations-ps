import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Control_Category from "../Control.Category/index.js";
import * as Data_Foldable from "../Data.Foldable/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_HeytingAlgebra from "../Data.HeytingAlgebra/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Newtype from "../Data.Newtype/index.js";
import * as Data_Unit from "../Data.Unit/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect_Aff from "../Effect.Aff/index.js";
import * as Effect_Class from "../Effect.Class/index.js";
import * as Effect_Ref from "../Effect.Ref/index.js";
import * as Halogen_Aff_Driver from "../Halogen.Aff.Driver/index.js";
import * as Halogen_Aff_Driver_State from "../Halogen.Aff.Driver.State/index.js";
import * as Halogen_Component from "../Halogen.Component/index.js";
import * as Halogen_VDom_DOM from "../Halogen.VDom.DOM/index.js";
import * as Halogen_VDom_DOM_Prop from "../Halogen.VDom.DOM.Prop/index.js";
import * as Halogen_VDom_Machine from "../Halogen.VDom.Machine/index.js";
import * as Halogen_VDom_Thunk from "../Halogen.VDom.Thunk/index.js";
import * as Unsafe_Reference from "../Unsafe.Reference/index.js";
import * as Web_DOM_Node from "../Web.DOM.Node/index.js";
import * as Web_HTML from "../Web.HTML/index.js";
import * as Web_HTML_HTMLDocument from "../Web.HTML.HTMLDocument/index.js";
import * as Web_HTML_HTMLElement from "../Web.HTML.HTMLElement/index.js";
import * as Web_HTML_Window from "../Web.HTML.Window/index.js";
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
var $$void = /* #__PURE__ */ Data_Functor["void"](Effect.functorEffect);
var pure = /* #__PURE__ */ Control_Applicative.pure(Effect.applicativeEffect);
var traverse_ = /* #__PURE__ */ Data_Foldable.traverse_(Effect.applicativeEffect)(Data_Foldable.foldableMaybe);
var unwrap = /* #__PURE__ */ Data_Newtype.unwrap();
var when = /* #__PURE__ */ Control_Applicative.when(Effect.applicativeEffect);
var not = /* #__PURE__ */ Data_HeytingAlgebra.not(/* #__PURE__ */ Data_HeytingAlgebra.heytingAlgebraFunction(/* #__PURE__ */ Data_HeytingAlgebra.heytingAlgebraFunction(Data_HeytingAlgebra.heytingAlgebraBoolean)));
var identity = /* #__PURE__ */ Control_Category.identity(Control_Category.categoryFn);
var bind1 = /* #__PURE__ */ Control_Bind.bind(Effect_Aff.bindAff);
var liftEffect = /* #__PURE__ */ Effect_Class.liftEffect(Effect_Aff.monadEffectAff);
var map = /* #__PURE__ */ Data_Functor.map(Effect.functorEffect);
var bindFlipped = /* #__PURE__ */ Control_Bind.bindFlipped(Effect.bindEffect);
var RenderState = function (x) {
    return x;
};
var substInParent = function (v) {
    return function (v1) {
        return function (v2) {
            if (v1 instanceof Data_Maybe.Just && v2 instanceof Data_Maybe.Just) {
                return $$void(Web_DOM_Node.insertBefore(v)(v1.value0)(v2.value0));
            };
            if (v1 instanceof Data_Maybe.Nothing && v2 instanceof Data_Maybe.Just) {
                return $$void(Web_DOM_Node.appendChild(v)(v2.value0));
            };
            return pure(Data_Unit.unit);
        };
    };
};
var removeChild = function (v) {
    return function __do() {
        var npn = Web_DOM_Node.parentNode(v.node)();
        return traverse_(function (pn) {
            return Web_DOM_Node.removeChild(v.node)(pn);
        })(npn)();
    };
};
var mkSpec = function (handler) {
    return function (renderChildRef) {
        return function (document) {
            var getNode = Halogen_Aff_Driver_State.unRenderStateX(function (v) {
                return v.node;
            });
            var done = function (st) {
                if (st instanceof Data_Maybe.Just) {
                    return Halogen_VDom_Machine.halt(st.value0);
                };
                return Data_Unit.unit;
            };
            var buildWidget = function (spec) {
                var buildThunk = Halogen_VDom_Thunk.buildThunk(unwrap)(spec);
                var $lazy_patch = $runtime_lazy("patch", "Halogen.VDom.Driver", function () {
                    return function (st, slot) {
                        if (st instanceof Data_Maybe.Just) {
                            if (slot instanceof Halogen_Component.ComponentSlot) {
                                Halogen_VDom_Machine.halt(st.value0);
                                return $lazy_renderComponentSlot(100)(slot.value0);
                            };
                            if (slot instanceof Halogen_Component.ThunkSlot) {
                                var step$prime = Halogen_VDom_Machine.step(st.value0, slot.value0);
                                return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(Halogen_VDom_Machine.extract(step$prime), new Data_Maybe.Just(step$prime), $lazy_patch(103), done));
                            };
                            throw new Error("Failed pattern match at Halogen.VDom.Driver (line 97, column 22 - line 103, column 79): " + [ slot.constructor.name ]);
                        };
                        return $lazy_render(104)(slot);
                    };
                });
                var $lazy_render = $runtime_lazy("render", "Halogen.VDom.Driver", function () {
                    return function (slot) {
                        if (slot instanceof Halogen_Component.ComponentSlot) {
                            return $lazy_renderComponentSlot(86)(slot.value0);
                        };
                        if (slot instanceof Halogen_Component.ThunkSlot) {
                            var step = buildThunk(slot.value0);
                            return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(Halogen_VDom_Machine.extract(step), new Data_Maybe.Just(step), $lazy_patch(89), done));
                        };
                        throw new Error("Failed pattern match at Halogen.VDom.Driver (line 84, column 7 - line 89, column 75): " + [ slot.constructor.name ]);
                    };
                });
                var $lazy_renderComponentSlot = $runtime_lazy("renderComponentSlot", "Halogen.VDom.Driver", function () {
                    return function (cs) {
                        var renderChild = Effect_Ref.read(renderChildRef)();
                        var rsx = renderChild(cs)();
                        var node = getNode(rsx);
                        return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(node, Data_Maybe.Nothing.value, $lazy_patch(117), done));
                    };
                });
                var patch = $lazy_patch(91);
                var render = $lazy_render(82);
                var renderComponentSlot = $lazy_renderComponentSlot(109);
                return render;
            };
            var buildAttributes = Halogen_VDom_DOM_Prop.buildProp(handler);
            return {
                buildWidget: buildWidget,
                buildAttributes: buildAttributes,
                document: document
            };
        };
    };
};
var renderSpec = function (document) {
    return function (container) {
        var render = function (handler) {
            return function (child) {
                return function (v) {
                    return function (v1) {
                        if (v1 instanceof Data_Maybe.Nothing) {
                            return function __do() {
                                var renderChildRef = Effect_Ref["new"](child)();
                                var spec = mkSpec(handler)(renderChildRef)(document);
                                var machine = Halogen_VDom_DOM.buildVDom(spec)(v);
                                var node = Halogen_VDom_Machine.extract(machine);
                                $$void(Web_DOM_Node.appendChild(node)(Web_HTML_HTMLElement.toNode(container)))();
                                return {
                                    machine: machine,
                                    node: node,
                                    renderChildRef: renderChildRef
                                };
                            };
                        };
                        if (v1 instanceof Data_Maybe.Just) {
                            return function __do() {
                                Effect_Ref.write(child)(v1.value0.renderChildRef)();
                                var parent = Web_DOM_Node.parentNode(v1.value0.node)();
                                var nextSib = Web_DOM_Node.nextSibling(v1.value0.node)();
                                var machine$prime = Halogen_VDom_Machine.step(v1.value0.machine, v);
                                var newNode = Halogen_VDom_Machine.extract(machine$prime);
                                when(not(Unsafe_Reference.unsafeRefEq)(v1.value0.node)(newNode))(substInParent(newNode)(nextSib)(parent))();
                                return {
                                    machine: machine$prime,
                                    node: newNode,
                                    renderChildRef: v1.value0.renderChildRef
                                };
                            };
                        };
                        throw new Error("Failed pattern match at Halogen.VDom.Driver (line 157, column 5 - line 173, column 80): " + [ v1.constructor.name ]);
                    };
                };
            };
        };
        return {
            render: render,
            renderChild: identity,
            removeChild: removeChild,
            dispose: removeChild
        };
    };
};
var runUI = function (component) {
    return function (i) {
        return function (element) {
            return bind1(liftEffect(map(Web_HTML_HTMLDocument.toDocument)(bindFlipped(Web_HTML_Window.document)(Web_HTML.window))))(function (document) {
                return Halogen_Aff_Driver.runUI(renderSpec(document)(element))(component)(i);
            });
        };
    };
};
export {
    runUI
};
