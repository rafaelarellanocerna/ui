'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
var index$3 = require('../../../@atoms/AtomText/index.js');
var index = require('../../../@atoms/AtomWrapper/index.js');
var index$1 = require('../../../@atoms/AtomButton/index.js');
require('../../../@atoms/AtomCarruosell/index.js');
require('../../../@atoms/AtomCartShop/index.js');
require('next/image');
require('../../../@atoms/AtomImage/style.js');
var index$2 = require('../../../@atoms/AtomIcon/index.js');
require('../../../@atoms/AtomContainer/style.js');
var React = require('react');
require('../../../@atoms/AtomLink/index.js');
require('../../../@atoms/AtomDropdownSidebar/admin/style.js');
var index$4 = require('../../../@atoms/AtomDropdownSidebar/default/index.js');
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
var framerMotion = require('framer-motion');
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
require('../../../@hooks/usePermissions/index.js');
require('../../../@hooks/useUploadFile/index.js');
require('../../../@components/Alert/Context.js');
require('../../../@components/Button/downloadFile.js');
require('../../../@components/Chat/style.js');
require('../../../@components/Header/style.js');
require('../../../@types/schemas.js');

var SidebarAnimation = {
    transition: {
        default: { duration: 0.3 },
    },
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 },
};
var OrganismSidebar = function (props) {
    var componentsProps = props.componentsProps, links = props.links;
    var _a = tslib.__read(React.useState(false), 2), sidebar = _a[0], setSidebar = _a[1];
    return (jsxRuntime.jsxs(index, tslib.__assign({ width: "max-content", customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n        display: none;\n        @media only screen and (max-width: 1200px) {\n          display: flex;\n        }\n      "], ["\n        display: none;\n        @media only screen and (max-width: 1200px) {\n          display: flex;\n        }\n      "]))) }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.wrapperProps, { children: [jsxRuntime.jsxs(index$1, tslib.__assign({ backgroundColor: "transparent", onClick: function () { return setSidebar(!sidebar); }, customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n          align-items: center;\n          justify-content: center;\n          z-index: 10;\n\n          svg {\n            width: 30px;\n            height: 30px;\n          }\n        "], ["\n          align-items: center;\n          justify-content: center;\n          z-index: 10;\n\n          svg {\n            width: 30px;\n            height: 30px;\n          }\n        "]))) }, { children: [jsxRuntime.jsx(index$2, { color: "#2c2c2c", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-commons/frontend-library/icons/menu.svg" }), jsxRuntime.jsx(index$3, tslib.__assign({ customCSS: react.css(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n            width: 0px;\n            height: 0px;\n            opacity: 0;\n            display: none;\n          "], ["\n            width: 0px;\n            height: 0px;\n            opacity: 0;\n            display: none;\n          "]))) }, { children: "MENU" }))] })), jsxRuntime.jsx(framerMotion.AnimatePresence, { children: sidebar && (jsxRuntime.jsxs(index, tslib.__assign({ position: "absolute", height: "100vh", justifyContent: "flex-start", alignItems: "center", backgroundColor: "white", width: "300px", shadow: true }, SidebarAnimation, { customCSS: react.css(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n              display: none;\n              @media only screen and (max-width: 1200px) {\n                display: flex;\n              }\n              top: 0;\n              right: 0;\n            "], ["\n              display: none;\n              @media only screen and (max-width: 1200px) {\n                display: flex;\n              }\n              top: 0;\n              right: 0;\n            "]))) }, { children: [jsxRuntime.jsx(index, { height: "80px", width: "100%", backgroundColor: "white" }), jsxRuntime.jsx(index, tslib.__assign({ height: "calc(100vh - 90px)", justifyContent: "flex-start", alignItems: "center", customCSS: react.css(templateObject_5 || (templateObject_5 = tslib.__makeTemplateObject(["\n                overflow-y: auto;\n              "], ["\n                overflow-y: auto;\n              "]))) }, { children: jsxRuntime.jsx(index, tslib.__assign({ height: "max-content", width: "100%", justifyContent: "flex-start", alignItems: "flex-start", backgroundColor: "white" }, { children: jsxRuntime.jsx(index$4, tslib.__assign({}, links)) })) }))] }))) })] })));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

module.exports = OrganismSidebar;
//# sourceMappingURL=index.js.map
