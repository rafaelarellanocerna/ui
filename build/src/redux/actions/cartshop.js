'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var AddCart = function (payload) { return ({
    type: 'ADDCART',
    payload: payload
}); };
var DeleteCart = function (payload) { return ({
    type: 'DELETECART',
    payload: payload
}); };
var DeleteAllItemCart = function (payload) { return ({
    type: 'DELETEALLITEMCART',
    payload: payload
}); };

exports.AddCart = AddCart;
exports.DeleteAllItemCart = DeleteAllItemCart;
exports.DeleteCart = DeleteCart;
//# sourceMappingURL=cartshop.js.map
