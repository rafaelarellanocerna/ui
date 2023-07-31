'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var lodash = require('lodash');
var style = require('./style.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var lodash__default = /*#__PURE__*/_interopDefaultLegacy(lodash);

var AtomInputTextError = function (props) {
    var formik = props.formik, id = props.id, error = props.error;
    return formik ? (((lodash__default["default"].get(formik === null || formik === void 0 ? void 0 : formik.values, id) !== "" ||
        lodash__default["default"].get(formik === null || formik === void 0 ? void 0 : formik.touched, id)) &&
        lodash__default["default"].get(formik === null || formik === void 0 ? void 0 : formik.errors, id)) ||
        error ? (jsxRuntime.jsxs(style.InputErrorStyled, tslib.__assign({}, props, { children: [lodash__default["default"].get(formik === null || formik === void 0 ? void 0 : formik.errors, id), " ", error !== null && error !== void 0 ? error : ''] }))) : null) : (jsxRuntime.jsx(jsxRuntime.Fragment, {}));
};

module.exports = AtomInputTextError;
//# sourceMappingURL=error.js.map
