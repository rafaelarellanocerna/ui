'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
var framerMotion = require('framer-motion');
var index = require('../../@atoms/AtomContainer/index.js');

var spring = {
    x: { type: "spring", damping: 20, stiffness: 180, when: "afterChildren" },
    default: { duration: 0.45 },
};
var animation = {
    transition: spring,
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};
var LayoutAnimation = function (props) {
    var children = props.children, pathname = props.pathname;
    return (jsxRuntime.jsx(framerMotion.AnimatePresence, tslib.__assign({ exitBeforeEnter: true }, { children: react.createElement(index, tslib.__assign({ as: "main", minHeight: "100vh" }, props, animation, { key: pathname !== null && pathname !== void 0 ? pathname : '1' }), children) })));
};

module.exports = LayoutAnimation;
//# sourceMappingURL=index.js.map
