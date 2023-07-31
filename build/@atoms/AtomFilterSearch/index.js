'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var router = require('next/router');
var React = require('react');
var react = require('@emotion/react');
var index = require('../AtomWrapper/index.js');
var index$3 = require('../AtomButton/index.js');
var index$1 = require('../AtomIcon/index.js');
var index$2 = require('../AtomInput/index.js');

var AtomFilterSearch = function (props) {
    var _a, _b, _c, _d, _e, _f, _g;
    var onClick = props.onClick, route = props.route, componentsProps = props.componentsProps;
    var router$1 = router.useRouter();
    var search = router$1.query.search;
    var _h = tslib.__read(React.useState(''), 2), value = _h[0], setValue = _h[1];
    React.useEffect(function () {
        if (search) {
            setValue(search.toString());
        }
    }, [search]);
    var handleOnClick = function () {
        if (onClick) {
            onClick(value);
        }
        else {
            var query = tslib.__assign(tslib.__assign({}, router$1.query), { search: value });
            if (value === '') {
                delete query.search;
            }
            router$1.push({
                pathname: "".concat(route || "".concat(router$1.pathname, "/")),
                query: query,
            });
        }
    };
    return (jsxRuntime.jsxs(index, tslib.__assign({}, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.wrapperProps, { customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n        @media only screen and (max-width: 1200px) {\n          flex-direction: row;\n          padding: 40px 0px 10px 0px;\n        }\n        @media only screen and (max-width: 980px) {\n          flex-direction: row;\n          padding: 0px 0px;\n        }\n        ", "\n      "], ["\n        @media only screen and (max-width: 1200px) {\n          flex-direction: row;\n          padding: 40px 0px 10px 0px;\n        }\n        @media only screen and (max-width: 980px) {\n          flex-direction: row;\n          padding: 0px 0px;\n        }\n        ", "\n      "])), (_a = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.wrapperProps) === null || _a === void 0 ? void 0 : _a.customCSS) }, { children: [jsxRuntime.jsxs(index, tslib.__assign({ height: "max-content", backgroundColor: "#f8f9fa", border: "1px solid #ced4da", borderRadius: "5px", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: "0px 15px" }, (_b = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.inputProps) === null || _b === void 0 ? void 0 : _b.wrapperProps, { customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n          @media only screen and (max-width: 1200px) {\n            margin: 0px;\n          }\n          ", "\n        "], ["\n          @media only screen and (max-width: 1200px) {\n            margin: 0px;\n          }\n          ", "\n        "])), (_d = (_c = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.inputProps) === null || _c === void 0 ? void 0 : _c.wrapperProps) === null || _d === void 0 ? void 0 : _d.customCSS) }, { children: [jsxRuntime.jsx(index$1, tslib.__assign({ width: "18px", height: "18px", color: "#b3b3b3", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/commons/search.svg" }, (_e = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.inputProps) === null || _e === void 0 ? void 0 : _e.iconProps)), jsxRuntime.jsx(index$2, tslib.__assign({ border: "none", height: "35px", labelWidth: "100%", placeholder: "Buscar producto", fontSize: "12px", color: "#484b4e", backgroundColor: "transparent", placeholderColor: "#abbac7", errorHeight: "0px", errorPadding: "0px", value: value, onKeyUp: function (e) {
                            if (e.key === 'Enter') {
                                handleOnClick();
                            }
                        }, onChange: function (e) { return setValue(e.target.value); } }, (_f = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.inputProps) === null || _f === void 0 ? void 0 : _f.inputProps))] })), jsxRuntime.jsx(index$3, tslib.__assign({ backgroundColor: "#fe6a6a", border: "1px solid #fe6a6a", padding: "7px 25px", margin: "15px 0px 0px 0px" }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.buttonProps, { onClick: function () {
                    var _a;
                    handleOnClick();
                    (_a = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.buttonProps) === null || _a === void 0 ? void 0 : _a.onClick();
                }, customCSS: react.css(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n          @media only screen and (max-width: 1200px) {\n            margin: 15px 0px 0px 20px;\n          }\n          @media only screen and (max-width: 1200px) {\n            margin: 0px 0px 0px 20px;\n          }\n          ", "\n        "], ["\n          @media only screen and (max-width: 1200px) {\n            margin: 15px 0px 0px 20px;\n          }\n          @media only screen and (max-width: 1200px) {\n            margin: 0px 0px 0px 20px;\n          }\n          ", "\n        "])), (_g = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.buttonProps) === null || _g === void 0 ? void 0 : _g.customCSS) }, { children: "Buscar" }))] })));
};
var templateObject_1, templateObject_2, templateObject_3;

module.exports = AtomFilterSearch;
//# sourceMappingURL=index.js.map
