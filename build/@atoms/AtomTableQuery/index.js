'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
var React = require('react');
var reactRedux = require('react-redux');
var index$4 = require('../AtomButton/index.js');
var index$5 = require('../AtomIcon/index.js');
var index$2 = require('../AtomInput/index.js');
var index$1 = require('../AtomText/index.js');
var index = require('../AtomWrapper/index.js');
var button = require('./css/button.js');
var inputs = require('./css/inputs.js');
var index$3 = require('./AtomTableLoading/index.js');
var index$6 = require('./LoaderSmall/index.js');
var Products = require('./apollo/query/Products.js');
var styled = require('./styled.js');
var useQuery = require('../../node_modules/@apollo/client/react/hooks/useQuery.js');

var OptionsTake = [
    {
        id: 'takeKey0',
        label: '5',
        value: '5',
    },
    {
        id: 'takeKey1',
        label: '10',
        value: '10',
    },
    {
        id: 'takeKey2',
        label: '25',
        value: '25',
    },
    {
        id: 'takeKey3',
        label: '50',
        value: '50',
    },
];
var AtomTableQuery = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var customCSS = props.customCSS, columnscss = props.columnscss, QUERY = props.QUERY, data = props.data, searchBar = props.searchBar, options = props.options, columns = props.columns, onCompleted = props.onCompleted, onError = props.onError, onLoading = props.onLoading, onUpdated = props.onUpdated, id = props.id;
    var _l = tslib.__read(React.useState(10), 2), take = _l[0], setTake = _l[1];
    var _m = tslib.__read(React.useState(0), 2), skip = _m[0], setSkip = _m[1];
    var _o = tslib.__read(React.useState({}), 2), order = _o[0], setOrder = _o[1];
    var _p = tslib.__read(React.useState(''), 2), search = _p[0], setSearch = _p[1];
    var _q = tslib.__read(React.useState({}), 2), getParams = _q[0], setParams = _q[1];
    var _r = tslib.__read(React.useState([]), 2), getData = _r[0], setData = _r[1];
    var _s = tslib.__read(React.useState(true), 2), loading = _s[0], setLoading = _s[1];
    var customize = reactRedux.useSelector(function (state) { return state.customize; });
    var getOrder = React.useMemo(function () {
        var orderArray = Object.entries(order);
        if (orderArray.length === 0)
            return {};
        var orderArrayFiltered = orderArray.filter(function (item) { return item[1] !== 'NONE'; });
        return {
            order: Object.fromEntries(orderArrayFiltered),
        };
    }, [order]);
    var getSearch = React.useMemo(function () {
        var itemFiltered = columns.filter(function (item) { return item === null || item === void 0 ? void 0 : item.searchable; });
        if (search === '' || itemFiltered.length === 0)
            return null;
        return {
            filter: itemFiltered === null || itemFiltered === void 0 ? void 0 : itemFiltered.reduce(function (acc, item) {
                var _a;
                return ({
                    or: tslib.__spreadArray(tslib.__spreadArray([], tslib.__read(acc.or), false), [
                        (_a = {},
                            _a[item.key] = {
                                contains: search,
                            },
                            _a),
                    ], false),
                });
            }, {
                or: [],
            }),
        };
    }, [search]);
    var getFilter = React.useMemo(function () {
        var _a, _b;
        if (((_a = options === null || options === void 0 ? void 0 : options.variables) === null || _a === void 0 ? void 0 : _a.filter) || (getSearch === null || getSearch === void 0 ? void 0 : getSearch.filter)) {
            return {
                filter: tslib.__assign(tslib.__assign({}, (_b = options === null || options === void 0 ? void 0 : options.variables) === null || _b === void 0 ? void 0 : _b.filter), getSearch === null || getSearch === void 0 ? void 0 : getSearch.filter),
            };
        }
        return null;
    }, [getParams, getSearch, options]);
    var QUERYGET = useQuery.useQuery(QUERY !== null && QUERY !== void 0 ? QUERY : Products.LISTPRODUCTS, tslib.__assign(tslib.__assign({}, options), { variables: tslib.__assign(tslib.__assign(tslib.__assign(tslib.__assign({}, options === null || options === void 0 ? void 0 : options.variables), getFilter), { skip: take * skip, take: take }), getOrder), onCompleted: function (e) {
            setLoading(false);
            onCompleted === null || onCompleted === void 0 ? void 0 : onCompleted(e);
        }, onError: function (error) {
            setLoading(false);
            onError === null || onError === void 0 ? void 0 : onError(error);
        } }));
    React.useEffect(function () {
        onLoading === null || onLoading === void 0 ? void 0 : onLoading(QUERYGET === null || QUERYGET === void 0 ? void 0 : QUERYGET.loading);
    }, [QUERYGET === null || QUERYGET === void 0 ? void 0 : QUERYGET.loading]);
    React.useEffect(function () {
        onUpdated === null || onUpdated === void 0 ? void 0 : onUpdated(QUERYGET);
    }, [QUERYGET]);
    var ErrorMessages = React.useMemo(function () {
        var _a, _b, _c;
        var getErros = (_a = QUERYGET === null || QUERYGET === void 0 ? void 0 : QUERYGET.error) === null || _a === void 0 ? void 0 : _a.networkError;
        return (_c = (_b = getErros === null || getErros === void 0 ? void 0 : getErros.result) === null || _b === void 0 ? void 0 : _b.errors) !== null && _c !== void 0 ? _c : [];
    }, [QUERYGET === null || QUERYGET === void 0 ? void 0 : QUERYGET.error]);
    var getArrayPages = React.useMemo(function () {
        return Array.from({ length: Math.ceil((getParams === null || getParams === void 0 ? void 0 : getParams.totalCount) / take) }, function (_, i) { return i; });
    }, [getParams === null || getParams === void 0 ? void 0 : getParams.totalCount, take]);
    var getArrayPagesShow = React.useMemo(function () {
        return getArrayPages.filter(function (item) {
            return item >= Math.min(skip - 2, getArrayPages.length - 5) &&
                item <= Math.max(skip + 2, 4);
        });
    }, [getArrayPages, skip]);
    React.useEffect(function () {
        var _a, _b, _c, _d, _e;
        var get = (_b = Object.values((_a = QUERYGET === null || QUERYGET === void 0 ? void 0 : QUERYGET.data) !== null && _a !== void 0 ? _a : {})) === null || _b === void 0 ? void 0 : _b[0];
        var params = {
            pageInfo: (_c = get === null || get === void 0 ? void 0 : get.pageInfo) !== null && _c !== void 0 ? _c : getParams === null || getParams === void 0 ? void 0 : getParams.pageInfo,
            totalCount: (_d = get === null || get === void 0 ? void 0 : get.totalCount) !== null && _d !== void 0 ? _d : getParams === null || getParams === void 0 ? void 0 : getParams.totalCount,
        };
        var dataTable = (_e = data === null || data === void 0 ? void 0 : data(QUERYGET === null || QUERYGET === void 0 ? void 0 : QUERYGET.data)) !== null && _e !== void 0 ? _e : getData;
        setParams(params);
        setData(dataTable);
    }, [QUERYGET, QUERY, options]);
    var isSearchBar = React.useMemo(function () {
        var isSearch = columns.filter(function (item) { return item === null || item === void 0 ? void 0 : item.searchable; }).length > 0;
        return searchBar || isSearch;
    }, [searchBar, columns]);
    return (jsxRuntime.jsxs(styled.AtomTableContainerStyled, tslib.__assign({ css: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n        width: 100%;\n        ", "\n      "], ["\n        width: 100%;\n        ", "\n      "])), customCSS) }, { children: [isSearchBar && (jsxRuntime.jsx(styled.AtomTheaderStyled, { children: searchBar ? (jsxRuntime.jsx(jsxRuntime.Fragment, { children: searchBar })) : (jsxRuntime.jsxs(index, tslib.__assign({ customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n                flex-direction: row;\n                justify-content: flex-end;\n                align-items: center;\n                gap: 10px;\n              "], ["\n                flex-direction: row;\n                justify-content: flex-end;\n                align-items: center;\n                gap: 10px;\n              "]))) }, { children: [jsxRuntime.jsx(index$1, { children: "Buscar " }), jsxRuntime.jsx(index$2, { value: search, onChange: function (e) { return setSearch(e.target.value); }, customCSS: react.css(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n                  ", "\n                  input {\n                    font-size: 10px;\n                    font-weight: 700;\n                    color: #424242;\n                    height: 30px;\n                    min-width: 180px;\n                  }\n                "], ["\n                  ", "\n                  input {\n                    font-size: 10px;\n                    font-weight: 700;\n                    color: #424242;\n                    height: 30px;\n                    min-width: 180px;\n                  }\n                "])), inputs.INPUT_TEXT) })] }))) })), jsxRuntime.jsxs(styled.AtomTableStyled, tslib.__assign({ id: id, cl: columns === null || columns === void 0 ? void 0 : columns.length, customCSST: props === null || props === void 0 ? void 0 : props.customCSST }, { children: [(ErrorMessages === null || ErrorMessages === void 0 ? void 0 : ErrorMessages.length) > 0 && (jsxRuntime.jsx(index, tslib.__assign({ customCSS: react.css(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n              align-items: center;\n              justify-content: center;\n              position: absolute;\n              width: 100%;\n              height: 100%;\n              background-color: #fcfcfc6d;\n              backdrop-filter: blur(5px);\n              z-index: 1;\n              gap: 20px;\n            "], ["\n              align-items: center;\n              justify-content: center;\n              position: absolute;\n              width: 100%;\n              height: 100%;\n              background-color: #fcfcfc6d;\n              backdrop-filter: blur(5px);\n              z-index: 1;\n              gap: 20px;\n            "]))) }, { children: jsxRuntime.jsx(index$1, { children: ErrorMessages === null || ErrorMessages === void 0 ? void 0 : ErrorMessages.map(function (e) { return (jsxRuntime.jsx(index$1, tslib.__assign({ customCSS: react.css(templateObject_5 || (templateObject_5 = tslib.__makeTemplateObject(["\n                    font-size: 16px;\n                    color: #ff0000;\n                    font-weight: 600;\n                  "], ["\n                    font-size: 16px;\n                    color: #ff0000;\n                    font-weight: 600;\n                  "]))) }, { children: e.message }), e === null || e === void 0 ? void 0 : e.message)); }) }) }))), jsxRuntime.jsx(index$3, tslib.__assign({ loading: loading, columns: columns, take: take }, { children: jsxRuntime.jsxs(styled.AtomTbodyStyled, { children: [jsxRuntime.jsx(styled.TRStyled, tslib.__assign({ className: "head" }, { children: columns === null || columns === void 0 ? void 0 : columns.map(function (e, i) { return (jsxRuntime.jsx("th", { children: jsxRuntime.jsxs(index, tslib.__assign({ customCSS: react.css(templateObject_6 || (templateObject_6 = tslib.__makeTemplateObject(["\n                      padding-right: 10px;\n                      align-items: center;\n                      justify-content: space-between;\n                      flex-direction: row;\n                      width: 100%;\n                    "], ["\n                      padding-right: 10px;\n                      align-items: center;\n                      justify-content: space-between;\n                      flex-direction: row;\n                      width: 100%;\n                    "]))) }, { children: [e.title, (e === null || e === void 0 ? void 0 : e.sortable) && (jsxRuntime.jsxs(index, tslib.__assign({ customCSS: react.css(templateObject_7 || (templateObject_7 = tslib.__makeTemplateObject(["\n                          width: max-content;\n                        "], ["\n                          width: max-content;\n                        "]))) }, { children: [jsxRuntime.jsx(index$4, tslib.__assign({ onClick: function () {
                                                                var _a;
                                                                setOrder(tslib.__assign(tslib.__assign({}, order), (_a = {}, _a[e.key] = (order === null || order === void 0 ? void 0 : order[e.key]) === 'ASC' ? 'NONE' : 'ASC', _a)));
                                                            }, customCSS: react.css(templateObject_8 || (templateObject_8 = tslib.__makeTemplateObject(["\n                            ", "\n                            transform: rotate(90deg)!important;\n                            min-height: 0;\n                          "], ["\n                            ", "\n                            transform: rotate(90deg)!important;\n                            min-height: 0;\n                          "])), button.BUTTON_ICON) }, { children: jsxRuntime.jsx(index$5, { height: "10px", width: "10px", color: (order === null || order === void 0 ? void 0 : order[e.key]) === 'ASC' ? '#565656' : '#c0c0c0', icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/MDC-0001/svg/chevron-left-solid%20(2).svg" }) })), jsxRuntime.jsx(index$4, tslib.__assign({ onClick: function () {
                                                                var _a;
                                                                setOrder(tslib.__assign(tslib.__assign({}, order), (_a = {}, _a[e.key] = (order === null || order === void 0 ? void 0 : order[e.key]) === 'DESC' ? 'NONE' : 'DESC', _a)));
                                                            }, customCSS: react.css(templateObject_9 || (templateObject_9 = tslib.__makeTemplateObject(["\n                            ", "\n                            transform: rotate(90deg)!important;\n                            min-height: 0;\n                          "], ["\n                            ", "\n                            transform: rotate(90deg)!important;\n                            min-height: 0;\n                          "])), button.BUTTON_ICON) }, { children: jsxRuntime.jsx(index$5, { height: "10px", width: "10px", color: (order === null || order === void 0 ? void 0 : order[e.key]) === 'DESC' ? '#565656' : '#c0c0c0', icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/MDC-0001/svg/chevron-right-solid%20(7).svg" }) }))] })))] })) }, "header ".concat(i + 1))); }) })), getData === null || getData === void 0 ? void 0 : getData.map(function (e, i) { return (jsxRuntime.jsx(styled.TRStyled, tslib.__assign({ animate: {
                                        opacity: 1,
                                    }, initial: { opacity: 0 }, transition: { delay: i * 0.03, duration: 0, ease: 'easeOut' }, css: columnscss === null || columnscss === void 0 ? void 0 : columnscss(e) }, { children: columns === null || columns === void 0 ? void 0 : columns.map(function (td, j) {
                                        var _a;
                                        return (jsxRuntime.jsx(styled.TDStyled, tslib.__assign({}, td, { title: (_a = "".concat(td === null || td === void 0 ? void 0 : td.key, " ").concat(i + 1)) === null || _a === void 0 ? void 0 : _a.toUpperCase() }, { children: td.view(e) }), "cell ".concat(i + 1, " ").concat(j + 1)));
                                    }) }), "row".concat(i + 1, "-").concat(skip, "-").concat(take))); })] }) }))] })), jsxRuntime.jsx(styled.AtomTfooterStyled, { children: jsxRuntime.jsxs(index, tslib.__assign({ customCSS: react.css(templateObject_10 || (templateObject_10 = tslib.__makeTemplateObject(["\n            display: flex;\n            table-layout: inherit;\n            flex-direction: row;\n            align-items: center;\n            justify-content: space-between;\n          "], ["\n            display: flex;\n            table-layout: inherit;\n            flex-direction: row;\n            align-items: center;\n            justify-content: space-between;\n          "]))) }, { children: [jsxRuntime.jsxs(index, tslib.__assign({ customCSS: react.css(templateObject_11 || (templateObject_11 = tslib.__makeTemplateObject(["\n              flex-direction: row;\n              align-items: center;\n              gap: 20px;\n              width: max-content;\n            "], ["\n              flex-direction: row;\n              align-items: center;\n              gap: 20px;\n              width: max-content;\n            "]))) }, { children: [jsxRuntime.jsxs(index, tslib.__assign({ customCSS: react.css(templateObject_12 || (templateObject_12 = tslib.__makeTemplateObject(["\n                span {\n                  font-size: 12px;\n                  font-weight: 600;\n                  color: #383838;\n                }\n              "], ["\n                span {\n                  font-size: 12px;\n                  font-weight: 600;\n                  color: #383838;\n                }\n              "]))) }, { children: [(getParams === null || getParams === void 0 ? void 0 : getParams.totalCount) && (jsxRuntime.jsxs(index$1, { children: ["Pagina ", skip + 1, " de", ' ', (_b = Math.ceil(((_a = getParams === null || getParams === void 0 ? void 0 : getParams.totalCount) !== null && _a !== void 0 ? _a : 1) / take)) !== null && _b !== void 0 ? _b : (jsxRuntime.jsx(jsxRuntime.Fragment, { children: "Cargando..." }))] })), jsxRuntime.jsxs(index$1, { children: ["Elementos ", (_d = (_c = getParams === null || getParams === void 0 ? void 0 : getParams.totalCount) !== null && _c !== void 0 ? _c : getData.length) !== null && _d !== void 0 ? _d : 1] })] })), getArrayPagesShow.length > 0 && (jsxRuntime.jsx(index$2, { id: "take", value: take, options: OptionsTake, onChange: function (e) {
                                        var _a;
                                        setTake(Number((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.value));
                                        setSkip(0);
                                    }, type: "select", customCSS: react.css(templateObject_13 || (templateObject_13 = tslib.__makeTemplateObject(["\n                  ", "\n                  select {\n                    height: 30px;\n                    font-size: 10px;\n                    min-width: 150px;\n                  }\n                "], ["\n                  ", "\n                  select {\n                    height: 30px;\n                    font-size: 10px;\n                    min-width: 150px;\n                  }\n                "])), inputs.INPUT_SELECT) }))] })), getArrayPagesShow.length > 0 && (jsxRuntime.jsxs(index, tslib.__assign({ customCSS: react.css(templateObject_14 || (templateObject_14 = tslib.__makeTemplateObject(["\n                flex-direction: row;\n                align-items: center;\n                gap: 10px;\n                width: max-content;\n              "], ["\n                flex-direction: row;\n                align-items: center;\n                gap: 10px;\n                width: max-content;\n              "]))) }, { children: [jsxRuntime.jsxs(index, tslib.__assign({ customCSS: react.css(templateObject_15 || (templateObject_15 = tslib.__makeTemplateObject(["\n                  flex-direction: row;\n                  align-items: center;\n                  gap: 10px;\n                "], ["\n                  flex-direction: row;\n                  align-items: center;\n                  gap: 10px;\n                "]))) }, { children: [jsxRuntime.jsx(index$4, tslib.__assign({ onClick: function () { var _a; return setSkip(((_a = getParams === null || getParams === void 0 ? void 0 : getParams.pageInfo) === null || _a === void 0 ? void 0 : _a.hasPreviousPage) ? skip - 1 : 0); }, customCSS: react.css(templateObject_16 || (templateObject_16 = tslib.__makeTemplateObject(["\n                    ", "\n                  "], ["\n                    ", "\n                  "])), button.BUTTON_ICON) }, { children: jsxRuntime.jsx(index$5, { height: "16px", width: "16px", color: ((_e = getParams === null || getParams === void 0 ? void 0 : getParams.pageInfo) === null || _e === void 0 ? void 0 : _e.hasPreviousPage)
                                                    ? (_g = (_f = customize === null || customize === void 0 ? void 0 : customize.colors) === null || _f === void 0 ? void 0 : _f.primary) !== null && _g !== void 0 ? _g : '#f1576c'
                                                    : '#c0c0c0', icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/MDC-0001/svg/chevron-left-solid%20(2).svg" }) })), jsxRuntime.jsx(index, tslib.__assign({ customCSS: react.css(templateObject_17 || (templateObject_17 = tslib.__makeTemplateObject(["\n                    flex-direction: row;\n                    align-items: center;\n                    gap: 10px;\n                  "], ["\n                    flex-direction: row;\n                    align-items: center;\n                    gap: 10px;\n                  "]))) }, { children: getArrayPagesShow.map(function (i) {
                                                var _a, _b;
                                                return (jsxRuntime.jsx(index$4, tslib.__assign({ onClick: function () { return setSkip(i); }, customCSS: react.css(templateObject_18 || (templateObject_18 = tslib.__makeTemplateObject(["\n                        display: flex;\n                        align-items: center;\n                        justify-content: center;\n                        padding: 6px 12px;\n                        font-size: 12px;\n                        background-color: ", ";\n                        color: ", ";\n                      "], ["\n                        display: flex;\n                        align-items: center;\n                        justify-content: center;\n                        padding: 6px 12px;\n                        font-size: 12px;\n                        background-color: ", ";\n                        color: ", ";\n                      "])), skip === i
                                                        ? (_b = (_a = customize === null || customize === void 0 ? void 0 : customize.colors) === null || _a === void 0 ? void 0 : _a.primary) !== null && _b !== void 0 ? _b : '#f1576c'
                                                        : 'white', skip === i ? 'white' : '#383838') }, { children: "".concat(i + 1) }), "page ".concat(i)));
                                            }) })), jsxRuntime.jsx(index$4, tslib.__assign({ onClick: function () { var _a; return setSkip(((_a = getParams === null || getParams === void 0 ? void 0 : getParams.pageInfo) === null || _a === void 0 ? void 0 : _a.hasNextPage) ? skip + 1 : skip); }, customCSS: react.css(templateObject_19 || (templateObject_19 = tslib.__makeTemplateObject(["\n                    ", "\n                  "], ["\n                    ", "\n                  "])), button.BUTTON_ICON) }, { children: jsxRuntime.jsx(index$5, { height: "16px", width: "16px", color: ((_h = getParams === null || getParams === void 0 ? void 0 : getParams.pageInfo) === null || _h === void 0 ? void 0 : _h.hasNextPage)
                                                    ? (_k = (_j = customize === null || customize === void 0 ? void 0 : customize.colors) === null || _j === void 0 ? void 0 : _j.primary) !== null && _k !== void 0 ? _k : '#f1576c'
                                                    : '#c0c0c0', icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/MDC-0001/svg/chevron-right-solid%20(7).svg" }) }))] })), jsxRuntime.jsx(index, tslib.__assign({ customCSS: react.css(templateObject_20 || (templateObject_20 = tslib.__makeTemplateObject(["\n                  width: 20px;\n                  height: 20px;\n                  justify-content: center;\n                  align-items: center;\n                "], ["\n                  width: 20px;\n                  height: 20px;\n                  justify-content: center;\n                  align-items: center;\n                "]))) }, { children: (QUERYGET === null || QUERYGET === void 0 ? void 0 : QUERYGET.loading) && jsxRuntime.jsx(index$6, {}) }))] })))] })) })] })));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20;

module.exports = AtomTableQuery;
//# sourceMappingURL=index.js.map
