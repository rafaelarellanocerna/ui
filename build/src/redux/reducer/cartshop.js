'use strict';

var tslib = require('tslib');

var TypesReducers = {
    ADDCART: function (state, payload) {
        var find = state.find(function (item) { return item.id === payload; });
        return find
            ? state.map(function (item) {
                return item.id === find.id ? tslib.__assign(tslib.__assign({}, item), { quantity: item.quantity + 1 }) : item;
            })
            : tslib.__spreadArray(tslib.__spreadArray([], tslib.__read(state), false), [{ id: payload, quantity: 1 }], false);
    },
    DELETECART: function (state, payload) {
        var find = state.find(function (item) { return item.id === payload; });
        var filter = state.filter(function (item) { return item.id !== payload; });
        return find
            ? find.quantity - 1 === 0
                ? filter
                : state.map(function (item) {
                    return item.id === find.id
                        ? tslib.__assign(tslib.__assign({}, item), { quantity: item.quantity - 1 }) : item;
                })
            : filter;
    },
    DELETEALLITEMCART: function (state, payload) {
        return state.filter(function (item) { return item.id !== payload; });
    },
    DELETEALLCART: function () { return []; },
    SETCART: function (state, payload) {
        var split = payload.split('-');
        var find = state.find(function (item) { return item.id === split[0]; });
        return state.map(function (item) {
            var _a, _b;
            return item.id === (find === null || find === void 0 ? void 0 : find.id)
                ? tslib.__assign(tslib.__assign({}, item), { quantity: Number((_a = split[1]) !== null && _a !== void 0 ? _a : 0) > 0 ? Number((_b = split[1]) !== null && _b !== void 0 ? _b : 1) : 1 }) : item;
        });
    }
};
var initialState = [];
var CartShopReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    var type = action.type, payload = action.payload;
    var TypeReduce = TypesReducers[type];
    var Reduce = TypeReduce ? TypeReduce(state, payload) : state;
    return Reduce;
};

module.exports = CartShopReducer;
//# sourceMappingURL=cartshop.js.map
