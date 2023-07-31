'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
var index = require('../../AtomWrapper/index.js');
var index$1 = require('../../AtomText/index.js');
var index$2 = require('../../AtomInput/index.js');
var inputs = require('../css/inputs.js');
var index$3 = require('../LoaderSmall/index.js');
var styled = require('../styled.js');

var IsLoadingTable = function (props) {
    var loading = props.loading, columns = props.columns, take = props.take;
    if (loading)
        return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("thead", { children: [columns.filter(function (item) { return item === null || item === void 0 ? void 0 : item.searchable; }).length > 0 && (jsxRuntime.jsx("tr", tslib.__assign({ className: "searchTR" }, { children: columns.map(function (_, index$3) {
                                return (columns === null || columns === void 0 ? void 0 : columns.length) === index$3 + 1 ? (jsxRuntime.jsx("th", { children: jsxRuntime.jsxs(index, tslib.__assign({ customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n                        flex-direction: row;\n                        justify-content: flex-end;\n                        align-items: center;\n                        gap: 10px;\n                      "], ["\n                        flex-direction: row;\n                        justify-content: flex-end;\n                        align-items: center;\n                        gap: 10px;\n                      "]))) }, { children: [jsxRuntime.jsxs(index$1, tslib.__assign({ customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n                          font-size: 12px;\n                          font-weight: 600;\n                          color: #383838;\n                        "], ["\n                          font-size: 12px;\n                          font-weight: 600;\n                          color: #383838;\n                        "]))) }, { children: ["Buscar:", ' '] })), jsxRuntime.jsx(index$2, { customCSS: react.css(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n                          ", "\n                        "], ["\n                          ", "\n                        "])), inputs.INPUT_TEXT) })] })) })) : (jsxRuntime.jsx("th", { children: jsxRuntime.jsx(jsxRuntime.Fragment, {}) }));
                            }) }))), jsxRuntime.jsx("tr", { children: columns === null || columns === void 0 ? void 0 : columns.map(function (e, i) { return (jsxRuntime.jsx("th", { children: jsxRuntime.jsx(index$3, {}) }, "header ".concat(i + 1))); }) })] }), jsxRuntime.jsx(styled.AtomTbodyStyled, { children: Array.from({ length: take !== null && take !== void 0 ? take : 5 }).map(function (e, i) {
                        var _a;
                        return (jsxRuntime.jsx(styled.TRStyled, tslib.__assign({ animate: {
                                opacity: 1,
                            }, initial: { opacity: 0 }, transition: { delay: i * 0.045, duration: 0.1 } }, { children: (_a = Array.from({ length: columns.length })) === null || _a === void 0 ? void 0 : _a.map(function (_, i2) { return (jsxRuntime.jsx(styled.TDStyled, { children: jsxRuntime.jsx(index$3, {}) }, "Loading-".concat(i2 + 1))); }) }), "row ".concat(i + 1)));
                    }) })] }));
    return jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.children });
};
var templateObject_1, templateObject_2, templateObject_3;

module.exports = IsLoadingTable;
//# sourceMappingURL=index.js.map
