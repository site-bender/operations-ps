import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Control_Monad_Error_Class from "../Control.Monad.Error.Class/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Unit from "../Data.Unit/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect_Aff from "../Effect.Aff/index.js";
import * as Effect_Class from "../Effect.Class/index.js";
import * as Effect_Exception from "../Effect.Exception/index.js";
import * as Web_DOM_ParentNode from "../Web.DOM.ParentNode/index.js";
import * as Web_Event_EventTarget from "../Web.Event.EventTarget/index.js";
import * as Web_HTML from "../Web.HTML/index.js";
import * as Web_HTML_Event_EventTypes from "../Web.HTML.Event.EventTypes/index.js";
import * as Web_HTML_HTMLDocument from "../Web.HTML.HTMLDocument/index.js";
import * as Web_HTML_HTMLDocument_ReadyState from "../Web.HTML.HTMLDocument.ReadyState/index.js";
import * as Web_HTML_HTMLElement from "../Web.HTML.HTMLElement/index.js";
import * as Web_HTML_Window from "../Web.HTML.Window/index.js";
var bind = /* #__PURE__ */ Control_Bind.bind(Effect_Aff.bindAff);
var liftEffect = /* #__PURE__ */ Effect_Class.liftEffect(Effect_Aff.monadEffectAff);
var bindFlipped = /* #__PURE__ */ Control_Bind.bindFlipped(Effect.bindEffect);
var composeKleisliFlipped = /* #__PURE__ */ Control_Bind.composeKleisliFlipped(Effect.bindEffect);
var pure = /* #__PURE__ */ Control_Applicative.pure(Effect_Aff.applicativeAff);
var bindFlipped1 = /* #__PURE__ */ Control_Bind.bindFlipped(Data_Maybe.bindMaybe);
var pure1 = /* #__PURE__ */ Control_Applicative.pure(Effect.applicativeEffect);
var map = /* #__PURE__ */ Data_Functor.map(Effect.functorEffect);
var discard = /* #__PURE__ */ Control_Bind.discard(Control_Bind.discardUnit);
var throwError = /* #__PURE__ */ Control_Monad_Error_Class.throwError(Effect_Aff.monadThrowAff);

// | Tries to find an element in the document.
var selectElement = function (query) {
    return bind(liftEffect(bindFlipped(composeKleisliFlipped((function () {
        var $16 = Web_DOM_ParentNode.querySelector(query);
        return function ($17) {
            return $16(Web_HTML_HTMLDocument.toParentNode($17));
        };
    })())(Web_HTML_Window.document))(Web_HTML.window)))(function (mel) {
        return pure(bindFlipped1(Web_HTML_HTMLElement.fromElement)(mel));
    });
};

// | Runs an `Aff` value of the type commonly used by Halogen components. Any
// | unhandled errors will be re-thrown as exceptions.
var runHalogenAff = /* #__PURE__ */ Effect_Aff.runAff_(/* #__PURE__ */ Data_Either.either(Effect_Exception.throwException)(/* #__PURE__ */ Data_Function["const"](/* #__PURE__ */ pure1(Data_Unit.unit))));

// | Waits for the document to load.
var awaitLoad = /* #__PURE__ */ Effect_Aff.makeAff(function (callback) {
    return function __do() {
        var rs = bindFlipped(Web_HTML_HTMLDocument.readyState)(bindFlipped(Web_HTML_Window.document)(Web_HTML.window))();
        if (rs instanceof Web_HTML_HTMLDocument_ReadyState.Loading) {
            var et = map(Web_HTML_Window.toEventTarget)(Web_HTML.window)();
            var listener = Web_Event_EventTarget.eventListener(function (v) {
                return callback(new Data_Either.Right(Data_Unit.unit));
            })();
            Web_Event_EventTarget.addEventListener(Web_HTML_Event_EventTypes.domcontentloaded)(listener)(false)(et)();
            return Effect_Aff.effectCanceler(Web_Event_EventTarget.removeEventListener(Web_HTML_Event_EventTypes.domcontentloaded)(listener)(false)(et));
        };
        callback(new Data_Either.Right(Data_Unit.unit))();
        return Effect_Aff.nonCanceler;
    };
});

// | Waits for the document to load and then finds the `body` element.
var awaitBody = /* #__PURE__ */ discard(Effect_Aff.bindAff)(awaitLoad)(function () {
    return bind(selectElement("body"))(function (body) {
        return Data_Maybe.maybe(throwError(Effect_Exception.error("Could not find body")))(pure)(body);
    });
});
export {
    awaitLoad,
    awaitBody,
    selectElement,
    runHalogenAff
};
