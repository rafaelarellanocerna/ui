'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var error = require('./error.js');
var style = require('./style.js');

var Animation = {
    whileTap: { scale: 0.98, opacity: 0.8 },
};
var InputCheckbox = function (props) {
    var value = props.value, onChange = props.onChange, onBlur = props.onBlur, formik = props.formik, id = props.id, children = props.children;
    var labelWidth = props.labelWidth, labelColor = props.labelColor, labelFontFamily = props.labelFontFamily, labelFontSize = props.labelFontSize, labelFontWeight = props.labelFontWeight, labelMargin = props.labelMargin, labelPadding = props.labelPadding, spanMargin = props.spanMargin, customCSS = props.customCSS, label = props.label, checked = props.checked;
    return (jsxRuntime.jsxs(style.InputTextLabelStyled, tslib.__assign({ labelWidth: labelWidth, labelColor: labelColor, labelFontFamily: labelFontFamily, labelFontSize: labelFontSize, labelFontWeight: labelFontWeight, labelMargin: labelMargin, labelPadding: labelPadding, spanMargin: spanMargin, customCSS: customCSS }, { children: [jsxRuntime.jsxs("div", tslib.__assign({ style: {
                    display: "flex",
                    flexDirection: "row",
                    width: '100%',
                    alignItems: 'center',
                } }, { children: [label && jsxRuntime.jsx("span", { children: label }), jsxRuntime.jsx(style.InputCheckboxStyled, tslib.__assign({ type: "checkbox" }, Animation, { id: label, name: id, disabled: props.disabled, value: formik && id ? formik === null || formik === void 0 ? void 0 : formik.values[id] : value, onChange: function (e) {
                            formik === null || formik === void 0 ? void 0 : formik.handleChange(e);
                            onChange === null || onChange === void 0 ? void 0 : onChange(e);
                        }, onBlur: function (e) {
                            formik === null || formik === void 0 ? void 0 : formik.handleBlur(e);
                            onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
                        }, checked: formik && id
                            ? (formik === null || formik === void 0 ? void 0 : formik.values[id]) === true
                            : checked || value === "on", accentColor: props.accentColor })), children] })), jsxRuntime.jsx(error, tslib.__assign({}, props))] })));
};

module.exports = InputCheckbox;
//# sourceMappingURL=inputCheckbox.js.map
