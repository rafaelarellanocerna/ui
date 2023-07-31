'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var styled = require('@emotion/styled');
var react = require('@emotion/react');
var framerMotion = require('framer-motion');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var DivStyle = function (props) { return react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n  ", ";\n  width: ", ";\n  height: ", ";\n  background: ", ";\n"], ["\n  ", ";\n  width: ", ";\n  height: ", ";\n  background: ", ";\n"])), props === null || props === void 0 ? void 0 : props.customCSS, (props === null || props === void 0 ? void 0 : props.width) || "100%", (props === null || props === void 0 ? void 0 : props.height) || "auto", (props === null || props === void 0 ? void 0 : props.height) || "auto"); };
var TextStyle = function (props) { return react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n  color: ", ";\n  padding: ", ";\n  font-size: ", ";\n  margin: ", ";\n  align-self: ", ";\n\n  ", ";\n"], ["\n  color: ", ";\n  padding: ", ";\n  font-size: ", ";\n  margin: ", ";\n  align-self: ", ";\n\n  ", ";\n"])), (props === null || props === void 0 ? void 0 : props.color) || "white", (props === null || props === void 0 ? void 0 : props.padding) || "5px 0px 0px 0px", (props === null || props === void 0 ? void 0 : props.fontSize) || "12px", (props === null || props === void 0 ? void 0 : props.margin) || "0px 50px 0px 10px", (props === null || props === void 0 ? void 0 : props.alignSelf) || "flex-end", props === null || props === void 0 ? void 0 : props.customCSS); };
var MessageContainer = styled__default["default"](framerMotion.motion.section)(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n  margin-bottom: 20px;\n  display: flex;\n  font-family: 'Roboto', sans-serif;\n  flex-direction: column;\n  align-self: ", ";\n  ", "\n\n  div {\n    display: flex;\n\n    img {\n      width: 40px;\n      height: 40px;\n      border-radius: 50%;\n    }\n  }\n"], ["\n  margin-bottom: 20px;\n  display: flex;\n  font-family: 'Roboto', sans-serif;\n  flex-direction: column;\n  align-self: ", ";\n  ", "\n\n  div {\n    display: flex;\n\n    img {\n      width: 40px;\n      height: 40px;\n      border-radius: 50%;\n    }\n  }\n"])), function (props) { return (props.align === true ? "flex-end" : ""); }, function (props) { return DivStyle(props); });
var Message = styled__default["default"](framerMotion.motion.div)(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n  padding: ", ";\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  border-radius: ", ";\n  background-color: ", ";\n  ", "\n\n  section {\n    display: flex;\n    justify-content: space-between;\n    span {\n      font-size: 10px;\n      margin-bottom: 5px;\n      text-align: ", ";\n    }\n  }\n  div {\n    display: flex;\n    flex-direction: column;\n    line-height: 2;\n  }\n  img {\n    width: 100% !important;\n    height: auto !important;\n    border-radius: 10px !important;\n  }\n  p {\n    color: ", ";\n    overflow: hidden;\n  }\n"], ["\n  padding: ", ";\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  border-radius: ", ";\n  background-color: ", ";\n  ", "\n\n  section {\n    display: flex;\n    justify-content: space-between;\n    span {\n      font-size: 10px;\n      margin-bottom: 5px;\n      text-align: ", ";\n    }\n  }\n  div {\n    display: flex;\n    flex-direction: column;\n    line-height: 2;\n  }\n  img {\n    width: 100% !important;\n    height: auto !important;\n    border-radius: 10px !important;\n  }\n  p {\n    color: ", ";\n    overflow: hidden;\n  }\n"])), function (_a) {
    var padding = _a.padding;
    return padding || "10px 20px 20px 20px";
}, function (_a) {
    var borderRadius = _a.borderRadius;
    return borderRadius;
}, function (_a) {
    var background = _a.background;
    return background;
}, function (props) { return DivStyle(props); }, function (props) { return (props.align === true ? "right" : "left"); }, function (_a) {
    var color = _a.color;
    return color;
});
var Triangle = styled__default["default"](framerMotion.motion.div)(templateObject_5 || (templateObject_5 = tslib.__makeTemplateObject(["\n  width: 0;\n  height: 0;\n  border-left: 10px solid transparent;\n  border-right: 0 solid transparent;\n  border-bottom: 10px solid ", ";\n  transform: rotate(-90deg);\n  margin: 0 0 0 auto;\n"], ["\n  width: 0;\n  height: 0;\n  border-left: 10px solid transparent;\n  border-right: 0 solid transparent;\n  border-bottom: 10px solid ", ";\n  transform: rotate(-90deg);\n  margin: 0 0 0 auto;\n"])), function (_a) {
    var background = _a.background;
    return background;
});
var MyMessageTriangle = styled__default["default"](framerMotion.motion.div)(templateObject_6 || (templateObject_6 = tslib.__makeTemplateObject(["\n  width: 0;\n  height: 0;\n  border-left: 10px solid transparent;\n  border-right: 0 solid transparent;\n  border-bottom: 10px solid ", ";\n  transform: rotate(180deg);\n  margin: 0 0 0 auto;\n"], ["\n  width: 0;\n  height: 0;\n  border-left: 10px solid transparent;\n  border-right: 0 solid transparent;\n  border-bottom: 10px solid ", ";\n  transform: rotate(180deg);\n  margin: 0 0 0 auto;\n"])), function (_a) {
    var background = _a.background;
    return background;
});
var DateofMessage = styled__default["default"](framerMotion.motion.p)(templateObject_7 || (templateObject_7 = tslib.__makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) { return TextStyle(props); });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;

exports.DateofMessage = DateofMessage;
exports.Message = Message;
exports.MessageContainer = MessageContainer;
exports.MyMessageTriangle = MyMessageTriangle;
exports.Triangle = Triangle;
//# sourceMappingURL=style.js.map
