
// | Runs a generator, passing in the current size state.
var sized = function (dict) {
    return dict.sized;
};

// | Modifies the size state for a random generator.
var resize = function (dict) {
    return dict.resize;
};

// | Chooses an integer in the specified (inclusive) range.
var chooseInt = function (dict) {
    return dict.chooseInt;
};

// | Chooses an floating point number in the specified (inclusive) range.
var chooseFloat = function (dict) {
    return dict.chooseFloat;
};

// | Chooses a random boolean value.
var chooseBool = function (dict) {
    return dict.chooseBool;
};
export {
    chooseBool,
    chooseFloat,
    chooseInt,
    resize,
    sized
};
