// | This module defines functions for working with setters.
import * as Control_Monad_State_Class from "../Control.Monad.State.Class/index.js";
import * as Data_EuclideanRing from "../Data.EuclideanRing/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_HeytingAlgebra from "../Data.HeytingAlgebra/index.js";
import * as Data_Lens_Types from "../Data.Lens.Types/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Ring from "../Data.Ring/index.js";
import * as Data_Semigroup from "../Data.Semigroup/index.js";
import * as Data_Semiring from "../Data.Semiring/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";

// | Apply a function to the foci of a `Setter`.
var over = function (l) {
    return l;
};

// | Set the foci of a `Setter` to a constant value.
var set = function (l) {
    return function (b) {
        return over(l)(Data_Function["const"](b));
    };
};
var setJust = function (p) {
    var $59 = set(p);
    return function ($60) {
        return $59(Data_Maybe.Just.create($60));
    };
};
var subOver = function (dictRing) {
    var sub = Data_Ring.sub(dictRing);
    return function (p) {
        var $61 = over(p);
        var $62 = Data_Function.flip(sub);
        return function ($63) {
            return $61($62($63));
        };
    };
};
var mulOver = function (dictSemiring) {
    var mul = Data_Semiring.mul(dictSemiring);
    return function (p) {
        var $64 = over(p);
        var $65 = Data_Function.flip(mul);
        return function ($66) {
            return $64($65($66));
        };
    };
};

// | Modify the foci of a `Setter` in a monadic state.
var modifying = function (dictMonadState) {
    var $$void = Data_Functor["void"]((((dictMonadState.Monad0()).Bind1()).Apply0()).Functor0());
    var modify = Control_Monad_State_Class.modify(dictMonadState);
    return function (p) {
        return function (f) {
            return $$void(modify(over(p)(f)));
        };
    };
};
var mulModifying = function (dictMonadState) {
    var modifying1 = modifying(dictMonadState);
    return function (dictSemiring) {
        var mul = Data_Semiring.mul(dictSemiring);
        return function (p) {
            var $67 = modifying1(p);
            var $68 = Data_Function.flip(mul);
            return function ($69) {
                return $67($68($69));
            };
        };
    };
};
var subModifying = function (dictMonadState) {
    var modifying1 = modifying(dictMonadState);
    return function (dictRing) {
        var sub = Data_Ring.sub(dictRing);
        return function (p) {
            var $70 = modifying1(p);
            var $71 = Data_Function.flip(sub);
            return function ($72) {
                return $70($71($72));
            };
        };
    };
};

// | Apply a function to the foci of a `Setter` that may vary with the index.
var iover = function (l) {
    return function (f) {
        return l(Data_Tuple.uncurry(f));
    };
};
var divOver = function (dictEuclideanRing) {
    var div = Data_EuclideanRing.div(dictEuclideanRing);
    return function (p) {
        var $73 = over(p);
        var $74 = Data_Function.flip(div);
        return function ($75) {
            return $73($74($75));
        };
    };
};
var divModifying = function (dictMonadState) {
    var modifying1 = modifying(dictMonadState);
    return function (dictEuclideanRing) {
        var div = Data_EuclideanRing.div(dictEuclideanRing);
        return function (p) {
            var $76 = modifying1(p);
            var $77 = Data_Function.flip(div);
            return function ($78) {
                return $76($77($78));
            };
        };
    };
};
var disjOver = function (dictHeytingAlgebra) {
    var disj = Data_HeytingAlgebra.disj(dictHeytingAlgebra);
    return function (p) {
        var $79 = over(p);
        var $80 = Data_Function.flip(disj);
        return function ($81) {
            return $79($80($81));
        };
    };
};
var disjModifying = function (dictMonadState) {
    var modifying1 = modifying(dictMonadState);
    return function (dictHeytingAlgebra) {
        var disj = Data_HeytingAlgebra.disj(dictHeytingAlgebra);
        return function (p) {
            var $82 = modifying1(p);
            var $83 = Data_Function.flip(disj);
            return function ($84) {
                return $82($83($84));
            };
        };
    };
};
var conjOver = function (dictHeytingAlgebra) {
    var conj = Data_HeytingAlgebra.conj(dictHeytingAlgebra);
    return function (p) {
        var $85 = over(p);
        var $86 = Data_Function.flip(conj);
        return function ($87) {
            return $85($86($87));
        };
    };
};
var conjModifying = function (dictMonadState) {
    var modifying1 = modifying(dictMonadState);
    return function (dictHeytingAlgebra) {
        var conj = Data_HeytingAlgebra.conj(dictHeytingAlgebra);
        return function (p) {
            var $88 = modifying1(p);
            var $89 = Data_Function.flip(conj);
            return function ($90) {
                return $88($89($90));
            };
        };
    };
};

// Stateful
// | Set the foci of a `Setter` in a monadic state to a constant value.
var assign = function (dictMonadState) {
    var $$void = Data_Functor["void"]((((dictMonadState.Monad0()).Bind1()).Apply0()).Functor0());
    var modify = Control_Monad_State_Class.modify(dictMonadState);
    return function (p) {
        return function (b) {
            return $$void(modify(set(p)(b)));
        };
    };
};
var assignJust = function (dictMonadState) {
    var assign1 = assign(dictMonadState);
    return function (p) {
        var $91 = assign1(p);
        return function ($92) {
            return $91(Data_Maybe.Just.create($92));
        };
    };
};
var appendOver = function (dictSemigroup) {
    var append = Data_Semigroup.append(dictSemigroup);
    return function (p) {
        var $93 = over(p);
        var $94 = Data_Function.flip(append);
        return function ($95) {
            return $93($94($95));
        };
    };
};
var appendModifying = function (dictMonadState) {
    var modifying1 = modifying(dictMonadState);
    return function (dictSemigroup) {
        var append = Data_Semigroup.append(dictSemigroup);
        return function (p) {
            var $96 = modifying1(p);
            var $97 = Data_Function.flip(append);
            return function ($98) {
                return $96($97($98));
            };
        };
    };
};
var addOver = function (dictSemiring) {
    var add = Data_Semiring.add(dictSemiring);
    return function (p) {
        var $99 = over(p);
        return function ($100) {
            return $99(add($100));
        };
    };
};
var addModifying = function (dictMonadState) {
    var modifying1 = modifying(dictMonadState);
    return function (dictSemiring) {
        var add = Data_Semiring.add(dictSemiring);
        return function (p) {
            var $101 = modifying1(p);
            return function ($102) {
                return $101(add($102));
            };
        };
    };
};
export {
    over,
    iover,
    set,
    addOver,
    subOver,
    mulOver,
    divOver,
    disjOver,
    conjOver,
    appendOver,
    setJust,
    assign,
    modifying,
    addModifying,
    mulModifying,
    subModifying,
    divModifying,
    disjModifying,
    conjModifying,
    appendModifying,
    assignJust
};
export {
    Indexed
} from "../Data.Lens.Types/index.js";
