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
var InputDragDropFile = function (props) {
    var id = props.id, children = props.children, formik = props.formik, wrapperCustomCSS = props.wrapperCustomCSS, imagePreview = props.imagePreview, placeholderDragDrop = props.placeholderDragDrop, onChangeDrop = props.onChangeDrop;
    var _a = tslib.__read(React.useState(""), 2), preview = _a[0], setPreview = _a[1];
    var _b = tslib.__read(React.useState(false), 2), dropActive = _b[0], setDropActive = _b[1];
    React.useEffect(function () {
        setPreview(imagePreview);
    }, [imagePreview]);
    React.useEffect(function () {
        var _a, _b;
        if ((_a = formik === null || formik === void 0 ? void 0 : formik.values["".concat(id)]) === null || _a === void 0 ? void 0 : _a.name) {
            // const url = URL?.createObjectURL(formik?.values[`${id}`]);
            setPreview((_b = formik === null || formik === void 0 ? void 0 : formik.values["".concat(id)]) === null || _b === void 0 ? void 0 : _b.name);
            setDropActive(false);
        }
        else {
            setPreview(imagePreview !== null && imagePreview !== void 0 ? imagePreview : "");
            setDropActive(false);
        }
    }, [formik === null || formik === void 0 ? void 0 : formik.values["".concat(id)]]);
    var Drop = function (e) {
        e.preventDefault();
        e.stopPropagation();
        var files = e.dataTransfer.files;
        if (files.length !== 0) {
            // const url = URL?.createObjectURL(files[0]);
            setPreview(files[0].name);
            setDropActive(false);
            formik === null || formik === void 0 ? void 0 : formik.setFieldValue(id, files[0]);
            onChangeDrop === null || onChangeDrop === void 0 ? void 0 : onChangeDrop(files[0]);
        }
        else {
            setPreview("");
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
                // const url = URL?.createObjectURL(files[0]);
                // setPreview(url);
                setDropActive(false);
                formik === null || formik === void 0 ? void 0 : formik.setFieldValue(id, files[0]);
                onChangeDrop === null || onChangeDrop === void 0 ? void 0 : onChangeDrop(files[0]);
                setPreview(files[0].name);
            }
            else {
                setPreview("");
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
    return (jsxRuntime.jsxs(style.InputTextLabelStyled, tslib.__assign({ labelWidth: labelWidth, labelColor: labelColor, labelFontFamily: labelFontFamily, labelFontSize: labelFontSize, labelFontWeight: labelFontWeight, labelMargin: labelMargin, labelPadding: labelPadding, customCSS: customCSS }, { children: [label && (jsxRuntime.jsx(style.InputTextSpanStyled, tslib.__assign({ spanMargin: spanMargin }, { children: label }))), jsxRuntime.jsxs(style.FileInputStyled, tslib.__assign({ dropActive: dropActive, htmlFor: id, onDrop: Drop, onDragOver: function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    setDropActive(true);
                }, onDragEnter: function (event) { return handleDrag(event); }, onDragLeave: function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    setDropActive(false);
                } }, props, Animation, { children: [preview === "" ? (jsxRuntime.jsx(index, tslib.__assign({ flexDirection: "row", customCSS: wrapperCustomCSS }, { children: placeholderDragDrop ? (placeholderDragDrop(dropActive)) : (jsxRuntime.jsx(jsxRuntime.Fragment, { children: !dropActive ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(index$1, { alt: "Drag and drop", height: "15px", width: "15px", margin: "0px 10px 0px 0px", src: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/PFS-0001/upload.svg" }), "ARRASTRA Y SUELTA"] })) : (jsxRuntime.jsx(jsxRuntime.Fragment, { children: "SUELTA" })) })) }))) : (jsxRuntime.jsx(index$2, tslib.__assign({ customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n              text-align: center;\n            "], ["\n              text-align: center;\n            "]))) }, { children: preview }))), jsxRuntime.jsx("input", { type: "file", multiple: true, id: id, onChange: DropInput, style: { width: '100%', height: '100%' } })] })), children, jsxRuntime.jsx(error, tslib.__assign({}, props))] })));
};
var templateObject_1;

module.exports = InputDragDropFile;
//# sourceMappingURL=inputDragDropFile.js.map
