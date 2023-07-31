'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var index = require('../../@atoms/AtomWrapper/index.js');
var react = require('@emotion/react');
var framerMotion = require('framer-motion');
var React = require('react');
var BurgerButton = require('./BurgerButton.js');
var ContainerLinksPublic = require('./ContainerLinksPublic.js');
var LinksPublic = require('./LinksPublic.js');

var Sidebar = function (props) {
    var Links = props.Links, buttonProps = props.buttonProps, children = props.children, customCSS = props.customCSS, iconProps = props.iconProps, ContainerStylesPublicLinks = props.ContainerPublicLinks;
    var _a = tslib.__read(React.useState(false), 2), isShow = _a[0], setIsShow = _a[1];
    return (jsxRuntime.jsxs(index, tslib.__assign({ customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n        width: max-content;\n        display: none;\n        @media screen and (max-width: 1200px) {\n          display: block;\n        }\n      "], ["\n        width: max-content;\n        display: none;\n        @media screen and (max-width: 1200px) {\n          display: block;\n        }\n      "]))) }, { children: [jsxRuntime.jsx(BurgerButton, { buttonProps: {
                    onClick: function () { return setIsShow(!isShow); },
                    customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n            z-index: 102;\n            ", "\n          "], ["\n            z-index: 102;\n            ", "\n          "])), buttonProps === null || buttonProps === void 0 ? void 0 : buttonProps.customCSS),
                }, iconProps: iconProps }), isShow && (jsxRuntime.jsx(index, tslib.__assign({ width: "max-content" }, { children: jsxRuntime.jsx(framerMotion.AnimatePresence, { children: jsxRuntime.jsxs(ContainerLinksPublic, tslib.__assign({}, ContainerStylesPublicLinks, { children: [jsxRuntime.jsx(LinksPublic, { data: Links, componentsProps: {
                                    linksProps: {
                                        onClick: function () {
                                            setIsShow(false);
                                        },
                                        customCSS: react.css(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n                      :hover {\n                        background: #e8e8e8;\n                      }\n                    "], ["\n                      :hover {\n                        background: #e8e8e8;\n                      }\n                    "]))),
                                    },
                                }, linkedProps: {
                                    customcss: react.css(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n                    :hover {\n                      background: #f1cece;\n                    }\n                    ", "\n                  "], ["\n                    :hover {\n                      background: #f1cece;\n                    }\n                    ", "\n                  "])), customCSS),
                                } }), children] })) }) })))] })));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

module.exports = Sidebar;
//# sourceMappingURL=Sidebar.js.map
