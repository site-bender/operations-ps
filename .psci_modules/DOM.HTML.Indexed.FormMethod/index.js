import * as Data_Ordering from "../Data.Ordering/index.js";
var POST = /* #__PURE__ */ (function () {
    function POST() {

    };
    POST.value = new POST();
    return POST;
})();
var GET = /* #__PURE__ */ (function () {
    function GET() {

    };
    GET.value = new GET();
    return GET;
})();
var renderFormMethod = function (v) {
    if (v instanceof POST) {
        return "post";
    };
    if (v instanceof GET) {
        return "get";
    };
    throw new Error("Failed pattern match at DOM.HTML.Indexed.FormMethod (line 13, column 20 - line 15, column 15): " + [ v.constructor.name ]);
};
var eqFormMethod = {
    eq: function (x) {
        return function (y) {
            if (x instanceof POST && y instanceof POST) {
                return true;
            };
            if (x instanceof GET && y instanceof GET) {
                return true;
            };
            return false;
        };
    }
};
var ordFormMethod = {
    compare: function (x) {
        return function (y) {
            if (x instanceof POST && y instanceof POST) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof POST) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof POST) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof GET && y instanceof GET) {
                return Data_Ordering.EQ.value;
            };
            throw new Error("Failed pattern match at DOM.HTML.Indexed.FormMethod (line 0, column 0 - line 0, column 0): " + [ x.constructor.name, y.constructor.name ]);
        };
    },
    Eq0: function () {
        return eqFormMethod;
    }
};
export {
    POST,
    GET,
    renderFormMethod,
    eqFormMethod,
    ordFormMethod
};
