'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var styled = require('@emotion/styled');
var framerMotion = require('framer-motion');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var IconContainer = styled__default["default"](framerMotion.motion.div)(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n  display: flex;\n  width: max-content;\n  height: max-content;\n  svg {\n    width: ", ";\n    height: ", ";\n    path {\n      fill: ", "!important;\n    }\n    polygon {\n      fill: ", "!important;\n    }\n    circle {\n      fill: ", "!important;\n    }\n  }\n\n  ", ";\n"], ["\n  display: flex;\n  width: max-content;\n  height: max-content;\n  svg {\n    width: ", ";\n    height: ", ";\n    path {\n      fill: ", "!important;\n    }\n    polygon {\n      fill: ", "!important;\n    }\n    circle {\n      fill: ", "!important;\n    }\n  }\n\n  ", ";\n"])), function (_a) {
    var width = _a.width;
    return width || "34px";
}, function (_a) {
    var height = _a.height;
    return height || "34px";
}, function (_a) {
    var color = _a.color;
    return color || "#000";
}, function (_a) {
    var color = _a.color;
    return color || "#000";
}, function (_a) {
    var color = _a.color;
    return color || "#000";
}, function (_a) {
    var customCSS = _a.customCSS;
    return customCSS;
});
var PlaceholderIcon = styled__default["default"](framerMotion.motion.div)(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n"], ["\n  width: ", ";\n  height: ", ";\n"])), function (_a) {
    var width = _a.width;
    return width || "34px";
}, function (_a) {
    var height = _a.height;
    return height || "34px";
});
var templateObject_1, templateObject_2;

exports.IconContainer = IconContainer;
exports.PlaceholderIcon = PlaceholderIcon;
//# sourceMappingURL=styled.js.map
