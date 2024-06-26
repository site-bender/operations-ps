import * as Data_Foldable from "../Data.Foldable/index.js";
import * as Effect from "../Effect/index.js";
import * as Halogen_Subscription from "../Halogen.Subscription/index.js";
import * as Web_Event_EventTarget from "../Web.Event.EventTarget/index.js";
var traverse_ = /* #__PURE__ */ Data_Foldable.traverse_(Effect.applicativeEffect)(Data_Foldable.foldableMaybe);

// | Constructs an `Emitter` for a DOM event. Accepts a function that maps event
// | values to a `Maybe`-wrapped action, allowing it to filter events if
// | necessary.
var eventListener = function (eventType) {
    return function (target) {
        return function (f) {
            return Halogen_Subscription.makeEmitter(function (push) {
                return function __do() {
                    var listener = Web_Event_EventTarget.eventListener(function (ev) {
                        return traverse_(push)(f(ev));
                    })();
                    Web_Event_EventTarget.addEventListener(eventType)(listener)(false)(target)();
                    return Web_Event_EventTarget.removeEventListener(eventType)(listener)(false)(target);
                };
            });
        };
    };
};
export {
    eventListener
};
