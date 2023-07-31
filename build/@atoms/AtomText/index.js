'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var style = require('./style.js');

var Text = function (props) {
    var children = props.children, as = props.as;
    switch (as) {
        case 'a':
            return jsxRuntime.jsx(style.TextStyledA, tslib.__assign({}, props, { children: children }));
        case 'p':
            return jsxRuntime.jsx(style.TextStyledP, tslib.__assign({}, props, { children: children }));
        case 'h1':
            return jsxRuntime.jsx(style.TextStyledH1, tslib.__assign({}, props, { children: children }));
        case 'h2':
            return jsxRuntime.jsx(style.TextStyledH2, tslib.__assign({}, props, { children: children }));
        case 'h3':
            return jsxRuntime.jsx(style.TextStyledH3, tslib.__assign({}, props, { children: children }));
        case 'h4':
            return jsxRuntime.jsx(style.TextStyledH4, tslib.__assign({}, props, { children: children }));
        case 'h5':
            return jsxRuntime.jsx(style.TextStyledH5, tslib.__assign({}, props, { children: children }));
        case 'h6':
            return jsxRuntime.jsx(style.TextStyledH6, tslib.__assign({}, props, { children: children }));
        default:
            return jsxRuntime.jsx(style.TextStyledDefault, tslib.__assign({}, props, { children: children }));
    }
};

module.exports = Text;
//# sourceMappingURL=index.js.map
