import * as Data_Unit from "../Data.Unit/index.js";
var $runtime_lazy = function (name, moduleName, init) {
    var state = 0;
    var val;
    return function (lineNumber) {
        if (state === 2) return val;
        if (state === 1) throw new ReferenceError(name + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
        state = 1;
        val = init();
        state = 2;
        return val;
    };
};
var lazyUnit = {
    defer: function (v) {
        return Data_Unit.unit;
    }
};
var lazyFn = {
    defer: function (f) {
        return function (x) {
            return f(Data_Unit.unit)(x);
        };
    }
};
var defer = function (dict) {
    return dict.defer;
};

// | `fix` defines a value as the fixed point of a function.
// |
// | The `Lazy` instance allows us to generate the result lazily.
var fix = function (dictLazy) {
    var defer1 = defer(dictLazy);
    return function (f) {
        var $lazy_go = $runtime_lazy("go", "Control.Lazy", function () {
            return defer1(function (v) {
                return f($lazy_go(25));
            });
        });
        var go = $lazy_go(25);
        return go;
    };
};
export {
    defer,
    fix,
    lazyFn,
    lazyUnit
};
