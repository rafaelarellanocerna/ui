'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
var index = require('../../AtomLoader/index.js');

var LoaderSmall = function () {
    return (jsxRuntime.jsx(index, { isLoading: true, type: "small", colorLoading: "#a5a5a5", widthLoader: "2px", customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n        width: 100%;\n        .lds-ring {\n          width: 15px;\n          height: 15px;\n          div {\n            margin: 1px 2px;\n            width: 14px;\n            height: 14px;\n          }\n        }\n      "], ["\n        width: 100%;\n        .lds-ring {\n          width: 15px;\n          height: 15px;\n          div {\n            margin: 1px 2px;\n            width: 14px;\n            height: 14px;\n          }\n        }\n      "]))) }));
};
var templateObject_1;

module.exports = LoaderSmall;
//# sourceMappingURL=index.js.map
