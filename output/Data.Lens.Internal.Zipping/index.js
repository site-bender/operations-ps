// Generated by purs version 0.15.15
var Zipping = function (x) {
    return x;
};
var profunctorZipping = {
    dimap: function (f) {
        return function (g) {
            return function (v) {
                return function (a1) {
                    return function (a2) {
                        return g(v(f(a1))(f(a2)));
                    };
                };
            };
        };
    }
};
var newtypeZipping = {
    Coercible0: function () {
        return undefined;
    }
};
var closedZipping = {
    closed: function (v) {
        return function (f1) {
            return function (f2) {
                return function (x) {
                    return v(f1(x))(f2(x));
                };
            };
        };
    },
    Profunctor0: function () {
        return profunctorZipping;
    }
};
export {
    Zipping,
    newtypeZipping,
    profunctorZipping,
    closedZipping
};
//# sourceMappingURL=index.js.map
