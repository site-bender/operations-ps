// | Tuples that are not restricted to two elements.
// |
// | Here is an example of a 3-tuple:
// |
// | 
// | ```purescript
// | > tuple = tuple3 1 "2" 3.0
// | > tuple
// | (Tuple 1 (Tuple "2" (Tuple 3.0 unit)))
// | ```
// | 
// | Notice that a tuple is a nested structure not unlike a list. The type of `tuple` is this:
// | 
// | ```purescript
// | > :t tuple
// | Tuple Int (Tuple String (Tuple Number Unit))
// | ```
// | 
// | That, however, can be abbreviated with the `Tuple3` type:
// | 
// | ```purescript
// | Tuple3 Int String Number
// | ```
// |
// | All tuple functions are numbered from 1 to 10. That is, there's
// | a `get1` and a `get10`.
// |
// | The `getN` functions accept tuples of length N or greater:
// | 
// | ```purescript
// | get1 tuple = 1
// | get3 tuple = 3
// | get4 tuple -- type error. `get4` requires a longer tuple. 
// | ```
// | 
// | The same is true of the `overN` functions:
// | 
// | ```purescript
// | over2 negate (tuple3 1 2 3) = tuple3 1 (-2) 3
// | ```
// |
// | `uncurryN` can be used to convert a function that takes `N` arguments to one that takes an N-tuple:
// | 
// | ```purescript
// | uncurry2 (+) (tuple2 1 2) = 3
// | ```
// | 
// | The reverse `curryN` function converts functions that take
// | N-tuples (which are rare) to functions that take `N` arguments.
// |
// | ---------------
// | In addition to types like `Tuple3`, there are also types like
// | `T3`. Whereas `Tuple3` describes a tuple with exactly three
// | elements, `T3` describes a tuple of length *two or longer*. More
// | specifically, `T3` requires two element plus a "tail" that may be
// | `unit` or more tuple elements. Use types like `T3` when you want to
// | create a set of functions for arbitrary tuples. See the source for how that's done.
// | 
import * as Data_Tuple from "../Data.Tuple/index.js";
import * as Data_Unit from "../Data.Unit/index.js";

// | Given a function of 9 arguments, returns a function that accepts a 9-tuple.
var uncurry9 = function (f$prime) {
    return function (v) {
        return f$prime(v.value0)(v.value1.value0)(v.value1.value1.value0)(v.value1.value1.value1.value0)(v.value1.value1.value1.value1.value0)(v.value1.value1.value1.value1.value1.value0)(v.value1.value1.value1.value1.value1.value1.value0)(v.value1.value1.value1.value1.value1.value1.value1.value0)(v.value1.value1.value1.value1.value1.value1.value1.value1.value0);
    };
};

// | Given a function of 8 arguments, returns a function that accepts an 8-tuple.
var uncurry8 = function (f$prime) {
    return function (v) {
        return f$prime(v.value0)(v.value1.value0)(v.value1.value1.value0)(v.value1.value1.value1.value0)(v.value1.value1.value1.value1.value0)(v.value1.value1.value1.value1.value1.value0)(v.value1.value1.value1.value1.value1.value1.value0)(v.value1.value1.value1.value1.value1.value1.value1.value0);
    };
};

// | Given a function of 7 arguments, returns a function that accepts a 7-tuple.
var uncurry7 = function (f$prime) {
    return function (v) {
        return f$prime(v.value0)(v.value1.value0)(v.value1.value1.value0)(v.value1.value1.value1.value0)(v.value1.value1.value1.value1.value0)(v.value1.value1.value1.value1.value1.value0)(v.value1.value1.value1.value1.value1.value1.value0);
    };
};

// | Given a function of 6 arguments, returns a function that accepts a 6-tuple.
var uncurry6 = function (f$prime) {
    return function (v) {
        return f$prime(v.value0)(v.value1.value0)(v.value1.value1.value0)(v.value1.value1.value1.value0)(v.value1.value1.value1.value1.value0)(v.value1.value1.value1.value1.value1.value0);
    };
};

// | Given a function of 5 arguments, returns a function that accepts a 5-tuple.
var uncurry5 = function (f) {
    return function (v) {
        return f(v.value0)(v.value1.value0)(v.value1.value1.value0)(v.value1.value1.value1.value0)(v.value1.value1.value1.value1.value0);
    };
};

// | Given a function of 4 arguments, returns a function that accepts a 4-tuple.
var uncurry4 = function (f) {
    return function (v) {
        return f(v.value0)(v.value1.value0)(v.value1.value1.value0)(v.value1.value1.value1.value0);
    };
};

// | Given a function of 3 arguments, returns a function that accepts a 3-tuple.
var uncurry3 = function (f) {
    return function (v) {
        return f(v.value0)(v.value1.value0)(v.value1.value1.value0);
    };
};

// | Given a function of 2 arguments, returns a function that accepts a 2-tuple.
var uncurry2 = function (f) {
    return function (v) {
        return f(v.value0)(v.value1.value0);
    };
};

// | Given a function of 10 arguments, returns a function that accepts a 10-tuple.
var uncurry10 = function (f$prime) {
    return function (v) {
        return f$prime(v.value0)(v.value1.value0)(v.value1.value1.value0)(v.value1.value1.value1.value0)(v.value1.value1.value1.value1.value0)(v.value1.value1.value1.value1.value1.value0)(v.value1.value1.value1.value1.value1.value1.value0)(v.value1.value1.value1.value1.value1.value1.value1.value0)(v.value1.value1.value1.value1.value1.value1.value1.value1.value0)(v.value1.value1.value1.value1.value1.value1.value1.value1.value1.value0);
    };
};

// | Given a function of 1 argument, returns a function that accepts a singleton tuple.
var uncurry1 = function (f) {
    return function (v) {
        return f(v.value0);
    };
};

// | Given 9 values, creates a nested 9-tuple.
var tuple9 = function (a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return function (e) {
                    return function (f) {
                        return function (g) {
                            return function (h) {
                                return function (i) {
                                    return new Data_Tuple.Tuple(a, new Data_Tuple.Tuple(b, new Data_Tuple.Tuple(c, new Data_Tuple.Tuple(d, new Data_Tuple.Tuple(e, new Data_Tuple.Tuple(f, new Data_Tuple.Tuple(g, new Data_Tuple.Tuple(h, new Data_Tuple.Tuple(i, Data_Unit.unit)))))))));
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};

// | Given 8 values, creates a nested 8-tuple.
var tuple8 = function (a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return function (e) {
                    return function (f) {
                        return function (g) {
                            return function (h) {
                                return new Data_Tuple.Tuple(a, new Data_Tuple.Tuple(b, new Data_Tuple.Tuple(c, new Data_Tuple.Tuple(d, new Data_Tuple.Tuple(e, new Data_Tuple.Tuple(f, new Data_Tuple.Tuple(g, new Data_Tuple.Tuple(h, Data_Unit.unit))))))));
                            };
                        };
                    };
                };
            };
        };
    };
};

// | Given 7 values, creates a nested 7-tuple.
var tuple7 = function (a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return function (e) {
                    return function (f) {
                        return function (g) {
                            return new Data_Tuple.Tuple(a, new Data_Tuple.Tuple(b, new Data_Tuple.Tuple(c, new Data_Tuple.Tuple(d, new Data_Tuple.Tuple(e, new Data_Tuple.Tuple(f, new Data_Tuple.Tuple(g, Data_Unit.unit)))))));
                        };
                    };
                };
            };
        };
    };
};

// | Given 6 values, creates a nested 6-tuple.
var tuple6 = function (a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return function (e) {
                    return function (f) {
                        return new Data_Tuple.Tuple(a, new Data_Tuple.Tuple(b, new Data_Tuple.Tuple(c, new Data_Tuple.Tuple(d, new Data_Tuple.Tuple(e, new Data_Tuple.Tuple(f, Data_Unit.unit))))));
                    };
                };
            };
        };
    };
};

// | Given 5 values, creates a nested 5-tuple.
var tuple5 = function (a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return function (e) {
                    return new Data_Tuple.Tuple(a, new Data_Tuple.Tuple(b, new Data_Tuple.Tuple(c, new Data_Tuple.Tuple(d, new Data_Tuple.Tuple(e, Data_Unit.unit)))));
                };
            };
        };
    };
};

// | Given 4 values, creates a nested 4-tuple.
var tuple4 = function (a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return new Data_Tuple.Tuple(a, new Data_Tuple.Tuple(b, new Data_Tuple.Tuple(c, new Data_Tuple.Tuple(d, Data_Unit.unit))));
            };
        };
    };
};

// | Given 3 values, creates a nested 3-tuple.
var tuple3 = function (a) {
    return function (b) {
        return function (c) {
            return new Data_Tuple.Tuple(a, new Data_Tuple.Tuple(b, new Data_Tuple.Tuple(c, Data_Unit.unit)));
        };
    };
};

// | Given 2 values, creates a 2-tuple.
var tuple2 = function (a) {
    return function (b) {
        return new Data_Tuple.Tuple(a, new Data_Tuple.Tuple(b, Data_Unit.unit));
    };
};

// | Given 10 values, creates a nested 10-tuple.
var tuple10 = function (a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return function (e) {
                    return function (f) {
                        return function (g) {
                            return function (h) {
                                return function (i) {
                                    return function (j) {
                                        return new Data_Tuple.Tuple(a, new Data_Tuple.Tuple(b, new Data_Tuple.Tuple(c, new Data_Tuple.Tuple(d, new Data_Tuple.Tuple(e, new Data_Tuple.Tuple(f, new Data_Tuple.Tuple(g, new Data_Tuple.Tuple(h, new Data_Tuple.Tuple(i, new Data_Tuple.Tuple(j, Data_Unit.unit))))))))));
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};

// | Creates a singleton tuple.
var tuple1 = function (a) {
    return new Data_Tuple.Tuple(a, Data_Unit.unit);
};

// | Given at least a 9-tuple, modifies the ninth value.
var over9 = function (o) {
    return function (v) {
        return new Data_Tuple.Tuple(v.value0, new Data_Tuple.Tuple(v.value1.value0, new Data_Tuple.Tuple(v.value1.value1.value0, new Data_Tuple.Tuple(v.value1.value1.value1.value0, new Data_Tuple.Tuple(v.value1.value1.value1.value1.value0, new Data_Tuple.Tuple(v.value1.value1.value1.value1.value1.value0, new Data_Tuple.Tuple(v.value1.value1.value1.value1.value1.value1.value0, new Data_Tuple.Tuple(v.value1.value1.value1.value1.value1.value1.value1.value0, new Data_Tuple.Tuple(o(v.value1.value1.value1.value1.value1.value1.value1.value1.value0), v.value1.value1.value1.value1.value1.value1.value1.value1.value1)))))))));
    };
};

// | Given at least an 8-tuple, modifies the eighth value.
var over8 = function (o) {
    return function (v) {
        return new Data_Tuple.Tuple(v.value0, new Data_Tuple.Tuple(v.value1.value0, new Data_Tuple.Tuple(v.value1.value1.value0, new Data_Tuple.Tuple(v.value1.value1.value1.value0, new Data_Tuple.Tuple(v.value1.value1.value1.value1.value0, new Data_Tuple.Tuple(v.value1.value1.value1.value1.value1.value0, new Data_Tuple.Tuple(v.value1.value1.value1.value1.value1.value1.value0, new Data_Tuple.Tuple(o(v.value1.value1.value1.value1.value1.value1.value1.value0), v.value1.value1.value1.value1.value1.value1.value1.value1))))))));
    };
};

// | Given at least a 7-tuple, modifies the seventh value.
var over7 = function (o) {
    return function (v) {
        return new Data_Tuple.Tuple(v.value0, new Data_Tuple.Tuple(v.value1.value0, new Data_Tuple.Tuple(v.value1.value1.value0, new Data_Tuple.Tuple(v.value1.value1.value1.value0, new Data_Tuple.Tuple(v.value1.value1.value1.value1.value0, new Data_Tuple.Tuple(v.value1.value1.value1.value1.value1.value0, new Data_Tuple.Tuple(o(v.value1.value1.value1.value1.value1.value1.value0), v.value1.value1.value1.value1.value1.value1.value1)))))));
    };
};

// | Given at least a 6-tuple, modifies the sixth value.
var over6 = function (o) {
    return function (v) {
        return new Data_Tuple.Tuple(v.value0, new Data_Tuple.Tuple(v.value1.value0, new Data_Tuple.Tuple(v.value1.value1.value0, new Data_Tuple.Tuple(v.value1.value1.value1.value0, new Data_Tuple.Tuple(v.value1.value1.value1.value1.value0, new Data_Tuple.Tuple(o(v.value1.value1.value1.value1.value1.value0), v.value1.value1.value1.value1.value1.value1))))));
    };
};

// | Given at least a 5-tuple, modifies the fifth value.
var over5 = function (o) {
    return function (v) {
        return new Data_Tuple.Tuple(v.value0, new Data_Tuple.Tuple(v.value1.value0, new Data_Tuple.Tuple(v.value1.value1.value0, new Data_Tuple.Tuple(v.value1.value1.value1.value0, new Data_Tuple.Tuple(o(v.value1.value1.value1.value1.value0), v.value1.value1.value1.value1.value1)))));
    };
};

// | Given at least a 4-tuple, modifies the fourth value.
var over4 = function (o) {
    return function (v) {
        return new Data_Tuple.Tuple(v.value0, new Data_Tuple.Tuple(v.value1.value0, new Data_Tuple.Tuple(v.value1.value1.value0, new Data_Tuple.Tuple(o(v.value1.value1.value1.value0), v.value1.value1.value1.value1))));
    };
};

// | Given at least a 3-tuple, modifies the third value.
var over3 = function (o) {
    return function (v) {
        return new Data_Tuple.Tuple(v.value0, new Data_Tuple.Tuple(v.value1.value0, new Data_Tuple.Tuple(o(v.value1.value1.value0), v.value1.value1.value1)));
    };
};

// | Given at least a 2-tuple, modifies the second value.
var over2 = function (o) {
    return function (v) {
        return new Data_Tuple.Tuple(v.value0, new Data_Tuple.Tuple(o(v.value1.value0), v.value1.value1));
    };
};

// | Given at least a 10-tuple, modifies the tenth value.
var over10 = function (o) {
    return function (v) {
        return new Data_Tuple.Tuple(v.value0, new Data_Tuple.Tuple(v.value1.value0, new Data_Tuple.Tuple(v.value1.value1.value0, new Data_Tuple.Tuple(v.value1.value1.value1.value0, new Data_Tuple.Tuple(v.value1.value1.value1.value1.value0, new Data_Tuple.Tuple(v.value1.value1.value1.value1.value1.value0, new Data_Tuple.Tuple(v.value1.value1.value1.value1.value1.value1.value0, new Data_Tuple.Tuple(v.value1.value1.value1.value1.value1.value1.value1.value0, new Data_Tuple.Tuple(v.value1.value1.value1.value1.value1.value1.value1.value1.value0, new Data_Tuple.Tuple(o(v.value1.value1.value1.value1.value1.value1.value1.value1.value1.value0), v.value1.value1.value1.value1.value1.value1.value1.value1.value1.value1))))))))));
    };
};

// | Given at least a singleton tuple, modifies the first value.
var over1 = function (o) {
    return function (v) {
        return new Data_Tuple.Tuple(o(v.value0), v.value1);
    };
};

// | Given at least a 9-tuple, gets the ninth value.
var get9 = function (v) {
    return v.value1.value1.value1.value1.value1.value1.value1.value1.value0;
};

// | Given at least an 8-tuple, gets the eigth value.
var get8 = function (v) {
    return v.value1.value1.value1.value1.value1.value1.value1.value0;
};

// | Given at least a 7-tuple, gets the seventh value.
var get7 = function (v) {
    return v.value1.value1.value1.value1.value1.value1.value0;
};

// | Given at least a 6-tuple, gets the sixth value.
var get6 = function (v) {
    return v.value1.value1.value1.value1.value1.value0;
};

// | Given at least a 5-tuple, gets the fifth value.
var get5 = function (v) {
    return v.value1.value1.value1.value1.value0;
};

// | Given at least a 4-tuple, gets the fourth value.
var get4 = function (v) {
    return v.value1.value1.value1.value0;
};

// | Given at least a 3-tuple, gets the third value.
var get3 = function (v) {
    return v.value1.value1.value0;
};

// | Given at least a 2-tuple, gets the second value.
var get2 = function (v) {
    return v.value1.value0;
};

// | Given at least a 10-tuple, gets the tenth value.
var get10 = function (v) {
    return v.value1.value1.value1.value1.value1.value1.value1.value1.value1.value0;
};

// | Given at least a singleton tuple, gets the first value.
var get1 = function (v) {
    return v.value0;
};

// | Given a function that accepts at least a 9-tuple, returns a function of 9 arguments.
var curry9 = function (z) {
    return function (f$prime) {
        return function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return function (f) {
                                return function (g) {
                                    return function (h) {
                                        return function (i) {
                                            return f$prime(new Data_Tuple.Tuple(a, new Data_Tuple.Tuple(b, new Data_Tuple.Tuple(c, new Data_Tuple.Tuple(d, new Data_Tuple.Tuple(e, new Data_Tuple.Tuple(f, new Data_Tuple.Tuple(g, new Data_Tuple.Tuple(h, new Data_Tuple.Tuple(i, z))))))))));
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};

// | Given a function that accepts at least an 8-tuple, returns a function of 8 arguments.
var curry8 = function (z) {
    return function (f$prime) {
        return function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return function (f) {
                                return function (g) {
                                    return function (h) {
                                        return f$prime(new Data_Tuple.Tuple(a, new Data_Tuple.Tuple(b, new Data_Tuple.Tuple(c, new Data_Tuple.Tuple(d, new Data_Tuple.Tuple(e, new Data_Tuple.Tuple(f, new Data_Tuple.Tuple(g, new Data_Tuple.Tuple(h, z)))))))));
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};

// | Given a function that accepts at least a 7-tuple, returns a function of 7 arguments.
var curry7 = function (z) {
    return function (f$prime) {
        return function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return function (f) {
                                return function (g) {
                                    return f$prime(new Data_Tuple.Tuple(a, new Data_Tuple.Tuple(b, new Data_Tuple.Tuple(c, new Data_Tuple.Tuple(d, new Data_Tuple.Tuple(e, new Data_Tuple.Tuple(f, new Data_Tuple.Tuple(g, z))))))));
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};

// | Given a function that accepts at least a 6-tuple, returns a function of 6 arguments.
var curry6 = function (z) {
    return function (f$prime) {
        return function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return function (f) {
                                return f$prime(new Data_Tuple.Tuple(a, new Data_Tuple.Tuple(b, new Data_Tuple.Tuple(c, new Data_Tuple.Tuple(d, new Data_Tuple.Tuple(e, new Data_Tuple.Tuple(f, z)))))));
                            };
                        };
                    };
                };
            };
        };
    };
};

// | Given a function that accepts at least a 5-tuple, returns a function of 5 arguments.
var curry5 = function (z) {
    return function (f) {
        return function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return f(new Data_Tuple.Tuple(a, new Data_Tuple.Tuple(b, new Data_Tuple.Tuple(c, new Data_Tuple.Tuple(d, new Data_Tuple.Tuple(e, z))))));
                        };
                    };
                };
            };
        };
    };
};

// | Given a function that accepts at least a 4-tuple, returns a function of 4 arguments.
var curry4 = function (z) {
    return function (f) {
        return function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return f(new Data_Tuple.Tuple(a, new Data_Tuple.Tuple(b, new Data_Tuple.Tuple(c, new Data_Tuple.Tuple(d, z)))));
                    };
                };
            };
        };
    };
};

// | Given a function that accepts at least a 3-tuple, returns a function of 3 arguments.
var curry3 = function (z) {
    return function (f) {
        return function (a) {
            return function (b) {
                return function (c) {
                    return f(new Data_Tuple.Tuple(a, new Data_Tuple.Tuple(b, new Data_Tuple.Tuple(c, z))));
                };
            };
        };
    };
};

// | Given a function that accepts at least a 2-tuple, returns a function of 2 arguments.
var curry2 = function (z) {
    return function (f) {
        return function (a) {
            return function (b) {
                return f(new Data_Tuple.Tuple(a, new Data_Tuple.Tuple(b, z)));
            };
        };
    };
};

// | Given a function that accepts at least a 10-tuple, returns a function of 10 arguments.
var curry10 = function (z) {
    return function (f$prime) {
        return function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return function (f) {
                                return function (g) {
                                    return function (h) {
                                        return function (i) {
                                            return function (j) {
                                                return f$prime(new Data_Tuple.Tuple(a, new Data_Tuple.Tuple(b, new Data_Tuple.Tuple(c, new Data_Tuple.Tuple(d, new Data_Tuple.Tuple(e, new Data_Tuple.Tuple(f, new Data_Tuple.Tuple(g, new Data_Tuple.Tuple(h, new Data_Tuple.Tuple(i, new Data_Tuple.Tuple(j, z)))))))))));
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};

// | Given a function that accepts at least a singleton tuple, returns a function of 1 argument.
var curry1 = function (z) {
    return function (f) {
        return function (a) {
            return f(new Data_Tuple.Tuple(a, z));
        };
    };
};
export {
    tuple1,
    tuple2,
    tuple3,
    tuple4,
    tuple5,
    tuple6,
    tuple7,
    tuple8,
    tuple9,
    tuple10,
    get1,
    get2,
    get3,
    get4,
    get5,
    get6,
    get7,
    get8,
    get9,
    get10,
    over1,
    over2,
    over3,
    over4,
    over5,
    over6,
    over7,
    over8,
    over9,
    over10,
    uncurry1,
    uncurry2,
    uncurry3,
    uncurry4,
    uncurry5,
    uncurry6,
    uncurry7,
    uncurry8,
    uncurry9,
    uncurry10,
    curry1,
    curry2,
    curry3,
    curry4,
    curry5,
    curry6,
    curry7,
    curry8,
    curry9,
    curry10
};
