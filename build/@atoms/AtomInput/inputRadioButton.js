'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var React = require('react');
var index$1 = require('../AtomText/index.js');
var index = require('../AtomWrapper/index.js');
var error = require('./error.js');
var style = require('./style.js');

var Animation = {
    whileTap: { scale: 0.98, opacity: 0.8 },
};
var InputRadioButton = function (props) {
    var value = props.value, onChange = props.onChange, onBlur = props.onBlur, formik = props.formik, id = props.id, options = props.options;
    var labelWidth = props.labelWidth, labelColor = props.labelColor, labelFontFamily = props.labelFontFamily, labelFontSize = props.labelFontSize, labelFontWeight = props.labelFontWeight, labelMargin = props.labelMargin, labelPadding = props.labelPadding, spanMargin = props.spanMargin, customCSS = props.customCSS;
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    React.useEffect(function () { }, [formik === null || formik === void 0 ? void 0 : formik.values[id]]);
    return (jsxRuntime.jsxs(style.InputTextLabelStyled, tslib.__assign({ labelWidth: labelWidth, labelColor: labelColor, labelFontFamily: labelFontFamily, labelFontSize: labelFontSize, labelFontWeight: labelFontWeight, labelMargin: labelMargin, labelPadding: labelPadding, spanMargin: spanMargin, customCSS: customCSS, id: id, htmlFor: id, defaultValue: formik && id && (formik === null || formik === void 0 ? void 0 : formik.values[id]) ? formik === null || formik === void 0 ? void 0 : formik.values[id] : value, onChange: formik ? formik === null || formik === void 0 ? void 0 : formik.handleChange : onChange, onBlur: function (e) {
            formik === null || formik === void 0 ? void 0 : formik.handleBlur(e);
            onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
        } }, { children: [options &&
                options.map(function (option) { return (jsxRuntime.jsx(index, tslib.__assign({ flexDirection: "row", alignItems: "center" }, { children: jsxRuntime.jsxs(style.LabelRadioButtonStyled, tslib.__assign({ htmlFor: option.id }, { children: [jsxRuntime.jsx(style.InputRadioButtonStyled, tslib.__assign({ id: option.id, type: "radio" }, Animation, { name: id, disabled: props.disabled, value: "".concat(option.value), defaultChecked: (formik && id && (formik === null || formik === void 0 ? void 0 : formik.values[id])
                                    ? formik === null || formik === void 0 ? void 0 : formik.values[id]
                                    : value) === option.value })), jsxRuntime.jsx(index$1, { children: option.label })] })) }), option.id)); }), jsxRuntime.jsx(error, tslib.__assign({}, props))] })));
};

module.exports = InputRadioButton;
//# sourceMappingURL=inputRadioButton.js.map
