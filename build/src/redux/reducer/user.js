'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var cookie = require('js-cookie');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cookie__default = /*#__PURE__*/_interopDefaultLegacy(cookie);

var TypesReducers = {
    SETUSER: function (_, payload) { return payload; },
    UPDATEUSER: function (state, payload) { return (tslib.__assign(tslib.__assign({}, state), payload)); },
    LOGOUT: function () {
        cookie__default["default"].remove('bearer');
        return initialState;
    },
};
var initialState = {};
var UserReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    var type = action.type, payload = action.payload;
    var TypeReduce = TypesReducers[type];
    var Reduce = TypeReduce ? TypeReduce(state, payload) : state;
    return Reduce;
};

exports.UserReducer = UserReducer;
exports["default"] = UserReducer;
exports.initialState = initialState;
//# sourceMappingURL=user.js.map
