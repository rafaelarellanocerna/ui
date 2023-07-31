'use strict';

var changeBrightness = function (color, amount) {
    return "#".concat(color
        .replace(/^#/, '')
        .replace(/../g, function (colorReduce) {
        return "0".concat(Math.min(255, Math.max(0, parseInt(colorReduce, 16) + amount)).toString(16)).substr(-2);
    }));
};

module.exports = changeBrightness;
//# sourceMappingURL=changeBrightness.js.map
