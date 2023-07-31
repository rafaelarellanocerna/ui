'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var style = require('./style.js');

var ChatOtherMessage = function (props) {
    var imagen = props.imagen, name = props.name, background = props.background, dateMessage = props.dateMessage, content = props.content, borderRadius = props.borderRadius, componentsProps = props.componentsProps, messageOptions = props.messageOptions;
    return (jsxRuntime.jsxs(style.MessageContainer, tslib.__assign({}, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.wrapperProps, { children: [jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("img", { src: imagen, alt: "img profile" }), jsxRuntime.jsx(style.Triangle, { background: background }), jsxRuntime.jsxs(style.Message, tslib.__assign({ borderRadius: borderRadius, background: background }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.messageProps, { children: [jsxRuntime.jsxs("section", { children: [jsxRuntime.jsx("span", { children: name }), jsxRuntime.jsx("div", { children: messageOptions })] }), jsxRuntime.jsx("div", { dangerouslySetInnerHTML: {
                                    __html: content,
                                } })] }))] }), jsxRuntime.jsx(style.DateofMessage, tslib.__assign({ color: background }, { children: dateMessage }))] })));
};

exports.ChatOtherMessage = ChatOtherMessage;
exports["default"] = ChatOtherMessage;
//# sourceMappingURL=OtherMessage.js.map
