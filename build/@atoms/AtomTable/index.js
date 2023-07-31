'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
var index$3 = require('../AtomButton/index.js');
var index$4 = require('../AtomIcon/index.js');
var index$2 = require('../AtomInput/index.js');
var index$5 = require('../AtomLoader/index.js');
var index$1 = require('../AtomText/index.js');
var index = require('../AtomWrapper/index.js');
var style = require('./style.js');

var OptionsPagination = [
    {
        id: 'paginationKey0',
        label: '5',
        value: '5',
    },
    {
        id: 'paginationKey1',
        label: '10',
        value: '10',
    },
    {
        id: 'paginationKey1',
        label: '25',
        value: '25',
    },
    {
        id: 'paginationKey1',
        label: '50',
        value: '50',
    },
    // {
    //   id: 'paginationKey1',
    //   label: '75',
    //   value: '75',
    // },
    // {
    //   id: 'paginationKey1',
    //   label: '100',
    //   value: '100',
    // },
];
var Table = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var columns = props.columns, data = props.data, tableWidth = props.tableWidth, customCSS = props.customCSS, state = props.state, dispatch = props.dispatch, loading = props.loading, loaderWrapper = props.loaderWrapper, loaderProps = props.loaderProps;
    var TableData = tslib.__assign(tslib.__assign({}, props), { data: null, customCSS: null });
    return (jsxRuntime.jsxs(index, tslib.__assign({ width: tableWidth || "100%", padding: "0px 0px", borderRadius: "4px", overflowX: "auto" }, TableData, { customCSS: customCSS !== null && customCSS !== void 0 ? customCSS : react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n          overflow-x: auto;\n          /* width */\n          ::-webkit-scrollbar {\n            height: 10px;\n          }\n\n          ::-webkit-scrollbar-thumb {\n            border-radius: 2px;\n          }\n        "], ["\n          overflow-x: auto;\n          /* width */\n          ::-webkit-scrollbar {\n            height: 10px;\n          }\n\n          ::-webkit-scrollbar-thumb {\n            border-radius: 2px;\n          }\n        "]))) }, { children: [jsxRuntime.jsxs(style.AtomTableStyled, tslib.__assign({}, TableData, { children: [(columns === null || columns === void 0 ? void 0 : columns.some(function (column) { return column.title; })) && (jsxRuntime.jsx("thead", { children: jsxRuntime.jsx("tr", { children: columns.length > 0 &&
                                (columns === null || columns === void 0 ? void 0 : columns.map(function (e, i) {
                                    var _a;
                                    return (jsxRuntime.jsx("th", tslib.__assign({ style: { width: "".concat(e.width) } }, { children: e.title }), "header ".concat((_a = e.id) !== null && _a !== void 0 ? _a : i + 1)));
                                })) }) })), jsxRuntime.jsx(style.AtomTbodyStyled, { children: (data === null || data === void 0 ? void 0 : data.length) > 0 &&
                            (data === null || data === void 0 ? void 0 : data.map(function (e, i) {
                                var _a;
                                return (jsxRuntime.jsx("tr", { children: columns.length > 0 &&
                                        (columns === null || columns === void 0 ? void 0 : columns.map(function (td, j) { return (jsxRuntime.jsx(style.TDStyled, tslib.__assign({}, td, { title: "".concat(td === null || td === void 0 ? void 0 : td.title) }, { children: td.view(e) }), "cell ".concat(i + 1, " ").concat(j + 1))); })) }, "row ".concat((_a = e.id) !== null && _a !== void 0 ? _a : i + 1)));
                            })) })] })), dispatch && state && (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs(index, tslib.__assign({ flexDirection: "row", justifyContent: "flex-end", alignItems: "center", customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n              padding: 20px 10px;\n              background-color: #ffffff;\n              box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);\n            "], ["\n              padding: 20px 10px;\n              background-color: #ffffff;\n              box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);\n            "]))) }, { children: [jsxRuntime.jsxs(index, tslib.__assign({ flexDirection: "row", height: "100%", maxWidth: "max-content", justifyContent: "center", alignItems: "center" }, { children: [jsxRuntime.jsx(index$1, tslib.__assign({ color: "#4A4A49", fontWeight: 500, margin: "0px 15px 0px 0px" }, { children: "Mostrar" })), jsxRuntime.jsx(index$2, { type: "select", border: "1px solid #e0e0e0", labelWidth: "80px", height: "30px", customCSS: react.css(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n                  span {\n                    display: none;\n                  }\n                "], ["\n                  span {\n                    display: none;\n                  }\n                "]))), value: "".concat(state.limit), options: OptionsPagination === null || OptionsPagination === void 0 ? void 0 : OptionsPagination.filter(function (e) { return Number(e.value) <= state.totaldocs; }), onChange: function (e) {
                                        dispatch === null || dispatch === void 0 ? void 0 : dispatch(tslib.__assign(tslib.__assign({}, state), { limit: parseInt(e.target.value, 10) }));
                                    } })] })), jsxRuntime.jsxs(index, tslib.__assign({ maxWidth: "max-content", margin: "0px 20px" }, { children: [jsxRuntime.jsxs(index$1, tslib.__assign({ color: "#4A4A49", fontWeight: 500, align: "center" }, { children: [((_a = state.limit) !== null && _a !== void 0 ? _a : 0) * ((_b = (state === null || state === void 0 ? void 0 : state.page) + 1) !== null && _b !== void 0 ? _b : 0) >
                                            ((_c = state === null || state === void 0 ? void 0 : state.totaldocs) !== null && _c !== void 0 ? _c : 0)
                                            ? (_d = state === null || state === void 0 ? void 0 : state.totaldocs) !== null && _d !== void 0 ? _d : 0
                                            : ((_e = state.limit) !== null && _e !== void 0 ? _e : 0) * ((_f = (state === null || state === void 0 ? void 0 : state.page) + 1) !== null && _f !== void 0 ? _f : 0), ' ', "de ", (_g = state === null || state === void 0 ? void 0 : state.totaldocs) !== null && _g !== void 0 ? _g : 0] })), jsxRuntime.jsxs(index$1, tslib.__assign({ color: "#4A4A49", fontWeight: 500, align: "center" }, { children: ["P\u00E1gina ", (_h = (state === null || state === void 0 ? void 0 : state.page) + 1) !== null && _h !== void 0 ? _h : 0, " de", ' ', Math.ceil(((_j = state.totaldocs) !== null && _j !== void 0 ? _j : 0) / ((_k = state.limit) !== null && _k !== void 0 ? _k : 0))] }))] })), jsxRuntime.jsxs(index, tslib.__assign({ maxWidth: "max-content", margin: "0px 0px", flexDirection: "row" }, { children: [jsxRuntime.jsx(index$3, tslib.__assign({ padding: "0px 0px", margin: "0px 10px 0px 0px", backgroundColor: "transparent", onClick: function () {
                                        var _a;
                                        dispatch === null || dispatch === void 0 ? void 0 : dispatch(tslib.__assign(tslib.__assign({}, state), { page: (state === null || state === void 0 ? void 0 : state.hasprevpage)
                                                ? ((_a = state === null || state === void 0 ? void 0 : state.page) !== null && _a !== void 0 ? _a : 0) - 1
                                                : state === null || state === void 0 ? void 0 : state.page }));
                                    } }, { children: jsxRuntime.jsx(index$4, { height: "18px", width: "18px", color: (state === null || state === void 0 ? void 0 : state.hasprevpage) ? '#262626' : '#c0c0c0', icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/MDC-0001/svg/chevron-left-solid%20(2).svg" }) })), jsxRuntime.jsx(index$3, tslib.__assign({ padding: "0px 0px", margin: "0px 0px 0px 10px", backgroundColor: "transparent", onClick: function () {
                                        var _a;
                                        dispatch === null || dispatch === void 0 ? void 0 : dispatch(tslib.__assign(tslib.__assign({}, state), { page: (state === null || state === void 0 ? void 0 : state.hasnextpage)
                                                ? ((_a = state === null || state === void 0 ? void 0 : state.page) !== null && _a !== void 0 ? _a : 0) + 1
                                                : state === null || state === void 0 ? void 0 : state.page }));
                                    } }, { children: jsxRuntime.jsx(index$4, { height: "18px", width: "18px", color: (state === null || state === void 0 ? void 0 : state.hasnextpage) ? '#262626' : '#c0c0c0', icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/MDC-0001/svg/chevron-right-solid%20(7).svg" }) }))] }))] })) })), loading && (jsxRuntime.jsx(index, tslib.__assign({}, loaderWrapper, { children: jsxRuntime.jsx(index$5, tslib.__assign({}, loaderProps)) })))] })));
};
var templateObject_1, templateObject_2, templateObject_3;

module.exports = Table;
//# sourceMappingURL=index.js.map
