'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var framerMotion = require('framer-motion');
var react = require('@emotion/react');
var index$2 = require('../../@atoms/AtomText/index.js');
var index = require('../../@atoms/AtomWrapper/index.js');
var index$3 = require('../../@atoms/AtomButton/index.js');
require('../../@atoms/AtomCarruosell/index.js');
require('../../@atoms/AtomCartShop/index.js');
require('next/image');
require('../../@atoms/AtomImage/style.js');
var index$1 = require('../../@atoms/AtomIcon/index.js');
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
var Colors = require('./Colors.js');
var Context = require('./Context.js');
require('../Button/downloadFile.js');
require('../Chat/style.js');
require('../Header/style.js');
require('../../@types/schemas.js');

var Alert = function (_a) {
    var children = _a.children, time = _a.time, customCSS = _a.customCSS;
    var _b = tslib.__read(React.useState([]), 2), alert = _b[0], setAlert = _b[1];
    return (jsxRuntime.jsxs(Context.ContextAlert.Provider, tslib.__assign({ value: { alert: alert, setAlert: setAlert } }, { children: [jsxRuntime.jsx(framerMotion.AnimatePresence, tslib.__assign({ exitBeforeEnter: true }, { children: alert.length > 0 && (jsxRuntime.jsx(index, tslib.__assign({ maxWidth: "100vw", position: "fixed", zIndex: "9999", padding: "10px", alignItems: "center", justifyContent: "center", customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n              top: 0;\n              left: 50%;\n              transform: translateX(-50%);\n              animation: all 0.5s ease-in-out;\n              ", "\n            "], ["\n              top: 0;\n              left: 50%;\n              transform: translateX(-50%);\n              animation: all 0.5s ease-in-out;\n              ", "\n            "])), customCSS) }, { children: jsxRuntime.jsx(framerMotion.AnimatePresence, { children: alert.map(function (item) { return (jsxRuntime.jsx(UniqueAlert, tslib.__assign({}, item, { setAlert: setAlert, time: time }), item.id)); }) }) }), alert.length > 0 ? 'ok' : 'no')) })), children] })));
};
var DefaultAnimation = {
    transition: {
        default: { duration: 0.5 },
    },
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};
var UniqueAlert = function (props) {
    var id = props.id, message = props.message, setAlert = props.setAlert, type = props.type, _a = props.time, time = _a === void 0 ? 3000 : _a;
    var ref = React.useRef(null);
    React.useEffect(function () {
        var timer = setTimeout(function () {
            if (time > 0) {
                setAlert(function (a) { return a.filter(function (item) { return item.id !== id; }); });
            }
        }, time);
        return function () { return clearTimeout(timer); };
    }, [alert, time]);
    return (jsxRuntime.jsxs(index, tslib.__assign({ maxWidth: "max-content", margin: "0px 0px 20px 0px", flexDirection: "row", alignItems: "center", justifyContent: "center", padding: "15px 25px", borderRadius: "2px", backgroundColor: Colors.typeAlert[type].color, refObject: ref }, DefaultAnimation, { children: [jsxRuntime.jsx(index$1, { icon: Colors.typeAlert[type].icon, width: "15px", height: "12px", color: "white" }), jsxRuntime.jsx(index$2, tslib.__assign({ padding: "3px 0px 0px 0px", color: "white", fontWeight: 600, margin: "0px 0px 0px 15px" }, { children: message })), jsxRuntime.jsx(index$3, tslib.__assign({ backgroundColor: "white", padding: "8px", borderRadius: "4px", margin: "0px 0px 0px 20px", onClick: function () { return setAlert(function (a) { return a.filter(function (item) { return item.id !== id; }); }); } }, { children: jsxRuntime.jsx(index$1, { icon: Colors.typeAlert[type].icon, width: "8px", height: "8px", color: Colors.typeAlert[type].color }) }))] })));
};
var templateObject_1;

module.exports = Alert;
//# sourceMappingURL=index.js.map
