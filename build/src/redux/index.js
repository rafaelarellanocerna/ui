'use strict';

require('redux');
var persistReducer = require('../../node_modules/redux-persist/es/persistReducer.js');
var createWebStorage = require('../../node_modules/redux-persist/lib/storage/createWebStorage.js');
var index = require('./reducer/index.js');

/* eslint-disable @typescript-eslint/no-explicit-any */
var createNoopStorage = function () {
    return {
        getItem: function (_key) {
            return Promise.resolve(null);
        },
        setItem: function (_key, value) {
            return Promise.resolve(value);
        },
        removeItem: function (_key) {
            return Promise.resolve();
        },
    };
};
var storage = typeof window === 'undefined'
    ? createNoopStorage()
    : createWebStorage('local');
var PersistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['modal', 'sidebar'],
};
persistReducer(PersistConfig, index);
//# sourceMappingURL=index.js.map
