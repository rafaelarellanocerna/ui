'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var styledComponents_esm = require('../../node_modules/styled-components/dist/styled-components.esm.js');

var NotificationContainer = styledComponents_esm["default"].div(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n  width: 25px;\n  height: 25px;\n  cursor: pointer;\n  margin-right: 23px;\n  display: flex;\n  justify-content: center;\n  position: relative;\n  margin-right: 190px;\n\n  > button {\n    outline: none;\n    background-color: transparent;\n    border: none;\n    width: 25px;\n    height: 25px;\n    cursor: pointer;\n    img {\n      width: 20px;\n      height: auto;\n      margin: 0 30px 0 0 !important;\n      display: block;\n      font-size: 40px;\n      margin: 50px auto 0;\n      color: #9e9e9e;\n      -webkit-animation: ", ";\n      -webkit-transform-origin: 50% 4px;\n      -moz-animation: ", ";\n      -moz-transform-origin: 50% 4px;\n      animation: ", ";\n      transform-origin: 50% 4px;\n    }\n\n    @-webkit-keyframes ring {\n      0% {\n        -webkit-transform: rotateZ(0);\n      }\n      1% {\n        -webkit-transform: rotateZ(30deg);\n      }\n      3% {\n        -webkit-transform: rotateZ(-28deg);\n      }\n      5% {\n        -webkit-transform: rotateZ(34deg);\n      }\n      7% {\n        -webkit-transform: rotateZ(-32deg);\n      }\n      9% {\n        -webkit-transform: rotateZ(30deg);\n      }\n      11% {\n        -webkit-transform: rotateZ(-28deg);\n      }\n      13% {\n        -webkit-transform: rotateZ(26deg);\n      }\n      15% {\n        -webkit-transform: rotateZ(-24deg);\n      }\n      17% {\n        -webkit-transform: rotateZ(22deg);\n      }\n      19% {\n        -webkit-transform: rotateZ(-20deg);\n      }\n      21% {\n        -webkit-transform: rotateZ(18deg);\n      }\n      23% {\n        -webkit-transform: rotateZ(-16deg);\n      }\n      25% {\n        -webkit-transform: rotateZ(14deg);\n      }\n      27% {\n        -webkit-transform: rotateZ(-12deg);\n      }\n      29% {\n        -webkit-transform: rotateZ(10deg);\n      }\n      31% {\n        -webkit-transform: rotateZ(-8deg);\n      }\n      33% {\n        -webkit-transform: rotateZ(6deg);\n      }\n      35% {\n        -webkit-transform: rotateZ(-4deg);\n      }\n      37% {\n        -webkit-transform: rotateZ(2deg);\n      }\n      39% {\n        -webkit-transform: rotateZ(-1deg);\n      }\n      41% {\n        -webkit-transform: rotateZ(1deg);\n      }\n\n      43% {\n        -webkit-transform: rotateZ(0);\n      }\n      100% {\n        -webkit-transform: rotateZ(0);\n      }\n    }\n\n    @-moz-keyframes ring {\n      0% {\n        -moz-transform: rotate(0);\n      }\n      1% {\n        -moz-transform: rotate(30deg);\n      }\n      3% {\n        -moz-transform: rotate(-28deg);\n      }\n      5% {\n        -moz-transform: rotate(34deg);\n      }\n      7% {\n        -moz-transform: rotate(-32deg);\n      }\n      9% {\n        -moz-transform: rotate(30deg);\n      }\n      11% {\n        -moz-transform: rotate(-28deg);\n      }\n      13% {\n        -moz-transform: rotate(26deg);\n      }\n      15% {\n        -moz-transform: rotate(-24deg);\n      }\n      17% {\n        -moz-transform: rotate(22deg);\n      }\n      19% {\n        -moz-transform: rotate(-20deg);\n      }\n      21% {\n        -moz-transform: rotate(18deg);\n      }\n      23% {\n        -moz-transform: rotate(-16deg);\n      }\n      25% {\n        -moz-transform: rotate(14deg);\n      }\n      27% {\n        -moz-transform: rotate(-12deg);\n      }\n      29% {\n        -moz-transform: rotate(10deg);\n      }\n      31% {\n        -moz-transform: rotate(-8deg);\n      }\n      33% {\n        -moz-transform: rotate(6deg);\n      }\n      35% {\n        -moz-transform: rotate(-4deg);\n      }\n      37% {\n        -moz-transform: rotate(2deg);\n      }\n      39% {\n        -moz-transform: rotate(-1deg);\n      }\n      41% {\n        -moz-transform: rotate(1deg);\n      }\n\n      43% {\n        -moz-transform: rotate(0);\n      }\n      100% {\n        -moz-transform: rotate(0);\n      }\n    }\n\n    @keyframes ring {\n      0% {\n        transform: rotate(0);\n      }\n      1% {\n        transform: rotate(30deg);\n      }\n      3% {\n        transform: rotate(-28deg);\n      }\n      5% {\n        transform: rotate(34deg);\n      }\n      7% {\n        transform: rotate(-32deg);\n      }\n      9% {\n        transform: rotate(30deg);\n      }\n      11% {\n        transform: rotate(-28deg);\n      }\n      13% {\n        transform: rotate(26deg);\n      }\n      15% {\n        transform: rotate(-24deg);\n      }\n      17% {\n        transform: rotate(22deg);\n      }\n      19% {\n        transform: rotate(-20deg);\n      }\n      21% {\n        transform: rotate(18deg);\n      }\n      23% {\n        transform: rotate(-16deg);\n      }\n      25% {\n        transform: rotate(14deg);\n      }\n      27% {\n        transform: rotate(-12deg);\n      }\n      29% {\n        transform: rotate(10deg);\n      }\n      31% {\n        transform: rotate(-8deg);\n      }\n      33% {\n        transform: rotate(6deg);\n      }\n      35% {\n        transform: rotate(-4deg);\n      }\n      37% {\n        transform: rotate(2deg);\n      }\n      39% {\n        transform: rotate(-1deg);\n      }\n      41% {\n        transform: rotate(1deg);\n      }\n\n      43% {\n        transform: rotate(0);\n      }\n      100% {\n        transform: rotate(0);\n      }\n    }\n  }\n"], ["\n  width: 25px;\n  height: 25px;\n  cursor: pointer;\n  margin-right: 23px;\n  display: flex;\n  justify-content: center;\n  position: relative;\n  margin-right: 190px;\n\n  > button {\n    outline: none;\n    background-color: transparent;\n    border: none;\n    width: 25px;\n    height: 25px;\n    cursor: pointer;\n    img {\n      width: 20px;\n      height: auto;\n      margin: 0 30px 0 0 !important;\n      display: block;\n      font-size: 40px;\n      margin: 50px auto 0;\n      color: #9e9e9e;\n      -webkit-animation: ", ";\n      -webkit-transform-origin: 50% 4px;\n      -moz-animation: ", ";\n      -moz-transform-origin: 50% 4px;\n      animation: ", ";\n      transform-origin: 50% 4px;\n    }\n\n    @-webkit-keyframes ring {\n      0% {\n        -webkit-transform: rotateZ(0);\n      }\n      1% {\n        -webkit-transform: rotateZ(30deg);\n      }\n      3% {\n        -webkit-transform: rotateZ(-28deg);\n      }\n      5% {\n        -webkit-transform: rotateZ(34deg);\n      }\n      7% {\n        -webkit-transform: rotateZ(-32deg);\n      }\n      9% {\n        -webkit-transform: rotateZ(30deg);\n      }\n      11% {\n        -webkit-transform: rotateZ(-28deg);\n      }\n      13% {\n        -webkit-transform: rotateZ(26deg);\n      }\n      15% {\n        -webkit-transform: rotateZ(-24deg);\n      }\n      17% {\n        -webkit-transform: rotateZ(22deg);\n      }\n      19% {\n        -webkit-transform: rotateZ(-20deg);\n      }\n      21% {\n        -webkit-transform: rotateZ(18deg);\n      }\n      23% {\n        -webkit-transform: rotateZ(-16deg);\n      }\n      25% {\n        -webkit-transform: rotateZ(14deg);\n      }\n      27% {\n        -webkit-transform: rotateZ(-12deg);\n      }\n      29% {\n        -webkit-transform: rotateZ(10deg);\n      }\n      31% {\n        -webkit-transform: rotateZ(-8deg);\n      }\n      33% {\n        -webkit-transform: rotateZ(6deg);\n      }\n      35% {\n        -webkit-transform: rotateZ(-4deg);\n      }\n      37% {\n        -webkit-transform: rotateZ(2deg);\n      }\n      39% {\n        -webkit-transform: rotateZ(-1deg);\n      }\n      41% {\n        -webkit-transform: rotateZ(1deg);\n      }\n\n      43% {\n        -webkit-transform: rotateZ(0);\n      }\n      100% {\n        -webkit-transform: rotateZ(0);\n      }\n    }\n\n    @-moz-keyframes ring {\n      0% {\n        -moz-transform: rotate(0);\n      }\n      1% {\n        -moz-transform: rotate(30deg);\n      }\n      3% {\n        -moz-transform: rotate(-28deg);\n      }\n      5% {\n        -moz-transform: rotate(34deg);\n      }\n      7% {\n        -moz-transform: rotate(-32deg);\n      }\n      9% {\n        -moz-transform: rotate(30deg);\n      }\n      11% {\n        -moz-transform: rotate(-28deg);\n      }\n      13% {\n        -moz-transform: rotate(26deg);\n      }\n      15% {\n        -moz-transform: rotate(-24deg);\n      }\n      17% {\n        -moz-transform: rotate(22deg);\n      }\n      19% {\n        -moz-transform: rotate(-20deg);\n      }\n      21% {\n        -moz-transform: rotate(18deg);\n      }\n      23% {\n        -moz-transform: rotate(-16deg);\n      }\n      25% {\n        -moz-transform: rotate(14deg);\n      }\n      27% {\n        -moz-transform: rotate(-12deg);\n      }\n      29% {\n        -moz-transform: rotate(10deg);\n      }\n      31% {\n        -moz-transform: rotate(-8deg);\n      }\n      33% {\n        -moz-transform: rotate(6deg);\n      }\n      35% {\n        -moz-transform: rotate(-4deg);\n      }\n      37% {\n        -moz-transform: rotate(2deg);\n      }\n      39% {\n        -moz-transform: rotate(-1deg);\n      }\n      41% {\n        -moz-transform: rotate(1deg);\n      }\n\n      43% {\n        -moz-transform: rotate(0);\n      }\n      100% {\n        -moz-transform: rotate(0);\n      }\n    }\n\n    @keyframes ring {\n      0% {\n        transform: rotate(0);\n      }\n      1% {\n        transform: rotate(30deg);\n      }\n      3% {\n        transform: rotate(-28deg);\n      }\n      5% {\n        transform: rotate(34deg);\n      }\n      7% {\n        transform: rotate(-32deg);\n      }\n      9% {\n        transform: rotate(30deg);\n      }\n      11% {\n        transform: rotate(-28deg);\n      }\n      13% {\n        transform: rotate(26deg);\n      }\n      15% {\n        transform: rotate(-24deg);\n      }\n      17% {\n        transform: rotate(22deg);\n      }\n      19% {\n        transform: rotate(-20deg);\n      }\n      21% {\n        transform: rotate(18deg);\n      }\n      23% {\n        transform: rotate(-16deg);\n      }\n      25% {\n        transform: rotate(14deg);\n      }\n      27% {\n        transform: rotate(-12deg);\n      }\n      29% {\n        transform: rotate(10deg);\n      }\n      31% {\n        transform: rotate(-8deg);\n      }\n      33% {\n        transform: rotate(6deg);\n      }\n      35% {\n        transform: rotate(-4deg);\n      }\n      37% {\n        transform: rotate(2deg);\n      }\n      39% {\n        transform: rotate(-1deg);\n      }\n      41% {\n        transform: rotate(1deg);\n      }\n\n      43% {\n        transform: rotate(0);\n      }\n      100% {\n        transform: rotate(0);\n      }\n    }\n  }\n"])), function (props) {
    return props.newNotification === true
        ? "ring 4s 0.7s ease-in-out infinite"
        : "none";
}, function (props) {
    return props.newNotification === true
        ? "ring 4s 0.7s ease-in-out infinite"
        : "none";
}, function (props) {
    return props.newNotification === true
        ? "ring 4s 0.7s ease-in-out infinite"
        : "none";
});
var Count = styledComponents_esm["default"].div(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: ", ";\n  position: absolute;\n  right: -10px;\n  top: -10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  span {\n    font-size: 14px;\n    font-weight: 600;\n    color: white;\n    padding: 2px;\n  }\n"], ["\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: ", ";\n  position: absolute;\n  right: -10px;\n  top: -10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  span {\n    font-size: 14px;\n    font-weight: 600;\n    color: white;\n    padding: 2px;\n  }\n"])), function (_a) {
    var color = _a.color;
    return color || "#fe6a6a";
});
var NotificationModal = styledComponents_esm["default"].div(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n  width: auto;\n  height: auto;\n  min-width: 200px;\n  padding: 30px;\n  z-index: 11;\n  position: absolute;\n  background-color: transparent;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  display: ", ";\n"], ["\n  width: auto;\n  height: auto;\n  min-width: 200px;\n  padding: 30px;\n  z-index: 11;\n  position: absolute;\n  background-color: transparent;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  display: ", ";\n"])), function (props) { return (props.open === true ? "flex" : "none"); });
var ModalConainer = styledComponents_esm["default"].div(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n  width: 100;\n  // max-height: 350px;\n  height: auto;\n  padding: 30px;\n  z-index: 11;\n  position: absolute;\n  background-color: #fff;\n  filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.25));\n  border-radius: 5px;\n  right: -75px;\n  top: 40px;\n  opacity: 1;\n  flex-direction: column;\n  animation: Notf 0.8s forwards;\n\n  @keyframes Notf {\n    0% {\n      transform: translateX(3000px);\n    }\n    60% {\n      transform: translateX(-25px);\n    }\n    75% {\n      transform: translateX(10px);\n    }\n    90% {\n      transform: translateX(-5px);\n    }\n  }\n"], ["\n  width: 100;\n  // max-height: 350px;\n  height: auto;\n  padding: 30px;\n  z-index: 11;\n  position: absolute;\n  background-color: #fff;\n  filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.25));\n  border-radius: 5px;\n  right: -75px;\n  top: 40px;\n  opacity: 1;\n  flex-direction: column;\n  animation: Notf 0.8s forwards;\n\n  @keyframes Notf {\n    0% {\n      transform: translateX(3000px);\n    }\n    60% {\n      transform: translateX(-25px);\n    }\n    75% {\n      transform: translateX(10px);\n    }\n    90% {\n      transform: translateX(-5px);\n    }\n  }\n"])));
var MessageSection = styledComponents_esm["default"].div(templateObject_5 || (templateObject_5 = tslib.__makeTemplateObject(["\n  width: auto;\n  height: auto;\n  max-height: 30vh;\n  overflow-y: auto;\n  /* &::-webkit-scrollbar {\n    display: none;\n  } */\n"], ["\n  width: auto;\n  height: auto;\n  max-height: 30vh;\n  overflow-y: auto;\n  /* &::-webkit-scrollbar {\n    display: none;\n  } */\n"])));
var SectionButton = styledComponents_esm["default"].div(templateObject_6 || (templateObject_6 = tslib.__makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  padding: 10px;\n\n  button {\n    outline: none;\n    background-color: transparent !important;\n    width: auto !important;\n    cursor: pointer;\n    margin-top: 15px;\n    color: ", ";\n    height: auto !important;\n    display: flex !important;\n    justify-content: center;\n    align-items: center;\n    &:hover {\n      filter: none;\n    }\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  padding: 10px;\n\n  button {\n    outline: none;\n    background-color: transparent !important;\n    width: auto !important;\n    cursor: pointer;\n    margin-top: 15px;\n    color: ", ";\n    height: auto !important;\n    display: flex !important;\n    justify-content: center;\n    align-items: center;\n    &:hover {\n      filter: none;\n    }\n  }\n"])), function (_a) {
    var color = _a.color;
    return color || "#fe6a6a";
});
var Triangle = styledComponents_esm["default"].div(templateObject_7 || (templateObject_7 = tslib.__makeTemplateObject(["\n  width: 0;\n  height: 0;\n  display: ", ";\n  border-left: 12px solid transparent;\n  border-right: 12px solid transparent;\n  margin: 0 -35px 0 0;\n  border-bottom: 10px solid #fff;\n  align-self: flex-end;\n  top: 60px;\n  animation: ShoppinModal 0.8s forwards;\n\n  @keyframes ShoppinModal {\n    0% {\n      transform: translateX(3000px);\n    }\n    60% {\n      transform: translateX(-25px);\n    }\n    75% {\n      transform: translateX(10px);\n    }\n    90% {\n      transform: translateX(-5px);\n    }\n  }\n"], ["\n  width: 0;\n  height: 0;\n  display: ", ";\n  border-left: 12px solid transparent;\n  border-right: 12px solid transparent;\n  margin: 0 -35px 0 0;\n  border-bottom: 10px solid #fff;\n  align-self: flex-end;\n  top: 60px;\n  animation: ShoppinModal 0.8s forwards;\n\n  @keyframes ShoppinModal {\n    0% {\n      transform: translateX(3000px);\n    }\n    60% {\n      transform: translateX(-25px);\n    }\n    75% {\n      transform: translateX(10px);\n    }\n    90% {\n      transform: translateX(-5px);\n    }\n  }\n"])), function (_a) {
    var open = _a.open;
    return (open ? "flex" : "none");
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;

exports.Count = Count;
exports.MessageSection = MessageSection;
exports.ModalConainer = ModalConainer;
exports.NotificationContainer = NotificationContainer;
exports.NotificationModal = NotificationModal;
exports.SectionButton = SectionButton;
exports.Triangle = Triangle;
//# sourceMappingURL=styles.js.map
