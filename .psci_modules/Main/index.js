import * as Data_Either from "../Data.Either/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Show from "../Data.Show/index.js";
import * as Effect_Console from "../Effect.Console/index.js";
import * as Sitebender from "../Sitebender/index.js";
var show = /* #__PURE__ */ Data_Show.show(/* #__PURE__ */ Data_Either.showEither(Sitebender.showError)(Data_Show.showString));

// input0 :: Operation
// input0 = createFromFormFieldOp
//   { classList: Nothing
//   , form: Nothing
//   , id: Nothing
//   , name: Just "name"
//   , selector: Nothing
//   , tagName: Nothing
//   }
// input1 :: Operation
// input1 = createFromFormFieldOp
//   { classList: Just [ "bobs", "yer", "uncle" ]
//   , form: Just "formId"
//   , id: Just "id"
//   , name: Just "name"
//   , selector: Nothing
//   , tagName: Just "section"
//   }
// input2 :: Operation
// input2 = createFromFormFieldOp
//   { classList: Just [ "bobs", "yer", "uncle" ]
//   , form: Just "formId"
//   , id: Just "id"
//   , name: Just "name"
//   , selector: Just "my-big-bad-selector"
//   , tagName: Just "section"
//   }
// input3 :: Operation
// input3 = createFromFormFieldOp
//   { classList: Nothing
//   , form: Nothing
//   , id: Nothing
//   , name: Nothing
//   , selector: Nothing
//   , tagName: Nothing
//   }
var argOp = /* #__PURE__ */ Sitebender.createFromArgumentOp("");

// let getName = makeOperate (createFromLocalStorageOp "name")
// name <- getName Nothing
// log $ show name
// let missAge = makeOperate (createFromLocalStorageOp "age")
// notAge <- missAge Nothing
// log $ show notAge
// let getAge = makeOperate (createFromSessionStorageOp "age")
// age <- getAge Nothing
// log $ show age
// let missHeight = makeOperate (createFromSessionStorageOp "age")
// notHeight <- missHeight Nothing
// log $ show notHeight
// let getInput0 = makeOperate input0
// i0 <- getInput0 Nothing
// log $ show i0
// let getInput1 = makeOperate input1
// i1 <- getInput1 Nothing
// log $ show i1
// let getInput2 = makeOperate input2
// i2 <- getInput2 Nothing
// log $ show i2
// let getInput3 = makeOperate input3
// i3 <- getInput3 Nothing
// log $ show i3
var main = /* #__PURE__ */ (function () {
    var getArg = Sitebender.makeOperate(Data_Ord.ordString)(argOp);
    return function __do() {
        var s1 = getArg(new Data_Maybe.Just("yo yo yo"))();
        return Effect_Console.log(show(s1))();
    };
})();
export {
    argOp,
    main
};
