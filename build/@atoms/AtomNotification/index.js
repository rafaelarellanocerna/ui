'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var React = require('react');
var index = require('../AtomText/index.js');
var styles = require('./styles.js');

var AtomNotification = function (props) {
    var notification = props.notification, count = props.count, color = props.color;
    var _a = tslib.__read(React.useState(false), 2), clase = _a[0], setClase = _a[1];
    var _b = tslib.__read(React.useState(false), 2), showNotification = _b[0], setShowNotification = _b[1];
    var wrapperRef = React.useRef(null);
    function useOutsideAlerter(ref) {
        React.useEffect(function () {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setClase(clase);
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return function () {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedow", handleClickOutside);
            };
        }, [ref]);
    }
    React.useEffect(function () {
        if (count >= 1) {
            setShowNotification(true);
        }
        else {
            setShowNotification(false);
        }
    });
    useOutsideAlerter(wrapperRef);
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs(styles.NotificationContainer, tslib.__assign({ newNotification: showNotification }, { children: [count >= 1 ? (jsxRuntime.jsx(styles.Count, tslib.__assign({ color: color }, { children: jsxRuntime.jsx("span", { children: count }) }))) : (""), jsxRuntime.jsx("button", tslib.__assign({ type: "button", onClick: function () { return setClase(!clase); } }, { children: jsxRuntime.jsx("img", { src: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/icons/bell.svg", alt: "Notification icon" }) })), jsxRuntime.jsxs(styles.NotificationModal, tslib.__assign({ open: clase, ref: wrapperRef }, { children: [jsxRuntime.jsx(styles.Triangle, { open: clase }), jsxRuntime.jsx(styles.ModalConainer, { children: count !== 0 ? (jsxRuntime.jsx(styles.MessageSection, { children: notification })) : (jsxRuntime.jsx(index, tslib.__assign({ width: "auto" }, { children: "No tienes notificaciones nuevas." }))) })] }))] })) }));
};

module.exports = AtomNotification;
//# sourceMappingURL=index.js.map
