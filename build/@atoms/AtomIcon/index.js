'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var React = require('react');
var styled = require('./styled.js');

var DefaultIcon = "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/PFS-0001/outline/house-beat.svg";
var Icon = function (props) {
    var icon = props.icon;
    var _a = tslib.__read(React.useState(""), 2), getIcon = _a[0], setGetIcon = _a[1];
    React.useEffect(function () {
        var fetchIcon = function () {
            return fetch(icon || DefaultIcon)
                .then(function (response) { return response.text(); })
                .then(function (res) { return res && setGetIcon(res); });
        };
        fetchIcon();
        return function () {
            setGetIcon(null);
        };
    }, [icon]);
    return getIcon ? (jsxRuntime.jsx(styled.IconContainer, tslib.__assign({}, props, { dangerouslySetInnerHTML: {
            __html: getIcon,
        } }))) : (jsxRuntime.jsx(styled.PlaceholderIcon, {}));
};

module.exports = Icon;
//# sourceMappingURL=index.js.map
