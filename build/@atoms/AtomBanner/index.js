'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
var index$1 = require('../AtomText/index.js');
var index = require('../AtomWrapper/index.js');

var AtomBanner = function (props) {
    var title = props.title, description = props.description, componentsProps = props.componentsProps, children = props.children;
    return (jsxRuntime.jsx(index, tslib.__assign({ backgroundColor: "#f5f5f5", maxWidth: "100%", alignItems: "center", customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n        @media only screen and (max-width: 980px) {\n          padding: 40px 30px;\n        }\n      "], ["\n        @media only screen and (max-width: 980px) {\n          padding: 40px 30px;\n        }\n      "]))) }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.containerProps, { children: jsxRuntime.jsxs(index, tslib.__assign({ maxWidth: "1440px", alignItems: "flex-start", padding: "50px 90px", customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n          @media only screen and (max-width: 980px) {\n            align-items: center;\n            padding: 0px 0px;\n          }\n        "], ["\n          @media only screen and (max-width: 980px) {\n            align-items: center;\n            padding: 0px 0px;\n          }\n        "]))) }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.wrapperProps, { children: [title && (jsxRuntime.jsx(index$1, tslib.__assign({ fontSize: "38px", color: "white", align: "center", fontWeight: 500, as: "h1", customCSS: react.css(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n              @media only screen and (max-width: 520px) {\n                font-size: 36px;\n              }\n            "], ["\n              @media only screen and (max-width: 520px) {\n                font-size: 36px;\n              }\n            "]))) }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.titleProps, { dangerouslySetInnerHTML: {
                        __html: title,
                    } }))), description && (jsxRuntime.jsx(index$1, tslib.__assign({ fontSize: "20px", color: "white", align: "center", fontWeight: 500, as: "h1", padding: "5px 0px", customCSS: react.css(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n              @media only screen and (max-width: 520px) {\n                font-size: 18px;\n              }\n            "], ["\n              @media only screen and (max-width: 520px) {\n                font-size: 18px;\n              }\n            "]))) }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.descriptionProps, { children: description }))), children] })) })));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

module.exports = AtomBanner;
//# sourceMappingURL=index.js.map
