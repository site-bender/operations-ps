import * as $foreign from "./foreign.js";
import * as Data_Show from "../Data.Show/index.js";

// | Write an warning value to the console, using its `Show` instance to produce
// | a `String`.
var warnShow = function (dictShow) {
    var show = Data_Show.show(dictShow);
    return function (a) {
        return $foreign.warn(show(a));
    };
};

// | Write a value to the console, using its `Show` instance to produce a
// | `String`.
var logShow = function (dictShow) {
    var show = Data_Show.show(dictShow);
    return function (a) {
        return $foreign.log(show(a));
    };
};

// | Write an info value to the console, using its `Show` instance to produce a
// | `String`.
var infoShow = function (dictShow) {
    var show = Data_Show.show(dictShow);
    return function (a) {
        return $foreign.info(show(a));
    };
};

// | Perform an effect within the context of an inline group in the console.
// | Calls `group` and `groupEnd` before and after the effect, respectively.
var grouped = function (name) {
    return function (inner) {
        return function __do() {
            $foreign.group(name)();
            var result = inner();
            $foreign.groupEnd();
            return result;
        };
    };
};

// | Write an error value to the console, using its `Show` instance to produce a
// | `String`.
var errorShow = function (dictShow) {
    var show = Data_Show.show(dictShow);
    return function (a) {
        return $foreign.error(show(a));
    };
};

// | Write an debug value to the console, using its `Show` instance to produce a
// | `String`.
var debugShow = function (dictShow) {
    var show = Data_Show.show(dictShow);
    return function (a) {
        return $foreign.debug(show(a));
    };
};
export {
    log,
    warn,
    error,
    info,
    debug,
    time,
    timeLog,
    timeEnd,
    clear,
    group,
    groupCollapsed,
    groupEnd
} from "./foreign.js";
export {
    logShow,
    warnShow,
    errorShow,
    infoShow,
    debugShow,
    grouped
};
