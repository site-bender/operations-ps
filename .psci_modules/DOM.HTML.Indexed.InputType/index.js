import * as Data_Ordering from "../Data.Ordering/index.js";
var InputButton = /* #__PURE__ */ (function () {
    function InputButton() {

    };
    InputButton.value = new InputButton();
    return InputButton;
})();
var InputCheckbox = /* #__PURE__ */ (function () {
    function InputCheckbox() {

    };
    InputCheckbox.value = new InputCheckbox();
    return InputCheckbox;
})();
var InputColor = /* #__PURE__ */ (function () {
    function InputColor() {

    };
    InputColor.value = new InputColor();
    return InputColor;
})();
var InputDate = /* #__PURE__ */ (function () {
    function InputDate() {

    };
    InputDate.value = new InputDate();
    return InputDate;
})();
var InputDatetimeLocal = /* #__PURE__ */ (function () {
    function InputDatetimeLocal() {

    };
    InputDatetimeLocal.value = new InputDatetimeLocal();
    return InputDatetimeLocal;
})();
var InputEmail = /* #__PURE__ */ (function () {
    function InputEmail() {

    };
    InputEmail.value = new InputEmail();
    return InputEmail;
})();
var InputFile = /* #__PURE__ */ (function () {
    function InputFile() {

    };
    InputFile.value = new InputFile();
    return InputFile;
})();
var InputHidden = /* #__PURE__ */ (function () {
    function InputHidden() {

    };
    InputHidden.value = new InputHidden();
    return InputHidden;
})();
var InputImage = /* #__PURE__ */ (function () {
    function InputImage() {

    };
    InputImage.value = new InputImage();
    return InputImage;
})();
var InputMonth = /* #__PURE__ */ (function () {
    function InputMonth() {

    };
    InputMonth.value = new InputMonth();
    return InputMonth;
})();
var InputNumber = /* #__PURE__ */ (function () {
    function InputNumber() {

    };
    InputNumber.value = new InputNumber();
    return InputNumber;
})();
var InputPassword = /* #__PURE__ */ (function () {
    function InputPassword() {

    };
    InputPassword.value = new InputPassword();
    return InputPassword;
})();
var InputRadio = /* #__PURE__ */ (function () {
    function InputRadio() {

    };
    InputRadio.value = new InputRadio();
    return InputRadio;
})();
var InputRange = /* #__PURE__ */ (function () {
    function InputRange() {

    };
    InputRange.value = new InputRange();
    return InputRange;
})();
var InputReset = /* #__PURE__ */ (function () {
    function InputReset() {

    };
    InputReset.value = new InputReset();
    return InputReset;
})();
var InputSearch = /* #__PURE__ */ (function () {
    function InputSearch() {

    };
    InputSearch.value = new InputSearch();
    return InputSearch;
})();
var InputSubmit = /* #__PURE__ */ (function () {
    function InputSubmit() {

    };
    InputSubmit.value = new InputSubmit();
    return InputSubmit;
})();
var InputTel = /* #__PURE__ */ (function () {
    function InputTel() {

    };
    InputTel.value = new InputTel();
    return InputTel;
})();
var InputText = /* #__PURE__ */ (function () {
    function InputText() {

    };
    InputText.value = new InputText();
    return InputText;
})();
var InputTime = /* #__PURE__ */ (function () {
    function InputTime() {

    };
    InputTime.value = new InputTime();
    return InputTime;
})();
var InputUrl = /* #__PURE__ */ (function () {
    function InputUrl() {

    };
    InputUrl.value = new InputUrl();
    return InputUrl;
})();
var InputWeek = /* #__PURE__ */ (function () {
    function InputWeek() {

    };
    InputWeek.value = new InputWeek();
    return InputWeek;
})();
var renderInputType = function (v) {
    if (v instanceof InputButton) {
        return "button";
    };
    if (v instanceof InputCheckbox) {
        return "checkbox";
    };
    if (v instanceof InputColor) {
        return "color";
    };
    if (v instanceof InputDate) {
        return "date";
    };
    if (v instanceof InputDatetimeLocal) {
        return "datetime-local";
    };
    if (v instanceof InputEmail) {
        return "email";
    };
    if (v instanceof InputFile) {
        return "file";
    };
    if (v instanceof InputHidden) {
        return "hidden";
    };
    if (v instanceof InputImage) {
        return "image";
    };
    if (v instanceof InputMonth) {
        return "month";
    };
    if (v instanceof InputNumber) {
        return "number";
    };
    if (v instanceof InputPassword) {
        return "password";
    };
    if (v instanceof InputRadio) {
        return "radio";
    };
    if (v instanceof InputRange) {
        return "range";
    };
    if (v instanceof InputReset) {
        return "reset";
    };
    if (v instanceof InputSearch) {
        return "search";
    };
    if (v instanceof InputSubmit) {
        return "submit";
    };
    if (v instanceof InputTel) {
        return "tel";
    };
    if (v instanceof InputText) {
        return "text";
    };
    if (v instanceof InputTime) {
        return "time";
    };
    if (v instanceof InputUrl) {
        return "url";
    };
    if (v instanceof InputWeek) {
        return "week";
    };
    throw new Error("Failed pattern match at DOM.HTML.Indexed.InputType (line 33, column 19 - line 55, column 22): " + [ v.constructor.name ]);
};
var eqInputType = {
    eq: function (x) {
        return function (y) {
            if (x instanceof InputButton && y instanceof InputButton) {
                return true;
            };
            if (x instanceof InputCheckbox && y instanceof InputCheckbox) {
                return true;
            };
            if (x instanceof InputColor && y instanceof InputColor) {
                return true;
            };
            if (x instanceof InputDate && y instanceof InputDate) {
                return true;
            };
            if (x instanceof InputDatetimeLocal && y instanceof InputDatetimeLocal) {
                return true;
            };
            if (x instanceof InputEmail && y instanceof InputEmail) {
                return true;
            };
            if (x instanceof InputFile && y instanceof InputFile) {
                return true;
            };
            if (x instanceof InputHidden && y instanceof InputHidden) {
                return true;
            };
            if (x instanceof InputImage && y instanceof InputImage) {
                return true;
            };
            if (x instanceof InputMonth && y instanceof InputMonth) {
                return true;
            };
            if (x instanceof InputNumber && y instanceof InputNumber) {
                return true;
            };
            if (x instanceof InputPassword && y instanceof InputPassword) {
                return true;
            };
            if (x instanceof InputRadio && y instanceof InputRadio) {
                return true;
            };
            if (x instanceof InputRange && y instanceof InputRange) {
                return true;
            };
            if (x instanceof InputReset && y instanceof InputReset) {
                return true;
            };
            if (x instanceof InputSearch && y instanceof InputSearch) {
                return true;
            };
            if (x instanceof InputSubmit && y instanceof InputSubmit) {
                return true;
            };
            if (x instanceof InputTel && y instanceof InputTel) {
                return true;
            };
            if (x instanceof InputText && y instanceof InputText) {
                return true;
            };
            if (x instanceof InputTime && y instanceof InputTime) {
                return true;
            };
            if (x instanceof InputUrl && y instanceof InputUrl) {
                return true;
            };
            if (x instanceof InputWeek && y instanceof InputWeek) {
                return true;
            };
            return false;
        };
    }
};
var ordInputType = {
    compare: function (x) {
        return function (y) {
            if (x instanceof InputButton && y instanceof InputButton) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof InputButton) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof InputButton) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof InputCheckbox && y instanceof InputCheckbox) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof InputCheckbox) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof InputCheckbox) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof InputColor && y instanceof InputColor) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof InputColor) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof InputColor) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof InputDate && y instanceof InputDate) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof InputDate) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof InputDate) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof InputDatetimeLocal && y instanceof InputDatetimeLocal) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof InputDatetimeLocal) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof InputDatetimeLocal) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof InputEmail && y instanceof InputEmail) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof InputEmail) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof InputEmail) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof InputFile && y instanceof InputFile) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof InputFile) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof InputFile) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof InputHidden && y instanceof InputHidden) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof InputHidden) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof InputHidden) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof InputImage && y instanceof InputImage) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof InputImage) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof InputImage) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof InputMonth && y instanceof InputMonth) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof InputMonth) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof InputMonth) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof InputNumber && y instanceof InputNumber) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof InputNumber) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof InputNumber) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof InputPassword && y instanceof InputPassword) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof InputPassword) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof InputPassword) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof InputRadio && y instanceof InputRadio) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof InputRadio) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof InputRadio) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof InputRange && y instanceof InputRange) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof InputRange) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof InputRange) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof InputReset && y instanceof InputReset) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof InputReset) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof InputReset) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof InputSearch && y instanceof InputSearch) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof InputSearch) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof InputSearch) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof InputSubmit && y instanceof InputSubmit) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof InputSubmit) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof InputSubmit) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof InputTel && y instanceof InputTel) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof InputTel) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof InputTel) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof InputText && y instanceof InputText) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof InputText) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof InputText) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof InputTime && y instanceof InputTime) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof InputTime) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof InputTime) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof InputUrl && y instanceof InputUrl) {
                return Data_Ordering.EQ.value;
            };
            if (x instanceof InputUrl) {
                return Data_Ordering.LT.value;
            };
            if (y instanceof InputUrl) {
                return Data_Ordering.GT.value;
            };
            if (x instanceof InputWeek && y instanceof InputWeek) {
                return Data_Ordering.EQ.value;
            };
            throw new Error("Failed pattern match at DOM.HTML.Indexed.InputType (line 0, column 0 - line 0, column 0): " + [ x.constructor.name, y.constructor.name ]);
        };
    },
    Eq0: function () {
        return eqInputType;
    }
};
export {
    InputButton,
    InputCheckbox,
    InputColor,
    InputDate,
    InputDatetimeLocal,
    InputEmail,
    InputFile,
    InputHidden,
    InputImage,
    InputMonth,
    InputNumber,
    InputPassword,
    InputRadio,
    InputRange,
    InputReset,
    InputSearch,
    InputSubmit,
    InputTel,
    InputText,
    InputTime,
    InputUrl,
    InputWeek,
    renderInputType,
    eqInputType,
    ordInputType
};
