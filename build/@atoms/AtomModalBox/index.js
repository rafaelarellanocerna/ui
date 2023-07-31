'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var index = require('../AtomModal/index.js');
var React = require('react');

var AtomModalBox = function (props) {
    var _a, _b, _c, _d, _e;
    var isOpen = props.isOpen, children = props.children, onClose = props.onClose;
    var ref = React.useRef(null);
    React.useEffect(function () {
        var handleClickOutside = function (event) {
            if (ref.current && !ref.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
    return (jsxRuntime.jsx(index, { isOpen: isOpen, componentProps: tslib.__assign({ wrapperProps: tslib.__assign(tslib.__assign({}, ((_b = (_a = props === null || props === void 0 ? void 0 : props.componentProps) === null || _a === void 0 ? void 0 : _a.wrapperProps) !== null && _b !== void 0 ? _b : {})), { refObject: ref }) }, ((_d = (_c = props === null || props === void 0 ? void 0 : props.componentProps) === null || _c === void 0 ? void 0 : _c.containerProps) !== null && _d !== void 0 ? _d : {})), component: jsxRuntime.jsx(jsxRuntime.Fragment, { children: children }) }, (_e = props.key) !== null && _e !== void 0 ? _e : ''));
};

module.exports = AtomModalBox;
//# sourceMappingURL=index.js.map
