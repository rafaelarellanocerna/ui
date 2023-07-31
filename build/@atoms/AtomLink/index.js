'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var NextLink = require('next/link');
var React = require('react');
var style = require('../AtomText/style.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var NextLink__default = /*#__PURE__*/_interopDefaultLegacy(NextLink);

var Animation = {
    whileHover: { scale: 1.02, transition: { duration: 0.3 } },
    whileTap: { scale: 0.95, opacity: 0.8 },
};
var LinkForewardRef = React.forwardRef(function (props, ref) {
    var children = props.children;
    return (jsxRuntime.jsx(style.TextStyledA, tslib.__assign({}, Animation, { fontWeight: "bold", cursor: "pointer" }, props, { ref: ref }, { children: children })));
});
LinkForewardRef.displayName = 'LinkForewardRef';
var Link = function (props) {
    var children = props.children, link = props.link;
    return link ? (jsxRuntime.jsx(NextLink__default["default"], tslib.__assign({ href: link, passHref: true }, { children: jsxRuntime.jsx(LinkForewardRef, tslib.__assign({}, props, { children: children })) }))) : (jsxRuntime.jsx(style.TextStyledA, tslib.__assign({}, Animation, { fontWeight: "bold", cursor: "pointer", target: "_blank" }, props, { children: children })));
};

module.exports = Link;
//# sourceMappingURL=index.js.map
