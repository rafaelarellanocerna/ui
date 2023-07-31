'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var TypesReducers = {
    SETMEMBER: function (_, payload) { return payload; },
    /* MEMEBERID: (): MemberIDReduceType => ``, */
};
var initialState = "";
var memberID = function (state, action) {
    if (state === void 0) { state = initialState; }
    var type = action.type, payload = action.payload;
    var TypeReduce = TypesReducers[type];
    var Reduce = TypeReduce ? TypeReduce(state, payload) : state;
    return Reduce;
};

exports["default"] = memberID;
exports.initialState = initialState;
//# sourceMappingURL=memberId.js.map
