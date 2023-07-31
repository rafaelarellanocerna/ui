'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var router = require('next/router');

var FixRoutePrivate = function (router) {
    return router.asPath
        .replace("dashboard/services/".concat(router.query.service, "/").concat(router.query.id), '')
        .replace('//', '/');
};
var FixRoutePublic = function (route) {
    return route.asPath
        .replace("feed/".concat(route.query.service), '')
        .replace("dashboard/services/".concat(route.query.service, "/").concat(route.query.id), '')
        .replace('//', '/');
};
var GetRoutePrivate = function (router) {
    return "/dashboard/services/".concat(router.query.service, "/").concat(router.query.id);
};
var useRouterPrivate = function () {
    var router$1 = router.useRouter();
    var route = GetRoutePrivate(router$1);
    return {
        next: router$1,
        asPath: router$1.asPath,
        asPathRelative: FixRoutePrivate(router$1),
        push: function (path) { return router$1.push("".concat(route).concat(path)); },
        FixRoutePrivate: FixRoutePrivate,
        FixRoutePublic: FixRoutePublic,
        GetRoutePrivate: GetRoutePrivate,
    };
};

exports.FixRoutePrivate = FixRoutePrivate;
exports.FixRoutePublic = FixRoutePublic;
exports.GetRoutePrivate = GetRoutePrivate;
exports["default"] = useRouterPrivate;
//# sourceMappingURL=index.js.map
