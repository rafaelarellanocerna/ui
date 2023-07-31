'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var styled = require('./styled.js');

var InputTextError = function (props) {
    var formik = props.formik, id = props.id;
    return ((formik === null || formik === void 0 ? void 0 : formik.values["".concat(id)]) !== "" || (formik === null || formik === void 0 ? void 0 : formik.touched["".concat(id)])) &&
        (formik === null || formik === void 0 ? void 0 : formik.errors["".concat(id)]) ? (jsxRuntime.jsx(styled.InputErrorStyled, tslib.__assign({}, props, { children: formik === null || formik === void 0 ? void 0 : formik.errors["".concat(id)] }))) : (jsxRuntime.jsx(styled.InputErrorStyled, tslib.__assign({}, tslib.__assign(tslib.__assign({}, props), { children: null }))));
};

module.exports = InputTextError;
//# sourceMappingURL=error.js.map
