import * as DOM_HTML_Indexed_AutocompleteType from "../DOM.HTML.Indexed.AutocompleteType/index.js";
import * as DOM_HTML_Indexed_ButtonType from "../DOM.HTML.Indexed.ButtonType/index.js";
import * as DOM_HTML_Indexed_CrossOriginValue from "../DOM.HTML.Indexed.CrossOriginValue/index.js";
import * as DOM_HTML_Indexed_DirValue from "../DOM.HTML.Indexed.DirValue/index.js";
import * as DOM_HTML_Indexed_FormMethod from "../DOM.HTML.Indexed.FormMethod/index.js";
import * as DOM_HTML_Indexed_InputAcceptType from "../DOM.HTML.Indexed.InputAcceptType/index.js";
import * as DOM_HTML_Indexed_InputType from "../DOM.HTML.Indexed.InputType/index.js";
import * as DOM_HTML_Indexed_KindValue from "../DOM.HTML.Indexed.KindValue/index.js";
import * as DOM_HTML_Indexed_MenuType from "../DOM.HTML.Indexed.MenuType/index.js";
import * as DOM_HTML_Indexed_MenuitemType from "../DOM.HTML.Indexed.MenuitemType/index.js";
import * as DOM_HTML_Indexed_OrderedListType from "../DOM.HTML.Indexed.OrderedListType/index.js";
import * as DOM_HTML_Indexed_PreloadValue from "../DOM.HTML.Indexed.PreloadValue/index.js";
import * as DOM_HTML_Indexed_ScopeValue from "../DOM.HTML.Indexed.ScopeValue/index.js";
import * as DOM_HTML_Indexed_StepValue from "../DOM.HTML.Indexed.StepValue/index.js";
import * as DOM_HTML_Indexed_WrapValue from "../DOM.HTML.Indexed.WrapValue/index.js";
import * as Data_Bifunctor from "../Data.Bifunctor/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Newtype from "../Data.Newtype/index.js";
import * as Halogen_Query_Input from "../Halogen.Query.Input/index.js";
import * as Halogen_VDom from "../Halogen.VDom/index.js";
import * as Halogen_VDom_DOM_Prop from "../Halogen.VDom.DOM.Prop/index.js";
import * as Halogen_VDom_Types from "../Halogen.VDom.Types/index.js";
import * as Web_HTML_Common from "../Web.HTML.Common/index.js";
var map = /* #__PURE__ */ Data_Functor.map(Data_Functor.functorArray);
var map1 = /* #__PURE__ */ Data_Functor.map(Halogen_VDom_DOM_Prop.functorProp);
var map2 = /* #__PURE__ */ Data_Functor.map(Halogen_Query_Input.functorInput);
var un = /* #__PURE__ */ Data_Newtype.un();
var bimap = /* #__PURE__ */ Data_Bifunctor.bimap(Halogen_VDom_Types.bifunctorVDom);
var HTML = function (x) {
    return x;
};
var widget = function ($28) {
    return HTML(Halogen_VDom_Types.Widget.create($28));
};
var toPropValue = function (dict) {
    return dict.toPropValue;
};

// | Constructs a text node `HTML` value.
var text = function ($29) {
    return HTML(Halogen_VDom_Types.Text.create($29));
};
var ref = function (f) {
    return new Halogen_VDom_DOM_Prop.Ref(function ($30) {
        return f((function (v) {
            if (v instanceof Halogen_VDom_DOM_Prop.Created) {
                return new Data_Maybe.Just(v.value0);
            };
            if (v instanceof Halogen_VDom_DOM_Prop.Removed) {
                return Data_Maybe.Nothing.value;
            };
            throw new Error("Failed pattern match at Halogen.HTML.Core (line 109, column 21 - line 111, column 23): " + [ v.constructor.name ]);
        })($30));
    });
};

// | Create a HTML property.
var prop = function (dictIsProp) {
    var toPropValue1 = toPropValue(dictIsProp);
    return function (v) {
        var $31 = Halogen_VDom_DOM_Prop.Property.create(v);
        return function ($32) {
            return $31(toPropValue1($32));
        };
    };
};
var newtypeHTML = {
    Coercible0: function () {
        return undefined;
    }
};
var renderWidget = function (f) {
    return function (g) {
        return function (v) {
            return Halogen_VDom_Types.renderWidget(map(map1(map2(f))))((function () {
                var $33 = un(HTML);
                return function ($34) {
                    return $33(g($34));
                };
            })())(v);
        };
    };
};

// | A smart constructor for HTML elements with keyed children.
var keyed = function (ns) {
    return function (name) {
        return function (props) {
            return function (children) {
                return new Halogen_VDom_Types.Keyed(ns, name, props, children);
            };
        };
    };
};
var isPropWrapValue = {
    toPropValue: function ($35) {
        return Halogen_VDom_DOM_Prop.propFromString(DOM_HTML_Indexed_WrapValue.renderWrapValue($35));
    }
};
var isPropString = {
    toPropValue: Halogen_VDom_DOM_Prop.propFromString
};
var isPropStepValue = {
    toPropValue: function ($36) {
        return Halogen_VDom_DOM_Prop.propFromString(DOM_HTML_Indexed_StepValue.renderStepValue($36));
    }
};
var isPropScopeValue = {
    toPropValue: function ($37) {
        return Halogen_VDom_DOM_Prop.propFromString(DOM_HTML_Indexed_ScopeValue.renderScopeValue($37));
    }
};
var isPropPreloadValue = {
    toPropValue: function ($38) {
        return Halogen_VDom_DOM_Prop.propFromString(DOM_HTML_Indexed_PreloadValue.renderPreloadValue($38));
    }
};
var isPropOrderedListType = {
    toPropValue: function ($39) {
        return Halogen_VDom_DOM_Prop.propFromString(DOM_HTML_Indexed_OrderedListType.renderOrderedListType($39));
    }
};
var isPropNumber = {
    toPropValue: Halogen_VDom_DOM_Prop.propFromNumber
};
var isPropMenuitemType = {
    toPropValue: function ($40) {
        return Halogen_VDom_DOM_Prop.propFromString(DOM_HTML_Indexed_MenuitemType.renderMenuitemType($40));
    }
};
var isPropMenuType = {
    toPropValue: function ($41) {
        return Halogen_VDom_DOM_Prop.propFromString(DOM_HTML_Indexed_MenuType.renderMenuType($41));
    }
};
var isPropMediaType = {
    toPropValue: /* #__PURE__ */ (function () {
        var $42 = Data_Newtype.unwrap();
        return function ($43) {
            return Halogen_VDom_DOM_Prop.propFromString($42($43));
        };
    })()
};
var isPropKindValue = {
    toPropValue: function ($44) {
        return Halogen_VDom_DOM_Prop.propFromString(DOM_HTML_Indexed_KindValue.renderKindValue($44));
    }
};
var isPropInt = {
    toPropValue: Halogen_VDom_DOM_Prop.propFromInt
};
var isPropInputType = {
    toPropValue: function ($45) {
        return Halogen_VDom_DOM_Prop.propFromString(DOM_HTML_Indexed_InputType.renderInputType($45));
    }
};
var isPropInputAcceptType = {
    toPropValue: function ($46) {
        return Halogen_VDom_DOM_Prop.propFromString(DOM_HTML_Indexed_InputAcceptType.renderInputAcceptType($46));
    }
};
var isPropFormMethod = {
    toPropValue: function ($47) {
        return Halogen_VDom_DOM_Prop.propFromString(DOM_HTML_Indexed_FormMethod.renderFormMethod($47));
    }
};
var isPropDirValue = {
    toPropValue: function ($48) {
        return Halogen_VDom_DOM_Prop.propFromString(DOM_HTML_Indexed_DirValue.renderDirValue($48));
    }
};
var isPropCrossOriginValue = {
    toPropValue: function ($49) {
        return Halogen_VDom_DOM_Prop.propFromString(DOM_HTML_Indexed_CrossOriginValue.renderCrossOriginValue($49));
    }
};
var isPropButtonType = {
    toPropValue: function ($50) {
        return Halogen_VDom_DOM_Prop.propFromString(DOM_HTML_Indexed_ButtonType.renderButtonType($50));
    }
};
var isPropBoolean = {
    toPropValue: Halogen_VDom_DOM_Prop.propFromBoolean
};
var isPropAutocompleteType = {
    toPropValue: function ($51) {
        return Halogen_VDom_DOM_Prop.propFromString(DOM_HTML_Indexed_AutocompleteType.renderAutocompleteType($51));
    }
};

// | Create an event handler.
var handler = /* #__PURE__ */ (function () {
    return Halogen_VDom_DOM_Prop.Handler.create;
})();

// | A smart constructor for HTML elements.
var element = function (ns) {
    return function (name) {
        return function (props) {
            return function (children) {
                return new Halogen_VDom_Types.Elem(ns, name, props, children);
            };
        };
    };
};
var bifunctorHTML = {
    bimap: function (f) {
        return function (g) {
            return function (v) {
                return bimap(map(map1(map2(g))))(f)(v);
            };
        };
    }
};
var functorHTML = {
    map: /* #__PURE__ */ Data_Bifunctor.rmap(bifunctorHTML)
};

// | Create a HTML attribute.
var attr = function (ns) {
    return function (v) {
        return Halogen_VDom_DOM_Prop.Attribute.create(ns)(v);
    };
};
export {
    HTML,
    renderWidget,
    widget,
    text,
    element,
    keyed,
    prop,
    attr,
    handler,
    ref,
    toPropValue,
    newtypeHTML,
    bifunctorHTML,
    functorHTML,
    isPropString,
    isPropInt,
    isPropNumber,
    isPropBoolean,
    isPropMediaType,
    isPropButtonType,
    isPropCrossOriginValue,
    isPropDirValue,
    isPropFormMethod,
    isPropInputType,
    isPropKindValue,
    isPropMenuitemType,
    isPropMenuType,
    isPropAutocompleteType,
    isPropOrderedListType,
    isPropPreloadValue,
    isPropScopeValue,
    isPropStepValue,
    isPropWrapValue,
    isPropInputAcceptType
};
export {
    ElemName,
    Namespace
} from "../Halogen.VDom/index.js";
export {
    Attribute,
    Handler,
    Property,
    Ref
} from "../Halogen.VDom.DOM.Prop/index.js";
export {
    AttrName,
    ClassName,
    PropName
} from "../Web.HTML.Common/index.js";
