'use strict';

var numberWithCommas = function (x, opt) {
    if (opt === void 0) { opt = {}; }
    var error = opt.error, prefix = opt.prefix, suffix = opt.suffix;
    if (!x)
        return error !== null && error !== void 0 ? error : null;
    var convertNumber = Number(x);
    if (!convertNumber)
        return error !== null && error !== void 0 ? error : null;
    return "".concat(prefix !== null && prefix !== void 0 ? prefix : '').concat(convertNumber === null || convertNumber === void 0 ? void 0 : convertNumber.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")).concat(suffix !== null && suffix !== void 0 ? suffix : '');
};

module.exports = numberWithCommas;
//# sourceMappingURL=numberWithComas.js.map
