'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var styled = require('@emotion/styled');
var framerMotion = require('framer-motion');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var AtomSeparatorStyled = styled__default["default"](framerMotion.motion.hr)(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  border: none;\n  margin: ", ";\n  background: ", ";\n\n  ", ";\n"], ["\n  width: ", ";\n  height: ", ";\n  border: none;\n  margin: ", ";\n  background: ", ";\n\n  ", ";\n"])), function (_a) {
    var width = _a.width;
    return width || "100%";
}, function (_a) {
    var height = _a.height;
    return height || "2px";
}, function (_a) {
    var margin = _a.margin;
    return margin || "30px 0px;";
}, function (_a) {
    var color = _a.color;
    return color || "white";
}, function (_a) {
    var customCSS = _a.customCSS;
    return customCSS;
});
var templateObject_1;

exports.AtomSeparatorStyled = AtomSeparatorStyled;
//# sourceMappingURL=style.js.map
