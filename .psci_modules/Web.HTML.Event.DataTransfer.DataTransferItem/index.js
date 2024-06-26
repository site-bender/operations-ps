import * as $foreign from "./foreign.js";
import * as Data_Function_Uncurried from "../Data.Function.Uncurried/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Nullable from "../Data.Nullable/index.js";
import * as Data_Ordering from "../Data.Ordering/index.js";
var map = /* #__PURE__ */ Data_Functor.map(Data_Functor.functorFn);
var Text = /* #__PURE__ */ (function () {
    function Text() {

    };
    Text.value = new Text();
    return Text;
})();
var File = /* #__PURE__ */ (function () {
    function File() {

    };
    File.value = new File();
    return File;
})();
var showDataTransferItemKind = {
    show: function (v) {
        if (v instanceof Text) {
            return "Text";
        };
        if (v instanceof File) {
            return "File";
        };
        throw new Error("Failed pattern match at Web.HTML.Event.DataTransfer.DataTransferItem (line 25, column 10 - line 27, column 19): " + [ v.constructor.name ]);
    }
};
var length = $foreign["_length"];

// | Returns the drag data item kind of the `DataTransferItem`. In the case
// | where the `DataTransferItem` object is in _disabled mode_, `Nothing` is
// | returned.
var kind = /* #__PURE__ */ (function () {
    return Data_Function_Uncurried.runFn5($foreign["_kind"])(Data_Maybe.Nothing.value)(Data_Maybe.Just.create)(Text.value)(File.value);
})();
var eqDataTransferItemKind = {
    eq: function (x) {
        return function (y) {
            if (x instanceof Text && y instanceof Text) {
                return true;
            };
            if (x instanceof File && y instanceof File) {
                return true;
            };
            return false;
        };
    }
};
var ordDataTransferItemKind = {
    compare: function (x) {
        return function (y) {
            if (x instanceof Text && y instanceof Text) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof Text) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof Text) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof File && y instanceof File) {
                return Data_Ordering.EQ.value;
            };
            throw new Error("Failed pattern match at Web.HTML.Event.DataTransfer.DataTransferItem (line 0, column 0 - line 0, column 0): " + [ x.constructor.name, y.constructor.name ]);
        };
    },
    Eq0: function () {
        return eqDataTransferItemKind;
    }
};

// | Access an item in the `DataTransferItemList` by index.
var dataTransferItem = /* #__PURE__ */ map(/* #__PURE__ */ map(Data_Nullable.toMaybe))($foreign["_dataTransferItem"]);
export {
    type_
} from "./foreign.js";
export {
    Text,
    File,
    dataTransferItem,
    kind,
    length,
    eqDataTransferItemKind,
    ordDataTransferItemKind,
    showDataTransferItemKind
};
