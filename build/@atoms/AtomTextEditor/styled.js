'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
var styled = require('@emotion/styled');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var GlobalStyles = function () { return (jsxRuntime.jsx(react.Global, { styles: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n      .ProseMirror {\n        * {\n          font-family: 'Montserrat', sans-serif;\n          color: #292929;\n          ::selection {\n            background: #e9e9e9;\n          }\n        }\n        a {\n          color: #f1576c;\n          cursor: pointer;\n        }\n        h1 {\n          font-size: 2.5rem;\n        }\n        h2 {\n          font-size: 2rem;\n        }\n        h3 {\n          font-size: 1.5rem;\n        }\n        h4 {\n          font-size: 1.25rem;\n        }\n        h5 {\n          font-size: 1rem;\n        }\n        h6 {\n          font-size: 0.875rem;\n        }\n        p {\n          font-size: 14px;\n        }\n        img {\n          width: 100%;\n        }\n        ol {\n          list-style-type: decimal;\n          padding-left: 1rem;\n        }\n        ul {\n          list-style-type: disc;\n          padding-left: 1rem;\n        }\n        .tableWrapper {\n          height: max-content;\n        }\n        table {\n          height: max-content;\n          margin: 20px 0px;\n          border-collapse: collapse;\n          border-spacing: 0;\n          width: 100%;\n          border: 1px solid #ddd;\n        }\n        th,\n        td {\n          border: 1px solid #ddd;\n          text-align: left;\n          padding: 8px;\n          font-size: 1rem;\n          font-family: 'Montserrat', sans-serif;\n        }\n        td {\n          font-weight: 500;\n        }\n        tr:nth-child(even) {\n          color: #2e2e2e;\n          background-color: #f3f3f3;\n        }\n\n        .ProseMirror-selectednode {\n          background: #f2f2f2;\n        }\n      }\n    "], ["\n      .ProseMirror {\n        * {\n          font-family: 'Montserrat', sans-serif;\n          color: #292929;\n          ::selection {\n            background: #e9e9e9;\n          }\n        }\n        a {\n          color: #f1576c;\n          cursor: pointer;\n        }\n        h1 {\n          font-size: 2.5rem;\n        }\n        h2 {\n          font-size: 2rem;\n        }\n        h3 {\n          font-size: 1.5rem;\n        }\n        h4 {\n          font-size: 1.25rem;\n        }\n        h5 {\n          font-size: 1rem;\n        }\n        h6 {\n          font-size: 0.875rem;\n        }\n        p {\n          font-size: 14px;\n        }\n        img {\n          width: 100%;\n        }\n        ol {\n          list-style-type: decimal;\n          padding-left: 1rem;\n        }\n        ul {\n          list-style-type: disc;\n          padding-left: 1rem;\n        }\n        .tableWrapper {\n          height: max-content;\n        }\n        table {\n          height: max-content;\n          margin: 20px 0px;\n          border-collapse: collapse;\n          border-spacing: 0;\n          width: 100%;\n          border: 1px solid #ddd;\n        }\n        th,\n        td {\n          border: 1px solid #ddd;\n          text-align: left;\n          padding: 8px;\n          font-size: 1rem;\n          font-family: 'Montserrat', sans-serif;\n        }\n        td {\n          font-weight: 500;\n        }\n        tr:nth-child(even) {\n          color: #2e2e2e;\n          background-color: #f3f3f3;\n        }\n\n        .ProseMirror-selectednode {\n          background: #f2f2f2;\n        }\n      }\n    "]))) })); };
var InputErrorStyled = styled__default["default"].span(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  color: ", ";\n  height: ", ";\n  margin: ", ";\n  padding: ", ";\n"], ["\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  color: ", ";\n  height: ", ";\n  margin: ", ";\n  padding: ", ";\n"])), function (_a) {
    var errorFontFamily = _a.errorFontFamily;
    return errorFontFamily || "'Montserrat', sans-serif";
}, function (_a) {
    var errorFontSize = _a.errorFontSize;
    return errorFontSize || "10px";
}, function (_a) {
    var errorFontWeight = _a.errorFontWeight;
    return errorFontWeight || "700";
}, function (_a) {
    var errorColor = _a.errorColor;
    return errorColor || "#ff295f";
}, function (_a) {
    var errorHeight = _a.errorHeight;
    return errorHeight || "20px";
}, function (_a) {
    var errorMargin = _a.errorMargin;
    return errorMargin || "0px 0px 0px 0px";
}, function (_a) {
    var errorPadding = _a.errorPadding;
    return errorPadding || "5px 0px 0px 0px";
});
var InputColorStyled = styled__default["default"].input(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n  border: 1px solid #d5d5d5;\n  border-radius: 50%;\n\n  width: 25px;\n  height: 25px;\n  border-radius: 300px;\n  overflow: hidden;\n  ::-webkit-color-swatch {\n    border: none;\n    border-radius: 50%;\n  }\n  ::-webkit-color-swatch-wrapper {\n    padding: 0;\n  }\n"], ["\n  border: 1px solid #d5d5d5;\n  border-radius: 50%;\n\n  width: 25px;\n  height: 25px;\n  border-radius: 300px;\n  overflow: hidden;\n  ::-webkit-color-swatch {\n    border: none;\n    border-radius: 50%;\n  }\n  ::-webkit-color-swatch-wrapper {\n    padding: 0;\n  }\n"])));
var SeparateVerticalStyled = styled__default["default"].hr(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n  height: 10px;\n  width: 2px;\n  background-color: #d5d5d5;\n"], ["\n  height: 10px;\n  width: 2px;\n  background-color: #d5d5d5;\n"])));
var ButtonStyled = styled__default["default"].button(templateObject_6 || (templateObject_6 = tslib.__makeTemplateObject(["\n  width: 30px;\n  height: 30px;\n  background-color: white;\n  border: 1px solid #d5d5d5;\n  border-radius: 4px;\n  cursor: pointer;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 12px;\n  color: #373737;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 800;\n  span {\n    cursor: pointer;\n  }\n  ", "\n\n  ", "\n"], ["\n  width: 30px;\n  height: 30px;\n  background-color: white;\n  border: 1px solid #d5d5d5;\n  border-radius: 4px;\n  cursor: pointer;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 12px;\n  color: #373737;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 800;\n  span {\n    cursor: pointer;\n  }\n  ", "\n\n  ", "\n"])), function (_a) {
    var isActive = _a.isActive;
    return isActive && react.css(templateObject_5 || (templateObject_5 = tslib.__makeTemplateObject(["\n      background-color: #f1576c;\n      color: white !important;\n      span {\n        color: white !important;\n      }\n      svg {\n        path {\n          fill: white !important;\n        }\n      }\n    "], ["\n      background-color: #f1576c;\n      color: white !important;\n      span {\n        color: white !important;\n      }\n      svg {\n        path {\n          fill: white !important;\n        }\n      }\n    "])));
}, function (_a) {
    var customCSS = _a.customCSS;
    return customCSS;
});
styled__default["default"].textarea(templateObject_7 || (templateObject_7 = tslib.__makeTemplateObject(["\n  padding: 15px 20px;\n  border: none;\n  width: 100%;\n  height: 100%;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n"], ["\n  padding: 15px 20px;\n  border: none;\n  width: 100%;\n  height: 100%;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;

exports.ButtonStyled = ButtonStyled;
exports.GlobalStyles = GlobalStyles;
exports.InputColorStyled = InputColorStyled;
exports.InputErrorStyled = InputErrorStyled;
exports.SeparateVerticalStyled = SeparateVerticalStyled;
//# sourceMappingURL=styled.js.map
