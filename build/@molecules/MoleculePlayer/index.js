'use strict';

var jsxRuntime = require('@emotion/react/jsx-runtime');
var style = require('./style.js');

var Player = function (props) {
    var video = props.video;
    return (jsxRuntime.jsx(style.ContainerVideo, { children: jsxRuntime.jsx("iframe", { src: video, frameBorder: "0", allow: "autoplay; fullscreen", title: "Player" }) }));
};

module.exports = Player;
//# sourceMappingURL=index.js.map
