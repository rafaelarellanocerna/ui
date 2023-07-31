'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var graphqlRequest = require('graphql-request');
var index = require('../src/config/index.js');

var removeWhiteSpaces = function (name) {
    return name.replace(/\s+/g, '').replace('(', '').replace(')', '');
};
var getUrlPrivate = function (privateData) { return tslib.__awaiter(void 0, void 0, void 0, function () {
    var mutation, memberId, projectId, folderId, fileInput, isProfile, sanitizedName, input, defaultEndpoint, values2, data;
    var _a, _b, _c, _d, _e;
    return tslib.__generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                mutation = "\nmutation uploadFilePrivate($input: UploadFilePrivateInput!) {\n  uploadFilePrivate(input: $input) {\n    url\n    message\n    token\n    fileId\n    partialUrl\n  }\n}";
                memberId = privateData.memberId, projectId = privateData.projectId, folderId = privateData.folderId, fileInput = privateData.fileInput, isProfile = privateData.isProfile;
                return [4 /*yield*/, removeWhiteSpaces(fileInput.name)];
            case 1:
                sanitizedName = _f.sent();
                input = folderId
                    ? {
                        memberId: memberId,
                        projectId: projectId,
                        folderId: folderId,
                        isProfile: isProfile,
                        name: sanitizedName,
                        fileName: sanitizedName,
                        description: JSON.stringify({
                            size: fileInput.size,
                            type: "".concat(fileInput === null || fileInput === void 0 ? void 0 : fileInput.type),
                        }),
                    }
                    : {
                        memberId: memberId,
                        projectId: projectId,
                        isProfile: isProfile,
                        name: sanitizedName,
                        fileName: sanitizedName,
                        description: JSON.stringify({
                            size: fileInput.size,
                            type: "".concat(fileInput === null || fileInput === void 0 ? void 0 : fileInput.type),
                        }),
                    };
                defaultEndpoint = "https://gateway.staging.ixuapis.com/graphql/";
                return [4 /*yield*/, graphqlRequest.request((_a = index.GRAPHQL_URL) !== null && _a !== void 0 ? _a : defaultEndpoint, mutation, {
                        input: input,
                    })];
            case 2:
                values2 = _f.sent();
                return [4 /*yield*/, {
                        url: (_b = values2 === null || values2 === void 0 ? void 0 : values2.uploadFilePrivate) === null || _b === void 0 ? void 0 : _b.url,
                        partialUrl: (_c = values2 === null || values2 === void 0 ? void 0 : values2.uploadFilePrivate) === null || _c === void 0 ? void 0 : _c.partialUrl,
                        fileName: sanitizedName,
                        fileId: (_d = values2 === null || values2 === void 0 ? void 0 : values2.uploadFilePrivate) === null || _d === void 0 ? void 0 : _d.fileId,
                        token: (_e = values2 === null || values2 === void 0 ? void 0 : values2.uploadFilePrivate) === null || _e === void 0 ? void 0 : _e.token,
                    }];
            case 3:
                data = _f.sent();
                return [2 /*return*/, data];
        }
    });
}); };
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
var uploadPrivateFile = function (data) {
    return data
        ? getUrlPrivate(data).then(function (response) { return tslib.__awaiter(void 0, void 0, void 0, function () {
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, uploadFile(response === null || response === void 0 ? void 0 : response.partialUrl, data === null || data === void 0 ? void 0 : data.fileInput)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response];
                }
            });
        }); })
        : data;
};

exports["default"] = uploadPrivateFile;
exports.uploadFile = uploadFile;
//# sourceMappingURL=uploadPrivateFile.js.map
