'use strict';

var tiptapCore_esm = require('../../node_modules/@tiptap/core/dist/tiptap-core.esm.js');

var VideoCustom = tiptapCore_esm.Node.create({
    name: 'video',
    group: 'block',
    atom: true,
    addOptions: function () {
        return {
            controls: true,
            allowFullscreen: true,
            HTMLAttributes: {
                class: 'video-wrapper',
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
            controls: {
                default: true,
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
                tag: 'video',
            },
            {
                tag: 'br',
            },
        ];
    },
    renderHTML: function (_a) {
        var HTMLAttributes = _a.HTMLAttributes;
        return ['div', this.options.HTMLAttributes, ['video', HTMLAttributes]];
    },
    addCommands: function () {
        var _this = this;
        return {
            setVideo: function (options) {
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

module.exports = VideoCustom;
//# sourceMappingURL=video.js.map
