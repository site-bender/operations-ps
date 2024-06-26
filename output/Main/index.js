import * as Data_Either from "../Data.Either/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Show from "../Data.Show/index.js";
import * as Data_Unit from "../Data.Unit/index.js";
import * as Effect_Console from "../Effect.Console/index.js";
import * as Sitebender from "../Sitebender/index.js";
var show = /* #__PURE__ */ Data_Show.show(/* #__PURE__ */ Data_Either.showEither(Sitebender.showError)(Sitebender.showOpResult));
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
        name: new Data_Maybe.Just("name"),
        selector: Data_Maybe.Nothing.value,
        tagName: Data_Maybe.Nothing.value
    });
})();
var getCount = /* #__PURE__ */ Sitebender.createFromLocalStorageOp("count");
var getAge = /* #__PURE__ */ Sitebender.createFromSessionStorageOp("age");
var argOp = /* #__PURE__ */ Sitebender.createFromArgumentOp(Data_Unit.unit);
var addOp = /* #__PURE__ */ Sitebender.createAddOp(getCount)(getAge);
var main = function __do() {
    var name = Sitebender.makeOperate(getCount)(Data_Maybe.Nothing.value)();
    Effect_Console.log(show(name))();
    var missAge = Sitebender.makeOperate(Sitebender.createFromLocalStorageOp("age"));
    var notAge = missAge(Data_Maybe.Nothing.value)();
    Effect_Console.log(show(notAge))();
    var age = Sitebender.makeOperate(getAge)(Data_Maybe.Nothing.value)();
    Effect_Console.log(show(age))();
    var missHeight = Sitebender.makeOperate(Sitebender.createFromSessionStorageOp("height"));
    var notHeight = missHeight(Data_Maybe.Nothing.value)();
    Effect_Console.log(show(notHeight))();
    var sum = Sitebender.makeOperate(addOp)(Data_Maybe.Nothing.value)();
    Effect_Console.log("Sum: " + show(sum))();
    var getInput0 = Sitebender.makeOperate(input0);
    var i0 = getInput0(Data_Maybe.Nothing.value)();
    Effect_Console.log(show(i0))();
    var getInput1 = Sitebender.makeOperate(input1);
    var i1 = getInput1(Data_Maybe.Nothing.value)();
    Effect_Console.log(show(i1))();
    var getInput2 = Sitebender.makeOperate(input2);
    var i2 = getInput2(Data_Maybe.Nothing.value)();
    Effect_Console.log(show(i2))();
    var getInput3 = Sitebender.makeOperate(input3);
    var i3 = getInput3(Data_Maybe.Nothing.value)();
    Effect_Console.log(show(i3))();
    var s1 = Sitebender.makeOperate(argOp)(new Data_Maybe.Just(new Sitebender.OpInt(22)))();
    return Effect_Console.log(show(s1))();
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
    main
};
