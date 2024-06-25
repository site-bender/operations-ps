// Generated by purs version 0.15.15
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Monad_Writer_Class from "../Control.Monad.Writer.Class/index.js";
import * as Control_Monad_Writer_Trans from "../Control.Monad.Writer.Trans/index.js";
import * as Data_Identity from "../Data.Identity/index.js";
import * as Data_Newtype from "../Data.Newtype/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
var unwrap = /* #__PURE__ */ Data_Newtype.unwrap();
var writer = /* #__PURE__ */ (function () {
    var $3 = Control_Applicative.pure(Data_Identity.applicativeIdentity);
    return function ($4) {
        return Control_Monad_Writer_Trans.WriterT($3($4));
    };
})();
var runWriter = function ($5) {
    return unwrap(Control_Monad_Writer_Trans.runWriterT($5));
};
var mapWriter = function (f) {
    return Control_Monad_Writer_Trans.mapWriterT(function ($6) {
        return Data_Identity.Identity(f(unwrap($6)));
    });
};
var execWriter = function (m) {
    return Data_Tuple.snd(runWriter(m));
};
export {
    writer,
    runWriter,
    execWriter,
    mapWriter
};
export {
    censor,
    listen,
    listens,
    pass,
    tell
} from "../Control.Monad.Writer.Class/index.js";
export {
    WriterT,
    execWriterT,
    lift,
    mapWriterT,
    runWriterT
} from "../Control.Monad.Writer.Trans/index.js";
