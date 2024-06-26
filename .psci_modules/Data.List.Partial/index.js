// | Partial helper functions for working with strict linked lists.
import * as Data_List_Types from "../Data.List.Types/index.js";

// | Get all but the first element of a non-empty list.
// |
// | Running time: `O(1)`
var tail = function () {
    return function (v) {
        if (v instanceof Data_List_Types.Cons) {
            return v.value1;
        };
        throw new Error("Failed pattern match at Data.List.Partial (line 15, column 1 - line 15, column 46): " + [ v.constructor.name ]);
    };
};

// | Get the last element of a non-empty list.
// |
// | Running time: `O(n)`
var last = function () {
    return function ($copy_v) {
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v) {
            if (v instanceof Data_List_Types.Cons && v.value1 instanceof Data_List_Types.Nil) {
                $tco_done = true;
                return v.value0;
            };
            if (v instanceof Data_List_Types.Cons) {
                $copy_v = v.value1;
                return;
            };
            throw new Error("Failed pattern match at Data.List.Partial (line 21, column 1 - line 21, column 41): " + [ v.constructor.name ]);
        };
        while (!$tco_done) {
            $tco_result = $tco_loop($copy_v);
        };
        return $tco_result;
    };
};

// | Get all but the last element of a non-empty list.
// |
// | Running time: `O(n)`
var init = function () {
    return function (v) {
        if (v instanceof Data_List_Types.Cons && v.value1 instanceof Data_List_Types.Nil) {
            return Data_List_Types.Nil.value;
        };
        if (v instanceof Data_List_Types.Cons) {
            return new Data_List_Types.Cons(v.value0, init()(v.value1));
        };
        throw new Error("Failed pattern match at Data.List.Partial (line 28, column 1 - line 28, column 46): " + [ v.constructor.name ]);
    };
};

// | Get the first element of a non-empty list.
// |
// | Running time: `O(1)`.
var head = function () {
    return function (v) {
        if (v instanceof Data_List_Types.Cons) {
            return v.value0;
        };
        throw new Error("Failed pattern match at Data.List.Partial (line 9, column 1 - line 9, column 41): " + [ v.constructor.name ]);
    };
};
export {
    head,
    tail,
    last,
    init
};
