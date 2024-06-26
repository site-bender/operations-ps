import * as Control_Alternative from "../Control.Alternative/index.js";
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Semigroup from "../Data.Semigroup/index.js";
import * as Data_String_Common from "../Data.String.Common/index.js";
var append = /* #__PURE__ */ Data_Semigroup.append(Data_Semigroup.semigroupArray);
var voidLeft = /* #__PURE__ */ Data_Functor.voidLeft(Data_Functor.functorArray);
var guard = /* #__PURE__ */ Control_Alternative.guard(Control_Alternative.alternativeArray);
var eq = /* #__PURE__ */ Data_Eq.eq(/* #__PURE__ */ Data_Eq.eqArray(Data_Eq.eqString));

// | Flags that control matching.
var RegexFlags = function (x) {
    return x;
};

// | Only unicode flag set to true
var unicode = {
    global: false,
    ignoreCase: false,
    multiline: false,
    dotAll: false,
    sticky: false,
    unicode: true
};

// | Only sticky flag set to true
var sticky = {
    global: false,
    ignoreCase: false,
    multiline: false,
    dotAll: false,
    sticky: true,
    unicode: false
};
var showRegexFlags = {
    show: function (v) {
        var usedFlags = append([  ])(append(voidLeft(guard(v.global))("global"))(append(voidLeft(guard(v.ignoreCase))("ignoreCase"))(append(voidLeft(guard(v.multiline))("multiline"))(append(voidLeft(guard(v.dotAll))("dotAll"))(append(voidLeft(guard(v.sticky))("sticky"))(voidLeft(guard(v.unicode))("unicode")))))));
        var $43 = eq(usedFlags)([  ]);
        if ($43) {
            return "noFlags";
        };
        return "(" + (Data_String_Common.joinWith(" <> ")(usedFlags) + ")");
    }
};
var semigroupRegexFlags = {
    append: function (v) {
        return function (v1) {
            return {
                global: v.global || v1.global,
                ignoreCase: v.ignoreCase || v1.ignoreCase,
                multiline: v.multiline || v1.multiline,
                dotAll: v.dotAll || v1.dotAll,
                sticky: v.sticky || v1.sticky,
                unicode: v.unicode || v1.unicode
            };
        };
    }
};

// | All flags set to false.
var noFlags = {
    global: false,
    ignoreCase: false,
    multiline: false,
    dotAll: false,
    sticky: false,
    unicode: false
};
var newtypeRegexFlags = {
    Coercible0: function () {
        return undefined;
    }
};

// | Only multiline flag set to true
var multiline = {
    global: false,
    ignoreCase: false,
    multiline: true,
    dotAll: false,
    sticky: false,
    unicode: false
};
var monoidRegexFlags = {
    mempty: noFlags,
    Semigroup0: function () {
        return semigroupRegexFlags;
    }
};

// | Only ignoreCase flag set to true
var ignoreCase = {
    global: false,
    ignoreCase: true,
    multiline: false,
    dotAll: false,
    sticky: false,
    unicode: false
};

// | Only global flag set to true
var global = {
    global: true,
    ignoreCase: false,
    multiline: false,
    dotAll: false,
    sticky: false,
    unicode: false
};
var eqRegexFlags = /* #__PURE__ */ Data_Eq.eqRec()(/* #__PURE__ */ Data_Eq.eqRowCons(/* #__PURE__ */ Data_Eq.eqRowCons(/* #__PURE__ */ Data_Eq.eqRowCons(/* #__PURE__ */ Data_Eq.eqRowCons(/* #__PURE__ */ Data_Eq.eqRowCons(/* #__PURE__ */ Data_Eq.eqRowCons(Data_Eq.eqRowNil)()({
    reflectSymbol: function () {
        return "unicode";
    }
})(Data_Eq.eqBoolean))()({
    reflectSymbol: function () {
        return "sticky";
    }
})(Data_Eq.eqBoolean))()({
    reflectSymbol: function () {
        return "multiline";
    }
})(Data_Eq.eqBoolean))()({
    reflectSymbol: function () {
        return "ignoreCase";
    }
})(Data_Eq.eqBoolean))()({
    reflectSymbol: function () {
        return "global";
    }
})(Data_Eq.eqBoolean))()({
    reflectSymbol: function () {
        return "dotAll";
    }
})(Data_Eq.eqBoolean));

// | Only dotAll flag set to true
var dotAll = {
    global: false,
    ignoreCase: false,
    multiline: false,
    dotAll: true,
    sticky: false,
    unicode: false
};
export {
    RegexFlags,
    noFlags,
    global,
    ignoreCase,
    multiline,
    sticky,
    unicode,
    dotAll,
    newtypeRegexFlags,
    semigroupRegexFlags,
    monoidRegexFlags,
    eqRegexFlags,
    showRegexFlags
};
