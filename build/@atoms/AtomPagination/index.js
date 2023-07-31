'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
var React = require('react');
var index = require('../AtomWrapper/index.js');
var index$1 = require('../AtomButton/index.js');
var index$2 = require('../AtomIcon/index.js');
var index$3 = require('../AtomText/index.js');

var AtomPagination = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    var statePagination = props.statePagination, setStatePagination = props.setStatePagination, acentColor = props.acentColor, componentsProps = props.componentsProps;
    var _m = tslib.__read(React.useState((_a = (statePagination === null || statePagination === void 0 ? void 0 : statePagination.page) + 1) !== null && _a !== void 0 ? _a : 1), 2), pagination = _m[0], setPagination = _m[1];
    var pages = Math.ceil(statePagination.totaldocs / statePagination.limit) === 0
        ? 1
        : Math.ceil(statePagination.totaldocs / statePagination.limit);
    var _o = tslib.__read(React.useState(Array.from({ length: pages || 10 }, function (_, i) { return ({
        id: i + 1,
        label: i + 1,
    }); })), 2), quantyPages = _o[0], setQuantyPages = _o[1];
    React.useEffect(function () {
        setStatePagination(tslib.__assign(tslib.__assign({}, statePagination), { page: pagination - 1 }));
    }, [pagination]);
    React.useEffect(function () {
        setQuantyPages(Array.from({ length: pages || 10 }, function (_, i) { return ({
            id: i + 1,
            label: i + 1,
        }); }));
    }, [pages]);
    React.useEffect(function () {
        var _a;
        if (statePagination.page !== pagination - 1) {
            setPagination((_a = (statePagination === null || statePagination === void 0 ? void 0 : statePagination.page) + 1) !== null && _a !== void 0 ? _a : 1);
        }
    }, [statePagination]);
    var diff = Math.max(0, (quantyPages.length - pagination - 2) * -1);
    var start = Math.max(0, pagination - (3 + diff));
    var end = Math.min(start + 4, quantyPages.length - 1);
    return (jsxRuntime.jsx(index, tslib.__assign({ flexDirection: "row", width: "100%" }, { children: jsxRuntime.jsxs(index, tslib.__assign({ flexDirection: "row", width: "max-content", position: "relative" }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.containerProps, { children: [jsxRuntime.jsx(index$1, tslib.__assign({ height: "50px", width: "50px", backgroundColor: "".concat(pagination > 1 ? acentColor || '#fe6a6a' : '#f2f2f2'), padding: "0", onClick: function () {
                        setPagination(pagination > 1 ? pagination - 1 : pagination);
                    } }, (_b = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.controlsProps) === null || _b === void 0 ? void 0 : _b.buttonsProps, { customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            position: absolute;\n            left: -65px;\n            ", "\n          "], ["\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            position: absolute;\n            left: -65px;\n            ", "\n          "])), (_d = (_c = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.controlsProps) === null || _c === void 0 ? void 0 : _c.buttonsProps) === null || _d === void 0 ? void 0 : _d.customCSS) }, { children: jsxRuntime.jsx(index$2, tslib.__assign({ height: "15px", width: "15px", color: pagination > 1 ? 'white' : '#dcdcdc', icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/images/left-arrow-return-svgrepo-com.svg" }, (_e = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.controlsProps) === null || _e === void 0 ? void 0 : _e.iconProps)) })), quantyPages
                    .filter(function (_, index) { return index >= start && index <= end; })
                    .map(function (item) {
                    var _a, _b, _c, _d;
                    return (jsxRuntime.jsx(index$1, tslib.__assign({ height: "50px", width: "50px", backgroundColor: pagination === item.id ? "".concat(acentColor || '#fe6a6a') : '#fff', margin: "0px 10px", padding: "0px", onClick: function () { return setPagination(item.id); } }, (_a = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.itemsProps) === null || _a === void 0 ? void 0 : _a.buttonsProps, { customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n                ", "\n              "], ["\n                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n                ", "\n              "])), (_c = (_b = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.itemsProps) === null || _b === void 0 ? void 0 : _b.buttonsProps) === null || _c === void 0 ? void 0 : _c.customCSS) }, { children: jsxRuntime.jsx(index$3, tslib.__assign({ cursor: "pointer", fontWeight: "bold", color: pagination === item.id ? '#fff' : "".concat(acentColor || '#fe6a6a') }, (_d = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.itemsProps) === null || _d === void 0 ? void 0 : _d.textProps, { children: item.label })) }), "Pagination".concat(item.id)));
                }), jsxRuntime.jsx(index$1, tslib.__assign({ height: "50px", width: "50px", backgroundColor: "".concat(pagination < (pages || quantyPages.length)
                        ? acentColor || '#fe6a6a'
                        : '#f2f2f2'), padding: "0", onClick: function () {
                        setPagination(pagination < (pages || quantyPages.length)
                            ? pagination + 1
                            : pagination);
                    } }, (_f = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.controlsProps) === null || _f === void 0 ? void 0 : _f.buttonsProps, { customCSS: react.css(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            position: absolute;\n            right: -65px;\n            ", "\n          "], ["\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            position: absolute;\n            right: -65px;\n            ", "\n          "])), (_h = (_g = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.controlsProps) === null || _g === void 0 ? void 0 : _g.buttonsProps) === null || _h === void 0 ? void 0 : _h.customCSS) }, { children: jsxRuntime.jsx(index$2, tslib.__assign({ height: "15px", width: "15px", color: pagination < (pages || quantyPages.length) ? 'white' : '#dcdcdc', icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/images/left-arrow-return-svgrepo-com.svg" }, (_j = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.controlsProps) === null || _j === void 0 ? void 0 : _j.iconProps, { customCSS: react.css(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n              transform: rotate(180deg);\n              ", "\n            "], ["\n              transform: rotate(180deg);\n              ", "\n            "])), (_l = (_k = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.controlsProps) === null || _k === void 0 ? void 0 : _k.iconProps) === null || _l === void 0 ? void 0 : _l.customCSS) })) }))] })) })));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

module.exports = AtomPagination;
//# sourceMappingURL=index.js.map
