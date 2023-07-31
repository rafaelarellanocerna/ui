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
require('./style.js');
require('../../@types/schemas.js');

var ContainerPublicLinks = function (props) {
    var SidebarAnimation = {
        transition: {
            default: { duration: 0.3 },
        },
        initial: { x: 50, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: 50, opacity: 0 },
    };
    var background = props.background, containerProps = props.containerProps, children = props.children;
    return (jsxRuntime.jsxs(index, tslib.__assign({ position: "absolute", height: "100vh", justifyContent: "flex-start", alignItems: "center", backgroundColor: background || 'white', width: "300px", shadow: true }, SidebarAnimation, { customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n        /* display: none; */\n        @media only screen and (max-width: 1200px) {\n          display: flex;\n        }\n        top: 0;\n        right: 0;\n        z-index: 101;\n        ", "\n      "], ["\n        /* display: none; */\n        @media only screen and (max-width: 1200px) {\n          display: flex;\n        }\n        top: 0;\n        right: 0;\n        z-index: 101;\n        ", "\n      "])), containerProps === null || containerProps === void 0 ? void 0 : containerProps.customCSS) }, containerProps, { children: [jsxRuntime.jsx(index, { height: "80px", width: "100%", backgroundColor: background || 'white' }), jsxRuntime.jsx(index, tslib.__assign({ height: "calc(100vh - 90px)", justifyContent: "flex-start", alignItems: "center", customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n          overflow-y: auto;\n          overflow-x: hidden;\n        "], ["\n          overflow-y: auto;\n          overflow-x: hidden;\n        "]))) }, { children: jsxRuntime.jsx(index, tslib.__assign({ height: "max-content", width: "100%", justifyContent: "flex-start", alignItems: "flex-start", backgroundColor: background || 'white' }, { children: children })) }))] })));
};
var templateObject_1, templateObject_2;

module.exports = ContainerPublicLinks;
//# sourceMappingURL=ContainerLinksPublic.js.map
