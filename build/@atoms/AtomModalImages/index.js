'use strict';

var tslib = require('tslib');
var react = require('@emotion/react');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var React = require('react');
var index$2 = require('../AtomButton/index.js');
var index$4 = require('../AtomImage/index.js');
var index$1 = require('../AtomWrapper/index.js');
var index$3 = require('../AtomIcon/index.js');
var index = require('../AtomModal/index.js');

var spring = {
    x: { type: "spring", damping: 20, stiffness: 180, when: "afterChildren" },
    default: { duration: 0.45 },
};
var animation = {
    transition: spring,
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};
var AtomModalImage = function (props) {
    var images = props.images, selected = props.selected, setSelected = props.setSelected, state = props.state, setState = props.setState;
    var ref = React.useRef(null);
    React.useEffect(function () {
        var handleClickOutside = function (event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setState === null || setState === void 0 ? void 0 : setState(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
    return (jsxRuntime.jsx(index, { isOpen: state, componentProps: {
            containerProps: {
                customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n            position: fixed;\n            width: 100vw;\n            height: 100vh;\n            left: 0;\n            top: 0;\n            background-color: #0000008a;\n            backdrop-filter: blur(12px);\n            z-index: 9999;\n          "], ["\n            position: fixed;\n            width: 100vw;\n            height: 100vh;\n            left: 0;\n            top: 0;\n            background-color: #0000008a;\n            backdrop-filter: blur(12px);\n            z-index: 9999;\n          "]))),
            },
            wrapperProps: {
                width: 'max-content',
                height: 'max-content',
                refObject: ref,
                backgroundColor: 'transparent',
            },
        }, component: jsxRuntime.jsxs(index$1, tslib.__assign({ alignItems: "flex-end" }, { children: [jsxRuntime.jsx(index$2, tslib.__assign({ backgroundColor: "transparent", fontSize: "30px", onClick: function () { return setState(false); } }, { children: "X" })), jsxRuntime.jsxs(index$1, tslib.__assign({ maxWidth: "100%", alignItems: "center", justifyContent: "center", flexDirection: "row" }, { children: [jsxRuntime.jsx(index$2, tslib.__assign({ padding: "0px 0px", backgroundColor: "transparent", customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n                margin-right: 22px;\n              "], ["\n                margin-right: 22px;\n              "]))), onClick: function () {
                                var _a;
                                var newSelected = (selected !== null && selected !== void 0 ? selected : 0) - 1;
                                var length = ((_a = images === null || images === void 0 ? void 0 : images.length) !== null && _a !== void 0 ? _a : 0) - 1;
                                setSelected === null || setSelected === void 0 ? void 0 : setSelected(newSelected < 0 ? length : newSelected);
                            } }, { children: jsxRuntime.jsx(index$3, { height: "30px", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-commons/frontend-library/icons/arrowleft.svg", color: "white", customCSS: react.css(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n                  transform: rotate(180deg);\n                "], ["\n                  transform: rotate(180deg);\n                "]))) }) })), (images === null || images === void 0 ? void 0 : images.find(function (_, idx) { return idx === selected; })) && (react.createElement(index$4, tslib.__assign({}, animation, { key: selected, height: "70vh", width: "60vw", alt: "image", src: "".concat(images === null || images === void 0 ? void 0 : images.find(function (_, idx) { return idx === selected; })), customCSS: react.css(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n                  img {\n                    object-fit: contain;\n                  }\n                "], ["\n                  img {\n                    object-fit: contain;\n                  }\n                "]))) }))), jsxRuntime.jsx(index$2, tslib.__assign({ padding: "0px 0px", backgroundColor: "transparent", customCSS: react.css(templateObject_5 || (templateObject_5 = tslib.__makeTemplateObject(["\n                margin-left: 22px;\n              "], ["\n                margin-left: 22px;\n              "]))), onClick: function () {
                                var _a;
                                var newSelected = (selected !== null && selected !== void 0 ? selected : 0) + 1;
                                var length = ((_a = images === null || images === void 0 ? void 0 : images.length) !== null && _a !== void 0 ? _a : 0) - 1;
                                setSelected === null || setSelected === void 0 ? void 0 : setSelected(newSelected > length ? 0 : newSelected);
                            } }, { children: jsxRuntime.jsx(index$3, { height: "30px", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-commons/frontend-library/icons/arrowleft.svg", color: "white" }) }))] }))] })) }));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

module.exports = AtomModalImage;
//# sourceMappingURL=index.js.map
