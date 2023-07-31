'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
var core = require('../../node_modules/swiper/core/core.js');
require('../../node_modules/swiper/shared/dom.js');
var navigation = require('../../node_modules/swiper/modules/navigation/navigation.js');
var pagination = require('../../node_modules/swiper/modules/pagination/pagination.js');
var scrollbar = require('../../node_modules/swiper/modules/scrollbar/scrollbar.js');
var a11y = require('../../node_modules/swiper/modules/a11y/a11y.js');
var autoplay = require('../../node_modules/swiper/modules/autoplay/autoplay.js');
var effectFade = require('../../node_modules/swiper/modules/effect-fade/effect-fade.js');
var swiper = require('../../node_modules/swiper/react/swiper.js');
var swiperSlide = require('../../node_modules/swiper/react/swiper-slide.js');
var index = require('../AtomWrapper/index.js');
var styles = require('./styles.js');

core.use([pagination, scrollbar, a11y, autoplay, effectFade, navigation]);
var AtomCarrousell = function (props) {
    var height = props.height, width = props.width, customCSS = props.customCSS, swiperProps = props.swiperProps, children = props.children, direction = props.direction, slidesPerView = props.slidesPerView, acentColor = props.acentColor, slides = props.slides;
    return (jsxRuntime.jsx(index, tslib.__assign({ customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n        ", "\n        .swiper {\n          width: ", ";\n          height: ", ";\n        }\n        .swiper-slide {\n          text-align: center;\n          font-size: 18px;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n        }\n\n        .swiper-pagination-bullet-active {\n          background-color: ", ";\n        }\n        .swiper-slide img {\n          width: 100%;\n          height: 100%;\n          object-fit: cover;\n        }\n        .swiper-button-prev {\n          ::after {\n            font-size: 42px;\n            color: ", ";\n          }\n          top: 50%;\n          left: 3%;\n        }\n        .swiper-button-next {\n          ::after {\n            font-size: 42px;\n            color: ", ";\n          }\n          top: 50%;\n          right: 3%;\n        }\n        ", "\n      "], ["\n        ", "\n        .swiper {\n          width: ", ";\n          height: ", ";\n        }\n        .swiper-slide {\n          text-align: center;\n          font-size: 18px;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n        }\n\n        .swiper-pagination-bullet-active {\n          background-color: ", ";\n        }\n        .swiper-slide img {\n          width: 100%;\n          height: 100%;\n          object-fit: cover;\n        }\n        .swiper-button-prev {\n          ::after {\n            font-size: 42px;\n            color: ", ";\n          }\n          top: 50%;\n          left: 3%;\n        }\n        .swiper-button-next {\n          ::after {\n            font-size: 42px;\n            color: ", ";\n          }\n          top: 50%;\n          right: 3%;\n        }\n        ", "\n      "])), styles, width || "100%", height || "100vh", acentColor !== null && acentColor !== void 0 ? acentColor : "white", acentColor !== null && acentColor !== void 0 ? acentColor : "#ebebebeb", acentColor !== null && acentColor !== void 0 ? acentColor : "#ebebebeb", customCSS) }, { children: jsxRuntime.jsxs(swiper.Swiper, tslib.__assign({ direction: direction || 'horizontal', autoplay: {
                delay: 6000,
            }, navigation: direction !== 'vertical', loop: true, pagination: {
                clickable: true,
            }, slidesPerView: slidesPerView || 1 }, swiperProps, { children: [slides === null || slides === void 0 ? void 0 : slides.map(function (item) { return (jsxRuntime.jsx(swiperSlide.SwiperSlide, { children: item }, item === null || item === void 0 ? void 0 : item.key)); }), children === null || children === void 0 ? void 0 : children.map(function (item) { return (jsxRuntime.jsx(swiperSlide.SwiperSlide, { children: item }, item === null || item === void 0 ? void 0 : item.key)); })] })) })));
};
var templateObject_1;

module.exports = AtomCarrousell;
//# sourceMappingURL=index.js.map
