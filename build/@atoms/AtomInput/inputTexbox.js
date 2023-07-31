'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var error = require('./error.js');
var style = require('./style.js');

var Animation = {
    whileTap: { scale: 0.98, opacity: 0.8 },
};
var InputTextBox = function (props) {
    var _a, _b;
    var value = props.value, onChange = props.onChange, onBlur = props.onBlur, formik = props.formik, id = props.id, children = props.children;
    var labelWidth = props.labelWidth, labelColor = props.labelColor, labelFontFamily = props.labelFontFamily, labelFontSize = props.labelFontSize, labelFontWeight = props.labelFontWeight, labelMargin = props.labelMargin, labelPadding = props.labelPadding, spanMargin = props.spanMargin, customCSS = props.customCSS, label = props.label;
    return (jsxRuntime.jsxs(style.InputTextLabelStyled, tslib.__assign({ labelWidth: labelWidth, labelColor: labelColor, labelFontFamily: labelFontFamily, labelFontSize: labelFontSize, labelFontWeight: labelFontWeight, labelMargin: labelMargin, labelPadding: labelPadding, customCSS: customCSS, htmlFor: id }, { children: [label && (jsxRuntime.jsx(style.InputTextSpanStyled, tslib.__assign({ spanMargin: spanMargin }, { children: label }))), jsxRuntime.jsx(style.InputTextBoxStyled, tslib.__assign({}, Animation, props, { value: (_a = formik === null || formik === void 0 ? void 0 : formik.values["".concat(id)]) !== null && _a !== void 0 ? _a : value, onChange: (_b = formik === null || formik === void 0 ? void 0 : formik.handleChange) !== null && _b !== void 0 ? _b : onChange, onBlur: function (e) {
                    formik === null || formik === void 0 ? void 0 : formik.handleBlur(e);
                    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
                } })), children, jsxRuntime.jsx(error, tslib.__assign({}, props))] })));
};

module.exports = InputTextBox;
//# sourceMappingURL=inputTexbox.js.map
