// Generated by purs version 0.15.15
import * as $foreign from "./foreign.js";
import * as Data_Enum from "../Data.Enum/index.js";
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Nullable from "../Data.Nullable/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Web_Event_EventPhase from "../Web.Event.EventPhase/index.js";
import * as Web_Event_Internal_Types from "../Web.Event.Internal.Types/index.js";
var fromJust = /* #__PURE__ */ Data_Maybe.fromJust();
var toEnum = /* #__PURE__ */ Data_Enum.toEnum(Web_Event_EventPhase.boundedEnumEventPhase);
var EventType = function (x) {
    return x;
};
var target = function ($3) {
    return Data_Nullable.toMaybe($foreign["_target"]($3));
};
var ordEventType = Data_Ord.ordString;
var newtypeEventType = {
    Coercible0: function () {
        return undefined;
    }
};
var eventPhase = function () {
    return function ($4) {
        return fromJust(toEnum($foreign.eventPhaseIndex($4)));
    };
};
var eqEventType = Data_Eq.eqString;
var currentTarget = function ($5) {
    return Data_Nullable.toMaybe($foreign["_currentTarget"]($5));
};
export {
    type_,
    stopPropagation,
    stopImmediatePropagation,
    bubbles,
    cancelable,
    preventDefault,
    defaultPrevented,
    timeStamp
} from "./foreign.js";
export {
    EventType,
    target,
    currentTarget,
    eventPhase,
    newtypeEventType,
    eqEventType,
    ordEventType
};