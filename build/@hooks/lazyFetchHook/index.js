'use strict';

var tslib = require('tslib');
var React = require('react');

var settingsInit = {
    onCompleted: function () {
        return null;
    },
    onError: function () {
        return null;
    },
};
var useLazyFetch = function (url, setings, options) {
    if (setings === void 0) { setings = settingsInit; }
    var onCompleted = setings.onCompleted, onError = setings.onError;
    var _a = tslib.__read(React.useState(false), 2), refetchState = _a[0], setRefetchState = _a[1];
    var _b = tslib.__read(React.useState(false), 2), lazyRefetchState = _b[0], setLazyRefetchState = _b[1];
    var _c = tslib.__read(React.useState({
        data: false,
        error: { status: false, message: null },
        loading: false,
    }), 2), fetchState = _c[0], setFetchState = _c[1];
    var lazyFetch = function () { return setLazyRefetchState(true); };
    var refetch = function () { return setRefetchState(!refetchState); };
    React.useEffect(function () {
        if (fetchState.data && onCompleted && lazyRefetchState) {
            onCompleted();
        }
    }, [fetchState.data]);
    React.useEffect(function () {
        if (fetchState.error && onError && lazyRefetchState) {
            onError();
        }
    }, [fetchState.error]);
    React.useEffect(function () {
        var fetchData = function () { return tslib.__awaiter(void 0, void 0, void 0, function () {
            var response, data, isError, error_1;
            var _a;
            return tslib.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        setFetchState({ error: null, data: null, loading: true });
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch(url, tslib.__assign({}, options))];
                    case 2:
                        response = _b.sent();
                        return [4 /*yield*/, response.json()];
                    case 3:
                        data = _b.sent();
                        isError = !!((_a = data === null || data === void 0 ? void 0 : data.errors) === null || _a === void 0 ? void 0 : _a.find(function (error) { return error.status === 400; })) ||
                            (data === null || data === void 0 ? void 0 : data.status) === 400;
                        if (isError) {
                            setFetchState({ data: null, error: data, loading: false });
                        }
                        else {
                            setFetchState({ error: null, data: data, loading: false });
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _b.sent();
                        setFetchState({ data: null, error: error_1, loading: false });
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        if (lazyRefetchState) {
            fetchData();
        }
    }, [lazyRefetchState, refetchState, url]);
    return [lazyFetch, tslib.__assign(tslib.__assign({}, fetchState), { isFetch: lazyRefetchState, refetch: refetch })];
};

module.exports = useLazyFetch;
//# sourceMappingURL=index.js.map
