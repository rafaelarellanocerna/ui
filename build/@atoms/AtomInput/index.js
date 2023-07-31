'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var inputCheckbox = require('./inputCheckbox.js');
var inputDragDrop = require('./inputDragDrop.js');
var inputDragDropFile = require('./inputDragDropFile.js');
var inputDragDropMultiple = require('./inputDragDropMultiple.js');
var inputDragDropMultipleFile = require('./inputDragDropMultipleFile.js');
var inputDragDropMultipleImages = require('./inputDragDropMultipleImages.js');
var inputRadioButton = require('./inputRadioButton.js');
var inputRange = require('./inputRange.js');
var inputSelect = require('./inputSelect.js');
var inputTexbox = require('./inputTexbox.js');
var inputText = require('./inputText.js');
var inputToggle = require('./inputToggle.js');

var Input = function (props) {
    var type = props.type;
    switch (type) {
        case "checkbox":
            return jsxRuntime.jsx(inputCheckbox, tslib.__assign({}, props));
        case "select":
            return jsxRuntime.jsx(inputSelect, tslib.__assign({}, props));
        case "range":
            return jsxRuntime.jsx(inputRange, tslib.__assign({}, props));
        case "textbox":
            return jsxRuntime.jsx(inputTexbox, tslib.__assign({}, props));
        case "dragdrop":
            return jsxRuntime.jsx(inputDragDrop, tslib.__assign({}, props));
        case "dragdropMultiple":
            return jsxRuntime.jsx(inputDragDropMultiple, tslib.__assign({}, props));
        case "dragdropMultipleImages":
            return jsxRuntime.jsx(inputDragDropMultipleImages, tslib.__assign({}, props));
        case "toggle":
            return jsxRuntime.jsx(inputToggle, tslib.__assign({}, props));
        case "radio":
            return jsxRuntime.jsx(inputRadioButton, tslib.__assign({}, props));
        case "dragDropFile":
            return jsxRuntime.jsx(inputDragDropFile, tslib.__assign({}, props));
        case "dragdropMultipleFiles":
            return jsxRuntime.jsx(inputDragDropMultipleFile, tslib.__assign({}, props));
        default:
            return jsxRuntime.jsx(inputText, tslib.__assign({}, props));
    }
};

module.exports = Input;
//# sourceMappingURL=index.js.map
