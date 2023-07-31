'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
var index$5 = require('../../@atoms/AtomText/index.js');
var index$3 = require('../../@atoms/AtomWrapper/index.js');
var index$4 = require('../../@atoms/AtomButton/index.js');
require('../../@atoms/AtomCarruosell/index.js');
require('../../@atoms/AtomCartShop/index.js');
require('next/image');
require('../../@atoms/AtomImage/style.js');
var index$1 = require('../../@atoms/AtomIcon/index.js');
require('../../@atoms/AtomContainer/style.js');
var index$2 = require('../../@atoms/AtomDropdown/index.js');
var index = require('../../@atoms/AtomLink/index.js');
var React = require('react');
require('../../@atoms/AtomDropdownSidebar/admin/style.js');
require('../../@atoms/AtomDropdownSidebar/default/style.js');
require('../../@atoms/AtomDropdownSidebar/links/style.js');
require('next/router');
require('lodash');
require('../../@atoms/AtomInput/style.js');
require('uuid');
require('react-redux');
require('../../@atoms/AtomSeparator/style.js');
require('../../@utils/uploadImage.js');
require('graphql-request');
require('../../src/config/index.js');
require('framer-motion');
require('../../@atoms/AtomImageEditor/pintura/pintura.js');
require('../../@atoms/AtomImageEditor/react-pintura/PinturaEditor.js');
require('../../@atoms/AtomImageEditor/react-pintura/PinturaEditorModal.js');
require('../../@atoms/AtomImageEditor/react-pintura/PinturaEditorOverlay.js');
require('../../@atoms/AtomImageEditor/styled.js');
require('../../@atoms/AtomInput/inputWithPagination.js');
require('../../@atoms/AtomLoader/style.js');
require('../../@atoms/AtomMaps/style.js');
require('../../@atoms/AtomNotification/styles.js');
require('../../@atoms/AtomProgressBar/component/style/index.js');
require('next/head');
require('../../@atoms/AtomTable/style.js');
require('../../@atoms/AtomTableQuery/css/button.js');
require('../../@atoms/AtomTableQuery/css/inputs.js');
require('../../@atoms/AtomTableQuery/styled.js');
require('../../@atoms/AtomTableQuery/apollo/query/Products.js');
require('../../@atoms/AtomTextEditor/index.js');
require('../../@atoms/AtomTextEditorHermer/index.js');
require('../../@molecules/MoleculePlayer/style.js');
require('../../@hooks/usePermissions/index.js');
require('../../@hooks/useUploadFile/index.js');
require('../Alert/Context.js');
require('../Button/downloadFile.js');
require('../Chat/style.js');
var style = require('./style.js');
require('../../@types/schemas.js');

var HeaderLink = function (props) {
    var linkProps = props.linkProps, textProps = props.textProps, links = props.links, iconProps = props.iconProps, buttonProps = props.buttonProps, wrapperProps = props.wrapperProps, linksLength = props.linksLength;
    var _a = tslib.__read(React.useState(false), 2), treeSubFileds = _a[0], setTreeSubFileds = _a[1];
    var _b = tslib.__read(React.useState(false), 2), showMoreLinks = _b[0], setShowMoreLikns = _b[1];
    var _c = tslib.__read(React.useState(0), 2), showTreeSubField = _c[0], setShowTreeSubField = _c[1];
    return (jsxRuntime.jsx(style.ContainerLinkStyled, { children: links.length > (linksLength || 3) ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [links
                    .filter(function (_, index) { return index < (linksLength || 3); })
                    .map(function (link, index$3) {
                    return (link === null || link === void 0 ? void 0 : link.type) === 'dropdown' ? (jsxRuntime.jsxs(style.LinkStyled, tslib.__assign({ onHoverStart: function () {
                            setTreeSubFileds(true);
                            setShowTreeSubField(index$3);
                        }, onHoverEnd: function () { return setTreeSubFileds(false); } }, { children: [jsxRuntime.jsxs(index, tslib.__assign({ fontSize: "12px" }, link, { color: "#1d1d1d", fontWeight: 600, cursor: "pointer", customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n                      display: flex;\n                      align-items: center;\n                      justify-content: center;\n                      ", ";\n                    "], ["\n                      display: flex;\n                      align-items: center;\n                      justify-content: center;\n                      ", ";\n                    "])), textProps === null || textProps === void 0 ? void 0 : textProps.customCSS) }, textProps, { children: [link.label, jsxRuntime.jsx(index$1, tslib.__assign({ height: "10px", width: "10px", color: "#6c6c6c", customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n                        margin: 0px 0px 0px 10px;\n                        ", ";\n                      "], ["\n                        margin: 0px 0px 0px 10px;\n                        ", ";\n                      "])), iconProps === null || iconProps === void 0 ? void 0 : iconProps.customCSS) }, iconProps, { icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-commons/frontend-library/icons/arrow-down-3101.svg" }))] })), treeSubFileds && showTreeSubField === index$3 && (jsxRuntime.jsx(index$2, { data: link === null || link === void 0 ? void 0 : link.subFields }))] }), link.id)) : (jsxRuntime.jsx(style.LinkStyled, { children: jsxRuntime.jsx(index, tslib.__assign({ fontSize: "12px", as: "a" }, link, { color: "#1d1d1d", fontWeight: 600 }, linkProps, { children: link.label })) }, link.id));
                }), links.length >= (linksLength || 3) && (jsxRuntime.jsxs(index$3, tslib.__assign({ as: "li", position: "relative", flexDirection: "row", width: "max-content", height: "max-content", onHoverEnd: function () { return setShowMoreLikns(false); }, onHoverStart: function () { return setShowMoreLikns(true); } }, wrapperProps, { children: [jsxRuntime.jsxs(index$4, tslib.__assign({ borderRadius: "100%", width: "18px", height: "18px", padding: "0", customCSS: react.css(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n                  display: flex;\n                  background-color: transparent;\n                  align-items: center;\n                  justify-content: center;\n                  fill: #fff;\n                  stroke: #fff;\n                  :hover {\n                    background-color: #dadada;\n                  }\n\n                  transition: background-color 0.3s ease;\n                  ", ";\n                "], ["\n                  display: flex;\n                  background-color: transparent;\n                  align-items: center;\n                  justify-content: center;\n                  fill: #fff;\n                  stroke: #fff;\n                  :hover {\n                    background-color: #dadada;\n                  }\n\n                  transition: background-color 0.3s ease;\n                  ", ";\n                "])), buttonProps === null || buttonProps === void 0 ? void 0 : buttonProps.customCSS) }, buttonProps, { children: [jsxRuntime.jsx(index$1, tslib.__assign({ width: "11px", height: "11px", color: "#1d1d1b", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/PFS-0001/outline/three-dots-svgrepo-com.svg" }, iconProps)), jsxRuntime.jsx(index$5, tslib.__assign({}, textProps, { customCSS: react.css(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n                    width: 0px;\n                    height: 0px;\n                    opacity: 0;\n                    ", ";\n                  "], ["\n                    width: 0px;\n                    height: 0px;\n                    opacity: 0;\n                    ", ";\n                  "])), textProps === null || textProps === void 0 ? void 0 : textProps.customCSS) }, { children: "MENU" }))] })), showMoreLinks && (jsxRuntime.jsx(index$2, { data: links.filter(function (_, index) { return index >= (linksLength || 3); }) }))] })))] })) : (jsxRuntime.jsx(jsxRuntime.Fragment, { children: links.map(function (link, index$3) {
                return (link === null || link === void 0 ? void 0 : link.type) === 'dropdown' ? (jsxRuntime.jsxs(style.LinkStyled, tslib.__assign({ onHoverStart: function () {
                        setTreeSubFileds(true);
                        setShowTreeSubField(index$3);
                    }, onHoverEnd: function () { return setTreeSubFileds(false); } }, { children: [jsxRuntime.jsxs(index, tslib.__assign({ fontSize: "12px" }, link, { color: "#1d1d1d", fontWeight: 600, cursor: "pointer", customCSS: react.css(templateObject_5 || (templateObject_5 = tslib.__makeTemplateObject(["\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                    ", ";\n                  "], ["\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                    ", ";\n                  "])), textProps === null || textProps === void 0 ? void 0 : textProps.customCSS) }, textProps, { children: [link.label, jsxRuntime.jsx(index$1, tslib.__assign({ height: "10px", width: "10px", color: "#6c6c6c", customCSS: react.css(templateObject_6 || (templateObject_6 = tslib.__makeTemplateObject(["\n                      margin: 0px 0px 0px 10px;\n                      ", ";\n                    "], ["\n                      margin: 0px 0px 0px 10px;\n                      ", ";\n                    "])), iconProps === null || iconProps === void 0 ? void 0 : iconProps.customCSS) }, iconProps, { icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-commons/frontend-library/icons/arrow-down-3101.svg" }))] })), treeSubFileds && showTreeSubField === index$3 && (jsxRuntime.jsx(index$2, { data: link === null || link === void 0 ? void 0 : link.subFields }))] }), link.id)) : (jsxRuntime.jsx(style.LinkStyled, { children: jsxRuntime.jsx(index, tslib.__assign({ fontSize: "12px", as: "a" }, link, { color: "#1d1d1d", fontWeight: 600 }, linkProps, { children: link.label })) }, link.id));
            }) })) }));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

module.exports = HeaderLink;
//# sourceMappingURL=Link.js.map
