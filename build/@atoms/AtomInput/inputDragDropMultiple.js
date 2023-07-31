'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
var React = require('react');
var index$1 = require('../AtomImage/index.js');
var index$2 = require('../AtomText/index.js');
var index = require('../AtomWrapper/index.js');
var error = require('./error.js');
var style = require('./style.js');

var Animation = {
    whileHover: { scale: 1.02, transition: { duration: 0.3 } },
    whileTap: { scale: 0.98, opacity: 0.8 },
};
var InputDragDropMultiple = function (props) {
    var id = props.id, children = props.children, formik = props.formik, wrapperCustomCSS = props.wrapperCustomCSS, imagePreviewArray = props.imagePreviewArray;
    var _a = tslib.__read(React.useState([]), 2), preview = _a[0], setPreview = _a[1];
    var _b = tslib.__read(React.useState(false), 2), dropActive = _b[0], setDropActive = _b[1];
    React.useEffect(function () {
        if (imagePreviewArray) {
            setPreview(imagePreviewArray);
        }
    }, [imagePreviewArray]);
    React.useEffect(function () {
        if (formik === null || formik === void 0 ? void 0 : formik.values["".concat(id)]) {
            setPreview(formik === null || formik === void 0 ? void 0 : formik.values["".concat(id)].map(function (item) { return item.url; }));
            setDropActive(false);
        }
        else {
            setPreview([]);
            setDropActive(false);
        }
    }, [formik === null || formik === void 0 ? void 0 : formik.values["".concat(id)]]);
    var Drop = function (e) {
        e.preventDefault();
        e.stopPropagation();
        var files = e.dataTransfer.files;
        if (files.length !== 0) {
            var urlArray = Array.from(files).map(function (file) {
                var url = URL === null || URL === void 0 ? void 0 : URL.createObjectURL(file);
                return { url: url, file: file };
            });
            formik === null || formik === void 0 ? void 0 : formik.setFieldValue(id, urlArray);
            setPreview(urlArray.map(function (item) { return item.url; }));
            setDropActive(false);
        }
        else {
            setPreview([]);
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
                    return { url: url, file: file };
                });
                formik === null || formik === void 0 ? void 0 : formik.setFieldValue(id, urlArray);
                setPreview(urlArray.map(function (item) { return item.url; }));
                setDropActive(false);
            }
            else {
                setPreview([]);
                setDropActive(false);
                formik === null || formik === void 0 ? void 0 : formik.setFieldValue(id, "");
            }
        }
    };
    var handleDrag = function (e) {
        e.preventDefault();
        e.stopPropagation();
    };
    var labelWidth = props.labelWidth, labelColor = props.labelColor, labelFontFamily = props.labelFontFamily, labelFontSize = props.labelFontSize, labelFontWeight = props.labelFontWeight, labelMargin = props.labelMargin, labelPadding = props.labelPadding, spanMargin = props.spanMargin, customCSS = props.customCSS, label = props.label, borderRadius = props.borderRadius, heightpreview = props.heightpreview;
    return (jsxRuntime.jsxs(style.InputTextLabelStyled, tslib.__assign({ labelWidth: labelWidth, labelColor: labelColor, labelFontFamily: labelFontFamily, labelFontSize: labelFontSize, labelFontWeight: labelFontWeight, labelMargin: labelMargin, labelPadding: labelPadding, customCSS: customCSS }, { children: [label && (jsxRuntime.jsx(style.InputTextSpanStyled, tslib.__assign({ spanMargin: spanMargin }, { children: label }))), jsxRuntime.jsxs(style.FileInputStyled, tslib.__assign({ dropActive: dropActive, htmlFor: id, onDrop: Drop, onDragOver: function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    setDropActive(true);
                }, onDragEnter: function (event) { return handleDrag(event); }, onDragLeave: function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    setDropActive(false);
                } }, props, Animation, { children: [preview.length === 0 && (jsxRuntime.jsx(index, tslib.__assign({ flexDirection: "row", customCSS: wrapperCustomCSS }, { children: !dropActive ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(index$1, { alt: "Drag and drop", height: "15px", width: "15px", margin: "0px 10px 0px 0px", src: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/PFS-0001/upload.svg" }), "ARRASTRA Y SUELTA"] })) : (jsxRuntime.jsx(jsxRuntime.Fragment, { children: "SUELTA" })) }))), preview.length > 0 && preview.find(function (_, idx) { return idx === 0; }) && (jsxRuntime.jsxs(index, tslib.__assign({ customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n              top: 0;\n              position: absolute;\n              width: 100%;\n              height: 100%;\n              flex-direction: column;\n              align-items: center;\n              justify-content: flex-start;\n            "], ["\n              top: 0;\n              position: absolute;\n              width: 100%;\n              height: 100%;\n              flex-direction: column;\n              align-items: center;\n              justify-content: flex-start;\n            "]))) }, { children: [jsxRuntime.jsx(index$1, { alt: "Drag and drop Preview", src: "".concat(preview.find(function (_, idx) { return idx === 0; })), customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n                border-radius: ", ";\n                width: 100%;\n                height: ", ";\n                padding: 5px;\n                object-fit: cover;\n              "], ["\n                border-radius: ", ";\n                width: 100%;\n                height: ", ";\n                padding: 5px;\n                object-fit: cover;\n              "])), borderRadius || '4px', heightpreview || '100%') }), jsxRuntime.jsxs(index, tslib.__assign({ customCSS: react.css(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n                flex-direction: row;\n                height: 30%;\n              "], ["\n                flex-direction: row;\n                height: 30%;\n              "]))) }, { children: [preview
                                        .filter(function (_, idx) { return idx !== 0 && idx < 5; })
                                        .map(function (e) { return (jsxRuntime.jsx(index$1, { alt: "Drag and drop Preview", src: "".concat(e), customCSS: react.css(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n                      border-radius: ", ";\n                      width: 100%;\n                      height: 100%;\n                      object-fit: cover;\n                      margin: 5px;\n                    "], ["\n                      border-radius: ", ";\n                      width: 100%;\n                      height: 100%;\n                      object-fit: cover;\n                      margin: 5px;\n                    "])), borderRadius || '4px') }, "".concat(e, "moreimages"))); }), preview.length > 5 && (jsxRuntime.jsx(index, tslib.__assign({ customCSS: react.css(templateObject_5 || (templateObject_5 = tslib.__makeTemplateObject(["\n                    align-items: center;\n                    justify-content: center;\n                    height: 100%;\n                    margin: 5px;\n                    background-color: ", ";\n                  "], ["\n                    align-items: center;\n                    justify-content: center;\n                    height: 100%;\n                    margin: 5px;\n                    background-color: ", ";\n                  "])), props.color || '#00abb9') }, { children: jsxRuntime.jsxs(index$2, tslib.__assign({ customCSS: react.css(templateObject_6 || (templateObject_6 = tslib.__makeTemplateObject(["\n                      font-size: 18px;\n                      color: white;\n                      margin: 0px;\n                      padding: 0px;\n                    "], ["\n                      font-size: 18px;\n                      color: white;\n                      margin: 0px;\n                      padding: 0px;\n                    "]))) }, { children: ["+", preview.length - 5] })) })))] }))] }))), jsxRuntime.jsx("input", { type: "file", multiple: true, id: id, onChange: DropInput, style: { width: '100%', height: '100%' } })] })), children, jsxRuntime.jsx(error, tslib.__assign({}, props))] })));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

module.exports = InputDragDropMultiple;
//# sourceMappingURL=inputDragDropMultiple.js.map
