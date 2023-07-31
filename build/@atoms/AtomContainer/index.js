'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var style = require('./style.js');

var Container = function (props) {
    var children = props.children, as = props.as;
    switch (as) {
        case 'nav':
            return (jsxRuntime.jsx(style.AtomContainerNavStyled, tslib.__assign({}, props, { children: children })));
        case 'footer':
            return (jsxRuntime.jsx(style.AtomContainerFooterStyled, tslib.__assign({}, props, { children: children })));
        default:
            return (jsxRuntime.jsx(style.AtomContainerDefaultStyled, tslib.__assign({}, props, { children: children })));
    }
};

module.exports = Container;
//# sourceMappingURL=index.js.map
