'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
var styled = require('./styled.js');
var index = require('../AtomLoader/index.js');

var Animation = {
    whileHover: { scale: 1.02, transition: { duration: 0.3 } },
    whileTap: { scale: 0.98, opacity: 0.8 },
};
var AtomButton = function (props) {
    var children = props.children, disabled = props.disabled, refObject = props.refObject, loading = props.loading;
    return (jsxRuntime.jsx(styled.ButtonStyled, tslib.__assign({ ref: refObject }, (disabled ? {} : Animation), props, { children: loading ? (jsxRuntime.jsx(index, { isLoading: true, type: "small", colorLoading: "white", widthLoader: "2px", customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n            width: 100%;\n            .lds-ring {\n              width: 15px;\n              height: 15px;\n              div {\n                margin: 1px 2px;\n                width: 14px;\n                height: 14px;\n              }\n            }\n          "], ["\n            width: 100%;\n            .lds-ring {\n              width: 15px;\n              height: 15px;\n              div {\n                margin: 1px 2px;\n                width: 14px;\n                height: 14px;\n              }\n            }\n          "]))) })) : (jsxRuntime.jsx(jsxRuntime.Fragment, { children: children || "Text Default" })) })));
};
var templateObject_1;

module.exports = AtomButton;
//# sourceMappingURL=index.js.map
