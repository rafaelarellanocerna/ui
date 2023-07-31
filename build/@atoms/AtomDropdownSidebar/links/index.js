'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var index$5 = require('../../AtomButton/index.js');
var index$2 = require('../../AtomDropdown/index.js');
var index$1 = require('../../AtomIcon/index.js');
var index$3 = require('../../AtomLink/index.js');
var index = require('../../AtomText/index.js');
var index$4 = require('../../AtomWrapper/index.js');
var react = require('@emotion/react');
var React = require('react');
var style = require('./style.js');

var AtomDropdownSidebarLinks = function (props) {
    var links = props.links, _a = props.linksQuanty, linksQuanty = _a === void 0 ? 4 : _a;
    var _b = tslib.__read(React.useState(false), 2), treeSubFileds = _b[0], setTreeSubFileds = _b[1];
    var _c = tslib.__read(React.useState(false), 2), showMoreLinks = _c[0], setShowMoreLikns = _c[1];
    return (jsxRuntime.jsx(style.ContainerLinkStyled, tslib.__assign({ onHoverEnd: function () { return setTreeSubFileds(false); } }, { children: links.length > linksQuanty - 1 ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [links
                    .filter(function (_, index) { return index < linksQuanty; })
                    .map(function (link) {
                    return (link === null || link === void 0 ? void 0 : link.type) === 'dropdown' ? (jsxRuntime.jsxs(style.LinkStyled, tslib.__assign({ onHoverStart: function () { return setTreeSubFileds(true); } }, { children: [jsxRuntime.jsxs(index, tslib.__assign({ fontSize: "12px", as: "span" }, link, { color: "#6c6c6c", fontWeight: 600, cursor: "pointer", customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n                      display: flex;\n                      align-items: center;\n                      justify-content: center;\n                    "], ["\n                      display: flex;\n                      align-items: center;\n                      justify-content: center;\n                    "]))) }, { children: [link.label, jsxRuntime.jsx(index$1, { height: "10px", width: "10px", color: "#6c6c6c", customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n                        margin: 0px 0px 0px 10px;\n                      "], ["\n                        margin: 0px 0px 0px 10px;\n                      "]))), icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-commons/frontend-library/icons/arrow-down-3101.svg" })] })), treeSubFileds && jsxRuntime.jsx(index$2, { data: link === null || link === void 0 ? void 0 : link.subFields })] }), link.id)) : (jsxRuntime.jsx(style.LinkStyled, { children: jsxRuntime.jsx(index$3, tslib.__assign({ fontSize: "12px", as: "a" }, link, { color: "#6c6c6c", fontWeight: 600 }, { children: link.label })) }, link.id));
                }), links.filter(function (_, index) { return index > linksQuanty - 1; }).length > 0 && (jsxRuntime.jsxs(index$4, tslib.__assign({ as: "li", position: "relative", flexDirection: "row", width: "max-content", height: "max-content", onHoverEnd: function () { return setShowMoreLikns(false); }, onHoverStart: function () { return setShowMoreLikns(true); } }, { children: [jsxRuntime.jsxs(index$5, tslib.__assign({ borderRadius: "100%", width: "18px", height: "18px", padding: "0", customCSS: react.css(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n                  display: flex;\n                  background-color: transparent;\n                  align-items: center;\n                  justify-content: center;\n                  fill: #fff;\n                  stroke: #fff;\n                  :hover {\n                    background-color: #dadada;\n                  }\n\n                  transition: background-color 0.3s ease;\n                "], ["\n                  display: flex;\n                  background-color: transparent;\n                  align-items: center;\n                  justify-content: center;\n                  fill: #fff;\n                  stroke: #fff;\n                  :hover {\n                    background-color: #dadada;\n                  }\n\n                  transition: background-color 0.3s ease;\n                "]))) }, { children: [jsxRuntime.jsx(index$1, { width: "11px", height: "11px", color: "#1d1d1b", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/PFS-0001/outline/three-dots-svgrepo-com.svg" }), jsxRuntime.jsx(index, tslib.__assign({ customCSS: react.css(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n                    width: 0px;\n                    height: 0px;\n                    opacity: 0;\n                  "], ["\n                    width: 0px;\n                    height: 0px;\n                    opacity: 0;\n                  "]))) }, { children: "MENU" }))] })), showMoreLinks && (jsxRuntime.jsx(index$2, { data: links.filter(function (_, index) { return index > linksQuanty - 1; }) }))] })))] })) : (jsxRuntime.jsx(jsxRuntime.Fragment, { children: links.map(function (link) { return (jsxRuntime.jsx(style.LinkStyled, { children: jsxRuntime.jsx(index$3, tslib.__assign({ fontSize: "12px", as: "a" }, link, { color: "#7F7F7F", fontWeight: 600 }, { children: link.label })) }, link.id)); }) })) })));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

module.exports = AtomDropdownSidebarLinks;
//# sourceMappingURL=index.js.map
