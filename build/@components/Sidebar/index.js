'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
require('../../@atoms/AtomText/style.js');
require('../../@atoms/AtomWrapper/style.js');
var index$1 = require('../../@atoms/AtomButton/index.js');
require('../../@atoms/AtomCarruosell/index.js');
require('../../@atoms/AtomCartShop/index.js');
require('next/image');
require('../../@atoms/AtomImage/style.js');
var index$2 = require('../../@atoms/AtomIcon/index.js');
var index = require('../../@atoms/AtomContainer/index.js');
var React = require('react');
require('../../@atoms/AtomLink/index.js');
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
var sideBar = require('../../@redux/actions/sideBar.js');
require('../../@hooks/usePermissions/index.js');
require('../../@hooks/useUploadFile/index.js');
require('../Alert/Context.js');
require('../Button/downloadFile.js');
require('../Chat/style.js');
require('../Header/style.js');
require('../../@types/schemas.js');

var Sidebar = function (props) {
    var children = props.children, customCSS = props.customCSS;
    var dispatch = reactRedux.useDispatch();
    var sideBar$1 = reactRedux.useSelector(function (state) { return state.sideBar; });
    var _a = tslib.__read(React.useState(true), 2), showButtonClose = _a[0], setShowButtonClose = _a[1];
    React.useEffect(function () {
        var updateSize = function () {
            var width = window.innerWidth;
            if (width < 920) {
                dispatch(sideBar.CloseSidebar());
                setShowButtonClose(false);
            }
            else {
                setShowButtonClose(true);
            }
        };
        window.addEventListener("resize", updateSize, true);
        updateSize();
        return function () { return window.removeEventListener("resize", updateSize, true); };
    });
    return (jsxRuntime.jsxs(index, tslib.__assign({}, props, { customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n        top: 0;\n        left: 0;\n        position: fixed;\n        margin-top: 80px;\n        height: calc(100vh - 80px);\n        justify-content: flex-start;\n        width: ", ";\n        z-index: 50;\n        box-shadow: rgb(0 0 0 / 10%) 0px 3px 6px;\n        ", "\n      "], ["\n        top: 0;\n        left: 0;\n        position: fixed;\n        margin-top: 80px;\n        height: calc(100vh - 80px);\n        justify-content: flex-start;\n        width: ", ";\n        z-index: 50;\n        box-shadow: rgb(0 0 0 / 10%) 0px 3px 6px;\n        ", "\n      "])), sideBar$1 ? "300px" : "80px", customCSS) }, { children: [children, showButtonClose && (jsxRuntime.jsx(index$1, tslib.__assign({ onClick: function () { return dispatch(sideBar.ToggleSidebar()); }, customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n            position: absolute;\n            display: flex;\n            padding: 0px;\n            justify-content: center;\n            align-items: center;\n            background-color: ", ";\n            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);\n            width: 35px;\n            height: 35px;\n            border-radius: 50%;\n            right: -15px;\n            top: 130px;\n            svg {\n              width: 14px;\n              height: 14px;\n              margin: ", ";\n              transform: ", ";\n              path {\n                fill: ", ";\n                stroke: ", ";\n              }\n            }\n          "], ["\n            position: absolute;\n            display: flex;\n            padding: 0px;\n            justify-content: center;\n            align-items: center;\n            background-color: ", ";\n            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);\n            width: 35px;\n            height: 35px;\n            border-radius: 50%;\n            right: -15px;\n            top: 130px;\n            svg {\n              width: 14px;\n              height: 14px;\n              margin: ", ";\n              transform: ", ";\n              path {\n                fill: ", ";\n                stroke: ", ";\n              }\n            }\n          "])), sideBar$1 ? "white" : "#f1576c", sideBar$1 ? "0px 2px 0px 0px" : "0px 0px 0px 2px", sideBar$1 ? "rotate(0deg)" : "rotate(180deg)", sideBar$1 ? "#4d4d4d" : "white", sideBar$1 ? "#4d4d4d" : "white") }, { children: jsxRuntime.jsx(index$2, { height: "15px", width: "15px", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/icons/sideBar/arrow-left.svg", customCSS: react.css(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n              margin: ", ";\n              svg {\n                g {\n                  path {\n                    fill: ", " !important;\n                    stroke: ", " !important;\n                  }\n                }\n              }\n            "], ["\n              margin: ", ";\n              svg {\n                g {\n                  path {\n                    fill: ", " !important;\n                    stroke: ", " !important;\n                  }\n                }\n              }\n            "])), sideBar$1 ? "0px 0px 0px 0px" : "0px 0px 0px 0px", sideBar$1 ? "#4d4d4d" : "white", sideBar$1 ? "#4d4d4d" : "white") }) })))] })));
};
var templateObject_1, templateObject_2, templateObject_3;

module.exports = Sidebar;
//# sourceMappingURL=index.js.map
