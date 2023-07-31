'use strict';

var tslib = require('tslib');
var react = require('@emotion/react');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var lodash = require('lodash');
var error = require('./error.js');
var style = require('./style.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var lodash__default = /*#__PURE__*/_interopDefaultLegacy(lodash);

var Animation = {
    whileTap: { scale: 0.98, opacity: 0.8 },
};
var DefaultAnimation = {
    whileTap: { scale: 0.98, opacity: 0.8 },
    transition: {
        default: { duration: 0.3 },
    },
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};
var InputSelect = function (props) {
    var value = props.value, onChange = props.onChange, onBlur = props.onBlur, formik = props.formik, id = props.id, children = props.children;
    var labelWidth = props.labelWidth, labelColor = props.labelColor, labelFontFamily = props.labelFontFamily, labelFontSize = props.labelFontSize, labelFontWeight = props.labelFontWeight, labelMargin = props.labelMargin, labelPadding = props.labelPadding, spanMargin = props.spanMargin, customCSS = props.customCSS, label = props.label, options = props.options, defaultText = props.defaultText;
    return (jsxRuntime.jsxs(style.InputTextLabelStyled, tslib.__assign({ labelWidth: labelWidth, labelColor: labelColor, labelFontFamily: labelFontFamily, labelFontSize: labelFontSize, labelFontWeight: labelFontWeight, labelMargin: labelMargin, labelPadding: labelPadding, customCSS: customCSS }, { children: [label && (jsxRuntime.jsx(style.InputTextSpanStyled, tslib.__assign({ spanMargin: spanMargin }, { children: label }))), jsxRuntime.jsxs(style.InputSelectStyled, tslib.__assign({ value: formik && id
                    ? lodash__default["default"].get(formik === null || formik === void 0 ? void 0 : formik.values, id)
                    : formik && id && lodash__default["default"].get(formik === null || formik === void 0 ? void 0 : formik.values, id) === ''
                        ? 'DEFAULT'
                        : value, onChange: formik ? formik === null || formik === void 0 ? void 0 : formik.handleChange : onChange, onBlur: function (e) {
                    formik === null || formik === void 0 ? void 0 : formik.handleBlur(e);
                    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
                } }, props, Animation, { children: [jsxRuntime.jsx(style.InputOptionStyled, tslib.__assign({}, DefaultAnimation, { value: "DEFAULT", disabled: true }, { children: defaultText !== null && defaultText !== void 0 ? defaultText : 'Selecciona una opción' })), options &&
                        options.length > 0 &&
                        (options === null || options === void 0 ? void 0 : options.map(function (e) { return (react.createElement(style.InputOptionStyled, tslib.__assign({}, DefaultAnimation, { value: e.value, key: e.id }), e.label)); }))] })), children, jsxRuntime.jsx(error, tslib.__assign({}, props))] })));
};

module.exports = InputSelect;
//# sourceMappingURL=inputSelect.js.map
