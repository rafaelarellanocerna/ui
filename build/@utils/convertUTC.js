'use strict';

var convertUTC = function (date) {
    var _a;
    var newdate = new Date(date).toString().replace('T', ' ');
    var year = newdate === null || newdate === void 0 ? void 0 : newdate.slice(11, 15);
    var hour = newdate === null || newdate === void 0 ? void 0 : newdate.slice(16, 25);
    var day = newdate === null || newdate === void 0 ? void 0 : newdate.slice(8, 10);
    var month = (_a = date === null || date === void 0 ? void 0 : date.toString()) === null || _a === void 0 ? void 0 : _a.slice(5, 7);
    return "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hour);
};

module.exports = convertUTC;
//# sourceMappingURL=convertUTC.js.map
