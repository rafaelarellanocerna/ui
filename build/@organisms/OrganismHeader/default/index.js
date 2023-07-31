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
var React = require('react');
require('../../../@atoms/AtomIcon/styled.js');
var index = require('../../../@atoms/AtomContainer/index.js');
var index$2 = require('../../../@atoms/AtomLink/index.js');
require('../../../@atoms/AtomDropdownSidebar/admin/style.js');
require('../../../@atoms/AtomDropdownSidebar/default/style.js');
var index$5 = require('../../../@atoms/AtomDropdownSidebar/links/index.js');
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
var index$6 = require('../../../@molecules/MoleculeSearchBar/index.js');
var index$7 = require('../../OrganismUser/default/index.js');
var index$8 = require('../../OrganismSidebar/default/index.js');
require('../../../@hooks/usePermissions/index.js');
require('../../../@hooks/useUploadFile/index.js');
require('../../../@components/Alert/Context.js');
require('../../../@components/Button/downloadFile.js');
require('../../../@components/Chat/style.js');
require('../../../@components/Header/style.js');
require('../../../@types/schemas.js');

var DefaultHeader = function (props) {
    var _a, _b;
    var logo = props.logo, searchBar = props.searchBar, userAuth = props.userAuth, links = props.links;
    var _c = tslib.__read(React.useState(false), 2), sidebar = _c[0], setSidebar = _c[1];
    React.useEffect(function () {
        document.body.style.overflowY = sidebar ? 'hidden' : 'auto';
        document.body.style.height = sidebar ? '100vh' : 'max-content';
    }, [sidebar]);
    var handleresize = function () {
        if (window.innerWidth > 1200) {
            setSidebar(false);
        }
    };
    React.useEffect(function () {
        window.addEventListener('resize', handleresize, true);
        return function () {
            window.removeEventListener('resize', handleresize, true);
        };
    }, []);
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx(index, tslib.__assign({ height: "90px", position: "fixed", as: "nav", shadow: true, padding: "0px 90px", customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n          top: 0;\n          z-index: 100;\n          @media only screen and (max-width: 980px) {\n            padding: 0px 30px;\n          }\n        "], ["\n          top: 0;\n          z-index: 100;\n          @media only screen and (max-width: 980px) {\n            padding: 0px 30px;\n          }\n        "]))) }, { children: jsxRuntime.jsxs(index$1, tslib.__assign({ height: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between", maxWidth: "1440px", flexWrap: "wrap" }, { children: [logo && (jsxRuntime.jsxs(index$2, tslib.__assign({ link: "/", customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                width: max-content;\n                height: 100%;\n                svg {\n                  width: 150px;\n                  height: 50px;\n                }\n              "], ["\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                width: max-content;\n                height: 100%;\n                svg {\n                  width: 150px;\n                  height: 50px;\n                }\n              "]))) }, (_a = logo.componentsProps) === null || _a === void 0 ? void 0 : _a.linkProps, { children: [jsxRuntime.jsx(index$3, tslib.__assign({ alt: "LOGO", src: "".concat(logo.src), height: "55px", width: "150px", customCSS: react.css(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n                  img {\n                    display: flex;\n                    object-fit: contain;\n                  }\n                "], ["\n                  img {\n                    display: flex;\n                    object-fit: contain;\n                  }\n                "]))) }, (_b = logo.componentsProps) === null || _b === void 0 ? void 0 : _b.imageProps)), jsxRuntime.jsx(index$4, tslib.__assign({ customCSS: react.css(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n                  width: 0px;\n                  height: 0px;\n                  opacity: 0;\n                "], ["\n                  width: 0px;\n                  height: 0px;\n                  opacity: 0;\n                "]))) }, { children: "LOGO" }))] }))), links && jsxRuntime.jsx(index$5, tslib.__assign({}, links, { links: links.links })), searchBar && (jsxRuntime.jsx(jsxRuntime.Fragment, { children: searchBar.component ? (searchBar.component) : (jsxRuntime.jsx(index$6, tslib.__assign({}, searchBar.searchBarProps))) })), userAuth && (jsxRuntime.jsx(jsxRuntime.Fragment, { children: userAuth.component ? (userAuth.component) : (jsxRuntime.jsx(index$7, tslib.__assign({ componentProps: {
                                userProps: {
                                    wrapperProps: {
                                        customCSS: react.css(templateObject_5 || (templateObject_5 = tslib.__makeTemplateObject(["\n                          @media only screen and (max-width: 1200px) {\n                            display: none;\n                          }\n                        "], ["\n                          @media only screen and (max-width: 1200px) {\n                            display: none;\n                          }\n                        "]))),
                                    },
                                },
                            } }, userAuth.props))) })), jsxRuntime.jsx(index$8, { links: links })] })) })) }));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

module.exports = DefaultHeader;
//# sourceMappingURL=index.js.map
