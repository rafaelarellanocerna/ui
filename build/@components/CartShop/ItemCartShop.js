'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
require('../../@atoms/AtomText/style.js');
var index = require('../../@atoms/AtomWrapper/index.js');
var index$2 = require('../../@atoms/AtomButton/index.js');
require('../../@atoms/AtomCarruosell/index.js');
require('../../@atoms/AtomCartShop/index.js');
var index$1 = require('../../@atoms/AtomImage/index.js');
var index$3 = require('../../@atoms/AtomIcon/index.js');
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
require('../../@atoms/AtomLoader/style.js');
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

var ItemCartShop = function (props) {
    var _a;
    var buttonProps = props.buttonProps, iconProps = props.iconProps, children = props.children, buttonSection = props.buttonSection, src = props.src, componentsProps = props.componentsProps, wrapperProps = props.wrapperProps;
    return (jsxRuntime.jsxs(index
    //   key={item.id}
    , tslib.__assign({ 
        //   key={item.id}
        customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n        width: 100%;\n        justify-content: space-between;\n        flex-direction: row;\n        padding: 20px;\n        border-bottom: 1px solid #e6e6e6;\n        ", ";\n      "], ["\n        width: 100%;\n        justify-content: space-between;\n        flex-direction: row;\n        padding: 20px;\n        border-bottom: 1px solid #e6e6e6;\n        ", ";\n      "])), wrapperProps === null || wrapperProps === void 0 ? void 0 : wrapperProps.customCSS) }, wrapperProps, { children: [jsxRuntime.jsxs(index, tslib.__assign({ flexDirection: "row", maxWidth: "max-content", width: "100%", justifyContent: "space-between" }, { children: [jsxRuntime.jsx(index$1, tslib.__assign({ height: "50px", width: "50px", 
                        //   alt={item.name}
                        alt: "product", src: src !== null && src !== void 0 ? src : 'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/MDC-0001/images/default.jpg', customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n            overflow: hidden;\n            border-radius: 50%;\n            ", ";\n          "], ["\n            overflow: hidden;\n            border-radius: 50%;\n            ", ";\n          "])), (_a = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.imageProps) === null || _a === void 0 ? void 0 : _a.customCSS) }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.imageProps)), jsxRuntime.jsx(index, tslib.__assign({ maxWidth: "max-content", margin: "0px 0px 0px 10px", height: "100%", justifyContent: "space-between" }, { children: children }))] })), buttonSection, jsxRuntime.jsx(index$2, tslib.__assign({ customCSS: react.css(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n          align-self: center;\n          background-color: transparent;\n          padding: 0;\n          height: max-content;\n          width: max-content;\n          ", "\n        "], ["\n          align-self: center;\n          background-color: transparent;\n          padding: 0;\n          height: max-content;\n          width: max-content;\n          ", "\n        "])), buttonProps === null || buttonProps === void 0 ? void 0 : buttonProps.customCSS) }, buttonProps, { children: jsxRuntime.jsx(index$3, tslib.__assign({ height: "20px", width: "20px", color: "#317c57", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/MDC-0001/svg/trash-svgrepo-com.svg" }, iconProps)) }))] })));
};
var templateObject_1, templateObject_2, templateObject_3;

module.exports = ItemCartShop;
//# sourceMappingURL=ItemCartShop.js.map
