'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var useMutation = require('../../node_modules/@apollo/client/react/hooks/useMutation.js');
var index = require('../../node_modules/graphql-tag/lib/index.js');

var UPLOADMUTATION = index.gql(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n  mutation uploadFilePrivate($input: UploadFilePrivateInput!) {\n    uploadFilePrivate(input: $input) {\n      url\n      message\n      token\n      fileId\n      partialUrl\n    }\n  }\n"], ["\n  mutation uploadFilePrivate($input: UploadFilePrivateInput!) {\n    uploadFilePrivate(input: $input) {\n      url\n      message\n      token\n      fileId\n      partialUrl\n    }\n  }\n"])));
var uploadFile = function (url, file) {
    return fetch(url, {
        method: 'PUT',
        body: file,
        headers: {
            'Content-Type': 'application/octet-stream',
        },
        mode: 'cors',
    }).catch(function (e) { return console.error(e); });
};
var removeWhiteSpaces = function (name) { var _a, _b; return (_b = (_a = name === null || name === void 0 ? void 0 : name.replace(/\s+/g, '')) === null || _a === void 0 ? void 0 : _a.replace('(', '')) === null || _b === void 0 ? void 0 : _b.replace(')', ''); };
var useUploadFile = function (options) {
    var _a = tslib.__read(useMutation.useMutation(UPLOADMUTATION), 2), EXECUTEFILE = _a[0], data = _a[1];
    return tslib.__assign({ uploadFile: function (values, optionsByFn) {
            var _a, _b, _c, _d;
            return EXECUTEFILE({
                variables: {
                    input: {
                        memberId: values.memberId,
                        projectId: values.projectId,
                        isProfile: values.isProfile,
                        name: removeWhiteSpaces((_a = values.fileInput) === null || _a === void 0 ? void 0 : _a.name),
                        fileName: removeWhiteSpaces((_b = values.fileInput) === null || _b === void 0 ? void 0 : _b.name),
                        description: (_c = values === null || values === void 0 ? void 0 : values.descriptionType) !== null && _c !== void 0 ? _c : JSON.stringify({
                            size: values.fileInput.size,
                            type: "".concat((_d = values.fileInput) === null || _d === void 0 ? void 0 : _d.type),
                        }),
                    },
                },
                onCompleted: function (response) { return tslib.__awaiter(void 0, void 0, void 0, function () {
                    var result;
                    var _a, _b, _c, _d, _e;
                    return tslib.__generator(this, function (_f) {
                        switch (_f.label) {
                            case 0:
                                result = tslib.__assign(tslib.__assign({}, response.uploadFilePrivate), { name: removeWhiteSpaces((_a = values.fileInput) === null || _a === void 0 ? void 0 : _a.name), fileName: removeWhiteSpaces((_b = values.fileInput) === null || _b === void 0 ? void 0 : _b.name), description: (_c = values === null || values === void 0 ? void 0 : values.descriptionType) !== null && _c !== void 0 ? _c : {
                                        size: "".concat(values.fileInput.size),
                                        type: "".concat((_d = values.fileInput) === null || _d === void 0 ? void 0 : _d.type),
                                    } });
                                return [4 /*yield*/, uploadFile((_e = response === null || response === void 0 ? void 0 : response.uploadFilePrivate) === null || _e === void 0 ? void 0 : _e.partialUrl, values === null || values === void 0 ? void 0 : values.fileInput)];
                            case 1:
                                _f.sent();
                                options === null || options === void 0 ? void 0 : options.onCompleted(result);
                                optionsByFn === null || optionsByFn === void 0 ? void 0 : optionsByFn.onCompleted(result);
                                return [2 /*return*/, response];
                        }
                    });
                }); },
                onError: function (error) {
                    options === null || options === void 0 ? void 0 : options.onError(error);
                    optionsByFn === null || optionsByFn === void 0 ? void 0 : optionsByFn.onError(error);
                },
            });
        } }, data);
};
var templateObject_1;

exports.useUploadFile = useUploadFile;
//# sourceMappingURL=index.js.map
