'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var index = require('./style/index.js');

var ProgressBar = function (_a) {
    var _b = _a.backgroundColor, backgroundColor = _b === void 0 ? 'gray' : _b, progressColor = _a.progressColor, borderRadius = _a.borderRadius, rightLabel = _a.rightLabel, innerLabel = _a.innerLabel, leftLabel = _a.leftLabel, className = _a.className, progress = _a.progress, height = _a.height, width = _a.width, row = _a.row;
    var containerStyles = {
        height: height || 5,
        width: width || '100%',
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        margin: 'auto',
    };
    var fillerStyles = {
        height: '100%',
        width: "".concat(progress, "%"),
        backgroundColor: progressColor || 'red',
        borderRadius: 'inherit',
        textAlign: 'right',
    };
    return (jsxRuntime.jsxs(index.Wrapper, tslib.__assign({ className: "".concat(className, " progress-bar"), row: row }, { children: [!row && (jsxRuntime.jsxs(index.LabelWrapper, tslib.__assign({ className: "label-wrapper" }, { children: [jsxRuntime.jsx("span", tslib.__assign({ className: "left-label" }, { children: leftLabel })), rightLabel && jsxRuntime.jsx("span", tslib.__assign({ className: "right-label" }, { children: rightLabel }))] }))), row && leftLabel && jsxRuntime.jsx("span", tslib.__assign({ className: "left-label" }, { children: leftLabel })), jsxRuntime.jsx("div", tslib.__assign({ style: containerStyles, className: "bar" }, { children: jsxRuntime.jsx("div", tslib.__assign({ style: fillerStyles, className: "progress" }, { children: innerLabel && jsxRuntime.jsx("span", tslib.__assign({ className: "inner-label" }, { children: innerLabel })) })) })), row && rightLabel && jsxRuntime.jsx("span", tslib.__assign({ className: "right-label" }, { children: rightLabel }))] })));
};

exports.ProgressBar = ProgressBar;
//# sourceMappingURL=index.js.map
