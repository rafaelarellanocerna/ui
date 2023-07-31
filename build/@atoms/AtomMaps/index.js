'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var index = require('./maps/mx/index.js');

var Maps = function (props) {
    var place = props.place;
    switch (place) {
        case "mx":
            return jsxRuntime.jsx(index, tslib.__assign({}, props));
        case "co":
            return jsxRuntime.jsx("p", { children: "Mapa de Colombia" });
        case "us":
            return jsxRuntime.jsx("p", { children: "Mapa de US" });
        default:
            return jsxRuntime.jsx(index, tslib.__assign({}, props));
    }
};

module.exports = Maps;
//# sourceMappingURL=index.js.map
