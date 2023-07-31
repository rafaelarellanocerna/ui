'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var TypesReducers = {
    TOGGLESIDEBAR: function (state, _) { return !state; },
    CLOSESIDEBAR: function () { return false; }
};
var initialState = true;
var SideBarReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    var type = action.type, payload = action.payload;
    var TypeReduce = TypesReducers[type];
    var Reduce = TypeReduce ? TypeReduce(state, payload) : state;
    return Reduce;
};

exports["default"] = SideBarReducer;
exports.initialState = initialState;
//# sourceMappingURL=sidebar.js.map
