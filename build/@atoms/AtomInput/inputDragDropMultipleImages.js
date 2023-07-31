'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
var React = require('react');
var uuid = require('uuid');
var index$2 = require('../AtomButton/index.js');
var index$3 = require('../AtomIcon/index.js');
var index$1 = require('../AtomImage/index.js');
var index = require('../AtomWrapper/index.js');
var error = require('./error.js');
var style = require('./style.js');

// import { AtomButton, AtomIcon, AtomImage, AtomWrapper } from '@ixulabs/ui';
var Animation = {
    whileHover: { scale: 1.02, transition: { duration: 0.3 } },
    whileTap: { scale: 0.98, opacity: 0.8 },
};
var InputDragDropMultipleImages = function (props) {
    var id = props.id, children = props.children, formik = props.formik, wrapperCustomCSS = props.wrapperCustomCSS;
    var ref = React.useRef(null);
    var _a = tslib.__read(React.useState(false), 2), filter = _a[0], setFilter = _a[1];
    var _b = tslib.__read(React.useState(false), 2), dropActive = _b[0], setDropActive = _b[1];
    React.useEffect(function () {
        if (filter !== false && formik) {
            formik.setFieldValue(id, filter);
            setFilter(false);
        }
    }, [filter]);
    var Drop = function (e) {
        e.preventDefault();
        e.stopPropagation();
        var files = e.dataTransfer.files;
        if (files.length !== 0) {
            var urlArray = Array.from(files).map(function (file) {
                var url = URL === null || URL === void 0 ? void 0 : URL.createObjectURL(file);
                var idSet = uuid.v4();
                return { id: idSet, url: url, file: file };
            });
            var group = tslib.__spreadArray(tslib.__spreadArray([], tslib.__read(formik === null || formik === void 0 ? void 0 : formik.values["".concat(id)]), false), tslib.__read(urlArray), false);
            formik === null || formik === void 0 ? void 0 : formik.setFieldValue(id, group);
            setDropActive(false);
        }
        else {
            setDropActive(false);
            formik === null || formik === void 0 ? void 0 : formik.setFieldValue(id, "");
        }
    };
    var DropInput = function (e) {
        e.preventDefault();
        e.stopPropagation();
        var files = e.currentTarget.files;
        if (files) {
            if (files.length !== 0) {
                var urlArray = Array.from(files).map(function (file) {
                    var url = URL === null || URL === void 0 ? void 0 : URL.createObjectURL(file);
                    var idSet = uuid.v4();
                    return { id: idSet, url: url, file: file };
                });
                var group = tslib.__spreadArray(tslib.__spreadArray([], tslib.__read(formik === null || formik === void 0 ? void 0 : formik.values["".concat(id)]), false), tslib.__read(urlArray), false);
                formik === null || formik === void 0 ? void 0 : formik.setFieldValue(id, group);
                setDropActive(false);
            }
            else {
                setDropActive(false);
                formik === null || formik === void 0 ? void 0 : formik.setFieldValue(id, "");
            }
        }
    };
    var handleDrag = function (e) {
        e.preventDefault();
        e.stopPropagation();
    };
    var labelWidth = props.labelWidth, labelColor = props.labelColor, labelFontFamily = props.labelFontFamily, labelFontSize = props.labelFontSize, labelFontWeight = props.labelFontWeight, labelMargin = props.labelMargin, labelPadding = props.labelPadding, spanMargin = props.spanMargin, customCSS = props.customCSS, label = props.label, borderRadius = props.borderRadius;
    return (jsxRuntime.jsxs(style.InputTextLabelStyled, tslib.__assign({ labelWidth: labelWidth, labelColor: labelColor, labelFontFamily: labelFontFamily, labelFontSize: labelFontSize, labelFontWeight: labelFontWeight, labelMargin: labelMargin, labelPadding: labelPadding, customCSS: customCSS }, { children: [label && (jsxRuntime.jsx(style.InputTextSpanStyled, tslib.__assign({ spanMargin: spanMargin }, { children: label }))), jsxRuntime.jsxs(style.FileInputStyled, tslib.__assign({ dropActive: dropActive, htmlFor: id, onDrop: Drop, onDragOver: function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    setDropActive(true);
                }, onDragEnter: function (event) { return handleDrag(event); }, onDragLeave: function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    setDropActive(false);
                } }, props, { children: [(formik === null || formik === void 0 ? void 0 : formik.values["".concat(id)].length) === 0 && (jsxRuntime.jsx(index, tslib.__assign({ flexDirection: "row", customCSS: wrapperCustomCSS }, { children: !dropActive ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(index$1, { alt: "Drag and drop", height: "15px", width: "15px", margin: "0px 10px 0px 0px", src: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/PFS-0001/upload.svg" }), "ARRASTRA Y SUELTA"] })) : (jsxRuntime.jsx(jsxRuntime.Fragment, { children: "SUELTA" })) }))), (formik === null || formik === void 0 ? void 0 : formik.values["".concat(id)].length) > 0 && (jsxRuntime.jsx(index, tslib.__assign({ customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n              top: 0;\n              position: absolute;\n              width: 100%;\n              height: 100%;\n              flex-direction: column;\n              align-items: center;\n              justify-content: flex-start;\n              z-index: 10;\n            "], ["\n              top: 0;\n              position: absolute;\n              width: 100%;\n              height: 100%;\n              flex-direction: column;\n              align-items: center;\n              justify-content: flex-start;\n              z-index: 10;\n            "]))) }, { children: jsxRuntime.jsx(index, tslib.__assign({ customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n                align-items: center;\n                justify-content: space-between;\n                flex-direction: row;\n                height: 100%;\n                flex-wrap: wrap;\n                gap: 5px;\n                overflow: hidden;\n              "], ["\n                align-items: center;\n                justify-content: space-between;\n                flex-direction: row;\n                height: 100%;\n                flex-wrap: wrap;\n                gap: 5px;\n                overflow: hidden;\n              "]))) }, { children: formik === null || formik === void 0 ? void 0 : formik.values["".concat(id)].map(function (e) { return (jsxRuntime.jsxs(index, tslib.__assign({}, Animation, { customCSS: react.css(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n                    width: ", "%;\n                    height: ", "%;\n                    max-height: 100%;\n                    position: relative;\n                  "], ["\n                    width: ", "%;\n                    height: ", "%;\n                    max-height: 100%;\n                    position: relative;\n                  "])), 100 / (formik === null || formik === void 0 ? void 0 : formik.values["".concat(id)].length) + 10, 100 / (formik === null || formik === void 0 ? void 0 : formik.values["".concat(id)].length) + 15) }, { children: [jsxRuntime.jsx(index$1, { alt: "Drag and drop Preview", src: "".concat(e.url), customCSS: react.css(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n                      border-radius: ", ";\n                      width: 100%;\n                      height: 100%;\n                      object-fit: cover;\n                    "], ["\n                      border-radius: ", ";\n                      width: 100%;\n                      height: 100%;\n                      object-fit: cover;\n                    "])), borderRadius || "4px") }, "".concat(e.id, "moreimages")), jsxRuntime.jsx(index$2, tslib.__assign({ customCSS: react.css(templateObject_5 || (templateObject_5 = tslib.__makeTemplateObject(["\n                      display: flex;\n                      align-items: center;\n                      justify-content: center;\n                      position: absolute;\n                      background: #e52d27;\n                      border-radius: 50%;\n                      width: 40px;\n                      height: 40px;\n                      padding: 0;\n                      right: 15px;\n                      top: 15px;\n                    "], ["\n                      display: flex;\n                      align-items: center;\n                      justify-content: center;\n                      position: absolute;\n                      background: #e52d27;\n                      border-radius: 50%;\n                      width: 40px;\n                      height: 40px;\n                      padding: 0;\n                      right: 15px;\n                      top: 15px;\n                    "]))), onClick: function () {
                                            var filterArray = formik === null || formik === void 0 ? void 0 : formik.values["".concat(id)].filter(function (e2) { return e2.id !== e.id; });
                                            setFilter(filterArray);
                                        }, type: "button" }, { children: jsxRuntime.jsx(index$3, { height: "20px", color: "transparent", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/JRO-0001/icons/Component%20199%20%E2%80%93%202.svg", customCSS: react.css(templateObject_6 || (templateObject_6 = tslib.__makeTemplateObject(["\n                        svg {\n                          g {\n                            path {\n                              stroke: #fff;\n                            }\n                          }\n                        }\n                      "], ["\n                        svg {\n                          g {\n                            path {\n                              stroke: #fff;\n                            }\n                          }\n                        }\n                      "]))) }) }))] }), e.id)); }) })) }))), jsxRuntime.jsx("input", { ref: ref, type: "file", multiple: true, id: id, onChange: DropInput, style: { width: "100%", height: "100%" } })] })), jsxRuntime.jsx(index$2, tslib.__assign({ type: "button", width: "100%", backgroundColor: "#f6f7fb", border: "1px solid #c4c4c4", color: "#707070", fontWeight: "500", margin: "10px 0px 0px 0px", onClick: function () {
                    var _a;
                    (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.click();
                } }, { children: "Cargar mas imagenes" })), children, jsxRuntime.jsx(error, tslib.__assign({}, props))] })));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

module.exports = InputDragDropMultipleImages;
//# sourceMappingURL=inputDragDropMultipleImages.js.map
