// Generated by purs version 0.15.15
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Plus from "../Control.Plus/index.js";
import * as Data_Boolean from "../Data.Boolean/index.js";
import * as Data_List_Types from "../Data.List.Types/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Ordering from "../Data.Ordering/index.js";
import * as Data_Symbol from "../Data.Symbol/index.js";
import * as Partial_Unsafe from "../Partial.Unsafe/index.js";
import * as Record_Unsafe from "../Record.Unsafe/index.js";
import * as Type_Proxy from "../Type.Proxy/index.js";
var compare = /* #__PURE__ */ Data_Ord.compare(Data_Ord.ordString);
var VariantRep = function (x) {
    return x;
};
var variantTravNil = {};
var variantTravCons = function () {
    return function () {
        return function () {
            return function (dictTypeEquals) {
                return {};
            };
        };
    };
};
var variantTagsNil = {
    variantTags: function (v) {
        return Data_List_Types.Nil.value;
    }
};
var variantTags = function (dict) {
    return dict.variantTags;
};
var variantTagsCons = function (dictVariantTags) {
    var variantTags1 = variantTags(dictVariantTags);
    return function (dictIsSymbol) {
        var reflectSymbol = Data_Symbol.reflectSymbol(dictIsSymbol);
        return {
            variantTags: function (v) {
                return new Data_List_Types.Cons(reflectSymbol(Type_Proxy["Proxy"].value), variantTags1(Type_Proxy["Proxy"].value));
            }
        };
    };
};
var variantMatchNil = {};
var variantMatchCons = function () {
    return function () {
        return function (dictTypeEquals) {
            return {};
        };
    };
};
var variantMapNil = {};
var variantMapCons = function () {
    return function () {
        return function () {
            return function (dictTypeEquals) {
                return {};
            };
        };
    };
};
var variantFTravNil = {};
var variantFTravCons = function () {
    return function () {
        return function () {
            return function (dictTypeEquals) {
                return {};
            };
        };
    };
};
var variantFMatchNil = {};
var variantFMatchCons = function () {
    return function () {
        return function (dictTypeEquals) {
            return {};
        };
    };
};
var variantFMapNil = {};
var variantFMapCons = function () {
    return function () {
        return function () {
            return function (dictTypeEquals) {
                return {};
            };
        };
    };
};
var lookupToEnum = /* #__PURE__ */ (function () {
    var go = function ($copy_ix) {
        return function ($copy_v) {
            return function ($copy_v1) {
                var $tco_var_ix = $copy_ix;
                var $tco_var_v = $copy_v;
                var $tco_done = false;
                var $tco_result;
                function $tco_loop(ix, v, v1) {
                    if (v instanceof Data_List_Types.Cons && v1 instanceof Data_List_Types.Cons) {
                        if (v1.value0.cardinality > ix) {
                            var v2 = v1.value0.toEnum(ix);
                            if (v2 instanceof Data_Maybe.Just) {
                                $tco_done = true;
                                return new Data_Maybe.Just({
                                    type: v.value0,
                                    value: v2.value0
                                });
                            };
                            $tco_done = true;
                            return Data_Maybe.Nothing.value;
                        };
                        if (Data_Boolean.otherwise) {
                            $tco_var_ix = ix - v1.value0.cardinality | 0;
                            $tco_var_v = v.value1;
                            $copy_v1 = v1.value1;
                            return;
                        };
                    };
                    $tco_done = true;
                    return Data_Maybe.Nothing.value;
                };
                while (!$tco_done) {
                    $tco_result = $tco_loop($tco_var_ix, $tco_var_v, $copy_v1);
                };
                return $tco_result;
            };
        };
    };
    return go;
})();
var lookupTag = function (tag) {
    var go = function ($copy_v) {
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v) {
            if (v instanceof Data_List_Types.Cons) {
                if (v.value0 === tag) {
                    $tco_done = true;
                    return true;
                };
                if (Data_Boolean.otherwise) {
                    $copy_v = v.value1;
                    return;
                };
            };
            if (v instanceof Data_List_Types.Nil) {
                $tco_done = true;
                return false;
            };
            throw new Error("Failed pattern match at Data.Variant.Internal (line 154, column 8 - line 158, column 18): " + [ v.constructor.name ]);
        };
        while (!$tco_done) {
            $tco_result = $tco_loop($copy_v);
        };
        return $tco_result;
    };
    return go;
};
var lookupCardinality = /* #__PURE__ */ (function () {
    var go = function ($copy_acc) {
        return function ($copy_v) {
            var $tco_var_acc = $copy_acc;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(acc, v) {
                if (v instanceof Data_List_Types.Cons) {
                    $tco_var_acc = acc + v.value0.cardinality | 0;
                    $copy_v = v.value1;
                    return;
                };
                if (v instanceof Data_List_Types.Nil) {
                    $tco_done = true;
                    return acc;
                };
                throw new Error("Failed pattern match at Data.Variant.Internal (line 276, column 12 - line 278, column 16): " + [ v.constructor.name ]);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_acc, $copy_v);
            };
            return $tco_result;
        };
    };
    return go(0);
})();
var impossible = function (str) {
    return Partial_Unsafe.unsafeCrashWith("Data.Variant: impossible `" + (str + "`"));
};
var lookup = function (name) {
    return function (tag) {
        var go = function ($copy_v) {
            return function ($copy_v1) {
                var $tco_var_v = $copy_v;
                var $tco_done = false;
                var $tco_result;
                function $tco_loop(v, v1) {
                    if (v instanceof Data_List_Types.Cons && v1 instanceof Data_List_Types.Cons) {
                        if (v.value0 === tag) {
                            $tco_done = true;
                            return v1.value0;
                        };
                        if (Data_Boolean.otherwise) {
                            $tco_var_v = v.value1;
                            $copy_v1 = v1.value1;
                            return;
                        };
                    };
                    $tco_done = true;
                    return impossible(name);
                };
                while (!$tco_done) {
                    $tco_result = $tco_loop($tco_var_v, $copy_v1);
                };
                return $tco_result;
            };
        };
        return go;
    };
};
var lookupEq = function (tags) {
    return function (eqs) {
        return function (v) {
            return function (v1) {
                if (v.type === v1.type) {
                    return lookup("eq")(v.type)(tags)(eqs)(v.value)(v1.value);
                };
                if (Data_Boolean.otherwise) {
                    return false;
                };
                throw new Error("Failed pattern match at Data.Variant.Internal (line 160, column 1 - line 165, column 12): " + [ tags.constructor.name, eqs.constructor.name, v.constructor.name, v1.constructor.name ]);
            };
        };
    };
};
var lookupOrd = function (tags) {
    return function (ords) {
        return function (v) {
            return function (v1) {
                var v3 = compare(v.type)(v1.type);
                if (v3 instanceof Data_Ordering.EQ) {
                    return lookup("compare")(v.type)(tags)(ords)(v.value)(v1.value);
                };
                return v3;
            };
        };
    };
};
var lookupFirst = function (name) {
    return function (f) {
        var go = function (v) {
            return function (v1) {
                if (v instanceof Data_List_Types.Cons && v1 instanceof Data_List_Types.Cons) {
                    return {
                        type: v.value0,
                        value: f(v1.value0)
                    };
                };
                return impossible(name);
            };
        };
        return go;
    };
};
var lookupFromEnum = function (v) {
    var go = function ($copy_acc) {
        return function ($copy_v1) {
            return function ($copy_v2) {
                var $tco_var_acc = $copy_acc;
                var $tco_var_v1 = $copy_v1;
                var $tco_done = false;
                var $tco_result;
                function $tco_loop(acc, v1, v2) {
                    if (v1 instanceof Data_List_Types.Cons && v2 instanceof Data_List_Types.Cons) {
                        if (v1.value0 === v.type) {
                            $tco_done = true;
                            return acc + v2.value0.fromEnum(v.value) | 0;
                        };
                        if (Data_Boolean.otherwise) {
                            $tco_var_acc = acc + v2.value0.cardinality | 0;
                            $tco_var_v1 = v1.value1;
                            $copy_v2 = v2.value1;
                            return;
                        };
                    };
                    $tco_done = true;
                    return impossible("fromEnum");
                };
                while (!$tco_done) {
                    $tco_result = $tco_loop($tco_var_acc, $tco_var_v1, $copy_v2);
                };
                return $tco_result;
            };
        };
    };
    return go(0);
};
var lookupLast = function (name) {
    return function (f) {
        var go = function ($copy_v) {
            return function ($copy_v1) {
                var $tco_var_v = $copy_v;
                var $tco_done = false;
                var $tco_result;
                function $tco_loop(v, v1) {
                    if (v instanceof Data_List_Types.Cons && (v.value1 instanceof Data_List_Types.Nil && (v1 instanceof Data_List_Types.Cons && v1.value1 instanceof Data_List_Types.Nil))) {
                        $tco_done = true;
                        return {
                            type: v.value0,
                            value: f(v1.value0)
                        };
                    };
                    if (v instanceof Data_List_Types.Cons && v1 instanceof Data_List_Types.Cons) {
                        $tco_var_v = v.value1;
                        $copy_v1 = v1.value1;
                        return;
                    };
                    $tco_done = true;
                    return impossible(name);
                };
                while (!$tco_done) {
                    $tco_result = $tco_loop($tco_var_v, $copy_v1);
                };
                return $tco_result;
            };
        };
        return go;
    };
};
var lookupPred = function (v) {
    var go2 = function ($copy_t1) {
        return function ($copy_b1) {
            return function ($copy_v1) {
                return function ($copy_v2) {
                    return function ($copy_v3) {
                        return function ($copy_v4) {
                            var $tco_var_t1 = $copy_t1;
                            var $tco_var_b1 = $copy_b1;
                            var $tco_var_v1 = $copy_v1;
                            var $tco_var_v2 = $copy_v2;
                            var $tco_var_v3 = $copy_v3;
                            var $tco_done = false;
                            var $tco_result;
                            function $tco_loop(t1, b1, v1, v2, v3, v4) {
                                if (v2 instanceof Data_List_Types.Cons && (v3 instanceof Data_List_Types.Cons && v4 instanceof Data_List_Types.Cons)) {
                                    if (v2.value0 === v.type) {
                                        var v5 = v4.value0.pred(v.value);
                                        if (v5 instanceof Data_Maybe.Nothing) {
                                            $tco_done = true;
                                            return new Data_Maybe.Just({
                                                type: t1,
                                                value: b1.top
                                            });
                                        };
                                        if (v5 instanceof Data_Maybe.Just) {
                                            $tco_done = true;
                                            return new Data_Maybe.Just({
                                                type: v.type,
                                                value: v5.value0
                                            });
                                        };
                                        throw new Error("Failed pattern match at Data.Variant.Internal (line 244, column 11 - line 246, column 69): " + [ v5.constructor.name ]);
                                    };
                                    if (Data_Boolean.otherwise) {
                                        $tco_var_t1 = v2.value0;
                                        $tco_var_b1 = v3.value0;
                                        $tco_var_v1 = v4.value0;
                                        $tco_var_v2 = v2.value1;
                                        $tco_var_v3 = v3.value1;
                                        $copy_v4 = v4.value1;
                                        return;
                                    };
                                };
                                $tco_done = true;
                                return impossible("pred");
                            };
                            while (!$tco_done) {
                                $tco_result = $tco_loop($tco_var_t1, $tco_var_b1, $tco_var_v1, $tco_var_v2, $tco_var_v3, $copy_v4);
                            };
                            return $tco_result;
                        };
                    };
                };
            };
        };
    };
    var go1 = function (v1) {
        return function (v2) {
            return function (v3) {
                if (v1 instanceof Data_List_Types.Cons && (v2 instanceof Data_List_Types.Cons && v3 instanceof Data_List_Types.Cons)) {
                    if (v1.value0 === v.type) {
                        var v4 = v3.value0.pred(v.value);
                        if (v4 instanceof Data_Maybe.Nothing) {
                            return Data_Maybe.Nothing.value;
                        };
                        if (v4 instanceof Data_Maybe.Just) {
                            return new Data_Maybe.Just({
                                type: v.type,
                                value: v4.value0
                            });
                        };
                        throw new Error("Failed pattern match at Data.Variant.Internal (line 235, column 11 - line 237, column 69): " + [ v4.constructor.name ]);
                    };
                    if (Data_Boolean.otherwise) {
                        return go2(v1.value0)(v2.value0)(v3.value0)(v1.value1)(v2.value1)(v3.value1);
                    };
                };
                return impossible("pred");
            };
        };
    };
    return go1;
};
var lookupSucc = function (v) {
    var go = function ($copy_v1) {
        return function ($copy_v2) {
            return function ($copy_v3) {
                var $tco_var_v1 = $copy_v1;
                var $tco_var_v2 = $copy_v2;
                var $tco_done = false;
                var $tco_result;
                function $tco_loop(v1, v2, v3) {
                    if (v1 instanceof Data_List_Types.Cons && (v2 instanceof Data_List_Types.Cons && v3 instanceof Data_List_Types.Cons)) {
                        if (v1.value0 === v.type) {
                            var v4 = v3.value0.succ(v.value);
                            if (v4 instanceof Data_Maybe.Just) {
                                $tco_done = true;
                                return new Data_Maybe.Just({
                                    type: v1.value0,
                                    value: v4.value0
                                });
                            };
                            if (v4 instanceof Data_Maybe.Nothing) {
                                if (v1.value1 instanceof Data_List_Types.Cons && v2.value1 instanceof Data_List_Types.Cons) {
                                    $tco_done = true;
                                    return new Data_Maybe.Just({
                                        type: v1.value1.value0,
                                        value: v2.value1.value0.bottom
                                    });
                                };
                                $tco_done = true;
                                return Data_Maybe.Nothing.value;
                            };
                            throw new Error("Failed pattern match at Data.Variant.Internal (line 262, column 11 - line 266, column 29): " + [ v4.constructor.name ]);
                        };
                        if (Data_Boolean.otherwise) {
                            $tco_var_v1 = v1.value1;
                            $tco_var_v2 = v2.value1;
                            $copy_v3 = v3.value1;
                            return;
                        };
                    };
                    $tco_done = true;
                    return impossible("succ");
                };
                while (!$tco_done) {
                    $tco_result = $tco_loop($tco_var_v1, $tco_var_v2, $copy_v3);
                };
                return $tco_result;
            };
        };
    };
    return go;
};
var contractWithInstance = function () {
    return function () {
        return function (dictVariantTags) {
            var variantTags1 = variantTags(dictVariantTags);
            return {
                contractWith: function (dictAlternative) {
                    var pure = Control_Applicative.pure(dictAlternative.Applicative0());
                    var empty = Control_Plus.empty(dictAlternative.Plus1());
                    return function (v) {
                        return function (v1) {
                            return function (tag) {
                                return function (a) {
                                    if (lookupTag(tag)(variantTags1(Type_Proxy["Proxy"].value))) {
                                        return pure(a);
                                    };
                                    if (Data_Boolean.otherwise) {
                                        return empty;
                                    };
                                    throw new Error("Failed pattern match at Data.Variant.Internal (line 315, column 1 - line 324, column 24): " + [ v.constructor.name, v1.constructor.name, tag.constructor.name, a.constructor.name ]);
                                };
                            };
                        };
                    };
                }
            };
        };
    };
};
var contractWith = function (dict) {
    return dict.contractWith;
};
export {
    VariantRep,
    variantTags,
    contractWith,
    lookup,
    lookupTag,
    lookupEq,
    lookupOrd,
    lookupLast,
    lookupFirst,
    lookupPred,
    lookupSucc,
    lookupCardinality,
    lookupFromEnum,
    lookupToEnum,
    impossible,
    variantMatchCons,
    variantMatchNil,
    variantFMatchCons,
    variantFMatchNil,
    variantMapCons,
    variantMapNil,
    variantFMapCons,
    variantFMapNil,
    variantTravCons,
    variantTravNil,
    variantFTravCons,
    variantFTravNil,
    variantTagsNil,
    variantTagsCons,
    contractWithInstance
};
export {
    unsafeGet,
    unsafeHas
} from "../Record.Unsafe/index.js";
//# sourceMappingURL=index.js.map
