'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
require('../../@atoms/AtomText/style.js');
var index = require('../../@atoms/AtomWrapper/index.js');
var index$1 = require('../../@atoms/AtomButton/index.js');
require('../../@atoms/AtomCarruosell/index.js');
require('../../@atoms/AtomCartShop/index.js');
require('next/image');
require('../../@atoms/AtomImage/style.js');
var index$2 = require('../../@atoms/AtomIcon/index.js');
require('../../@atoms/AtomContainer/style.js');
var React = require('react');
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

var CartShop = function (props) {
    var _a;
    var wrapperProps = props.wrapperProps, buttonProps = props.buttonProps, iconProps = props.iconProps, componentsProps = props.componentsProps, children = props.children;
    var _b = tslib.__read(React.useState(false), 2), show = _b[0], setShow = _b[1];
    var ref = React.useRef(null);
    React.useEffect(function () {
        var handleClickOutside = function (event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setShow(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
    return (jsxRuntime.jsxs(index, tslib.__assign({ customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n        position: relative;\n        max-width: max-content;\n        margin-left: 0;\n        margin-right: 20px;\n        ", ";\n      "], ["\n        position: relative;\n        max-width: max-content;\n        margin-left: 0;\n        margin-right: 20px;\n        ", ";\n      "])), wrapperProps === null || wrapperProps === void 0 ? void 0 : wrapperProps.customCSS) }, wrapperProps, { children: [show && (jsxRuntime.jsx(index, tslib.__assign({ refObject: ref, customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n            top: 150%;\n            right: 50%;\n            transform: translateX(50%);\n            position: absolute;\n            max-width: initial;\n            align-items: center;\n            justify-content: center;\n            width: 350px;\n            height: max-content;\n            background-color: #ffffff;\n            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n            margin-right: 55px;\n          "], ["\n            top: 150%;\n            right: 50%;\n            transform: translateX(50%);\n            position: absolute;\n            max-width: initial;\n            align-items: center;\n            justify-content: center;\n            width: 350px;\n            height: max-content;\n            background-color: #ffffff;\n            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n            margin-right: 55px;\n          "]))) }, { children: jsxRuntime.jsx(index, tslib.__assign({ maxHeight: "250px", borderRadius: "5px", justifyContent: "flex-start", customCSS: react.css(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n              overflow-y: auto;\n              ", ";\n            "], ["\n              overflow-y: auto;\n              ", ";\n            "])), (_a = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.wrapperContainerProps) === null || _a === void 0 ? void 0 : _a.customCSS) }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.wrapperContainerProps, { children: jsxRuntime.jsx(index, tslib.__assign({ borderRadius: "5px" }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.wrapperBodyProps, { children: children })) })) }))), jsxRuntime.jsx(index$1, tslib.__assign({ backgroundColor: "transparent", padding: "0", onClick: function () { return setShow(!show); }, customCSS: react.css(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n          position: relative;\n          ", ";\n        "], ["\n          position: relative;\n          ", ";\n        "])), buttonProps === null || buttonProps === void 0 ? void 0 : buttonProps.customCSS) }, buttonProps, { children: jsxRuntime.jsx(index$2, tslib.__assign({ height: "24px", width: "24px", color: "#317c57", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/MDC-0001/svg/shopping-cart-svgrepo-com.svg" }, iconProps)) }))] })));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

module.exports = CartShop;
//# sourceMappingURL=index.js.map
