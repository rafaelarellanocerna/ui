'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var React = require('react');
var react = require('@emotion/react');
var index$4 = require('../../../@atoms/AtomText/index.js');
var index$1 = require('../../../@atoms/AtomWrapper/index.js');
var index$3 = require('../../../@atoms/AtomButton/index.js');
require('../../../@atoms/AtomCarruosell/index.js');
require('../../../@atoms/AtomCartShop/index.js');
var index$2 = require('../../../@atoms/AtomImage/index.js');
var index$5 = require('../../../@atoms/AtomIcon/index.js');
require('../../../@atoms/AtomContainer/style.js');
var index$6 = require('../../../@atoms/AtomLink/index.js');
require('../../../@atoms/AtomDropdownSidebar/admin/style.js');
require('../../../@atoms/AtomDropdownSidebar/default/style.js');
require('../../../@atoms/AtomDropdownSidebar/links/style.js');
var router = require('next/router');
require('lodash');
require('../../../@atoms/AtomInput/style.js');
require('uuid');
var reactRedux = require('react-redux');
require('../../../@atoms/AtomSeparator/style.js');
require('../../../@utils/uploadImage.js');
require('graphql-request');
require('../../../src/config/index.js');
require('framer-motion');
require('../../../@atoms/AtomImageEditor/pintura/pintura.js');
require('../../../@atoms/AtomImageEditor/react-pintura/PinturaEditor.js');
require('../../../@atoms/AtomImageEditor/react-pintura/PinturaEditorModal.js');
require('../../../@atoms/AtomImageEditor/react-pintura/PinturaEditorOverlay.js');
require('../../../@atoms/AtomImageEditor/styled.js');
require('../../../@atoms/AtomInput/inputWithPagination.js');
var index = require('../../../@atoms/AtomLoader/index.js');
require('../../../@atoms/AtomMaps/style.js');
require('../../../@atoms/AtomNotification/styles.js');
require('../../../@atoms/AtomProgressBar/component/style/index.js');
require('next/head');
require('../../../@atoms/AtomTable/style.js');
require('../../../@atoms/AtomTableQuery/css/button.js');
require('../../../@atoms/AtomTableQuery/css/inputs.js');
require('../../../@atoms/AtomTableQuery/styled.js');
require('../../../@atoms/AtomTableQuery/apollo/query/Products.js');
require('../../../@atoms/AtomTextEditor/index.js');
require('../../../@atoms/AtomTextEditorHermer/index.js');
require('../../../@molecules/MoleculePlayer/style.js');
var user = require('../../../@redux/actions/user.js');
require('../../../@hooks/usePermissions/index.js');
require('../../../@hooks/useUploadFile/index.js');
require('../../../@components/Alert/Context.js');
require('../../../@components/Button/downloadFile.js');
require('../../../@components/Chat/style.js');
require('../../../@components/Header/style.js');
require('../../../@types/schemas.js');

var OrganismUserDefault = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
    var dispatch = reactRedux.useDispatch();
    var router$1 = router.useRouter();
    var _0 = tslib.__read(React.useState(false), 2), logout = _0[0], setLogout = _0[1];
    var user$1 = reactRedux.useSelector(function (state) { return state.user; });
    var _1 = tslib.__read(React.useState(false), 2), showUserMenu = _1[0], setShowUserMenu = _1[1];
    var options = props.options, componentProps = props.componentProps;
    var ref = React.useRef(null);
    React.useEffect(function () {
        var handleClickOutside = function (event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setShowUserMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () {
            document.removeEventListener("mousedow", handleClickOutside);
        };
    }, [ref]);
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(index, { isLoading: logout, colorLoading: "#a01d7f", backgroundColor: "#00000010" }), (user$1 === null || user$1 === void 0 ? void 0 : user$1.id) ? (jsxRuntime.jsxs(index$1, tslib.__assign({ flexDirection: "row", maxWidth: "max-content", height: "max-content", alignItems: "center", justifyContent: "center" }, (_a = componentProps === null || componentProps === void 0 ? void 0 : componentProps.userProps) === null || _a === void 0 ? void 0 : _a.wrapperProps, { children: [jsxRuntime.jsx(index$2, tslib.__assign({ alt: "userPhoto", customCSS: react.css(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n              overflow: hidden;\n              background-color: #fff;\n              border-radius: 50%;\n              border: 2px solid #a01d7f;\n            "], ["\n              overflow: hidden;\n              background-color: #fff;\n              border-radius: 50%;\n              border: 2px solid #a01d7f;\n            "]))), height: "35px", width: "35px", src: "".concat(user$1.profile.photo ||
                            'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/MDCAO-0001/images/userDefault.avif') }, (_b = componentProps === null || componentProps === void 0 ? void 0 : componentProps.userProps) === null || _b === void 0 ? void 0 : _b.imageProps)), jsxRuntime.jsxs(index$1, tslib.__assign({ width: "max-content", padding: "0px 10px", position: "relative", height: "max-content" }, (_d = (_c = componentProps === null || componentProps === void 0 ? void 0 : componentProps.userProps) === null || _c === void 0 ? void 0 : _c.menuProps) === null || _d === void 0 ? void 0 : _d.wrapperProps, { children: [jsxRuntime.jsxs(index$3, tslib.__assign({ backgroundColor: "transparent", padding: "0px 15px", customCSS: react.css(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n                min-width: 130px;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                flex-direction: row;\n              "], ["\n                min-width: 130px;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                flex-direction: row;\n              "]))) }, (_g = (_f = (_e = componentProps === null || componentProps === void 0 ? void 0 : componentProps.userProps) === null || _e === void 0 ? void 0 : _e.menuProps) === null || _f === void 0 ? void 0 : _f.buttonProps) === null || _g === void 0 ? void 0 : _g.buttonProps, { onClick: function () { return setShowUserMenu(!showUserMenu); } }, { children: [jsxRuntime.jsx(index$4, tslib.__assign({ color: "#7F7F7F", fontWeight: 600, cursor: "pointer" }, (_k = (_j = (_h = componentProps === null || componentProps === void 0 ? void 0 : componentProps.userProps) === null || _h === void 0 ? void 0 : _h.menuProps) === null || _j === void 0 ? void 0 : _j.buttonProps) === null || _k === void 0 ? void 0 : _k.textProps, { customCSS: react.css(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n                  max-width: 120px;\n                  overflow: hidden;\n                  max-height: 100%;\n                "], ["\n                  max-width: 120px;\n                  overflow: hidden;\n                  max-height: 100%;\n                "]))) }, { children: "".concat((_l = user$1.profile.firstName) !== null && _l !== void 0 ? _l : 'User', " ").concat((_m = user$1.profile.lastName) !== null && _m !== void 0 ? _m : 'Default') })), jsxRuntime.jsx(index$5, tslib.__assign({ height: "14px", icon: "https://storage.googleapis.com/cdn-bucket-ixulabs-commons/frontend-library/icons/arrow-down-3101.svg", color: "#1F1F1F" }, (_q = (_p = (_o = componentProps === null || componentProps === void 0 ? void 0 : componentProps.userProps) === null || _o === void 0 ? void 0 : _o.menuProps) === null || _p === void 0 ? void 0 : _p.buttonProps) === null || _q === void 0 ? void 0 : _q.iconProps))] })), showUserMenu && (jsxRuntime.jsxs(index$1, tslib.__assign({ refObject: ref, position: "absolute", shadow: true, alignItems: "center", backgroundColor: "white", borderRadius: "5px", width: "80%", padding: "6px", customCSS: react.css(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n                  bottom: -5px;\n                  transform: translate(5%, 100%);\n                "], ["\n                  bottom: -5px;\n                  transform: translate(5%, 100%);\n                "]))) }, (_t = (_s = (_r = componentProps === null || componentProps === void 0 ? void 0 : componentProps.userProps) === null || _r === void 0 ? void 0 : _r.menuProps) === null || _s === void 0 ? void 0 : _s.menuDropdownProps) === null || _t === void 0 ? void 0 : _t.wrapperProps, { children: [options === null || options === void 0 ? void 0 : options.map(function (option) {
                                        var _a, _b, _c;
                                        return (jsxRuntime.jsx(index$6, tslib.__assign({ width: "100%", padding: "8px 10px", color: "#7F7F7F", fontSize: "10px", align: "center", customCSS: react.css(templateObject_5 || (templateObject_5 = tslib.__makeTemplateObject(["\n                      :hover {\n                        background-color: #dadada;\n                      }\n                      transition: background-color 0.3s ease;\n                    "], ["\n                      :hover {\n                        background-color: #dadada;\n                      }\n                      transition: background-color 0.3s ease;\n                    "]))) }, option, (_c = (_b = (_a = componentProps === null || componentProps === void 0 ? void 0 : componentProps.userProps) === null || _a === void 0 ? void 0 : _a.menuProps) === null || _b === void 0 ? void 0 : _b.menuDropdownProps) === null || _c === void 0 ? void 0 : _c.linkProps, { children: option.label }), option.id));
                                    }), jsxRuntime.jsx(index$3, tslib.__assign({ width: "100%", padding: "8px 10px", color: "#7F7F7F", borderRadius: "0px", backgroundColor: "transparent", fontSize: "10px", onClick: function () {
                                            setLogout(true);
                                            dispatch(user.Logout());
                                            router$1.reload();
                                        }, customCSS: react.css(templateObject_6 || (templateObject_6 = tslib.__makeTemplateObject(["\n                    :hover {\n                      background-color: #dadada;\n                    }\n                    transition: background-color 0.3s ease;\n                  "], ["\n                    :hover {\n                      background-color: #dadada;\n                    }\n                    transition: background-color 0.3s ease;\n                  "]))) }, (_w = (_v = (_u = componentProps === null || componentProps === void 0 ? void 0 : componentProps.userProps) === null || _u === void 0 ? void 0 : _u.menuProps) === null || _v === void 0 ? void 0 : _v.menuDropdownProps) === null || _w === void 0 ? void 0 : _w.buttonProps, { children: "Cerrar sesi\u00F3n" }))] })))] }))] }))) : (jsxRuntime.jsxs(index$1, tslib.__assign({ flexDirection: "row", maxWidth: "max-content", height: "100%", alignItems: "center", justifyContent: "center", customCSS: react.css(templateObject_7 || (templateObject_7 = tslib.__makeTemplateObject(["\n            @media only screen and (max-width: 1200px) {\n              display: none;\n            }\n          "], ["\n            @media only screen and (max-width: 1200px) {\n              display: none;\n            }\n          "]))) }, (_x = componentProps === null || componentProps === void 0 ? void 0 : componentProps.authProps) === null || _x === void 0 ? void 0 : _x.wrapperProps, { children: [jsxRuntime.jsx(index$6, tslib.__assign({ padding: "0", link: "/login", color: "#1F1F1F", margin: "0px 20px 0px 0px", fontSize: "12px" }, (_y = componentProps === null || componentProps === void 0 ? void 0 : componentProps.authProps) === null || _y === void 0 ? void 0 : _y.loginProps, { children: "Iniciar Sesi\u00F3n" })), jsxRuntime.jsx(index$6, tslib.__assign({ fontSize: "12px", link: "/register", fontWeight: 600, padding: "7px 15px", customCSS: react.css(templateObject_8 || (templateObject_8 = tslib.__makeTemplateObject(["\n              border-radius: 5px;\n              color: white;\n              background-color: #a01d7f;\n            "], ["\n              border-radius: 5px;\n              color: white;\n              background-color: #a01d7f;\n            "]))) }, (_z = componentProps === null || componentProps === void 0 ? void 0 : componentProps.authProps) === null || _z === void 0 ? void 0 : _z.registerProps, { children: "Registrarse" }))] })))] }));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;

module.exports = OrganismUserDefault;
//# sourceMappingURL=index.js.map
