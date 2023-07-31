'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var NextImage = require('next/image');
var style = require('./style.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var NextImage__default = /*#__PURE__*/_interopDefaultLegacy(NextImage);

var Image = function (props) {
    var src = props.src, alt = props.alt, isNextImage = props.isNextImage;
    return (jsxRuntime.jsx(style.AtomImageStyled, tslib.__assign({}, tslib.__assign(tslib.__assign({}, props), { src: undefined }), { children: isNextImage ? (jsxRuntime.jsx(style.AtomImageWrapperStyled, { children: jsxRuntime.jsx(NextImage__default["default"], { src: src, alt: "".concat(alt, "image"), layout: "fill", placeholder: "blur", blurDataURL: src }) })) : (jsxRuntime.jsx(style.AtomImageImgStyled, { src: src, alt: alt })) })));
};

module.exports = Image;
//# sourceMappingURL=index.js.map
