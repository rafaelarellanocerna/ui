'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
require('../../@atoms/AtomText/style.js');
var index = require('../../@atoms/AtomWrapper/index.js');
require('../../@atoms/AtomButton/styled.js');
require('../../@atoms/AtomLoader/style.js');
require('../../@atoms/AtomCarruosell/index.js');
require('../../@atoms/AtomCartShop/index.js');
require('next/image');
require('../../@atoms/AtomImage/style.js');
require('react');
require('../../@atoms/AtomIcon/styled.js');
require('../../@atoms/AtomContainer/style.js');
require('../../@atoms/AtomLink/index.js');
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
var SidebarRecursive = require('./SidebarRecursive.js');
require('../../@types/schemas.js');

var SidebarLinks = function (props) {
    var links = props.links, children = props.children, customCSS = props.customCSS;
    return (jsxRuntime.jsxs(index, tslib.__assign({ height: "100%", alignItems: "flex-start", justifyContent: "space-between", padding: "40px 0px", customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n        ", "\n      "], ["\n        ", "\n      "])), customCSS) }, { children: [jsxRuntime.jsx(index, tslib.__assign({ height: "100%", alignItems: "center", justifyContent: "flex-start", customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n          overflow-x: hidden;\n          overflow-y: scroll;\n        "], ["\n          overflow-x: hidden;\n          overflow-y: scroll;\n        "]))) }, { children: jsxRuntime.jsx(index, tslib.__assign({ height: "max-content", alignItems: "flex-start", justifyContent: "flex-start" }, { children: jsxRuntime.jsx(SidebarRecursive, { data: links }) })) })), children] })));
};
var templateObject_1, templateObject_2;

module.exports = SidebarLinks;
//# sourceMappingURL=SidebarLinks.js.map
