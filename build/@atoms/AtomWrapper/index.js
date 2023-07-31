'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var style = require('./style.js');

var DefaultAnimation = {
    transition: {
        default: { duration: 0.3 },
    },
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};
var Wrapper = function (props) {
    var children = props.children, refObject = props.refObject, as = props.as;
    switch (as) {
        case 'form':
            return (jsxRuntime.jsx(style.AtomWrapperFormStyled, tslib.__assign({ ref: refObject }, DefaultAnimation, props, { children: children })));
        case 'section':
            return (jsxRuntime.jsx(style.AtomWrapperSectionStyled, tslib.__assign({ ref: refObject }, DefaultAnimation, props, { children: children })));
        case 'li':
            return (jsxRuntime.jsx(style.AtomWrapperLiStyled, tslib.__assign({ ref: refObject }, DefaultAnimation, props, { children: children })));
        default:
            return (jsxRuntime.jsx(style.AtomWrapperDefaultStyled, tslib.__assign({ ref: refObject }, DefaultAnimation, props, { children: children })));
    }
};

module.exports = Wrapper;
//# sourceMappingURL=index.js.map
