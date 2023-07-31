'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
var React = require('react');
var capitalizeFirstLetter = require('../../@utils/capitalizeFirstLetter.js');
require('../../@utils/uploadImage.js');
require('graphql-request');
require('../../src/config/index.js');
var index$3 = require('../AtomButton/index.js');
var index$2 = require('../AtomInput/index.js');
var index$4 = require('../AtomIcon/index.js');
var index$1 = require('../AtomText/index.js');
var index = require('../AtomWrapper/index.js');

var initialSeoValues = {
    slug: '',
    seo: {
        title: '',
        description: '',
        page: '',
        website: '',
        keywords: [],
        image: '',
        icon: '',
        locale: '',
    },
};
var AtomFormSeo = function (props) {
    var formik = props.formik;
    var _a = tslib.__read(React.useState(''), 2), keyword = _a[0], setKeyword = _a[1];
    return (jsxRuntime.jsxs(index, tslib.__assign({ customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n        width: 100%;\n        gap: 20px;\n      "], ["\n        width: 100%;\n        gap: 20px;\n      "]))) }, { children: [jsxRuntime.jsxs(index, tslib.__assign({ width: "100%", backgroundColor: "#ffffff", padding: "30px 40px", customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n          box-shadow: 0px 3px 6px #0000001a;\n          @media (max-width: 980px) {\n            width: 100%;\n          }\n        "], ["\n          box-shadow: 0px 3px 6px #0000001a;\n          @media (max-width: 980px) {\n            width: 100%;\n          }\n        "]))) }, { children: [jsxRuntime.jsx(index$1, tslib.__assign({ fontSize: "14px", color: "#023059", fontWeight: "bold" }, { children: "Slug" })), jsxRuntime.jsx(index$2, { label: "Slug (URL)", border: "1px solid #0000003F", spanMargin: "5px 0px 10px 0px", labelColor: "#5c5c5c", labelFontSize: "14px", labelFontWeight: "bold", height: "35px", labelWidth: "100%", fontSize: "12px", formik: formik, id: "slug" })] })), jsxRuntime.jsxs(index, tslib.__assign({ width: "100%", backgroundColor: "#ffffff", padding: "30px 40px", customCSS: react.css(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n          box-shadow: 0px 3px 6px #0000001a;\n          @media (max-width: 980px) {\n            width: 100%;\n          }\n        "], ["\n          box-shadow: 0px 3px 6px #0000001a;\n          @media (max-width: 980px) {\n            width: 100%;\n          }\n        "]))) }, { children: [jsxRuntime.jsx(index, tslib.__assign({ width: "100%", margin: "0px 0px 10px 0px" }, { children: jsxRuntime.jsx(index$1, tslib.__assign({ fontSize: "14px", color: "#023059", fontWeight: "bold" }, { children: "SEO" })) })), Object.entries(initialSeoValues.seo).map(function (_a) {
                        var _b, _c;
                        var _d = tslib.__read(_a, 1), key = _d[0];
                        switch (key) {
                            case 'keywords':
                                return (jsxRuntime.jsxs(index, { children: [jsxRuntime.jsx(index$1, tslib.__assign({ fontSize: "14px", color: "#023059", fontWeight: "bold", margin: "0px 0px 10px 0px" }, { children: capitalizeFirstLetter(key) })), jsxRuntime.jsxs(index, tslib.__assign({ customCSS: react.css(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n                      gap: 10px;\n                    "], ["\n                      gap: 10px;\n                    "]))) }, { children: [jsxRuntime.jsxs(index, tslib.__assign({ customCSS: react.css(templateObject_5 || (templateObject_5 = tslib.__makeTemplateObject(["\n                        display: flex;\n                        flex-direction: row;\n                        gap: 20px;\n                      "], ["\n                        display: flex;\n                        flex-direction: row;\n                        gap: 20px;\n                      "]))) }, { children: [jsxRuntime.jsx(index$2, { border: "1px solid #0000003F", spanMargin: "5px 0px 10px 0px", labelColor: "#5c5c5c", labelFontSize: "14px", labelFontWeight: "bold", height: "35px", labelWidth: "100%", fontSize: "12px", value: keyword, onChange: function (e) { return setKeyword(e.target.value); }, id: "seo.".concat(key) }), jsxRuntime.jsx(index$3, tslib.__assign({ onClick: function () {
                                                                formik.setFieldValue("seo.".concat(key), tslib.__spreadArray([], tslib.__read(new Set(tslib.__spreadArray(tslib.__spreadArray([], tslib.__read(formik.values.seo[key]), false), [keyword], false))), false));
                                                                setKeyword('');
                                                            }, customCSS: react.css(templateObject_6 || (templateObject_6 = tslib.__makeTemplateObject(["\n                          border-radius: 50%;\n                          padding: 0px 10px;\n                          height: 35px;\n                        "], ["\n                          border-radius: 50%;\n                          padding: 0px 10px;\n                          height: 35px;\n                        "]))) }, { children: jsxRuntime.jsx(index$4, { width: "15px", height: "15px", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/JRO-0001/iconmonstr-plus-2.svg", customCSS: react.css(templateObject_7 || (templateObject_7 = tslib.__makeTemplateObject(["\n                            svg {\n                              path {\n                                fill: white !important;\n                              }\n                            }\n                          "], ["\n                            svg {\n                              path {\n                                fill: white !important;\n                              }\n                            }\n                          "]))) }) }))] })), jsxRuntime.jsx(index, tslib.__assign({ customCSS: react.css(templateObject_8 || (templateObject_8 = tslib.__makeTemplateObject(["\n                        width: 100%;\n                        display: flex;\n                        flex-direction: row;\n                        flex-wrap: wrap;\n                        justify-content: flex-start;\n                        gap: 10px;\n                      "], ["\n                        width: 100%;\n                        display: flex;\n                        flex-direction: row;\n                        flex-wrap: wrap;\n                        justify-content: flex-start;\n                        gap: 10px;\n                      "]))) }, { children: (_c = (_b = formik.values.seo) === null || _b === void 0 ? void 0 : _b[key]) === null || _c === void 0 ? void 0 : _c.map(function (item) { return (jsxRuntime.jsxs(index, tslib.__assign({ customCSS: react.css(templateObject_9 || (templateObject_9 = tslib.__makeTemplateObject(["\n                            max-width: max-content;\n                            flex-direction: row;\n                            align-items: center;\n                            justify-content: center;\n                            padding: 5px 10px;\n                            border-radius: 5px;\n                            background-color: #ececec;\n                            gap: 5px;\n                          "], ["\n                            max-width: max-content;\n                            flex-direction: row;\n                            align-items: center;\n                            justify-content: center;\n                            padding: 5px 10px;\n                            border-radius: 5px;\n                            background-color: #ececec;\n                            gap: 5px;\n                          "]))) }, { children: [jsxRuntime.jsx(index$1, { children: item }), jsxRuntime.jsx(index$3, tslib.__assign({ onClick: function () {
                                                                    formik.setFieldValue("seo.".concat(key), formik.values.seo[key].filter(function (v) { return v !== item; }));
                                                                }, customCSS: react.css(templateObject_10 || (templateObject_10 = tslib.__makeTemplateObject(["\n                              padding: 0px;\n                              background-color: transparent;\n                              border-radius: 50%;\n                            "], ["\n                              padding: 0px;\n                              background-color: transparent;\n                              border-radius: 50%;\n                            "]))) }, { children: jsxRuntime.jsx(index$4, { width: "16px", height: "16px", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/JRO-0001/icons/Component%20199%20%E2%80%93%202.svg", customCSS: react.css(templateObject_11 || (templateObject_11 = tslib.__makeTemplateObject(["\n                                svg {\n                                  g {\n                                    path {\n                                      fill: none !important;\n                                      stroke: #fe6a6a !important;\n                                    }\n                                  }\n                                }\n                              "], ["\n                                svg {\n                                  g {\n                                    path {\n                                      fill: none !important;\n                                      stroke: #fe6a6a !important;\n                                    }\n                                  }\n                                }\n                              "]))) }) }))] }), item)); }) }))] }))] }));
                            default:
                                return (jsxRuntime.jsx(index$2, { label: capitalizeFirstLetter(key), border: "1px solid #0000003F", spanMargin: "5px 0px 10px 0px", labelColor: "#5c5c5c", labelFontSize: "14px", labelFontWeight: "bold", height: "35px", labelWidth: "100%", fontSize: "12px", formik: formik, id: "seo.".concat(key) }));
                        }
                    })] }))] })));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;

exports["default"] = AtomFormSeo;
exports.initialSeoValues = initialSeoValues;
//# sourceMappingURL=index.js.map
