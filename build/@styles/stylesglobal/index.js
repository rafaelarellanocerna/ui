'use strict';

var jsxRuntime = require('@emotion/react/jsx-runtime');
var _normalizer = require('./_normalizer.js');
var _fonts = require('./_fonts.js');

var StylesGlobal = function (_a) {
    var children = _a.children, scrollbarColor = _a.scrollbarColor, scrollbarWidth = _a.scrollbarWidth;
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(_normalizer, { scrollbarColor: scrollbarColor, scrollbarWidth: scrollbarWidth }), jsxRuntime.jsx(_fonts, {}), children] }));
};

module.exports = StylesGlobal;
//# sourceMappingURL=index.js.map
