'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var React = require('react');
var error = require('./error.js');
var style = require('./style.js');

var Animation = {
    whileTap: { scale: 0.98, opacity: 0.8 },
};
var mapRange = function (value, low1, high1, low2, high2) { return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1); };
var isNegative = function (range, min, max) {
    var RangeMax = mapRange(range.max, 0, 100, min, max);
    var RangeMin = mapRange(range.min, 0, 100, min, max);
    return RangeMax - RangeMin < 0
        ? { min: RangeMax, max: RangeMin }
        : { min: RangeMin, max: RangeMax };
};
var InputRange = function (props) {
    var onUpdateValues = props.onUpdateValues, formik = props.formik, id = props.id, children = props.children;
    var _a = props.minRange, minRange = _a === void 0 ? 0 : _a, _b = props.maxRange, maxRange = _b === void 0 ? 100 : _b, _c = props.loadValues, loadValues = _c === void 0 ? {
        min: 0,
        max: 100,
    } : _c;
    var labelWidth = props.labelWidth, labelColor = props.labelColor, labelFontFamily = props.labelFontFamily, labelFontSize = props.labelFontSize, labelFontWeight = props.labelFontWeight, labelMargin = props.labelMargin, labelPadding = props.labelPadding, spanMargin = props.spanMargin, customCSS = props.customCSS, label = props.label;
    var _d = tslib.__read(React.useState({
        min: 0,
        max: 100,
    }), 2), rangeValue = _d[0], setRangeValue = _d[1];
    React.useEffect(function () {
        setRangeValue(loadValues);
    }, [loadValues.max, loadValues.min]);
    React.useEffect(function () {
        if (formik) {
            formik.setFieldValue(id || 'range', isNegative(rangeValue, minRange, maxRange));
        }
        else if (onUpdateValues) {
            onUpdateValues(isNegative(rangeValue, minRange, maxRange));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rangeValue]);
    return (jsxRuntime.jsxs(style.InputRangeLabelStyled, tslib.__assign({ labelWidth: labelWidth, labelColor: labelColor, labelFontFamily: labelFontFamily, labelFontSize: labelFontSize, labelFontWeight: labelFontWeight, labelMargin: labelMargin, labelPadding: labelPadding, spanMargin: spanMargin, customCSS: customCSS }, { children: [label && jsxRuntime.jsx("span", { children: label }), jsxRuntime.jsxs(style.SliderTrackStyled, tslib.__assign({}, props, { minTrack: rangeValue.min, maxTrack: rangeValue.max }, { children: [jsxRuntime.jsx(style.InputRangeStyled, tslib.__assign({}, Animation, { type: "range" }, props, { value: rangeValue.min.toString(), onChange: function (e) {
                            setRangeValue({
                                min: Number(e.target.value),
                                max: rangeValue.max,
                            });
                        } })), jsxRuntime.jsx(style.InputRangeStyled, tslib.__assign({}, Animation, { type: "range" }, props, { value: rangeValue.max.toString(), onChange: function (e) {
                            setRangeValue({
                                min: rangeValue.min,
                                max: Number(e.target.value),
                            });
                        } }))] })), children, label, jsxRuntime.jsx(error, tslib.__assign({}, props))] })));
};

module.exports = InputRange;
//# sourceMappingURL=inputRange.js.map
