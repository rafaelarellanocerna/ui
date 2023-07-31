'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var index$1 = require('../../AtomIcon/index.js');
var index = require('../../AtomLink/index.js');
var React = require('react');
var style = require('./style.js');

var AtomDropdownSidebarAdmin = function (props) {
    var links = props.links, _a = props.level, level = _a === void 0 ? 0 : _a, componentsProps = props.componentsProps;
    var _b = tslib.__read(React.useState(false), 2), showSubLinks = _b[0], setShowSubLinks = _b[1];
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: links === null || links === void 0 ? void 0 : links.map(function (subField) { return (jsxRuntime.jsxs(React.Fragment, { children: [jsxRuntime.jsxs(style.LinkStyled, tslib.__assign({ onClick: function () {
                        return subField.type === 'dropdown' && setShowSubLinks(!showSubLinks);
                    } }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.linkProps, { children: [jsxRuntime.jsx(index, tslib.__assign({ as: "a" }, subField, { color: "#7F7F7F", fontWeight: 600, padding: "15px ".concat(level * 10, "px") }, { children: subField.label })), subField.type === 'dropdown' && (jsxRuntime.jsx(index$1, { height: "14px", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-commons/frontend-library/icons/arrow-down-3101.svg", color: "#1F1F1F" }))] })), showSubLinks && (jsxRuntime.jsx(AtomDropdownSidebarAdmin, { links: subField.subFields, level: level + 1 }))] }, subField.id)); }) }));
};

module.exports = AtomDropdownSidebarAdmin;
//# sourceMappingURL=index.js.map
