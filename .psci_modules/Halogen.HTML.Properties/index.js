// | A closed signature of type-indexed (refined) HTML properties; these can be
// | used to ensure correctness by construction, and then erased into the
// | standard unrefined versions.
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as DOM_HTML_Indexed from "../DOM.HTML.Indexed/index.js";
import * as DOM_HTML_Indexed_AutocompleteType from "../DOM.HTML.Indexed.AutocompleteType/index.js";
import * as DOM_HTML_Indexed_ButtonType from "../DOM.HTML.Indexed.ButtonType/index.js";
import * as DOM_HTML_Indexed_FormMethod from "../DOM.HTML.Indexed.FormMethod/index.js";
import * as DOM_HTML_Indexed_InputAcceptType from "../DOM.HTML.Indexed.InputAcceptType/index.js";
import * as DOM_HTML_Indexed_InputType from "../DOM.HTML.Indexed.InputType/index.js";
import * as DOM_HTML_Indexed_MenuType from "../DOM.HTML.Indexed.MenuType/index.js";
import * as DOM_HTML_Indexed_MenuitemType from "../DOM.HTML.Indexed.MenuitemType/index.js";
import * as DOM_HTML_Indexed_OrderedListType from "../DOM.HTML.Indexed.OrderedListType/index.js";
import * as DOM_HTML_Indexed_PreloadValue from "../DOM.HTML.Indexed.PreloadValue/index.js";
import * as DOM_HTML_Indexed_ScopeValue from "../DOM.HTML.Indexed.ScopeValue/index.js";
import * as DOM_HTML_Indexed_StepValue from "../DOM.HTML.Indexed.StepValue/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_HeytingAlgebra from "../Data.HeytingAlgebra/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Newtype from "../Data.Newtype/index.js";
import * as Data_String_Common from "../Data.String.Common/index.js";
import * as Halogen_HTML_Core from "../Halogen.HTML.Core/index.js";
import * as Halogen_Query_Input from "../Halogen.Query.Input/index.js";
import * as Halogen_VDom_DOM_Prop from "../Halogen.VDom.DOM.Prop/index.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
var map = /* #__PURE__ */ Data_Functor.map(Halogen_VDom_DOM_Prop.functorProp);
var map1 = /* #__PURE__ */ Data_Functor.map(Halogen_Query_Input.functorInput);
var unwrap = /* #__PURE__ */ Data_Newtype.unwrap();

// | The phantom row `r` can be thought of as a context which is synthesized in
// | the course of constructing a refined HTML expression.
var IProp = function (x) {
    return x;
};

// | The `ref` property allows an input to be raised once a `HTMLElement` has
// | been created or destroyed in the DOM for the element that the property is
// | attached to.
var ref = /* #__PURE__ */ (function () {
    var go = function (p) {
        return function (mel) {
            return new Data_Maybe.Just(new Halogen_Query_Input.RefUpdate(p, mel));
        };
    };
    return function ($29) {
        return Halogen_HTML_Core.ref(go($29));
    };
})();

// | Creates an indexed HTML property.
var prop = function (dictIsProp) {
    return Halogen_HTML_Core.prop(dictIsProp);
};
var prop1 = /* #__PURE__ */ prop(Halogen_HTML_Core.isPropBoolean);
var prop2 = /* #__PURE__ */ prop(Halogen_HTML_Core.isPropString);
var prop3 = /* #__PURE__ */ prop(Halogen_HTML_Core.isPropInt);
var prop4 = /* #__PURE__ */ prop(Halogen_HTML_Core.isPropNumber);
var readOnly = /* #__PURE__ */ prop1("readOnly");
var rel = /* #__PURE__ */ prop2("rel");
var required = /* #__PURE__ */ prop1("required");
var rowSpan = /* #__PURE__ */ prop3("rowSpan");
var rows = /* #__PURE__ */ prop3("rows");
var scope = /* #__PURE__ */ prop(Halogen_HTML_Core.isPropScopeValue)("scope");
var selected = /* #__PURE__ */ prop1("selected");
var selectedIndex = /* #__PURE__ */ prop3("selectedIndex");
var spellcheck = /* #__PURE__ */ prop1("spellcheck");
var src = /* #__PURE__ */ prop2("src");
var srcDoc = /* #__PURE__ */ prop2("srcdoc");
var step = /* #__PURE__ */ prop(Halogen_HTML_Core.isPropStepValue)("step");
var tabIndex = /* #__PURE__ */ prop3("tabIndex");
var target = /* #__PURE__ */ prop2("target");
var title = /* #__PURE__ */ prop2("title");
var type_ = function (dictIsProp) {
    return prop(dictIsProp)("type");
};
var value = function (dictIsProp) {
    return prop(dictIsProp)("value");
};
var width = /* #__PURE__ */ prop3("width");
var preload = /* #__PURE__ */ prop(Halogen_HTML_Core.isPropPreloadValue)("preload");
var poster = /* #__PURE__ */ prop2("poster");
var placeholder = /* #__PURE__ */ prop2("placeholder");
var pattern = /* #__PURE__ */ prop2("pattern");
var noValidate = /* #__PURE__ */ prop1("noValidate");
var newtypeIProp = {
    Coercible0: function () {
        return undefined;
    }
};
var name = /* #__PURE__ */ prop2("name");
var muted = /* #__PURE__ */ prop1("muted");
var multiple = /* #__PURE__ */ prop1("multiple");
var min = /* #__PURE__ */ prop4("min");
var method = /* #__PURE__ */ prop(Halogen_HTML_Core.isPropFormMethod)("method");
var max = /* #__PURE__ */ prop4("max");
var loop = /* #__PURE__ */ prop1("loop");
var id = /* #__PURE__ */ prop2("id");
var href = /* #__PURE__ */ prop2("href");
var height = /* #__PURE__ */ prop3("height");
var functorIProp = {
    map: function (f) {
        return function (m) {
            return map(map1(f))(m);
        };
    }
};
var $$for = /* #__PURE__ */ prop2("htmlFor");

// | Every `IProp lt i` can be cast to some `IProp gt i` as long as `lt` is a
// | subset of `gt`.
var expand = function () {
    return Unsafe_Coerce.unsafeCoerce;
};
var enctype = /* #__PURE__ */ prop(Halogen_HTML_Core.isPropMediaType)("enctype");
var draggable = /* #__PURE__ */ prop1("draggable");
var download = /* #__PURE__ */ prop2("download");
var disabled = /* #__PURE__ */ prop1("disabled");
var enabled = /* #__PURE__ */ (function () {
    var $30 = Data_HeytingAlgebra.not(Data_HeytingAlgebra.heytingAlgebraBoolean);
    return function ($31) {
        return disabled($30($31));
    };
})();
var controls = /* #__PURE__ */ prop1("controls");
var cols = /* #__PURE__ */ prop3("cols");
var colSpan = /* #__PURE__ */ prop3("colSpan");
var classes = /* #__PURE__ */ (function () {
    var $32 = prop2("className");
    var $33 = Data_String_Common.joinWith(" ");
    var $34 = Data_Functor.map(Data_Functor.functorArray)(unwrap);
    return function ($35) {
        return $32($33($34($35)));
    };
})();
var class_ = /* #__PURE__ */ (function () {
    var $36 = prop2("className");
    return function ($37) {
        return $36(unwrap($37));
    };
})();
var checked = /* #__PURE__ */ prop1("checked");
var charset = /* #__PURE__ */ prop2("charset");
var autoplay = /* #__PURE__ */ prop1("autoplay");
var autofocus = /* #__PURE__ */ prop1("autofocus");
var autocomplete = /* #__PURE__ */ prop(Halogen_HTML_Core.isPropAutocompleteType)("autocomplete");

// | Creates an indexed HTML attribute.
var attrNS = /* #__PURE__ */ (function () {
    var $38 = Control_Applicative.pure(Data_Maybe.applicativeMaybe);
    return function ($39) {
        return Halogen_HTML_Core.attr($38($39));
    };
})();

// | Creates an indexed HTML attribute.
var attr = /* #__PURE__ */ (function () {
    return Halogen_HTML_Core.attr(Data_Maybe.Nothing.value);
})();
var list = /* #__PURE__ */ attr("list");

// | Sets the `style` attribute to the specified string.
// |
// | ```purs
// | ... [ style "height: 50px;" ]
// | ```
// |
// | If you prefer to use typed CSS for this attribute, you can use the purescript-halogen-css library:
// | https://github.com/purescript-halogen/purescript-halogen-css
var style = /* #__PURE__ */ attr("style");
var alt = /* #__PURE__ */ prop2("alt");
var action = /* #__PURE__ */ prop2("action");
var accept = /* #__PURE__ */ prop(Halogen_HTML_Core.isPropInputAcceptType)("accept");
export {
    IProp,
    prop,
    attr,
    attrNS,
    ref,
    expand,
    alt,
    charset,
    class_,
    classes,
    cols,
    rows,
    colSpan,
    rowSpan,
    $$for as for,
    height,
    width,
    href,
    id,
    name,
    rel,
    src,
    srcDoc,
    style,
    scope,
    target,
    title,
    download,
    method,
    action,
    enctype,
    noValidate,
    type_,
    value,
    min,
    max,
    step,
    disabled,
    enabled,
    required,
    readOnly,
    spellcheck,
    checked,
    selected,
    selectedIndex,
    placeholder,
    autocomplete,
    list,
    autofocus,
    multiple,
    pattern,
    accept,
    autoplay,
    controls,
    loop,
    muted,
    poster,
    preload,
    draggable,
    tabIndex,
    newtypeIProp,
    functorIProp
};
export {
    AutocompleteAdditionalName,
    AutocompleteAddressLevel1,
    AutocompleteAddressLevel2,
    AutocompleteAddressLevel3,
    AutocompleteAddressLevel4,
    AutocompleteAddressLine1,
    AutocompleteAddressLine2,
    AutocompleteAddressLine3,
    AutocompleteBirthday,
    AutocompleteBirthdayDay,
    AutocompleteBirthdayMonth,
    AutocompleteBirthdayYear,
    AutocompleteCountry,
    AutocompleteCountryName,
    AutocompleteCreditCardAdditionalName,
    AutocompleteCreditCardExpiration,
    AutocompleteCreditCardExpirationMonth,
    AutocompleteCreditCardExpirationYear,
    AutocompleteCreditCardFamilyName,
    AutocompleteCreditCardGivenName,
    AutocompleteCreditCardName,
    AutocompleteCreditCardNumber,
    AutocompleteCreditCardSecurityCode,
    AutocompleteCreditCardType,
    AutocompleteCurrentPassword,
    AutocompleteEmail,
    AutocompleteFamilyName,
    AutocompleteGivenName,
    AutocompleteHonorificPrefix,
    AutocompleteHonorificSuffix,
    AutocompleteIMPP,
    AutocompleteLanguage,
    AutocompleteName,
    AutocompleteNewPassword,
    AutocompleteNickname,
    AutocompleteOff,
    AutocompleteOn,
    AutocompleteOneTimeCode,
    AutocompleteOrganization,
    AutocompleteOrganizationTitle,
    AutocompletePhoto,
    AutocompletePostalCode,
    AutocompleteSex,
    AutocompleteStreetAddress,
    AutocompleteTelephone,
    AutocompleteTelephoneAreaCode,
    AutocompleteTelephoneCountryCode,
    AutocompleteTelephoneExtension,
    AutocompleteTelephoneLocal,
    AutocompleteTelephoneLocalPrefix,
    AutocompleteTelephoneLocalSuffix,
    AutocompleteTelephoneNational,
    AutocompleteTransactionAmount,
    AutocompleteTransactionCurrency,
    AutocompleteURL,
    AutocompleteUsername
} from "../DOM.HTML.Indexed.AutocompleteType/index.js";
export {
    ButtonButton,
    ButtonReset,
    ButtonSubmit
} from "../DOM.HTML.Indexed.ButtonType/index.js";
export {
    GET,
    POST
} from "../DOM.HTML.Indexed.FormMethod/index.js";
export {
    InputAcceptType
} from "../DOM.HTML.Indexed.InputAcceptType/index.js";
export {
    InputButton,
    InputCheckbox,
    InputColor,
    InputDate,
    InputDatetimeLocal,
    InputEmail,
    InputFile,
    InputHidden,
    InputImage,
    InputMonth,
    InputNumber,
    InputPassword,
    InputRadio,
    InputRange,
    InputReset,
    InputSearch,
    InputSubmit,
    InputTel,
    InputText,
    InputTime,
    InputUrl,
    InputWeek
} from "../DOM.HTML.Indexed.InputType/index.js";
export {
    MenuContext,
    MenuList,
    MenuToolbar
} from "../DOM.HTML.Indexed.MenuType/index.js";
export {
    MenuitemCheckbox,
    MenuitemCommand,
    MenuitemRadio
} from "../DOM.HTML.Indexed.MenuitemType/index.js";
export {
    OrderedListAlphabetic,
    OrderedListNumeric
} from "../DOM.HTML.Indexed.OrderedListType/index.js";
export {
    PreloadAuto,
    PreloadMetadata,
    PreloadNone
} from "../DOM.HTML.Indexed.PreloadValue/index.js";
export {
    ScopeAuto,
    ScopeCol,
    ScopeColGroup,
    ScopeRow,
    ScopeRowGroup
} from "../DOM.HTML.Indexed.ScopeValue/index.js";
export {
    Any,
    Step
} from "../DOM.HTML.Indexed.StepValue/index.js";
