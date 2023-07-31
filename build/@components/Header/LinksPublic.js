'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
require('@emotion/react');
require('../../@atoms/AtomText/style.js');
require('../../@atoms/AtomWrapper/style.js');
require('../../@atoms/AtomButton/styled.js');
require('../../@atoms/AtomLoader/style.js');
require('../../@atoms/AtomCarruosell/index.js');
require('../../@atoms/AtomCartShop/index.js');
require('next/image');
require('../../@atoms/AtomImage/style.js');
var index$1 = require('../../@atoms/AtomIcon/index.js');
require('../../@atoms/AtomContainer/style.js');
var React = require('react');
var index = require('../../@atoms/AtomLink/index.js');
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
var style = require('./style.js');
require('../../@types/schemas.js');

var HeaderLinkPublic = function (props) {
    var data = props.data, _a = props.level, level = _a === void 0 ? 0 : _a, componentsProps = props.componentsProps, iconProps = props.iconProps, linkedProps = props.linkedProps;
    var _b = tslib.__read(React.useState(false), 2), showSubLinks = _b[0], setShowSubLinks = _b[1];
    var _c = tslib.__read(React.useState(0), 2), show = _c[0], setShow = _c[1];
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: data === null || data === void 0 ? void 0 : data.map(function (subField, index$2) { return (jsxRuntime.jsxs(React.Fragment, { children: [jsxRuntime.jsxs(style.LinkPublic, tslib.__assign({ onClick: function () {
                        var _a, _b;
                        if (subField.type === 'dropdown' && index$2 === show) {
                            setShowSubLinks(!showSubLinks);
                        }
                        else if (!showSubLinks) {
                            setShowSubLinks(!showSubLinks);
                        }
                        setShow(index$2);
                        (_b = (_a = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.linksProps) === null || _a === void 0 ? void 0 : _a.onClick) === null || _b === void 0 ? void 0 : _b.call(_a);
                    } }, linkedProps, { children: [jsxRuntime.jsx(index, tslib.__assign({ width: "100%", as: "a" }, subField, { color: "#303030", fontWeight: 600, padding: "15px ".concat(level * 10 + 40, "px") }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.linksProps, { children: subField.label })), subField.type === 'dropdown' && (jsxRuntime.jsx(index$1, tslib.__assign({}, iconProps, { height: "14px", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-commons/frontend-library/icons/arrow-down-3101.svg", color: "#1F1F1F" })))] })), showSubLinks && show === index$2 && (jsxRuntime.jsx(HeaderLinkPublic, { componentsProps: componentsProps, iconProps: iconProps, linkedProps: linkedProps, data: subField.subFields, level: level + 1 }))] }, subField.id)); }) }));
};

module.exports = HeaderLinkPublic;
//# sourceMappingURL=LinksPublic.js.map
