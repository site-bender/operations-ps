import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_MediaType from "../Data.MediaType/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Ordering from "../Data.Ordering/index.js";
import * as Data_Semigroup from "../Data.Semigroup/index.js";
import * as Data_String_Common from "../Data.String.Common/index.js";
var append = /* #__PURE__ */ Data_Semigroup.append(Data_Semigroup.semigroupArray);
var map = /* #__PURE__ */ Data_Functor.map(Data_Functor.functorArray);
var eq = /* #__PURE__ */ Data_Eq.eq(Data_MediaType.eqMediaType);
var compare = /* #__PURE__ */ Data_Ord.compare(Data_MediaType.ordMediaType);
var compare1 = /* #__PURE__ */ Data_Ord.compare(Data_Ord.ordString);
var AcceptMediaType = /* #__PURE__ */ (function () {
    function AcceptMediaType(value0) {
        this.value0 = value0;
    };
    AcceptMediaType.create = function (value0) {
        return new AcceptMediaType(value0);
    };
    return AcceptMediaType;
})();
var AcceptFileExtension = /* #__PURE__ */ (function () {
    function AcceptFileExtension(value0) {
        this.value0 = value0;
    };
    AcceptFileExtension.create = function (value0) {
        return new AcceptFileExtension(value0);
    };
    return AcceptFileExtension;
})();
var InputAcceptType = function (x) {
    return x;
};
var semigroupInputAcceptType = {
    append: function (v) {
        return function (v1) {
            return append(v)(v1);
        };
    }
};
var renderInputAcceptTypeAtom = function (v) {
    if (v instanceof AcceptMediaType) {
        return v.value0;
    };
    if (v instanceof AcceptFileExtension) {
        return v.value0;
    };
    throw new Error("Failed pattern match at DOM.HTML.Indexed.InputAcceptType (line 34, column 29 - line 36, column 33): " + [ v.constructor.name ]);
};
var renderInputAcceptType = function (v) {
    return Data_String_Common.joinWith(",")(map(renderInputAcceptTypeAtom)(v));
};
var mediaType = function (mt) {
    return [ new AcceptMediaType(mt) ];
};
var extension = function (ext) {
    return [ new AcceptFileExtension(ext) ];
};
var eqInputAcceptTypeAtom = {
    eq: function (x) {
        return function (y) {
            if (x instanceof AcceptMediaType && y instanceof AcceptMediaType) {
                return eq(x.value0)(y.value0);
            };
            if (x instanceof AcceptFileExtension && y instanceof AcceptFileExtension) {
                return x.value0 === y.value0;
            };
            return false;
        };
    }
};
var eq2 = /* #__PURE__ */ Data_Eq.eq(/* #__PURE__ */ Data_Eq.eqArray(eqInputAcceptTypeAtom));
var ordInputAcceptTypeAtom = {
    compare: function (x) {
        return function (y) {
            if (x instanceof AcceptMediaType && y instanceof AcceptMediaType) {
                return compare(x.value0)(y.value0);
            };
            if (x instanceof AcceptMediaType) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof AcceptMediaType) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof AcceptFileExtension && y instanceof AcceptFileExtension) {
                return compare1(x.value0)(y.value0);
            };
            throw new Error("Failed pattern match at DOM.HTML.Indexed.InputAcceptType (line 0, column 0 - line 0, column 0): " + [ x.constructor.name, y.constructor.name ]);
        };
    },
    Eq0: function () {
        return eqInputAcceptTypeAtom;
    }
};
var compare2 = /* #__PURE__ */ Data_Ord.compare(/* #__PURE__ */ Data_Ord.ordArray(ordInputAcceptTypeAtom));
var eqInputAcceptType = {
    eq: function (x) {
        return function (y) {
            return eq2(x)(y);
        };
    }
};
var ordInputAcceptType = {
    compare: function (x) {
        return function (y) {
            return compare2(x)(y);
        };
    },
    Eq0: function () {
        return eqInputAcceptType;
    }
};
export {
    InputAcceptType,
    mediaType,
    extension,
    AcceptMediaType,
    AcceptFileExtension,
    renderInputAcceptType,
    renderInputAcceptTypeAtom,
    eqInputAcceptType,
    ordInputAcceptType,
    semigroupInputAcceptType,
    eqInputAcceptTypeAtom,
    ordInputAcceptTypeAtom
};
