'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var TypesReducers = {
    SETSURVEYDETAIL: function (_, payload) {
        return payload;
    }
    /* MEMEBERID: (): MemberIDReduceType => ``, */
};
var initialState = {
    memberId: "",
    surveyId: "",
    name: ""
};
var surveyDetail = function (state, action) {
    if (state === void 0) { state = initialState; }
    var type = action.type, payload = action.payload;
    var TypeReduce = TypesReducers[type];
    var Reduce = TypeReduce ? TypeReduce(state, payload) : state;
    return Reduce;
};

exports["default"] = surveyDetail;
exports.initialState = initialState;
//# sourceMappingURL=blog.js.map
