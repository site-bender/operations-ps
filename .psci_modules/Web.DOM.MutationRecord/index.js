import * as $foreign from "./foreign.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Nullable from "../Data.Nullable/index.js";
import * as Effect from "../Effect/index.js";
var map = /* #__PURE__ */ Data_Functor.map(Effect.functorEffect);
var MutationRecordAttributes = /* #__PURE__ */ (function () {
    function MutationRecordAttributes() {

    };
    MutationRecordAttributes.value = new MutationRecordAttributes();
    return MutationRecordAttributes;
})();
var MutationRecordCharacterData = /* #__PURE__ */ (function () {
    function MutationRecordCharacterData() {

    };
    MutationRecordCharacterData.value = new MutationRecordCharacterData();
    return MutationRecordCharacterData;
})();
var MutationRecordChildList = /* #__PURE__ */ (function () {
    function MutationRecordChildList() {

    };
    MutationRecordChildList.value = new MutationRecordChildList();
    return MutationRecordChildList;
})();
var type_ = function () {
    var stringToType = function (v) {
        if (v === "attributes") {
            return MutationRecordAttributes.value;
        };
        if (v === "characterData") {
            return MutationRecordCharacterData.value;
        };
        if (v === "childList") {
            return MutationRecordChildList.value;
        };
        throw new Error("Failed pattern match at Web.DOM.MutationRecord (line 36, column 18 - line 39, column 43): " + [ v.constructor.name ]);
    };
    var $4 = map(stringToType);
    return function ($5) {
        return $4($foreign.typeString($5));
    };
};
var previousSibling = /* #__PURE__ */ (function () {
    var $6 = map(Data_Nullable.toMaybe);
    return function ($7) {
        return $6($foreign["_previousSibling"]($7));
    };
})();
var oldValue = /* #__PURE__ */ (function () {
    var $8 = map(Data_Nullable.toMaybe);
    return function ($9) {
        return $8($foreign["_oldValue"]($9));
    };
})();
var nextSibling = /* #__PURE__ */ (function () {
    var $10 = map(Data_Nullable.toMaybe);
    return function ($11) {
        return $10($foreign["_nextSibling"]($11));
    };
})();
var attributeNamespace = /* #__PURE__ */ (function () {
    var $12 = map(Data_Nullable.toMaybe);
    return function ($13) {
        return $12($foreign["_attributeNamespace"]($13));
    };
})();
var attributeName = /* #__PURE__ */ (function () {
    var $14 = map(Data_Nullable.toMaybe);
    return function ($15) {
        return $14($foreign["_attributeName"]($15));
    };
})();
export {
    typeString,
    target,
    addedNodes,
    removedNodes
} from "./foreign.js";
export {
    MutationRecordAttributes,
    MutationRecordCharacterData,
    MutationRecordChildList,
    type_,
    nextSibling,
    previousSibling,
    attributeName,
    attributeNamespace,
    oldValue
};
