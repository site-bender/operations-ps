var rowListSetImpl = function (dictTypeEquals) {
    return function (dictTypeEquals1) {
        return function () {
            return {};
        };
    };
};
var rowListRemoveNil = {};
var rowListRemoveCons = function () {
    return function () {
        return function () {
            return {};
        };
    };
};
var rowListNubNil = {};
var rowListNubCons = function (dictTypeEquals) {
    return function (dictTypeEquals1) {
        return function (dictTypeEquals2) {
            return function () {
                return function () {
                    return {};
                };
            };
        };
    };
};
var rowListAppendNil = function (dictTypeEquals) {
    return {};
};
var rowListAppendCons = function () {
    return function (dictTypeEquals) {
        return {};
    };
};
var listToRowNil = {};
var listToRowCons = function () {
    return function () {
        return {};
    };
};
export {
    listToRowNil,
    listToRowCons,
    rowListRemoveNil,
    rowListRemoveCons,
    rowListSetImpl,
    rowListNubNil,
    rowListNubCons,
    rowListAppendNil,
    rowListAppendCons
};