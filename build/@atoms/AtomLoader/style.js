'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var react = require('@emotion/react');
var styled = require('@emotion/styled');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var LoaderContainer = styled__default["default"].div(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n  ", ";\n  background-image: ", ";\n  background-size: cover;\n  background-attachment: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  .lds-ring {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n  }\n  .lds-ring div {\n    box-sizing: border-box;\n    display: block;\n    position: absolute;\n    width: 64px;\n    height: 64px;\n    margin: 8px;\n    border: ", " solid\n      ", ";\n    border-radius: 50%;\n    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    border-color: ", " transparent\n      transparent transparent;\n  }\n  .lds-ring div:nth-of-type(1) {\n    animation-delay: -0.45s;\n  }\n  .lds-ring div:nth-of-type(2) {\n    animation-delay: -0.3s;\n  }\n  .lds-ring div:nth-of-type(3) {\n    animation-delay: -0.15s;\n  }\n  @keyframes lds-ring {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  ", ";\n"], ["\n  ", ";\n  background-image: ", ";\n  background-size: cover;\n  background-attachment: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  .lds-ring {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n  }\n  .lds-ring div {\n    box-sizing: border-box;\n    display: block;\n    position: absolute;\n    width: 64px;\n    height: 64px;\n    margin: 8px;\n    border: ", " solid\n      ", ";\n    border-radius: 50%;\n    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    border-color: ", " transparent\n      transparent transparent;\n  }\n  .lds-ring div:nth-of-type(1) {\n    animation-delay: -0.45s;\n  }\n  .lds-ring div:nth-of-type(2) {\n    animation-delay: -0.3s;\n  }\n  .lds-ring div:nth-of-type(3) {\n    animation-delay: -0.15s;\n  }\n  @keyframes lds-ring {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  ", ";\n"])), function (_a) {
    var type = _a.type, width = _a.width, height = _a.height, backgroundColor = _a.backgroundColor;
    return type === 'small'
        ? react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n          width: ", ";\n          height: ", ";\n          background-color: ", ";\n        "], ["\n          width: ", ";\n          height: ", ";\n          background-color: ", ";\n        "])), width || 'max-content', height || 'max-content', backgroundColor || 'transparent') : react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n          width: 100%;\n          height: 100vh;\n          position: fixed;\n          z-index: 9999;\n          backdrop-filter: blur(12px);\n          top: 0;\n          left: 0;\n          background-color: ", ";\n        "], ["\n          width: 100%;\n          height: 100vh;\n          position: fixed;\n          z-index: 9999;\n          backdrop-filter: blur(12px);\n          top: 0;\n          left: 0;\n          background-color: ", ";\n        "])), backgroundColor || 'white');
}, function (_a) {
    var backgroundImage = _a.backgroundImage;
    return backgroundImage || "none";
}, function (_a) {
    var widthLoader = _a.widthLoader;
    return widthLoader || '8px';
}, function (_a) {
    var colorLoading = _a.colorLoading;
    return colorLoading || "#fe6a6a";
}, function (_a) {
    var colorLoading = _a.colorLoading;
    return colorLoading || "#fe6a6a";
}, function (_a) {
    var customCSS = _a.customCSS;
    return customCSS;
});
var templateObject_1, templateObject_2, templateObject_3;

exports.LoaderContainer = LoaderContainer;
//# sourceMappingURL=style.js.map
