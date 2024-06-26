import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Nullable from "../Data.Nullable/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
import * as Data_Unit from "../Data.Unit/index.js";
import * as Effect_Ref from "../Effect.Ref/index.js";
import * as Foreign from "../Foreign/index.js";
import * as Foreign_Object from "../Foreign.Object/index.js";
import * as Halogen_VDom_Machine from "../Halogen.VDom.Machine/index.js";
import * as Halogen_VDom_Util from "../Halogen.VDom.Util/index.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
import * as Web_Event_EventTarget from "../Web.Event.EventTarget/index.js";
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
var map = /* #__PURE__ */ Data_Functor.map(Data_Functor.functorFn);
var map1 = /* #__PURE__ */ Data_Functor.map(Data_Maybe.functorMaybe);
var Created = /* #__PURE__ */ (function () {
    function Created(value0) {
        this.value0 = value0;
    };
    Created.create = function (value0) {
        return new Created(value0);
    };
    return Created;
})();
var Removed = /* #__PURE__ */ (function () {
    function Removed(value0) {
        this.value0 = value0;
    };
    Removed.create = function (value0) {
        return new Removed(value0);
    };
    return Removed;
})();

// | Attributes, properties, event handlers, and element lifecycles.
// | Parameterized by the type of handlers outputs.
var Attribute = /* #__PURE__ */ (function () {
    function Attribute(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
    };
    Attribute.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return new Attribute(value0, value1, value2);
            };
        };
    };
    return Attribute;
})();

// | Attributes, properties, event handlers, and element lifecycles.
// | Parameterized by the type of handlers outputs.
var Property = /* #__PURE__ */ (function () {
    function Property(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Property.create = function (value0) {
        return function (value1) {
            return new Property(value0, value1);
        };
    };
    return Property;
})();

// | Attributes, properties, event handlers, and element lifecycles.
// | Parameterized by the type of handlers outputs.
var Handler = /* #__PURE__ */ (function () {
    function Handler(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Handler.create = function (value0) {
        return function (value1) {
            return new Handler(value0, value1);
        };
    };
    return Handler;
})();

// | Attributes, properties, event handlers, and element lifecycles.
// | Parameterized by the type of handlers outputs.
var Ref = /* #__PURE__ */ (function () {
    function Ref(value0) {
        this.value0 = value0;
    };
    Ref.create = function (value0) {
        return new Ref(value0);
    };
    return Ref;
})();
var unsafeGetProperty = Halogen_VDom_Util.unsafeGetAny;
var setProperty = Halogen_VDom_Util.unsafeSetAny;
var removeProperty = function (key, el) {
    var v = Halogen_VDom_Util.hasAttribute(Data_Nullable["null"], key, el);
    if (v) {
        return Halogen_VDom_Util.removeAttribute(Data_Nullable["null"], key, el);
    };
    var v1 = Foreign.typeOf(Halogen_VDom_Util.unsafeGetAny(key, el));
    if (v1 === "string") {
        return Halogen_VDom_Util.unsafeSetAny(key, "", el);
    };
    if (key === "rowSpan") {
        return Halogen_VDom_Util.unsafeSetAny(key, 1, el);
    };
    if (key === "colSpan") {
        return Halogen_VDom_Util.unsafeSetAny(key, 1, el);
    };
    return Halogen_VDom_Util.unsafeSetAny(key, Halogen_VDom_Util.jsUndefined, el);
};
var propToStrKey = function (v) {
    if (v instanceof Attribute && v.value0 instanceof Data_Maybe.Just) {
        return "attr/" + (v.value0.value0 + (":" + v.value1));
    };
    if (v instanceof Attribute) {
        return "attr/:" + v.value1;
    };
    if (v instanceof Property) {
        return "prop/" + v.value0;
    };
    if (v instanceof Handler) {
        return "handler/" + v.value0;
    };
    if (v instanceof Ref) {
        return "ref";
    };
    throw new Error("Failed pattern match at Halogen.VDom.DOM.Prop (line 182, column 16 - line 187, column 16): " + [ v.constructor.name ]);
};
var propFromString = Unsafe_Coerce.unsafeCoerce;
var propFromNumber = Unsafe_Coerce.unsafeCoerce;
var propFromInt = Unsafe_Coerce.unsafeCoerce;
var propFromBoolean = Unsafe_Coerce.unsafeCoerce;
var functorProp = {
    map: function (v) {
        return function (v1) {
            if (v1 instanceof Handler) {
                return new Handler(v1.value0, map(map1(v))(v1.value1));
            };
            if (v1 instanceof Ref) {
                return new Ref(map(map1(v))(v1.value0));
            };
            return v1;
        };
    }
};
var functorElemRef = {
    map: function (v) {
        return function (v1) {
            if (v1 instanceof Created) {
                return new Created(v(v1.value0));
            };
            if (v1 instanceof Removed) {
                return new Removed(v(v1.value0));
            };
            throw new Error("Failed pattern match at Halogen.VDom.DOM.Prop (line 49, column 1 - line 51, column 36): " + [ v.constructor.name, v1.constructor.name ]);
        };
    }
};

// | A `Machine`` for applying attributes, properties, and event handlers.
// | An emitter effect must be provided to respond to events. For example,
// | to allow arbitrary effects in event handlers, one could use `id`.
var buildProp = function (emit) {
    return function (el) {
        var removeProp = function (prevEvents) {
            return function (v, v1) {
                if (v1 instanceof Attribute) {
                    return Halogen_VDom_Util.removeAttribute(Data_Nullable.toNullable(v1.value0), v1.value1, el);
                };
                if (v1 instanceof Property) {
                    return removeProperty(v1.value0, el);
                };
                if (v1 instanceof Handler) {
                    var handler = Halogen_VDom_Util.unsafeLookup(v1.value0, prevEvents);
                    return Halogen_VDom_Util.removeEventListener(v1.value0, Data_Tuple.fst(handler), el);
                };
                if (v1 instanceof Ref) {
                    return Data_Unit.unit;
                };
                throw new Error("Failed pattern match at Halogen.VDom.DOM.Prop (line 169, column 5 - line 179, column 18): " + [ v1.constructor.name ]);
            };
        };
        var mbEmit = function (v) {
            if (v instanceof Data_Maybe.Just) {
                return emit(v.value0)();
            };
            return Data_Unit.unit;
        };
        var haltProp = function (state) {
            var v = Foreign_Object.lookup("ref")(state.props);
            if (v instanceof Data_Maybe.Just && v.value0 instanceof Ref) {
                return mbEmit(v.value0.value0(new Removed(el)));
            };
            return Data_Unit.unit;
        };
        var diffProp = function (prevEvents, events) {
            return function (v, v1, v11, v2) {
                if (v11 instanceof Attribute && v2 instanceof Attribute) {
                    var $66 = v11.value2 === v2.value2;
                    if ($66) {
                        return v2;
                    };
                    Halogen_VDom_Util.setAttribute(Data_Nullable.toNullable(v2.value0), v2.value1, v2.value2, el);
                    return v2;
                };
                if (v11 instanceof Property && v2 instanceof Property) {
                    var v4 = Halogen_VDom_Util.refEq(v11.value1, v2.value1);
                    if (v4) {
                        return v2;
                    };
                    if (v2.value0 === "value") {
                        var elVal = unsafeGetProperty("value", el);
                        var $75 = Halogen_VDom_Util.refEq(elVal, v2.value1);
                        if ($75) {
                            return v2;
                        };
                        setProperty(v2.value0, v2.value1, el);
                        return v2;
                    };
                    setProperty(v2.value0, v2.value1, el);
                    return v2;
                };
                if (v11 instanceof Handler && v2 instanceof Handler) {
                    var handler = Halogen_VDom_Util.unsafeLookup(v2.value0, prevEvents);
                    Effect_Ref.write(v2.value1)(Data_Tuple.snd(handler))();
                    Halogen_VDom_Util.pokeMutMap(v2.value0, handler, events);
                    return v2;
                };
                return v2;
            };
        };
        var applyProp = function (events) {
            return function (v, v1, v2) {
                if (v2 instanceof Attribute) {
                    Halogen_VDom_Util.setAttribute(Data_Nullable.toNullable(v2.value0), v2.value1, v2.value2, el);
                    return v2;
                };
                if (v2 instanceof Property) {
                    setProperty(v2.value0, v2.value1, el);
                    return v2;
                };
                if (v2 instanceof Handler) {
                    var v3 = Halogen_VDom_Util.unsafeGetAny(v2.value0, events);
                    if (Halogen_VDom_Util.unsafeHasAny(v2.value0, events)) {
                        Effect_Ref.write(v2.value1)(Data_Tuple.snd(v3))();
                        return v2;
                    };
                    var ref = Effect_Ref["new"](v2.value1)();
                    var listener = Web_Event_EventTarget.eventListener(function (ev) {
                        return function __do() {
                            var f$prime = Effect_Ref.read(ref)();
                            return mbEmit(f$prime(ev));
                        };
                    })();
                    Halogen_VDom_Util.pokeMutMap(v2.value0, new Data_Tuple.Tuple(listener, ref), events);
                    Halogen_VDom_Util.addEventListener(v2.value0, listener, el);
                    return v2;
                };
                if (v2 instanceof Ref) {
                    mbEmit(v2.value0(new Created(el)));
                    return v2;
                };
                throw new Error("Failed pattern match at Halogen.VDom.DOM.Prop (line 113, column 5 - line 135, column 15): " + [ v2.constructor.name ]);
            };
        };
        var $lazy_patchProp = $runtime_lazy("patchProp", "Halogen.VDom.DOM.Prop", function () {
            return function (state, ps2) {
                var events = Halogen_VDom_Util.newMutMap();
                var onThis = removeProp(state.events);
                var onThese = diffProp(state.events, events);
                var onThat = applyProp(events);
                var props = Halogen_VDom_Util.diffWithKeyAndIxE(state.props, ps2, propToStrKey, onThese, onThis, onThat);
                var nextState = {
                    events: Halogen_VDom_Util.unsafeFreeze(events),
                    props: props
                };
                return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(Data_Unit.unit, nextState, $lazy_patchProp(100), haltProp));
            };
        });
        var patchProp = $lazy_patchProp(87);
        var renderProp = function (ps1) {
            var events = Halogen_VDom_Util.newMutMap();
            var ps1$prime = Halogen_VDom_Util.strMapWithIxE(ps1, propToStrKey, applyProp(events));
            var state = {
                events: Halogen_VDom_Util.unsafeFreeze(events),
                props: ps1$prime
            };
            return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(Data_Unit.unit, state, patchProp, haltProp));
        };
        return renderProp;
    };
};
export {
    Attribute,
    Property,
    Handler,
    Ref,
    Created,
    Removed,
    propFromString,
    propFromBoolean,
    propFromInt,
    propFromNumber,
    buildProp,
    functorProp,
    functorElemRef
};
