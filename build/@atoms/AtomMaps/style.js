'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var styled = require('@emotion/styled');
var framerMotion = require('framer-motion');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var AtomMapWrapperStyled = styled__default["default"](framerMotion.motion.div)(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n  width: ", ";\n  height: auto;\n\n  svg {\n    width: 100%;\n    height: auto;\n\n    section {\n      width: 100%;\n      height: auto;\n      background-color: red;\n    }\n    path {\n      stroke-width: 2px;\n      transition: all 0.2s ease-in-out;\n      &:hover {\n        fill: ", ";\n        cursor: ", ";\n        transform: ", ";\n      }\n      }\n    }\n  }\n  ", ";\n"], ["\n  width: ", ";\n  height: auto;\n\n  svg {\n    width: 100%;\n    height: auto;\n\n    section {\n      width: 100%;\n      height: auto;\n      background-color: red;\n    }\n    path {\n      stroke-width: 2px;\n      transition: all 0.2s ease-in-out;\n      &:hover {\n        fill: ", ";\n        cursor: ", ";\n        transform: ", ";\n      }\n      }\n    }\n  }\n  ", ";\n"])), function (_a) {
    var width = _a.width;
    return width || "100%";
}, function (_a) {
    var hover = _a.hover, disable = _a.disable;
    return disable === false && hover;
}, function (_a) {
    var disable = _a.disable;
    return disable || "pointer";
}, function (_a) {
    var disable = _a.disable;
    return disable || "scale(1.01)";
}, function (_a) {
    var customCSS = _a.customCSS;
    return customCSS;
});
var ToolTip = styled__default["default"](framerMotion.motion.div)(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), function (_a) {
    var customCSS = _a.customCSS;
    return customCSS;
});
var templateObject_1, templateObject_2;

exports.AtomMapWrapperStyled = AtomMapWrapperStyled;
exports.ToolTip = ToolTip;
//# sourceMappingURL=style.js.map
