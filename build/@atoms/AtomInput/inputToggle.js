'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
var reactRedux = require('react-redux');
var error = require('./error.js');
var style = require('./style.js');

var Animation = {
    whileTap: { scale: 0.98, opacity: 0.8 },
};
var InputCheckbox = function (props) {
    var _a, _b, _c, _d;
    var value = props.value, onChange = props.onChange, onBlur = props.onBlur, formik = props.formik, id = props.id, children = props.children;
    var labelWidth = props.labelWidth, labelColor = props.labelColor, labelFontFamily = props.labelFontFamily, labelFontSize = props.labelFontSize, labelFontWeight = props.labelFontWeight, labelMargin = props.labelMargin, labelPadding = props.labelPadding, spanMargin = props.spanMargin, customCSS = props.customCSS, label = props.label, checked = props.checked;
    var customize = reactRedux.useSelector(function (state) { return state.customize; });
    return (jsxRuntime.jsxs(style.InputCheckboxLabelStyled, tslib.__assign({ labelWidth: labelWidth, labelColor: labelColor, labelFontFamily: labelFontFamily, labelFontSize: labelFontSize, labelFontWeight: labelFontWeight, labelMargin: labelMargin, labelPadding: labelPadding, spanMargin: spanMargin, customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n        input {\n          margin: 0px;\n        }\n        input[type='checkbox'] {\n          position: relative;\n          width: 40px;\n          height: 12px;\n          appearance: none;\n          background: #d8d8d8;\n          outline: none;\n          border-radius: 20px;\n          border: none;\n          box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\n          transition: 0.5s;\n          cursor: pointer;\n        }\n        input:checked[type='checkbox'] {\n          background: ", ";\n        }\n        input[type='checkbox']:before {\n          content: '';\n          position: absolute;\n          height: 18px;\n          width: 18px;\n          border-radius: 50%;\n          top: -40%;\n          left: -5px;\n          background-color: #fff;\n          border: 2px solid ", ";\n          transform: translate(2px, 2px);\n          transition: 0.2s;\n        }\n        input:checked[type='checkbox']:before {\n          left: 20px;\n        }\n        ", "\n      "], ["\n        input {\n          margin: 0px;\n        }\n        input[type='checkbox'] {\n          position: relative;\n          width: 40px;\n          height: 12px;\n          appearance: none;\n          background: #d8d8d8;\n          outline: none;\n          border-radius: 20px;\n          border: none;\n          box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\n          transition: 0.5s;\n          cursor: pointer;\n        }\n        input:checked[type='checkbox'] {\n          background: ", ";\n        }\n        input[type='checkbox']:before {\n          content: '';\n          position: absolute;\n          height: 18px;\n          width: 18px;\n          border-radius: 50%;\n          top: -40%;\n          left: -5px;\n          background-color: #fff;\n          border: 2px solid ", ";\n          transform: translate(2px, 2px);\n          transition: 0.2s;\n        }\n        input:checked[type='checkbox']:before {\n          left: 20px;\n        }\n        ", "\n      "])), (_b = (_a = customize === null || customize === void 0 ? void 0 : customize.colors) === null || _a === void 0 ? void 0 : _a.primary) !== null && _b !== void 0 ? _b : '#f1576c', (_d = (_c = customize === null || customize === void 0 ? void 0 : customize.colors) === null || _c === void 0 ? void 0 : _c.primary) !== null && _d !== void 0 ? _d : '#f1576c', customCSS) }, { children: [jsxRuntime.jsxs("div", tslib.__assign({ style: {
                    display: "flex",
                    flexDirection: "row",
                    width: '100%',
                    alignItems: 'center',
                } }, { children: [label && jsxRuntime.jsx("span", { children: label }), jsxRuntime.jsx(style.InputCheckboxToggleStyled, tslib.__assign({}, Animation, props, { type: "checkbox", id: label, name: id, disabled: props.disabled, value: formik && id ? formik === null || formik === void 0 ? void 0 : formik.values[id] : value, onChange: formik ? formik === null || formik === void 0 ? void 0 : formik.handleChange : onChange, onBlur: function (e) {
                            formik === null || formik === void 0 ? void 0 : formik.handleBlur(e);
                            onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
                        }, checked: formik && id
                            ? (formik === null || formik === void 0 ? void 0 : formik.values[id]) === true
                            : checked || value === "on" })), children, label] })), jsxRuntime.jsx(error, tslib.__assign({}, props))] })));
};
var templateObject_1;

module.exports = InputCheckbox;
//# sourceMappingURL=inputToggle.js.map
