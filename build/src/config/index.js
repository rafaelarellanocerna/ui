'use strict';

var _a, _b;
var CONFIG = {
    GRAPHQL_URL: process.env.GRAPHQL_SERVER_URL ||
        'https://gateway.staging.ixuapis.com/graphql/',
    GRAPHQL_CHAT_URL: 'https://chat-cs-service.staging.ixulabs.com/graphql',
    GRAPHQL_URL_WS: 'wss://chat-cs-service.staging.ixulabs.com/graphql',
    GRAPHQL_VIDEO_URL: ' https://rooms-service.staging.ixulabs.com/graphql',
    GRAPHQL_VIDEO_WSS_URL: 'wss://videocall.ixulabs.com',
    SITE: (_a = process.env.SITE) !== null && _a !== void 0 ? _a : '.sites.develop.ixulabs.com',
    APP_ENV: (_b = process.env.APP_ENV) !== null && _b !== void 0 ? _b : 'develop',
};

module.exports = CONFIG;
//# sourceMappingURL=index.js.map
