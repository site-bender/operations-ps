// Generated by purs version 0.15.15
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Apply from "../Control.Apply/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Data_Argonaut_Core from "../Data.Argonaut.Core/index.js";
import * as Data_Argonaut_Decode_Class from "../Data.Argonaut.Decode.Class/index.js";
import * as Data_Argonaut_Decode_Error from "../Data.Argonaut.Decode.Error/index.js";
import * as Data_Argonaut_Encode_Class from "../Data.Argonaut.Encode.Class/index.js";
import * as Data_Array from "../Data.Array/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Foldable from "../Data.Foldable/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Int from "../Data.Int/index.js";
import * as Data_List from "../Data.List/index.js";
import * as Data_List_Types from "../Data.List.Types/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Ordering from "../Data.Ordering/index.js";
import * as Data_Semigroup from "../Data.Semigroup/index.js";
import * as Data_Show from "../Data.Show/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
import * as Data_Unfoldable from "../Data.Unfoldable/index.js";
import * as Data_Unit from "../Data.Unit/index.js";
import * as Foreign_Object from "../Foreign.Object/index.js";
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
var show = /* #__PURE__ */ Data_Show.show(Data_Show.showString);
var show1 = /* #__PURE__ */ Data_Show.show(Data_Show.showInt);
var show2 = /* #__PURE__ */ Data_Show.show(Data_Show.showUnit);
var show3 = /* #__PURE__ */ Data_Show.show(Data_Show.showBoolean);
var show4 = /* #__PURE__ */ Data_Show.show(Data_Show.showNumber);
var map = /* #__PURE__ */ Data_Functor.map(Data_List_Types.functorList);
var bind = /* #__PURE__ */ Control_Bind.bind(Data_List_Types.bindList);
var toUnfoldable = /* #__PURE__ */ Foreign_Object.toUnfoldable(Data_List_Types.unfoldableList);
var fromFoldable = /* #__PURE__ */ Data_List.fromFoldable(Data_List_Types.foldableList);
var fromFoldable1 = /* #__PURE__ */ Data_List.fromFoldable(Data_Foldable.foldableArray);
var compare = /* #__PURE__ */ Data_Ord.compare(Data_Ord.ordString);
var compare1 = /* #__PURE__ */ Data_Ord.compare(Data_Ord.ordInt);
var append1 = /* #__PURE__ */ Data_Semigroup.append(Data_Semigroup.semigroupArray);
var encodeJson = /* #__PURE__ */ Data_Argonaut_Encode_Class.encodeJson(Data_Argonaut_Encode_Class.encodeJsonJString);
var encodeJson1 = /* #__PURE__ */ Data_Argonaut_Encode_Class.encodeJson(Data_Argonaut_Encode_Class.encodeJsonInt);
var apply = /* #__PURE__ */ Control_Apply.apply(Data_Maybe.applyMaybe);
var map1 = /* #__PURE__ */ Data_Functor.map(Data_Maybe.functorMaybe);
var bind1 = /* #__PURE__ */ Control_Bind.bind(Data_Either.bindEither);
var decodeJson = /* #__PURE__ */ Data_Argonaut_Decode_Class.decodeJson(/* #__PURE__ */ Data_Argonaut_Decode_Class.decodeArray(Data_Argonaut_Decode_Class.decodeJsonJson));
var pure = /* #__PURE__ */ Control_Applicative.pure(Data_Maybe.applicativeMaybe);
var replicate = /* #__PURE__ */ Data_Unfoldable.replicate(Data_Unfoldable.unfoldableArray);
var bindFlipped = /* #__PURE__ */ Control_Bind.bindFlipped(Data_Maybe.bindMaybe);
var bind2 = /* #__PURE__ */ Control_Bind.bind(Data_Maybe.bindMaybe);
var foldl = /* #__PURE__ */ Data_Foldable.foldl(Data_List_Types.foldableList);
var composeKleisliFlipped = /* #__PURE__ */ Control_Bind.composeKleisliFlipped(Data_Maybe.bindMaybe);
var JsonPrim = function (x) {
    return x;
};
var JCursorTop = /* #__PURE__ */ (function () {
    function JCursorTop() {

    };
    JCursorTop.value = new JCursorTop();
    return JCursorTop;
})();
var JField = /* #__PURE__ */ (function () {
    function JField(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    JField.create = function (value0) {
        return function (value1) {
            return new JField(value0, value1);
        };
    };
    return JField;
})();
var JIndex = /* #__PURE__ */ (function () {
    function JIndex(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    JIndex.create = function (value0) {
        return function (value1) {
            return new JIndex(value0, value1);
        };
    };
    return JIndex;
})();
var showJCursor = {
    show: function (v) {
        if (v instanceof JCursorTop) {
            return "JCursorTop";
        };
        if (v instanceof JField) {
            return "(JField " + (show(v.value0) + (" " + (Data_Show.show(showJCursor)(v.value1) + ")")));
        };
        if (v instanceof JIndex) {
            return "(JIndex " + (show1(v.value0) + (" " + (Data_Show.show(showJCursor)(v.value1) + ")")));
        };
        throw new Error("Failed pattern match at Data.Argonaut.JCursor (line 26, column 1 - line 29, column 67): " + [ v.constructor.name ]);
    }
};
var show5 = /* #__PURE__ */ Data_Show.show(showJCursor);
var semigroupJCursor = {
    append: function (v) {
        return function (v1) {
            if (v1 instanceof JCursorTop) {
                return v;
            };
            if (v instanceof JCursorTop) {
                return v1;
            };
            if (v instanceof JField) {
                return new JField(v.value0, Data_Semigroup.append(semigroupJCursor)(v.value1)(v1));
            };
            if (v instanceof JIndex) {
                return new JIndex(v.value0, Data_Semigroup.append(semigroupJCursor)(v.value1)(v1));
            };
            throw new Error("Failed pattern match at Data.Argonaut.JCursor (line 36, column 1 - line 40, column 44): " + [ v.constructor.name, v1.constructor.name ]);
        };
    }
};
var runJsonPrim = function (v) {
    return v;
};
var showJsonPrim = {
    show: function (p) {
        return runJsonPrim(p)(show2)(show3)(show4)(show);
    }
};
var print = function (v) {
    if (v instanceof JCursorTop) {
        return "";
    };
    if (v instanceof JField) {
        return "." + (v.value0 + show5(v.value1));
    };
    if (v instanceof JIndex) {
        return "[" + (show1(v.value0) + ("]" + show5(v.value1)));
    };
    throw new Error("Failed pattern match at Data.Argonaut.JCursor (line 31, column 1 - line 31, column 27): " + [ v.constructor.name ]);
};
var primToJson = function (p) {
    return runJsonPrim(p)(Data_Function["const"](Data_Argonaut_Core.jsonNull))(Data_Argonaut_Core.fromBoolean)(Data_Argonaut_Core.fromNumber)(Data_Argonaut_Core.fromString);
};
var primStr = function (v) {
    return function (v1) {
        return function (v2) {
            return function (v3) {
                return function (f) {
                    return f(v);
                };
            };
        };
    };
};
var primNum = function (v) {
    return function (v1) {
        return function (v2) {
            return function (f) {
                return function (v3) {
                    return f(v);
                };
            };
        };
    };
};
var primNull = function (f) {
    return function (v) {
        return function (v1) {
            return function (v2) {
                return f(Data_Unit.unit);
            };
        };
    };
};
var primBool = function (v) {
    return function (v1) {
        return function (f) {
            return function (v2) {
                return function (v3) {
                    return f(v);
                };
            };
        };
    };
};
var $lazy_toPrims = /* #__PURE__ */ $runtime_lazy("toPrims", "Data.Argonaut.JCursor", function () {
    var objFn = function (obj) {
        var f = function (v) {
            return map(function (t) {
                return new Data_Tuple.Tuple(new JField(v.value0, Data_Tuple.fst(t)), Data_Tuple.snd(t));
            })($lazy_toPrims(184)(v.value1));
        };
        return bind(toUnfoldable(obj))(f);
    };
    var mkTop = function (p) {
        return Data_List.singleton(new Data_Tuple.Tuple(JCursorTop.value, p));
    };
    var nullFn = function (v) {
        return mkTop(primNull);
    };
    var numFn = function (n) {
        return mkTop(primNum(n));
    };
    var strFn = function (s) {
        return mkTop(primStr(s));
    };
    var boolFn = function (b) {
        return mkTop(primBool(b));
    };
    var arrFn$prime = function (v) {
        return fromFoldable(map(function (t) {
            return new Data_Tuple.Tuple(new JIndex(v.value0, Data_Tuple.fst(t)), Data_Tuple.snd(t));
        })($lazy_toPrims(178)(v.value1)));
    };
    var arrFn = function (arr) {
        var zipped = Data_List.zipWith(Data_Tuple.Tuple.create)(Data_List.range(0)(Data_Array.length(arr) - 1 | 0))(fromFoldable1(arr));
        return bind(zipped)(arrFn$prime);
    };
    return Data_Argonaut_Core.caseJson(nullFn)(boolFn)(numFn)(strFn)(arrFn)(objFn);
});
var toPrims = /* #__PURE__ */ $lazy_toPrims(150);
var monoidJCursor = /* #__PURE__ */ (function () {
    return {
        mempty: JCursorTop.value,
        Semigroup0: function () {
            return semigroupJCursor;
        }
    };
})();
var inferEmpty = function (v) {
    if (v instanceof JCursorTop) {
        return Data_Argonaut_Core.jsonNull;
    };
    if (v instanceof JField) {
        return Data_Argonaut_Core.jsonEmptyObject;
    };
    if (v instanceof JIndex) {
        return Data_Argonaut_Core.jsonEmptyArray;
    };
    throw new Error("Failed pattern match at Data.Argonaut.JCursor (line 114, column 1 - line 114, column 32): " + [ v.constructor.name ]);
};
var eqJCursor = {
    eq: function (x) {
        return function (y) {
            if (x instanceof JCursorTop && y instanceof JCursorTop) {
                return true;
            };
            if (x instanceof JField && y instanceof JField) {
                return x.value0 === y.value0 && Data_Eq.eq(eqJCursor)(x.value1)(y.value1);
            };
            if (x instanceof JIndex && y instanceof JIndex) {
                return x.value0 === y.value0 && Data_Eq.eq(eqJCursor)(x.value1)(y.value1);
            };
            return false;
        };
    }
};
var ordJCursor = {
    compare: function (x) {
        return function (y) {
            if (x instanceof JCursorTop && y instanceof JCursorTop) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof JCursorTop) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof JCursorTop) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof JField && y instanceof JField) {
                var v = compare(x.value0)(y.value0);
                if (v instanceof Data_Ordering.LT) {
                    return Data_Ordering.LT.value;
                };
                if (v instanceof Data_Ordering.GT) {
                    return Data_Ordering.GT.value;
                };
                return Data_Ord.compare(ordJCursor)(x.value1)(y.value1);
            };
            if (x instanceof JField) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof JField) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof JIndex && y instanceof JIndex) {
                var v = compare1(x.value0)(y.value0);
                if (v instanceof Data_Ordering.LT) {
                    return Data_Ordering.LT.value;
                };
                if (v instanceof Data_Ordering.GT) {
                    return Data_Ordering.GT.value;
                };
                return Data_Ord.compare(ordJCursor)(x.value1)(y.value1);
            };
            throw new Error("Failed pattern match at Data.Argonaut.JCursor (line 0, column 0 - line 0, column 0): " + [ x.constructor.name, y.constructor.name ]);
        };
    },
    Eq0: function () {
        return eqJCursor;
    }
};
var encodeJsonJCursor = {
    encodeJson: /* #__PURE__ */ (function () {
        var loop = function (v) {
            if (v instanceof JCursorTop) {
                return [  ];
            };
            if (v instanceof JField) {
                return append1([ encodeJson(v.value0) ])(loop(v.value1));
            };
            if (v instanceof JIndex) {
                return append1([ encodeJson1(v.value0) ])(loop(v.value1));
            };
            throw new Error("Failed pattern match at Data.Argonaut.JCursor (line 48, column 5 - line 48, column 25): " + [ v.constructor.name ]);
        };
        var $185 = Data_Argonaut_Encode_Class.encodeJson(Data_Argonaut_Encode_Class.encodeJsonArray(Data_Argonaut_Encode_Class.encodeJsonJson));
        return function ($186) {
            return $185(loop($186));
        };
    })()
};
var downIndex = function (i) {
    var downIndex$prime = function (v) {
        if (v instanceof JCursorTop) {
            return new JIndex(i, JCursorTop.value);
        };
        if (v instanceof JField) {
            return new JField(v.value0, downIndex$prime(v.value1));
        };
        if (v instanceof JIndex) {
            return new JIndex(v.value0, downIndex$prime(v.value1));
        };
        throw new Error("Failed pattern match at Data.Argonaut.JCursor (line 105, column 3 - line 105, column 46): " + [ v.constructor.name ]);
    };
    return downIndex$prime;
};
var downField = function (i) {
    var downField$prime = function (v) {
        if (v instanceof JCursorTop) {
            return new JField(i, JCursorTop.value);
        };
        if (v instanceof JField) {
            return new JField(v.value0, downField$prime(v.value1));
        };
        if (v instanceof JIndex) {
            return new JIndex(v.value0, downField$prime(v.value1));
        };
        throw new Error("Failed pattern match at Data.Argonaut.JCursor (line 98, column 3 - line 98, column 46): " + [ v.constructor.name ]);
    };
    return downField$prime;
};
var insideOut = function (v) {
    if (v instanceof JCursorTop) {
        return JCursorTop.value;
    };
    if (v instanceof JField) {
        return downField(v.value0)(insideOut(v.value1));
    };
    if (v instanceof JIndex) {
        return downIndex(v.value0)(insideOut(v.value1));
    };
    throw new Error("Failed pattern match at Data.Argonaut.JCursor (line 90, column 1 - line 90, column 32): " + [ v.constructor.name ]);
};
var decodeJsonJCursor = {
    decodeJson: function (j) {
        var goNum = function (c) {
            var $187 = Data_Maybe.maybe(new Data_Either.Left(new Data_Argonaut_Decode_Error.TypeMismatch("Int")))((function () {
                var $189 = Data_Function.flip(JIndex.create)(c);
                return function ($190) {
                    return Data_Either.Right.create($189($190));
                };
            })());
            return function ($188) {
                return $187(Data_Int.fromNumber($188));
            };
        };
        var loop = function (arr) {
            return Data_Maybe.maybe(new Data_Either.Right(JCursorTop.value))(goLoop)(apply(map1(Data_Tuple.Tuple.create)(Data_Array.head(arr)))(Data_Array.tail(arr)));
        };
        var goLoop = function (v) {
            return bind1(loop(v.value1))(function (c) {
                var fail = new Data_Either.Left(new Data_Argonaut_Decode_Error.Named("Int or String", new Data_Argonaut_Decode_Error.UnexpectedValue(v.value0)));
                return Data_Argonaut_Core.caseJson(Data_Function["const"](fail))(Data_Function["const"](fail))(goNum(c))((function () {
                    var $191 = Data_Function.flip(JField.create)(c);
                    return function ($192) {
                        return Data_Either.Right.create($191($192));
                    };
                })())(Data_Function["const"](fail))(Data_Function["const"](fail))(v.value0);
            });
        };
        return bind1(decodeJson(j))(loop);
    }
};
var cursorSet = function (v) {
    return function (v1) {
        if (v instanceof JCursorTop) {
            var $193 = Data_Function["const"](v1);
            return function ($194) {
                return pure($193($194));
            };
        };
        if (v instanceof JField) {
            var mergeObjs = function (m) {
                return map1((function () {
                    var $195 = Data_Function.flip(Foreign_Object.insert(v.value0))(m);
                    return function ($196) {
                        return Data_Argonaut_Core.fromObject($195($196));
                    };
                })())(cursorSet(v.value1)(v1)(Data_Maybe.fromMaybe(inferEmpty(v.value1))(Foreign_Object.lookup(v.value0)(m))));
            };
            var defaultObj = map1((function () {
                var $197 = Foreign_Object.singleton(v.value0);
                return function ($198) {
                    return Data_Argonaut_Core.fromObject($197($198));
                };
            })())(cursorSet(v.value1)(v1)(inferEmpty(v.value1)));
            return Data_Argonaut_Core.caseJsonObject(defaultObj)(mergeObjs);
        };
        if (v instanceof JIndex) {
            var setArr = function ($copy_xs) {
                return function ($copy_i$prime) {
                    return function ($copy_v$prime) {
                        var $tco_var_xs = $copy_xs;
                        var $tco_var_i$prime = $copy_i$prime;
                        var $tco_done = false;
                        var $tco_result;
                        function $tco_loop(xs, i$prime, v$prime) {
                            var len = Data_Array.length(xs);
                            var $172 = i$prime < 0;
                            if ($172) {
                                $tco_done = true;
                                return Data_Maybe.Nothing.value;
                            };
                            var $173 = i$prime >= len;
                            if ($173) {
                                $tco_var_xs = append1(xs)(replicate((i$prime - len | 0) + 1 | 0)(Data_Argonaut_Core.jsonNull));
                                $tco_var_i$prime = i$prime;
                                $copy_v$prime = v$prime;
                                return;
                            };
                            $tco_done = true;
                            return map1(Data_Argonaut_Core.fromArray)(Data_Array.updateAt(i$prime)(v$prime)(xs));
                        };
                        while (!$tco_done) {
                            $tco_result = $tco_loop($tco_var_xs, $tco_var_i$prime, $copy_v$prime);
                        };
                        return $tco_result;
                    };
                };
            };
            var mergeArrs = function (a) {
                return bindFlipped(setArr(a)(v.value0))(cursorSet(v.value1)(v1)(Data_Maybe.fromMaybe(inferEmpty(v.value1))(Data_Array.index(a)(v.value0))));
            };
            var defaultArr = map1(Data_Argonaut_Core.fromArray)(bindFlipped(Data_Function.flip(Data_Array.updateAt(v.value0))(replicate(v.value0 + 1 | 0)(Data_Argonaut_Core.jsonNull)))(cursorSet(v.value1)(v1)(inferEmpty(v.value1))));
            return Data_Argonaut_Core.caseJsonArray(defaultArr)(mergeArrs);
        };
        throw new Error("Failed pattern match at Data.Argonaut.JCursor (line 119, column 1 - line 119, column 57): " + [ v.constructor.name, v1.constructor.name ]);
    };
};
var fromPrims = function (lst) {
    var f = function (j) {
        return function (v) {
            return bind2(j)(cursorSet(v.value0)(primToJson(v.value1)));
        };
    };
    return foldl(f)(map1(function ($199) {
        return inferEmpty(Data_Tuple.fst($199));
    })(Data_List.head(lst)))(lst);
};
var cursorGet = function (v) {
    if (v instanceof JCursorTop) {
        return Data_Maybe.Just.create;
    };
    if (v instanceof JField) {
        return Data_Argonaut_Core.caseJsonObject(Data_Maybe.Nothing.value)(composeKleisliFlipped(cursorGet(v.value1))(Foreign_Object.lookup(v.value0)));
    };
    if (v instanceof JIndex) {
        return Data_Argonaut_Core.caseJsonArray(Data_Maybe.Nothing.value)(composeKleisliFlipped(cursorGet(v.value1))(function (v1) {
            return Data_Array.index(v1)(v.value0);
        }));
    };
    throw new Error("Failed pattern match at Data.Argonaut.JCursor (line 109, column 1 - line 109, column 47): " + [ v.constructor.name ]);
};
export {
    JCursorTop,
    JField,
    JIndex,
    print,
    JsonPrim,
    runJsonPrim,
    primNull,
    primBool,
    primNum,
    primStr,
    primToJson,
    insideOut,
    downField,
    downIndex,
    cursorGet,
    inferEmpty,
    cursorSet,
    toPrims,
    fromPrims,
    eqJCursor,
    ordJCursor,
    showJCursor,
    semigroupJCursor,
    monoidJCursor,
    encodeJsonJCursor,
    showJsonPrim,
    decodeJsonJCursor
};
