'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var style = require('./style.js');

var ChatMyMessage = function (props) {
    var imagen = props.imagen, content = props.content, dateMessage = props.dateMessage, background = props.background, borderRadius = props.borderRadius, componentsProps = props.componentsProps, messageOptions = props.messageOptions;
    return (jsxRuntime.jsxs(style.MessageContainer, tslib.__assign({}, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.wrapperProps, { children: [jsxRuntime.jsxs("div", { children: [jsxRuntime.jsxs(style.Message, tslib.__assign({ borderRadius: borderRadius, background: background }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.messageProps, { children: [jsxRuntime.jsxs("section", { children: [jsxRuntime.jsx("div", { children: messageOptions }), jsxRuntime.jsx("span", { children: "T\u00FA" })] }), jsxRuntime.jsx("div", { dangerouslySetInnerHTML: {
                                    __html: content,
                                } })] })), jsxRuntime.jsx(style.MyMessageTriangle, tslib.__assign({ background: background }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.triangleProps)), jsxRuntime.jsx("img", { src: imagen, alt: "img profile" })] }), jsxRuntime.jsx(style.DateofMessage, tslib.__assign({ color: background }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.textProps, { children: dateMessage }))] })));
};

exports.ChatMyMessage = ChatMyMessage;
exports["default"] = ChatMyMessage;
//# sourceMappingURL=MyMessage.js.map
