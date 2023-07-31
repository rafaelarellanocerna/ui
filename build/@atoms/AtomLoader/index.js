'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var style = require('./style.js');

var Loader = function (props) {
    var isLoading = props.isLoading;
    return isLoading ? (jsxRuntime.jsx(style.LoaderContainer, tslib.__assign({}, props, { children: jsxRuntime.jsxs("div", tslib.__assign({ className: "lds-ring" }, { children: [jsxRuntime.jsx("div", {}), jsxRuntime.jsx("div", {}), jsxRuntime.jsx("div", {}), jsxRuntime.jsx("div", {})] })) }))) : null;
};

module.exports = Loader;
//# sourceMappingURL=index.js.map
