'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
var tiptapReact_esm = require('../../node_modules/@tiptap/react/dist/tiptap-react.esm.js');
var React = require('react');
var tiptapExtensionColor_esm = require('../../node_modules/@tiptap/extension-color/dist/tiptap-extension-color.esm.js');
var tiptapExtensionFontFamily_esm = require('../../node_modules/@tiptap/extension-font-family/dist/tiptap-extension-font-family.esm.js');
var tiptapExtensionHardBreak_esm = require('../../node_modules/@tiptap/extension-hard-break/dist/tiptap-extension-hard-break.esm.js');
var tiptapExtensionImage_esm = require('../../node_modules/@tiptap/extension-image/dist/tiptap-extension-image.esm.js');
var tiptapExtensionLink_esm = require('../../node_modules/@tiptap/extension-link/dist/tiptap-extension-link.esm.js');
var tiptapExtensionTable_esm = require('../../node_modules/@tiptap/extension-table/dist/tiptap-extension-table.esm.js');
var tiptapExtensionTableCell_esm = require('../../node_modules/@tiptap/extension-table-cell/dist/tiptap-extension-table-cell.esm.js');
var tiptapExtensionTableHeader_esm = require('../../node_modules/@tiptap/extension-table-header/dist/tiptap-extension-table-header.esm.js');
var tiptapExtensionTableRow_esm = require('../../node_modules/@tiptap/extension-table-row/dist/tiptap-extension-table-row.esm.js');
var tiptapExtensionTextAlign_esm = require('../../node_modules/@tiptap/extension-text-align/dist/tiptap-extension-text-align.esm.js');
var tiptapExtensionTextStyle_esm = require('../../node_modules/@tiptap/extension-text-style/dist/tiptap-extension-text-style.esm.js');
var tiptapExtensionUnderline_esm = require('../../node_modules/@tiptap/extension-underline/dist/tiptap-extension-underline.esm.js');
var tiptapStarterKit_esm = require('../../node_modules/@tiptap/starter-kit/dist/tiptap-starter-kit.esm.js');
var uploadImage = require('../../@utils/uploadImage.js');
var index$5 = require('../AtomButton/index.js');
var index$1 = require('../AtomIcon/index.js');
var index$2 = require('../AtomInput/index.js');
var index$3 = require('../AtomLoader/index.js');
var index$4 = require('../AtomText/index.js');
var index = require('../AtomWrapper/index.js');
var error = require('./error.js');
var iframe = require('./iframe.js');
var styled = require('./styled.js');
var video = require('./video.js');

tiptapExtensionHardBreak_esm.HardBreak.configure({
    keepMarks: false,
});
var tableHTML = "\n  <table style=\"width:100%\">\n    <tr>\n      <th>Firstname</th>\n      <th>Lastname</th>\n      <th>Age</th>\n    </tr>\n    <tr>\n      <td>Jill</td>\n      <td>Smith</td>\n      <td>50</td>\n    </tr>\n    <tr>\n      <td>Eve</td>\n      <td>Jackson</td>\n      <td>94</td>\n    </tr>\n    <tr>\n      <td>John</td>\n      <td>Doe</td>\n      <td>80</td>\n    </tr>\n  </table>\n";
var MenuBar = function (props) {
    var _a, _b, _c;
    var editor = props.editor;
    var _d = tslib.__read(React.useState(false), 2), isOpen = _d[0], setIsOpen = _d[1];
    var _e = tslib.__read(React.useState(false), 2), loadingFile = _e[0], setLoadingFile = _e[1];
    var _f = tslib.__read(React.useState({}), 2), image = _f[0], setImage = _f[1];
    var _g = tslib.__read(React.useState({}), 2), video = _g[0], setVideo = _g[1];
    var _h = tslib.__read(React.useState(false), 2), isOpenUrl = _h[0], setIsOpenUrl = _h[1];
    var _j = tslib.__read(React.useState(false), 2), isOpenVideo = _j[0], setIsOpenVideo = _j[1];
    var _k = tslib.__read(React.useState(''), 2), url = _k[0], setUrl = _k[1];
    var ref = React.useRef(null);
    var ref2 = React.useRef(null);
    var ref3 = React.useRef(null);
    React.useEffect(function () {
        var handleClickOutside = function (event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpenUrl(false);
            }
            if (ref2.current && !ref2.current.contains(event.target)) {
                setIsOpen(false);
            }
            if (ref3.current && !ref3.current.contains(event.target)) {
                setIsOpenVideo(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside, true);
        return function () {
            document.removeEventListener("mousedown", handleClickOutside, true);
        };
    }, [ref, ref2, ref3]);
    var options = tslib.__assign({ selectFont: true, typeTags: true, textAligns: true }, ((_a = props === null || props === void 0 ? void 0 : props.options) !== null && _a !== void 0 ? _a : {}));
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs(index, tslib.__assign({ className: "menu-editor", flexDirection: "row", width: "100%", justifyContent: "flex-start", alignItems: "center", flexWrap: "wrap", padding: "0px 0px 20px 0px", customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n          gap: 10px;\n          flex-wrap: wrap;\n          ButtonStyled {\n            flex-basis: 40px;\n            flex-grow: 1;\n            width: 40px;\n            height: 40px;\n            font-size: 15px;\n            overflow: hidden;\n            background-color: #fafafa;\n            border: none;\n            color: #373737;\n            font-weight: bold;\n            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);\n          }\n          ", "\n        "], ["\n          gap: 10px;\n          flex-wrap: wrap;\n          ButtonStyled {\n            flex-basis: 40px;\n            flex-grow: 1;\n            width: 40px;\n            height: 40px;\n            font-size: 15px;\n            overflow: hidden;\n            background-color: #fafafa;\n            border: none;\n            color: #373737;\n            font-weight: bold;\n            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);\n          }\n          ", "\n        "])), (_b = props === null || props === void 0 ? void 0 : props.customCSSH) !== null && _b !== void 0 ? _b : react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject([""], [""])))) }, { children: [jsxRuntime.jsx(styled.InputColorStyled, { type: "color", onInput: function (event) {
                        return editor === null || editor === void 0 ? void 0 : editor.chain().focus().setColor("".concat(event.currentTarget.value)).run();
                    }, value: (_c = editor === null || editor === void 0 ? void 0 : editor.getAttributes('textStyle').color) !== null && _c !== void 0 ? _c : '#ffffff' }), jsxRuntime.jsx(styled.ButtonStyled, tslib.__assign({ onClick: function () { return editor === null || editor === void 0 ? void 0 : editor.chain().focus().toggleBold().run(); }, isActive: editor === null || editor === void 0 ? void 0 : editor.isActive('bold') }, { children: jsxRuntime.jsx(index$1, { height: "12px", width: "12px", color: (editor === null || editor === void 0 ? void 0 : editor.isActive('bold')) ? '#fafafa' : '#373737', icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/bold-solid.svg" }) })), jsxRuntime.jsx(styled.ButtonStyled, tslib.__assign({ onClick: function () { return editor === null || editor === void 0 ? void 0 : editor.chain().focus().toggleItalic().run(); }, isActive: editor === null || editor === void 0 ? void 0 : editor.isActive('italic') }, { children: jsxRuntime.jsx(index$1, { height: "12px", width: "12px", color: (editor === null || editor === void 0 ? void 0 : editor.isActive('italic')) ? '#fafafa' : '#373737', icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/italic-solid.svg" }) })), jsxRuntime.jsx(styled.ButtonStyled, tslib.__assign({ onClick: function () { return editor === null || editor === void 0 ? void 0 : editor.chain().focus().toggleStrike().run(); }, isActive: editor === null || editor === void 0 ? void 0 : editor.isActive('strike') }, { children: jsxRuntime.jsx(index$1, { height: "12px", width: "12px", color: (editor === null || editor === void 0 ? void 0 : editor.isActive('strike')) ? '#fafafa' : '#373737', icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/strikethrough-solid.svg" }) })), jsxRuntime.jsx(styled.ButtonStyled, tslib.__assign({ onClick: function () { return editor === null || editor === void 0 ? void 0 : editor.chain().focus().toggleUnderline().run(); }, isActive: editor === null || editor === void 0 ? void 0 : editor.isActive('underline') }, { children: jsxRuntime.jsx(index$1, { height: "12px", width: "12px", color: (editor === null || editor === void 0 ? void 0 : editor.isActive('underline')) ? '#fafafa' : '#373737', icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/underline-solid.svg" }) })), (options === null || options === void 0 ? void 0 : options.selectFont) ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(styled.SeparateVerticalStyled, {}), jsxRuntime.jsx(index$2, { type: "select", border: "1px solid #d5d5d5", height: "30px", labelWidth: "184px", options: [
                                { id: '0', value: 'Montserrat', label: 'Montserrat' },
                                { id: '1', value: 'Inter', label: 'Inter' },
                                {
                                    id: '2',
                                    value: 'Comic Sans MS, Comic Sans',
                                    label: 'Comic Sans MS, Comic Sans',
                                },
                                { id: '3', value: 'Arial', label: 'Arial' },
                                { id: '4', value: 'serif', label: 'serif' },
                                { id: '5', value: 'monospace', label: 'monospace' },
                                { id: '6', value: 'cursive', label: 'cursive' },
                            ], customCSS: react.css(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n                select {\n                  font-size: 10px;\n                  option {\n                    font-size: 10px;\n                  }\n                }\n                span {\n                  display: none;\n                }\n              "], ["\n                select {\n                  font-size: 10px;\n                  option {\n                    font-size: 10px;\n                  }\n                }\n                span {\n                  display: none;\n                }\n              "]))), onChange: function (e) {
                                return editor === null || editor === void 0 ? void 0 : editor.chain().focus().setFontFamily("".concat(e.target.value)).run();
                            } })] })) : null, options.textAligns ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(styled.SeparateVerticalStyled, {}), jsxRuntime.jsx(styled.ButtonStyled, tslib.__assign({ onClick: function () { return editor === null || editor === void 0 ? void 0 : editor.chain().focus().setTextAlign('left').run(); }, isActive: editor === null || editor === void 0 ? void 0 : editor.isActive({ textAlign: 'left' }) }, { children: jsxRuntime.jsx(index$1, { height: "12px", width: "12px", color: (editor === null || editor === void 0 ? void 0 : editor.isActive({ textAlign: 'left' }))
                                    ? '#fafafa'
                                    : '#373737', icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/align-left-solid.svg" }) })), jsxRuntime.jsx(styled.ButtonStyled, tslib.__assign({ onClick: function () {
                                return editor === null || editor === void 0 ? void 0 : editor.chain().focus().setTextAlign('center').run();
                            }, isActive: editor === null || editor === void 0 ? void 0 : editor.isActive({ textAlign: 'center' }) }, { children: jsxRuntime.jsx(index$1, { height: "12px", width: "12px", color: (editor === null || editor === void 0 ? void 0 : editor.isActive({ textAlign: 'center' }))
                                    ? '#fafafa'
                                    : '#373737', icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/align-center-solid.svg" }) })), jsxRuntime.jsx(styled.ButtonStyled, tslib.__assign({ onClick: function () {
                                return editor === null || editor === void 0 ? void 0 : editor.chain().focus().setTextAlign('right').run();
                            }, isActive: editor === null || editor === void 0 ? void 0 : editor.isActive({ textAlign: 'right' }) }, { children: jsxRuntime.jsx(index$1, { height: "12px", width: "12px", color: (editor === null || editor === void 0 ? void 0 : editor.isActive({ textAlign: 'right' }))
                                    ? '#fafafa'
                                    : '#373737', icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/align-right-solid.svg" }) })), jsxRuntime.jsx(styled.ButtonStyled, tslib.__assign({ onClick: function () {
                                return editor === null || editor === void 0 ? void 0 : editor.chain().focus().setTextAlign('justify').run();
                            }, isActive: editor === null || editor === void 0 ? void 0 : editor.isActive({ textAlign: 'justify' }) }, { children: jsxRuntime.jsx(index$1, { height: "12px", width: "12px", color: (editor === null || editor === void 0 ? void 0 : editor.isActive({ textAlign: 'justify' }))
                                    ? '#fafafa'
                                    : '#373737', icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/align-justify-solid.svg" }) }))] })) : null, (options === null || options === void 0 ? void 0 : options.typeTags) ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(styled.SeparateVerticalStyled, {}), jsxRuntime.jsx(styled.ButtonStyled, tslib.__assign({ onClick: function () { return editor === null || editor === void 0 ? void 0 : editor.chain().focus().setParagraph().run(); }, isActive: editor === null || editor === void 0 ? void 0 : editor.isActive('paragraph') }, { children: "P" })), jsxRuntime.jsx(styled.ButtonStyled, tslib.__assign({ onClick: function () {
                                return editor === null || editor === void 0 ? void 0 : editor.chain().focus().toggleHeading({ level: 1 }).run();
                            }, isActive: editor === null || editor === void 0 ? void 0 : editor.isActive('heading', { level: 1 }) }, { children: "H1" })), jsxRuntime.jsx(styled.ButtonStyled, tslib.__assign({ onClick: function () {
                                return editor === null || editor === void 0 ? void 0 : editor.chain().focus().toggleHeading({ level: 2 }).run();
                            }, isActive: editor === null || editor === void 0 ? void 0 : editor.isActive('heading', { level: 2 }) }, { children: "H2" })), jsxRuntime.jsx(styled.ButtonStyled, tslib.__assign({ onClick: function () {
                                return editor === null || editor === void 0 ? void 0 : editor.chain().focus().toggleHeading({ level: 3 }).run();
                            }, isActive: editor === null || editor === void 0 ? void 0 : editor.isActive('heading', { level: 3 }) }, { children: "H3" })), jsxRuntime.jsx(styled.ButtonStyled, tslib.__assign({ onClick: function () {
                                return editor === null || editor === void 0 ? void 0 : editor.chain().focus().toggleHeading({ level: 4 }).run();
                            }, isActive: editor === null || editor === void 0 ? void 0 : editor.isActive('heading', { level: 4 }) }, { children: "H4" })), jsxRuntime.jsx(styled.ButtonStyled, tslib.__assign({ onClick: function () {
                                return editor === null || editor === void 0 ? void 0 : editor.chain().focus().toggleHeading({ level: 5 }).run();
                            }, isActive: editor === null || editor === void 0 ? void 0 : editor.isActive('heading', { level: 5 }) }, { children: "H5" })), jsxRuntime.jsx(styled.ButtonStyled, tslib.__assign({ onClick: function () {
                                return editor === null || editor === void 0 ? void 0 : editor.chain().focus().toggleHeading({ level: 6 }).run();
                            }, isActive: editor === null || editor === void 0 ? void 0 : editor.isActive('heading', { level: 6 }) }, { children: "H6" }))] })) : null, jsxRuntime.jsx(styled.SeparateVerticalStyled, {}), jsxRuntime.jsxs(styled.ButtonStyled, tslib.__assign({ customCSS: react.css(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n            position: relative;\n          "], ["\n            position: relative;\n          "]))), onClick: function () {
                        setIsOpen(true);
                    } }, { children: [jsxRuntime.jsx(index$1, { height: "16px", width: "16px", color: "#373737", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/picture-image-svgrepo-com.svg" }), isOpen && (jsxRuntime.jsx(index, tslib.__assign({ refObject: ref2, customCSS: react.css(templateObject_5 || (templateObject_5 = tslib.__makeTemplateObject(["\n                position: absolute;\n                background-color: #ffffff;\n                padding: 30px 30px;\n                border-radius: 5px;\n                height: max-content;\n                width: 400px;\n                max-width: 400px;\n                top: 170%;\n                left: 50%;\n                transform: translateX(-50%);\n                flex-direction: column;\n                justify-content: space-between;\n                align-items: center;\n                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.227);\n                :before {\n                  content: '';\n                  z-index: 100;\n                  position: absolute;\n                  top: -10px;\n                  left: 50%;\n                  transform: translateX(-50%);\n                  width: 0;\n                  height: 0;\n                  border-left: 10px solid transparent;\n                  border-right: 10px solid transparent;\n                  border-bottom: 10px solid #ffffff;\n                }\n              "], ["\n                position: absolute;\n                background-color: #ffffff;\n                padding: 30px 30px;\n                border-radius: 5px;\n                height: max-content;\n                width: 400px;\n                max-width: 400px;\n                top: 170%;\n                left: 50%;\n                transform: translateX(-50%);\n                flex-direction: column;\n                justify-content: space-between;\n                align-items: center;\n                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.227);\n                :before {\n                  content: '';\n                  z-index: 100;\n                  position: absolute;\n                  top: -10px;\n                  left: 50%;\n                  transform: translateX(-50%);\n                  width: 0;\n                  height: 0;\n                  border-left: 10px solid transparent;\n                  border-right: 10px solid transparent;\n                  border-bottom: 10px solid #ffffff;\n                }\n              "]))) }, { children: loadingFile ? (jsxRuntime.jsx(index$3, { isLoading: true, colorLoading: "#f1576c", height: "200px", type: "small" })) : (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(index$2, { height: "150px", labelWidth: "100%", width: "100%", type: "dragdrop", onChangeDrop: function (e) {
                                            setImage(e);
                                        } }), jsxRuntime.jsxs(index, tslib.__assign({ margin: "10px", customCSS: react.css(templateObject_7 || (templateObject_7 = tslib.__makeTemplateObject(["\n                      ", "\n                    "], ["\n                      ", "\n                    "])), typeof image === 'object' &&
                                            image.name && react.css(templateObject_6 || (templateObject_6 = tslib.__makeTemplateObject(["\n                        span {\n                          color: #a0a0a0;\n                        }\n                        input {\n                          background-color: #fcfcfc;\n                        }\n                      "], ["\n                        span {\n                          color: #a0a0a0;\n                        }\n                        input {\n                          background-color: #fcfcfc;\n                        }\n                      "])))) }, { children: [jsxRuntime.jsx(index$4, tslib.__assign({ fontSize: "12px", fontWeight: 600, margin: "0px 15px 0px 0px" }, { children: "Url:" })), jsxRuntime.jsx(index$2, { customCSS: react.css(templateObject_8 || (templateObject_8 = tslib.__makeTemplateObject(["\n                        span {\n                          display: none;\n                        }\n                      "], ["\n                        span {\n                          display: none;\n                        }\n                      "]))), labelWidth: "100%", width: "100%", type: "text", onChange: function (e) {
                                                    setImage(e.target.value);
                                                } })] })), jsxRuntime.jsx(index, tslib.__assign({ flexDirection: "row", justifyContent: "flex-end" }, { children: jsxRuntime.jsx(index$5, tslib.__assign({ customCSS: react.css(templateObject_9 || (templateObject_9 = tslib.__makeTemplateObject(["\n                        padding: 5px;\n                        background-color: #f1576c;\n                      "], ["\n                        padding: 5px;\n                        background-color: #f1576c;\n                      "]))), onClick: function () { return tslib.__awaiter(void 0, void 0, void 0, function () {
                                                return tslib.__generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            if (!(typeof image === 'string')) return [3 /*break*/, 1];
                                                            editor === null || editor === void 0 ? void 0 : editor.chain().focus().setImage({ src: image }).run();
                                                            setImage({});
                                                            setLoadingFile(true);
                                                            setTimeout(function () {
                                                                setLoadingFile(false);
                                                                setIsOpen(false);
                                                            }, 500);
                                                            return [3 /*break*/, 3];
                                                        case 1:
                                                            if (!image.name) return [3 /*break*/, 3];
                                                            setLoadingFile(true);
                                                            return [4 /*yield*/, uploadImage(image, {
                                                                    name: 'textbox',
                                                                    orgcode: 'IXU-0001',
                                                                })
                                                                    .then(function (res) {
                                                                    setLoadingFile(false);
                                                                    setIsOpen(false);
                                                                    editor === null || editor === void 0 ? void 0 : editor.chain().focus().setImage({ src: res }).run();
                                                                    setImage({});
                                                                })
                                                                    .catch(function (err) {
                                                                    setLoadingFile(false);
                                                                    console.warn(err);
                                                                })];
                                                        case 2:
                                                            _a.sent();
                                                            _a.label = 3;
                                                        case 3:
                                                            setIsOpen(false);
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); } }, { children: jsxRuntime.jsx(index$1, { height: "16px", width: "16px", color: "white", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/commons/check-4787.svg" }) })) }))] })) })))] })), jsxRuntime.jsxs(styled.ButtonStyled, tslib.__assign({ customCSS: react.css(templateObject_10 || (templateObject_10 = tslib.__makeTemplateObject(["\n            position: relative;\n          "], ["\n            position: relative;\n          "]))), onClick: function () {
                        setIsOpenUrl(true);
                    } }, { children: [jsxRuntime.jsx(index$1, { height: "15px", width: "15px", color: "#373737", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/link-solid.svg" }), isOpenUrl && (jsxRuntime.jsxs(index, tslib.__assign({ refObject: ref, customCSS: react.css(templateObject_11 || (templateObject_11 = tslib.__makeTemplateObject(["\n                position: absolute;\n                background-color: #ffffff;\n                padding: 10px 30px;\n                border-radius: 5px;\n                height: max-content;\n                width: 400px;\n                max-width: 400px;\n                top: 170%;\n                left: 50%;\n                transform: translateX(-50%);\n                flex-direction: row;\n                justify-content: space-between;\n                align-items: center;\n                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.227);\n                :after {\n                  content: '';\n                  position: absolute;\n                  top: -10px;\n                  left: 50%;\n                  transform: translateX(-50%);\n                  width: 0;\n                  height: 0;\n                  border-left: 10px solid transparent;\n                  border-right: 10px solid transparent;\n                  border-bottom: 10px solid #ffffff;\n                }\n              "], ["\n                position: absolute;\n                background-color: #ffffff;\n                padding: 10px 30px;\n                border-radius: 5px;\n                height: max-content;\n                width: 400px;\n                max-width: 400px;\n                top: 170%;\n                left: 50%;\n                transform: translateX(-50%);\n                flex-direction: row;\n                justify-content: space-between;\n                align-items: center;\n                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.227);\n                :after {\n                  content: '';\n                  position: absolute;\n                  top: -10px;\n                  left: 50%;\n                  transform: translateX(-50%);\n                  width: 0;\n                  height: 0;\n                  border-left: 10px solid transparent;\n                  border-right: 10px solid transparent;\n                  border-bottom: 10px solid #ffffff;\n                }\n              "]))) }, { children: [jsxRuntime.jsx(index$4, tslib.__assign({ fontSize: "12px", fontWeight: 600, margin: "0px 15px 0px 0px" }, { children: "Url:" })), jsxRuntime.jsx(index$2, { customCSS: react.css(templateObject_12 || (templateObject_12 = tslib.__makeTemplateObject(["\n                  span {\n                    display: none;\n                  }\n                "], ["\n                  span {\n                    display: none;\n                  }\n                "]))), labelWidth: "100%", width: "90%", type: "text", value: url, onChange: function (e) {
                                        setUrl(e.target.value);
                                    } }), jsxRuntime.jsxs(index, tslib.__assign({ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "30%" }, { children: [jsxRuntime.jsx(index$5, tslib.__assign({ onClick: function () {
                                                editor === null || editor === void 0 ? void 0 : editor.chain().focus().extendMarkRange('link').unsetLink().run();
                                                setUrl('');
                                                setTimeout(function () {
                                                    setIsOpenUrl(false);
                                                }, 500);
                                            }, customCSS: react.css(templateObject_13 || (templateObject_13 = tslib.__makeTemplateObject(["\n                    padding: 5px;\n                    border: 1px solid #f1576c;\n                    color: #f1576c;\n                    background-color: transparent;\n                  "], ["\n                    padding: 5px;\n                    border: 1px solid #f1576c;\n                    color: #f1576c;\n                    background-color: transparent;\n                  "]))) }, { children: jsxRuntime.jsx(index$1, { height: "15px", width: "15px", color: "#f1576c", customCSS: react.css(templateObject_14 || (templateObject_14 = tslib.__makeTemplateObject(["\n                      svg {\n                        fill: none;\n                      }\n                    "], ["\n                      svg {\n                        fill: none;\n                      }\n                    "]))), icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/commons/trash.svg" }) })), jsxRuntime.jsx(index$5, tslib.__assign({ customCSS: react.css(templateObject_15 || (templateObject_15 = tslib.__makeTemplateObject(["\n                    padding: 5px;\n                    background-color: #f1576c;\n                  "], ["\n                    padding: 5px;\n                    background-color: #f1576c;\n                  "]))), onClick: function () {
                                                setTimeout(function () {
                                                    setIsOpenUrl(false);
                                                }, 500);
                                                if (url) {
                                                    editor === null || editor === void 0 ? void 0 : editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
                                                }
                                            } }, { children: jsxRuntime.jsx(index$1, { height: "16px", width: "16px", color: "white", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/commons/check-4787.svg" }) }))] }))] })))] })), jsxRuntime.jsxs(styled.ButtonStyled, tslib.__assign({ customCSS: react.css(templateObject_16 || (templateObject_16 = tslib.__makeTemplateObject(["\n            position: relative;\n          "], ["\n            position: relative;\n          "]))), onClick: function () {
                        setIsOpenVideo(true);
                    } }, { children: [jsxRuntime.jsx(index$1, { height: "15px", width: "15px", color: "#373737", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/commons/video-svgrepo-com.svg" }), isOpenVideo && (jsxRuntime.jsx(index, tslib.__assign({ refObject: ref3, customCSS: react.css(templateObject_17 || (templateObject_17 = tslib.__makeTemplateObject(["\n                position: absolute;\n                background-color: #ffffff;\n                padding: 30px 30px;\n                border-radius: 5px;\n                height: max-content;\n                width: 400px;\n                max-width: 400px;\n                top: 170%;\n                left: 50%;\n                transform: translateX(-50%);\n                flex-direction: column;\n                justify-content: space-between;\n                align-items: center;\n                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.227);\n                :after {\n                  content: '';\n                  position: absolute;\n                  top: -10px;\n                  left: 50%;\n                  transform: translateX(-50%);\n                  width: 0;\n                  height: 0;\n                  border-left: 10px solid transparent;\n                  border-right: 10px solid transparent;\n                  border-bottom: 10px solid #ffffff;\n                }\n              "], ["\n                position: absolute;\n                background-color: #ffffff;\n                padding: 30px 30px;\n                border-radius: 5px;\n                height: max-content;\n                width: 400px;\n                max-width: 400px;\n                top: 170%;\n                left: 50%;\n                transform: translateX(-50%);\n                flex-direction: column;\n                justify-content: space-between;\n                align-items: center;\n                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.227);\n                :after {\n                  content: '';\n                  position: absolute;\n                  top: -10px;\n                  left: 50%;\n                  transform: translateX(-50%);\n                  width: 0;\n                  height: 0;\n                  border-left: 10px solid transparent;\n                  border-right: 10px solid transparent;\n                  border-bottom: 10px solid #ffffff;\n                }\n              "]))) }, { children: loadingFile ? (jsxRuntime.jsx(index$3, { isLoading: true, colorLoading: "#f1576c", height: "200px", type: "small" })) : (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(index$2, { height: "200px", labelWidth: "100%", width: "100%", type: "dragdrop", video: true, onChangeDrop: function (e) {
                                            setVideo(e);
                                        } }), jsxRuntime.jsxs(index, tslib.__assign({ margin: "10px", customCSS: react.css(templateObject_19 || (templateObject_19 = tslib.__makeTemplateObject(["\n                      ", "\n                    "], ["\n                      ", "\n                    "])), typeof image === 'object' &&
                                            image.name && react.css(templateObject_18 || (templateObject_18 = tslib.__makeTemplateObject(["\n                        span {\n                          color: #a0a0a0;\n                        }\n                        input {\n                          background-color: #fcfcfc;\n                        }\n                      "], ["\n                        span {\n                          color: #a0a0a0;\n                        }\n                        input {\n                          background-color: #fcfcfc;\n                        }\n                      "])))) }, { children: [jsxRuntime.jsx(index$4, tslib.__assign({ fontSize: "12px", fontWeight: 600, margin: "0px 15px 0px 0px" }, { children: "Url:" })), jsxRuntime.jsx(index$2, { customCSS: react.css(templateObject_20 || (templateObject_20 = tslib.__makeTemplateObject(["\n                        span {\n                          display: none;\n                        }\n                      "], ["\n                        span {\n                          display: none;\n                        }\n                      "]))), labelWidth: "100%", width: "100%", type: "text", onChange: function (e) {
                                                    setVideo(e.target.value);
                                                } })] })), jsxRuntime.jsx(index, tslib.__assign({ flexDirection: "row", justifyContent: "flex-end" }, { children: jsxRuntime.jsx(index$5, tslib.__assign({ customCSS: react.css(templateObject_21 || (templateObject_21 = tslib.__makeTemplateObject(["\n                        padding: 5px;\n                        background-color: #f1576c;\n                      "], ["\n                        padding: 5px;\n                        background-color: #f1576c;\n                      "]))), onClick: function () { return tslib.__awaiter(void 0, void 0, void 0, function () {
                                                var urlVideo;
                                                return tslib.__generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            if (!(typeof video === 'string')) return [3 /*break*/, 1];
                                                            urlVideo = "".concat(video)
                                                                .replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/')
                                                                .replace('https://youtu.be/', 'https://www.youtube.com/embed/')
                                                                .replace('https://vimeo.com/', 'https://player.vimeo.com/video/');
                                                            setLoadingFile(true);
                                                            setTimeout(function () {
                                                                setLoadingFile(false);
                                                                setIsOpenVideo(false);
                                                            }, 500);
                                                            editor === null || editor === void 0 ? void 0 : editor.chain().focus().setIframe({ src: urlVideo }).run();
                                                            setVideo({});
                                                            return [3 /*break*/, 4];
                                                        case 1:
                                                            if (!video.name) return [3 /*break*/, 3];
                                                            setLoadingFile(true);
                                                            return [4 /*yield*/, uploadImage(video, {
                                                                    name: 'textbox',
                                                                    orgcode: 'IXU-0001',
                                                                })
                                                                    .then(function (res) {
                                                                    setLoadingFile(false);
                                                                    setIsOpenVideo(false);
                                                                    editor === null || editor === void 0 ? void 0 : editor.chain().focus().setVideo({ src: res }).run();
                                                                    setVideo({});
                                                                })
                                                                    .catch(function (err) {
                                                                    setLoadingFile(false);
                                                                    console.warn(err);
                                                                })];
                                                        case 2:
                                                            _a.sent();
                                                            return [3 /*break*/, 4];
                                                        case 3:
                                                            setIsOpenVideo(false);
                                                            _a.label = 4;
                                                        case 4: return [2 /*return*/];
                                                    }
                                                });
                                            }); } }, { children: jsxRuntime.jsx(index$1, { height: "16px", width: "16px", color: "white", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/commons/check-4787.svg" }) })) }))] })) })))] })), jsxRuntime.jsx(styled.SeparateVerticalStyled, {}), jsxRuntime.jsx(styled.ButtonStyled, tslib.__assign({ onClick: function () {
                        return editor === null || editor === void 0 ? void 0 : editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
                    } }, { children: jsxRuntime.jsx(index$1, { height: "16px", width: "16px", color: "#373737", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/table-solid.svg" }) })), jsxRuntime.jsx(styled.ButtonStyled, tslib.__assign({ onClick: function () { return editor === null || editor === void 0 ? void 0 : editor.chain().focus().deleteTable().run(); }, disabled: !(editor === null || editor === void 0 ? void 0 : editor.can().deleteTable()) }, { children: jsxRuntime.jsx(index$1, { height: "16px", width: "16px", color: "#a0a0a0", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/table-solid.svg" }) })), jsxRuntime.jsx(styled.ButtonStyled, tslib.__assign({ onClick: function () { return editor === null || editor === void 0 ? void 0 : editor.chain().focus().addColumnBefore().run(); }, disabled: !(editor === null || editor === void 0 ? void 0 : editor.can().addColumnBefore()) }, { children: jsxRuntime.jsx(index$1, { height: "16px", width: "16px", color: "#373737", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/border-left-new.svg" }) })), jsxRuntime.jsx(styled.ButtonStyled, tslib.__assign({ onClick: function () { return editor === null || editor === void 0 ? void 0 : editor.chain().focus().deleteColumn().run(); }, disabled: !(editor === null || editor === void 0 ? void 0 : editor.can().deleteColumn()) }, { children: jsxRuntime.jsx(index$1, { height: "16px", width: "16px", color: "#a0a0a0", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/border-center-v.svg" }) })), jsxRuntime.jsx(styled.ButtonStyled, tslib.__assign({ onClick: function () { return editor === null || editor === void 0 ? void 0 : editor.chain().focus().addColumnAfter().run(); }, disabled: !(editor === null || editor === void 0 ? void 0 : editor.can().addColumnAfter()) }, { children: jsxRuntime.jsx(index$1, { height: "16px", width: "16px", color: "#373737", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/border-right.svg" }) })), jsxRuntime.jsx(styled.ButtonStyled, tslib.__assign({ onClick: function () { return editor === null || editor === void 0 ? void 0 : editor.chain().focus().addRowBefore().run(); }, disabled: !(editor === null || editor === void 0 ? void 0 : editor.can().addRowBefore()) }, { children: jsxRuntime.jsx(index$1, { height: "16px", width: "16px", color: "#373737", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/border-top.svg" }) })), jsxRuntime.jsx(styled.ButtonStyled, tslib.__assign({ onClick: function () { return editor === null || editor === void 0 ? void 0 : editor.chain().focus().deleteRow().run(); }, disabled: !(editor === null || editor === void 0 ? void 0 : editor.can().deleteRow()) }, { children: jsxRuntime.jsx(index$1, { height: "16px", width: "16px", color: "#a0a0a0", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/border-center-h.svg" }) })), jsxRuntime.jsx(styled.ButtonStyled, tslib.__assign({ onClick: function () { return editor === null || editor === void 0 ? void 0 : editor.chain().focus().addRowAfter().run(); }, disabled: !(editor === null || editor === void 0 ? void 0 : editor.can().addRowAfter()) }, { children: jsxRuntime.jsx(index$1, { height: "16px", width: "16px", color: "#373737", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/border-bottom.svg" }) })), jsxRuntime.jsx(styled.ButtonStyled, tslib.__assign({ onClick: function () { return editor === null || editor === void 0 ? void 0 : editor.chain().focus().toggleBulletList().run(); }, className: (editor === null || editor === void 0 ? void 0 : editor.isActive('bulletList')) ? 'is-active' : '' }, { children: jsxRuntime.jsx(index$1, { height: "16px", width: "16px", color: "#373737", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/list-ul-solid.svg" }) })), jsxRuntime.jsx(styled.ButtonStyled, tslib.__assign({ onClick: function () { return editor === null || editor === void 0 ? void 0 : editor.chain().focus().toggleOrderedList().run(); }, className: (editor === null || editor === void 0 ? void 0 : editor.isActive('orderedList')) ? 'is-active' : '' }, { children: jsxRuntime.jsx(index$1, { height: "16px", width: "16px", color: "#373737", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/list-ol-solid.svg" }) })), jsxRuntime.jsx(styled.ButtonStyled, tslib.__assign({ onClick: function () { return editor === null || editor === void 0 ? void 0 : editor.chain().focus().liftListItem('listItem').run(); }, disabled: !(editor === null || editor === void 0 ? void 0 : editor.can().liftListItem('listItem')) }, { children: jsxRuntime.jsx(index$1, { height: "16px", width: "16px", color: "#373737", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/outdent-solid.svg" }) })), jsxRuntime.jsx(styled.ButtonStyled, tslib.__assign({ onClick: function () { return editor === null || editor === void 0 ? void 0 : editor.chain().focus().sinkListItem('listItem').run(); }, disabled: !(editor === null || editor === void 0 ? void 0 : editor.can().sinkListItem('listItem')) }, { children: jsxRuntime.jsx(index$1, { height: "16px", width: "16px", color: "#373737", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/indent-solid.svg" }) }))] })) }));
};
var AtomTextEditor = function (props) {
    var _a, _b, _c, _d, _e, _f;
    var content = props.content, id = props.id, maxWidth = props.maxWidth, onBlur = props.onBlur;
    // const [code, setCode] = useState(true);
    var editor = tiptapReact_esm.useEditor({
        extensions: [
            tiptapExtensionTextAlign_esm.TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            tiptapStarterKit_esm,
            tiptapExtensionTextStyle_esm.TextStyle,
            tiptapExtensionFontFamily_esm.FontFamily,
            tiptapExtensionColor_esm.Color,
            tiptapExtensionUnderline_esm.Underline,
            tiptapExtensionImage_esm.Image,
            iframe,
            video,
            tiptapExtensionTable_esm.Table.configure({
                resizable: true,
            }),
            tiptapExtensionTableRow_esm.TableRow,
            tiptapExtensionTableHeader_esm.TableHeader,
            tiptapExtensionTableCell_esm.TableCell,
            tiptapExtensionLink_esm.Link.configure({
                openOnClick: false,
            }),
        ],
        content: content !== null && content !== void 0 ? content : '',
    }, [content]);
    var HTML = editor === null || editor === void 0 ? void 0 : editor.getHTML();
    React.useEffect(function () {
        if (props.onChangeEditor && editor) {
            props.onChangeEditor(editor);
        }
    }, [HTML]);
    // useEffect(() => {
    //   if (loadContent !== content && content) {
    //     editor?.commands?.setContent(content);
    //     setLoadContent(content);
    //   }
    // }, [content]);
    return (jsxRuntime.jsxs(index, tslib.__assign({ margin: "0px 0px", width: "100%", maxWidth: maxWidth !== null && maxWidth !== void 0 ? maxWidth : '615px', customCSS: (_a = props === null || props === void 0 ? void 0 : props.customCSSM) !== null && _a !== void 0 ? _a : react.css(templateObject_22 || (templateObject_22 = tslib.__makeTemplateObject([""], [""]))) }, { children: [jsxRuntime.jsx(styled.GlobalStyles, {}), jsxRuntime.jsx(MenuBar, { editor: editor, options: props === null || props === void 0 ? void 0 : props.options, customCSSH: (_b = props === null || props === void 0 ? void 0 : props.customCSSH) !== null && _b !== void 0 ? _b : react.css(templateObject_23 || (templateObject_23 = tslib.__makeTemplateObject([""], [""]))) }), jsxRuntime.jsx(index, tslib.__assign({ customCSS: react.css(templateObject_25 || (templateObject_25 = tslib.__makeTemplateObject(["\n          border: 1px solid #e6e6e6;\n          border-radius: 0px 0px 8px 8px;\n          z-index: -1;\n          min-height: ", ";\n          align-items: center;\n          justify-content: flex-start;\n          > div {\n            min-height: ", ";\n            padding: 0px;\n            width: 100%;\n            height: 100%;\n            overflow-y: auto;\n          }\n\n          .ProseMirror {\n            min-height: ", ";\n            padding: 20px 20px;\n            outline: none;\n            .video-wrapper {\n              margin: 0px 0px 20px 0px;\n              video {\n                width: 100%;\n              }\n            }\n            .iframe-wrapper {\n              margin: 0px 0px 20px 0px;\n              position: relative;\n              padding-bottom: math.div(100, 16) * 9%;\n              height: 0;\n              overflow: hidden;\n              width: 100%;\n              height: 300px;\n\n              &.ProseMirror-selectednode {\n                outline: 3px solid #68cef8;\n              }\n\n              iframe {\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n              }\n            }\n          }\n          ", "\n        "], ["\n          border: 1px solid #e6e6e6;\n          border-radius: 0px 0px 8px 8px;\n          z-index: -1;\n          min-height: ", ";\n          align-items: center;\n          justify-content: flex-start;\n          > div {\n            min-height: ", ";\n            padding: 0px;\n            width: 100%;\n            height: 100%;\n            overflow-y: auto;\n          }\n\n          .ProseMirror {\n            min-height: ", ";\n            padding: 20px 20px;\n            outline: none;\n            .video-wrapper {\n              margin: 0px 0px 20px 0px;\n              video {\n                width: 100%;\n              }\n            }\n            .iframe-wrapper {\n              margin: 0px 0px 20px 0px;\n              position: relative;\n              padding-bottom: math.div(100, 16) * 9%;\n              height: 0;\n              overflow: hidden;\n              width: 100%;\n              height: 300px;\n\n              &.ProseMirror-selectednode {\n                outline: 3px solid #68cef8;\n              }\n\n              iframe {\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n              }\n            }\n          }\n          ", "\n        "])), (_c = props === null || props === void 0 ? void 0 : props.minHeight) !== null && _c !== void 0 ? _c : '500px', (_d = props === null || props === void 0 ? void 0 : props.minHeight) !== null && _d !== void 0 ? _d : '500px', (_e = props === null || props === void 0 ? void 0 : props.minHeight) !== null && _e !== void 0 ? _e : '500px', (_f = props === null || props === void 0 ? void 0 : props.customCSS) !== null && _f !== void 0 ? _f : react.css(templateObject_24 || (templateObject_24 = tslib.__makeTemplateObject([""], [""])))) }, { children: jsxRuntime.jsx(tiptapReact_esm.EditorContent, { id: id, onBlur: onBlur, editor: editor }) })), jsxRuntime.jsx(error, tslib.__assign({}, props))] })));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25;

exports["default"] = AtomTextEditor;
exports.tableHTML = tableHTML;
//# sourceMappingURL=index.js.map
