'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var React = require('react');
var react = require('@emotion/react');
var framerMotion = require('framer-motion');
var index$1 = require('../AtomImage/index.js');
var index = require('../AtomWrapper/index.js');
var pintura = require('./pintura/pintura.js');
var PinturaEditor = require('./react-pintura/PinturaEditor.js');
require('./react-pintura/PinturaEditorModal.js');
require('./react-pintura/PinturaEditorOverlay.js');
var styled = require('./styled.js');

var InputImageEditor = function (props) {
    var modalCSS = props.modalCSS, wrapperCSS = props.wrapperCSS, onChangeImageEditor = props.onChangeImageEditor, aspectRatio = props.aspectRatio, imagePreview = props.imagePreview;
    var _a = tslib.__read(React.useState(null), 2), blob = _a[0], setBlob = _a[1];
    var _b = tslib.__read(React.useState(imagePreview !== null && imagePreview !== void 0 ? imagePreview : null), 2), image = _b[0], setImage = _b[1];
    var _c = tslib.__read(React.useState(false), 2), isModal = _c[0], setIsModal = _c[1];
    var _d = tslib.__read(React.useState(false), 2), dropActive = _d[0], setDropActive = _d[1];
    var ref = React.createRef();
    var refInput = React.useRef(null);
    var handleDrag = function (e) {
        e.preventDefault();
        e.stopPropagation();
    };
    var Drop = function (e) {
        handleDrag(e);
        var files = e.dataTransfer.files;
        if (files.length !== 0) {
            var url = URL === null || URL === void 0 ? void 0 : URL.createObjectURL(files[0]);
            setBlob(url);
            setDropActive(false);
            setIsModal(true);
        }
        else {
            refInput.current.value = null;
            setBlob(null);
            setDropActive(false);
            setIsModal(false);
        }
    };
    var DropInput = function (e) {
        e.preventDefault();
        e.stopPropagation();
        var files = e.currentTarget.files;
        if (files) {
            if (files.length !== 0) {
                var url = URL === null || URL === void 0 ? void 0 : URL.createObjectURL(files[0]);
                setBlob(url);
                setDropActive(false);
                setIsModal(true);
            }
            else {
                refInput.current.value = null;
                setBlob(null);
                setDropActive(false);
            }
        }
    };
    React.useEffect(function () {
        var handleClickOutside = function (event) {
            if (ref.current &&
                ref.current.elementRef.current &&
                !ref.current.elementRef.current.contains(event.target)) {
                refInput.current.value = null;
                setBlob(null);
                setImage(null);
                setDropActive(false);
                setIsModal(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(index, tslib.__assign({ customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n          width: 250px;\n          height: 250px;\n          ", "\n        "], ["\n          width: 250px;\n          height: 250px;\n          ", "\n        "])), wrapperCSS) }, { children: jsxRuntime.jsxs(styled.ImageEditorStyled, tslib.__assign({ htmlFor: "image-editor", onDrop: Drop, onDragOver: function (e) {
                        handleDrag(e);
                        setDropActive(true);
                    }, onDragEnter: function (e) { return handleDrag(e); }, onDragLeave: function (e) {
                        handleDrag(e);
                        setDropActive(false);
                    } }, { children: [image ? (jsxRuntime.jsx(index$1, { alt: "Drag and drop Preview", src: image, customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n                position: absolute;\n                width: 100%;\n                height: 100%;\n                object-fit: cover;\n              "], ["\n                position: absolute;\n                width: 100%;\n                height: 100%;\n                object-fit: cover;\n              "]))) })) : (jsxRuntime.jsx(index, tslib.__assign({ flexDirection: "row", customCSS: react.css(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n                font-size: 14px;\n                font-family: 'Montserrat', sans-serif;\n                font-weight: 600;\n              "], ["\n                font-size: 14px;\n                font-family: 'Montserrat', sans-serif;\n                font-weight: 600;\n              "]))) }, { children: !dropActive ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(index$1, { alt: "Drag and drop", height: "15px", width: "15px", margin: "0px 10px 0px 0px", src: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/PFS-0001/upload.svg" }), "ARRASTRA Y SUELTA"] })) : (jsxRuntime.jsx(jsxRuntime.Fragment, { children: "SUELTA" })) }))), jsxRuntime.jsx("input", { type: "file", id: "image-editor", onChange: DropInput, ref: refInput })] })) })), jsxRuntime.jsx(framerMotion.AnimatePresence, { children: isModal && (jsxRuntime.jsx(index, tslib.__assign({ customCSS: react.css(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n              top: 0;\n              left: 0;\n              z-index: 1000;\n              background-color: #3a3a3a5b;\n              position: fixed;\n              width: 100vw;\n              height: 100vh;\n              overflow: hidden;\n              justify-content: center;\n              align-items: center;\n              .PinturaRootWrapper {\n                width: 90%;\n                max-width: 600px;\n                height: 70%;\n                max-height: 600px;\n              }\n              .PinturaRoot {\n                background-color: #fafafa;\n              }\n              .PinturaButtonExport {\n                background-color: #f1576c;\n                color: #fff;\n                :hover {\n                  background-color: #c5293e;\n                }\n              }\n              ", "\n            "], ["\n              top: 0;\n              left: 0;\n              z-index: 1000;\n              background-color: #3a3a3a5b;\n              position: fixed;\n              width: 100vw;\n              height: 100vh;\n              overflow: hidden;\n              justify-content: center;\n              align-items: center;\n              .PinturaRootWrapper {\n                width: 90%;\n                max-width: 600px;\n                height: 70%;\n                max-height: 600px;\n              }\n              .PinturaRoot {\n                background-color: #fafafa;\n              }\n              .PinturaButtonExport {\n                background-color: #f1576c;\n                color: #fff;\n                :hover {\n                  background-color: #c5293e;\n                }\n              }\n              ", "\n            "])), modalCSS) }, { children: jsxRuntime.jsx(PinturaEditor, tslib.__assign({}, pintura.getEditorDefaults(), { src: blob, ref: ref, utils: ['crop', 'filter', 'finetune', 'annotate', 'frame'], enableDropImage: false, imageCropAspectRatio: aspectRatio !== null && aspectRatio !== void 0 ? aspectRatio : 1, cropEnableCenterImageSelection: true, cropImageSelectionCornerStyle: "hook", cropAutoCenterImageSelectionTimeout: 500, 
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        onProcess: function (res) {
                            var FilterAndCrop = URL.createObjectURL(res.dest);
                            onChangeImageEditor === null || onChangeImageEditor === void 0 ? void 0 : onChangeImageEditor({ url: FilterAndCrop, file: res.dest });
                            setImage(FilterAndCrop);
                            setIsModal(false);
                        } })) }), "".concat(isModal))) })] }));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

module.exports = InputImageEditor;
//# sourceMappingURL=index.js.map
