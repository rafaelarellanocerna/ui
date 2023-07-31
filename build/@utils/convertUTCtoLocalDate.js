'use strict';

var convertUTC = require('./convertUTC.js');

var convertUTCtoLocalDate = function (date) {
    var _a, _b, _c;
    var convertDate = convertUTC(date);
    var toStringDate = (_a = convertDate.toString()) === null || _a === void 0 ? void 0 : _a.slice(0, 19).replace('T', ' ');
    var newDate = (_b = toStringDate === null || toStringDate === void 0 ? void 0 : toStringDate.slice(0, 10)) !== null && _b !== void 0 ? _b : '';
    var newTime = (_c = toStringDate === null || toStringDate === void 0 ? void 0 : toStringDate.slice(10, 16).replace(/ /g, '')) !== null && _c !== void 0 ? _c : '';
    return {
        date: newDate,
        time: newTime,
    };
};

module.exports = convertUTCtoLocalDate;
//# sourceMappingURL=convertUTCtoLocalDate.js.map
