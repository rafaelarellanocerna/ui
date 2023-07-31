'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
require('../../@atoms/AtomText/style.js');
require('../../@atoms/AtomWrapper/style.js');
require('../../@atoms/AtomButton/styled.js');
require('../../@atoms/AtomLoader/style.js');
require('../../@atoms/AtomCarruosell/index.js');
require('../../@atoms/AtomCartShop/index.js');
require('next/image');
require('../../@atoms/AtomImage/style.js');
require('react');
require('../../@atoms/AtomIcon/styled.js');
var index = require('../../@atoms/AtomContainer/index.js');
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

var Header = function (props) {
    var children = props.children, customCSS = props.customCSS;
    return (jsxRuntime.jsx(index, tslib.__assign({ height: "80px", position: "fixed", as: "nav", justifyContent: "space-between", flexDirection: "row", padding: "0px 90px" }, props, { customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n        top: 0;\n        z-index: 100;\n        @media only screen and (max-width: 980px) {\n          padding: 0px 30px;\n        }\n        box-shadow: 0px 3px 6px rgb(0 0 0 / 10%);\n        ", "\n      "], ["\n        top: 0;\n        z-index: 100;\n        @media only screen and (max-width: 980px) {\n          padding: 0px 30px;\n        }\n        box-shadow: 0px 3px 6px rgb(0 0 0 / 10%);\n        ", "\n      "])), customCSS) }, { children: children })));
};
var templateObject_1;

module.exports = Header;
//# sourceMappingURL=index.js.map