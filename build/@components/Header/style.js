'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var react = require('@emotion/react');
var styled = require('@emotion/styled');
var framerMotion = require('framer-motion');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var ContainerLinkStyled = styled__default["default"](framerMotion.motion.ul)(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: row;\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: row;\n  ", "\n"])), react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n    @media only screen and (max-width: 1200px) {\n      display: none;\n    }\n  "], ["\n    @media only screen and (max-width: 1200px) {\n      display: none;\n    }\n  "]))));
var LinkStyled = styled__default["default"](framerMotion.motion.li)(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: max-content;\n  flex-direction: row;\n  background: transparent;\n  border: none;\n  margin: ", ";\n  cursor: pointer;\n  position: relative;\n\n  ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: max-content;\n  flex-direction: row;\n  background: transparent;\n  border: none;\n  margin: ", ";\n  cursor: pointer;\n  position: relative;\n\n  ", ";\n"])), function (props) { return props.margin || '0px 25px 0px 0px'; }, function (_a) {
    var customcss = _a.customcss;
    return customcss;
});
var LinkPublic = styled__default["default"](framerMotion.motion.li)(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  cursor: pointer;\n  position: relative;\n  width: 100%;\n  justify-content: space-between;\n  :hover {\n    width: 100%;\n    background-color: #f1576c;\n    a {\n      color: #1d1d1d;\n    }\n  }\n\n  ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  cursor: pointer;\n  position: relative;\n  width: 100%;\n  justify-content: space-between;\n  :hover {\n    width: 100%;\n    background-color: #f1576c;\n    a {\n      color: #1d1d1d;\n    }\n  }\n\n  ", ";\n"])), function (_a) {
    var customcss = _a.customcss;
    return customcss;
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

exports.ContainerLinkStyled = ContainerLinkStyled;
exports.LinkPublic = LinkPublic;
exports.LinkStyled = LinkStyled;
//# sourceMappingURL=style.js.map
