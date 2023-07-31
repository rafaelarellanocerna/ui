'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var styled = require('@emotion/styled');
var framerMotion = require('framer-motion');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var AtomTableContainerStyled = styled__default["default"](framerMotion.motion.main)(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
var AtomTableSectionStyled = styled__default["default"](framerMotion.motion.section)(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  overflow-x: auto;\n  ::-webkit-scrollbar {\n    width: 7px;\n    height: 7px;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  overflow-x: auto;\n  ::-webkit-scrollbar {\n    width: 7px;\n    height: 7px;\n  }\n"])));
var AtomTableStyled = styled__default["default"](framerMotion.motion.table)(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  overflow-y: hidden;\n  overflow-x: scroll;\n  font-family: 'Montserrat', sans-serif;\n  height: max-content;\n  border-radius: 4px;\n  outline: 1px solid #eeeeee;\n  color: ", ";\n  ::-webkit-scrollbar {\n    width: 7px;\n    height: 7px;\n  }\n  overflow: auto;\n  tbody {\n    min-width: 100%;\n    position: relative;\n    tr {\n      grid-template-columns: repeat(\n        ", ",\n        minmax(", ", 1fr)\n      );\n    }\n    .head {\n      position: sticky;\n      top: 0;\n      z-index: 100;\n      th {\n        font-family: 'Montserrat', sans-serif;\n        text-align: left;\n        color: #565656;\n        font-size: 14px;\n        font-weight: 700;\n        padding: 15px 30px 15px 30px;\n        span {\n          font-size: 8px;\n        }\n      }\n    }\n  }\n  ", "\n"], ["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  overflow-y: hidden;\n  overflow-x: scroll;\n  font-family: 'Montserrat', sans-serif;\n  height: max-content;\n  border-radius: 4px;\n  outline: 1px solid #eeeeee;\n  color: ", ";\n  ::-webkit-scrollbar {\n    width: 7px;\n    height: 7px;\n  }\n  overflow: auto;\n  tbody {\n    min-width: 100%;\n    position: relative;\n    tr {\n      grid-template-columns: repeat(\n        ", ",\n        minmax(", ", 1fr)\n      );\n    }\n    .head {\n      position: sticky;\n      top: 0;\n      z-index: 100;\n      th {\n        font-family: 'Montserrat', sans-serif;\n        text-align: left;\n        color: #565656;\n        font-size: 14px;\n        font-weight: 700;\n        padding: 15px 30px 15px 30px;\n        span {\n          font-size: 8px;\n        }\n      }\n    }\n  }\n  ", "\n"])), function (_a) {
    var color = _a.color;
    return color || "black";
}, function (_a) {
    var cl = _a.cl;
    return cl !== null && cl !== void 0 ? cl : 1;
}, function (_a) {
    var min = _a.min;
    return "".concat(min !== null && min !== void 0 ? min : 150, "px");
}, function (_a) {
    var customCSST = _a.customCSST;
    return customCSST;
});
var AtomTheadStyled = styled__default["default"](framerMotion.motion.thead)(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n  top: 0;\n  position: absolute;\n  display: flex;\n  width: max-content;\n  position: sticky;\n  flex-direction: column;\n  font-family: 'Montserrat', sans-serif;\n  height: fit-content;\n  text-align: center;\n  background-color: white;\n  border-bottom: 1px solid #eeeeee;\n  tr {\n    display: grid;\n    th {\n      position: -webkit-sticky;\n      position: sticky;\n      top: 0;\n      z-index: 2;\n\n      font-family: 'Montserrat', sans-serif;\n      text-align: left;\n      color: #565656;\n      font-size: 14px;\n      font-weight: 700;\n      padding: 15px 30px 15px 30px;\n      span {\n        font-size: 8px;\n      }\n    }\n  }\n  tr {\n    background-color: #ffffff;\n    transition: all 0.3s ease-in-out;\n  }\n  tr:nth-child(odd) {\n    background-color: #fbfbfb;\n  }\n  tr:hover {\n    background-color: #f0f0f0;\n  }\n"], ["\n  top: 0;\n  position: absolute;\n  display: flex;\n  width: max-content;\n  position: sticky;\n  flex-direction: column;\n  font-family: 'Montserrat', sans-serif;\n  height: fit-content;\n  text-align: center;\n  background-color: white;\n  border-bottom: 1px solid #eeeeee;\n  tr {\n    display: grid;\n    th {\n      position: -webkit-sticky;\n      position: sticky;\n      top: 0;\n      z-index: 2;\n\n      font-family: 'Montserrat', sans-serif;\n      text-align: left;\n      color: #565656;\n      font-size: 14px;\n      font-weight: 700;\n      padding: 15px 30px 15px 30px;\n      span {\n        font-size: 8px;\n      }\n    }\n  }\n  tr {\n    background-color: #ffffff;\n    transition: all 0.3s ease-in-out;\n  }\n  tr:nth-child(odd) {\n    background-color: #fbfbfb;\n  }\n  tr:hover {\n    background-color: #f0f0f0;\n  }\n"])));
var AtomTbodyStyled = styled__default["default"](framerMotion.motion.tbody)(templateObject_5 || (templateObject_5 = tslib.__makeTemplateObject(["\n  display: flex;\n  width: max-content;\n  flex-direction: column;\n\n  tr {\n    display: grid;\n    background-color: #ffffff;\n    transition: all 0.3s ease-in-out;\n  }\n  tr:nth-child(odd) {\n    background-color: #fbfbfb;\n  }\n  tr:hover {\n    background-color: #f0f0f0;\n  }\n"], ["\n  display: flex;\n  width: max-content;\n  flex-direction: column;\n\n  tr {\n    display: grid;\n    background-color: #ffffff;\n    transition: all 0.3s ease-in-out;\n  }\n  tr:nth-child(odd) {\n    background-color: #fbfbfb;\n  }\n  tr:hover {\n    background-color: #f0f0f0;\n  }\n"])));
var TRStyled = styled__default["default"](framerMotion.motion.tr)(templateObject_6 || (templateObject_6 = tslib.__makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), function (_a) {
    var customCSS = _a.customCSS;
    return customCSS;
});
var TDStyled = styled__default["default"](framerMotion.motion.td)(templateObject_7 || (templateObject_7 = tslib.__makeTemplateObject(["\n  font-family: 'Montserrat', sans-serif;\n  color: #565656;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 15px 30px;\n  text-align: left;\n  border-bottom: 1px solid #eeeeee;\n  ", ";\n"], ["\n  font-family: 'Montserrat', sans-serif;\n  color: #565656;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 15px 30px;\n  text-align: left;\n  border-bottom: 1px solid #eeeeee;\n  ", ";\n"])), function (_a) {
    var customCSS = _a.customCSS;
    return customCSS;
});
var AtomTheaderStyled = styled__default["default"](framerMotion.motion.header)(templateObject_8 || (templateObject_8 = tslib.__makeTemplateObject(["\n  font-family: 'Montserrat', sans-serif;\n  color: #565656;\n  font-size: 14px;\n  padding: 15px 0px;\n  font-weight: 700;\n  text-align: left;\n  border-bottom: 1px solid #eeeeee;\n"], ["\n  font-family: 'Montserrat', sans-serif;\n  color: #565656;\n  font-size: 14px;\n  padding: 15px 0px;\n  font-weight: 700;\n  text-align: left;\n  border-bottom: 1px solid #eeeeee;\n"])));
var AtomTfooterStyled = styled__default["default"](framerMotion.motion.footer)(templateObject_9 || (templateObject_9 = tslib.__makeTemplateObject(["\n  font-family: 'Montserrat', sans-serif;\n  color: #565656;\n  font-size: 14px;\n  padding: 15px 30px;\n  font-weight: 700;\n  text-align: left;\n  border-bottom: 1px solid #eeeeee;\n"], ["\n  font-family: 'Montserrat', sans-serif;\n  color: #565656;\n  font-size: 14px;\n  padding: 15px 30px;\n  font-weight: 700;\n  text-align: left;\n  border-bottom: 1px solid #eeeeee;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;

exports.AtomTableContainerStyled = AtomTableContainerStyled;
exports.AtomTableSectionStyled = AtomTableSectionStyled;
exports.AtomTableStyled = AtomTableStyled;
exports.AtomTbodyStyled = AtomTbodyStyled;
exports.AtomTfooterStyled = AtomTfooterStyled;
exports.AtomTheadStyled = AtomTheadStyled;
exports.AtomTheaderStyled = AtomTheaderStyled;
exports.TDStyled = TDStyled;
exports.TRStyled = TRStyled;
//# sourceMappingURL=styled.js.map
