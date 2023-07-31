'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
var router = require('next/router');
var React = require('react');
var index$3 = require('../AtomInput/index.js');
var index = require('../AtomWrapper/index.js');
var index$4 = require('../AtomButton/index.js');
var index$2 = require('../AtomSeparator/index.js');
var index$1 = require('../AtomText/index.js');

var mapRange = function (value, low1, high1, low2, high2) { return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1); };
var AtomFilterRange = function (props) {
    var _a;
    var _b = props.min, min = _b === void 0 ? 0 : _b, _c = props.max, max = _c === void 0 ? 100 : _c, onClick = props.onClick, route = props.route, componentsProps = props.componentsProps;
    var router$1 = router.useRouter();
    var _d = router$1.query, priceMin = _d.priceMin, priceMax = _d.priceMax;
    var _e = tslib.__read(React.useState({ min: min, max: max }), 2), price = _e[0], setPrice = _e[1];
    var _f = tslib.__read(React.useState({
        status: false,
        value: { min: 0, max: 100 },
    }), 2), loadValue = _f[0], setLoadValue = _f[1];
    React.useEffect(function () {
        if (priceMin && priceMax && loadValue.status === false) {
            setLoadValue({
                status: true,
                value: {
                    min: mapRange(Number(priceMin), min, max, 0, 100),
                    max: mapRange(Number(priceMax), min, max, 0, 100),
                },
            });
        }
    }, [priceMin, priceMax]);
    return (jsxRuntime.jsxs(index, tslib.__assign({}, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.wrapperProps, { customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n        @media only screen and (max-width: 1200px) {\n          max-width: 200px;\n          margin: 0px 10px;\n        }\n        @media only screen and (max-width: 520px) {\n          max-width: 100%;\n        }\n        ", "\n      "], ["\n        @media only screen and (max-width: 1200px) {\n          max-width: 200px;\n          margin: 0px 10px;\n        }\n        @media only screen and (max-width: 520px) {\n          max-width: 100%;\n        }\n        ", "\n      "])), (_a = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.wrapperProps) === null || _a === void 0 ? void 0 : _a.customCSS) }, { children: [jsxRuntime.jsx(index$1, tslib.__assign({ margin: "30px 0px 15px 0px", color: "#f1576c", fontSize: "16px", fontWeight: 700 }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.titleProps, { children: "Filtrar por precio" })), jsxRuntime.jsx(index$2, tslib.__assign({ height: "1px", width: "100%", color: "#cacaca", margin: "0px 0px 30px 0px" }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.separatorProps)), jsxRuntime.jsx(index$3, tslib.__assign({ type: "range", minRange: min, maxRange: max, thumbBorder: "2px solid #f1576c", trackColor: "#f1576c", loadValues: loadValue.value, onUpdateValues: function (range) {
                    setPrice(range);
                }, id: "priceRange" }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.inputProps)), jsxRuntime.jsx(index$1, tslib.__assign({ color: "#888888", fontWeight: 600 }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.descriptionProps, { children: "Precio: $".concat(price.min, " - $").concat(price.max) })), jsxRuntime.jsx(index$4, tslib.__assign({ backgroundColor: "#f1576c", padding: "8px 25px", margin: "15px 0px 0px 0px", onClick: function () {
                    router$1.push({
                        pathname: "".concat(route || "".concat(router$1.pathname, "/")),
                        query: tslib.__assign(tslib.__assign({}, router$1.query), { priceMin: price.min, priceMax: price.max }),
                    });
                    if (onClick) {
                        onClick(price);
                    }
                } }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.buttonProps, { children: "Filtrar" }))] })));
};
var templateObject_1;

module.exports = AtomFilterRange;
//# sourceMappingURL=index.js.map
