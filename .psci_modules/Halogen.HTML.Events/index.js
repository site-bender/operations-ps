import * as Control_Bind from "../Control.Bind/index.js";
import * as Control_Monad_Except from "../Control.Monad.Except/index.js";
import * as Control_Monad_Except_Trans from "../Control.Monad.Except.Trans/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Identity from "../Data.Identity/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Unfoldable from "../Data.Unfoldable/index.js";
import * as Effect_Unsafe from "../Effect.Unsafe/index.js";
import * as Foreign from "../Foreign/index.js";
import * as Foreign_Index from "../Foreign.Index/index.js";
import * as Halogen_HTML_Core from "../Halogen.HTML.Core/index.js";
import * as Halogen_Query_Input from "../Halogen.Query.Input/index.js";
import * as Unsafe_Coerce from "../Unsafe.Coerce/index.js";
import * as Web_Clipboard_ClipboardEvent_EventTypes from "../Web.Clipboard.ClipboardEvent.EventTypes/index.js";
import * as Web_Event_Event from "../Web.Event.Event/index.js";
import * as Web_File_FileList from "../Web.File.FileList/index.js";
import * as Web_HTML_Event_DragEvent_EventTypes from "../Web.HTML.Event.DragEvent.EventTypes/index.js";
import * as Web_HTML_Event_EventTypes from "../Web.HTML.Event.EventTypes/index.js";
import * as Web_HTML_HTMLInputElement from "../Web.HTML.HTMLInputElement/index.js";
import * as Web_UIEvent_FocusEvent_EventTypes from "../Web.UIEvent.FocusEvent.EventTypes/index.js";
import * as Web_UIEvent_KeyboardEvent_EventTypes from "../Web.UIEvent.KeyboardEvent.EventTypes/index.js";
import * as Web_UIEvent_MouseEvent_EventTypes from "../Web.UIEvent.MouseEvent.EventTypes/index.js";
import * as Web_UIEvent_WheelEvent_EventTypes from "../Web.UIEvent.WheelEvent.EventTypes/index.js";
var map = /* #__PURE__ */ Data_Functor.map(Data_Maybe.functorMaybe);
var composeKleisli = /* #__PURE__ */ Control_Bind.composeKleisli(Data_Maybe.bindMaybe);
var composeKleisliFlipped = /* #__PURE__ */ Control_Bind.composeKleisliFlipped(/* #__PURE__ */ Control_Monad_Except_Trans.bindExceptT(Data_Identity.monadIdentity));
var readProp = /* #__PURE__ */ Foreign_Index.readProp(Data_Identity.monadIdentity);
var readString = /* #__PURE__ */ Foreign.readString(Data_Identity.monadIdentity);
var wheelHandler = Unsafe_Coerce.unsafeCoerce;
var touchHandler = Unsafe_Coerce.unsafeCoerce;
var mouseHandler = Unsafe_Coerce.unsafeCoerce;
var keyHandler = Unsafe_Coerce.unsafeCoerce;
var handler$prime = function (et) {
    return function (f) {
        return Halogen_HTML_Core.handler(et)(function (ev) {
            return map(Halogen_Query_Input.Action.create)(f(ev));
        });
    };
};
var handler = function (et) {
    return function (f) {
        return Halogen_HTML_Core.handler(et)(function (ev) {
            return new Data_Maybe.Just(new Halogen_Query_Input.Action(f(ev)));
        });
    };
};
var onAbort = /* #__PURE__ */ handler("abort");
var onAuxClick = /* #__PURE__ */ (function () {
    var $13 = handler(Web_UIEvent_MouseEvent_EventTypes.auxclick);
    return function ($14) {
        return $13(mouseHandler($14));
    };
})();
var onChange = /* #__PURE__ */ handler(Web_HTML_Event_EventTypes.change);
var onClick = /* #__PURE__ */ (function () {
    var $15 = handler(Web_UIEvent_MouseEvent_EventTypes.click);
    return function ($16) {
        return $15(mouseHandler($16));
    };
})();

// onContextMenu :: forall r i. (MouseEvent -> i) -> IProp (onContextMenu :: MouseEvent | r) i
// onContextMenu = handler ET.contextmenu <<< mouseHandler
var onDoubleClick = /* #__PURE__ */ (function () {
    var $17 = handler(Web_UIEvent_MouseEvent_EventTypes.dblclick);
    return function ($18) {
        return $17(mouseHandler($18));
    };
})();
var onError = /* #__PURE__ */ handler(Web_HTML_Event_EventTypes.error);
var onFileUpload = function (dictUnfoldable) {
    var none = Data_Unfoldable.none(dictUnfoldable);
    var items = Web_File_FileList.items(dictUnfoldable);
    return function (f) {
        return handler(Web_HTML_Event_EventTypes.change)((function () {
            var $19 = Data_Maybe.maybe(none)(items);
            var $20 = composeKleisli(Web_Event_Event.target)(composeKleisli(Web_HTML_HTMLInputElement.fromEventTarget)(function ($22) {
                return Effect_Unsafe.unsafePerformEffect(Web_HTML_HTMLInputElement.files($22));
            }));
            return function ($21) {
                return f($19($20($21)));
            };
        })());
    };
};
var onInput = /* #__PURE__ */ handler(Web_HTML_Event_EventTypes.input);
var onInvalid = /* #__PURE__ */ handler(Web_HTML_Event_EventTypes.invalid);
var onKeyDown = /* #__PURE__ */ (function () {
    var $23 = handler(Web_UIEvent_KeyboardEvent_EventTypes.keydown);
    return function ($24) {
        return $23(keyHandler($24));
    };
})();

// onKeyPress :: forall r i. (KeyboardEvent -> i) -> IProp (onKeyPress :: KeyboardEvent | r) i
// onKeyPress = handler KET.keypress <<< keyHandler
var onKeyUp = /* #__PURE__ */ (function () {
    var $25 = handler(Web_UIEvent_KeyboardEvent_EventTypes.keyup);
    return function ($26) {
        return $25(keyHandler($26));
    };
})();
var onLoad = /* #__PURE__ */ handler(Web_HTML_Event_EventTypes.load);
var onMouseDown = /* #__PURE__ */ (function () {
    var $27 = handler(Web_UIEvent_MouseEvent_EventTypes.mousedown);
    return function ($28) {
        return $27(mouseHandler($28));
    };
})();
var onMouseEnter = /* #__PURE__ */ (function () {
    var $29 = handler(Web_UIEvent_MouseEvent_EventTypes.mouseenter);
    return function ($30) {
        return $29(mouseHandler($30));
    };
})();
var onMouseLeave = /* #__PURE__ */ (function () {
    var $31 = handler(Web_UIEvent_MouseEvent_EventTypes.mouseleave);
    return function ($32) {
        return $31(mouseHandler($32));
    };
})();
var onMouseMove = /* #__PURE__ */ (function () {
    var $33 = handler(Web_UIEvent_MouseEvent_EventTypes.mousemove);
    return function ($34) {
        return $33(mouseHandler($34));
    };
})();
var onMouseOut = /* #__PURE__ */ (function () {
    var $35 = handler(Web_UIEvent_MouseEvent_EventTypes.mouseout);
    return function ($36) {
        return $35(mouseHandler($36));
    };
})();
var onMouseOver = /* #__PURE__ */ (function () {
    var $37 = handler(Web_UIEvent_MouseEvent_EventTypes.mouseover);
    return function ($38) {
        return $37(mouseHandler($38));
    };
})();
var onMouseUp = /* #__PURE__ */ (function () {
    var $39 = handler(Web_UIEvent_MouseEvent_EventTypes.mouseup);
    return function ($40) {
        return $39(mouseHandler($40));
    };
})();
var onReset = /* #__PURE__ */ handler("reset");
var onResize = /* #__PURE__ */ handler("resize");
var onScroll = /* #__PURE__ */ handler("scroll");
var onSelect = /* #__PURE__ */ handler(Web_HTML_Event_EventTypes.select);
var onSubmit = /* #__PURE__ */ handler("submit");
var onTouchCancel = /* #__PURE__ */ (function () {
    var $41 = handler("touchcancel");
    return function ($42) {
        return $41(touchHandler($42));
    };
})();
var onTouchEnd = /* #__PURE__ */ (function () {
    var $43 = handler("touchend");
    return function ($44) {
        return $43(touchHandler($44));
    };
})();
var onTouchEnter = /* #__PURE__ */ (function () {
    var $45 = handler("touchenter");
    return function ($46) {
        return $45(touchHandler($46));
    };
})();
var onTouchLeave = /* #__PURE__ */ (function () {
    var $47 = handler("touchleave");
    return function ($48) {
        return $47(touchHandler($48));
    };
})();
var onTouchMove = /* #__PURE__ */ (function () {
    var $49 = handler("touchmove");
    return function ($50) {
        return $49(touchHandler($50));
    };
})();
var onTouchStart = /* #__PURE__ */ (function () {
    var $51 = handler("touchstart");
    return function ($52) {
        return $51(touchHandler($52));
    };
})();
var onTransitionEnd = /* #__PURE__ */ handler("transitionend");
var onWheel = /* #__PURE__ */ (function () {
    var $53 = handler(Web_UIEvent_WheelEvent_EventTypes.wheel);
    return function ($54) {
        return $53(wheelHandler($54));
    };
})();
var focusHandler = Unsafe_Coerce.unsafeCoerce;
var onBlur = /* #__PURE__ */ (function () {
    var $55 = handler(Web_HTML_Event_EventTypes.blur);
    return function ($56) {
        return $55(focusHandler($56));
    };
})();
var onFocus = /* #__PURE__ */ (function () {
    var $57 = handler(Web_UIEvent_FocusEvent_EventTypes.focus);
    return function ($58) {
        return $57(focusHandler($58));
    };
})();
var onFocusIn = /* #__PURE__ */ (function () {
    var $59 = handler(Web_UIEvent_FocusEvent_EventTypes.focusin);
    return function ($60) {
        return $59(focusHandler($60));
    };
})();
var onFocusOut = /* #__PURE__ */ (function () {
    var $61 = handler(Web_UIEvent_FocusEvent_EventTypes.focusout);
    return function ($62) {
        return $61(focusHandler($62));
    };
})();
var dragHandler = Unsafe_Coerce.unsafeCoerce;
var onDrag = /* #__PURE__ */ (function () {
    var $63 = handler(Web_HTML_Event_DragEvent_EventTypes.drag);
    return function ($64) {
        return $63(dragHandler($64));
    };
})();
var onDragEnd = /* #__PURE__ */ (function () {
    var $65 = handler(Web_HTML_Event_DragEvent_EventTypes.dragend);
    return function ($66) {
        return $65(dragHandler($66));
    };
})();
var onDragEnter = /* #__PURE__ */ (function () {
    var $67 = handler(Web_HTML_Event_DragEvent_EventTypes.dragenter);
    return function ($68) {
        return $67(dragHandler($68));
    };
})();
var onDragExit = /* #__PURE__ */ (function () {
    var $69 = handler(Web_HTML_Event_DragEvent_EventTypes.dragexit);
    return function ($70) {
        return $69(dragHandler($70));
    };
})();
var onDragLeave = /* #__PURE__ */ (function () {
    var $71 = handler(Web_HTML_Event_DragEvent_EventTypes.dragleave);
    return function ($72) {
        return $71(dragHandler($72));
    };
})();
var onDragOver = /* #__PURE__ */ (function () {
    var $73 = handler(Web_HTML_Event_DragEvent_EventTypes.dragover);
    return function ($74) {
        return $73(dragHandler($74));
    };
})();
var onDragStart = /* #__PURE__ */ (function () {
    var $75 = handler(Web_HTML_Event_DragEvent_EventTypes.dragstart);
    return function ($76) {
        return $75(dragHandler($76));
    };
})();
var onDrop = /* #__PURE__ */ (function () {
    var $77 = handler(Web_HTML_Event_DragEvent_EventTypes.drop);
    return function ($78) {
        return $77(dragHandler($78));
    };
})();
var clipboardHandler = Unsafe_Coerce.unsafeCoerce;
var onCopy = /* #__PURE__ */ (function () {
    var $79 = handler(Web_Clipboard_ClipboardEvent_EventTypes.copy);
    return function ($80) {
        return $79(clipboardHandler($80));
    };
})();
var onCut = /* #__PURE__ */ (function () {
    var $81 = handler(Web_Clipboard_ClipboardEvent_EventTypes.cut);
    return function ($82) {
        return $81(clipboardHandler($82));
    };
})();
var onPaste = /* #__PURE__ */ (function () {
    var $83 = handler(Web_Clipboard_ClipboardEvent_EventTypes.paste);
    return function ($84) {
        return $83(clipboardHandler($84));
    };
})();

// | Attaches event handler to event `key` with getting `prop` field as an
// | argument of `handler`.
var addForeignPropHandler = function (key) {
    return function (prop) {
        return function (reader) {
            return function (f) {
                var go = function (a) {
                    return composeKleisliFlipped(reader)(readProp(prop))(Foreign.unsafeToForeign(a));
                };
                return handler$prime(key)(composeKleisli(Web_Event_Event.currentTarget)(function (e) {
                    return Data_Either.either(Data_Function["const"](Data_Maybe.Nothing.value))(function ($85) {
                        return Data_Maybe.Just.create(f($85));
                    })(Control_Monad_Except.runExcept(go(e)));
                }));
            };
        };
    };
};

// | Attaches an event handler which will fire when a checkbox is checked or
// | unchecked.
var onChecked = /* #__PURE__ */ addForeignPropHandler(Web_HTML_Event_EventTypes.change)("checked")(/* #__PURE__ */ Foreign.readBoolean(Data_Identity.monadIdentity));

// | Attaches an event handler which will produce an input when the seleced index of a
// | `select` element changes.
var onSelectedIndexChange = /* #__PURE__ */ addForeignPropHandler(Web_HTML_Event_EventTypes.change)("selectedIndex")(/* #__PURE__ */ Foreign.readInt(Data_Identity.monadIdentity));

// | Attaches an event handler which will produce an input when the value of an
// | input field changes.
var onValueChange = /* #__PURE__ */ addForeignPropHandler(Web_HTML_Event_EventTypes.change)("value")(readString);

// | Attaches an event handler which will fire on input.
var onValueInput = /* #__PURE__ */ addForeignPropHandler(Web_HTML_Event_EventTypes.input)("value")(readString);
export {
    handler,
    handler$prime,
    onAbort,
    onError,
    onLoad,
    onScroll,
    onChange,
    onFileUpload,
    onInput,
    onInvalid,
    onReset,
    onSelect,
    onSubmit,
    onTransitionEnd,
    onCopy,
    onPaste,
    onCut,
    onAuxClick,
    onClick,
    onDoubleClick,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseMove,
    onMouseOver,
    onMouseOut,
    onMouseUp,
    onWheel,
    onKeyDown,
    onKeyUp,
    onBlur,
    onFocus,
    onFocusIn,
    onFocusOut,
    onDrag,
    onDragEnd,
    onDragExit,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDragStart,
    onDrop,
    onTouchCancel,
    onTouchEnd,
    onTouchEnter,
    onTouchLeave,
    onTouchMove,
    onTouchStart,
    onResize,
    onValueChange,
    onValueInput,
    onSelectedIndexChange,
    onChecked
};
