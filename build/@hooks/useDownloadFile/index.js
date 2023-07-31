'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var useDownloadFile = function (values) {
    var _a, _b, _c;
    var url = values.url, name = values.name;
    var a = (_a = window === null || window === void 0 ? void 0 : window.document) === null || _a === void 0 ? void 0 : _a.createElement("a");
    a.href = url || "";
    a.target = "_blank";
    a.download = name;
    (_b = document === null || document === void 0 ? void 0 : document.body) === null || _b === void 0 ? void 0 : _b.appendChild(a);
    a.click();
    (_c = document === null || document === void 0 ? void 0 : document.body) === null || _c === void 0 ? void 0 : _c.removeChild(a);
};

exports.useDownloadFile = useDownloadFile;
//# sourceMappingURL=index.js.map
