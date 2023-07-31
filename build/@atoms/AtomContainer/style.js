'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var react = require('@emotion/react');
var styled = require('@emotion/styled');
var framerMotion = require('framer-motion');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var AtomContainerStyled = function (props) { return react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n  display: flex;\n  width: 100%;\n  min-height: ", ";\n  height: ", ";\n  flex-wrap: ", ";\n  flex-direction: ", ";\n  justify-content: ", ";\n  align-items: ", ";\n  padding: ", ";\n  margin: ", ";\n  position: ", ";\n  ", ";\n  background-color: ", ";\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: ", ";\n\n  ", ";\n"], ["\n  display: flex;\n  width: 100%;\n  min-height: ", ";\n  height: ", ";\n  flex-wrap: ", ";\n  flex-direction: ", ";\n  justify-content: ", ";\n  align-items: ", ";\n  padding: ", ";\n  margin: ", ";\n  position: ", ";\n  ", ";\n  background-color: ", ";\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: ", ";\n\n  ", ";\n"])), (props === null || props === void 0 ? void 0 : props.minHeight) || "max-content", (props === null || props === void 0 ? void 0 : props.height) || "max-content", (props === null || props === void 0 ? void 0 : props.flexWrap) || "wrap", (props === null || props === void 0 ? void 0 : props.flexDirection) || "column", (props === null || props === void 0 ? void 0 : props.justifyContent) || "center", (props === null || props === void 0 ? void 0 : props.alignItems) || "center", (props === null || props === void 0 ? void 0 : props.padding) || "initial", (props === null || props === void 0 ? void 0 : props.margin) || "initial", (props === null || props === void 0 ? void 0 : props.position) || "initial", (props === null || props === void 0 ? void 0 : props.shadow) && "box-shadow: 0px 10px 20px #00000029", (props === null || props === void 0 ? void 0 : props.backgroundColor) || "white", props === null || props === void 0 ? void 0 : props.backgroundImage, (props === null || props === void 0 ? void 0 : props.backgroundSize) || "cover", props === null || props === void 0 ? void 0 : props.customCSS); };
var AtomContainerDefaultStyled = styled__default["default"](framerMotion.motion.main)(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), function (props) { return AtomContainerStyled(props); });
var AtomContainerNavStyled = styled__default["default"](framerMotion.motion.nav)(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), function (props) { return AtomContainerStyled(props); });
var AtomContainerFooterStyled = styled__default["default"](framerMotion.motion.footer)(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), function (props) { return AtomContainerStyled(props); });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

exports.AtomContainerDefaultStyled = AtomContainerDefaultStyled;
exports.AtomContainerFooterStyled = AtomContainerFooterStyled;
exports.AtomContainerNavStyled = AtomContainerNavStyled;
//# sourceMappingURL=style.js.map
