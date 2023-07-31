'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
require('@emotion/react');
require('../../@atoms/AtomText/style.js');
require('../../@atoms/AtomWrapper/style.js');
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
require('../Chat/style.js');
require('../Header/style.js');
require('../../@types/schemas.js');
var useLazyQuery = require('../../node_modules/@apollo/client/react/hooks/useLazyQuery.js');
var index = require('../../node_modules/graphql-tag/lib/index.js');

var DOWNLOAD_FILES = index.gql(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n  query downloadFile($token: String!) {\n    downloadFile(token: $token) {\n      url\n    }\n  }\n"], ["\n  query downloadFile($token: String!) {\n    downloadFile(token: $token) {\n      url\n    }\n  }\n"])));
var DownloadFile = function (props) {
    var _a = tslib.__read(useLazyQuery.useLazyQuery(DOWNLOAD_FILES), 1), getUrlFile = _a[0];
    var downloadFile = function (name, token) {
        getUrlFile({
            variables: { token: token },
        }).then(function (response) {
            var _a, _b, _c, _d, _e;
            var url = (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.downloadFile) === null || _b === void 0 ? void 0 : _b.url;
            var a = (_c = window === null || window === void 0 ? void 0 : window.document) === null || _c === void 0 ? void 0 : _c.createElement("a");
            a.href = url || "";
            a.target = "_blank";
            a.download = name;
            (_d = document === null || document === void 0 ? void 0 : document.body) === null || _d === void 0 ? void 0 : _d.appendChild(a);
            a.click();
            (_e = document === null || document === void 0 ? void 0 : document.body) === null || _e === void 0 ? void 0 : _e.removeChild(a);
        });
    };
    return (jsxRuntime.jsx(index$1, tslib.__assign({ customCSS: props === null || props === void 0 ? void 0 : props.customCSS, onClick: function () {
            downloadFile(props === null || props === void 0 ? void 0 : props.nameFileDownload, props === null || props === void 0 ? void 0 : props.token);
        } }, { children: props === null || props === void 0 ? void 0 : props.buttonText })));
};
var templateObject_1;

exports.DOWNLOAD_FILES = DOWNLOAD_FILES;
exports["default"] = DownloadFile;
//# sourceMappingURL=downloadFile.js.map
