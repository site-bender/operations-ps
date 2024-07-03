// | Codecs that provide forward migrations.
// |
// | In a forward migration, the decoder migrates to the new format while
// | decoding from JSON and the encoder uses the new format while encoding to
// | JSON.
// |
// | If you need more control over a forward migration, the `Functor` instance
// | allows operating on the underlying `Json` value directly.
// |
// | If you need both forward and backward migrations, the `Profunctor` instance
// | allows operating on the underlying `Json` value directly in both
// | directions.
// |
// | Sometimes even greater control over migration is required, and new error
// | states need to be introduced. In this situation a `JsonCodec` will need to
// | be constructed manually - this should be a last resort though, as building
// | a codec manually means there is no guarantee that it will roundtrip
// | successfully.
// |
// | Migrations are applied by composing a migration codec to run in advance of
// | the codec proper. Codec composition is performed with the `(<~<)` and
// | `(>~>)` operators from `Data.Codec`.
// |
// | An example of a codec with a migration applied:
// |
// | ``` purescript
// | import Data.Codec ((>~>))
// | import Data.Codec.Argonaut as CA
// | import Data.Codec.Argonaut.Migration as CAM
// | import Data.Codec.Argonaut.Record as CAR
// |
// | type MyModel = { key ∷ String, value ∷ Int }
// |
// | codec ∷ CA.JsonCodec MyModel
// | codec =
// |   CAM.renameField "tag" "key" >~>
// |     CA.object "MyModel" (CAR.record
// |      { key: CA.string
// |      , value: CA.int
// |      })
// | ```
// |
// | Here we're using the `renameField` migration to rename a property of our
// | JSON object from `"tag"` to `"key"`, and then in the codec proper we only
// | need to deal with `"key"`.
// |
// | Multiple migrations can be chained together using the codec composition
// | operators.
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Category from "../Control.Category/index.js";
import * as Data_Argonaut_Core from "../Data.Argonaut.Core/index.js";
import * as Data_Codec from "../Data.Codec/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
import * as Foreign_Object from "../Foreign.Object/index.js";
import * as Foreign_Object_ST from "../Foreign.Object.ST/index.js";
var pure = /* #__PURE__ */ Control_Applicative.pure(Data_Either.applicativeEither);
var identity = /* #__PURE__ */ Control_Category.identity(Control_Category.categoryFn);
var map = /* #__PURE__ */ Data_Functor.map(Data_Maybe.functorMaybe);
var map1 = /* #__PURE__ */ Data_Functor.map(Data_Functor.functorFn);

// | When dealing with a JSON object that has had a field name changed, this
// | codec can be used to alter the JSON before parsing to ensure the new field
// | name is used instead
var renameField = function (oldName) {
    return function (newName) {
        var rename = function (obj) {
            return Data_Maybe.maybe(obj)(Data_Tuple.uncurry(Foreign_Object.insert(newName)))(Foreign_Object.pop(oldName)(obj));
        };
        var dec = function (j) {
            return Data_Argonaut_Core.caseJsonObject(j)(function ($16) {
                return Data_Argonaut_Core.fromObject(rename($16));
            })(j);
        };
        return Data_Codec["codec$prime"](function ($17) {
            return pure(dec($17));
        })(identity);
    };
};

// | Prepares an object from a legacy codec for use in a `Variant` or
// | `taggedSum` codec.
// |
// | For an input like:
// | ```{ "tag": "tag", "x": 1, "y": 2, "z": 3 }```
// | the result will be:
// | ```{ "tag": "tag", "value": { "x": 1, "y": 2, "z": 3 } }```
// |
// | For an input like:
// | ```{ "tag": "tag", "value": 1, "foo": 2 }```
// | the result will be:
// | ```{ "tag": "tag", "value": { "value": 1, "foo": 2 }```
// |
// | If the value is already in the expected form, where there is only `value`
// | and no other keys (aside from `tag`):
// | ```{ "tag": "tag", "value": true }```
// | the result will be the same as the input.
// |
// | If the tag field is missing from the input, it will also be missing in the
// | output.
var nestForTagged = /* #__PURE__ */ (function () {
    var mkValue = function (obj) {
        var v = Foreign_Object.pop("value")(obj);
        if (v instanceof Data_Maybe.Just && Foreign_Object.isEmpty(v.value0.value1)) {
            return v.value0.value0;
        };
        return Data_Argonaut_Core.fromObject(obj);
    };
    var rewrite = function (obj) {
        var v = Foreign_Object.pop("tag")(obj);
        if (v instanceof Data_Maybe.Nothing) {
            return Foreign_Object.runST(function __do() {
                var result = Foreign_Object_ST["new"]();
                return Foreign_Object_ST.poke("value")(mkValue(obj))(result)();
            });
        };
        if (v instanceof Data_Maybe.Just) {
            return Foreign_Object.runST(function __do() {
                var result = Foreign_Object_ST["new"]();
                Foreign_Object_ST.poke("tag")(v.value0.value0)(result)();
                return Foreign_Object_ST.poke("value")(mkValue(v.value0.value1))(result)();
            });
        };
        throw new Error("Failed pattern match at Data.Codec.Argonaut.Migration (line 124, column 5 - line 131, column 48): " + [ v.constructor.name ]);
    };
    var dec = function (j) {
        return Data_Argonaut_Core.caseJsonObject(j)(function ($18) {
            return Data_Argonaut_Core.fromObject(rewrite($18));
        })(j);
    };
    return Data_Codec["codec$prime"](function ($19) {
        return pure(dec($19));
    })(identity);
})();
var alterField = function (field) {
    return function (f) {
        var setDefault = Foreign_Object.alter(f)(field);
        var dec = function (j) {
            return Data_Argonaut_Core.caseJsonObject(j)(function ($20) {
                return Data_Argonaut_Core.fromObject(setDefault($20));
            })(j);
        };
        return Data_Codec["codec$prime"](function ($21) {
            return pure(dec($21));
        })(identity);
    };
};

// | Re-maps the value of a field in a JSON object.
var updateField = function (field) {
    var $22 = alterField(field);
    return function ($23) {
        return $22(map($23));
    };
};

// | When dealing with a JSON object that may be missing a field, this codec
// | can be used to alter the JSON before parsing to ensure a default value is
// | present instead. Similar to `addDefaultField`, but allows existing values
// | to be modified also.
var addDefaultOrUpdateField = function (field) {
    var $24 = alterField(field);
    var $25 = map1(Data_Maybe.Just.create);
    return function ($26) {
        return $24($25($26));
    };
};

// | When dealing with a JSON object that may be missing a field, this codec
// | can be used to alter the JSON before parsing to ensure a default value is
// | present instead.
var addDefaultField = function (field) {
    var $27 = addDefaultOrUpdateField(field);
    return function ($28) {
        return $27(Data_Maybe.fromMaybe($28));
    };
};
export {
    addDefaultField,
    updateField,
    addDefaultOrUpdateField,
    renameField,
    nestForTagged
};
