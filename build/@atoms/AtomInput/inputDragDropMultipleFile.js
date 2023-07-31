'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
var React = require('react');
var uuid = require('uuid');
var index$3 = require('../AtomButton/index.js');
var index$4 = require('../AtomIcon/index.js');
var index$1 = require('../AtomImage/index.js');
var index$2 = require('../AtomText/index.js');
var index = require('../AtomWrapper/index.js');
var error = require('./error.js');
var style = require('./style.js');

var Animation = {
    whileHover: { scale: 1.02, transition: { duration: 0.3 } },
    whileTap: { scale: 0.98, opacity: 0.8 },
};
var InputDragDropMultipleFiles = function (props) {
    var id = props.id, children = props.children, formik = props.formik, wrapperCustomCSS = props.wrapperCustomCSS;
    var _a = tslib.__read(React.useState(false), 2), dropActive = _a[0], setDropActive = _a[1];
    var _b = tslib.__read(React.useState(false), 2), filter = _b[0], setFilter = _b[1];
    var ref = React.useRef(null);
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
            var filesFilter = Array.from(files).map(function (i) { return ({
                id: uuid.v4(),
                file: i,
            }); });
            var group = tslib.__spreadArray(tslib.__spreadArray([], tslib.__read(formik === null || formik === void 0 ? void 0 : formik.values["".concat(id)]), false), tslib.__read(filesFilter), false);
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
                var filesFilter = Array.from(files).map(function (i) { return ({
                    id: uuid.v4(),
                    file: i,
                }); });
                var group = tslib.__spreadArray(tslib.__spreadArray([], tslib.__read(formik === null || formik === void 0 ? void 0 : formik.values["".concat(id)]), false), tslib.__read(filesFilter), false);
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
    var labelWidth = props.labelWidth, labelColor = props.labelColor, labelFontFamily = props.labelFontFamily, labelFontSize = props.labelFontSize, labelFontWeight = props.labelFontWeight, labelMargin = props.labelMargin, labelPadding = props.labelPadding, spanMargin = props.spanMargin, customCSS = props.customCSS, label = props.label;
    return (jsxRuntime.jsxs(style.InputTextLabelStyled, tslib.__assign({ labelWidth: labelWidth, labelColor: labelColor, labelFontFamily: labelFontFamily, labelFontSize: labelFontSize, labelFontWeight: labelFontWeight, labelMargin: labelMargin, labelPadding: labelPadding, customCSS: customCSS }, { children: [label && (jsxRuntime.jsx(style.InputTextSpanStyled, tslib.__assign({ spanMargin: spanMargin }, { children: label }))), jsxRuntime.jsxs(style.FileInputMultipleStyled, tslib.__assign({ dropActive: dropActive, htmlFor: id, onDrop: Drop, onDragOver: function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    setDropActive(true);
                }, onDragEnter: function (event) { return handleDrag(event); }, onDragLeave: function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    setDropActive(false);
                } }, props, Animation, { children: [(formik === null || formik === void 0 ? void 0 : formik.values["".concat(id)].length) === 0 && (jsxRuntime.jsx(index, tslib.__assign({ flexDirection: "row", customCSS: wrapperCustomCSS }, { children: !dropActive ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(index$1, { alt: "Drag and drop", height: "15px", width: "15px", margin: "0px 10px 0px 0px", src: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/PFS-0001/upload.svg" }), "ARRASTRA Y SUELTA"] })) : (jsxRuntime.jsx(jsxRuntime.Fragment, { children: "SUELTA" })) }))), (formik === null || formik === void 0 ? void 0 : formik.values["".concat(id)].length) > 0 && (jsxRuntime.jsx(index, tslib.__assign({ customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n              top: 0;\n              position: absolute;\n              width: 100%;\n              height: 100%;\n              flex-direction: column;\n              align-items: center;\n              justify-content: flex-start;\n              z-index: 10;\n            "], ["\n              top: 0;\n              position: absolute;\n              width: 100%;\n              height: 100%;\n              flex-direction: column;\n              align-items: center;\n              justify-content: flex-start;\n              z-index: 10;\n            "]))) }, { children: jsxRuntime.jsx(index, tslib.__assign({ customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n                align-items: center;\n                justify-content: center;\n                flex-direction: column;\n                height: 100%;\n                flex-wrap: wrap;\n                gap: 5px;\n                overflow: hidden;\n              "], ["\n                align-items: center;\n                justify-content: center;\n                flex-direction: column;\n                height: 100%;\n                flex-wrap: wrap;\n                gap: 5px;\n                overflow: hidden;\n              "]))) }, { children: formik === null || formik === void 0 ? void 0 : formik.values["".concat(id)].map(function (e) {
                                var _a;
                                return (jsxRuntime.jsxs(index, tslib.__assign({}, Animation, { customCSS: react.css(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n                    width: 100%;\n                    min-height: 25px;\n                    max-height: 100%;\n                    position: relative;\n                    align-items: center;\n                  "], ["\n                    width: 100%;\n                    min-height: 25px;\n                    max-height: 100%;\n                    position: relative;\n                    align-items: center;\n                  "]))) }, { children: [jsxRuntime.jsx(index$2, tslib.__assign({ width: "80%" }, { children: (_a = e === null || e === void 0 ? void 0 : e.file) === null || _a === void 0 ? void 0 : _a.name })), jsxRuntime.jsx(index$3, tslib.__assign({ customCSS: react.css(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n                      display: flex;\n                      align-items: center;\n                      justify-content: center;\n                      position: absolute;\n                      background: #e52d27;\n                      border-radius: 50%;\n                      width: 22px;\n                      height: 22px;\n                      padding: 0;\n                      right: 2px;\n                      top: 0px;\n                    "], ["\n                      display: flex;\n                      align-items: center;\n                      justify-content: center;\n                      position: absolute;\n                      background: #e52d27;\n                      border-radius: 50%;\n                      width: 22px;\n                      height: 22px;\n                      padding: 0;\n                      right: 2px;\n                      top: 0px;\n                    "]))), onClick: function () {
                                                var filterArray = formik === null || formik === void 0 ? void 0 : formik.values["".concat(id)].filter(function (e2) { return e2.id !== e.id; });
                                                setFilter(filterArray);
                                            }, type: "button" }, { children: jsxRuntime.jsx(index$4, { height: "17px", color: "transparent", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/JRO-0001/icons/Component%20199%20%E2%80%93%202.svg", customCSS: react.css(templateObject_5 || (templateObject_5 = tslib.__makeTemplateObject(["\n                        svg {\n                          g {\n                            path {\n                              stroke: #fff;\n                            }\n                          }\n                        }\n                      "], ["\n                        svg {\n                          g {\n                            path {\n                              stroke: #fff;\n                            }\n                          }\n                        }\n                      "]))) }) }))] }), e.id));
                            }) })) }))), jsxRuntime.jsx("input", { ref: ref, type: "file", multiple: true, id: id, onChange: DropInput, style: { width: '100%', height: '100%' }, accept: "*/*" })] })), jsxRuntime.jsx(index$3, tslib.__assign({ type: "button", width: "100%", backgroundColor: "#f6f7fb", border: "1px solid #c4c4c4", color: "#707070", fontWeight: "500", margin: "10px 0px 0px 0px", onClick: function () {
                    var _a;
                    (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.click();
                } }, { children: "Cargar archivos" })), children, jsxRuntime.jsx(error, tslib.__assign({}, props))] })));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

module.exports = InputDragDropMultipleFiles;
//# sourceMappingURL=inputDragDropMultipleFile.js.map
