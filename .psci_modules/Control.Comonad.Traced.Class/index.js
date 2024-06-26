// | This module defines the `ComonadTraced` type class and its instances.
import * as Control_Comonad from "../Control.Comonad/index.js";
import * as Control_Comonad_Traced_Trans from "../Control.Comonad.Traced.Trans/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
var track = function (dict) {
    return dict.track;
};

// | Extracts a value at a relative position which depends on the current value.
var tracks = function (dictComonadTraced) {
    var track1 = track(dictComonadTraced);
    var extract = Control_Comonad.extract(dictComonadTraced.Comonad0());
    return function (f) {
        return function (w) {
            return track1(f(extract(w)))(w);
        };
    };
};

// | Get a value which depends on the current position.
var listens = function (dictFunctor) {
    var map = Data_Functor.map(dictFunctor);
    return function (f) {
        return function (v) {
            return map(function (g) {
                return function (t) {
                    return new Data_Tuple.Tuple(g(t), f(t));
                };
            })(v);
        };
    };
};

// | Get the current position.
var listen = function (dictFunctor) {
    var map = Data_Functor.map(dictFunctor);
    return function (v) {
        return map(function (f) {
            return function (t) {
                return new Data_Tuple.Tuple(f(t), t);
            };
        })(v);
    };
};
var comonadTracedTracedT = function (dictComonad) {
    var extract = Control_Comonad.extract(dictComonad);
    var comonadTracedT = Control_Comonad_Traced_Trans.comonadTracedT(dictComonad);
    return function (dictMonoid) {
        var comonadTracedT1 = comonadTracedT(dictMonoid);
        return {
            track: function (t) {
                return function (v) {
                    return extract(v)(t);
                };
            },
            Comonad0: function () {
                return comonadTracedT1;
            }
        };
    };
};

// | Apply a function to the current position.
var censor = function (dictFunctor) {
    var map = Data_Functor.map(dictFunctor);
    return function (f) {
        return function (v) {
            return map(function (v1) {
                return function ($29) {
                    return v1(f($29));
                };
            })(v);
        };
    };
};
export {
    track,
    tracks,
    listen,
    listens,
    censor,
    comonadTracedTracedT
};
