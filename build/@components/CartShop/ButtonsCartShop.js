'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
var index$2 = require('../../@atoms/AtomText/index.js');
var index = require('../../@atoms/AtomWrapper/index.js');
var index$1 = require('../../@atoms/AtomButton/index.js');
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
var index$3 = require('../../@atoms/AtomInput/index.js');
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
require('lodash');
require('../../@atoms/AtomInput/style.js');
require('../../@atoms/AtomInput/inputWithPagination.js');
require('../../@atoms/AtomLoader/style.js');
require('../../@atoms/AtomMaps/style.js');
require('../../@atoms/AtomNotification/styles.js');
require('../../@atoms/AtomProgressBar/component/style/index.js');
require('next/head');
require('../../@atoms/AtomTable/style.js');
require('react-redux');
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
require('uuid');
require('../Header/style.js');
require('../../@types/schemas.js');

var ButtonsCartShop = function (props) {
    var _a, _b, _c;
    var wrapperProps = props.wrapperProps, componentsProps = props.componentsProps;
    return (jsxRuntime.jsxs(index, tslib.__assign({ width: "max-content", height: "100%", alignItems: "center", flexDirection: "row", customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n        align-self: center;\n        ", ";\n      "], ["\n        align-self: center;\n        ", ";\n      "])), wrapperProps === null || wrapperProps === void 0 ? void 0 : wrapperProps.customCSS) }, wrapperProps, { children: [jsxRuntime.jsx(index$1, tslib.__assign({ customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n          padding: 0;\n          height: 20px;\n          width: 20px;\n          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n          ", ";\n        "], ["\n          padding: 0;\n          height: 20px;\n          width: 20px;\n          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n          ", ";\n        "])), (_a = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.buttonAddProps) === null || _a === void 0 ? void 0 : _a.customCSS) }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.buttonSubProps, { children: jsxRuntime.jsx(index$2, tslib.__assign({ color: "white", fontSize: "12px", fontWeight: "bold", cursor: "pointer" }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.textProps, { children: "-" })) })), jsxRuntime.jsx(index, tslib.__assign({ customCSS: react.css(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n          align-items: center;\n          height: 20px;\n          width: 20px;\n          margin: 0px 12px;\n          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n        "], ["\n          align-items: center;\n          height: 20px;\n          width: 20px;\n          margin: 0px 12px;\n          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n        "]))) }, { children: jsxRuntime.jsx(index$3, tslib.__assign({ type: "number", 
                    // value={`${item.quantity}`}
                    width: "35px", height: "20px", padding: "0px 0px 0px 0px", spanMargin: "0px 0px 0px 0px", errorPadding: "0px 0px 0px 0px", errorHeight: "0px 0px 0px 0px", customCSS: react.css(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n            input {\n              font-size: 12px;\n              font-weight: bold;\n              text-align: center;\n            }\n            input::-webkit-outer-spin-button,\n            input::-webkit-inner-spin-button {\n              -webkit-appearance: none;\n              margin: 0;\n            }\n            input[type='number'] {\n              -moz-appearance: textfield;\n            }\n            ", ";\n          "], ["\n            input {\n              font-size: 12px;\n              font-weight: bold;\n              text-align: center;\n            }\n            input::-webkit-outer-spin-button,\n            input::-webkit-inner-spin-button {\n              -webkit-appearance: none;\n              margin: 0;\n            }\n            input[type='number'] {\n              -moz-appearance: textfield;\n            }\n            ", ";\n          "])), (_b = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.inputProps) === null || _b === void 0 ? void 0 : _b.customCSS) }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.inputProps)) })), jsxRuntime.jsx(index$1, tslib.__assign({ customCSS: react.css(templateObject_5 || (templateObject_5 = tslib.__makeTemplateObject(["\n          background-color: #317c57;\n          padding: 0;\n          height: 20px;\n          width: 20px;\n          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n          ", ";\n        "], ["\n          background-color: #317c57;\n          padding: 0;\n          height: 20px;\n          width: 20px;\n          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n          ", ";\n        "])), (_c = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.buttonAddProps) === null || _c === void 0 ? void 0 : _c.customCSS) }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.buttonAddProps, { children: jsxRuntime.jsx(index$2, tslib.__assign({ color: "white", fontSize: "12px", fontWeight: "bold", cursor: "pointer" }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.textProps, { children: "+" })) }))] })));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

module.exports = ButtonsCartShop;
//# sourceMappingURL=ButtonsCartShop.js.map
