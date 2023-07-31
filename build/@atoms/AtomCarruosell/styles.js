'use strict';

var tslib = require('tslib');
var react = require('@emotion/react');

var SwiperStyles = react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n  @font-face {\n    font-family: 'swiper-icons';\n    src: url('data:application/font-woff;charset=utf-8;base64, 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');\n    font-weight: 400;\n    font-style: normal;\n  }\n  :root {\n    --swiper-theme-color: white;\n  }\n  .swiper {\n    margin-left: auto;\n    margin-right: auto;\n    position: relative;\n    overflow: hidden;\n    list-style: none;\n    padding: 0;\n    /* Fix of Webkit flickering */\n    z-index: 1;\n  }\n  .swiper-vertical > .swiper-wrapper {\n    flex-direction: column;\n  }\n  .swiper-wrapper {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    display: flex;\n    transition-property: transform;\n    box-sizing: content-box;\n  }\n  .swiper-android .swiper-slide,\n  .swiper-wrapper {\n    transform: translate3d(0px, 0, 0);\n  }\n  .swiper-pointer-events {\n    touch-action: pan-y;\n  }\n  .swiper-pointer-events.swiper-vertical {\n    touch-action: pan-x;\n  }\n  .swiper-slide {\n    flex-shrink: 0;\n    width: 100%;\n    height: 100%;\n    position: relative;\n    transition-property: transform;\n  }\n  .swiper-slide-invisible-blank {\n    visibility: hidden;\n  }\n  /* Auto Height */\n  .swiper-autoheight,\n  .swiper-autoheight .swiper-slide {\n    height: auto;\n  }\n  .swiper-autoheight .swiper-wrapper {\n    align-items: flex-start;\n    transition-property: transform, height;\n  }\n  /* 3D Effects */\n  .swiper-3d,\n  .swiper-3d.swiper-css-mode .swiper-wrapper {\n    perspective: 1200px;\n  }\n  .swiper-3d .swiper-wrapper,\n  .swiper-3d .swiper-slide,\n  .swiper-3d .swiper-slide-shadow,\n  .swiper-3d .swiper-slide-shadow-left,\n  .swiper-3d .swiper-slide-shadow-right,\n  .swiper-3d .swiper-slide-shadow-top,\n  .swiper-3d .swiper-slide-shadow-bottom,\n  .swiper-3d .swiper-cube-shadow {\n    transform-style: preserve-3d;\n  }\n  .swiper-3d .swiper-slide-shadow,\n  .swiper-3d .swiper-slide-shadow-left,\n  .swiper-3d .swiper-slide-shadow-right,\n  .swiper-3d .swiper-slide-shadow-top,\n  .swiper-3d .swiper-slide-shadow-bottom {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n    z-index: 10;\n  }\n  .swiper-3d .swiper-slide-shadow {\n    background: rgba(0, 0, 0, 0.15);\n  }\n  .swiper-3d .swiper-slide-shadow-left {\n    background-image: linear-gradient(\n      to left,\n      rgba(0, 0, 0, 0.5),\n      rgba(0, 0, 0, 0)\n    );\n  }\n  .swiper-3d .swiper-slide-shadow-right {\n    background-image: linear-gradient(\n      to right,\n      rgba(0, 0, 0, 0.5),\n      rgba(0, 0, 0, 0)\n    );\n  }\n  .swiper-3d .swiper-slide-shadow-top {\n    background-image: linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.5),\n      rgba(0, 0, 0, 0)\n    );\n  }\n  .swiper-3d .swiper-slide-shadow-bottom {\n    background-image: linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.5),\n      rgba(0, 0, 0, 0)\n    );\n  }\n  /* CSS Mode */\n  .swiper-css-mode > .swiper-wrapper {\n    overflow: auto;\n    scrollbar-width: none;\n    /* For Firefox */\n    -ms-overflow-style: none;\n    /* For Internet Explorer and Edge */\n  }\n  .swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {\n    display: none;\n  }\n  .swiper-css-mode > .swiper-wrapper > .swiper-slide {\n    scroll-snap-align: start start;\n  }\n  .swiper-horizontal.swiper-css-mode > .swiper-wrapper {\n    scroll-snap-type: x mandatory;\n  }\n  .swiper-vertical.swiper-css-mode > .swiper-wrapper {\n    scroll-snap-type: y mandatory;\n  }\n  .swiper-centered > .swiper-wrapper::before {\n    content: '';\n    flex-shrink: 0;\n    order: 9999;\n  }\n  .swiper-centered.swiper-horizontal\n    > .swiper-wrapper\n    > .swiper-slide:first-of-type {\n    margin-inline-start: var(--swiper-centered-offset-before);\n  }\n  .swiper-centered.swiper-horizontal > .swiper-wrapper::before {\n    height: 100%;\n    min-height: 1px;\n    width: var(--swiper-centered-offset-after);\n  }\n  .swiper-centered.swiper-vertical\n    > .swiper-wrapper\n    > .swiper-slide:first-of-type {\n    margin-block-start: var(--swiper-centered-offset-before);\n  }\n  .swiper-centered.swiper-vertical > .swiper-wrapper::before {\n    width: 100%;\n    min-width: 1px;\n    height: var(--swiper-centered-offset-after);\n  }\n  .swiper-centered > .swiper-wrapper > .swiper-slide {\n    scroll-snap-align: center center;\n  }\n  .swiper-virtual.swiper-css-mode .swiper-wrapper::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    pointer-events: none;\n  }\n  .swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after {\n    height: 1px;\n    width: var(--swiper-virtual-size);\n  }\n  .swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after {\n    width: 1px;\n    height: var(--swiper-virtual-size);\n  }\n  :root {\n    --swiper-navigation-size: 44px;\n    /*\n  --swiper-navigation-color: var(--swiper-theme-color);\n  */\n  }\n  .swiper-button-prev,\n  .swiper-button-next {\n    position: absolute;\n    top: 50%;\n    width: calc(var(--swiper-navigation-size) / 44 * 27);\n    height: var(--swiper-navigation-size);\n    margin-top: calc(0px - (var(--swiper-navigation-size) / 2));\n    z-index: 10;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: var(--swiper-navigation-color, var(--swiper-theme-color));\n  }\n  .swiper-button-prev.swiper-button-disabled,\n  .swiper-button-next.swiper-button-disabled {\n    opacity: 0.35;\n    cursor: auto;\n    pointer-events: none;\n  }\n  .swiper-button-prev:after,\n  .swiper-button-next:after {\n    font-family: swiper-icons;\n    font-size: var(--swiper-navigation-size);\n    text-transform: none !important;\n    letter-spacing: 0;\n    text-transform: none;\n    font-variant: initial;\n    line-height: 1;\n  }\n  .swiper-button-prev,\n  .swiper-rtl .swiper-button-next {\n    z-index: 100;\n    top: 60%;\n    left: 7%;\n    right: auto;\n  }\n  .swiper-button-prev:after,\n  .swiper-rtl .swiper-button-next:after {\n    content: 'prev';\n  }\n  .swiper-button-next,\n  .swiper-rtl .swiper-button-prev {\n    top: 60%;\n    z-index: 100;\n    right: 7%;\n    left: auto;\n  }\n  .swiper-button-next:after,\n  .swiper-rtl .swiper-button-prev:after {\n    content: 'next';\n  }\n  .swiper-button-lock {\n    display: none;\n  }\n  :root {\n    /*\n  --swiper-pagination-color: var(--swiper-theme-color);\n  */\n  }\n  .swiper-pagination {\n    position: absolute;\n    text-align: center;\n    transition: 300ms opacity;\n    transform: translate3d(0, 0, 0);\n    z-index: 10;\n  }\n  .swiper-pagination.swiper-pagination-hidden {\n    opacity: 0;\n  }\n  /* Common Styles */\n  .swiper-pagination-fraction,\n  .swiper-pagination-custom,\n  .swiper-horizontal > .swiper-pagination-bullets,\n  .swiper-pagination-bullets.swiper-pagination-horizontal {\n    bottom: 20px;\n    left: 0;\n    width: 100%;\n  }\n  /* Bullets */\n  .swiper-pagination-bullets-dynamic {\n    overflow: hidden;\n    font-size: 0;\n  }\n  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n    transform: scale(0.33);\n    position: relative;\n  }\n  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {\n    transform: scale(1);\n  }\n  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {\n    transform: scale(1);\n  }\n  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {\n    transform: scale(0.66);\n  }\n  .swiper-pagination-bullets-dynamic\n    .swiper-pagination-bullet-active-prev-prev {\n    transform: scale(0.33);\n  }\n  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {\n    transform: scale(0.66);\n  }\n  .swiper-pagination-bullets-dynamic\n    .swiper-pagination-bullet-active-next-next {\n    transform: scale(0.33);\n  }\n  .swiper-pagination-bullet {\n    width: 8px;\n    height: 8px;\n    display: inline-block;\n    border-radius: 50%;\n    background: #000;\n    opacity: 0.2;\n  }\n  button.swiper-pagination-bullet {\n    border: none;\n    margin: 0;\n    padding: 0;\n    box-shadow: none;\n    -webkit-appearance: none;\n    appearance: none;\n  }\n  .swiper-pagination-clickable .swiper-pagination-bullet {\n    cursor: pointer;\n  }\n  .swiper-pagination-bullet:only-child {\n    display: none !important;\n  }\n  .swiper-pagination-bullet-active {\n    opacity: 1;\n    background: var(--swiper-pagination-color, var(--swiper-theme-color));\n  }\n  .swiper-vertical > .swiper-pagination-bullets,\n  .swiper-pagination-vertical.swiper-pagination-bullets {\n    right: 10px;\n    top: 50%;\n    transform: translate3d(0px, -50%, 0);\n  }\n  .swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet,\n  .swiper-pagination-vertical.swiper-pagination-bullets\n    .swiper-pagination-bullet {\n    margin: 6px 0;\n    display: block;\n  }\n  .swiper-vertical\n    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,\n  .swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n    top: 50%;\n    transform: translateY(-50%);\n    width: 8px;\n  }\n  .swiper-vertical\n    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic\n    .swiper-pagination-bullet,\n  .swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic\n    .swiper-pagination-bullet {\n    display: inline-block;\n    transition: 200ms transform, 200ms top;\n  }\n  .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,\n  .swiper-pagination-horizontal.swiper-pagination-bullets\n    .swiper-pagination-bullet {\n    margin: 0 4px;\n  }\n  .swiper-horizontal\n    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,\n  .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n    left: 50%;\n    transform: translateX(-50%);\n    white-space: nowrap;\n  }\n  .swiper-horizontal\n    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic\n    .swiper-pagination-bullet,\n  .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic\n    .swiper-pagination-bullet {\n    transition: 200ms transform, 200ms left;\n  }\n  .swiper-horizontal.swiper-rtl\n    > .swiper-pagination-bullets-dynamic\n    .swiper-pagination-bullet {\n    transition: 200ms transform, 200ms right;\n  }\n  /* Progress */\n  .swiper-pagination-progressbar {\n    background: rgba(0, 0, 0, 0.25);\n    position: absolute;\n  }\n  .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n    background: var(--swiper-pagination-color, var(--swiper-theme-color));\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    transform: scale(0);\n    transform-origin: left top;\n  }\n  .swiper-rtl\n    .swiper-pagination-progressbar\n    .swiper-pagination-progressbar-fill {\n    transform-origin: right top;\n  }\n  .swiper-horizontal > .swiper-pagination-progressbar,\n  .swiper-pagination-progressbar.swiper-pagination-horizontal,\n  .swiper-vertical\n    > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,\n  .swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite {\n    width: 100%;\n    height: 4px;\n    left: 0;\n    top: 0;\n  }\n  .swiper-vertical > .swiper-pagination-progressbar,\n  .swiper-pagination-progressbar.swiper-pagination-vertical,\n  .swiper-horizontal\n    > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,\n  .swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite {\n    width: 4px;\n    height: 100%;\n    left: 0;\n    top: 0;\n  }\n  .swiper-pagination-lock {\n    display: none;\n  }\n  /* Scrollbar */\n  .swiper-scrollbar {\n    border-radius: 10px;\n    position: relative;\n    -ms-touch-action: none;\n    touch-action: none;\n    background: rgba(0, 0, 0, 0.1);\n  }\n  .swiper-horizontal > .swiper-scrollbar {\n    position: absolute;\n    left: 1%;\n    bottom: 3px;\n    z-index: 50;\n    height: 5px;\n    width: 98%;\n  }\n  .swiper-vertical > .swiper-scrollbar {\n    position: absolute;\n    right: 3px;\n    top: 1%;\n    z-index: 50;\n    width: 5px;\n    height: 98%;\n  }\n  .swiper-scrollbar-drag {\n    height: 100%;\n    width: 100%;\n    position: relative;\n    background: rgba(0, 0, 0, 0.5);\n    border-radius: 10px;\n    left: 0;\n    top: 0;\n  }\n  .swiper-scrollbar-cursor-drag {\n    cursor: move;\n  }\n  .swiper-scrollbar-lock {\n    display: none;\n  }\n  .swiper-zoom-container {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n  }\n  .swiper-zoom-container > img,\n  .swiper-zoom-container > svg,\n  .swiper-zoom-container > canvas {\n    max-width: 100%;\n    max-height: 100%;\n    object-fit: contain;\n  }\n  .swiper-slide-zoomed {\n    cursor: move;\n  }\n  /* Preloader */\n  :root {\n    /*\n  --swiper-preloader-color: var(--swiper-theme-color);\n  */\n  }\n  .swiper-lazy-preloader {\n    width: 42px;\n    height: 42px;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    margin-left: -21px;\n    margin-top: -21px;\n    z-index: 10;\n    transform-origin: 50%;\n    animation: swiper-preloader-spin 1s infinite linear;\n    box-sizing: border-box;\n    border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));\n    border-radius: 50%;\n    border-top-color: transparent;\n  }\n  .swiper-lazy-preloader-white {\n    --swiper-preloader-color: #fff;\n  }\n  .swiper-lazy-preloader-black {\n    --swiper-preloader-color: #000;\n  }\n  @keyframes swiper-preloader-spin {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  /* a11y */\n  .swiper .swiper-notification {\n    position: absolute;\n    left: 0;\n    top: 0;\n    pointer-events: none;\n    opacity: 0;\n    z-index: -1000;\n  }\n  .swiper-free-mode > .swiper-wrapper {\n    transition-timing-function: ease-out;\n    margin: 0 auto;\n  }\n  .swiper-grid > .swiper-wrapper {\n    flex-wrap: wrap;\n  }\n  .swiper-grid-column > .swiper-wrapper {\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  .swiper-fade.swiper-free-mode .swiper-slide {\n    transition-timing-function: ease-out;\n  }\n  .swiper-fade .swiper-slide {\n    pointer-events: none;\n    transition-property: opacity;\n  }\n  .swiper-fade .swiper-slide .swiper-slide {\n    pointer-events: none;\n  }\n  .swiper-fade .swiper-slide-active,\n  .swiper-fade .swiper-slide-active .swiper-slide-active {\n    pointer-events: auto;\n  }\n  .swiper-cube {\n    overflow: visible;\n  }\n  .swiper-cube .swiper-slide {\n    pointer-events: none;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    z-index: 1;\n    visibility: hidden;\n    transform-origin: 0 0;\n    width: 100%;\n    height: 100%;\n  }\n  .swiper-cube .swiper-slide .swiper-slide {\n    pointer-events: none;\n  }\n  .swiper-cube.swiper-rtl .swiper-slide {\n    transform-origin: 100% 0;\n  }\n  .swiper-cube .swiper-slide-active,\n  .swiper-cube .swiper-slide-active .swiper-slide-active {\n    pointer-events: auto;\n  }\n  .swiper-cube .swiper-slide-active,\n  .swiper-cube .swiper-slide-next,\n  .swiper-cube .swiper-slide-prev,\n  .swiper-cube .swiper-slide-next + .swiper-slide {\n    pointer-events: auto;\n    visibility: visible;\n  }\n  .swiper-cube .swiper-slide-shadow-top,\n  .swiper-cube .swiper-slide-shadow-bottom,\n  .swiper-cube .swiper-slide-shadow-left,\n  .swiper-cube .swiper-slide-shadow-right {\n    z-index: 0;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n  }\n  .swiper-cube .swiper-cube-shadow {\n    position: absolute;\n    left: 0;\n    bottom: 0px;\n    width: 100%;\n    height: 100%;\n    opacity: 0.6;\n    z-index: 0;\n  }\n  .swiper-cube .swiper-cube-shadow:before {\n    content: '';\n    background: #000;\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    filter: blur(50px);\n  }\n  .swiper-flip {\n    overflow: visible;\n  }\n  .swiper-flip .swiper-slide {\n    pointer-events: none;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    z-index: 1;\n  }\n  .swiper-flip .swiper-slide .swiper-slide {\n    pointer-events: none;\n  }\n  .swiper-flip .swiper-slide-active,\n  .swiper-flip .swiper-slide-active .swiper-slide-active {\n    pointer-events: auto;\n  }\n  .swiper-flip .swiper-slide-shadow-top,\n  .swiper-flip .swiper-slide-shadow-bottom,\n  .swiper-flip .swiper-slide-shadow-left,\n  .swiper-flip .swiper-slide-shadow-right {\n    z-index: 0;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n  }\n  .swiper-creative .swiper-slide {\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    overflow: hidden;\n    transition-property: transform, opacity, height;\n  }\n  .swiper-cards {\n    overflow: visible;\n  }\n  .swiper-cards .swiper-slide {\n    transform-origin: center bottom;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    overflow: hidden;\n  }\n"], ["\n  @font-face {\n    font-family: 'swiper-icons';\n    src: url('data:application/font-woff;charset=utf-8;base64, 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');\n    font-weight: 400;\n    font-style: normal;\n  }\n  :root {\n    --swiper-theme-color: white;\n  }\n  .swiper {\n    margin-left: auto;\n    margin-right: auto;\n    position: relative;\n    overflow: hidden;\n    list-style: none;\n    padding: 0;\n    /* Fix of Webkit flickering */\n    z-index: 1;\n  }\n  .swiper-vertical > .swiper-wrapper {\n    flex-direction: column;\n  }\n  .swiper-wrapper {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    display: flex;\n    transition-property: transform;\n    box-sizing: content-box;\n  }\n  .swiper-android .swiper-slide,\n  .swiper-wrapper {\n    transform: translate3d(0px, 0, 0);\n  }\n  .swiper-pointer-events {\n    touch-action: pan-y;\n  }\n  .swiper-pointer-events.swiper-vertical {\n    touch-action: pan-x;\n  }\n  .swiper-slide {\n    flex-shrink: 0;\n    width: 100%;\n    height: 100%;\n    position: relative;\n    transition-property: transform;\n  }\n  .swiper-slide-invisible-blank {\n    visibility: hidden;\n  }\n  /* Auto Height */\n  .swiper-autoheight,\n  .swiper-autoheight .swiper-slide {\n    height: auto;\n  }\n  .swiper-autoheight .swiper-wrapper {\n    align-items: flex-start;\n    transition-property: transform, height;\n  }\n  /* 3D Effects */\n  .swiper-3d,\n  .swiper-3d.swiper-css-mode .swiper-wrapper {\n    perspective: 1200px;\n  }\n  .swiper-3d .swiper-wrapper,\n  .swiper-3d .swiper-slide,\n  .swiper-3d .swiper-slide-shadow,\n  .swiper-3d .swiper-slide-shadow-left,\n  .swiper-3d .swiper-slide-shadow-right,\n  .swiper-3d .swiper-slide-shadow-top,\n  .swiper-3d .swiper-slide-shadow-bottom,\n  .swiper-3d .swiper-cube-shadow {\n    transform-style: preserve-3d;\n  }\n  .swiper-3d .swiper-slide-shadow,\n  .swiper-3d .swiper-slide-shadow-left,\n  .swiper-3d .swiper-slide-shadow-right,\n  .swiper-3d .swiper-slide-shadow-top,\n  .swiper-3d .swiper-slide-shadow-bottom {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n    z-index: 10;\n  }\n  .swiper-3d .swiper-slide-shadow {\n    background: rgba(0, 0, 0, 0.15);\n  }\n  .swiper-3d .swiper-slide-shadow-left {\n    background-image: linear-gradient(\n      to left,\n      rgba(0, 0, 0, 0.5),\n      rgba(0, 0, 0, 0)\n    );\n  }\n  .swiper-3d .swiper-slide-shadow-right {\n    background-image: linear-gradient(\n      to right,\n      rgba(0, 0, 0, 0.5),\n      rgba(0, 0, 0, 0)\n    );\n  }\n  .swiper-3d .swiper-slide-shadow-top {\n    background-image: linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.5),\n      rgba(0, 0, 0, 0)\n    );\n  }\n  .swiper-3d .swiper-slide-shadow-bottom {\n    background-image: linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.5),\n      rgba(0, 0, 0, 0)\n    );\n  }\n  /* CSS Mode */\n  .swiper-css-mode > .swiper-wrapper {\n    overflow: auto;\n    scrollbar-width: none;\n    /* For Firefox */\n    -ms-overflow-style: none;\n    /* For Internet Explorer and Edge */\n  }\n  .swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {\n    display: none;\n  }\n  .swiper-css-mode > .swiper-wrapper > .swiper-slide {\n    scroll-snap-align: start start;\n  }\n  .swiper-horizontal.swiper-css-mode > .swiper-wrapper {\n    scroll-snap-type: x mandatory;\n  }\n  .swiper-vertical.swiper-css-mode > .swiper-wrapper {\n    scroll-snap-type: y mandatory;\n  }\n  .swiper-centered > .swiper-wrapper::before {\n    content: '';\n    flex-shrink: 0;\n    order: 9999;\n  }\n  .swiper-centered.swiper-horizontal\n    > .swiper-wrapper\n    > .swiper-slide:first-of-type {\n    margin-inline-start: var(--swiper-centered-offset-before);\n  }\n  .swiper-centered.swiper-horizontal > .swiper-wrapper::before {\n    height: 100%;\n    min-height: 1px;\n    width: var(--swiper-centered-offset-after);\n  }\n  .swiper-centered.swiper-vertical\n    > .swiper-wrapper\n    > .swiper-slide:first-of-type {\n    margin-block-start: var(--swiper-centered-offset-before);\n  }\n  .swiper-centered.swiper-vertical > .swiper-wrapper::before {\n    width: 100%;\n    min-width: 1px;\n    height: var(--swiper-centered-offset-after);\n  }\n  .swiper-centered > .swiper-wrapper > .swiper-slide {\n    scroll-snap-align: center center;\n  }\n  .swiper-virtual.swiper-css-mode .swiper-wrapper::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    pointer-events: none;\n  }\n  .swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after {\n    height: 1px;\n    width: var(--swiper-virtual-size);\n  }\n  .swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after {\n    width: 1px;\n    height: var(--swiper-virtual-size);\n  }\n  :root {\n    --swiper-navigation-size: 44px;\n    /*\n  --swiper-navigation-color: var(--swiper-theme-color);\n  */\n  }\n  .swiper-button-prev,\n  .swiper-button-next {\n    position: absolute;\n    top: 50%;\n    width: calc(var(--swiper-navigation-size) / 44 * 27);\n    height: var(--swiper-navigation-size);\n    margin-top: calc(0px - (var(--swiper-navigation-size) / 2));\n    z-index: 10;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: var(--swiper-navigation-color, var(--swiper-theme-color));\n  }\n  .swiper-button-prev.swiper-button-disabled,\n  .swiper-button-next.swiper-button-disabled {\n    opacity: 0.35;\n    cursor: auto;\n    pointer-events: none;\n  }\n  .swiper-button-prev:after,\n  .swiper-button-next:after {\n    font-family: swiper-icons;\n    font-size: var(--swiper-navigation-size);\n    text-transform: none !important;\n    letter-spacing: 0;\n    text-transform: none;\n    font-variant: initial;\n    line-height: 1;\n  }\n  .swiper-button-prev,\n  .swiper-rtl .swiper-button-next {\n    z-index: 100;\n    top: 60%;\n    left: 7%;\n    right: auto;\n  }\n  .swiper-button-prev:after,\n  .swiper-rtl .swiper-button-next:after {\n    content: 'prev';\n  }\n  .swiper-button-next,\n  .swiper-rtl .swiper-button-prev {\n    top: 60%;\n    z-index: 100;\n    right: 7%;\n    left: auto;\n  }\n  .swiper-button-next:after,\n  .swiper-rtl .swiper-button-prev:after {\n    content: 'next';\n  }\n  .swiper-button-lock {\n    display: none;\n  }\n  :root {\n    /*\n  --swiper-pagination-color: var(--swiper-theme-color);\n  */\n  }\n  .swiper-pagination {\n    position: absolute;\n    text-align: center;\n    transition: 300ms opacity;\n    transform: translate3d(0, 0, 0);\n    z-index: 10;\n  }\n  .swiper-pagination.swiper-pagination-hidden {\n    opacity: 0;\n  }\n  /* Common Styles */\n  .swiper-pagination-fraction,\n  .swiper-pagination-custom,\n  .swiper-horizontal > .swiper-pagination-bullets,\n  .swiper-pagination-bullets.swiper-pagination-horizontal {\n    bottom: 20px;\n    left: 0;\n    width: 100%;\n  }\n  /* Bullets */\n  .swiper-pagination-bullets-dynamic {\n    overflow: hidden;\n    font-size: 0;\n  }\n  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n    transform: scale(0.33);\n    position: relative;\n  }\n  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {\n    transform: scale(1);\n  }\n  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {\n    transform: scale(1);\n  }\n  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {\n    transform: scale(0.66);\n  }\n  .swiper-pagination-bullets-dynamic\n    .swiper-pagination-bullet-active-prev-prev {\n    transform: scale(0.33);\n  }\n  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {\n    transform: scale(0.66);\n  }\n  .swiper-pagination-bullets-dynamic\n    .swiper-pagination-bullet-active-next-next {\n    transform: scale(0.33);\n  }\n  .swiper-pagination-bullet {\n    width: 8px;\n    height: 8px;\n    display: inline-block;\n    border-radius: 50%;\n    background: #000;\n    opacity: 0.2;\n  }\n  button.swiper-pagination-bullet {\n    border: none;\n    margin: 0;\n    padding: 0;\n    box-shadow: none;\n    -webkit-appearance: none;\n    appearance: none;\n  }\n  .swiper-pagination-clickable .swiper-pagination-bullet {\n    cursor: pointer;\n  }\n  .swiper-pagination-bullet:only-child {\n    display: none !important;\n  }\n  .swiper-pagination-bullet-active {\n    opacity: 1;\n    background: var(--swiper-pagination-color, var(--swiper-theme-color));\n  }\n  .swiper-vertical > .swiper-pagination-bullets,\n  .swiper-pagination-vertical.swiper-pagination-bullets {\n    right: 10px;\n    top: 50%;\n    transform: translate3d(0px, -50%, 0);\n  }\n  .swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet,\n  .swiper-pagination-vertical.swiper-pagination-bullets\n    .swiper-pagination-bullet {\n    margin: 6px 0;\n    display: block;\n  }\n  .swiper-vertical\n    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,\n  .swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n    top: 50%;\n    transform: translateY(-50%);\n    width: 8px;\n  }\n  .swiper-vertical\n    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic\n    .swiper-pagination-bullet,\n  .swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic\n    .swiper-pagination-bullet {\n    display: inline-block;\n    transition: 200ms transform, 200ms top;\n  }\n  .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,\n  .swiper-pagination-horizontal.swiper-pagination-bullets\n    .swiper-pagination-bullet {\n    margin: 0 4px;\n  }\n  .swiper-horizontal\n    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,\n  .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n    left: 50%;\n    transform: translateX(-50%);\n    white-space: nowrap;\n  }\n  .swiper-horizontal\n    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic\n    .swiper-pagination-bullet,\n  .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic\n    .swiper-pagination-bullet {\n    transition: 200ms transform, 200ms left;\n  }\n  .swiper-horizontal.swiper-rtl\n    > .swiper-pagination-bullets-dynamic\n    .swiper-pagination-bullet {\n    transition: 200ms transform, 200ms right;\n  }\n  /* Progress */\n  .swiper-pagination-progressbar {\n    background: rgba(0, 0, 0, 0.25);\n    position: absolute;\n  }\n  .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n    background: var(--swiper-pagination-color, var(--swiper-theme-color));\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    transform: scale(0);\n    transform-origin: left top;\n  }\n  .swiper-rtl\n    .swiper-pagination-progressbar\n    .swiper-pagination-progressbar-fill {\n    transform-origin: right top;\n  }\n  .swiper-horizontal > .swiper-pagination-progressbar,\n  .swiper-pagination-progressbar.swiper-pagination-horizontal,\n  .swiper-vertical\n    > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,\n  .swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite {\n    width: 100%;\n    height: 4px;\n    left: 0;\n    top: 0;\n  }\n  .swiper-vertical > .swiper-pagination-progressbar,\n  .swiper-pagination-progressbar.swiper-pagination-vertical,\n  .swiper-horizontal\n    > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,\n  .swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite {\n    width: 4px;\n    height: 100%;\n    left: 0;\n    top: 0;\n  }\n  .swiper-pagination-lock {\n    display: none;\n  }\n  /* Scrollbar */\n  .swiper-scrollbar {\n    border-radius: 10px;\n    position: relative;\n    -ms-touch-action: none;\n    touch-action: none;\n    background: rgba(0, 0, 0, 0.1);\n  }\n  .swiper-horizontal > .swiper-scrollbar {\n    position: absolute;\n    left: 1%;\n    bottom: 3px;\n    z-index: 50;\n    height: 5px;\n    width: 98%;\n  }\n  .swiper-vertical > .swiper-scrollbar {\n    position: absolute;\n    right: 3px;\n    top: 1%;\n    z-index: 50;\n    width: 5px;\n    height: 98%;\n  }\n  .swiper-scrollbar-drag {\n    height: 100%;\n    width: 100%;\n    position: relative;\n    background: rgba(0, 0, 0, 0.5);\n    border-radius: 10px;\n    left: 0;\n    top: 0;\n  }\n  .swiper-scrollbar-cursor-drag {\n    cursor: move;\n  }\n  .swiper-scrollbar-lock {\n    display: none;\n  }\n  .swiper-zoom-container {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n  }\n  .swiper-zoom-container > img,\n  .swiper-zoom-container > svg,\n  .swiper-zoom-container > canvas {\n    max-width: 100%;\n    max-height: 100%;\n    object-fit: contain;\n  }\n  .swiper-slide-zoomed {\n    cursor: move;\n  }\n  /* Preloader */\n  :root {\n    /*\n  --swiper-preloader-color: var(--swiper-theme-color);\n  */\n  }\n  .swiper-lazy-preloader {\n    width: 42px;\n    height: 42px;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    margin-left: -21px;\n    margin-top: -21px;\n    z-index: 10;\n    transform-origin: 50%;\n    animation: swiper-preloader-spin 1s infinite linear;\n    box-sizing: border-box;\n    border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));\n    border-radius: 50%;\n    border-top-color: transparent;\n  }\n  .swiper-lazy-preloader-white {\n    --swiper-preloader-color: #fff;\n  }\n  .swiper-lazy-preloader-black {\n    --swiper-preloader-color: #000;\n  }\n  @keyframes swiper-preloader-spin {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  /* a11y */\n  .swiper .swiper-notification {\n    position: absolute;\n    left: 0;\n    top: 0;\n    pointer-events: none;\n    opacity: 0;\n    z-index: -1000;\n  }\n  .swiper-free-mode > .swiper-wrapper {\n    transition-timing-function: ease-out;\n    margin: 0 auto;\n  }\n  .swiper-grid > .swiper-wrapper {\n    flex-wrap: wrap;\n  }\n  .swiper-grid-column > .swiper-wrapper {\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  .swiper-fade.swiper-free-mode .swiper-slide {\n    transition-timing-function: ease-out;\n  }\n  .swiper-fade .swiper-slide {\n    pointer-events: none;\n    transition-property: opacity;\n  }\n  .swiper-fade .swiper-slide .swiper-slide {\n    pointer-events: none;\n  }\n  .swiper-fade .swiper-slide-active,\n  .swiper-fade .swiper-slide-active .swiper-slide-active {\n    pointer-events: auto;\n  }\n  .swiper-cube {\n    overflow: visible;\n  }\n  .swiper-cube .swiper-slide {\n    pointer-events: none;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    z-index: 1;\n    visibility: hidden;\n    transform-origin: 0 0;\n    width: 100%;\n    height: 100%;\n  }\n  .swiper-cube .swiper-slide .swiper-slide {\n    pointer-events: none;\n  }\n  .swiper-cube.swiper-rtl .swiper-slide {\n    transform-origin: 100% 0;\n  }\n  .swiper-cube .swiper-slide-active,\n  .swiper-cube .swiper-slide-active .swiper-slide-active {\n    pointer-events: auto;\n  }\n  .swiper-cube .swiper-slide-active,\n  .swiper-cube .swiper-slide-next,\n  .swiper-cube .swiper-slide-prev,\n  .swiper-cube .swiper-slide-next + .swiper-slide {\n    pointer-events: auto;\n    visibility: visible;\n  }\n  .swiper-cube .swiper-slide-shadow-top,\n  .swiper-cube .swiper-slide-shadow-bottom,\n  .swiper-cube .swiper-slide-shadow-left,\n  .swiper-cube .swiper-slide-shadow-right {\n    z-index: 0;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n  }\n  .swiper-cube .swiper-cube-shadow {\n    position: absolute;\n    left: 0;\n    bottom: 0px;\n    width: 100%;\n    height: 100%;\n    opacity: 0.6;\n    z-index: 0;\n  }\n  .swiper-cube .swiper-cube-shadow:before {\n    content: '';\n    background: #000;\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    filter: blur(50px);\n  }\n  .swiper-flip {\n    overflow: visible;\n  }\n  .swiper-flip .swiper-slide {\n    pointer-events: none;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    z-index: 1;\n  }\n  .swiper-flip .swiper-slide .swiper-slide {\n    pointer-events: none;\n  }\n  .swiper-flip .swiper-slide-active,\n  .swiper-flip .swiper-slide-active .swiper-slide-active {\n    pointer-events: auto;\n  }\n  .swiper-flip .swiper-slide-shadow-top,\n  .swiper-flip .swiper-slide-shadow-bottom,\n  .swiper-flip .swiper-slide-shadow-left,\n  .swiper-flip .swiper-slide-shadow-right {\n    z-index: 0;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n  }\n  .swiper-creative .swiper-slide {\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    overflow: hidden;\n    transition-property: transform, opacity, height;\n  }\n  .swiper-cards {\n    overflow: visible;\n  }\n  .swiper-cards .swiper-slide {\n    transform-origin: center bottom;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    overflow: hidden;\n  }\n"])));
var templateObject_1;

module.exports = SwiperStyles;
//# sourceMappingURL=styles.js.map
