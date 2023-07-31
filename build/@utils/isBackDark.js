'use strict';

var TrainedNet = function (input) {
    var convert = new Float32Array([input.r, input.g, input.b]);
    return {
        white: 1 /
            (1 +
                1 /
                    Math.exp(-10.37766170501709 +
                        (12.204835891723633 * 1) /
                            (1 +
                                1 /
                                    Math.exp(6.169667720794678 -
                                        4.042087078094482 * (convert[0] || 0) -
                                        19.438833236694336 * (convert[1] || 0) +
                                        14.434931755065918 * (convert[2] || 0))) +
                        (11.918014526367188 * 1) /
                            (1 +
                                1 /
                                    Math.exp(2.6512327194213867 -
                                        3.513329029083252 * (convert[0] || 0) -
                                        17.795860290527344 * (convert[1] || 0) +
                                        17.435640335083008 * (convert[2] || 0))) +
                        (9.877058982849121 * 1) /
                            (1 +
                                1 /
                                    Math.exp(5.760010242462158 -
                                        3.2945780754089355 * (convert[0] || 0) -
                                        8.6066312789917 * (convert[1] || 0) -
                                        7.926300525665283 * (convert[2] || 0))))),
        black: 1 /
            (1 +
                1 /
                    Math.exp(10.386853218078613 -
                        (12.263668060302734 * 1) /
                            (1 +
                                1 /
                                    Math.exp(6.169667720794678 -
                                        4.042087078094482 * (convert[0] || 0) -
                                        19.438833236694336 * (convert[1] || 0) +
                                        14.434931755065918 * (convert[2] || 0))) -
                        (11.879143714904785 * 1) /
                            (1 +
                                1 /
                                    Math.exp(2.6512327194213867 -
                                        3.513329029083252 * (convert[0] || 0) -
                                        17.795860290527344 * (convert[1] || 0) +
                                        17.435640335083008 * (convert[2] || 0))) -
                        (9.865546226501465 * 1) /
                            (1 +
                                1 /
                                    Math.exp(5.760010242462158 -
                                        3.2945780754089355 * (convert[0] || 0) -
                                        8.6066312789917 * (convert[1] || 0) -
                                        7.926300525665283 * (convert[2] || 0))))),
    };
};
var hexToRgb = function (hex) {
    var _a;
    var result = (_a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)) !== null && _a !== void 0 ? _a : [];
    return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
    };
};
var isBackDark = function (hex) {
    var color = TrainedNet(hexToRgb(hex));
    if (color.black > color.white) {
        return '#373737';
    }
    return '#fff';
};

module.exports = isBackDark;
//# sourceMappingURL=isBackDark.js.map
