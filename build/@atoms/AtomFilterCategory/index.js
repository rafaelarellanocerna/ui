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

var AtomFilterCategory = function (props) {
    var _a;
    var onClick = props.onClick, componentsProps = props.componentsProps, options = props.options, children = props.children;
    var router$1 = router.useRouter();
    var categories = router$1.query.categories;
    var _b = tslib.__read(React.useState([]), 2), categoriesSelected = _b[0], setCategoriesSelected = _b[1];
    var _c = tslib.__read(React.useState(false), 2), loadValue = _c[0], setLoadValue = _c[1];
    React.useEffect(function () {
        if (categories && loadValue === false) {
            setLoadValue(true);
            setCategoriesSelected([categories].flat());
        }
    }, [categories]);
    return (jsxRuntime.jsxs(index, tslib.__assign({}, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.wrapperProps, { customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n        @media only screen and (max-width: 1200px) {\n          max-width: 200px;\n          margin: 0px 10px;\n        }\n        @media only screen and (max-width: 520px) {\n          max-width: 100%;\n        }\n        ", "\n      "], ["\n        @media only screen and (max-width: 1200px) {\n          max-width: 200px;\n          margin: 0px 10px;\n        }\n        @media only screen and (max-width: 520px) {\n          max-width: 100%;\n        }\n        ", "\n      "])), (_a = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.wrapperProps) === null || _a === void 0 ? void 0 : _a.customCSS) }, { children: [jsxRuntime.jsx(index$1, tslib.__assign({ margin: "30px 0px 15px 0px", color: "#f1576c", fontSize: "16px", fontWeight: 700 }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.titleProps, { children: "Filtrar por categoria" })), jsxRuntime.jsx(index$2, tslib.__assign({ height: "1px", width: "100%", color: "#cacaca", margin: "0px 0px 20px 0px" }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.separatorProps)), jsxRuntime.jsxs(index, tslib.__assign({ customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n          @media only screen and (max-width: 1200px) {\n            flex-direction: row;\n            justify-content: space-between;\n            flex-wrap: wrap;\n          }\n        "], ["\n          @media only screen and (max-width: 1200px) {\n            flex-direction: row;\n            justify-content: space-between;\n            flex-wrap: wrap;\n          }\n        "]))) }, { children: [children, options === null || options === void 0 ? void 0 : options.map(function (option) {
                        var _a;
                        return (jsxRuntime.jsx(index$3, tslib.__assign({ type: "checkbox" }, option, { accentColor: "#f75e5e", label: "", errorHeight: "0px", value: "".concat(option.value), checked: !!categoriesSelected.find(function (item) { return item === option.id; }), onChange: function () {
                                setCategoriesSelected(categoriesSelected.includes(option.id)
                                    ? categoriesSelected.filter(function (item) { return item !== option.id; })
                                    : tslib.__spreadArray(tslib.__spreadArray([], tslib.__read(categoriesSelected), false), [option.id], false));
                            } }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.optionsProps, { customCSS: react.css(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n              input {\n                margin-right: 5px;\n                filter: hue-rotate(67deg);\n                :checked {\n                  filter: hue-rotate(0deg);\n                }\n              }\n              ", "\n            "], ["\n              input {\n                margin-right: 5px;\n                filter: hue-rotate(67deg);\n                :checked {\n                  filter: hue-rotate(0deg);\n                }\n              }\n              ", "\n            "])), (_a = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.optionsProps) === null || _a === void 0 ? void 0 : _a.customCSS) }, { children: jsxRuntime.jsx(index$1, tslib.__assign({ margin: "3px 0px 0px 0px" }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.textProps, { fontSize: "12px", color: "#494949", fontWeight: 600 }, { children: option.label })) }), option.id));
                    })] })), jsxRuntime.jsx(index$4, tslib.__assign({ backgroundColor: "#f1576c", padding: "8px 25px", margin: "15px 0px 0px 0px", onClick: function () {
                    router$1.push({
                        query: tslib.__assign(tslib.__assign({}, router$1.query), { categories: categoriesSelected }),
                        pathname: router$1.pathname,
                    });
                    onClick === null || onClick === void 0 ? void 0 : onClick(categoriesSelected);
                } }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.buttonProps, { children: "Filtrar" }))] })));
};
var templateObject_1, templateObject_2, templateObject_3;

module.exports = AtomFilterCategory;
//# sourceMappingURL=index.js.map
