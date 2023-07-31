'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
var index$2 = require('../../@atoms/AtomText/index.js');
require('../../@atoms/AtomWrapper/style.js');
require('../../@atoms/AtomButton/styled.js');
require('../../@atoms/AtomLoader/style.js');
require('../../@atoms/AtomCarruosell/index.js');
require('../../@atoms/AtomCartShop/index.js');
require('next/image');
require('../../@atoms/AtomImage/style.js');
var index$1 = require('../../@atoms/AtomIcon/index.js');
require('../../@atoms/AtomContainer/style.js');
require('react');
var index = require('../../@atoms/AtomLink/index.js');
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

var getIcon = function (name) {
    return "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/icons/sideBar/".concat(name, ".svg");
};
var SidebarCall = function () {
    var sideBar = reactRedux.useSelector(function (state) { return state.sideBar; });
    return (jsxRuntime.jsxs(index, tslib.__assign({ link: "/", customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n        display: flex;\n        width: 100%;\n        align-items: center;\n        justify-content: ", ";\n        flex-direction: row;\n        padding: ", ";\n        padding-left: ", ";\n        border-radius: 0px;\n        background-color: transparent;\n        span {\n          cursor: pointer;\n          color: #656a69;\n        }\n        svg {\n          g {\n            path {\n              fill: #f1576c !important;\n              stroke: #f1576c !important;\n            }\n          }\n        }\n        :hover {\n          background-color: #f1576c;\n          span {\n            cursor: pointer;\n            color: white;\n          }\n          svg {\n            g {\n              path {\n                fill: white !important;\n                stroke: white !important;\n              }\n            }\n          }\n        }\n        transition: all 0.2s ease-in-out;\n      "], ["\n        display: flex;\n        width: 100%;\n        align-items: center;\n        justify-content: ", ";\n        flex-direction: row;\n        padding: ", ";\n        padding-left: ", ";\n        border-radius: 0px;\n        background-color: transparent;\n        span {\n          cursor: pointer;\n          color: #656a69;\n        }\n        svg {\n          g {\n            path {\n              fill: #f1576c !important;\n              stroke: #f1576c !important;\n            }\n          }\n        }\n        :hover {\n          background-color: #f1576c;\n          span {\n            cursor: pointer;\n            color: white;\n          }\n          svg {\n            g {\n              path {\n                fill: white !important;\n                stroke: white !important;\n              }\n            }\n          }\n        }\n        transition: all 0.2s ease-in-out;\n      "])), sideBar ? "flex-start" : "center", sideBar ? "15px 30px" : "15px 0px", sideBar ? "30px" : "0px") }, { children: [jsxRuntime.jsx(index$1, { height: "18px", width: "18px", icon: getIcon('phone') }), sideBar && (jsxRuntime.jsx(index$2, tslib.__assign({ maxWidth: "max-content", margin: "0px 0px 0px 25px", color: "#656a69", fontWeight: 700, fontSize: "14px", customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n            display: flex;\n            @media (max-width: 920px) {\n              display: none;\n            }\n          "], ["\n            display: flex;\n            @media (max-width: 920px) {\n              display: none;\n            }\n          "]))) }, { children: "Realizar llamada" })))] })));
};
var templateObject_1, templateObject_2;

module.exports = SidebarCall;
//# sourceMappingURL=SidebarCall.js.map
