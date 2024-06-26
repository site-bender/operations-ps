import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Apply from "../Control.Apply/index.js";
import * as Control_Category from "../Control.Category/index.js";
import * as Data_Const from "../Data.Const/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_List_NonEmpty from "../Data.List.NonEmpty/index.js";
import * as Data_List_Types from "../Data.List.Types/index.js";
import * as Data_Newtype from "../Data.Newtype/index.js";
import * as Data_NonEmpty from "../Data.NonEmpty/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
var identity = /* #__PURE__ */ Control_Category.identity(Control_Category.categoryFn);
var unwrap = /* #__PURE__ */ Data_Newtype.unwrap();

// | The free applicative functor for a type constructor `f`.
var Pure = /* #__PURE__ */ (function () {
    function Pure(value0) {
        this.value0 = value0;
    };
    Pure.create = function (value0) {
        return new Pure(value0);
    };
    return Pure;
})();

// | The free applicative functor for a type constructor `f`.
var Lift = /* #__PURE__ */ (function () {
    function Lift(value0) {
        this.value0 = value0;
    };
    Lift.create = function (value0) {
        return new Lift(value0);
    };
    return Lift;
})();

// | The free applicative functor for a type constructor `f`.
var Ap = /* #__PURE__ */ (function () {
    function Ap(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Ap.create = function (value0) {
        return function (value1) {
            return new Ap(value0, value1);
        };
    };
    return Ap;
})();
var mkAp = function (fba) {
    return function (fb) {
        return new Ap(fba, fb);
    };
};

// | Lift a value described by the type constructor `f` into
// | the free applicative functor.
var liftFreeAp = /* #__PURE__ */ (function () {
    return Lift.create;
})();
var goLeft = function (dictApplicative) {
    var pure = Control_Applicative.pure(dictApplicative);
    return function (fStack) {
        return function (valStack) {
            return function (nat) {
                return function (func) {
                    return function (count) {
                        if (func instanceof Pure) {
                            return new Data_Tuple.Tuple(new Data_List_Types.Cons({
                                func: pure(func.value0),
                                count: count
                            }, fStack), valStack);
                        };
                        if (func instanceof Lift) {
                            return new Data_Tuple.Tuple(new Data_List_Types.Cons({
                                func: nat(func.value0),
                                count: count
                            }, fStack), valStack);
                        };
                        if (func instanceof Ap) {
                            return goLeft(dictApplicative)(fStack)(Data_List_NonEmpty.cons(func.value1)(valStack))(nat)(func.value0)(count + 1 | 0);
                        };
                        throw new Error("Failed pattern match at Control.Applicative.Free (line 102, column 41 - line 105, column 81): " + [ func.constructor.name ]);
                    };
                };
            };
        };
    };
};
var goApply = function (dictApplicative) {
    var apply = Control_Apply.apply(dictApplicative.Apply0());
    return function (fStack) {
        return function (vals) {
            return function (gVal) {
                if (fStack instanceof Data_List_Types.Nil) {
                    return new Data_Either.Left(gVal);
                };
                if (fStack instanceof Data_List_Types.Cons) {
                    var gRes = apply(fStack.value0.func)(gVal);
                    var $31 = fStack.value0.count === 1;
                    if ($31) {
                        if (fStack.value1 instanceof Data_List_Types.Nil) {
                            return new Data_Either.Left(gRes);
                        };
                        return goApply(dictApplicative)(fStack.value1)(vals)(gRes);
                    };
                    if (vals instanceof Data_List_Types.Nil) {
                        return new Data_Either.Left(gRes);
                    };
                    if (vals instanceof Data_List_Types.Cons) {
                        return new Data_Either.Right(new Data_Tuple.Tuple(new Data_List_Types.Cons({
                            func: gRes,
                            count: fStack.value0.count - 1 | 0
                        }, fStack.value1), new Data_NonEmpty.NonEmpty(vals.value0, vals.value1)));
                    };
                    throw new Error("Failed pattern match at Control.Applicative.Free (line 83, column 11 - line 88, column 50): " + [ vals.constructor.name ]);
                };
                throw new Error("Failed pattern match at Control.Applicative.Free (line 72, column 3 - line 88, column 50): " + [ fStack.constructor.name ]);
            };
        };
    };
};
var functorFreeAp = {
    map: function (f) {
        return function (x) {
            return mkAp(new Pure(f))(x);
        };
    }
};

// | Run a free applicative functor with a natural transformation from
// | the type constructor `f` to the applicative functor `g`.
var foldFreeAp = function (dictApplicative) {
    var goApply1 = goApply(dictApplicative);
    var pure = Control_Applicative.pure(dictApplicative);
    var goLeft1 = goLeft(dictApplicative);
    return function (nat) {
        return function (z) {
            var go = function ($copy_v) {
                var $tco_done = false;
                var $tco_result;
                function $tco_loop(v) {
                    if (v.value1.value0 instanceof Pure) {
                        var v1 = goApply1(v.value0)(v.value1.value1)(pure(v.value1.value0.value0));
                        if (v1 instanceof Data_Either.Left) {
                            $tco_done = true;
                            return v1.value0;
                        };
                        if (v1 instanceof Data_Either.Right) {
                            $copy_v = v1.value0;
                            return;
                        };
                        throw new Error("Failed pattern match at Control.Applicative.Free (line 54, column 17 - line 56, column 24): " + [ v1.constructor.name ]);
                    };
                    if (v.value1.value0 instanceof Lift) {
                        var v1 = goApply1(v.value0)(v.value1.value1)(nat(v.value1.value0.value0));
                        if (v1 instanceof Data_Either.Left) {
                            $tco_done = true;
                            return v1.value0;
                        };
                        if (v1 instanceof Data_Either.Right) {
                            $copy_v = v1.value0;
                            return;
                        };
                        throw new Error("Failed pattern match at Control.Applicative.Free (line 57, column 17 - line 59, column 24): " + [ v1.constructor.name ]);
                    };
                    if (v.value1.value0 instanceof Ap) {
                        var nextVals = new Data_NonEmpty.NonEmpty(v.value1.value0.value1, v.value1.value1);
                        $copy_v = goLeft1(v.value0)(nextVals)(nat)(v.value1.value0.value0)(1);
                        return;
                    };
                    throw new Error("Failed pattern match at Control.Applicative.Free (line 53, column 5 - line 62, column 47): " + [ v.value1.value0.constructor.name ]);
                };
                while (!$tco_done) {
                    $tco_result = $tco_loop($copy_v);
                };
                return $tco_result;
            };
            return go(new Data_Tuple.Tuple(Data_List_Types.Nil.value, Data_List_NonEmpty.singleton(z)));
        };
    };
};

// | Run a free applicative functor using the applicative instance for
// | the type constructor `f`.
var retractFreeAp = function (dictApplicative) {
    return foldFreeAp(dictApplicative)(identity);
};
var applyFreeAp = {
    apply: function (fba) {
        return function (fb) {
            return mkAp(fba)(fb);
        };
    },
    Functor0: function () {
        return functorFreeAp;
    }
};
var applicativeFreeAp = /* #__PURE__ */ (function () {
    return {
        pure: Pure.create,
        Apply0: function () {
            return applyFreeAp;
        }
    };
})();
var foldFreeAp1 = /* #__PURE__ */ foldFreeAp(applicativeFreeAp);

// | Natural transformation from `FreeAp f a` to `FreeAp g a` given a
// | natural transformation from `f` to `g`.
var hoistFreeAp = function (f) {
    return foldFreeAp1(function ($54) {
        return liftFreeAp(f($54));
    });
};

// | Perform monoidal analysis over the free applicative functor `f`.
var analyzeFreeAp = function (dictMonoid) {
    var foldFreeAp2 = foldFreeAp(Data_Const.applicativeConst(dictMonoid));
    return function (k) {
        var $55 = foldFreeAp2(function ($57) {
            return Data_Const.Const(k($57));
        });
        return function ($56) {
            return unwrap($55($56));
        };
    };
};
export {
    liftFreeAp,
    retractFreeAp,
    foldFreeAp,
    hoistFreeAp,
    analyzeFreeAp,
    functorFreeAp,
    applyFreeAp,
    applicativeFreeAp
};
