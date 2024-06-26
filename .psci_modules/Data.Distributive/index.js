import * as Control_Category from "../Control.Category/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Identity from "../Data.Identity/index.js";
import * as Data_Newtype from "../Data.Newtype/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
import * as Data_Unit from "../Data.Unit/index.js";
import * as Type_Equality from "../Type.Equality/index.js";
var unwrap = /* #__PURE__ */ Data_Newtype.unwrap();
var identity = /* #__PURE__ */ Control_Category.identity(Control_Category.categoryFn);
var distributiveIdentity = {
    distribute: function (dictFunctor) {
        var $34 = Data_Functor.map(dictFunctor)(unwrap);
        return function ($35) {
            return Data_Identity.Identity($34($35));
        };
    },
    collect: function (dictFunctor) {
        var map = Data_Functor.map(dictFunctor);
        return function (f) {
            var $36 = map(function ($38) {
                return unwrap(f($38));
            });
            return function ($37) {
                return Data_Identity.Identity($36($37));
            };
        };
    },
    Functor0: function () {
        return Data_Identity.functorIdentity;
    }
};
var distribute = function (dict) {
    return dict.distribute;
};
var distributiveFunction = {
    distribute: function (dictFunctor) {
        var map = Data_Functor.map(dictFunctor);
        return function (a) {
            return function (e) {
                return map(function (v) {
                    return v(e);
                })(a);
            };
        };
    },
    collect: function (dictFunctor) {
        var map = Data_Functor.map(dictFunctor);
        return function (f) {
            var $39 = distribute(distributiveFunction)(dictFunctor);
            var $40 = map(f);
            return function ($41) {
                return $39($40($41));
            };
        };
    },
    Functor0: function () {
        return Data_Functor.functorFn;
    }
};

// | Zip an arbitrary collection of containers and summarize the results
var cotraverse = function (dictDistributive) {
    var map = Data_Functor.map(dictDistributive.Functor0());
    var distribute1 = distribute(dictDistributive);
    return function (dictFunctor) {
        var distribute2 = distribute1(dictFunctor);
        return function (f) {
            var $42 = map(f);
            return function ($43) {
                return $42(distribute2($43));
            };
        };
    };
};

// | A default implementation of `collect`, based on `distribute`.
var collectDefault = function (dictDistributive) {
    var distribute1 = distribute(dictDistributive);
    return function (dictFunctor) {
        var distribute2 = distribute1(dictFunctor);
        var map = Data_Functor.map(dictFunctor);
        return function (f) {
            var $44 = map(f);
            return function ($45) {
                return distribute2($44($45));
            };
        };
    };
};
var distributiveTuple = function (dictTypeEquals) {
    var from = Type_Equality.from(dictTypeEquals);
    return {
        collect: function (dictFunctor) {
            return collectDefault(distributiveTuple(dictTypeEquals))(dictFunctor);
        },
        distribute: function (dictFunctor) {
            var $46 = Data_Tuple.Tuple.create(from(Data_Unit.unit));
            var $47 = Data_Functor.map(dictFunctor)(Data_Tuple.snd);
            return function ($48) {
                return $46($47($48));
            };
        },
        Functor0: function () {
            return Data_Tuple.functorTuple;
        }
    };
};
var collect = function (dict) {
    return dict.collect;
};

// | A default implementation of `distribute`, based on `collect`.
var distributeDefault = function (dictDistributive) {
    var collect1 = collect(dictDistributive);
    return function (dictFunctor) {
        return collect1(dictFunctor)(identity);
    };
};
export {
    collect,
    distribute,
    distributeDefault,
    collectDefault,
    cotraverse,
    distributiveIdentity,
    distributiveFunction,
    distributiveTuple
};
