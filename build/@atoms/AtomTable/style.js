'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var styled = require('@emotion/styled');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var AtomTableStyled = styled__default["default"].table(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n  border-collapse: collapse;\n  table-layout: auto;\n  font-family: 'Montserrat', sans-serif;\n  width: ", ";\n  height: ", ";\n  margin: ", ";\n  color: ", ";\n  width: max-content;\n  min-width: 100%;\n  border-radius: ", ";\n  thead {\n    font-family: 'Montserrat', sans-serif;\n    height: fit-content;\n    text-align: center;\n    background-color: white;\n    border-bottom: 1px solid #eeeeee;\n    th {\n      font-family: 'Montserrat', sans-serif;\n      text-align: left;\n      color: #565656;\n      font-size: 14px;\n      font-weight: 700;\n      padding: 15px 30px 15px 30px;\n      span {\n        font-size: 8px;\n      }\n    }\n  }\n  ", ";\n"], ["\n  border-collapse: collapse;\n  table-layout: auto;\n  font-family: 'Montserrat', sans-serif;\n  width: ", ";\n  height: ", ";\n  margin: ", ";\n  color: ", ";\n  width: max-content;\n  min-width: 100%;\n  border-radius: ", ";\n  thead {\n    font-family: 'Montserrat', sans-serif;\n    height: fit-content;\n    text-align: center;\n    background-color: white;\n    border-bottom: 1px solid #eeeeee;\n    th {\n      font-family: 'Montserrat', sans-serif;\n      text-align: left;\n      color: #565656;\n      font-size: 14px;\n      font-weight: 700;\n      padding: 15px 30px 15px 30px;\n      span {\n        font-size: 8px;\n      }\n    }\n  }\n  ", ";\n"])), function (_a) {
    var width = _a.width;
    return width || "100%";
}, function (_a) {
    var height = _a.height;
    return height || "max-content";
}, function (_a) {
    var margin = _a.margin;
    return margin || "0px 0px;";
}, function (_a) {
    var color = _a.color;
    return color || "black";
}, function (_a) {
    var borderRadius = _a.borderRadius;
    return borderRadius || "15px";
}, function (_a) {
    var customCSS = _a.customCSS;
    return customCSS;
});
var AtomTbodyStyled = styled__default["default"].tbody(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n  td {\n    font-family: 'Montserrat', sans-serif;\n    color: #565656;\n    font-size: 14px;\n    padding: 15px 30px;\n    text-align: left;\n    border-bottom: 1px solid #eeeeee;\n  }\n  tr {\n    background-color: #fefefe;\n    transition: all 0.3s ease-in-out;\n  }\n  tr:hover {\n    background-color: #fafafa;\n  }\n"], ["\n  td {\n    font-family: 'Montserrat', sans-serif;\n    color: #565656;\n    font-size: 14px;\n    padding: 15px 30px;\n    text-align: left;\n    border-bottom: 1px solid #eeeeee;\n  }\n  tr {\n    background-color: #fefefe;\n    transition: all 0.3s ease-in-out;\n  }\n  tr:hover {\n    background-color: #fafafa;\n  }\n"])));
var TDStyled = styled__default["default"].td(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), function (_a) {
    var customCSS = _a.customCSS;
    return customCSS;
});
var templateObject_1, templateObject_2, templateObject_3;

exports.AtomTableStyled = AtomTableStyled;
exports.AtomTbodyStyled = AtomTbodyStyled;
exports.TDStyled = TDStyled;
//# sourceMappingURL=style.js.map
