'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
var index$2 = require('../../@atoms/AtomText/index.js');
require('../../@atoms/AtomWrapper/style.js');
var index = require('../../@atoms/AtomButton/index.js');
require('../../@atoms/AtomCarruosell/index.js');
require('../../@atoms/AtomCartShop/index.js');
require('next/image');
require('../../@atoms/AtomImage/style.js');
var index$1 = require('../../@atoms/AtomIcon/index.js');
require('../../@atoms/AtomContainer/style.js');
var React = require('react');
var index$3 = require('../../@atoms/AtomLink/index.js');
require('../../@atoms/AtomDropdownSidebar/admin/style.js');
require('../../@atoms/AtomDropdownSidebar/default/style.js');
require('../../@atoms/AtomDropdownSidebar/links/style.js');
require('next/router');
require('lodash');
require('../../@atoms/AtomInput/style.js');
require('uuid');
var reactRedux = require('react-redux');
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
require('../Header/style.js');
require('../../@types/schemas.js');

var SidebarRecursive = function (_a) {
    var data = _a.data, _b = _a.level, level = _b === void 0 ? 0 : _b, _c = _a.isOpen, isOpen = _c === void 0 ? false : _c;
    var sideBar = reactRedux.useSelector(function (state) { return state.sideBar; });
    var _d = tslib.__read(React.useState(data === null || data === void 0 ? void 0 : data.map(function (item) { return ({
        id: item.id,
        isOpen: false,
    }); })), 2), showSubLinks = _d[0], setShowSubLinks = _d[1];
    React.useEffect(function () {
        setShowSubLinks(data === null || data === void 0 ? void 0 : data.map(function (item) { return ({
            id: item.id,
            isOpen: false,
        }); }));
    }, [data]);
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: data === null || data === void 0 ? void 0 : data.map(function (subField, subFieldIndex) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            return (jsxRuntime.jsxs(React.Fragment, { children: [subField.type === 'dropdown' ? (jsxRuntime.jsxs(index, tslib.__assign({ onClick: function () {
                            return setShowSubLinks(showSubLinks === null || showSubLinks === void 0 ? void 0 : showSubLinks.map(function (item, index) {
                                return index === subFieldIndex
                                    ? tslib.__assign(tslib.__assign({}, item), { isOpen: !item.isOpen }) : tslib.__assign(tslib.__assign({}, item), { isOpen: false });
                            }));
                        }, customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n                display: flex;\n                width: 100%;\n                align-items: center;\n                justify-content: ", ";\n                flex-direction: row;\n                padding: ", ";\n                padding-left: ", ";\n                cursor: pointer;\n                border-radius: 0px;\n                background-color: ", ";\n                span {\n                  cursor: pointer;\n                  color: ", ";\n                }\n                :hover {\n                  cursor: pointer;\n                  background-color: ", ";\n                  span {\n                    color: white;\n                  }\n                  svg {\n                    path {\n                      fill: white !important;\n                      stroke: white !important;\n                    }\n                  }\n                }\n                transition: all 0.2s ease-in-out;\n              "], ["\n                display: flex;\n                width: 100%;\n                align-items: center;\n                justify-content: ", ";\n                flex-direction: row;\n                padding: ", ";\n                padding-left: ", ";\n                cursor: pointer;\n                border-radius: 0px;\n                background-color: ", ";\n                span {\n                  cursor: pointer;\n                  color: ", ";\n                }\n                :hover {\n                  cursor: pointer;\n                  background-color: ", ";\n                  span {\n                    color: white;\n                  }\n                  svg {\n                    path {\n                      fill: white !important;\n                      stroke: white !important;\n                    }\n                  }\n                }\n                transition: all 0.2s ease-in-out;\n              "])), sideBar ? "flex-start" : "center", sideBar ? "15px 30px" : "15px 0px", sideBar
                            ? "".concat((sideBar ? 30 : 0) + level * 10, "px")
                            : "0px", isOpen ||
                            ((_a = showSubLinks === null || showSubLinks === void 0 ? void 0 : showSubLinks.find(function (_, index) { return index === subFieldIndex; })) === null || _a === void 0 ? void 0 : _a.isOpen)
                            ? '#f1576c'
                            : 'transparent', isOpen ||
                            ((_b = showSubLinks === null || showSubLinks === void 0 ? void 0 : showSubLinks.find(function (_, index) { return index === subFieldIndex; })) === null || _b === void 0 ? void 0 : _b.isOpen)
                            ? 'white'
                            : '#656a69', isOpen ||
                            ((_c = showSubLinks === null || showSubLinks === void 0 ? void 0 : showSubLinks.find(function (_, index) { return index === subFieldIndex; })) === null || _c === void 0 ? void 0 : _c.isOpen)
                            ? '#da4a5d'
                            : '#f1576c') }, { children: [(subField === null || subField === void 0 ? void 0 : subField.icon) ? (jsxRuntime.jsx(index$1, { height: "20px", width: "20px", icon: subField.icon })) : (jsxRuntime.jsx(index$2, tslib.__assign({ fontSize: "14px", color: "#656a69", fontWeight: "bold", cursor: "pointer" }, { children: subField.label.slice(0, 2).toUpperCase() }))), sideBar && (jsxRuntime.jsx(index$2, tslib.__assign({ maxWidth: "max-content", margin: "0px 0px 0px 25px", color: "#656a69", fontWeight: 700, fontSize: "14px", customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n                    display: flex;\n                    @media (max-width: 920px) {\n                      display: none;\n                    }\n                  "], ["\n                    display: flex;\n                    @media (max-width: 920px) {\n                      display: none;\n                    }\n                  "]))) }, { children: subField.label }))), jsxRuntime.jsx(index$1, { customCSS: react.css(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n                  margin-left: 15px;\n                  transform: ", ";\n                  svg {\n                    g {\n                      g {\n                        path {\n                          fill: ", " !important;\n                          stroke: ", " !important;\n                        }\n                      }\n                    }\n                  }\n                "], ["\n                  margin-left: 15px;\n                  transform: ", ";\n                  svg {\n                    g {\n                      g {\n                        path {\n                          fill: ", " !important;\n                          stroke: ", " !important;\n                        }\n                      }\n                    }\n                  }\n                "])), ((_d = showSubLinks === null || showSubLinks === void 0 ? void 0 : showSubLinks.find(function (_, index) { return index === subFieldIndex; })) === null || _d === void 0 ? void 0 : _d.isOpen)
                                    ? "rotate(180deg)"
                                    : "rotate(0deg)", isOpen ||
                                    ((_e = showSubLinks === null || showSubLinks === void 0 ? void 0 : showSubLinks.find(function (_, index) { return index === subFieldIndex; })) === null || _e === void 0 ? void 0 : _e.isOpen)
                                    ? 'white'
                                    : '#656a69', isOpen ||
                                    ((_f = showSubLinks === null || showSubLinks === void 0 ? void 0 : showSubLinks.find(function (_, index) { return index === subFieldIndex; })) === null || _f === void 0 ? void 0 : _f.isOpen)
                                    ? 'white'
                                    : '#656a69'), width: sideBar ? "14px" : "10px", height: sideBar ? "14px" : "10px", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-commons/frontend-library/icons/arrow-down-3101.svg" })] }))) : (jsxRuntime.jsxs(index$3, tslib.__assign({ link: subField.link, customCSS: react.css(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n                display: flex;\n                width: 100%;\n                align-items: center;\n                justify-content: ", ";\n                flex-direction: row;\n                padding: ", ";\n                padding-left: ", ";\n                border-radius: 0px;\n                background-color: ", ";\n                span {\n                  cursor: pointer;\n                  color: ", ";\n                }\n                svg {\n                  g {\n                    path {\n                      fill: #f1576c !important;\n                      stroke: #f1576c !important;\n                    }\n                  }\n                }\n                :hover {\n                  background-color: ", ";\n                  span {\n                    cursor: pointer;\n                    color: white;\n                  }\n                  svg {\n                    g {\n                      path {\n                        fill: white !important;\n                        stroke: white !important;\n                      }\n                    }\n                  }\n                }\n                transition: all 0.2s ease-in-out;\n              "], ["\n                display: flex;\n                width: 100%;\n                align-items: center;\n                justify-content: ", ";\n                flex-direction: row;\n                padding: ", ";\n                padding-left: ", ";\n                border-radius: 0px;\n                background-color: ", ";\n                span {\n                  cursor: pointer;\n                  color: ", ";\n                }\n                svg {\n                  g {\n                    path {\n                      fill: #f1576c !important;\n                      stroke: #f1576c !important;\n                    }\n                  }\n                }\n                :hover {\n                  background-color: ", ";\n                  span {\n                    cursor: pointer;\n                    color: white;\n                  }\n                  svg {\n                    g {\n                      path {\n                        fill: white !important;\n                        stroke: white !important;\n                      }\n                    }\n                  }\n                }\n                transition: all 0.2s ease-in-out;\n              "])), sideBar ? "flex-start" : "center", sideBar ? "15px 30px" : "15px 0px", sideBar
                            ? "".concat((sideBar ? 30 : 0) + level * 10, "px")
                            : "0px", isOpen ||
                            ((_g = showSubLinks === null || showSubLinks === void 0 ? void 0 : showSubLinks.find(function (_, index) { return index === subFieldIndex; })) === null || _g === void 0 ? void 0 : _g.isOpen)
                            ? '#f1576c'
                            : 'transparent', isOpen ||
                            ((_h = showSubLinks === null || showSubLinks === void 0 ? void 0 : showSubLinks.find(function (_, index) { return index === subFieldIndex; })) === null || _h === void 0 ? void 0 : _h.isOpen)
                            ? 'white'
                            : '#656a69', isOpen ||
                            ((_j = showSubLinks === null || showSubLinks === void 0 ? void 0 : showSubLinks.find(function (_, index) { return index === subFieldIndex; })) === null || _j === void 0 ? void 0 : _j.isOpen)
                            ? '#da4a5d'
                            : '#f1576c') }, { children: [(subField === null || subField === void 0 ? void 0 : subField.icon) ? (jsxRuntime.jsx(index$1, { height: "20px", width: "20px", icon: subField.icon })) : (jsxRuntime.jsx(index$2, tslib.__assign({ fontSize: "14px", color: "#656a69", fontWeight: "bold", cursor: "pointer" }, { children: subField.label.slice(0, 2).toUpperCase() }))), sideBar && (jsxRuntime.jsx(index$2, tslib.__assign({ maxWidth: "max-content", margin: "0px 0px 0px 25px", color: "#656a69", fontWeight: 700, fontSize: "14px", customCSS: react.css(templateObject_5 || (templateObject_5 = tslib.__makeTemplateObject(["\n                    display: flex;\n                    @media (max-width: 920px) {\n                      display: none;\n                    }\n                  "], ["\n                    display: flex;\n                    @media (max-width: 920px) {\n                      display: none;\n                    }\n                  "]))) }, { children: subField.label })))] }))), ((_k = showSubLinks === null || showSubLinks === void 0 ? void 0 : showSubLinks.find(function (_, index) { return index === subFieldIndex; })) === null || _k === void 0 ? void 0 : _k.isOpen) && (jsxRuntime.jsx(SidebarRecursive, { isOpen: (_l = showSubLinks === null || showSubLinks === void 0 ? void 0 : showSubLinks.find(function (_, index) { return index === subFieldIndex; })) === null || _l === void 0 ? void 0 : _l.isOpen, data: subField.subFields, level: level + 1 }))] }, subField.id));
        }) }));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

module.exports = SidebarRecursive;
//# sourceMappingURL=SidebarRecursive.js.map
