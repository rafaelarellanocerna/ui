'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
require('../AtomText/style.js');
var index = require('../AtomWrapper/index.js');
require('../AtomButton/styled.js');
require('../AtomLoader/style.js');
require('../AtomCarruosell/index.js');
require('../AtomCartShop/index.js');
require('next/image');
require('../AtomImage/style.js');
var React = require('react');
require('../AtomIcon/styled.js');
require('../AtomContainer/style.js');
require('../AtomLink/index.js');
require('../AtomDropdownSidebar/admin/style.js');
require('../AtomDropdownSidebar/default/style.js');
require('../AtomDropdownSidebar/links/style.js');
require('next/router');
require('lodash');
require('../AtomInput/style.js');
require('uuid');
require('react-redux');
require('../AtomSeparator/style.js');
require('../../@utils/uploadImage.js');
require('graphql-request');
require('../../src/config/index.js');
var framerMotion = require('framer-motion');
require('../AtomImageEditor/pintura/pintura.js');
require('../AtomImageEditor/react-pintura/PinturaEditor.js');
require('../AtomImageEditor/react-pintura/PinturaEditorModal.js');
require('../AtomImageEditor/react-pintura/PinturaEditorOverlay.js');
require('../AtomImageEditor/styled.js');
require('../AtomInput/inputWithPagination.js');
require('../AtomMaps/style.js');
require('../AtomNotification/styles.js');
require('../AtomProgressBar/component/style/index.js');
require('next/head');
require('../AtomTable/style.js');
require('../AtomTableQuery/css/button.js');
require('../AtomTableQuery/css/inputs.js');
require('../AtomTableQuery/styled.js');
require('../AtomTableQuery/apollo/query/Products.js');
require('../AtomTextEditor/index.js');
require('../AtomTextEditorHermer/index.js');
require('../../@molecules/MoleculePlayer/style.js');
require('../../@hooks/usePermissions/index.js');
require('../../@hooks/useUploadFile/index.js');
require('../../@components/Alert/Context.js');
require('../../@components/Button/downloadFile.js');
require('../../@components/Chat/style.js');
require('../../@components/Header/style.js');
require('../../@types/schemas.js');

var AtomWrapperScroll = function (_a) {
    var refObject = _a.refObject, children = _a.children, minRestoffsetTop = _a.minRestoffsetTop, customCSSW = _a.customCSSW;
    var _b = tslib.__read(React.useState(false), 2), scroll = _b[0], setScroll = _b[1];
    React.useEffect(function () {
        var getScroll = function () {
            var _a;
            var rest = minRestoffsetTop !== null && minRestoffsetTop !== void 0 ? minRestoffsetTop : 40;
            setScroll(window.scrollY > (((_a = refObject === null || refObject === void 0 ? void 0 : refObject.current) === null || _a === void 0 ? void 0 : _a.offsetTop) || 0) - rest);
        };
        var watchScroll = function () {
            window.addEventListener('scroll', getScroll, true);
        };
        watchScroll();
        return function () {
            window.removeEventListener('scroll', getScroll, true);
        };
    });
    return scroll ? (jsxRuntime.jsx(framerMotion.AnimatePresence, { children: jsxRuntime.jsx(index, tslib.__assign({ customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n          display: flex;\n          flex-direction: row;\n          position: fixed;\n          z-index: 2;\n          bottom: 10vh;\n          right: 5vw;\n          width: max-content;\n          ", "\n        "], ["\n          display: flex;\n          flex-direction: row;\n          position: fixed;\n          z-index: 2;\n          bottom: 10vh;\n          right: 5vw;\n          width: max-content;\n          ", "\n        "])), customCSSW !== null && customCSSW !== void 0 ? customCSSW : react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject([""], [""])))) }, { children: children })) })) : null;
};
var templateObject_1, templateObject_2;

module.exports = AtomWrapperScroll;
//# sourceMappingURL=index.js.map
