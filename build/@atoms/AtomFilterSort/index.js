'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var router = require('next/router');
var React = require('react');
var react = require('@emotion/react');
var index$2 = require('../AtomInput/index.js');
var index$1 = require('../AtomText/index.js');
var index = require('../AtomWrapper/index.js');

var AtomFilterSort = function (props) {
    var _a, _b, _c;
    var componentsProps = props.componentsProps, options = props.options, route = props.route;
    var router$1 = router.useRouter();
    var sort = router$1.query.sort;
    var _d = tslib.__read(React.useState('DEFAULT'), 2), value = _d[0], setValue = _d[1];
    var _e = tslib.__read(React.useState(options || [
        {
            id: '1',
            label: 'Menor',
            value: '-1',
        },
        {
            id: '2',
            label: 'Mayor',
            value: '1',
        },
    ]), 2), optionsInput = _e[0], setOptionsInput = _e[1];
    React.useEffect(function () {
        setOptionsInput(options || optionsInput);
    }, [options]);
    React.useEffect(function () {
        if (sort) {
            setValue(sort.toString());
        }
    }, [sort]);
    return (jsxRuntime.jsxs(index, tslib.__assign({ width: "max-content", flexDirection: "row", alignItems: "center", justifyContent: "center", padding: "0px 5px 20px 0px" }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.wrapperProps, { children: [jsxRuntime.jsx(index$1, tslib.__assign({ margin: "0px 15px 0px 0px" }, { children: "Ordenar por:" })), jsxRuntime.jsx(index$2, tslib.__assign({ border: "none", height: "35px", placeholder: "Buscar producto", fontSize: "12px", backgroundColor: "transparent", placeholderColor: "#6c757d", errorHeight: "0px", errorPadding: "0px", type: "select", value: value, options: optionsInput, onChange: function (e) {
                    setValue(e.target.value);
                    router$1.push({
                        pathname: "".concat(route || "".concat(router$1.pathname, "/")),
                        query: tslib.__assign(tslib.__assign({}, router$1.query), { sort: e.target.value }),
                    });
                } }, (_a = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.inputProps) === null || _a === void 0 ? void 0 : _a.inputProps, { customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n          select {\n            color: #f1576c;\n            font-weight: bold;\n            border-radius: 6px;\n            border: 1px solid #dadada;\n          }\n          ", "\n        "], ["\n          select {\n            color: #f1576c;\n            font-weight: bold;\n            border-radius: 6px;\n            border: 1px solid #dadada;\n          }\n          ", "\n        "])), (_c = (_b = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.inputProps) === null || _b === void 0 ? void 0 : _b.inputProps) === null || _c === void 0 ? void 0 : _c.customCSS) }))] })));
};
var templateObject_1;

module.exports = AtomFilterSort;
//# sourceMappingURL=index.js.map
