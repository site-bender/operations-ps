// Generated by purs version 0.15.15
var Exchange = /* #__PURE__ */ (function () {
    function Exchange(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Exchange.create = function (value0) {
        return function (value1) {
            return new Exchange(value0, value1);
        };
    };
    return Exchange;
})();
var profunctorExchange = {
    dimap: function (f) {
        return function (g) {
            return function (v) {
                return new Exchange(function ($12) {
                    return v.value0(f($12));
                }, function ($13) {
                    return g(v.value1($13));
                });
            };
        };
    }
};
var functorExchange = {
    map: function (f) {
        return function (v) {
            return new Exchange(v.value0, function ($14) {
                return f(v.value1($14));
            });
        };
    }
};
export {
    Exchange,
    functorExchange,
    profunctorExchange
};
