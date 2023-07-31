'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var styled = require('@emotion/styled');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var Wrapper = styled__default["default"].div(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: ", ";\n  justify-content: center;\n\n  .bar {\n    margin-left: ", "!important;\n    margin-right: ", "!important;\n  }\n\n  .progress {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    padding-left: 30px;\n  }\n\n  .inner-label {\n    white-space: nowrap;\n    font-weight: 600;\n  }\n"], ["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: ", ";\n  justify-content: center;\n\n  .bar {\n    margin-left: ", "!important;\n    margin-right: ", "!important;\n  }\n\n  .progress {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    padding-left: 30px;\n  }\n\n  .inner-label {\n    white-space: nowrap;\n    font-weight: 600;\n  }\n"])), function (_a) {
    var row = _a.row;
    return (row ? 'row' : 'column');
}, function (_a) {
    var row = _a.row;
    return (row ? '20px' : '0px');
}, function (_a) {
    var row = _a.row;
    return (row ? '20px' : '0px');
});
var LabelWrapper = styled__default["default"].div(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 12px;\n\n  span {\n    display: flex;\n    width: fit-content;\n    justify-content: center;\n    align-items: center;\n  }\n"], ["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 12px;\n\n  span {\n    display: flex;\n    width: fit-content;\n    justify-content: center;\n    align-items: center;\n  }\n"])));
var templateObject_1, templateObject_2;

exports.LabelWrapper = LabelWrapper;
exports.Wrapper = Wrapper;
//# sourceMappingURL=index.js.map
