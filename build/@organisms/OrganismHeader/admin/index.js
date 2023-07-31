'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
var index$4 = require('../../../@atoms/AtomText/index.js');
var index$1 = require('../../../@atoms/AtomWrapper/index.js');
require('../../../@atoms/AtomButton/styled.js');
require('../../../@atoms/AtomLoader/style.js');
require('../../../@atoms/AtomCarruosell/index.js');
require('../../../@atoms/AtomCartShop/index.js');
var index$3 = require('../../../@atoms/AtomImage/index.js');
require('react');
require('../../../@atoms/AtomIcon/styled.js');
var index = require('../../../@atoms/AtomContainer/index.js');
var index$2 = require('../../../@atoms/AtomLink/index.js');
require('../../../@atoms/AtomDropdownSidebar/admin/style.js');
require('../../../@atoms/AtomDropdownSidebar/default/style.js');
require('../../../@atoms/AtomDropdownSidebar/links/style.js');
require('next/router');
require('lodash');
require('../../../@atoms/AtomInput/style.js');
require('uuid');
var reactRedux = require('react-redux');
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
var index$5 = require('../../OrganismUser/default/index.js');
require('../../../@hooks/usePermissions/index.js');
require('../../../@hooks/useUploadFile/index.js');
require('../../../@components/Alert/Context.js');
require('../../../@components/Button/downloadFile.js');
require('../../../@components/Chat/style.js');
require('../../../@components/Header/style.js');
require('../../../@types/schemas.js');

var AdminHeader = function (props) {
    var _a, _b;
    var logo = props.logo, componentsProps = props.componentsProps, organismUser = props.organismUser;
    var sideBar = reactRedux.useSelector(function (state) { return state.sideBar; });
    return (jsxRuntime.jsx(index, tslib.__assign({ as: "nav", position: "fixed", height: "60px", backgroundColor: "#373737", customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n        top: 0;\n        width: ", ";\n        margin-left: ", ";\n      "], ["\n        top: 0;\n        width: ", ";\n        margin-left: ", ";\n      "])), sideBar ? 'calc(100% - 320px)' : 'calc(100% - 80px)', sideBar ? '320px' : '80px') }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.containerProps, { children: jsxRuntime.jsxs(index$1, tslib.__assign({ flexDirection: "row", maxWidth: "1440px", padding: "0px 80px", height: "100%", alignItems: "center", justifyContent: "flex-end" }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.wrapperProps, { children: [logo && (jsxRuntime.jsxs(index$2, tslib.__assign({ link: "/", customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n              display: flex;\n              align-items: center;\n              justify-content: center;\n              width: max-content;\n              height: 100%;\n              svg {\n                width: 150px;\n                height: 50px;\n              }\n            "], ["\n              display: flex;\n              align-items: center;\n              justify-content: center;\n              width: max-content;\n              height: 100%;\n              svg {\n                width: 150px;\n                height: 50px;\n              }\n            "]))) }, (_a = logo.componentsProps) === null || _a === void 0 ? void 0 : _a.linkProps, { children: [jsxRuntime.jsx(index$3, tslib.__assign({ alt: "LOGO", src: logo.src, height: "55px", width: "150px", customCSS: react.css(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n                img {\n                  display: flex;\n                  object-fit: contain;\n                }\n              "], ["\n                img {\n                  display: flex;\n                  object-fit: contain;\n                }\n              "]))) }, (_b = logo.componentsProps) === null || _b === void 0 ? void 0 : _b.imageProps)), jsxRuntime.jsx(index$4, tslib.__assign({ customCSS: react.css(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n                width: 0px;\n                height: 0px;\n                opacity: 0;\n              "], ["\n                width: 0px;\n                height: 0px;\n                opacity: 0;\n              "]))) }, { children: "LOGO" }))] }))), organismUser && (jsxRuntime.jsx(index$5, tslib.__assign({ componentProps: {
                        userProps: {
                            menuProps: {
                                buttonProps: {
                                    textProps: {
                                        color: '#fff',
                                    },
                                    iconProps: {
                                        color: '#fff',
                                    },
                                },
                                menuDropdownProps: {
                                    wrapperProps: {
                                        backgroundColor: '#373737',
                                    },
                                    buttonProps: {
                                        customCSS: react.css(templateObject_5 || (templateObject_5 = tslib.__makeTemplateObject(["\n                        background-color: #6a6a6a;\n                        color: white;\n                        :hover {\n                          background-color: #525252;\n                        }\n                        transition: background-color 0.3s ease;\n                      "], ["\n                        background-color: #6a6a6a;\n                        color: white;\n                        :hover {\n                          background-color: #525252;\n                        }\n                        transition: background-color 0.3s ease;\n                      "]))),
                                    },
                                    linkProps: {
                                        customCSS: react.css(templateObject_6 || (templateObject_6 = tslib.__makeTemplateObject(["\n                        background-color: #6a6a6a;\n                        color: white;\n                        :hover {\n                          background-color: #525252;\n                        }\n                        transition: background-color 0.3s ease;\n                      "], ["\n                        background-color: #6a6a6a;\n                        color: white;\n                        :hover {\n                          background-color: #525252;\n                        }\n                        transition: background-color 0.3s ease;\n                      "]))),
                                    },
                                },
                            },
                        },
                        authProps: {
                            loginProps: {
                                color: '#fff',
                            },
                            registerProps: {
                                customCSS: react.css(templateObject_7 || (templateObject_7 = tslib.__makeTemplateObject(["\n                    color: #fff;\n                    border-radius: 8px;\n                    border: 2px solid #fff;\n                    background-color: transparent;\n                  "], ["\n                    color: #fff;\n                    border-radius: 8px;\n                    border: 2px solid #fff;\n                    background-color: transparent;\n                  "]))),
                            },
                        },
                    } }, organismUser)))] })) })));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;

module.exports = AdminHeader;
//# sourceMappingURL=index.js.map
