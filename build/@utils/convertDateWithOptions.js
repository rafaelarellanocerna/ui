'use strict';

var convertDateWithOptions = function (date, locale, options) {
    if (locale === void 0) { locale = 'en-US'; }
    var DateFormat = new Date(date).toLocaleString(locale, options);
    return "".concat(DateFormat);
};

module.exports = convertDateWithOptions;
//# sourceMappingURL=convertDateWithOptions.js.map
