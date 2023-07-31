'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');

var childrenLayout = function (props) { return jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.children }); };
var AllLayouts = {
    login: childrenLayout,
    admin: childrenLayout,
    default: childrenLayout,
    profile: childrenLayout,
    dashboard: childrenLayout,
    customize: childrenLayout,
};

exports.AllLayouts = AllLayouts;
//# sourceMappingURL=index.js.map
