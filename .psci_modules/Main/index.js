import * as Data_Either from "../Data.Either/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Show from "../Data.Show/index.js";
import * as Data_Unit from "../Data.Unit/index.js";
import * as Effect_Console from "../Effect.Console/index.js";
import * as Sitebender from "../Sitebender/index.js";
import * as Sitebender_Json from "../Sitebender.Json/index.js";
var show = /* #__PURE__ */ Data_Show.show(/* #__PURE__ */ Data_Either.showEither(Sitebender.showError)(Sitebender.showOpResult));
var show1 = /* #__PURE__ */ Data_Show.show(/* #__PURE__ */ Data_Either.showEither(Data_Show.showString)(/* #__PURE__ */ Data_Show.showRecord()()(/* #__PURE__ */ Data_Show.showRecordFieldsCons({
    reflectSymbol: function () {
        return "leftAddend";
    }
})(/* #__PURE__ */ Data_Show.showRecordFieldsConsNil({
    reflectSymbol: function () {
        return "rightAddend";
    }
})(Data_Show.showInt))(Data_Show.showInt))));
var jsonAddOp = /* #__PURE__ */ Sitebender_Json.parseAddOp("{\"leftAddend\":3,\"rightAddend\":7}");
var input3 = /* #__PURE__ */ (function () {
    return Sitebender.createFromFormFieldOp({
        classList: Data_Maybe.Nothing.value,
        form: Data_Maybe.Nothing.value,
        id: Data_Maybe.Nothing.value,
        name: Data_Maybe.Nothing.value,
        selector: Data_Maybe.Nothing.value,
        tagName: Data_Maybe.Nothing.value
    });
})();
var input2 = /* #__PURE__ */ (function () {
    return Sitebender.createFromFormFieldOp({
        classList: new Data_Maybe.Just([ "bobs", "yer", "uncle" ]),
        form: new Data_Maybe.Just("formId"),
        id: new Data_Maybe.Just("id"),
        name: new Data_Maybe.Just("name"),
        selector: new Data_Maybe.Just("my-big-bad-selector"),
        tagName: new Data_Maybe.Just("section")
    });
})();
var input1 = /* #__PURE__ */ (function () {
    return Sitebender.createFromFormFieldOp({
        classList: new Data_Maybe.Just([ "bobs", "yer", "uncle" ]),
        form: new Data_Maybe.Just("formId"),
        id: new Data_Maybe.Just("id"),
        name: new Data_Maybe.Just("name"),
        selector: Data_Maybe.Nothing.value,
        tagName: new Data_Maybe.Just("section")
    });
})();
var input0 = /* #__PURE__ */ (function () {
    return Sitebender.createFromFormFieldOp({
        classList: Data_Maybe.Nothing.value,
        form: Data_Maybe.Nothing.value,
        id: Data_Maybe.Nothing.value,
        name: new Data_Maybe.Just("pi"),
        selector: Data_Maybe.Nothing.value,
        tagName: Data_Maybe.Nothing.value
    });
})();
var getCount = /* #__PURE__ */ Sitebender.createFromLocalStorageOp("count");
var getAge = /* #__PURE__ */ Sitebender.createFromSessionStorageOp("age");
var argOp = /* #__PURE__ */ Sitebender.createFromArgumentOp(Data_Unit.unit);
var divideOp = /* #__PURE__ */ Sitebender.createDivideOp(getAge)(argOp);
var addOp = /* #__PURE__ */ Sitebender.createAddOp(getCount)(getAge);
var main = function __do() {
    var count = Sitebender.makeOperate(getCount)(Data_Maybe.Nothing.value)();
    Effect_Console.log("Count from local storage: " + show(count))();
    var missAge = Sitebender.makeOperate(Sitebender.createFromLocalStorageOp("age"));
    var notAge = missAge(Data_Maybe.Nothing.value)();
    Effect_Console.log("Age from local storage: " + show(notAge))();
    var age = Sitebender.makeOperate(getAge)(Data_Maybe.Nothing.value)();
    Effect_Console.log("Age from session storage: " + show(age))();
    var missHeight = Sitebender.makeOperate(Sitebender.createFromSessionStorageOp("height"));
    var notHeight = missHeight(Data_Maybe.Nothing.value)();
    Effect_Console.log("Height from session storage: " + show(notHeight))();
    var sum = Sitebender.makeOperate(addOp)(new Data_Maybe.Just(new Sitebender.OpInt(22)))();
    Effect_Console.log("Sum of count and age: " + show(sum))();
    var getInput0 = Sitebender.makeOperate(input0);
    var i0 = getInput0(Data_Maybe.Nothing.value)();
    Effect_Console.log("From form input `pi`: " + show(i0))();
    var getInput1 = Sitebender.makeOperate(input1);
    var i1 = getInput1(Data_Maybe.Nothing.value)();
    Effect_Console.log("Bad selectors: " + show(i1))();
    var getInput2 = Sitebender.makeOperate(input2);
    var i2 = getInput2(Data_Maybe.Nothing.value)();
    Effect_Console.log("Bad selector: " + show(i2))();
    var getInput3 = Sitebender.makeOperate(input3);
    var i3 = getInput3(Data_Maybe.Nothing.value)();
    Effect_Console.log("No selector: " + show(i3))();
    var s1 = Sitebender.makeOperate(argOp)(new Data_Maybe.Just(new Sitebender.OpInt(22)))();
    Effect_Console.log("From argument (22): " + show(s1))();
    var quot = Sitebender.makeOperate(divideOp)(new Data_Maybe.Just(new Sitebender.OpInt(5)))();
    Effect_Console.log("Int division age / 5: " + show(quot))();
    return Effect_Console.log(show1(jsonAddOp))();
};
export {
    input0,
    input1,
    input2,
    input3,
    argOp,
    getCount,
    getAge,
    addOp,
    divideOp,
    jsonAddOp,
    main
};
