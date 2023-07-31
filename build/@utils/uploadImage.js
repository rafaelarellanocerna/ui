'use strict';

var tslib = require('tslib');
var index = require('../node_modules/graphql-tag/lib/index.js');
var ApolloClient = require('../node_modules/@apollo/client/core/ApolloClient.js');
var inMemoryCache = require('../node_modules/@apollo/client/cache/inmemory/inMemoryCache.js');

var queryUpload = index.gql(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n  query UploadFileUrl($orgCode: String!, $path: String!, $fileName: String!) {\n    uploadFileUrl(orgCode: $orgCode, path: $path, fileName: $fileName) {\n      url\n      fileName\n    }\n  }\n"], ["\n  query UploadFileUrl($orgCode: String!, $path: String!, $fileName: String!) {\n    uploadFileUrl(orgCode: $orgCode, path: $path, fileName: $fileName) {\n      url\n      fileName\n    }\n  }\n"])));
var removeWhiteSpaces = function (name) { var _a, _b; return (_b = (_a = name === null || name === void 0 ? void 0 : name.replace(/\s+/g, '')) === null || _a === void 0 ? void 0 : _a.replace('(', '')) === null || _b === void 0 ? void 0 : _b.replace(')', ''); };
var uploadImage = function (image, options) { return tslib.__awaiter(void 0, void 0, void 0, function () {
    var endpoint, client, uploadFile, result;
    var _a, _b, _c;
    return tslib.__generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                endpoint = 'https://file-service.staging.ixuapis.com/graphql/';
                client = new ApolloClient.ApolloClient({
                    uri: endpoint,
                    cache: new inMemoryCache.InMemoryCache(),
                });
                uploadFile = function (url, file) {
                    return fetch(url, {
                        method: 'PUT',
                        body: file !== null && file !== void 0 ? file : new Blob(),
                        headers: {
                            'Content-Type': 'application/octet-stream',
                        },
                        mode: 'cors',
                    }).catch(function (e) { return console.error(e); });
                };
                return [4 /*yield*/, client
                        .query({
                        query: queryUpload,
                        variables: {
                            orgCode: removeWhiteSpaces((_a = options === null || options === void 0 ? void 0 : options.orgcode) !== null && _a !== void 0 ? _a : ''),
                            path: removeWhiteSpaces((_b = options === null || options === void 0 ? void 0 : options.name) !== null && _b !== void 0 ? _b : ''),
                            fileName: removeWhiteSpaces((_c = options === null || options === void 0 ? void 0 : options.name) !== null && _c !== void 0 ? _c : ''),
                        },
                    })
                        .then(function (res) { return tslib.__awaiter(void 0, void 0, void 0, function () {
                        var _a, _b, _c, _d, _e, _f;
                        return tslib.__generator(this, function (_g) {
                            switch (_g.label) {
                                case 0:
                                    if (!((_b = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.uploadFileUrl) === null || _b === void 0 ? void 0 : _b.url)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, uploadFile((_d = (_c = res === null || res === void 0 ? void 0 : res.data) === null || _c === void 0 ? void 0 : _c.uploadFileUrl) === null || _d === void 0 ? void 0 : _d.url, image !== null && image !== void 0 ? image : {})];
                                case 1:
                                    _g.sent();
                                    return [2 /*return*/, (_f = (_e = res === null || res === void 0 ? void 0 : res.data) === null || _e === void 0 ? void 0 : _e.uploadFileUrl) === null || _f === void 0 ? void 0 : _f.fileName];
                                case 2: return [2 /*return*/, image !== null && image !== void 0 ? image : {}];
                            }
                        });
                    }); })];
            case 1:
                result = _d.sent();
                return [2 /*return*/, result];
        }
    });
}); };
var templateObject_1;

module.exports = uploadImage;
//# sourceMappingURL=uploadImage.js.map
