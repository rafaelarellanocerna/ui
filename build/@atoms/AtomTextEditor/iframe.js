'use strict';

var tiptapCore_esm = require('../../node_modules/@tiptap/core/dist/tiptap-core.esm.js');

var Iframe = tiptapCore_esm.Node.create({
    name: 'iframe',
    group: 'block',
    atom: true,
    addOptions: function () {
        return {
            allowFullscreen: true,
            HTMLAttributes: {
                class: 'iframe-wrapper',
            },
        };
    },
    addAttributes: function () {
        var _this = this;
        return {
            src: {
                default: null,
            },
            frameborder: {
                default: 0,
            },
            allowfullscreen: {
                default: this.options.allowFullscreen,
                parseHTML: function () { return _this.options.allowFullscreen; },
            },
        };
    },
    parseHTML: function () {
        return [
            {
                tag: 'iframe',
            },
            {
                tag: 'br',
            },
        ];
    },
    renderHTML: function (_a) {
        var HTMLAttributes = _a.HTMLAttributes;
        return ['div', this.options.HTMLAttributes, ['iframe', HTMLAttributes]];
    },
    addCommands: function () {
        var _this = this;
        return {
            setIframe: function (options) {
                return function (_a) {
                    var tr = _a.tr, dispatch = _a.dispatch;
                    var selection = tr.selection;
                    var node = _this.type.create(options);
                    if (dispatch) {
                        tr.replaceRangeWith(selection.from, selection.to, node);
                    }
                    return true;
                };
            },
        };
    },
});

module.exports = Iframe;
//# sourceMappingURL=iframe.js.map
