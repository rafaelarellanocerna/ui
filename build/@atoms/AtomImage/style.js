'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var styled = require('@emotion/styled');
var framerMotion = require('framer-motion');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var AtomImageStyled = styled__default["default"](framerMotion.motion.div)(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n  width: ", ";\n  max-width: ", ";\n  height: ", ";\n  max-height: ", ";\n  margin: ", ";\n  position: ", ";\n  left: ", ";\n  top: ", ";\n  right: ", ";\n  bottom: ", ";\n  img {\n    object-fit: ", ";\n    object-position: ", ";\n  }\n  z-index: ", ";\n\n  ", ";\n"], ["\n  width: ", ";\n  max-width: ", ";\n  height: ", ";\n  max-height: ", ";\n  margin: ", ";\n  position: ", ";\n  left: ", ";\n  top: ", ";\n  right: ", ";\n  bottom: ", ";\n  img {\n    object-fit: ", ";\n    object-position: ", ";\n  }\n  z-index: ", ";\n\n  ", ";\n"])), function (_a) {
    var width = _a.width;
    return width || "100%";
}, function (_a) {
    var maxWidth = _a.maxWidth;
    return maxWidth || "initial";
}, function (_a) {
    var height = _a.height;
    return height || "100%";
}, function (_a) {
    var maxHeight = _a.maxHeight;
    return maxHeight || "initial";
}, function (_a) {
    var margin = _a.margin;
    return margin || "0";
}, function (_a) {
    var position = _a.position;
    return position || "initial";
}, function (_a) {
    var left = _a.left;
    return left || "initial";
}, function (_a) {
    var top = _a.top;
    return top || "initial";
}, function (_a) {
    var right = _a.right;
    return right || "initial";
}, function (_a) {
    var bottom = _a.bottom;
    return bottom || "initial";
}, function (_a) {
    var objectFit = _a.objectFit;
    return objectFit || "cover";
}, function (_a) {
    var objectPosition = _a.objectPosition;
    return objectPosition || "center center";
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex || "initial";
}, function (_a) {
    var customCSS = _a.customCSS;
    return customCSS;
});
var AtomImageWrapperStyled = styled__default["default"].div(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  position: relative;\n"], ["\n  width: 100%;\n  height: 100%;\n  position: relative;\n"])));
var AtomImageImgStyled = styled__default["default"].img(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"], ["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"])));
var templateObject_1, templateObject_2, templateObject_3;

exports.AtomImageImgStyled = AtomImageImgStyled;
exports.AtomImageStyled = AtomImageStyled;
exports.AtomImageWrapperStyled = AtomImageWrapperStyled;
//# sourceMappingURL=style.js.map
