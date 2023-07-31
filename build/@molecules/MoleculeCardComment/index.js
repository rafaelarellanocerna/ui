'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
var index$3 = require('../../@atoms/AtomText/index.js');
var index = require('../../@atoms/AtomWrapper/index.js');
require('../../@atoms/AtomButton/styled.js');
require('../../@atoms/AtomLoader/style.js');
require('../../@atoms/AtomCarruosell/index.js');
require('../../@atoms/AtomCartShop/index.js');
var index$1 = require('../../@atoms/AtomImage/index.js');
var index$2 = require('../../@atoms/AtomIcon/index.js');
require('../../@atoms/AtomContainer/style.js');
require('react');
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
require('../MoleculePlayer/style.js');
require('../../@hooks/usePermissions/index.js');
require('../../@hooks/useUploadFile/index.js');
require('../../@components/Alert/Context.js');
require('../../@components/Button/downloadFile.js');
require('../../@components/Chat/style.js');
require('../../@components/Header/style.js');
require('../../@types/schemas.js');

var MoleculeCardComment = function (props) {
    var image = props.image, name = props.name, title = props.title, description = props.description;
    return (jsxRuntime.jsxs(index, tslib.__assign({ flexDirection: "row", justifyContent: "space-between", position: "relative" }, { children: [jsxRuntime.jsxs(index, tslib.__assign({ width: "10%" }, { children: [jsxRuntime.jsx(index$1, { alt: name || 'user', height: "70px", width: "70px", customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n            img {\n              border-radius: 100%;\n            }\n          "], ["\n            img {\n              border-radius: 100%;\n            }\n          "]))), src: image ||
                            'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/images/default-placeholder.png' }), jsxRuntime.jsx(index$2, { height: "100%", color: "#888888", customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n            margin: 10px 0px 0px 0px;\n            transform: translateX(100%);\n            z-index: -1;\n          "], ["\n            margin: 10px 0px 0px 0px;\n            transform: translateX(100%);\n            z-index: -1;\n          "]))), icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/images/Grupo%203198.svg" })] })), jsxRuntime.jsxs(index, tslib.__assign({ flexDirection: "column", width: "calc(100% - 90px)" }, { children: [jsxRuntime.jsx(index$3, tslib.__assign({ color: "#888888", fontWeight: "bold", padding: "18px 0px" }, { children: title ||
                            '¿Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie nunc eget?' })), jsxRuntime.jsx(index$3, tslib.__assign({ color: "#888888", customCSS: react.css(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n            text-align: justify;\n          "], ["\n            text-align: justify;\n          "]))) }, { children: description ||
                            'Aliquam fermentum efficitur purus sit amet ultrices. Fusce vulputate ligula nec tortor venenatis porta. Aenean pretium interdum convallis. Vestibulum sit amet dictum lacus, in bibendum mauris. Curabitur et ornare velit. Curabitur blandit turpis at consequat sodales. Pellentesque sed eleifend arcu. Praesent ut risus bibendum, semper lectus ac, molestie arcu. Etiam placerat lacus eu molestie pulvinar. Cras sagittis orci ut ante scelerisque, in faucibus nibh scelerisque. Aliquam fermentum efficitur purus sit amet ultrices. Fusce vulputate ligula nec tortor venenatis porta. Aenean pretium interdum convallis. Vestibulum sit amet dictum lacus, in bibendum mauris. Curabitur et ornare velit. Curabitur blandit turpis at consequat sodales. Pellentesque sed eleifend arcu. Praesent ut risus bibendum, semper lectus ac, molestie arcu. Etiam placerat lacus eu molestie pulvinar. Cras sagittis orci ut ante scelerisque, in faucibus nibh scelerisque.' }))] }))] })));
};
var templateObject_1, templateObject_2, templateObject_3;

module.exports = MoleculeCardComment;
//# sourceMappingURL=index.js.map
