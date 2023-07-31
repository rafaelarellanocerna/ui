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
var index$5 = require('../../../@atoms/AtomIcon/index.js');
var index = require('../../../@atoms/AtomContainer/index.js');
require('react');
var index$2 = require('../../../@atoms/AtomLink/index.js');
require('../../../@atoms/AtomDropdownSidebar/admin/style.js');
require('../../../@atoms/AtomDropdownSidebar/default/style.js');
require('../../../@atoms/AtomDropdownSidebar/links/style.js');
require('next/router');
require('lodash');
require('../../../@atoms/AtomInput/style.js');
require('uuid');
require('react-redux');
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
require('../../../@hooks/usePermissions/index.js');
require('../../../@hooks/useUploadFile/index.js');
require('../../../@components/Alert/Context.js');
require('../../../@components/Button/downloadFile.js');
require('../../../@components/Chat/style.js');
require('../../../@components/Header/style.js');
require('../../../@types/schemas.js');

var DefaultFooter = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h;
    var imageLogo = _a.imageLogo, columns = _a.columns, links = _a.links, componentsProps = _a.componentsProps;
    return (jsxRuntime.jsx(index, tslib.__assign({ backgroundColor: "#f2f2f2", padding: "50px 0px", as: "footer" }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.containerProps, { children: jsxRuntime.jsxs(index$1, tslib.__assign({ flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", maxWidth: "1440px", padding: "0px 90px", flexWrap: "wrap", customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n          @media (max-width: 480px) {\n            flex-direction: column;\n            padding: 0px 20px;\n          }\n        "], ["\n          @media (max-width: 480px) {\n            flex-direction: column;\n            padding: 0px 20px;\n          }\n        "]))) }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.wrapperProps, { children: [jsxRuntime.jsxs(index$1, tslib.__assign({ maxWidth: "max-content", justifyContent: "space-between", customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n            @media (max-width: 1200px) {\n              width: 100%;\n              align-items: center;\n              justify-content: center;\n              max-width: 100%;\n            }\n            @media (max-width: 480px) {\n              max-width: max-content;\n            }\n          "], ["\n            @media (max-width: 1200px) {\n              width: 100%;\n              align-items: center;\n              justify-content: center;\n              max-width: 100%;\n            }\n            @media (max-width: 480px) {\n              max-width: max-content;\n            }\n          "]))) }, (_b = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.logoProps) === null || _b === void 0 ? void 0 : _b.wrapperProps, { children: [imageLogo && (jsxRuntime.jsxs(index$2, tslib.__assign({ href: "/", customCSS: react.css(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n                svg {\n                  width: 180px;\n                  height: 50px;\n                }\n              "], ["\n                svg {\n                  width: 180px;\n                  height: 50px;\n                }\n              "]))) }, (_d = (_c = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.logoProps) === null || _c === void 0 ? void 0 : _c.linksProps) === null || _d === void 0 ? void 0 : _d.linkProps, { children: [jsxRuntime.jsx(index$3, tslib.__assign({ alt: "LOGO", src: imageLogo, height: "80px", width: "150px", customCSS: react.css(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n                  img {\n                    display: flex;\n                    object-fit: contain;\n                  }\n                "], ["\n                  img {\n                    display: flex;\n                    object-fit: contain;\n                  }\n                "]))) }, (_f = (_e = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.logoProps) === null || _e === void 0 ? void 0 : _e.logoProps) === null || _f === void 0 ? void 0 : _f.imageProps)), jsxRuntime.jsx(index$4, tslib.__assign({ customCSS: react.css(templateObject_5 || (templateObject_5 = tslib.__makeTemplateObject(["\n                  width: 0px;\n                  height: 0px;\n                  opacity: 0;\n                  display: none;\n                "], ["\n                  width: 0px;\n                  height: 0px;\n                  opacity: 0;\n                  display: none;\n                "]))) }, { children: "LOGO" }))] }))), links && (jsxRuntime.jsx(index$1, tslib.__assign({ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", maxWidth: "200px", margin: "30px 0px", customCSS: react.css(templateObject_6 || (templateObject_6 = tslib.__makeTemplateObject(["\n                @media (max-width: 1200px) {\n                  justify-content: center;\n                }\n                @media (max-width: 480px) {\n                  justify-content: flex-start;\n                }\n              "], ["\n                @media (max-width: 1200px) {\n                  justify-content: center;\n                }\n                @media (max-width: 480px) {\n                  justify-content: flex-start;\n                }\n              "]))) }, (_h = (_g = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.logoProps) === null || _g === void 0 ? void 0 : _g.linksProps) === null || _h === void 0 ? void 0 : _h.wrapperProps, { children: links === null || links === void 0 ? void 0 : links.map(function (socialLink) {
                                var _a, _b, _c, _d, _e, _f;
                                return (jsxRuntime.jsxs(index$2, tslib.__assign({ href: socialLink === null || socialLink === void 0 ? void 0 : socialLink.href, link: socialLink === null || socialLink === void 0 ? void 0 : socialLink.link, margin: "0px 10px", customCSS: react.css(templateObject_7 || (templateObject_7 = tslib.__makeTemplateObject(["\n                    cursor: pointer;\n                    @media (max-width: 480px) {\n                      margin: 0px 0px;\n                    }\n                  "], ["\n                    cursor: pointer;\n                    @media (max-width: 480px) {\n                      margin: 0px 0px;\n                    }\n                  "]))) }, (_b = (_a = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.logoProps) === null || _a === void 0 ? void 0 : _a.linksProps) === null || _b === void 0 ? void 0 : _b.linkProps, (_c = socialLink === null || socialLink === void 0 ? void 0 : socialLink.componentsProps) === null || _c === void 0 ? void 0 : _c.linkProps, { children: [jsxRuntime.jsx(index$5, tslib.__assign({ height: "25px", width: "25px", icon: socialLink.icon }, (_e = (_d = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.logoProps) === null || _d === void 0 ? void 0 : _d.linksProps) === null || _e === void 0 ? void 0 : _e.iconProps, (_f = socialLink === null || socialLink === void 0 ? void 0 : socialLink.componentsProps) === null || _f === void 0 ? void 0 : _f.iconProps)), jsxRuntime.jsx(index$4, tslib.__assign({ customCSS: react.css(templateObject_8 || (templateObject_8 = tslib.__makeTemplateObject(["\n                      width: 0px;\n                      height: 0px;\n                      opacity: 0;\n                      display: none;\n                    "], ["\n                      width: 0px;\n                      height: 0px;\n                      opacity: 0;\n                      display: none;\n                    "]))) }, { children: socialLink.icon }))] }), socialLink.link));
                            }) })))] })), columns === null || columns === void 0 ? void 0 : columns.map(function (column) {
                    var _a, _b, _c, _d, _e, _f, _g;
                    return (jsxRuntime.jsxs(index$1, tslib.__assign({ maxWidth: "max-content", margin: "0px 0px 20px 0px" }, (_b = (_a = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.logoProps) === null || _a === void 0 ? void 0 : _a.columnProps) === null || _b === void 0 ? void 0 : _b.wrapperProps, (_c = column === null || column === void 0 ? void 0 : column.componentsProps) === null || _c === void 0 ? void 0 : _c.wrapperProps, { children: [jsxRuntime.jsx(index$4, tslib.__assign({ fontSize: "large", margin: "0px 0px 5px 0px", color: "#6c6c6c", fontWeight: "bold" }, (_e = (_d = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.logoProps) === null || _d === void 0 ? void 0 : _d.columnProps) === null || _e === void 0 ? void 0 : _e.titleProps, (_f = column === null || column === void 0 ? void 0 : column.componentsProps) === null || _f === void 0 ? void 0 : _f.titleProps, { children: column === null || column === void 0 ? void 0 : column.title })), (_g = column === null || column === void 0 ? void 0 : column.links) === null || _g === void 0 ? void 0 : _g.map(function (link) {
                                var _a, _b, _c;
                                return (jsxRuntime.jsx(index$2, tslib.__assign({ margin: "2px 0px", fontSize: "small", color: "#6c6c6c", fontWeight: 400, href: link.href, link: link.link }, (_b = (_a = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.logoProps) === null || _a === void 0 ? void 0 : _a.columnProps) === null || _b === void 0 ? void 0 : _b.linkProps, (_c = link === null || link === void 0 ? void 0 : link.componentsProps) === null || _c === void 0 ? void 0 : _c.linkProps, { children: link === null || link === void 0 ? void 0 : link.label }), link.label));
                            }), column === null || column === void 0 ? void 0 : column.component] }), column.title));
                })] })) })));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;

module.exports = DefaultFooter;
//# sourceMappingURL=index.js.map
