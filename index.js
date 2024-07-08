(() => {
  // output/Data.Argonaut.Core/foreign.js
  function id(x) {
    return x;
  }
  var jsonNull = null;
  function stringify(j) {
    return JSON.stringify(j);
  }
  function isArray(a) {
    return Object.prototype.toString.call(a) === "[object Array]";
  }
  function _caseJson(isNull2, isBool, isNum, isStr, isArr, isObj, j) {
    if (j == null) return isNull2();
    else if (typeof j === "boolean") return isBool(j);
    else if (typeof j === "number") return isNum(j);
    else if (typeof j === "string") return isStr(j);
    else if (Object.prototype.toString.call(j) === "[object Array]")
      return isArr(j);
    else return isObj(j);
  }
  function _compare(EQ2, GT2, LT2, a, b) {
    if (a == null) {
      if (b == null) return EQ2;
      else return LT2;
    } else if (typeof a === "boolean") {
      if (typeof b === "boolean") {
        if (a === b) return EQ2;
        else if (a === false) return LT2;
        else return GT2;
      } else if (b == null) return GT2;
      else return LT2;
    } else if (typeof a === "number") {
      if (typeof b === "number") {
        if (a === b) return EQ2;
        else if (a < b) return LT2;
        else return GT2;
      } else if (b == null) return GT2;
      else if (typeof b === "boolean") return GT2;
      else return LT2;
    } else if (typeof a === "string") {
      if (typeof b === "string") {
        if (a === b) return EQ2;
        else if (a < b) return LT2;
        else return GT2;
      } else if (b == null) return GT2;
      else if (typeof b === "boolean") return GT2;
      else if (typeof b === "number") return GT2;
      else return LT2;
    } else if (isArray(a)) {
      if (isArray(b)) {
        for (var i = 0; i < Math.min(a.length, b.length); i++) {
          var ca = _compare(EQ2, GT2, LT2, a[i], b[i]);
          if (ca !== EQ2) return ca;
        }
        if (a.length === b.length) return EQ2;
        else if (a.length < b.length) return LT2;
        else return GT2;
      } else if (b == null) return GT2;
      else if (typeof b === "boolean") return GT2;
      else if (typeof b === "number") return GT2;
      else if (typeof b === "string") return GT2;
      else return LT2;
    } else {
      if (b == null) return GT2;
      else if (typeof b === "boolean") return GT2;
      else if (typeof b === "number") return GT2;
      else if (typeof b === "string") return GT2;
      else if (isArray(b)) return GT2;
      else {
        var akeys = Object.keys(a);
        var bkeys = Object.keys(b);
        if (akeys.length < bkeys.length) return LT2;
        else if (akeys.length > bkeys.length) return GT2;
        var keys3 = akeys.concat(bkeys).sort();
        for (var j = 0; j < keys3.length; j++) {
          var k = keys3[j];
          if (a[k] === void 0) return LT2;
          else if (b[k] === void 0) return GT2;
          var ck = _compare(EQ2, GT2, LT2, a[k], b[k]);
          if (ck !== EQ2) return ck;
        }
        return EQ2;
      }
    }
  }

  // output/Data.Eq/foreign.js
  var refEq = function(r1) {
    return function(r2) {
      return r1 === r2;
    };
  };
  var eqBooleanImpl = refEq;
  var eqArrayImpl = function(f) {
    return function(xs) {
      return function(ys) {
        if (xs.length !== ys.length) return false;
        for (var i = 0; i < xs.length; i++) {
          if (!f(xs[i])(ys[i])) return false;
        }
        return true;
      };
    };
  };

  // output/Type.Proxy/index.js
  var $$Proxy = /* @__PURE__ */ function() {
    function $$Proxy2() {
    }
    ;
    $$Proxy2.value = new $$Proxy2();
    return $$Proxy2;
  }();

  // output/Data.Symbol/index.js
  var reflectSymbol = function(dict) {
    return dict.reflectSymbol;
  };

  // output/Record.Unsafe/foreign.js
  var unsafeGet = function(label4) {
    return function(rec) {
      return rec[label4];
    };
  };
  var unsafeSet = function(label4) {
    return function(value12) {
      return function(rec) {
        var copy = {};
        for (var key in rec) {
          if ({}.hasOwnProperty.call(rec, key)) {
            copy[key] = rec[key];
          }
        }
        copy[label4] = value12;
        return copy;
      };
    };
  };

  // output/Data.Eq/index.js
  var eqBoolean = {
    eq: eqBooleanImpl
  };
  var eq = function(dict) {
    return dict.eq;
  };
  var eq2 = /* @__PURE__ */ eq(eqBoolean);
  var eqArray = function(dictEq) {
    return {
      eq: eqArrayImpl(eq(dictEq))
    };
  };
  var notEq = function(dictEq) {
    var eq32 = eq(dictEq);
    return function(x) {
      return function(y) {
        return eq2(eq32(x)(y))(false);
      };
    };
  };

  // output/Control.Semigroupoid/index.js
  var semigroupoidFn = {
    compose: function(f) {
      return function(g) {
        return function(x) {
          return f(g(x));
        };
      };
    }
  };

  // output/Control.Category/index.js
  var identity = function(dict) {
    return dict.identity;
  };
  var categoryFn = {
    identity: function(x) {
      return x;
    },
    Semigroupoid0: function() {
      return semigroupoidFn;
    }
  };

  // output/Data.Function/index.js
  var $$const = function(a) {
    return function(v) {
      return a;
    };
  };

  // output/Data.Functor/foreign.js
  var arrayMap = function(f) {
    return function(arr) {
      var l = arr.length;
      var result = new Array(l);
      for (var i = 0; i < l; i++) {
        result[i] = f(arr[i]);
      }
      return result;
    };
  };

  // output/Data.Unit/foreign.js
  var unit = void 0;

  // output/Data.Functor/index.js
  var map = function(dict) {
    return dict.map;
  };
  var functorArray = {
    map: arrayMap
  };

  // output/Data.Semigroup/foreign.js
  var concatArray = function(xs) {
    return function(ys) {
      if (xs.length === 0) return ys;
      if (ys.length === 0) return xs;
      return xs.concat(ys);
    };
  };

  // output/Data.Semigroup/index.js
  var semigroupArray = {
    append: concatArray
  };
  var append = function(dict) {
    return dict.append;
  };

  // output/Control.Applicative/index.js
  var pure = function(dict) {
    return dict.pure;
  };
  var when = function(dictApplicative) {
    var pure1 = pure(dictApplicative);
    return function(v) {
      return function(v1) {
        if (v) {
          return v1;
        }
        ;
        if (!v) {
          return pure1(unit);
        }
        ;
        throw new Error("Failed pattern match at Control.Applicative (line 63, column 1 - line 63, column 63): " + [v.constructor.name, v1.constructor.name]);
      };
    };
  };

  // output/Data.Bounded/foreign.js
  var topChar = String.fromCharCode(65535);
  var bottomChar = String.fromCharCode(0);
  var topNumber = Number.POSITIVE_INFINITY;
  var bottomNumber = Number.NEGATIVE_INFINITY;

  // output/Data.Ordering/index.js
  var LT = /* @__PURE__ */ function() {
    function LT2() {
    }
    ;
    LT2.value = new LT2();
    return LT2;
  }();
  var GT = /* @__PURE__ */ function() {
    function GT2() {
    }
    ;
    GT2.value = new GT2();
    return GT2;
  }();
  var EQ = /* @__PURE__ */ function() {
    function EQ2() {
    }
    ;
    EQ2.value = new EQ2();
    return EQ2;
  }();
  var eqOrdering = {
    eq: function(v) {
      return function(v1) {
        if (v instanceof LT && v1 instanceof LT) {
          return true;
        }
        ;
        if (v instanceof GT && v1 instanceof GT) {
          return true;
        }
        ;
        if (v instanceof EQ && v1 instanceof EQ) {
          return true;
        }
        ;
        return false;
      };
    }
  };

  // output/Data.Ord/index.js
  var compare = function(dict) {
    return dict.compare;
  };

  // output/Data.Show/foreign.js
  var showIntImpl = function(n) {
    return n.toString();
  };
  var showStringImpl = function(s) {
    var l = s.length;
    return '"' + s.replace(
      /[\0-\x1F\x7F"\\]/g,
      // eslint-disable-line no-control-regex
      function(c, i) {
        switch (c) {
          case '"':
          case "\\":
            return "\\" + c;
          case "\x07":
            return "\\a";
          case "\b":
            return "\\b";
          case "\f":
            return "\\f";
          case "\n":
            return "\\n";
          case "\r":
            return "\\r";
          case "	":
            return "\\t";
          case "\v":
            return "\\v";
        }
        var k = i + 1;
        var empty4 = k < l && s[k] >= "0" && s[k] <= "9" ? "\\&" : "";
        return "\\" + c.charCodeAt(0).toString(10) + empty4;
      }
    ) + '"';
  };

  // output/Data.Show/index.js
  var showString = {
    show: showStringImpl
  };
  var showRecordFields = function(dict) {
    return dict.showRecordFields;
  };
  var showRecord = function() {
    return function() {
      return function(dictShowRecordFields) {
        var showRecordFields1 = showRecordFields(dictShowRecordFields);
        return {
          show: function(record) {
            return "{" + (showRecordFields1($$Proxy.value)(record) + "}");
          }
        };
      };
    };
  };
  var showInt = {
    show: showIntImpl
  };
  var show = function(dict) {
    return dict.show;
  };
  var showRecordFieldsConsNil = function(dictIsSymbol) {
    var reflectSymbol2 = reflectSymbol(dictIsSymbol);
    return function(dictShow) {
      var show13 = show(dictShow);
      return {
        showRecordFields: function(v) {
          return function(record) {
            var key = reflectSymbol2($$Proxy.value);
            var focus2 = unsafeGet(key)(record);
            return " " + (key + (": " + (show13(focus2) + " ")));
          };
        }
      };
    };
  };

  // output/Data.Generic.Rep/index.js
  var Inl = /* @__PURE__ */ function() {
    function Inl2(value0) {
      this.value0 = value0;
    }
    ;
    Inl2.create = function(value0) {
      return new Inl2(value0);
    };
    return Inl2;
  }();
  var Inr = /* @__PURE__ */ function() {
    function Inr2(value0) {
      this.value0 = value0;
    }
    ;
    Inr2.create = function(value0) {
      return new Inr2(value0);
    };
    return Inr2;
  }();
  var Argument = function(x) {
    return x;
  };
  var to = function(dict) {
    return dict.to;
  };
  var from = function(dict) {
    return dict.from;
  };

  // output/Data.Maybe/index.js
  var Nothing = /* @__PURE__ */ function() {
    function Nothing2() {
    }
    ;
    Nothing2.value = new Nothing2();
    return Nothing2;
  }();
  var Just = /* @__PURE__ */ function() {
    function Just2(value0) {
      this.value0 = value0;
    }
    ;
    Just2.create = function(value0) {
      return new Just2(value0);
    };
    return Just2;
  }();
  var maybe = function(v) {
    return function(v1) {
      return function(v2) {
        if (v2 instanceof Nothing) {
          return v;
        }
        ;
        if (v2 instanceof Just) {
          return v1(v2.value0);
        }
        ;
        throw new Error("Failed pattern match at Data.Maybe (line 237, column 1 - line 237, column 51): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
      };
    };
  };
  var functorMaybe = {
    map: function(v) {
      return function(v1) {
        if (v1 instanceof Just) {
          return new Just(v(v1.value0));
        }
        ;
        return Nothing.value;
      };
    }
  };

  // output/Foreign.Object/foreign.js
  function _copyST(m) {
    return function() {
      var r = {};
      for (var k in m) {
        if (hasOwnProperty.call(m, k)) {
          r[k] = m[k];
        }
      }
      return r;
    };
  }
  var empty = {};
  function runST(f) {
    return f();
  }
  function _lookup(no, yes, k, m) {
    return k in m ? yes(m[k]) : no;
  }
  function toArrayWithKey(f) {
    return function(m) {
      var r = [];
      for (var k in m) {
        if (hasOwnProperty.call(m, k)) {
          r.push(f(k)(m[k]));
        }
      }
      return r;
    };
  }
  var keys = Object.keys || toArrayWithKey(function(k) {
    return function() {
      return k;
    };
  });

  // output/Control.Bind/index.js
  var discard = function(dict) {
    return dict.discard;
  };
  var bind = function(dict) {
    return dict.bind;
  };
  var discardUnit = {
    discard: function(dictBind) {
      return bind(dictBind);
    }
  };

  // output/Data.Either/index.js
  var Left = /* @__PURE__ */ function() {
    function Left2(value0) {
      this.value0 = value0;
    }
    ;
    Left2.create = function(value0) {
      return new Left2(value0);
    };
    return Left2;
  }();
  var Right = /* @__PURE__ */ function() {
    function Right2(value0) {
      this.value0 = value0;
    }
    ;
    Right2.create = function(value0) {
      return new Right2(value0);
    };
    return Right2;
  }();
  var showEither = function(dictShow) {
    var show4 = show(dictShow);
    return function(dictShow1) {
      var show13 = show(dictShow1);
      return {
        show: function(v) {
          if (v instanceof Left) {
            return "(Left " + (show4(v.value0) + ")");
          }
          ;
          if (v instanceof Right) {
            return "(Right " + (show13(v.value0) + ")");
          }
          ;
          throw new Error("Failed pattern match at Data.Either (line 173, column 1 - line 175, column 46): " + [v.constructor.name]);
        }
      };
    };
  };
  var note = function(a) {
    return maybe(new Left(a))(Right.create);
  };
  var functorEither = {
    map: function(f) {
      return function(m) {
        if (m instanceof Left) {
          return new Left(m.value0);
        }
        ;
        if (m instanceof Right) {
          return new Right(f(m.value0));
        }
        ;
        throw new Error("Failed pattern match at Data.Either (line 0, column 0 - line 0, column 0): " + [m.constructor.name]);
      };
    }
  };
  var map2 = /* @__PURE__ */ map(functorEither);
  var either = function(v) {
    return function(v1) {
      return function(v2) {
        if (v2 instanceof Left) {
          return v(v2.value0);
        }
        ;
        if (v2 instanceof Right) {
          return v1(v2.value0);
        }
        ;
        throw new Error("Failed pattern match at Data.Either (line 208, column 1 - line 208, column 64): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
      };
    };
  };
  var applyEither = {
    apply: function(v) {
      return function(v1) {
        if (v instanceof Left) {
          return new Left(v.value0);
        }
        ;
        if (v instanceof Right) {
          return map2(v.value0)(v1);
        }
        ;
        throw new Error("Failed pattern match at Data.Either (line 70, column 1 - line 72, column 30): " + [v.constructor.name, v1.constructor.name]);
      };
    },
    Functor0: function() {
      return functorEither;
    }
  };
  var bindEither = {
    bind: /* @__PURE__ */ either(function(e) {
      return function(v) {
        return new Left(e);
      };
    })(function(a) {
      return function(f) {
        return f(a);
      };
    }),
    Apply0: function() {
      return applyEither;
    }
  };
  var applicativeEither = /* @__PURE__ */ function() {
    return {
      pure: Right.create,
      Apply0: function() {
        return applyEither;
      }
    };
  }();

  // output/Data.Array/foreign.js
  var replicateFill = function(count, value12) {
    if (count < 1) {
      return [];
    }
    var result = new Array(count);
    return result.fill(value12);
  };
  var replicatePolyfill = function(count, value12) {
    var result = [];
    var n = 0;
    for (var i = 0; i < count; i++) {
      result[n++] = value12;
    }
    return result;
  };
  var replicateImpl = typeof Array.prototype.fill === "function" ? replicateFill : replicatePolyfill;
  var unconsImpl = function(empty4, next, xs) {
    return xs.length === 0 ? empty4({}) : next(xs[0])(xs.slice(1));
  };

  // output/Data.Bifunctor/index.js
  var identity2 = /* @__PURE__ */ identity(categoryFn);
  var bimap = function(dict) {
    return dict.bimap;
  };
  var lmap = function(dictBifunctor) {
    var bimap1 = bimap(dictBifunctor);
    return function(f) {
      return bimap1(f)(identity2);
    };
  };
  var bifunctorEither = {
    bimap: function(v) {
      return function(v1) {
        return function(v2) {
          if (v2 instanceof Left) {
            return new Left(v(v2.value0));
          }
          ;
          if (v2 instanceof Right) {
            return new Right(v1(v2.value0));
          }
          ;
          throw new Error("Failed pattern match at Data.Bifunctor (line 32, column 1 - line 34, column 36): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
        };
      };
    }
  };

  // output/Data.Function.Uncurried/foreign.js
  var runFn3 = function(fn) {
    return function(a) {
      return function(b) {
        return function(c) {
          return fn(a, b, c);
        };
      };
    };
  };
  var runFn4 = function(fn) {
    return function(a) {
      return function(b) {
        return function(c) {
          return function(d) {
            return fn(a, b, c, d);
          };
        };
      };
    };
  };

  // output/Data.Array/index.js
  var uncons = /* @__PURE__ */ function() {
    return runFn3(unconsImpl)($$const(Nothing.value))(function(x) {
      return function(xs) {
        return new Just({
          head: x,
          tail: xs
        });
      };
    });
  }();

  // output/Foreign.Object.ST/foreign.js
  function poke2(k) {
    return function(v) {
      return function(m) {
        return function() {
          m[k] = v;
          return m;
        };
      };
    };
  }

  // output/Foreign.Object/index.js
  var thawST = _copyST;
  var mutate = function(f) {
    return function(m) {
      return runST(function __do2() {
        var s = thawST(m)();
        f(s)();
        return s;
      });
    };
  };
  var lookup = /* @__PURE__ */ function() {
    return runFn4(_lookup)(Nothing.value)(Just.create);
  }();
  var insert = function(k) {
    return function(v) {
      return mutate(poke2(k)(v));
    };
  };

  // output/Data.Argonaut.Core/index.js
  var eq3 = /* @__PURE__ */ eq(eqOrdering);
  var verbJsonType = function(def) {
    return function(f) {
      return function(g) {
        return g(def)(f);
      };
    };
  };
  var toJsonType = /* @__PURE__ */ function() {
    return verbJsonType(Nothing.value)(Just.create);
  }();
  var ordJson = {
    compare: function(a) {
      return function(b) {
        return _compare(EQ.value, GT.value, LT.value, a, b);
      };
    },
    Eq0: function() {
      return eqJson;
    }
  };
  var eqJson = {
    eq: function(j1) {
      return function(j2) {
        return eq3(compare(ordJson)(j1)(j2))(EQ.value);
      };
    }
  };
  var caseJsonString = function(d) {
    return function(f) {
      return function(j) {
        return _caseJson($$const(d), $$const(d), $$const(d), f, $$const(d), $$const(d), j);
      };
    };
  };
  var toString = /* @__PURE__ */ toJsonType(caseJsonString);
  var caseJsonObject = function(d) {
    return function(f) {
      return function(j) {
        return _caseJson($$const(d), $$const(d), $$const(d), $$const(d), $$const(d), f, j);
      };
    };
  };
  var toObject = /* @__PURE__ */ toJsonType(caseJsonObject);
  var caseJsonArray = function(d) {
    return function(f) {
      return function(j) {
        return _caseJson($$const(d), $$const(d), $$const(d), $$const(d), f, $$const(d), j);
      };
    };
  };
  var toArray = /* @__PURE__ */ toJsonType(caseJsonArray);

  // output/Data.Argonaut.Decode.Error/index.js
  var show2 = /* @__PURE__ */ show(showString);
  var show1 = /* @__PURE__ */ show(showInt);
  var TypeMismatch = /* @__PURE__ */ function() {
    function TypeMismatch2(value0) {
      this.value0 = value0;
    }
    ;
    TypeMismatch2.create = function(value0) {
      return new TypeMismatch2(value0);
    };
    return TypeMismatch2;
  }();
  var UnexpectedValue = /* @__PURE__ */ function() {
    function UnexpectedValue2(value0) {
      this.value0 = value0;
    }
    ;
    UnexpectedValue2.create = function(value0) {
      return new UnexpectedValue2(value0);
    };
    return UnexpectedValue2;
  }();
  var AtIndex = /* @__PURE__ */ function() {
    function AtIndex2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    AtIndex2.create = function(value0) {
      return function(value1) {
        return new AtIndex2(value0, value1);
      };
    };
    return AtIndex2;
  }();
  var AtKey = /* @__PURE__ */ function() {
    function AtKey2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    AtKey2.create = function(value0) {
      return function(value1) {
        return new AtKey2(value0, value1);
      };
    };
    return AtKey2;
  }();
  var Named = /* @__PURE__ */ function() {
    function Named2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Named2.create = function(value0) {
      return function(value1) {
        return new Named2(value0, value1);
      };
    };
    return Named2;
  }();
  var MissingValue = /* @__PURE__ */ function() {
    function MissingValue2() {
    }
    ;
    MissingValue2.value = new MissingValue2();
    return MissingValue2;
  }();
  var showJsonDecodeError = {
    show: function(v) {
      if (v instanceof TypeMismatch) {
        return "(TypeMismatch " + (show2(v.value0) + ")");
      }
      ;
      if (v instanceof UnexpectedValue) {
        return "(UnexpectedValue " + (stringify(v.value0) + ")");
      }
      ;
      if (v instanceof AtIndex) {
        return "(AtIndex " + (show1(v.value0) + (" " + (show(showJsonDecodeError)(v.value1) + ")")));
      }
      ;
      if (v instanceof AtKey) {
        return "(AtKey " + (show2(v.value0) + (" " + (show(showJsonDecodeError)(v.value1) + ")")));
      }
      ;
      if (v instanceof Named) {
        return "(Named " + (show2(v.value0) + (" " + (show(showJsonDecodeError)(v.value1) + ")")));
      }
      ;
      if (v instanceof MissingValue) {
        return "MissingValue";
      }
      ;
      throw new Error("Failed pattern match at Data.Argonaut.Decode.Error (line 24, column 10 - line 30, column 35): " + [v.constructor.name]);
    }
  };
  var printJsonDecodeError = function(err) {
    var go2 = function(v) {
      if (v instanceof TypeMismatch) {
        return "  Expected value of type '" + (v.value0 + "'.");
      }
      ;
      if (v instanceof UnexpectedValue) {
        return "  Unexpected value " + (stringify(v.value0) + ".");
      }
      ;
      if (v instanceof AtIndex) {
        return "  At array index " + (show1(v.value0) + (":\n" + go2(v.value1)));
      }
      ;
      if (v instanceof AtKey) {
        return "  At object key '" + (v.value0 + ("':\n" + go2(v.value1)));
      }
      ;
      if (v instanceof Named) {
        return "  Under '" + (v.value0 + ("':\n" + go2(v.value1)));
      }
      ;
      if (v instanceof MissingValue) {
        return "  No value was found.";
      }
      ;
      throw new Error("Failed pattern match at Data.Argonaut.Decode.Error (line 37, column 8 - line 43, column 44): " + [v.constructor.name]);
    };
    return "An error occurred while decoding a JSON value:\n" + go2(err);
  };

  // output/Data.Int/foreign.js
  var toNumber = function(n) {
    return n;
  };

  // output/Data.String.CodePoints/foreign.js
  var hasArrayFrom = typeof Array.from === "function";
  var hasStringIterator = typeof Symbol !== "undefined" && Symbol != null && typeof Symbol.iterator !== "undefined" && typeof String.prototype[Symbol.iterator] === "function";
  var hasFromCodePoint = typeof String.prototype.fromCodePoint === "function";
  var hasCodePointAt = typeof String.prototype.codePointAt === "function";

  // output/Data.Argonaut.Decode.Decoders/index.js
  var decodeString = /* @__PURE__ */ function() {
    return caseJsonString(new Left(new TypeMismatch("String")))(Right.create);
  }();

  // output/Record/index.js
  var insert4 = function(dictIsSymbol) {
    var reflectSymbol2 = reflectSymbol(dictIsSymbol);
    return function() {
      return function() {
        return function(l) {
          return function(a) {
            return function(r) {
              return unsafeSet(reflectSymbol2(l))(a)(r);
            };
          };
        };
      };
    };
  };
  var get = function(dictIsSymbol) {
    var reflectSymbol2 = reflectSymbol(dictIsSymbol);
    return function() {
      return function(l) {
        return function(r) {
          return unsafeGet(reflectSymbol2(l))(r);
        };
      };
    };
  };

  // output/Data.Argonaut.Decode.Class/index.js
  var bind2 = /* @__PURE__ */ bind(bindEither);
  var lmap2 = /* @__PURE__ */ lmap(bifunctorEither);
  var map3 = /* @__PURE__ */ map(functorMaybe);
  var gDecodeJsonNil = {
    gDecodeJson: function(v) {
      return function(v1) {
        return new Right({});
      };
    }
  };
  var gDecodeJson = function(dict) {
    return dict.gDecodeJson;
  };
  var decodeRecord = function(dictGDecodeJson) {
    var gDecodeJson1 = gDecodeJson(dictGDecodeJson);
    return function() {
      return {
        decodeJson: function(json2) {
          var v = toObject(json2);
          if (v instanceof Just) {
            return gDecodeJson1(v.value0)($$Proxy.value);
          }
          ;
          if (v instanceof Nothing) {
            return new Left(new TypeMismatch("Object"));
          }
          ;
          throw new Error("Failed pattern match at Data.Argonaut.Decode.Class (line 103, column 5 - line 105, column 46): " + [v.constructor.name]);
        }
      };
    };
  };
  var decodeJsonString = {
    decodeJson: decodeString
  };
  var decodeJsonField = function(dict) {
    return dict.decodeJsonField;
  };
  var gDecodeJsonCons = function(dictDecodeJsonField) {
    var decodeJsonField1 = decodeJsonField(dictDecodeJsonField);
    return function(dictGDecodeJson) {
      var gDecodeJson1 = gDecodeJson(dictGDecodeJson);
      return function(dictIsSymbol) {
        var reflectSymbol2 = reflectSymbol(dictIsSymbol);
        var insert5 = insert4(dictIsSymbol)()();
        return function() {
          return function() {
            return {
              gDecodeJson: function(object) {
                return function(v) {
                  var fieldName = reflectSymbol2($$Proxy.value);
                  var fieldValue = lookup(fieldName)(object);
                  var v1 = decodeJsonField1(fieldValue);
                  if (v1 instanceof Just) {
                    return bind2(lmap2(AtKey.create(fieldName))(v1.value0))(function(val) {
                      return bind2(gDecodeJson1(object)($$Proxy.value))(function(rest) {
                        return new Right(insert5($$Proxy.value)(val)(rest));
                      });
                    });
                  }
                  ;
                  if (v1 instanceof Nothing) {
                    return new Left(new AtKey(fieldName, MissingValue.value));
                  }
                  ;
                  throw new Error("Failed pattern match at Data.Argonaut.Decode.Class (line 127, column 5 - line 134, column 44): " + [v1.constructor.name]);
                };
              }
            };
          };
        };
      };
    };
  };
  var decodeJson = function(dict) {
    return dict.decodeJson;
  };
  var decodeFieldId = function(dictDecodeJson) {
    var decodeJson1 = decodeJson(dictDecodeJson);
    return {
      decodeJsonField: function(j) {
        return map3(decodeJson1)(j);
      }
    };
  };

  // output/Data.Argonaut.Parser/foreign.js
  function _jsonParser(fail, succ, s) {
    try {
      return succ(JSON.parse(s));
    } catch (e) {
      return fail(e.message);
    }
  }

  // output/Data.Argonaut.Parser/index.js
  var jsonParser = function(j) {
    return _jsonParser(Left.create, Right.create, j);
  };

  // output/Data.Argonaut.Decode.Parser/index.js
  var parseJson = /* @__PURE__ */ function() {
    var $3 = lmap(bifunctorEither)(function(v) {
      return new TypeMismatch("JSON");
    });
    return function($4) {
      return $3(jsonParser($4));
    };
  }();

  // output/Data.Argonaut.Encode.Encoders/index.js
  var map4 = /* @__PURE__ */ map(functorArray);
  var encodeString = id;
  var encodeNumber = id;
  var encodeMaybe = function(encoder) {
    return function(v) {
      if (v instanceof Nothing) {
        return jsonNull;
      }
      ;
      if (v instanceof Just) {
        return encoder(v.value0);
      }
      ;
      throw new Error("Failed pattern match at Data.Argonaut.Encode.Encoders (line 31, column 23 - line 33, column 22): " + [v.constructor.name]);
    };
  };
  var encodeInt = function($53) {
    return id(toNumber($53));
  };
  var encodeArray = function(encoder) {
    var $58 = map4(encoder);
    return function($59) {
      return id($58($59));
    };
  };

  // output/Data.Argonaut.Encode.Class/index.js
  var gEncodeJsonNil = {
    gEncodeJson: function(v) {
      return function(v1) {
        return empty;
      };
    }
  };
  var gEncodeJson = function(dict) {
    return dict.gEncodeJson;
  };
  var encodeRecord = function(dictGEncodeJson) {
    var gEncodeJson1 = gEncodeJson(dictGEncodeJson);
    return function() {
      return {
        encodeJson: function(rec) {
          return id(gEncodeJson1(rec)($$Proxy.value));
        }
      };
    };
  };
  var encodeJsonJString = {
    encodeJson: encodeString
  };
  var encodeJsonJNumber = {
    encodeJson: encodeNumber
  };
  var encodeJsonInt = {
    encodeJson: encodeInt
  };
  var encodeJson = function(dict) {
    return dict.encodeJson;
  };
  var encodeJsonArray = function(dictEncodeJson) {
    return {
      encodeJson: encodeArray(encodeJson(dictEncodeJson))
    };
  };
  var encodeJsonMaybe = function(dictEncodeJson) {
    return {
      encodeJson: encodeMaybe(encodeJson(dictEncodeJson))
    };
  };
  var gEncodeJsonCons = function(dictEncodeJson) {
    var encodeJson1 = encodeJson(dictEncodeJson);
    return function(dictGEncodeJson) {
      var gEncodeJson1 = gEncodeJson(dictGEncodeJson);
      return function(dictIsSymbol) {
        var reflectSymbol2 = reflectSymbol(dictIsSymbol);
        var get2 = get(dictIsSymbol)();
        return function() {
          return {
            gEncodeJson: function(row) {
              return function(v) {
                return insert(reflectSymbol2($$Proxy.value))(encodeJson1(get2($$Proxy.value)(row)))(gEncodeJson1(row)($$Proxy.value));
              };
            }
          };
        };
      };
    };
  };

  // output/Effect.Console/foreign.js
  var log2 = function(s) {
    return function() {
      console.log(s);
    };
  };

  // output/Data.Argonaut.Types.Generic/index.js
  var defaultEncoding = {
    tagKey: "tag",
    valuesKey: "values",
    unwrapSingleArguments: false
  };

  // output/Data.Argonaut.Decode.Generic/index.js
  var bind3 = /* @__PURE__ */ bind(bindEither);
  var discard2 = /* @__PURE__ */ discard(discardUnit)(bindEither);
  var when2 = /* @__PURE__ */ when(applicativeEither);
  var pure2 = /* @__PURE__ */ pure(applicativeEither);
  var map5 = /* @__PURE__ */ map(functorEither);
  var lmap3 = /* @__PURE__ */ lmap(bifunctorEither);
  var notEq1 = /* @__PURE__ */ notEq(/* @__PURE__ */ eqArray(eqJson));
  var withTag = function(e) {
    return function(j) {
      return function(name14) {
        var decodingErr = Named.create(name14);
        return bind3(note(decodingErr(new TypeMismatch("Object")))(toObject(j)))(function(jObj) {
          return bind3(note(decodingErr(new AtKey(e.tagKey, MissingValue.value)))(lookup(e.tagKey)(jObj)))(function(jTag) {
            return bind3(note(decodingErr(new AtKey(e.tagKey, new TypeMismatch("String"))))(toString(jTag)))(function(tag) {
              return discard2(when2(tag !== name14)(new Left(decodingErr(new AtKey(e.tagKey, new UnexpectedValue(id(tag)))))))(function() {
                return pure2({
                  tag,
                  decodingErr
                });
              });
            });
          });
        });
      };
    };
  };
  var withTagAndValues = function(e) {
    return function(j) {
      return function(name14) {
        return bind3(withTag(e)(j)(name14))(function(v) {
          return bind3(note(v.decodingErr(new TypeMismatch("Object")))(toObject(j)))(function(jObj) {
            return bind3(note(v.decodingErr(new AtKey(e.valuesKey, MissingValue.value)))(lookup(e.valuesKey)(jObj)))(function(values) {
              return pure2({
                tag: v.tag,
                values,
                decodingErr: v.decodingErr
              });
            });
          });
        });
      };
    };
  };
  var decodeRepWith = function(dict) {
    return dict.decodeRepWith;
  };
  var genericDecodeJsonWith = function(dictGeneric) {
    var to2 = to(dictGeneric);
    return function(dictDecodeRep) {
      var decodeRepWith1 = decodeRepWith(dictDecodeRep);
      return function(e) {
        var $101 = map5(to2);
        var $102 = decodeRepWith1(e);
        return function($103) {
          return $101($102($103));
        };
      };
    };
  };
  var genericDecodeJson = function(dictGeneric) {
    var genericDecodeJsonWith1 = genericDecodeJsonWith(dictGeneric);
    return function(dictDecodeRep) {
      return genericDecodeJsonWith1(dictDecodeRep)(defaultEncoding);
    };
  };
  var decodeRepArgsArgument = function(dictDecodeJson) {
    var decodeJson3 = decodeJson(dictDecodeJson);
    return {
      decodeRepArgs: function(js) {
        return bind3(note(new TypeMismatch("NonEmptyArray"))(uncons(js)))(function(v) {
          return map5(function($104) {
            return function(v1) {
              return {
                init: v1,
                rest: v.tail
              };
            }(Argument($104));
          })(decodeJson3(v.head));
        });
      }
    };
  };
  var decodeRepArgs = function(dict) {
    return dict.decodeRepArgs;
  };
  var construct = function(dictDecodeRepArgs) {
    var decodeRepArgs1 = decodeRepArgs(dictDecodeRepArgs);
    return function(e) {
      return function(valuesArray) {
        return function(decodingErr) {
          return bind3(lmap3(decodingErr)(decodeRepArgs1(valuesArray)))(function(v) {
            return discard2(when2(notEq1(v.rest)([]))(new Left(decodingErr(new AtKey(e.valuesKey, new UnexpectedValue(id(v.rest)))))))(function() {
              return pure2(v.init);
            });
          });
        };
      };
    };
  };
  var decodeRepConstructorArg = function(dictIsSymbol) {
    var reflectSymbol2 = reflectSymbol(dictIsSymbol);
    return function(dictDecodeJson) {
      var construct2 = construct(decodeRepArgsArgument(dictDecodeJson));
      return {
        decodeRepWith: function(e) {
          return function(j) {
            var name14 = reflectSymbol2($$Proxy.value);
            return bind3(withTagAndValues(e)(j)(name14))(function(v) {
              if (e.unwrapSingleArguments) {
                return construct2(e)([v.values])(v.decodingErr);
              }
              ;
              return bind3(note(v.decodingErr(new AtKey(e.valuesKey, new TypeMismatch("Array"))))(toArray(v.values)))(function(valuesArray) {
                return construct2(e)(valuesArray)(v.decodingErr);
              });
            });
          };
        }
      };
    };
  };

  // output/Data.Argonaut.Encode.Generic/index.js
  var encodeRepWith = function(dict) {
    return dict.encodeRepWith;
  };
  var genericEncodeJsonWith = function(dictGeneric) {
    var from2 = from(dictGeneric);
    return function(dictEncodeRep) {
      var encodeRepWith1 = encodeRepWith(dictEncodeRep);
      return function(e) {
        var $73 = encodeRepWith1(e);
        return function($74) {
          return $73(from2($74));
        };
      };
    };
  };
  var genericEncodeJson = function(dictGeneric) {
    var genericEncodeJsonWith1 = genericEncodeJsonWith(dictGeneric);
    return function(dictEncodeRep) {
      return genericEncodeJsonWith1(dictEncodeRep)(defaultEncoding);
    };
  };
  var encodeRepSum = function(dictEncodeRep) {
    var encodeRepWith1 = encodeRepWith(dictEncodeRep);
    return function(dictEncodeRep1) {
      var encodeRepWith2 = encodeRepWith(dictEncodeRep1);
      return {
        encodeRepWith: function(v) {
          return function(v1) {
            if (v1 instanceof Inl) {
              return encodeRepWith1(v)(v1.value0);
            }
            ;
            if (v1 instanceof Inr) {
              return encodeRepWith2(v)(v1.value0);
            }
            ;
            throw new Error("Failed pattern match at Data.Argonaut.Encode.Generic (line 36, column 1 - line 38, column 50): " + [v.constructor.name, v1.constructor.name]);
          };
        }
      };
    };
  };
  var encodeRepArgsArgument = function(dictEncodeJson) {
    var encodeJson3 = encodeJson(dictEncodeJson);
    return {
      encodeRepArgs: function(v) {
        return [encodeJson3(v)];
      }
    };
  };
  var encodeRepArgs = function(dict) {
    return dict.encodeRepArgs;
  };
  var encodeRepConstructor = function(dictIsSymbol) {
    var reflectSymbol2 = reflectSymbol(dictIsSymbol);
    return function(dictEncodeRepArgs) {
      var encodeRepArgs1 = encodeRepArgs(dictEncodeRepArgs);
      return {
        encodeRepWith: function(e) {
          return function(v) {
            var values = function() {
              var vs = encodeRepArgs1(v);
              if (e.unwrapSingleArguments) {
                if (vs.length === 1) {
                  return vs[0];
                }
                ;
                return id(vs);
              }
              ;
              return id(vs);
            }();
            return id(insert(e.tagKey)(id(reflectSymbol2($$Proxy.value)))(insert(e.valuesKey)(values)(empty)));
          };
        }
      };
    };
  };

  // output/Data.Show.Generic/foreign.js
  var intercalate3 = function(separator) {
    return function(xs) {
      return xs.join(separator);
    };
  };

  // output/Data.Show.Generic/index.js
  var append2 = /* @__PURE__ */ append(semigroupArray);
  var genericShowArgsArgument = function(dictShow) {
    var show4 = show(dictShow);
    return {
      genericShowArgs: function(v) {
        return [show4(v)];
      }
    };
  };
  var genericShowArgs = function(dict) {
    return dict.genericShowArgs;
  };
  var genericShowConstructor = function(dictGenericShowArgs) {
    var genericShowArgs1 = genericShowArgs(dictGenericShowArgs);
    return function(dictIsSymbol) {
      var reflectSymbol2 = reflectSymbol(dictIsSymbol);
      return {
        "genericShow'": function(v) {
          var ctor = reflectSymbol2($$Proxy.value);
          var v1 = genericShowArgs1(v);
          if (v1.length === 0) {
            return ctor;
          }
          ;
          return "(" + (intercalate3(" ")(append2([ctor])(v1)) + ")");
        }
      };
    };
  };
  var genericShow$prime = function(dict) {
    return dict["genericShow'"];
  };
  var genericShow = function(dictGeneric) {
    var from2 = from(dictGeneric);
    return function(dictGenericShow) {
      var genericShow$prime1 = genericShow$prime(dictGenericShow);
      return function(x) {
        return genericShow$prime1(from2(x));
      };
    };
  };

  // output/Web.DOM.ParentNode/foreign.js
  var getEffProp = function(name14) {
    return function(node) {
      return function() {
        return node[name14];
      };
    };
  };
  var children = getEffProp("children");
  var _firstElementChild = getEffProp("firstElementChild");
  var _lastElementChild = getEffProp("lastElementChild");
  var childElementCount = getEffProp("childElementCount");

  // output/Sitebender/index.js
  var OpIntIsSymbol = {
    reflectSymbol: function() {
      return "OpInt";
    }
  };
  var OpNumberIsSymbol = {
    reflectSymbol: function() {
      return "OpNumber";
    }
  };
  var showRecord2 = /* @__PURE__ */ showRecord()();
  var keyIsSymbol = {
    reflectSymbol: function() {
      return "key";
    }
  };
  var genericShowConstructor2 = /* @__PURE__ */ genericShowConstructor(/* @__PURE__ */ genericShowArgsArgument(/* @__PURE__ */ showRecord2(/* @__PURE__ */ showRecordFieldsConsNil(keyIsSymbol)(showString))));
  var FromSessionStorageOperationIsSymbol = {
    reflectSymbol: function() {
      return "FromSessionStorageOperation";
    }
  };
  var FromLocalStorageOperationIsSymbol = {
    reflectSymbol: function() {
      return "FromLocalStorageOperation";
    }
  };
  var classListIsSymbol = {
    reflectSymbol: function() {
      return "classList";
    }
  };
  var formIsSymbol = {
    reflectSymbol: function() {
      return "form";
    }
  };
  var idIsSymbol = {
    reflectSymbol: function() {
      return "id";
    }
  };
  var nameIsSymbol = {
    reflectSymbol: function() {
      return "name";
    }
  };
  var selectorIsSymbol = {
    reflectSymbol: function() {
      return "selector";
    }
  };
  var tagNameIsSymbol = {
    reflectSymbol: function() {
      return "tagName";
    }
  };
  var FromFormFieldOperationIsSymbol = {
    reflectSymbol: function() {
      return "FromFormFieldOperation";
    }
  };
  var valueIsSymbol = {
    reflectSymbol: function() {
      return "value";
    }
  };
  var FromConstantOperationIsSymbol = {
    reflectSymbol: function() {
      return "FromConstantOperation";
    }
  };
  var FromArgumentOperationIsSymbol = {
    reflectSymbol: function() {
      return "FromArgumentOperation";
    }
  };
  var minuendIsSymbol = {
    reflectSymbol: function() {
      return "minuend";
    }
  };
  var subtrahendIsSymbol = {
    reflectSymbol: function() {
      return "subtrahend";
    }
  };
  var SubtractOperationIsSymbol = {
    reflectSymbol: function() {
      return "SubtractOperation";
    }
  };
  var AddOpIsSymbol = {
    reflectSymbol: function() {
      return "AddOp";
    }
  };
  var DivideOpIsSymbol = {
    reflectSymbol: function() {
      return "DivideOp";
    }
  };
  var FromArgumentOpIsSymbol = {
    reflectSymbol: function() {
      return "FromArgumentOp";
    }
  };
  var FromConstantOpIsSymbol = {
    reflectSymbol: function() {
      return "FromConstantOp";
    }
  };
  var FromFormFieldOpIsSymbol = {
    reflectSymbol: function() {
      return "FromFormFieldOp";
    }
  };
  var FromLocalStorageOpIsSymbol = {
    reflectSymbol: function() {
      return "FromLocalStorageOp";
    }
  };
  var FromSessionStorageOpIsSymbol = {
    reflectSymbol: function() {
      return "FromSessionStorageOp";
    }
  };
  var MultiplyOpIsSymbol = {
    reflectSymbol: function() {
      return "MultiplyOp";
    }
  };
  var NegateOpIsSymbol = {
    reflectSymbol: function() {
      return "NegateOp";
    }
  };
  var SubtractOpIsSymbol = {
    reflectSymbol: function() {
      return "SubtractOp";
    }
  };
  var operandIsSymbol = {
    reflectSymbol: function() {
      return "operand";
    }
  };
  var NegateOperationIsSymbol = {
    reflectSymbol: function() {
      return "NegateOperation";
    }
  };
  var multipliersIsSymbol = {
    reflectSymbol: function() {
      return "multipliers";
    }
  };
  var MultiplyOperationIsSymbol = {
    reflectSymbol: function() {
      return "MultiplyOperation";
    }
  };
  var dividendIsSymbol = {
    reflectSymbol: function() {
      return "dividend";
    }
  };
  var divisorIsSymbol = {
    reflectSymbol: function() {
      return "divisor";
    }
  };
  var DivideOperationIsSymbol = {
    reflectSymbol: function() {
      return "DivideOperation";
    }
  };
  var addendsIsSymbol = {
    reflectSymbol: function() {
      return "addends";
    }
  };
  var AddOperationIsSymbol = {
    reflectSymbol: function() {
      return "AddOperation";
    }
  };
  var encodeRepArgsArgument2 = /* @__PURE__ */ encodeRepArgsArgument(/* @__PURE__ */ encodeRecord(/* @__PURE__ */ gEncodeJsonCons(encodeJsonJString)(gEncodeJsonNil)(keyIsSymbol)())());
  var gEncodeJsonCons2 = /* @__PURE__ */ gEncodeJsonCons(/* @__PURE__ */ encodeJsonMaybe(encodeJsonJString));
  var encodeRepConstructor2 = /* @__PURE__ */ encodeRepConstructor(SubtractOperationIsSymbol);
  var encodeRepConstructor1 = /* @__PURE__ */ encodeRepConstructor(AddOpIsSymbol);
  var encodeRepConstructor22 = /* @__PURE__ */ encodeRepConstructor(DivideOpIsSymbol);
  var encodeRepConstructor3 = /* @__PURE__ */ encodeRepConstructor(MultiplyOpIsSymbol);
  var encodeRepConstructor4 = /* @__PURE__ */ encodeRepConstructor(NegateOpIsSymbol);
  var encodeRepConstructor5 = /* @__PURE__ */ encodeRepConstructor(SubtractOpIsSymbol);
  var encodeRepConstructor6 = /* @__PURE__ */ encodeRepConstructor(NegateOperationIsSymbol);
  var encodeRepConstructor7 = /* @__PURE__ */ encodeRepConstructor(MultiplyOperationIsSymbol);
  var encodeRepConstructor8 = /* @__PURE__ */ encodeRepConstructor(DivideOperationIsSymbol);
  var encodeRepConstructor9 = /* @__PURE__ */ encodeRepConstructor(AddOperationIsSymbol);
  var decodeRecord2 = /* @__PURE__ */ decodeRecord(/* @__PURE__ */ gDecodeJsonCons(/* @__PURE__ */ decodeFieldId(decodeJsonString))(gDecodeJsonNil)(keyIsSymbol)()())();
  var OpInt = /* @__PURE__ */ function() {
    function OpInt2(value0) {
      this.value0 = value0;
    }
    ;
    OpInt2.create = function(value0) {
      return new OpInt2(value0);
    };
    return OpInt2;
  }();
  var OpNumber = /* @__PURE__ */ function() {
    function OpNumber2(value0) {
      this.value0 = value0;
    }
    ;
    OpNumber2.create = function(value0) {
      return new OpNumber2(value0);
    };
    return OpNumber2;
  }();
  var AddOp = /* @__PURE__ */ function() {
    function AddOp2(value0) {
      this.value0 = value0;
    }
    ;
    AddOp2.create = function(value0) {
      return new AddOp2(value0);
    };
    return AddOp2;
  }();
  var DivideOp = /* @__PURE__ */ function() {
    function DivideOp2(value0) {
      this.value0 = value0;
    }
    ;
    DivideOp2.create = function(value0) {
      return new DivideOp2(value0);
    };
    return DivideOp2;
  }();
  var FromArgumentOp = /* @__PURE__ */ function() {
    function FromArgumentOp2(value0) {
      this.value0 = value0;
    }
    ;
    FromArgumentOp2.create = function(value0) {
      return new FromArgumentOp2(value0);
    };
    return FromArgumentOp2;
  }();
  var FromConstantOp = /* @__PURE__ */ function() {
    function FromConstantOp2(value0) {
      this.value0 = value0;
    }
    ;
    FromConstantOp2.create = function(value0) {
      return new FromConstantOp2(value0);
    };
    return FromConstantOp2;
  }();
  var FromFormFieldOp = /* @__PURE__ */ function() {
    function FromFormFieldOp2(value0) {
      this.value0 = value0;
    }
    ;
    FromFormFieldOp2.create = function(value0) {
      return new FromFormFieldOp2(value0);
    };
    return FromFormFieldOp2;
  }();
  var FromLocalStorageOp = /* @__PURE__ */ function() {
    function FromLocalStorageOp2(value0) {
      this.value0 = value0;
    }
    ;
    FromLocalStorageOp2.create = function(value0) {
      return new FromLocalStorageOp2(value0);
    };
    return FromLocalStorageOp2;
  }();
  var FromSessionStorageOp = /* @__PURE__ */ function() {
    function FromSessionStorageOp2(value0) {
      this.value0 = value0;
    }
    ;
    FromSessionStorageOp2.create = function(value0) {
      return new FromSessionStorageOp2(value0);
    };
    return FromSessionStorageOp2;
  }();
  var MultiplyOp = /* @__PURE__ */ function() {
    function MultiplyOp2(value0) {
      this.value0 = value0;
    }
    ;
    MultiplyOp2.create = function(value0) {
      return new MultiplyOp2(value0);
    };
    return MultiplyOp2;
  }();
  var NegateOp = /* @__PURE__ */ function() {
    function NegateOp2(value0) {
      this.value0 = value0;
    }
    ;
    NegateOp2.create = function(value0) {
      return new NegateOp2(value0);
    };
    return NegateOp2;
  }();
  var SubtractOp = /* @__PURE__ */ function() {
    function SubtractOp2(value0) {
      this.value0 = value0;
    }
    ;
    SubtractOp2.create = function(value0) {
      return new SubtractOp2(value0);
    };
    return SubtractOp2;
  }();
  var genericSubtractOperation_ = {
    to: function(x) {
      return x;
    },
    from: function(x) {
      return x;
    }
  };
  var genericEncodeJson2 = /* @__PURE__ */ genericEncodeJson(genericSubtractOperation_);
  var genericOperation_ = {
    to: function(x) {
      if (x instanceof Inl) {
        return new AddOp(x.value0);
      }
      ;
      if (x instanceof Inr && x.value0 instanceof Inl) {
        return new DivideOp(x.value0.value0);
      }
      ;
      if (x instanceof Inr && (x.value0 instanceof Inr && x.value0.value0 instanceof Inl)) {
        return new FromArgumentOp(x.value0.value0.value0);
      }
      ;
      if (x instanceof Inr && (x.value0 instanceof Inr && (x.value0.value0 instanceof Inr && x.value0.value0.value0 instanceof Inl))) {
        return new FromConstantOp(x.value0.value0.value0.value0);
      }
      ;
      if (x instanceof Inr && (x.value0 instanceof Inr && (x.value0.value0 instanceof Inr && (x.value0.value0.value0 instanceof Inr && x.value0.value0.value0.value0 instanceof Inl)))) {
        return new FromFormFieldOp(x.value0.value0.value0.value0.value0);
      }
      ;
      if (x instanceof Inr && (x.value0 instanceof Inr && (x.value0.value0 instanceof Inr && (x.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0 instanceof Inr && x.value0.value0.value0.value0.value0 instanceof Inl))))) {
        return new FromLocalStorageOp(x.value0.value0.value0.value0.value0.value0);
      }
      ;
      if (x instanceof Inr && (x.value0 instanceof Inr && (x.value0.value0 instanceof Inr && (x.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0 instanceof Inr && x.value0.value0.value0.value0.value0.value0 instanceof Inl)))))) {
        return new FromSessionStorageOp(x.value0.value0.value0.value0.value0.value0.value0);
      }
      ;
      if (x instanceof Inr && (x.value0 instanceof Inr && (x.value0.value0 instanceof Inr && (x.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0 instanceof Inr && x.value0.value0.value0.value0.value0.value0.value0 instanceof Inl))))))) {
        return new MultiplyOp(x.value0.value0.value0.value0.value0.value0.value0.value0);
      }
      ;
      if (x instanceof Inr && (x.value0 instanceof Inr && (x.value0.value0 instanceof Inr && (x.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0.value0 instanceof Inr && x.value0.value0.value0.value0.value0.value0.value0.value0 instanceof Inl)))))))) {
        return new NegateOp(x.value0.value0.value0.value0.value0.value0.value0.value0.value0);
      }
      ;
      if (x instanceof Inr && (x.value0 instanceof Inr && (x.value0.value0 instanceof Inr && (x.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0.value0.value0.value0 instanceof Inr && x.value0.value0.value0.value0.value0.value0.value0.value0 instanceof Inr)))))))) {
        return new SubtractOp(x.value0.value0.value0.value0.value0.value0.value0.value0.value0);
      }
      ;
      throw new Error("Failed pattern match at Sitebender (line 198, column 1 - line 198, column 36): " + [x.constructor.name]);
    },
    from: function(x) {
      if (x instanceof AddOp) {
        return new Inl(x.value0);
      }
      ;
      if (x instanceof DivideOp) {
        return new Inr(new Inl(x.value0));
      }
      ;
      if (x instanceof FromArgumentOp) {
        return new Inr(new Inr(new Inl(x.value0)));
      }
      ;
      if (x instanceof FromConstantOp) {
        return new Inr(new Inr(new Inr(new Inl(x.value0))));
      }
      ;
      if (x instanceof FromFormFieldOp) {
        return new Inr(new Inr(new Inr(new Inr(new Inl(x.value0)))));
      }
      ;
      if (x instanceof FromLocalStorageOp) {
        return new Inr(new Inr(new Inr(new Inr(new Inr(new Inl(x.value0))))));
      }
      ;
      if (x instanceof FromSessionStorageOp) {
        return new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inl(x.value0)))))));
      }
      ;
      if (x instanceof MultiplyOp) {
        return new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inl(x.value0))))))));
      }
      ;
      if (x instanceof NegateOp) {
        return new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inl(x.value0)))))))));
      }
      ;
      if (x instanceof SubtractOp) {
        return new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(x.value0)))))))));
      }
      ;
      throw new Error("Failed pattern match at Sitebender (line 198, column 1 - line 198, column 36): " + [x.constructor.name]);
    }
  };
  var genericEncodeJson1 = /* @__PURE__ */ genericEncodeJson(genericOperation_);
  var genericOpResult_ = {
    to: function(x) {
      if (x instanceof Inl) {
        return new OpInt(x.value0);
      }
      ;
      if (x instanceof Inr) {
        return new OpNumber(x.value0);
      }
      ;
      throw new Error("Failed pattern match at Sitebender (line 34, column 1 - line 34, column 35): " + [x.constructor.name]);
    },
    from: function(x) {
      if (x instanceof OpInt) {
        return new Inl(x.value0);
      }
      ;
      if (x instanceof OpNumber) {
        return new Inr(x.value0);
      }
      ;
      throw new Error("Failed pattern match at Sitebender (line 34, column 1 - line 34, column 35): " + [x.constructor.name]);
    }
  };
  var genericEncodeJson22 = /* @__PURE__ */ genericEncodeJson(genericOpResult_)(/* @__PURE__ */ encodeRepSum(/* @__PURE__ */ encodeRepConstructor(OpIntIsSymbol)(/* @__PURE__ */ encodeRepArgsArgument(encodeJsonInt)))(/* @__PURE__ */ encodeRepConstructor(OpNumberIsSymbol)(/* @__PURE__ */ encodeRepArgsArgument(encodeJsonJNumber))));
  var genericNegateOperation_ = {
    to: function(x) {
      return x;
    },
    from: function(x) {
      return x;
    }
  };
  var genericEncodeJson3 = /* @__PURE__ */ genericEncodeJson(genericNegateOperation_);
  var genericMultiplyOperation_ = {
    to: function(x) {
      return x;
    },
    from: function(x) {
      return x;
    }
  };
  var genericEncodeJson4 = /* @__PURE__ */ genericEncodeJson(genericMultiplyOperation_);
  var genericFromSessionStorage = {
    to: function(x) {
      return x;
    },
    from: function(x) {
      return x;
    }
  };
  var genericEncodeJson5 = /* @__PURE__ */ genericEncodeJson(genericFromSessionStorage)(/* @__PURE__ */ encodeRepConstructor(FromSessionStorageOperationIsSymbol)(encodeRepArgsArgument2));
  var genericDecodeJson5 = /* @__PURE__ */ genericDecodeJson(genericFromSessionStorage)(/* @__PURE__ */ decodeRepConstructorArg(FromSessionStorageOperationIsSymbol)(decodeRecord2));
  var showFromSessionStorageOpe = {
    show: /* @__PURE__ */ genericShow(genericFromSessionStorage)(/* @__PURE__ */ genericShowConstructor2(FromSessionStorageOperationIsSymbol))
  };
  var genericFromLocalStorageOp = {
    to: function(x) {
      return x;
    },
    from: function(x) {
      return x;
    }
  };
  var genericEncodeJson6 = /* @__PURE__ */ genericEncodeJson(genericFromLocalStorageOp)(/* @__PURE__ */ encodeRepConstructor(FromLocalStorageOperationIsSymbol)(encodeRepArgsArgument2));
  var genericFromFormFieldOpera = {
    to: function(x) {
      return x;
    },
    from: function(x) {
      return x;
    }
  };
  var genericEncodeJson7 = /* @__PURE__ */ genericEncodeJson(genericFromFormFieldOpera)(/* @__PURE__ */ encodeRepConstructor(FromFormFieldOperationIsSymbol)(/* @__PURE__ */ encodeRepArgsArgument(/* @__PURE__ */ encodeRecord(/* @__PURE__ */ gEncodeJsonCons(/* @__PURE__ */ encodeJsonMaybe(/* @__PURE__ */ encodeJsonArray(encodeJsonJString)))(/* @__PURE__ */ gEncodeJsonCons2(/* @__PURE__ */ gEncodeJsonCons2(/* @__PURE__ */ gEncodeJsonCons2(/* @__PURE__ */ gEncodeJsonCons2(/* @__PURE__ */ gEncodeJsonCons2(gEncodeJsonNil)(tagNameIsSymbol)())(selectorIsSymbol)())(nameIsSymbol)())(idIsSymbol)())(formIsSymbol)())(classListIsSymbol)())())));
  var genericFromConstantOperat = {
    to: function(x) {
      return x;
    },
    from: function(x) {
      return x;
    }
  };
  var genericFromArgumentOperat = {
    to: function(x) {
      return x;
    },
    from: function(x) {
      return x;
    }
  };
  var genericEncodeJson8 = /* @__PURE__ */ genericEncodeJson(genericFromArgumentOperat)(/* @__PURE__ */ encodeRepConstructor(FromArgumentOperationIsSymbol)(/* @__PURE__ */ encodeRepArgsArgument(/* @__PURE__ */ encodeRecord(gEncodeJsonNil)())));
  var genericDivideOperation_ = {
    to: function(x) {
      return x;
    },
    from: function(x) {
      return x;
    }
  };
  var genericEncodeJson9 = /* @__PURE__ */ genericEncodeJson(genericDivideOperation_);
  var genericAddOperation_ = {
    to: function(x) {
      return x;
    },
    from: function(x) {
      return x;
    }
  };
  var genericEncodeJson10 = /* @__PURE__ */ genericEncodeJson(genericAddOperation_);
  var encodeJsonOpResult = {
    encodeJson: function(a) {
      return genericEncodeJson22(a);
    }
  };
  var genericEncodeJson11 = /* @__PURE__ */ genericEncodeJson(genericFromConstantOperat)(/* @__PURE__ */ encodeRepConstructor(FromConstantOperationIsSymbol)(/* @__PURE__ */ encodeRepArgsArgument(/* @__PURE__ */ encodeRecord(/* @__PURE__ */ gEncodeJsonCons(encodeJsonOpResult)(gEncodeJsonNil)(valueIsSymbol)())())));
  var encodeJsonFromSessionStor = {
    encodeJson: function(a) {
      return genericEncodeJson5(a);
    }
  };
  var encodeRepSum2 = /* @__PURE__ */ encodeRepSum(/* @__PURE__ */ encodeRepConstructor(FromSessionStorageOpIsSymbol)(/* @__PURE__ */ encodeRepArgsArgument(encodeJsonFromSessionStor)));
  var encodeJsonFromLocalStorag = {
    encodeJson: function(a) {
      return genericEncodeJson6(a);
    }
  };
  var encodeRepSum1 = /* @__PURE__ */ encodeRepSum(/* @__PURE__ */ encodeRepConstructor(FromLocalStorageOpIsSymbol)(/* @__PURE__ */ encodeRepArgsArgument(encodeJsonFromLocalStorag)));
  var encodeJsonFromFormFieldOp = {
    encodeJson: function(a) {
      return genericEncodeJson7(a);
    }
  };
  var encodeRepSum22 = /* @__PURE__ */ encodeRepSum(/* @__PURE__ */ encodeRepConstructor(FromFormFieldOpIsSymbol)(/* @__PURE__ */ encodeRepArgsArgument(encodeJsonFromFormFieldOp)));
  var encodeJsonFromConstantOpe = {
    encodeJson: function(a) {
      return genericEncodeJson11(a);
    }
  };
  var encodeRepSum3 = /* @__PURE__ */ encodeRepSum(/* @__PURE__ */ encodeRepConstructor(FromConstantOpIsSymbol)(/* @__PURE__ */ encodeRepArgsArgument(encodeJsonFromConstantOpe)));
  var encodeJsonFromArgumentOpe = {
    encodeJson: function(a) {
      return genericEncodeJson8(a);
    }
  };
  var encodeRepSum4 = /* @__PURE__ */ encodeRepSum(/* @__PURE__ */ encodeRepConstructor(FromArgumentOpIsSymbol)(/* @__PURE__ */ encodeRepArgsArgument(encodeJsonFromArgumentOpe)));
  var encodeJsonSubtractOperati = {
    encodeJson: function(a) {
      return genericEncodeJson2(encodeRepConstructor2(encodeRepArgsArgument(encodeRecord(gEncodeJsonCons(encodeJsonOperation)(gEncodeJsonCons(encodeJsonOperation)(gEncodeJsonNil)(subtrahendIsSymbol)())(minuendIsSymbol)())())))(a);
    }
  };
  var encodeJsonOperation = {
    encodeJson: function(a) {
      return genericEncodeJson1(encodeRepSum(encodeRepConstructor1(encodeRepArgsArgument(encodeJsonAddOperation)))(encodeRepSum(encodeRepConstructor22(encodeRepArgsArgument(encodeJsonDivideOperation)))(encodeRepSum4(encodeRepSum3(encodeRepSum22(encodeRepSum1(encodeRepSum2(encodeRepSum(encodeRepConstructor3(encodeRepArgsArgument(encodeJsonMultiplyOperati)))(encodeRepSum(encodeRepConstructor4(encodeRepArgsArgument(encodeJsonNegateOperation)))(encodeRepConstructor5(encodeRepArgsArgument(encodeJsonSubtractOperati))))))))))))(a);
    }
  };
  var encodeJsonNegateOperation = {
    encodeJson: function(a) {
      return genericEncodeJson3(encodeRepConstructor6(encodeRepArgsArgument(encodeRecord(gEncodeJsonCons(encodeJsonOperation)(gEncodeJsonNil)(operandIsSymbol)())())))(a);
    }
  };
  var encodeJsonMultiplyOperati = {
    encodeJson: function(a) {
      return genericEncodeJson4(encodeRepConstructor7(encodeRepArgsArgument(encodeRecord(gEncodeJsonCons(encodeJsonArray(encodeJsonOperation))(gEncodeJsonNil)(multipliersIsSymbol)())())))(a);
    }
  };
  var encodeJsonDivideOperation = {
    encodeJson: function(a) {
      return genericEncodeJson9(encodeRepConstructor8(encodeRepArgsArgument(encodeRecord(gEncodeJsonCons(encodeJsonOperation)(gEncodeJsonCons(encodeJsonOperation)(gEncodeJsonNil)(divisorIsSymbol)())(dividendIsSymbol)())())))(a);
    }
  };
  var encodeJsonAddOperation = {
    encodeJson: function(a) {
      return genericEncodeJson10(encodeRepConstructor9(encodeRepArgsArgument(encodeRecord(gEncodeJsonCons(encodeJsonArray(encodeJsonOperation))(gEncodeJsonNil)(addendsIsSymbol)())())))(a);
    }
  };
  var decodeJsonFromSessionStor = {
    decodeJson: function(a) {
      return genericDecodeJson5(a);
    }
  };
  var createFromLocalStorageOp = function(key) {
    return new FromLocalStorageOp({
      key
    });
  };
  var createFromFormFieldOp = function(record) {
    return new FromFormFieldOp(record);
  };

  // output/Main/index.js
  var encodeJson2 = /* @__PURE__ */ encodeJson(encodeJsonOperation);
  var decodeJson2 = /* @__PURE__ */ decodeJson(decodeJsonFromSessionStor);
  var show3 = /* @__PURE__ */ show(showFromSessionStorageOpe);
  var show12 = /* @__PURE__ */ show(/* @__PURE__ */ showEither(showJsonDecodeError)(showFromSessionStorageOpe));
  var lso = /* @__PURE__ */ encodeJson2(/* @__PURE__ */ createFromLocalStorageOp("w"));
  var json = '{"tag":"FromSessionStorageOp","values":[{"tag":"FromSessionStorageOperation","values":[]}]}';
  var ffo = /* @__PURE__ */ function() {
    return encodeJson2(createFromFormFieldOp({
      classList: Nothing.value,
      form: Nothing.value,
      id: Nothing.value,
      name: new Just("x"),
      selector: Nothing.value,
      tagName: Nothing.value
    }));
  }();
  var main = function __do() {
    log2("Hi there!")();
    log2(function() {
      var v = parseJson(json);
      if (v instanceof Left) {
        return printJsonDecodeError(v.value0);
      }
      ;
      if (v instanceof Right) {
        var v1 = decodeJson2(v.value0);
        if (v1 instanceof Left) {
          return printJsonDecodeError(v1.value0);
        }
        ;
        if (v1 instanceof Right) {
          return show3(v1.value0);
        }
        ;
        throw new Error("Failed pattern match at Main (line 39, column 18 - line 41, column 28): " + [v1.constructor.name]);
      }
      ;
      throw new Error("Failed pattern match at Main (line 37, column 9 - line 41, column 28): " + [v.constructor.name]);
    }())();
    log2(show12(decodeJson2(lso)))();
    log2(show12(decodeJson2(ffo)))();
    log2(stringify(lso))();
    return log2(stringify(ffo))();
  };

  // <stdin>
  main();
})();
