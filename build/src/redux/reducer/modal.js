'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var TypesReducers = {
    SETMODAL: function (_, payload) { return payload; },
    CLOSEMODAL: function () { return false; },
    OPENMODAL: function () { return true; }
};
var initialState = false;
var ModalReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    var type = action.type, payload = action.payload;
    var TypeReduce = TypesReducers[type];
    var Reduce = TypeReduce ? TypeReduce(state, payload) : state;
    return Reduce;
};

exports["default"] = ModalReducer;
exports.initialState = initialState;
//# sourceMappingURL=modal.js.map
