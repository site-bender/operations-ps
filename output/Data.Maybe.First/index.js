// Generated by purs version 0.15.15
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Monoid from "../Data.Monoid/index.js";
import * as Data_Semigroup from "../Data.Semigroup/index.js";
import * as Data_Show from "../Data.Show/index.js";
var First = function (x) {
    return x;
};
var showFirst = function (dictShow) {
    var show = Data_Show.show(Data_Maybe.showMaybe(dictShow));
    return {
        show: function (v) {
            return "First (" + (show(v) + ")");
        }
    };
};
var semigroupFirst = {
    append: function (v) {
        return function (v1) {
            if (v instanceof Data_Maybe.Just) {
                return v;
            };
            return v1;
        };
    }
};
var ordFirst = function (dictOrd) {
    return Data_Maybe.ordMaybe(dictOrd);
};
var ord1First = Data_Maybe.ord1Maybe;
var newtypeFirst = {
    Coercible0: function () {
        return undefined;
    }
};
var monoidFirst = /* #__PURE__ */ (function () {
    return {
        mempty: Data_Maybe.Nothing.value,
        Semigroup0: function () {
            return semigroupFirst;
        }
    };
})();
var monadFirst = Data_Maybe.monadMaybe;
var invariantFirst = Data_Maybe.invariantMaybe;
var functorFirst = Data_Maybe.functorMaybe;
var extendFirst = Data_Maybe.extendMaybe;
var eqFirst = function (dictEq) {
    return Data_Maybe.eqMaybe(dictEq);
};
var eq1First = Data_Maybe.eq1Maybe;
var boundedFirst = function (dictBounded) {
    return Data_Maybe.boundedMaybe(dictBounded);
};
var bindFirst = Data_Maybe.bindMaybe;
var applyFirst = Data_Maybe.applyMaybe;
var applicativeFirst = Data_Maybe.applicativeMaybe;
var altFirst = {
    alt: /* #__PURE__ */ Data_Semigroup.append(semigroupFirst),
    Functor0: function () {
        return functorFirst;
    }
};
var plusFirst = {
    empty: /* #__PURE__ */ Data_Monoid.mempty(monoidFirst),
    Alt0: function () {
        return altFirst;
    }
};
var alternativeFirst = {
    Applicative0: function () {
        return applicativeFirst;
    },
    Plus1: function () {
        return plusFirst;
    }
};
export {
    First,
    newtypeFirst,
    eqFirst,
    eq1First,
    ordFirst,
    ord1First,
    boundedFirst,
    functorFirst,
    invariantFirst,
    applyFirst,
    applicativeFirst,
    bindFirst,
    monadFirst,
    extendFirst,
    showFirst,
    semigroupFirst,
    monoidFirst,
    altFirst,
    plusFirst,
    alternativeFirst
};
//# sourceMappingURL=index.js.map
