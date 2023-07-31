'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var theme = require('../../@styles/stylesglobal/theme.js');
var react = require('@emotion/react');
var index = require('../AtomButton/index.js');
var index$1 = require('../AtomImage/index.js');
var index$3 = require('../AtomText/index.js');
var index$2 = require('../AtomWrapper/index.js');
var index$4 = require('../AtomIcon/index.js');

var ContactComponent = function (props) {
    var _a, _b;
    var image = props.image, name = props.name, messageSend = props.messageSend, onClick = props.onClick, colorPrimary = props.colorPrimary, componentProps = props.componentProps;
    return (jsxRuntime.jsxs(index, tslib.__assign({ customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n        outline: none;\n        border: none;\n        cursor: pointer;\n        width: 100%;\n        height: 100px;\n        background-color: ", ";\n        border-radius: 10px;\n        display: flex;\n        align-items: center;\n        margin-bottom: 10px;\n        padding: 20px;\n        &:hover {\n          filter: drop-shadow(5px 5px 5px ", ");\n        }\n      "], ["\n        outline: none;\n        border: none;\n        cursor: pointer;\n        width: 100%;\n        height: 100px;\n        background-color: ", ";\n        border-radius: 10px;\n        display: flex;\n        align-items: center;\n        margin-bottom: 10px;\n        padding: 20px;\n        &:hover {\n          filter: drop-shadow(5px 5px 5px ", ");\n        }\n      "])), theme.color.background, colorPrimary || "gray"), onClick: onClick }, componentProps === null || componentProps === void 0 ? void 0 : componentProps.wrapperProps, { children: [jsxRuntime.jsx(index$1, tslib.__assign({ src: image ||
                    'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/MDCAO-0001/images/userDefault.avif', alt: "user avatar", customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n          width: 50px;\n          height: 50px;\n          object-fit: cover;\n          border-radius: 50%;\n          margin-right: 10px;\n        "], ["\n          width: 50px;\n          height: 50px;\n          object-fit: cover;\n          border-radius: 50%;\n          margin-right: 10px;\n        "]))) }, componentProps === null || componentProps === void 0 ? void 0 : componentProps.imageProps)), jsxRuntime.jsxs(index$2, tslib.__assign({ width: "auto", alignItems: "flex-start", customCSS: react.css(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n          h3 {\n            color: ", ";\n            button :hover & {\n              color: ", ";\n            }\n          }\n        "], ["\n          h3 {\n            color: ", ";\n            button :hover & {\n              color: ", ";\n            }\n          }\n        "])), theme.color.darkGray, theme.color.primary) }, (_a = componentProps === null || componentProps === void 0 ? void 0 : componentProps.containerMessageProps) === null || _a === void 0 ? void 0 : _a.wrapperProps, { children: [jsxRuntime.jsx(index$3, tslib.__assign({ as: "h3" }, (_b = componentProps === null || componentProps === void 0 ? void 0 : componentProps.containerMessageProps) === null || _b === void 0 ? void 0 : _b.nameProps, { children: name })), jsxRuntime.jsxs(index$2, tslib.__assign({ customCSS: react.css(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n            flex-direction: row;\n            justify-content: flex-start;\n            align-items: center;\n            p {\n              color: ", ";\n              font-size: 14px;\n            }\n          "], ["\n            flex-direction: row;\n            justify-content: flex-start;\n            align-items: center;\n            p {\n              color: ", ";\n              font-size: 14px;\n            }\n          "])), colorPrimary || 'gray') }, { children: [jsxRuntime.jsx(index$4, { width: "30px", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/icons/chat-icon.svg" }), jsxRuntime.jsx(index$3, tslib.__assign({ as: "p" }, { children: messageSend || 'Enviar mensaje' }))] }))] }))] })));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

module.exports = ContactComponent;
//# sourceMappingURL=index.js.map
