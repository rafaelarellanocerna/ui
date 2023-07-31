'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
var reactRedux = require('react-redux');
var React = require('react');
var index$2 = require('../../../@atoms/AtomText/index.js');
var index = require('../../../@atoms/AtomWrapper/index.js');
var index$3 = require('../../../@atoms/AtomButton/index.js');
require('../../../@atoms/AtomCarruosell/index.js');
require('../../../@atoms/AtomCartShop/index.js');
var index$1 = require('../../../@atoms/AtomImage/index.js');
var index$4 = require('../../../@atoms/AtomIcon/index.js');
require('../../../@atoms/AtomContainer/style.js');
var index$5 = require('../../../@atoms/AtomLink/index.js');
require('../../../@atoms/AtomDropdownSidebar/admin/style.js');
require('../../../@atoms/AtomDropdownSidebar/default/style.js');
require('../../../@atoms/AtomDropdownSidebar/links/style.js');
require('next/router');
require('lodash');
require('../../../@atoms/AtomInput/style.js');
require('uuid');
require('../../../@atoms/AtomSeparator/style.js');
require('../../../@utils/uploadImage.js');
require('graphql-request');
require('../../../src/config/index.js');
require('framer-motion');
require('../../../@atoms/AtomImageEditor/pintura/pintura.js');
require('../../../@atoms/AtomImageEditor/react-pintura/PinturaEditor.js');
require('../../../@atoms/AtomImageEditor/react-pintura/PinturaEditorModal.js');
require('../../../@atoms/AtomImageEditor/react-pintura/PinturaEditorOverlay.js');
require('../../../@atoms/AtomImageEditor/styled.js');
require('../../../@atoms/AtomInput/inputWithPagination.js');
require('../../../@atoms/AtomLoader/style.js');
require('../../../@atoms/AtomMaps/style.js');
require('../../../@atoms/AtomNotification/styles.js');
require('../../../@atoms/AtomProgressBar/component/style/index.js');
require('next/head');
require('../../../@atoms/AtomTable/style.js');
require('../../../@atoms/AtomTableQuery/css/button.js');
require('../../../@atoms/AtomTableQuery/css/inputs.js');
require('../../../@atoms/AtomTableQuery/styled.js');
require('../../../@atoms/AtomTableQuery/apollo/query/Products.js');
require('../../../@atoms/AtomTextEditor/index.js');
require('../../../@atoms/AtomTextEditorHermer/index.js');
require('../../../@molecules/MoleculePlayer/style.js');
var sideBar = require('../../../@redux/actions/sideBar.js');
require('../../../@hooks/usePermissions/index.js');
require('../../../@hooks/useUploadFile/index.js');
require('../../../@components/Alert/Context.js');
require('../../../@components/Button/downloadFile.js');
require('../../../@components/Chat/style.js');
require('../../../@components/Header/style.js');
require('../../../@types/schemas.js');

var OrganismAdminSidebar = function (props) {
    var _a, _b, _c;
    var logo = props.logo, links = props.links, customIcon = props.customIcon, customLink = props.customLink, componentsProps = props.componentsProps, title = props.title, children = props.children, disableSidebar = props.disableSidebar;
    var sideBar$1 = reactRedux.useSelector(function (state) { return state.sideBar; });
    var dispatch = reactRedux.useDispatch();
    var _d = tslib.__read(React.useState(true), 2), showButtonClose = _d[0], setShowButtonClose = _d[1];
    React.useEffect(function () {
        var updateSize = function () {
            var width = window.innerWidth;
            if (width < 920 && !disableSidebar) {
                dispatch(sideBar.CloseSidebar());
                setShowButtonClose(false);
            }
            else {
                setShowButtonClose(true);
            }
        };
        window.addEventListener("resize", updateSize, true);
        updateSize();
        return function () { return window.removeEventListener("resize", updateSize, true); };
    });
    return (jsxRuntime.jsx(index, tslib.__assign({ width: sideBar$1 ? "320px" : "80px", height: "100vh", position: "fixed", zIndex: "10", customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n        left: 0;\n        top: 0;\n      "], ["\n        left: 0;\n        top: 0;\n      "]))) }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.containerProps, { children: jsxRuntime.jsxs(index, tslib.__assign({ backgroundColor: "#4d4d4d", width: "100%", height: "100%", justifyContent: "flex-start", alignItems: "center", position: "relative" }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.wrapperProps, { children: [logo && (jsxRuntime.jsx(index, tslib.__assign({ customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n              width: 100%;\n              height: 170px;\n              align-items: center;\n              justify-content: center;\n            "], ["\n              width: 100%;\n              height: 170px;\n              align-items: center;\n              justify-content: center;\n            "]))) }, { children: sideBar$1 ? (jsxRuntime.jsx(jsxRuntime.Fragment, { children: (logo === null || logo === void 0 ? void 0 : logo.logo) && (jsxRuntime.jsx(index$1, { width: "60%", height: "80px", customCSS: react.css(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n                      img {\n                        object-fit: contain;\n                      }\n                    "], ["\n                      img {\n                        object-fit: contain;\n                      }\n                    "]))), src: "".concat(logo === null || logo === void 0 ? void 0 : logo.logo), alt: "SIDEBARLOGO" })) })) : (jsxRuntime.jsx(jsxRuntime.Fragment, { children: (logo === null || logo === void 0 ? void 0 : logo.logoMini) && (jsxRuntime.jsx(index$1, { width: "60%", height: "80px", customCSS: react.css(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n                      img {\n                        object-fit: contain;\n                      }\n                    "], ["\n                      img {\n                        object-fit: contain;\n                      }\n                    "]))), src: "".concat(logo === null || logo === void 0 ? void 0 : logo.logoMini), alt: "SIDEBARLOGO" })) })) }))), jsxRuntime.jsxs(index, tslib.__assign({ height: "calc(100vh - 170px)", alignItems: "center", justifyContent: "flex-start", customCSS: react.css(templateObject_5 || (templateObject_5 = tslib.__makeTemplateObject(["\n            overflow-x: hidden;\n            overflow-y: scroll;\n          "], ["\n            overflow-x: hidden;\n            overflow-y: scroll;\n          "]))) }, (_a = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.sidebarProps) === null || _a === void 0 ? void 0 : _a.containerProps, { children: [title && jsxRuntime.jsx(index$2, tslib.__assign({}, title === null || title === void 0 ? void 0 : title.textProps, { children: title === null || title === void 0 ? void 0 : title.title })), jsxRuntime.jsx(index, tslib.__assign({ height: "max-content", alignItems: "center", justifyContent: "flex-start" }, (_b = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.sidebarProps) === null || _b === void 0 ? void 0 : _b.wrapperProps, { children: jsxRuntime.jsx(RecursiveSidebarLinks, tslib.__assign({ links: links, customIcon: customIcon, customLink: customLink }, (_c = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.sidebarProps) === null || _c === void 0 ? void 0 : _c.sidebarProps)) })), children] })), showButtonClose && !disableSidebar && (jsxRuntime.jsx(index$3, tslib.__assign({ onClick: function () { return dispatch(sideBar.ToggleSidebar()); }, customCSS: react.css(templateObject_6 || (templateObject_6 = tslib.__makeTemplateObject(["\n              position: absolute;\n              display: flex;\n              padding: 0px;\n              justify-content: center;\n              align-items: center;\n              background-color: ", ";\n              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);\n              width: 35px;\n              height: 35px;\n              border-radius: 50%;\n              right: -15px;\n              top: 130px;\n            "], ["\n              position: absolute;\n              display: flex;\n              padding: 0px;\n              justify-content: center;\n              align-items: center;\n              background-color: ", ";\n              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);\n              width: 35px;\n              height: 35px;\n              border-radius: 50%;\n              right: -15px;\n              top: 130px;\n            "])), sideBar$1 ? "white" : "#f1576c") }, { children: jsxRuntime.jsx(index$4, { customCSS: react.css(templateObject_7 || (templateObject_7 = tslib.__makeTemplateObject(["\n                svg {\n                  width: 14px;\n                  height: 14px;\n                  margin: ", ";\n                  transform: ", ";\n                  path {\n                    fill: ", " !important;\n                    stroke: ", "!important;\n                  }\n                }\n              "], ["\n                svg {\n                  width: 14px;\n                  height: 14px;\n                  margin: ", ";\n                  transform: ", ";\n                  path {\n                    fill: ", " !important;\n                    stroke: ", "!important;\n                  }\n                }\n              "])), sideBar$1 ? "0px 2px 0px 0px" : "0px 0px 0px 2px", sideBar$1 ? "rotate(180deg)" : "rotate(0deg)", sideBar$1 ? "#4d4d4d" : "white", sideBar$1 ? "#4d4d4d" : "white"), icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-commons/frontend-library/icons/arrowleft.svg" }) })))] })) })));
};
var RecursiveSidebarLinks = function (props) {
    var links = props.links, _a = props.level, level = _a === void 0 ? 0 : _a, customIcon = props.customIcon, customLink = props.customLink;
    var sideBar = reactRedux.useSelector(function (state) { return state.sideBar; });
    var _b = tslib.__read(React.useState(links === null || links === void 0 ? void 0 : links.map(function (item) { return ({
        id: item.id,
        isOpen: false,
    }); })), 2), showSubLinks = _b[0], setShowSubLinks = _b[1];
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: links === null || links === void 0 ? void 0 : links.map(function (subField, subFieldIndex) {
            var _a, _b;
            return (jsxRuntime.jsxs(React.Fragment, { children: [subField.type === 'dropdown' ? (jsxRuntime.jsxs(index$3, tslib.__assign({ onClick: function () {
                            return setShowSubLinks(showSubLinks === null || showSubLinks === void 0 ? void 0 : showSubLinks.map(function (item, index) {
                                return index === subFieldIndex
                                    ? tslib.__assign(tslib.__assign({}, item), { isOpen: !item.isOpen }) : item;
                            }));
                        }, customCSS: react.css(templateObject_8 || (templateObject_8 = tslib.__makeTemplateObject(["\n                display: flex;\n                width: 100%;\n                align-items: center;\n                margin-left: ", ";\n                justify-content: ", ";\n                flex-direction: row;\n                padding: ", ";\n                margin-bottom: 10px;\n                cursor: pointer;\n                background-color: transparent;\n                :hover {\n                  background-color: #6a7179;\n                }\n              "], ["\n                display: flex;\n                width: 100%;\n                align-items: center;\n                margin-left: ", ";\n                justify-content: ", ";\n                flex-direction: row;\n                padding: ", ";\n                margin-bottom: 10px;\n                cursor: pointer;\n                background-color: transparent;\n                :hover {\n                  background-color: #6a7179;\n                }\n              "])), sideBar ? "".concat(level * 10, "px") : "".concat(level * 5, "px"), sideBar ? "flex-start" : "center", sideBar ? "10px 30px" : "10px 0px") }, { children: [subField.icon ? (jsxRuntime.jsx(index$1, { alt: "IconTag".concat(subField.icon), height: "20px", width: "20px", margin: sideBar ? "0px 0px 2px 0px" : "0px", src: subField.icon })) : (jsxRuntime.jsx(jsxRuntime.Fragment, { children: customIcon ? (customIcon(subField)) : (jsxRuntime.jsx(index$2, tslib.__assign({ color: "white", fontSize: "16px" }, { children: "".concat(subField.label).slice(0, 2).toUpperCase() }))) })), sideBar && (jsxRuntime.jsx(index$2, tslib.__assign({ maxWidth: "max-content", margin: "0px 0px 0px 25px", color: "white", fontWeight: 700, fontSize: "14px", customCSS: react.css(templateObject_9 || (templateObject_9 = tslib.__makeTemplateObject(["\n                    display: flex;\n                    @media (max-width: 920px) {\n                      display: none;\n                    }\n                  "], ["\n                    display: flex;\n                    @media (max-width: 920px) {\n                      display: none;\n                    }\n                  "]))) }, { children: subField.label }))), jsxRuntime.jsx(index$4, { customCSS: react.css(templateObject_10 || (templateObject_10 = tslib.__makeTemplateObject(["\n                  margin-left: 15px;\n                  transform: ", ";\n                  svg {\n                    g {\n                      g {\n                        path {\n                          fill: white !important;\n                          stroke: white !important;\n                        }\n                      }\n                    }\n                  }\n                "], ["\n                  margin-left: 15px;\n                  transform: ", ";\n                  svg {\n                    g {\n                      g {\n                        path {\n                          fill: white !important;\n                          stroke: white !important;\n                        }\n                      }\n                    }\n                  }\n                "])), ((_a = showSubLinks === null || showSubLinks === void 0 ? void 0 : showSubLinks.find(function (_, index) { return index === subFieldIndex; })) === null || _a === void 0 ? void 0 : _a.isOpen)
                                    ? "rotate(180deg)"
                                    : "rotate(0deg)"), width: sideBar ? "14px" : "10px", height: sideBar ? "14px" : "10px", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-commons/frontend-library/icons/arrow-down-3101.svg" })] }))) : (jsxRuntime.jsx(jsxRuntime.Fragment, { children: customLink ? (customLink(subField)) : (jsxRuntime.jsxs(index$5, tslib.__assign({ link: subField.link, customCSS: react.css(templateObject_11 || (templateObject_11 = tslib.__makeTemplateObject(["\n                    display: flex;\n                    width: 100%;\n                    align-items: center;\n                    margin-left: ", ";\n                    justify-content: ", ";\n                    flex-direction: row;\n                    padding: ", ";\n                    margin-bottom: 10px;\n                    cursor: pointer;\n                    :hover {\n                      background-color: #6a7179;\n                    }\n                  "], ["\n                    display: flex;\n                    width: 100%;\n                    align-items: center;\n                    margin-left: ", ";\n                    justify-content: ", ";\n                    flex-direction: row;\n                    padding: ", ";\n                    margin-bottom: 10px;\n                    cursor: pointer;\n                    :hover {\n                      background-color: #6a7179;\n                    }\n                  "])), sideBar ? "".concat(level * 10, "px") : "0px", sideBar ? "flex-start" : "center", sideBar ? "10px 30px" : "10px 0px") }, { children: [subField.icon ? (jsxRuntime.jsx(index$1, { alt: "IconTag".concat(subField.icon), height: "20px", width: "20px", margin: sideBar ? "0px 0px 2px 0px" : "0px", src: subField.icon })) : (jsxRuntime.jsx(jsxRuntime.Fragment, { children: customIcon ? (customIcon(subField)) : (jsxRuntime.jsx(index$2, tslib.__assign({ color: "white", fontSize: "16px" }, { children: "".concat(subField.label).slice(0, 2).toUpperCase() }))) })), sideBar && (jsxRuntime.jsx(index$2, tslib.__assign({ maxWidth: "max-content", margin: "0px 0px 0px 25px", color: "white", fontWeight: 700, fontSize: "14px", customCSS: react.css(templateObject_12 || (templateObject_12 = tslib.__makeTemplateObject(["\n                        display: flex;\n                        @media (max-width: 920px) {\n                          display: none;\n                        }\n                      "], ["\n                        display: flex;\n                        @media (max-width: 920px) {\n                          display: none;\n                        }\n                      "]))) }, { children: subField.label })))] }))) })), ((_b = showSubLinks === null || showSubLinks === void 0 ? void 0 : showSubLinks.find(function (_, index) { return index === subFieldIndex; })) === null || _b === void 0 ? void 0 : _b.isOpen) && (jsxRuntime.jsx(RecursiveSidebarLinks, { links: subField.subFields, level: level + 1 }))] }, subField.id));
        }) }));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;

module.exports = OrganismAdminSidebar;
//# sourceMappingURL=index.js.map
