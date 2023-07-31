'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
var index$5 = require('../AtomText/index.js');
var index$1 = require('../AtomWrapper/index.js');
var index$3 = require('../AtomButton/index.js');
require('../AtomCarruosell/index.js');
require('../AtomCartShop/index.js');
require('next/image');
require('../AtomImage/style.js');
var React = require('react');
require('../AtomIcon/styled.js');
require('../AtomContainer/style.js');
require('../AtomLink/index.js');
require('../AtomDropdownSidebar/admin/style.js');
require('../AtomDropdownSidebar/default/style.js');
require('../AtomDropdownSidebar/links/style.js');
require('next/router');
var index$2 = require('./index.js');
require('../AtomSeparator/style.js');
require('../../@utils/uploadImage.js');
require('graphql-request');
require('../../src/config/index.js');
require('framer-motion');
require('../AtomImageEditor/pintura/pintura.js');
require('../AtomImageEditor/react-pintura/PinturaEditor.js');
require('../AtomImageEditor/react-pintura/PinturaEditorModal.js');
require('../AtomImageEditor/react-pintura/PinturaEditorOverlay.js');
require('../AtomImageEditor/styled.js');
require('lodash');
var style = require('./style.js');
var index$4 = require('../AtomLoader/index.js');
require('../AtomMaps/style.js');
require('../AtomNotification/styles.js');
require('../AtomProgressBar/component/style/index.js');
require('next/head');
var style$1 = require('../AtomTable/style.js');
var reactRedux = require('react-redux');
require('../AtomTableQuery/css/button.js');
require('../AtomTableQuery/css/inputs.js');
var styled = require('../AtomTableQuery/styled.js');
require('../AtomTableQuery/apollo/query/Products.js');
require('../AtomTextEditor/index.js');
require('../AtomTextEditorHermer/index.js');
require('../../@molecules/MoleculePlayer/style.js');
require('../../@hooks/usePermissions/index.js');
require('../../@hooks/useUploadFile/index.js');
require('../../@components/Alert/Context.js');
require('../../@components/Button/downloadFile.js');
require('../../@components/Chat/style.js');
require('uuid');
require('../../@components/Header/style.js');
require('../../@types/schemas.js');
var index = require('../../node_modules/graphql-tag/lib/index.js');
var useQuery = require('../../node_modules/@apollo/client/react/hooks/useQuery.js');

// const Animation = {
//   whileTap: { scale: 0.98, opacity: 0.8 },
// };
// const DefaultAnimation = {
//   whileTap: { scale: 0.98, opacity: 0.8 },
//   transition: {
//     default: { duration: 0.3 },
//   },
//   initial: { opacity: 0 },
//   animate: { opacity: 1 },
//   exit: { opacity: 0 },
// };
var QUERYDEFAULT = index.gql(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n  query ListUsers(\n    $skip: Int\n    $take: Int\n    $filter: MemberFilterInput\n    $order: [MemberSortInput!]\n  ) {\n    listUsers(skip: $skip, take: $take, filter: $filter, order: $order) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        __typename\n      }\n      totalCount\n      items {\n        firstTime\n        email\n        id\n        profile {\n          id\n          firstName\n          lastName\n          __typename\n        }\n        groups {\n          id\n          name\n          __typename\n        }\n        memberRoles {\n          companyId\n          roleId\n          role {\n            name\n            codeName\n            description\n            __typename\n          }\n          id\n          createdAt\n          updatedAt\n          __typename\n        }\n        memberProjects {\n          id\n          memberId\n          memberProjectRoleProject {\n            projectRole {\n              id\n              name\n              codeName\n              __typename\n            }\n            __typename\n          }\n          __typename\n        }\n        createdAt\n        lastLogin\n        __typename\n      }\n      __typename\n    }\n  }\n"], ["\n  query ListUsers(\n    $skip: Int\n    $take: Int\n    $filter: MemberFilterInput\n    $order: [MemberSortInput!]\n  ) {\n    listUsers(skip: $skip, take: $take, filter: $filter, order: $order) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        __typename\n      }\n      totalCount\n      items {\n        firstTime\n        email\n        id\n        profile {\n          id\n          firstName\n          lastName\n          __typename\n        }\n        groups {\n          id\n          name\n          __typename\n        }\n        memberRoles {\n          companyId\n          roleId\n          role {\n            name\n            codeName\n            description\n            __typename\n          }\n          id\n          createdAt\n          updatedAt\n          __typename\n        }\n        memberProjects {\n          id\n          memberId\n          memberProjectRoleProject {\n            projectRole {\n              id\n              name\n              codeName\n              __typename\n            }\n            __typename\n          }\n          __typename\n        }\n        createdAt\n        lastLogin\n        __typename\n      }\n      __typename\n    }\n  }\n"])));
var InputSelectWtihPagination = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var onChange = props.onChange, columns = props.columns, placeholder = props.placeholder, onPress = props.onPress;
    var customize = reactRedux.useSelector(function (state) { return state.customize; });
    var labelWidth = props.labelWidth, labelColor = props.labelColor, labelFontFamily = props.labelFontFamily, id = props.id, labelFontSize = props.labelFontSize, labelFontWeight = props.labelFontWeight, formik = props.formik, labelMargin = props.labelMargin, maxHeightBox = props.maxHeightBox, ErrorCustom = props.error, data = props.data, positionBox = props.positionBox, onError = props.onError, labelPadding = props.labelPadding, spanMargin = props.spanMargin, onCompleted = props.onCompleted, QUERY = props.QUERY, customCSS = props.customCSS, label = props.label, options = props.options, defaultText = props.defaultText;
    var _j = tslib.__read(React.useState(0), 2), skip = _j[0], setSkip = _j[1];
    var _k = tslib.__read(React.useState([]), 2), getData = _k[0], setData = _k[1];
    var _l = tslib.__read(React.useState(''), 2), searchData = _l[0], setsearchData = _l[1];
    var _m = tslib.__read(React.useState(false), 2), isOpen = _m[0], setOpen = _m[1];
    var _o = tslib.__read(React.useState({}), 2), getParams = _o[0], setParams = _o[1];
    var scrollRef = React.useRef();
    var getFilter = React.useMemo(function () {
        var _a, _b;
        if ((_a = options === null || options === void 0 ? void 0 : options.variables) === null || _a === void 0 ? void 0 : _a.filter) {
            return {
                filter: tslib.__assign({}, (_b = options === null || options === void 0 ? void 0 : options.variables) === null || _b === void 0 ? void 0 : _b.filter),
            };
        }
        return null;
    }, [getParams, options]);
    var take = (_b = (_a = options === null || options === void 0 ? void 0 : options.variables) === null || _a === void 0 ? void 0 : _a.take) !== null && _b !== void 0 ? _b : 50;
    var QUERYGET = useQuery.useQuery(QUERY !== null && QUERY !== void 0 ? QUERY : QUERYDEFAULT, tslib.__assign(tslib.__assign({}, options), { variables: tslib.__assign(tslib.__assign(tslib.__assign({}, options === null || options === void 0 ? void 0 : options.variables), getFilter), { skip: take * skip, take: take }), onCompleted: function (e) {
            onCompleted === null || onCompleted === void 0 ? void 0 : onCompleted(e);
        }, onError: function (error) {
            onError === null || onError === void 0 ? void 0 : onError(error);
        } }));
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
    }, [QUERY, options, QUERYGET]);
    return (jsxRuntime.jsxs(style.InputSelectPaginationLabelStyled, tslib.__assign({ labelWidth: labelWidth, labelColor: labelColor, labelFontFamily: labelFontFamily, labelFontSize: labelFontSize, labelFontWeight: labelFontWeight, labelMargin: labelMargin, labelPadding: labelPadding, customCSS: customCSS }, { children: [label && (jsxRuntime.jsx(style.InputTextSpanStyled, tslib.__assign({ spanMargin: spanMargin }, { children: label }))), jsxRuntime.jsx(index$1, tslib.__assign({ customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n          display: grid;\n          grid-template-columns: 1fr auto;\n        "], ["\n          display: grid;\n          grid-template-columns: 1fr auto;\n        "]))) }, { children: jsxRuntime.jsxs(index$1, tslib.__assign({ customCSS: react.css(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n            position: relative;\n            flex-direction: ", ";\n            flex: 1;\n            gap: 8px;\n          "], ["\n            position: relative;\n            flex-direction: ", ";\n            flex: 1;\n            gap: 8px;\n          "])), positionsBox[positionBox]) }, { children: [jsxRuntime.jsxs(index$1, tslib.__assign({ customCSS: react.css(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n              display: flex;\n              flex-direction: row;\n              align-items: center;\n              justify-content: space-between;\n              background-color: white;\n              /* padding: 10px; */\n              border: 1px solid #0000003f;\n            "], ["\n              display: flex;\n              flex-direction: row;\n              align-items: center;\n              justify-content: space-between;\n              background-color: white;\n              /* padding: 10px; */\n              border: 1px solid #0000003f;\n            "]))) }, { children: [jsxRuntime.jsx(index$1, tslib.__assign({ alignItems: "center", justifyContent: "center" }, { children: jsxRuntime.jsx(index$2, { type: "text", value: searchData, placeholder: placeholder, defaultText: defaultText, onChange: function (event) {
                                            var _a, _b, _c, _d;
                                            setsearchData((_a = event.target) === null || _a === void 0 ? void 0 : _a.value);
                                            var result = (_c = (onChange &&
                                                onChange((_b = event.target) === null || _b === void 0 ? void 0 : _b.value, data === null || data === void 0 ? void 0 : data(QUERYGET === null || QUERYGET === void 0 ? void 0 : QUERYGET.data)))) !== null && _c !== void 0 ? _c : data === null || data === void 0 ? void 0 : data(QUERYGET === null || QUERYGET === void 0 ? void 0 : QUERYGET.data);
                                            setData(((_d = event.target) === null || _d === void 0 ? void 0 : _d.value) === '' ? data === null || data === void 0 ? void 0 : data(QUERYGET === null || QUERYGET === void 0 ? void 0 : QUERYGET.data) : result);
                                        }, 
                                        // onClick={() => setOpen(true)}
                                        customCSS: react.css(templateObject_5 || (templateObject_5 = tslib.__makeTemplateObject(["\n                  width: 100%;\n                  padding: 0px;\n                  padding-left: 10px;\n                  input {\n                    padding: 0px;\n                    background-color: transparent;\n                    box-shadow: transparent;\n                    border: transparent;\n                  }\n                "], ["\n                  width: 100%;\n                  padding: 0px;\n                  padding-left: 10px;\n                  input {\n                    padding: 0px;\n                    background-color: transparent;\n                    box-shadow: transparent;\n                    border: transparent;\n                  }\n                "]))) }) })), jsxRuntime.jsx(index$3, tslib.__assign({ width: "auto", onClick: function () {
                                        setOpen(function (prev) { return !prev; });
                                    }, backgroundColor: "transparent", customCSS: react.css(templateObject_6 || (templateObject_6 = tslib.__makeTemplateObject(["\n                padding: 0px 10px;\n              "], ["\n                padding: 0px 10px;\n              "]))) }, { children: jsxRuntime.jsx(index$1, { customCSS: react.css(templateObject_9 || (templateObject_9 = tslib.__makeTemplateObject(["\n                  width: auto;\n                  border: 0.5px solid black;\n                  border-width: 0 2px 2px 0;\n                  display: inline-block;\n                  padding: 5px;\n                  ", "\n                "], ["\n                  width: auto;\n                  border: 0.5px solid black;\n                  border-width: 0 2px 2px 0;\n                  display: inline-block;\n                  padding: 5px;\n                  ", "\n                "])), isOpen
                                            ? react.css(templateObject_7 || (templateObject_7 = tslib.__makeTemplateObject(["\n                        margin-top: 15px;\n                        transform: rotate(-135deg);\n                        -webkit-transform: rotate(-135deg);\n                      "], ["\n                        margin-top: 15px;\n                        transform: rotate(-135deg);\n                        -webkit-transform: rotate(-135deg);\n                      "]))) : react.css(templateObject_8 || (templateObject_8 = tslib.__makeTemplateObject(["\n                        transform: rotate(45deg);\n                        -webkit-transform: rotate(45deg);\n                      "], ["\n                        transform: rotate(45deg);\n                        -webkit-transform: rotate(45deg);\n                      "])))) }) }))] })), jsxRuntime.jsx(index$1, tslib.__assign({ position: "relative" }, { children: isOpen && (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx(index$1, tslib.__assign({ customCSS: react.css(templateObject_10 || (templateObject_10 = tslib.__makeTemplateObject(["\n                    background-color: white;\n                    ::placeholder {\n                      color: #202124;\n                    }\n                    border: 1px solid #f2f2f2;\n                    position: absolute;\n                    ", "\n                    ::-webkit-scrollbar-thumb {\n                      background: ", ";\n                    }\n                    overflow: ", ";\n                    overflow-x: hidden;\n                    width: 100%;\n                    max-height: ", ";\n                    align-items: center;\n                    justify-content: flex-start;\n                    border: 1px solid #0000003f;\n                  "], ["\n                    background-color: white;\n                    ::placeholder {\n                      color: #202124;\n                    }\n                    border: 1px solid #f2f2f2;\n                    position: absolute;\n                    ", "\n                    ::-webkit-scrollbar-thumb {\n                      background: ", ";\n                    }\n                    overflow: ", ";\n                    overflow-x: hidden;\n                    width: 100%;\n                    max-height: ", ";\n                    align-items: center;\n                    justify-content: flex-start;\n                    border: 1px solid #0000003f;\n                  "])), moveBox[positionBox !== null && positionBox !== void 0 ? positionBox : 'bottom'], ((_c = customize === null || customize === void 0 ? void 0 : customize.colors) === null || _c === void 0 ? void 0 : _c.primary) || '#f0a58b', (QUERYGET === null || QUERYGET === void 0 ? void 0 : QUERYGET.loading) ? 'hidden' : 'scroll', maxHeightBox !== null && maxHeightBox !== void 0 ? maxHeightBox : '420px'), refObject: scrollRef, onScroll: function () {
                                        var _a, _b, _c, _d, _e, _f;
                                        if (scrollRef.current) {
                                            var top_1 = ((_a = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _a === void 0 ? void 0 : _a.scrollTop) === 0;
                                            var bottom = ((_b = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _b === void 0 ? void 0 : _b.scrollTop) +
                                                ((_c = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _c === void 0 ? void 0 : _c.clientHeight) ===
                                                ((_d = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _d === void 0 ? void 0 : _d.scrollHeight);
                                            if (top_1 && !(QUERYGET === null || QUERYGET === void 0 ? void 0 : QUERYGET.loading)) {
                                                setSkip(((_e = getParams === null || getParams === void 0 ? void 0 : getParams.pageInfo) === null || _e === void 0 ? void 0 : _e.hasPreviousPage) ? skip - 1 : skip);
                                            }
                                            if (bottom && !(QUERYGET === null || QUERYGET === void 0 ? void 0 : QUERYGET.loading)) {
                                                setSkip(((_f = getParams === null || getParams === void 0 ? void 0 : getParams.pageInfo) === null || _f === void 0 ? void 0 : _f.hasNextPage) ? skip + 1 : skip);
                                            }
                                        }
                                    } }, { children: (QUERYGET === null || QUERYGET === void 0 ? void 0 : QUERYGET.loading) ? (jsxRuntime.jsx(index$4, { type: "small", colorLoading: (_d = customize === null || customize === void 0 ? void 0 : customize.colors) === null || _d === void 0 ? void 0 : _d.primary, isLoading: true })) : (jsxRuntime.jsx(index$1, tslib.__assign({ alignItems: "center", justifyContent: "center" }, { children: jsxRuntime.jsxs(style.InputTBodyStyled, { children: [getData === null || getData === void 0 ? void 0 : getData.map(function (e, i) { return (jsxRuntime.jsx(styled.TRStyled, tslib.__assign({ animate: {
                                                        opacity: 1,
                                                    }, initial: { opacity: 0 }, transition: {
                                                        delay: i * 0.03,
                                                        duration: 0,
                                                        ease: 'easeOut',
                                                    } }, { children: columns === null || columns === void 0 ? void 0 : columns.map(function (td, j) {
                                                        var _a;
                                                        return (jsxRuntime.jsx(style$1.TDStyled, tslib.__assign({}, td, { title: (_a = "".concat(td === null || td === void 0 ? void 0 : td.key, " ").concat(i + 1)) === null || _a === void 0 ? void 0 : _a.toUpperCase(), onClick: function () {
                                                                onPress(e);
                                                                setOpen(false);
                                                            } }, { children: td.view(e) }), "cell ".concat(i + 1, " ").concat(j + 1)));
                                                    }) }), "row".concat(i + 1))); }), (getData === null || getData === void 0 ? void 0 : getData.length) ? null : (jsxRuntime.jsxs(index$5, { children: [getData === null || getData === void 0 ? void 0 : getData.length, " Resultados"] }))] }) }))) })) })) }))] })) })), ((_f = (_e = formik === null || formik === void 0 ? void 0 : formik.errors) === null || _e === void 0 ? void 0 : _e[id]) !== null && _f !== void 0 ? _f : ErrorCustom) ? (jsxRuntime.jsx(style.InputErrorStyled, tslib.__assign({}, props, { children: (_h = (_g = formik === null || formik === void 0 ? void 0 : formik.errors) === null || _g === void 0 ? void 0 : _g[id]) !== null && _h !== void 0 ? _h : ErrorCustom }))) : null] })));
};
var moveBox = {
    bottom: react.css(templateObject_11 || (templateObject_11 = tslib.__makeTemplateObject(["\n    top: 0;\n  "], ["\n    top: 0;\n  "]))),
    top: react.css(templateObject_12 || (templateObject_12 = tslib.__makeTemplateObject(["\n    bottom: 0;\n  "], ["\n    bottom: 0;\n  "]))),
};
var positionsBox = {
    bottom: 'column',
    top: 'column-reverse',
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;

module.exports = InputSelectWtihPagination;
//# sourceMappingURL=inputWithPagination.js.map
