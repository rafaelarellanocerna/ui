'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
var index = require('../AtomContainer/index.js');
var index$1 = require('../AtomWrapper/index.js');

var AtomModal = function (props) {
    var isOpen = props.isOpen, component = props.component, componentProps = props.componentProps, key = props.key;
    return isOpen ? (jsxRuntime.jsx(index, tslib.__assign({ customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n        position: fixed;\n        width: 100vw;\n        height: 100vh;\n        left: 0;\n        top: 0;\n        background-color: #00000010;\n        backdrop-filter: blur(12px);\n        z-index: 9999;\n      "], ["\n        position: fixed;\n        width: 100vw;\n        height: 100vh;\n        left: 0;\n        top: 0;\n        background-color: #00000010;\n        backdrop-filter: blur(12px);\n        z-index: 9999;\n      "]))) }, componentProps === null || componentProps === void 0 ? void 0 : componentProps.containerProps, { children: jsxRuntime.jsx(index$1, tslib.__assign({ backgroundColor: "white", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "50%", height: "60%", borderRadius: "4px" }, componentProps === null || componentProps === void 0 ? void 0 : componentProps.wrapperProps, { children: component })) }), key)) : null;
};
var templateObject_1;

module.exports = AtomModal;
//# sourceMappingURL=index.js.map
