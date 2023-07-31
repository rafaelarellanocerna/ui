'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var lodash = require('lodash');
var error = require('./error.js');
var style = require('./style.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var lodash__default = /*#__PURE__*/_interopDefaultLegacy(lodash);

var Animation = {
    whileTap: { scale: 0.98, opacity: 0.8 },
};
var InputText = function (props) {
    var _a;
    var value = props.value, onChange = props.onChange, onBlur = props.onBlur, formik = props.formik, id = props.id, children = props.children;
    var labelWidth = props.labelWidth, labelColor = props.labelColor, labelFontFamily = props.labelFontFamily, labelFontSize = props.labelFontSize, labelFontWeight = props.labelFontWeight, labelMargin = props.labelMargin, labelPadding = props.labelPadding, spanMargin = props.spanMargin, customCSS = props.customCSS, label = props.label, step = props.step;
    return (jsxRuntime.jsxs(style.InputTextLabelStyled, tslib.__assign({ labelWidth: labelWidth, labelColor: labelColor, labelFontFamily: labelFontFamily, labelFontSize: labelFontSize, labelFontWeight: labelFontWeight, labelMargin: labelMargin, labelPadding: labelPadding, customCSS: customCSS, htmlFor: id, ref: props.refObject }, { children: [label && (jsxRuntime.jsx(style.InputTextSpanStyled, tslib.__assign({ spanMargin: spanMargin }, { children: label }))), jsxRuntime.jsx(style.InputTextStyled, tslib.__assign({}, Animation, props, { value: (_a = lodash__default["default"].get(formik === null || formik === void 0 ? void 0 : formik.values, id)) !== null && _a !== void 0 ? _a : value, onChange: function (e) {
                    formik === null || formik === void 0 ? void 0 : formik.handleChange(e);
                    onChange === null || onChange === void 0 ? void 0 : onChange(e);
                }, onBlur: function (e) {
                    formik === null || formik === void 0 ? void 0 : formik.handleBlur(e);
                    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
                }, step: step })), children, jsxRuntime.jsx(error, tslib.__assign({}, props))] })));
};

module.exports = InputText;
//# sourceMappingURL=inputText.js.map
