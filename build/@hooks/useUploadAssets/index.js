'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var index = require('../../node_modules/graphql-tag/lib/index.js');
var ApolloClient = require('../../node_modules/@apollo/client/core/ApolloClient.js');
var inMemoryCache = require('../../node_modules/@apollo/client/cache/inmemory/inMemoryCache.js');
var useLazyQuery = require('../../node_modules/@apollo/client/react/hooks/useLazyQuery.js');

var QUERY_FILE = index.gql(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n  query UploadFileUrl($orgCode: String!, $path: String!, $fileName: String!) {\n    uploadFileUrl(orgCode: $orgCode, path: $path, fileName: $fileName) {\n      url\n      fileName\n    }\n  }\n"], ["\n  query UploadFileUrl($orgCode: String!, $path: String!, $fileName: String!) {\n    uploadFileUrl(orgCode: $orgCode, path: $path, fileName: $fileName) {\n      url\n      fileName\n    }\n  }\n"])));
var endpoint = 'https://file-service.staging.ixuapis.com/graphql/';
var uploadAttachment = function (url, file) {
    return fetch(url, {
        method: 'PUT',
        body: file !== null && file !== void 0 ? file : new Blob(),
        headers: {
            'Content-Type': 'application/octet-stream',
        },
        mode: 'cors',
    }).catch(function (e) { return console.error(e); });
};
var client = new ApolloClient.ApolloClient({
    uri: endpoint,
    cache: new inMemoryCache.InMemoryCache(),
});
var removeWhiteSpaces = function (name) { var _a, _b; return (_b = (_a = name === null || name === void 0 ? void 0 : name.replace(/\s+/g, '')) === null || _a === void 0 ? void 0 : _a.replace('(', '')) === null || _b === void 0 ? void 0 : _b.replace(')', ''); };
var useUploadAssets = function () {
    var _a = tslib.__read(useLazyQuery.useLazyQuery(QUERY_FILE, {
        client: client,
    }), 2), EXECUTE_UPLOAD_FILE = _a[0], _b = _a[1], loading = _b.loading, ErrorGlobal = _b.error;
    return {
        uploadAsset: function (props) {
            var file = props.file, options = props.options, name = props.name, orgcode = props.orgcode;
            return EXECUTE_UPLOAD_FILE({
                variables: {
                    orgCode: removeWhiteSpaces(orgcode !== null && orgcode !== void 0 ? orgcode : ''),
                    path: removeWhiteSpaces(name !== null && name !== void 0 ? name : ''),
                    fileName: removeWhiteSpaces(name !== null && name !== void 0 ? name : ''),
                },
                onCompleted: function (data) { return tslib.__awaiter(void 0, void 0, void 0, function () {
                    var _a, url, fileName;
                    return tslib.__generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = data === null || data === void 0 ? void 0 : data.uploadFileUrl, url = _a.url, fileName = _a.fileName;
                                return [4 /*yield*/, uploadAttachment(url, file !== null && file !== void 0 ? file : {})];
                            case 1:
                                _b.sent();
                                options === null || options === void 0 ? void 0 : options.onCompleted(data);
                                return [2 /*return*/, {
                                        url: url,
                                        fileName: fileName,
                                    }];
                        }
                    });
                }); },
                onError: function (error) {
                    options === null || options === void 0 ? void 0 : options.onError(error);
                },
            });
        },
        loading: loading,
        error: ErrorGlobal,
    };
};
var templateObject_1;

exports.useUploadAssets = useUploadAssets;
//# sourceMappingURL=index.js.map
