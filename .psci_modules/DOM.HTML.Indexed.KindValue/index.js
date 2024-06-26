import * as Data_Ordering from "../Data.Ordering/index.js";
var KindSubtitles = /* #__PURE__ */ (function () {
    function KindSubtitles() {

    };
    KindSubtitles.value = new KindSubtitles();
    return KindSubtitles;
})();
var KindCaptions = /* #__PURE__ */ (function () {
    function KindCaptions() {

    };
    KindCaptions.value = new KindCaptions();
    return KindCaptions;
})();
var KindDescriptions = /* #__PURE__ */ (function () {
    function KindDescriptions() {

    };
    KindDescriptions.value = new KindDescriptions();
    return KindDescriptions;
})();
var KindChapters = /* #__PURE__ */ (function () {
    function KindChapters() {

    };
    KindChapters.value = new KindChapters();
    return KindChapters;
})();
var KindMetadata = /* #__PURE__ */ (function () {
    function KindMetadata() {

    };
    KindMetadata.value = new KindMetadata();
    return KindMetadata;
})();
var renderKindValue = function (v) {
    if (v instanceof KindSubtitles) {
        return "subtitles";
    };
    if (v instanceof KindCaptions) {
        return "captions";
    };
    if (v instanceof KindDescriptions) {
        return "descriptions";
    };
    if (v instanceof KindChapters) {
        return "chapters";
    };
    if (v instanceof KindMetadata) {
        return "metadata";
    };
    throw new Error("Failed pattern match at DOM.HTML.Indexed.KindValue (line 16, column 19 - line 21, column 29): " + [ v.constructor.name ]);
};
var eqKindValue = {
    eq: function (x) {
        return function (y) {
            if (x instanceof KindSubtitles && y instanceof KindSubtitles) {
                return true;
            };
            if (x instanceof KindCaptions && y instanceof KindCaptions) {
                return true;
            };
            if (x instanceof KindDescriptions && y instanceof KindDescriptions) {
                return true;
            };
            if (x instanceof KindChapters && y instanceof KindChapters) {
                return true;
            };
            if (x instanceof KindMetadata && y instanceof KindMetadata) {
                return true;
            };
            return false;
        };
    }
};
var ordKindValue = {
    compare: function (x) {
        return function (y) {
            if (x instanceof KindSubtitles && y instanceof KindSubtitles) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof KindSubtitles) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof KindSubtitles) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof KindCaptions && y instanceof KindCaptions) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof KindCaptions) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof KindCaptions) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof KindDescriptions && y instanceof KindDescriptions) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof KindDescriptions) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof KindDescriptions) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof KindChapters && y instanceof KindChapters) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof KindChapters) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof KindChapters) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof KindMetadata && y instanceof KindMetadata) {
                return Data_Ordering.EQ.value;
            };
            throw new Error("Failed pattern match at DOM.HTML.Indexed.KindValue (line 0, column 0 - line 0, column 0): " + [ x.constructor.name, y.constructor.name ]);
        };
    },
    Eq0: function () {
        return eqKindValue;
    }
};
export {
    KindSubtitles,
    KindCaptions,
    KindDescriptions,
    KindChapters,
    KindMetadata,
    renderKindValue,
    eqKindValue,
    ordKindValue
};
