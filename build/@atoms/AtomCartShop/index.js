'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var react = require('@emotion/react');
var cartshop = require('../../src/redux/actions/cartshop.js');
var index = require('../../src/apollo/index.js');
var framerMotion = require('framer-motion');
var router = require('next/router');
var React = require('react');
var reactRedux = require('react-redux');
var numberWithComas = require('../../@utils/numberWithComas.js');
var index$5 = require('../AtomWrapper/index.js');
var index$4 = require('../AtomText/index.js');
var index$6 = require('../AtomSeparator/index.js');
var index$8 = require('../AtomImage/index.js');
var index$3 = require('../AtomIcon/index.js');
var index$2 = require('../AtomButton/index.js');
var index$1 = require('./query/index.js');
var index$7 = require('./styles/index.js');
var useQuery = require('../../node_modules/@apollo/client/react/hooks/useQuery.js');

var Animation = {
    whileHover: {
        scale: 1.09,
        transition: { duration: 0.3 },
    },
    whileTap: { scale: 0.98, opacity: 0.8 },
};
var AnimationWrapper = {
    transition: {
        default: { duration: 0.3 },
    },
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};
var Wrapper = framerMotion.motion.div;
var AtomCartShop = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var path = props.path;
    var router$1 = router.useRouter();
    var customize = reactRedux.useSelector(function (state) { return state.customize; });
    var cart = reactRedux.useSelector(function (state) { return state.cartShop; });
    var _l = tslib.__read(React.useState(false), 2), show = _l[0], setShow = _l[1];
    var ref = React.useRef(null);
    var _m = tslib.__read(React.useState([]), 2), cartsItems = _m[0], setCartsItems = _m[1];
    React.useEffect(function () {
        var getData = function () { return tslib.__awaiter(void 0, void 0, void 0, function () {
            var getcarts;
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(cart === null || cart === void 0 ? void 0 : cart.map(function (item) { return tslib.__awaiter(void 0, void 0, void 0, function () {
                            var _a;
                            var _b;
                            return tslib.__generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        _a = [tslib.__assign({}, item)];
                                        _b = {};
                                        return [4 /*yield*/, index
                                                .query({
                                                query: index$1.GETPRODUCTBYID,
                                                variables: {
                                                    id: item.id,
                                                },
                                            })
                                                .then(function (res) { return res.data.productById; })
                                                .catch(function (err) { return err; })];
                                    case 1: return [2 /*return*/, (tslib.__assign.apply(void 0, _a.concat([(_b.data = _c.sent(), _b)])))];
                                }
                            });
                        }); }))];
                    case 1:
                        getcarts = _a.sent();
                        setCartsItems(getcarts);
                        return [2 /*return*/];
                }
            });
        }); };
        if (Array.isArray(cart)) {
            getData();
        }
    }, [cart]);
    React.useEffect(function () {
        var handleClickOutside = function (event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setShow(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs(index$2, tslib.__assign({}, Animation, { onClick: function () { return setShow(!show); }, customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n          background-color: transparent;\n          padding: 10px;\n          border-radius: 50%;\n          position: relative;\n          border: 1px solid ", ";\n          :hover {\n            background-color: ", ";\n            div {\n              svg {\n                path {\n                  fill: #ffffff !important;\n                }\n              }\n            }\n          }\n          transition: background-color 0.3s ease-in-out;\n        "], ["\n          background-color: transparent;\n          padding: 10px;\n          border-radius: 50%;\n          position: relative;\n          border: 1px solid ", ";\n          :hover {\n            background-color: ", ";\n            div {\n              svg {\n                path {\n                  fill: #ffffff !important;\n                }\n              }\n            }\n          }\n          transition: background-color 0.3s ease-in-out;\n        "])), (_b = (_a = customize === null || customize === void 0 ? void 0 : customize.colors) === null || _a === void 0 ? void 0 : _a.primary) !== null && _b !== void 0 ? _b : '#fe6a6a', (_d = (_c = customize === null || customize === void 0 ? void 0 : customize.colors) === null || _c === void 0 ? void 0 : _c.primary) !== null && _d !== void 0 ? _d : '#fe6a6a') }, { children: [jsxRuntime.jsx(index$3, { height: "20px", width: "20px", color: (_f = (_e = customize === null || customize === void 0 ? void 0 : customize.colors) === null || _e === void 0 ? void 0 : _e.primary) !== null && _f !== void 0 ? _f : '#fe6a6a', icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/icons/svgs/add-item-in-cart.svg" }), cartsItems.length > 0 && (jsxRuntime.jsx(index$4, tslib.__assign({ customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n              top: -8px;\n              right: -12px;\n              position: absolute;\n              padding: 5px;\n              font-size: 10px;\n              border-radius: 50%;\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n              align-items: center;\n              width: 25px;\n              height: 25px;\n              color: #ffffff;\n              font-weight: bold;\n              background-color: ", ";\n            "], ["\n              top: -8px;\n              right: -12px;\n              position: absolute;\n              padding: 5px;\n              font-size: 10px;\n              border-radius: 50%;\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n              align-items: center;\n              width: 25px;\n              height: 25px;\n              color: #ffffff;\n              font-weight: bold;\n              background-color: ", ";\n            "])), (_h = (_g = customize === null || customize === void 0 ? void 0 : customize.colors) === null || _g === void 0 ? void 0 : _g.primary) !== null && _h !== void 0 ? _h : '#fe6a6a') }, { children: cartsItems.reduce(function (acc, item) { return acc + item.quantity; }, 0) })))] })), jsxRuntime.jsx(framerMotion.AnimatePresence, { children: show && (jsxRuntime.jsx(Wrapper, tslib.__assign({}, AnimationWrapper, { css: react.css(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n              display: flex;\n              position: fixed;\n              top: 0;\n              left: 0;\n              width: 100vw;\n              height: 100vh;\n              background-color: #111111b0;\n              flex-direction: row;\n              justify-content: flex-end;\n            "], ["\n              display: flex;\n              position: fixed;\n              top: 0;\n              left: 0;\n              width: 100vw;\n              height: 100vh;\n              background-color: #111111b0;\n              flex-direction: row;\n              justify-content: flex-end;\n            "]))) }, { children: jsxRuntime.jsxs(index$5, tslib.__assign({ refObject: ref, customCSS: react.css(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n                flex-direction: column;\n                justify-content: flex-start;\n                align-items: space-between;\n                height: 100%;\n                width: 450px;\n                padding: 40px 60px;\n                background-color: #ffffff;\n                box-shadow: 0px 0px 10px rgb(0 0 0 / 10%);\n                gap: 15px;\n              "], ["\n                flex-direction: column;\n                justify-content: flex-start;\n                align-items: space-between;\n                height: 100%;\n                width: 450px;\n                padding: 40px 60px;\n                background-color: #ffffff;\n                box-shadow: 0px 0px 10px rgb(0 0 0 / 10%);\n                gap: 15px;\n              "]))) }, { children: [jsxRuntime.jsx(index$4, tslib.__assign({ fontSize: "22px", fontWeight: 700 }, { children: "CARRITO" })), jsxRuntime.jsx(index$5, tslib.__assign({ customCSS: react.css(templateObject_5 || (templateObject_5 = tslib.__makeTemplateObject(["\n                  gap: 15px;\n                  height: 100%;\n                  overflow-y: auto;\n                  align-items: flex-start;\n                  justify-content: flex-start;\n                "], ["\n                  gap: 15px;\n                  height: 100%;\n                  overflow-y: auto;\n                  align-items: flex-start;\n                  justify-content: flex-start;\n                "]))) }, { children: cart === null || cart === void 0 ? void 0 : cart.map(function (item) { return (jsxRuntime.jsx(CardCart, tslib.__assign({}, item), item.id)); }) })), jsxRuntime.jsx(index$6, { customCSS: react.css(templateObject_6 || (templateObject_6 = tslib.__makeTemplateObject(["\n                  background-color: #e4e4e4;\n                  margin: 0px;\n                "], ["\n                  background-color: #e4e4e4;\n                  margin: 0px;\n                "]))) }), jsxRuntime.jsxs(index$5, tslib.__assign({ customCSS: react.css(templateObject_7 || (templateObject_7 = tslib.__makeTemplateObject(["\n                  gap: 15px;\n                  height: max-content;\n                  flex-direction: row;\n                "], ["\n                  gap: 15px;\n                  height: max-content;\n                  flex-direction: row;\n                "]))) }, { children: [jsxRuntime.jsxs(index$5, tslib.__assign({ customCSS: react.css(templateObject_8 || (templateObject_8 = tslib.__makeTemplateObject(["\n                    align-items: flex-end;\n                    gap: 10px;\n                  "], ["\n                    align-items: flex-end;\n                    gap: 10px;\n                  "]))) }, { children: [jsxRuntime.jsx(index$4, { children: "Subtotal (IVA Incluido)" }), jsxRuntime.jsx(index$4, { children: "Envio" }), jsxRuntime.jsx(index$4, tslib.__assign({ customCSS: react.css(templateObject_9 || (templateObject_9 = tslib.__makeTemplateObject(["\n                      font-size: 16px;\n                      font-weight: 700;\n                    "], ["\n                      font-size: 16px;\n                      font-weight: 700;\n                    "]))) }, { children: "Total" }))] })), jsxRuntime.jsxs(index$5, tslib.__assign({ customCSS: react.css(templateObject_10 || (templateObject_10 = tslib.__makeTemplateObject(["\n                    align-items: flex-end;\n                    gap: 10px;\n                  "], ["\n                    align-items: flex-end;\n                    gap: 10px;\n                  "]))) }, { children: [jsxRuntime.jsx(index$4, { children: "$".concat(numberWithComas(cartsItems === null || cartsItems === void 0 ? void 0 : cartsItems.reduce(function (acc, item) { var _a; return acc + ((_a = item === null || item === void 0 ? void 0 : item.data) === null || _a === void 0 ? void 0 : _a.price) * item.quantity; }, 0)), " MXN") }), jsxRuntime.jsx(index$4, { children: "Por definir" }), jsxRuntime.jsx(index$4, tslib.__assign({ customCSS: react.css(templateObject_11 || (templateObject_11 = tslib.__makeTemplateObject(["\n                      font-size: 16px;\n                      font-weight: 700;\n                    "], ["\n                      font-size: 16px;\n                      font-weight: 700;\n                    "]))) }, { children: "$".concat(numberWithComas(cartsItems === null || cartsItems === void 0 ? void 0 : cartsItems.reduce(function (acc, item) { var _a; return acc + ((_a = item === null || item === void 0 ? void 0 : item.data) === null || _a === void 0 ? void 0 : _a.price) * item.quantity; }, 0)), " MXN") }))] }))] })), jsxRuntime.jsx(index$2, tslib.__assign({ width: "100%", padding: "10px 0px", onClick: function () {
                                    setShow(false);
                                    router$1.push(path !== null && path !== void 0 ? path : "/feed/shop/checkout");
                                }, backgroundColor: (_k = (_j = customize === null || customize === void 0 ? void 0 : customize.colors) === null || _j === void 0 ? void 0 : _j.primary) !== null && _k !== void 0 ? _k : '#fe6a6a' }, { children: "PROCEDER CON EL PAGO" }))] })) }))) })] }));
};
var CardCart = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    var id = props.id, quantity = props.quantity;
    var dispatch = reactRedux.useDispatch();
    var customize = reactRedux.useSelector(function (state) { return state.customize; });
    var _q = useQuery.useQuery(index$1.GETPRODUCTBYID, {
        variables: {
            id: id,
        },
    }), data = _q.data, loading = _q.loading;
    return (jsxRuntime.jsxs(index$5, tslib.__assign({ customCSS: react.css(templateObject_12 || (templateObject_12 = tslib.__makeTemplateObject(["\n        width: 100%;\n        display: flex;\n        flex-direction: row;\n        justify-content: flex-start;\n        align-items: flex-start;\n        padding: 10px;\n        gap: 20px;\n        border-radius: 4px;\n        background-color: #ffffff;\n        border: 1px solid #ebebeb;\n        box-shadow: 0px 0px 8px #dbdbdb78;\n        ", "\n      "], ["\n        width: 100%;\n        display: flex;\n        flex-direction: row;\n        justify-content: flex-start;\n        align-items: flex-start;\n        padding: 10px;\n        gap: 20px;\n        border-radius: 4px;\n        background-color: #ffffff;\n        border: 1px solid #ebebeb;\n        box-shadow: 0px 0px 8px #dbdbdb78;\n        ", "\n      "])), loading && index$7.SkletonStyles) }, { children: [jsxRuntime.jsx(index$8, { src: (_a = data === null || data === void 0 ? void 0 : data.productById) === null || _a === void 0 ? void 0 : _a.photo, alt: "product", customCSS: react.css(templateObject_13 || (templateObject_13 = tslib.__makeTemplateObject(["\n          height: 100px;\n          width: 100px;\n          ", "\n        "], ["\n          height: 100px;\n          width: 100px;\n          ", "\n        "])), loading && index$7.SkletonStyles) }), jsxRuntime.jsxs(index$5, tslib.__assign({ customCSS: react.css(templateObject_14 || (templateObject_14 = tslib.__makeTemplateObject(["\n          width: calc(100% - 100px);\n          gap: 5px;\n        "], ["\n          width: calc(100% - 100px);\n          gap: 5px;\n        "]))) }, { children: [jsxRuntime.jsx(index$4, tslib.__assign({ customCSS: react.css(templateObject_15 || (templateObject_15 = tslib.__makeTemplateObject(["\n            font-size: 14px;\n            font-weight: 600;\n            display: -webkit-box;\n            -webkit-line-clamp: 1;\n            -webkit-box-orient: vertical;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            ", "\n          "], ["\n            font-size: 14px;\n            font-weight: 600;\n            display: -webkit-box;\n            -webkit-line-clamp: 1;\n            -webkit-box-orient: vertical;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            ", "\n          "])), loading && index$7.SkletonStyles) }, { children: (_b = data === null || data === void 0 ? void 0 : data.productById) === null || _b === void 0 ? void 0 : _b.title })), jsxRuntime.jsx(index$4, { customCSS: react.css(templateObject_16 || (templateObject_16 = tslib.__makeTemplateObject(["\n            ", "\n            height: 20px;\n            font-size: 12px;\n            display: -webkit-box;\n            -webkit-line-clamp: 2;\n            -webkit-box-orient: vertical;\n            overflow: hidden;\n            text-overflow: ellipsis;\n          "], ["\n            ", "\n            height: 20px;\n            font-size: 12px;\n            display: -webkit-box;\n            -webkit-line-clamp: 2;\n            -webkit-box-orient: vertical;\n            overflow: hidden;\n            text-overflow: ellipsis;\n          "])), loading && index$7.SkletonStyles), dangerouslySetInnerHTML: {
                            __html: (_c = data === null || data === void 0 ? void 0 : data.productById) === null || _c === void 0 ? void 0 : _c.description,
                        } }), jsxRuntime.jsx(index$4, tslib.__assign({ customCSS: react.css(templateObject_17 || (templateObject_17 = tslib.__makeTemplateObject(["\n            font-weight: 600;\n            ", "\n          "], ["\n            font-weight: 600;\n            ", "\n          "])), loading && index$7.SkletonStyles) }, { children: "$ ".concat(numberWithComas(((_d = data === null || data === void 0 ? void 0 : data.productById) === null || _d === void 0 ? void 0 : _d.price) * quantity)) })), jsxRuntime.jsxs(index$5, tslib.__assign({ customCSS: react.css(templateObject_18 || (templateObject_18 = tslib.__makeTemplateObject(["\n            flex-direction: row;\n            justify-content: flex-start;\n            gap: 5px;\n          "], ["\n            flex-direction: row;\n            justify-content: flex-start;\n            gap: 5px;\n          "]))) }, { children: [jsxRuntime.jsx(index$2, tslib.__assign({ onClick: function () { return dispatch(cartshop.DeleteCart(id)); }, disabled: quantity === 1, customCSS: react.css(templateObject_19 || (templateObject_19 = tslib.__makeTemplateObject(["\n              display: flex;\n              flex-direction: row;\n              justify-content: center;\n              align-items: center;\n              width: 24px;\n              height: 24px;\n              padding: 0;\n              font-size: 10px;\n              background-color: ", ";\n            "], ["\n              display: flex;\n              flex-direction: row;\n              justify-content: center;\n              align-items: center;\n              width: 24px;\n              height: 24px;\n              padding: 0;\n              font-size: 10px;\n              background-color: ", ";\n            "])), (_f = (_e = customize === null || customize === void 0 ? void 0 : customize.colors) === null || _e === void 0 ? void 0 : _e.primary) !== null && _f !== void 0 ? _f : '#fe6a6a') }, { children: "-" })), jsxRuntime.jsx(index$2, tslib.__assign({ customCSS: react.css(templateObject_20 || (templateObject_20 = tslib.__makeTemplateObject(["\n              display: flex;\n              flex-direction: row;\n              justify-content: center;\n              align-items: center;\n              width: 24px;\n              height: 24px;\n              padding: 0;\n              font-size: 8px;\n              background-color: transparent;\n              border: 1px solid ", ";\n              color: ", ";\n            "], ["\n              display: flex;\n              flex-direction: row;\n              justify-content: center;\n              align-items: center;\n              width: 24px;\n              height: 24px;\n              padding: 0;\n              font-size: 8px;\n              background-color: transparent;\n              border: 1px solid ", ";\n              color: ", ";\n            "])), (_h = (_g = customize === null || customize === void 0 ? void 0 : customize.colors) === null || _g === void 0 ? void 0 : _g.primary) !== null && _h !== void 0 ? _h : '#fe6a6a', (_k = (_j = customize === null || customize === void 0 ? void 0 : customize.colors) === null || _j === void 0 ? void 0 : _j.primary) !== null && _k !== void 0 ? _k : '#fe6a6a') }, { children: quantity })), jsxRuntime.jsx(index$2, tslib.__assign({ onClick: function () { return dispatch(cartshop.AddCart(id)); }, customCSS: react.css(templateObject_21 || (templateObject_21 = tslib.__makeTemplateObject(["\n              display: flex;\n              flex-direction: row;\n              justify-content: center;\n              align-items: center;\n              width: 24px;\n              height: 24px;\n              padding: 0;\n              font-size: 10px;\n              background-color: ", ";\n            "], ["\n              display: flex;\n              flex-direction: row;\n              justify-content: center;\n              align-items: center;\n              width: 24px;\n              height: 24px;\n              padding: 0;\n              font-size: 10px;\n              background-color: ", ";\n            "])), (_m = (_l = customize === null || customize === void 0 ? void 0 : customize.colors) === null || _l === void 0 ? void 0 : _l.primary) !== null && _m !== void 0 ? _m : '#fe6a6a') }, { children: "+" })), jsxRuntime.jsx(index$2, tslib.__assign({ onClick: function () { return dispatch(cartshop.DeleteAllItemCart(id)); }, customCSS: react.css(templateObject_22 || (templateObject_22 = tslib.__makeTemplateObject(["\n              display: flex;\n              flex-direction: row;\n              justify-content: center;\n              align-items: center;\n              width: 24px;\n              height: 24px;\n              padding: 0;\n              font-size: 10px;\n              background-color: ", ";\n            "], ["\n              display: flex;\n              flex-direction: row;\n              justify-content: center;\n              align-items: center;\n              width: 24px;\n              height: 24px;\n              padding: 0;\n              font-size: 10px;\n              background-color: ", ";\n            "])), (_p = (_o = customize === null || customize === void 0 ? void 0 : customize.colors) === null || _o === void 0 ? void 0 : _o.primary) !== null && _p !== void 0 ? _p : '#fe6a6a') }, { children: jsxRuntime.jsx(index$3, { color: "white", height: "15px", width: "15px", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/JRO-0001/icons/Component%20199%20%E2%80%93%202.svg" }) }))] }))] }))] })));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22;

module.exports = AtomCartShop;
//# sourceMappingURL=index.js.map
