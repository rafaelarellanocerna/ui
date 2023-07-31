'use strict';

var convertLocalDateToUTC = function (vdate, time) {
    var _a, _b, _c, _d;
    if (vdate && time) {
        var dateb = "".concat(vdate, "T").concat(time);
        var isoDate = (_d = (_c = (_b = (_a = new Date(dateb)) === null || _a === void 0 ? void 0 : _a.toISOString()) === null || _b === void 0 ? void 0 : _b.replace('T', ' ')) === null || _c === void 0 ? void 0 : _c.replace('Z', '')) === null || _d === void 0 ? void 0 : _d.slice(0, -4);
        return isoDate;
    }
    return '';
};

module.exports = convertLocalDateToUTC;
//# sourceMappingURL=convertLocalDateToUTC.js.map
