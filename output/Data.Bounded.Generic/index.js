// Generated by purs version 0.15.15
import * as Data_Bounded from "../Data.Bounded/index.js";
import * as Data_Generic_Rep from "../Data.Generic.Rep/index.js";
var genericTopNoArguments = /* #__PURE__ */ (function () {
    return {
        "genericTop'": Data_Generic_Rep.NoArguments.value
    };
})();
var genericTopArgument = function (dictBounded) {
    return {
        "genericTop'": Data_Bounded.top(dictBounded)
    };
};
var genericTop$prime = function (dict) {
    return dict["genericTop'"];
};
var genericTopConstructor = function (dictGenericTop) {
    return {
        "genericTop'": genericTop$prime(dictGenericTop)
    };
};
var genericTopProduct = function (dictGenericTop) {
    var genericTop$prime1 = genericTop$prime(dictGenericTop);
    return function (dictGenericTop1) {
        return {
            "genericTop'": new Data_Generic_Rep.Product(genericTop$prime1, genericTop$prime(dictGenericTop1))
        };
    };
};
var genericTopSum = function (dictGenericTop) {
    return {
        "genericTop'": new Data_Generic_Rep.Inr(genericTop$prime(dictGenericTop))
    };
};
var genericTop = function (dictGeneric) {
    var to = Data_Generic_Rep.to(dictGeneric);
    return function (dictGenericTop) {
        return to(genericTop$prime(dictGenericTop));
    };
};
var genericBottomNoArguments = /* #__PURE__ */ (function () {
    return {
        "genericBottom'": Data_Generic_Rep.NoArguments.value
    };
})();
var genericBottomArgument = function (dictBounded) {
    return {
        "genericBottom'": Data_Bounded.bottom(dictBounded)
    };
};
var genericBottom$prime = function (dict) {
    return dict["genericBottom'"];
};
var genericBottomConstructor = function (dictGenericBottom) {
    return {
        "genericBottom'": genericBottom$prime(dictGenericBottom)
    };
};
var genericBottomProduct = function (dictGenericBottom) {
    var genericBottom$prime1 = genericBottom$prime(dictGenericBottom);
    return function (dictGenericBottom1) {
        return {
            "genericBottom'": new Data_Generic_Rep.Product(genericBottom$prime1, genericBottom$prime(dictGenericBottom1))
        };
    };
};
var genericBottomSum = function (dictGenericBottom) {
    return {
        "genericBottom'": new Data_Generic_Rep.Inl(genericBottom$prime(dictGenericBottom))
    };
};
var genericBottom = function (dictGeneric) {
    var to = Data_Generic_Rep.to(dictGeneric);
    return function (dictGenericBottom) {
        return to(genericBottom$prime(dictGenericBottom));
    };
};
export {
    genericBottom$prime,
    genericBottom,
    genericTop$prime,
    genericTop,
    genericBottomNoArguments,
    genericBottomArgument,
    genericBottomSum,
    genericBottomProduct,
    genericBottomConstructor,
    genericTopNoArguments,
    genericTopArgument,
    genericTopSum,
    genericTopProduct,
    genericTopConstructor
};
//# sourceMappingURL=index.js.map
