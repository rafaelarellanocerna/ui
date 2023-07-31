'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');

var TypesReducers = {
    SETALLCUSTOMIZE: function (_, payload) {
        return payload.value;
    },
    SETCUSTOMIZE: function (state, payload) {
        var _a;
        return (tslib.__assign(tslib.__assign({}, state), (_a = {}, _a[payload.key] = tslib.__assign(tslib.__assign({}, state[payload.key]), payload.value), _a)));
    }
};
var initialState = {
    fonts: {
        title: 'Montserrat',
        description: 'Montserrat'
    },
    colors: {
        primary: '#f1576c',
        secondary: '#ff686b',
        background: '#ffffff'
    },
    image: {
        main: {
            url: 'https://storage.googleapis.com/bucket_ixuabs_general/Ixulabs/template1/loginDefaul-img.png',
            file: undefined
        }
    },
    logo: {
        main: {
            url: 'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/logos/horizontal/logo.svg',
            file: undefined
        },
        tagline: 'Ixulabs'
    },
    button: {
        color: '#f1576c',
        radius: '4px'
    }
};
var Customize = function (state, action) {
    if (state === void 0) { state = initialState; }
    var type = action.type, payload = action.payload;
    var TypeReduce = TypesReducers[type];
    var Reduce = TypeReduce ? TypeReduce(state, payload) : state;
    return Reduce;
};

exports["default"] = Customize;
exports.initialState = initialState;
//# sourceMappingURL=customize.js.map
