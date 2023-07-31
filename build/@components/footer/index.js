'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var index = require('../../@atoms/AtomContainer/index.js');

var Footer = function (props) {
    var children = props.children;
    return (jsxRuntime.jsx(index, tslib.__assign({ backgroundColor: "#ff4f66", as: "footer" }, props, { children: children })));
};

module.exports = Footer;
//# sourceMappingURL=index.js.map
