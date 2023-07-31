'use strict';

var tslib = require('tslib');
var index = require('../../node_modules/@apollo/client/link/context/index.js');
var index$1 = require('../../node_modules/@apollo/client/link/error/index.js');
var cookie = require('js-cookie');
var index$2 = require('../config/index.js');
var inMemoryCache = require('../../node_modules/@apollo/client/cache/inmemory/inMemoryCache.js');
var createHttpLink = require('../../node_modules/@apollo/client/link/http/createHttpLink.js');
var ApolloClient = require('../../node_modules/@apollo/client/core/ApolloClient.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cookie__default = /*#__PURE__*/_interopDefaultLegacy(cookie);

var cache = new inMemoryCache.InMemoryCache();
var httpLink = createHttpLink.createHttpLink({
    uri: "".concat(index$2.GRAPHQL_URL),
});
var authLink = index.setContext(function (_, _a) {
    var _b;
    var headers = _a.headers;
    return ({
        headers: tslib.__assign(tslib.__assign({}, headers), { authorization: "Bearer ".concat((_b = cookie__default["default"].get("bearer")) !== null && _b !== void 0 ? _b : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImQxNWM4MmFmLWI1ZTQtNGQ3YS1iN2FkLWJmMDgxMTk2MzJiNCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6Il9fb3duZXJfXyIsImV4cCI6MTY4NTcyNTEzMiwiaXNzIjoibG9jYWxob3N0OjgwMDAiLCJhdWQiOiJBUEkifQ.bU9C6gBadJVRNwVRXIK2yi7I5WcKyRuKC6goEyl4szk') }),
    });
});
var errorLink = index$1.onError(function (_a) {
    var graphQLErrors = _a.graphQLErrors, networkError = _a.networkError;
    if (graphQLErrors &&
        !graphQLErrors.filter(function (error) { return error.message === "INVALID_TOKEN"; }))
        graphQLErrors.forEach(function (_a) {
            var message = _a.message, locations = _a.locations, path = _a.path;
            return console.warn("[GraphQL error]: Message: ".concat(message, ", Location: ").concat(locations, ", Path: ").concat(path));
        });
    if (networkError)
        console.warn("[Network error]: ".concat(networkError));
});
var link = errorLink.concat(authLink.concat(httpLink));
var client = new ApolloClient.ApolloClient({
    link: link,
    ssrMode: true,
    cache: cache,
    connectToDevTools: true,
    queryDeduplication: true,
});

module.exports = client;
//# sourceMappingURL=index.js.map
