'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');

var TypesReducers = {
    SETQUOTATION: function (_, payload) {
        return payload;
    },
    ADDQUOTATION: function (state, payload) {
        var _a;
        return (tslib.__assign(tslib.__assign({}, state), (_a = {}, _a[payload.id] = payload, _a)));
    },
    DELETEQUOTATION: function () { return ({}); }
};
var initialState = {};
var QuotationReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    var type = action.type, payload = action.payload;
    var TypeReduce = TypesReducers[type];
    var Reduce = TypeReduce ? TypeReduce(state, payload) : state;
    return Reduce;
};

exports["default"] = QuotationReducer;
exports.initialState = initialState;
//# sourceMappingURL=quotation.js.map
