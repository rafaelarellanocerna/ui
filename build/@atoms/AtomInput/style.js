'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var react = require('@emotion/react');
var styled = require('@emotion/styled');
var framerMotion = require('framer-motion');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var InputPaginationContainerStyled = styled__default["default"](framerMotion.motion.div)(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n"], ["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n"])));
var InputTBodyStyled = styled__default["default"].tbody(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n  padding: 10px;\n  width: 100%;\n  gap: 10px;\n  display: flex;\n  flex-direction: column;\n  td {\n    font-family: 'Montserrat', sans-serif;\n    color: #565656;\n    font-size: 14px;\n    display: flex;\n    flex-direction: column;\n    /* padding: 15px 30px; */\n    width: 100%;\n    text-align: left;\n  }\n  tr {\n    width: 100%;\n    background-color: #fefefe;\n    transition: all 0.3s ease-in-out;\n    border-bottom: 1px solid #eeeeee;\n    z-index: 2;\n  }\n  tr:hover {\n    background-color: #fafafa;\n  }\n"], ["\n  padding: 10px;\n  width: 100%;\n  gap: 10px;\n  display: flex;\n  flex-direction: column;\n  td {\n    font-family: 'Montserrat', sans-serif;\n    color: #565656;\n    font-size: 14px;\n    display: flex;\n    flex-direction: column;\n    /* padding: 15px 30px; */\n    width: 100%;\n    text-align: left;\n  }\n  tr {\n    width: 100%;\n    background-color: #fefefe;\n    transition: all 0.3s ease-in-out;\n    border-bottom: 1px solid #eeeeee;\n    z-index: 2;\n  }\n  tr:hover {\n    background-color: #fafafa;\n  }\n"])));
var InputPaginationStyled = styled__default["default"](framerMotion.motion.div)(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n  display: flex;\n  align-items: ", ";\n  justify-content: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  margin: ", ";\n  padding: ", ";\n  ", "\n  color: ", ";\n  ::placeholder {\n    color: ", ";\n  }\n  background-color: ", ";\n  height: ", ";\n  width: ", ";\n  max-width: ", ";\n  border-radius: ", ";\n  border: ", ";\n"], ["\n  display: flex;\n  align-items: ", ";\n  justify-content: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  margin: ", ";\n  padding: ", ";\n  ", "\n  color: ", ";\n  ::placeholder {\n    color: ", ";\n  }\n  background-color: ", ";\n  height: ", ";\n  width: ", ";\n  max-width: ", ";\n  border-radius: ", ";\n  border: ", ";\n"])), function (_a) {
    var alignItems = _a.alignItems;
    return alignItems !== null && alignItems !== void 0 ? alignItems : 'flex-start';
}, function (_a) {
    var justifyContent = _a.justifyContent;
    return justifyContent !== null && justifyContent !== void 0 ? justifyContent : 'flex-start';
}, function (_a) {
    var fontFamily = _a.fontFamily;
    return fontFamily || "'Montserrat', sans-serif";
}, function (_a) {
    var fontSize = _a.fontSize;
    return fontSize || "12px";
}, function (_a) {
    var fontWeight = _a.fontWeight;
    return fontWeight || "600";
}, function (_a) {
    var margin = _a.margin;
    return margin || "0px 0px 0px 0px";
}, function (_a) {
    var padding = _a.padding;
    return padding || "0px 0px 0px 0px";
}, function (_a) {
    var autoFocus = _a.autoFocus;
    return autoFocus && react.css(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n      border-color: #0f1e2f;\n    "], ["\n      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n      border-color: #0f1e2f;\n    "])));
}, function (_a) {
    var color = _a.color;
    return color || "#1a1a1a";
}, function (_a) {
    var placeholderColor = _a.placeholderColor;
    return placeholderColor || "#202124";
}, function (_a) {
    var backgroundColor = _a.backgroundColor;
    return backgroundColor || "#ffffff";
}, function (_a) {
    var height = _a.height;
    return height || "auto";
}, function (_a) {
    var width = _a.width;
    return width || "100%";
}, function (_a) {
    var maxWidth = _a.maxWidth;
    return maxWidth || "100%";
}, function (_a) {
    var borderRadius = _a.borderRadius;
    return borderRadius || "4px";
}, function (_a) {
    var border = _a.border;
    return border || "1px solid #f2f2f2";
});
var InputSelectPaginationLabelStyled = styled__default["default"](framerMotion.motion.label)(templateObject_5 || (templateObject_5 = tslib.__makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  cursor: pointer !important;\n  font-family: ", ";\n  margin: ", ";\n  color: ", ";\n  width: ", ";\n  height: ", ";\n  font-size: ", ";\n  text-align: ", ";\n  font-weight: ", ";\n  position: relative;\n  ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  cursor: pointer !important;\n  font-family: ", ";\n  margin: ", ";\n  color: ", ";\n  width: ", ";\n  height: ", ";\n  font-size: ", ";\n  text-align: ", ";\n  font-weight: ", ";\n  position: relative;\n  ", ";\n"])), function (_a) {
    var labelFontFamily = _a.labelFontFamily;
    return labelFontFamily || "'Montserrat', sans-serif";
}, function (_a) {
    var labelMargin = _a.labelMargin;
    return labelMargin || "0px 0px 0px 0px";
}, function (_a) {
    var labelColor = _a.labelColor;
    return labelColor || "black";
}, function (_a) {
    var labelWidth = _a.labelWidth;
    return labelWidth || "100%";
}, function (_a) {
    var labelHeight = _a.labelHeight;
    return labelHeight || "max-content";
}, function (_a) {
    var labelFontSize = _a.labelFontSize;
    return labelFontSize || "16px";
}, function (_a) {
    var labelTextAlign = _a.labelTextAlign;
    return labelTextAlign || "left";
}, function (_a) {
    var labelFontWeight = _a.labelFontWeight;
    return labelFontWeight || "500";
}, function (_a) {
    var customCSS = _a.customCSS;
    return customCSS;
});
// export const GlobalContainerStyled = styled.label<AtomInputTypes>`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   font-size: ${({ fontsize }) => fontsize || `12px`};
//   width: ${({ width }) => width || `max-content`};
// `;
// export const InputLabelStyled = styled.label<AtomInputTypes>`
//   font-family: ${({ font }) => font || `'Montserrat', sans-serif`};
//   display: flex;
//   flex-direction: column;
//   width: ${({ width }) => width || `250px`};
//   height: max-content;
//   color: ${({ colorLabel }) => colorLabel || `#47585d`};
//   font-size: ${({ fontsize }) => fontsize || `12px`};
//   font-weight: 600;
// `;
// export const ContainerRadioStyled = styled.div<AtomInputTypes>`
//   font-family: ${({ font }) => font || `'Montserrat', sans-serif`};
//   display: flex;
//   flex-direction: column;
//   width: ${({ width }) => width || `250px`};
//   height: max-content;
//   color: ${({ colorLabel }) => colorLabel || `#47585d`};
//   font-size: ${({ fontsize }) => fontsize || `12px`};
//   font-weight: 600;
//   fieldset {
//     margin-top: 10px;
//     border: none;
//     display: flex;
//     width: 100%;
//     flex-wrap: wrap;
//     justify-content: space-between;
//     label {
//       width: max-content;
//     }
//   }
// `;
// export const DragDropStyled = styled.div<AtomInputTypes>`
//   border-radius: 10px;
//   background-color: #f6f7fb;
//   margin: 5px 0px 20px 0px;
//   height: ${({ height }) => height || `150px`};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: #a5a7ad;
// `;
// export const RadioLabelStyled = styled.label<AtomInputTypes>`
//   font-family: ${({ font }) => font || `'Montserrat', sans-serif`};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: max-content;
//   width: ${({ width }) => width || `250px`};
//   color: ${({ colorLabel }) => colorLabel || `#47585d`};
//   font-size: ${({ fontsize }) => fontsize || `12px`};
//   font-weight: 500;
// `;
// export const RadioInputStyled = styled.input<AtomInputTypes>`
//   margin-right: 10px;
//   display: flex;
// `;
// export const CheckboxLabelStyled = styled.label<AtomInputTypes>`
//   font-family: ${({ font }) => font || `'Montserrat', sans-serif`};
//   margin: ${({ margin }) => margin || `10px 0px 0px 30px`};
//   display: flex;
//   align-items: center;
//   width: ${({ width }) => width || `max-content`};
//   justify-content: center;
//   height: max-content;
//   font-size: ${({ fontsize }) => fontsize || `12px`};
//   font-weight: 600;
//   color: ${({ colorLabel }) => colorLabel || `#47585d`};
//   button {
//     margin-left: 5px;
//     border: none;
//     background-color: transparent;
//     color: #2b6ab5;
//     font-size: 14px;
//     font-weight: 600;
//     text-decoration: underline;
//   }
// `;
// export const SelectLabelStyled = styled.label<AtomInputTypes>`
//   font-family: ${({ font }) => font || `'Montserrat', sans-serif`};
//   display: flex;
//   flex-direction: column;
//   width: ${({ width }) => width || `250px`};
//   align-items: flex-start;
//   justify-content: center;
//   height: max-content;
//   font-size: ${({ fontsize }) => fontsize || `12px`};
//   font-weight: 600;
//   color: ${({ colorLabel }) => colorLabel || `#47585d`};
//   margin: ${({ marginLabel }) => marginLabel || `0px 0px`};
// `;
// export const SelectInputStyled = styled.select<AtomInputTypes>`
//   font-family: ${({ font }) => font || `'Montserrat', sans-serif`};
//   margin: ${({ margin }) => margin || `10px 0px 20px 0px`};
//   padding: 0px 10px;
//   display: flex;
//   width: 100%;
//   height: ${({ height }) => height || `35px`};
//   font-size: ${({ fontsize }) => fontsize || `12px`};
//   font-weight: 500;
//   border-radius: ${({ borderRadius }) => borderRadius || `10px`};
//   border: ${({ border }) => border || `2px solid #c8d2dd;`};
//   color: ${({ optionColor }) => optionColor || `#244a77`};
//   option {
//     margin: 5px 0px;
//     font-size: ${({ fontsize }) => fontsize || `12px`};
//     font-weight: 600;
//     color: ${({ optionColor }) => optionColor || `#75758b`};
//     border: ${({ border }) => border || `2px solid #c8d2dd;`};
//   }
//   ${({ disabled }) =>
//     disabled &&
//     css`
//       background-color: #fafafa;
//     `}
// `;
// export const CheckboxInputStyled = styled.input<AtomInputTypes>`
//   margin-right: 10px;
//   display: flex;
//   border: solid 1px #244a77;
// `;
// export const SelectBigLabelStyled = styled.label<AtomInputTypes>`
//   display: flex;
//   flex-direction: column;
//   width: ${({ width }) => width || `250px`};
//   align-items: flex-start;
//   justify-content: center;
//   height: max-content;
//   font-weight: 600;
//   position: relative;
//   color: ${({ colorLabel }) => colorLabel || `#47585d`};
// `;
// export const TextAreaInputStyled = styled.textarea<AtomInputTypes>`
//   font-family: ${({ font }) => font || `'Montserrat', sans-serif`};
//   margin: 10px 0px 20px 0px;
//   padding: 0px 10px;
//   display: flex;
//   width: 100%;
//   height: ${({ height }) => height || `150px`};
//   border-radius: 10px;
//   border: 2px solid #c8d2dd;
//   font-size: ${({ fontsize }) => fontsize || `12px`};
//   border-radius: ${({ borderRadius }) => borderRadius || `10px`};
//   border: ${({ border }) => border || `2px solid #c8d2dd;`};
//   font-weight: 500;
//   padding-top: 10px;
//   color: #0f1e2f;
//   font-family: "Montserrat", sans-serif;
//   font-weight: bold;
//   resize: none;
// `;
// export const SelectBigInputStyled = styled.select<AtomInputTypes>`
//   font-family: ${({ font }) => font || `'Montserrat', sans-serif`};
//   margin: 10px 0px 20px 0px;
//   padding: 0px 10px;
//   display: flex;
//   width: 100%;
//   height: 30px;
//   border-radius: 10px;
//   border: 2px solid #c8d2dd;
//   font-size: ${({ fontsize }) => fontsize || `12px`};
//   font-weight: 500;
//   color: #244a77;
//   div {
//     background-color: red;
//     display: flex;
//     height: 400px;
//     position: absolute;
//   }
//   option {
//     margin: 5px 0px;
//     font-size: ${({ fontsize }) => fontsize || `12px`};
//     font-weight: 600;
//     color: #75758b;
//     border: 2px solid #c8d2dd;
//   }
// `;
// export const FileInputStyled = styled.label<AtomInputTypes>`
//   font-family: ${({ font }) => font || `'Montserrat', sans-serif`};
//   margin: 10px 0px 20px 0px;
//   padding: 0px 10px;
//   display: flex;
//   width: 100%;
//   position: relative;
//   height: ${({ height }) => height || `170px`};
//   border-radius: 10px;
//   background-color: #f6f7fb;
//   border-radius: 4px;
//   font-size: ${({ fontsize }) => fontsize || `12px`};
//   font-weight: 500;
//   color: #a5a7ad;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   ${({ dropActive }) =>
//     dropActive &&
//     css`
//       border: 2px solid #c8d2dd;
//       background-color: #193452;
//       color: white;
//     `}
//   span {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     img {
//       width: 20px;
//       margin-right: 10px;
//     }
//   }
//   input {
//     opacity: 0;
//     position: absolute;
//     z-index: -1;
//   }
//   .preview {
//     border-radius: 4px;
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;
/// ///////////////////////////////////////////////////////////////////////////////////////////
var InputTextLabelStyled = styled__default["default"](framerMotion.motion.label)(templateObject_6 || (templateObject_6 = tslib.__makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  font-family: ", ";\n  margin: ", ";\n  color: ", ";\n  width: ", ";\n  height: ", ";\n  font-size: ", ";\n  text-align: ", ";\n  font-weight: ", ";\n  position: relative;\n\n  ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  font-family: ", ";\n  margin: ", ";\n  color: ", ";\n  width: ", ";\n  height: ", ";\n  font-size: ", ";\n  text-align: ", ";\n  font-weight: ", ";\n  position: relative;\n\n  ", ";\n"])), function (_a) {
    var labelFontFamily = _a.labelFontFamily;
    return labelFontFamily || "'Montserrat', sans-serif";
}, function (_a) {
    var labelMargin = _a.labelMargin;
    return labelMargin || "0px 0px 0px 0px";
}, function (_a) {
    var labelColor = _a.labelColor;
    return labelColor || "black";
}, function (_a) {
    var labelWidth = _a.labelWidth;
    return labelWidth || "max-content";
}, function (_a) {
    var labelHeight = _a.labelHeight;
    return labelHeight || "max-content";
}, function (_a) {
    var labelFontSize = _a.labelFontSize;
    return labelFontSize || "16px";
}, function (_a) {
    var labelTextAlign = _a.labelTextAlign;
    return labelTextAlign || "left";
}, function (_a) {
    var labelFontWeight = _a.labelFontWeight;
    return labelFontWeight || "500";
}, function (_a) {
    var customCSS = _a.customCSS;
    return customCSS;
});
var InputCheckboxLabelStyled = styled__default["default"](framerMotion.motion.label)(templateObject_7 || (templateObject_7 = tslib.__makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  font-family: ", ";\n  margin: ", ";\n  color: ", ";\n  width: ", ";\n  height: ", ";\n  font-size: ", ";\n  text-align: ", ";\n  font-weight: ", ";\n  position: relative;\n\n  ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  font-family: ", ";\n  margin: ", ";\n  color: ", ";\n  width: ", ";\n  height: ", ";\n  font-size: ", ";\n  text-align: ", ";\n  font-weight: ", ";\n  position: relative;\n\n  ", ";\n"])), function (_a) {
    var labelFontFamily = _a.labelFontFamily;
    return labelFontFamily || "'Montserrat', sans-serif";
}, function (_a) {
    var labelMargin = _a.labelMargin;
    return labelMargin || "0px 0px 0px 0px";
}, function (_a) {
    var labelColor = _a.labelColor;
    return labelColor || "black";
}, function (_a) {
    var labelWidth = _a.labelWidth;
    return labelWidth || "max-content";
}, function (_a) {
    var labelHeight = _a.labelHeight;
    return labelHeight || "max-content";
}, function (_a) {
    var labelFontSize = _a.labelFontSize;
    return labelFontSize || "16px";
}, function (_a) {
    var labelTextAlign = _a.labelTextAlign;
    return labelTextAlign || "left";
}, function (_a) {
    var labelFontWeight = _a.labelFontWeight;
    return labelFontWeight || "500";
}, function (_a) {
    var customCSS = _a.customCSS;
    return customCSS;
});
var InputTextSpanStyled = styled__default["default"].span(templateObject_8 || (templateObject_8 = tslib.__makeTemplateObject(["\n  margin: ", ";\n"], ["\n  margin: ", ";\n"])), function (_a) {
    var spanMargin = _a.spanMargin;
    return spanMargin || "10px 0px 0px 0px";
});
var InputTextStyled = styled__default["default"](framerMotion.motion.input)(templateObject_10 || (templateObject_10 = tslib.__makeTemplateObject(["\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  margin: ", ";\n  padding: ", ";\n  ", "\n  color: ", ";\n  ::placeholder {\n    color: ", ";\n  }\n  background-color: ", ";\n  height: ", ";\n  width: ", ";\n  max-width: ", ";\n  border-radius: ", ";\n  border: ", ";\n"], ["\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  margin: ", ";\n  padding: ", ";\n  ", "\n  color: ", ";\n  ::placeholder {\n    color: ", ";\n  }\n  background-color: ", ";\n  height: ", ";\n  width: ", ";\n  max-width: ", ";\n  border-radius: ", ";\n  border: ", ";\n"])), function (_a) {
    var fontFamily = _a.fontFamily;
    return fontFamily || "'Montserrat', sans-serif";
}, function (_a) {
    var fontSize = _a.fontSize;
    return fontSize || "12px";
}, function (_a) {
    var fontWeight = _a.fontWeight;
    return fontWeight || "600";
}, function (_a) {
    var margin = _a.margin;
    return margin || "0px 0px 0px 0px";
}, function (_a) {
    var padding = _a.padding;
    return padding || "0px 0px 0px 15px";
}, function (_a) {
    var autoFocus = _a.autoFocus;
    return autoFocus && react.css(templateObject_9 || (templateObject_9 = tslib.__makeTemplateObject(["\n      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n      border-color: #0f1e2f;\n    "], ["\n      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n      border-color: #0f1e2f;\n    "])));
}, function (_a) {
    var color = _a.color;
    return color || "#1a1a1a";
}, function (_a) {
    var placeholderColor = _a.placeholderColor;
    return placeholderColor || "#202124";
}, function (_a) {
    var backgroundColor = _a.backgroundColor;
    return backgroundColor || "#ffffff";
}, function (_a) {
    var height = _a.height;
    return height || "35px";
}, function (_a) {
    var width = _a.width;
    return width || "100%";
}, function (_a) {
    var maxWidth = _a.maxWidth;
    return maxWidth || "100%";
}, function (_a) {
    var borderRadius = _a.borderRadius;
    return borderRadius || "4px";
}, function (_a) {
    var border = _a.border;
    return border || "1px solid #f2f2f2";
});
var InputCheckboxStyled = styled__default["default"](framerMotion.motion.input)(templateObject_11 || (templateObject_11 = tslib.__makeTemplateObject(["\n  margin-right: 10px;\n  display: flex;\n  border: solid 1px #244a77;\n  :checked {\n    accent-color: ", ";\n  }\n"], ["\n  margin-right: 10px;\n  display: flex;\n  border: solid 1px #244a77;\n  :checked {\n    accent-color: ", ";\n  }\n"])), function (_a) {
    var accentColor = _a.accentColor;
    return accentColor || "#005cc8";
});
var InputRadioButtonStyled = styled__default["default"](framerMotion.motion.input)(templateObject_12 || (templateObject_12 = tslib.__makeTemplateObject(["\n  margin-right: 10px;\n  display: flex;\n  border: solid 1px #244a77;\n"], ["\n  margin-right: 10px;\n  display: flex;\n  border: solid 1px #244a77;\n"])));
var LabelRadioButtonStyled = styled__default["default"](framerMotion.motion.label)(templateObject_13 || (templateObject_13 = tslib.__makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n"])));
var InputCheckboxToggleStyled = styled__default["default"](framerMotion.motion.input)(templateObject_14 || (templateObject_14 = tslib.__makeTemplateObject(["\n  margin-right: 10px;\n  display: flex;\n  border: solid 1px #244a77;\n"], ["\n  margin-right: 10px;\n  display: flex;\n  border: solid 1px #244a77;\n"])));
var InputErrorStyled = styled__default["default"].span(templateObject_15 || (templateObject_15 = tslib.__makeTemplateObject(["\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  color: ", ";\n  height: ", ";\n  margin: ", ";\n  padding: ", ";\n"], ["\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  color: ", ";\n  height: ", ";\n  margin: ", ";\n  padding: ", ";\n"])), function (_a) {
    var errorFontFamily = _a.errorFontFamily;
    return errorFontFamily || "'Montserrat', sans-serif";
}, function (_a) {
    var errorFontSize = _a.errorFontSize;
    return errorFontSize || "10px";
}, function (_a) {
    var errorFontWeight = _a.errorFontWeight;
    return errorFontWeight || "700";
}, function (_a) {
    var errorColor = _a.errorColor;
    return errorColor || "#ff295f";
}, function (_a) {
    var errorHeight = _a.errorHeight;
    return errorHeight || "20px";
}, function (_a) {
    var errorMargin = _a.errorMargin;
    return errorMargin || "0px 0px 0px 0px";
}, function (_a) {
    var errorPadding = _a.errorPadding;
    return errorPadding || "5px 0px 0px 0px";
});
var FileInputStyled = styled__default["default"](framerMotion.motion.label)(templateObject_17 || (templateObject_17 = tslib.__makeTemplateObject(["\n  display: flex;\n  width: ", ";\n  height: ", ";\n  position: relative;\n\n  border-radius: ", ";\n  background-color: #f6f7fb;\n  font-size: ", ";\n  font-weight: 500;\n  color: #a5a7ad;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ", "\n  input {\n    opacity: 0;\n    position: absolute;\n    z-index: 1;\n  }\n"], ["\n  display: flex;\n  width: ", ";\n  height: ", ";\n  position: relative;\n\n  border-radius: ", ";\n  background-color: #f6f7fb;\n  font-size: ", ";\n  font-weight: 500;\n  color: #a5a7ad;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ", "\n  input {\n    opacity: 0;\n    position: absolute;\n    z-index: 1;\n  }\n"])), function (_a) {
    var width = _a.width;
    return width || "250px";
}, function (_a) {
    var height = _a.height;
    return height || "40px";
}, function (_a) {
    var borderRadius = _a.borderRadius;
    return borderRadius || "4px";
}, function (_a) {
    var fontSize = _a.fontSize;
    return fontSize || "12px";
}, function (_a) {
    var dropActive = _a.dropActive;
    return dropActive && react.css(templateObject_16 || (templateObject_16 = tslib.__makeTemplateObject(["\n      border: 2px solid white;\n      background-color: #dadada;\n      color: white;\n    "], ["\n      border: 2px solid white;\n      background-color: #dadada;\n      color: white;\n    "])));
});
var FileInputMultipleStyled = styled__default["default"](framerMotion.motion.label)(templateObject_19 || (templateObject_19 = tslib.__makeTemplateObject(["\n  display: flex;\n  width: ", ";\n  height: ", ";\n  position: relative;\n\n  border-radius: ", ";\n  background-color: #f6f7fb;\n  font-size: ", ";\n  font-weight: 500;\n  color: #a5a7ad;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ", "\n  input {\n    opacity: 0;\n    position: absolute;\n    z-index: 1;\n  }\n"], ["\n  display: flex;\n  width: ", ";\n  height: ", ";\n  position: relative;\n\n  border-radius: ", ";\n  background-color: #f6f7fb;\n  font-size: ", ";\n  font-weight: 500;\n  color: #a5a7ad;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ", "\n  input {\n    opacity: 0;\n    position: absolute;\n    z-index: 1;\n  }\n"])), function (_a) {
    var width = _a.width;
    return width || "250px";
}, function (_a) {
    var height = _a.height;
    return height || "250px";
}, function (_a) {
    var borderRadius = _a.borderRadius;
    return borderRadius || "4px";
}, function (_a) {
    var fontSize = _a.fontSize;
    return fontSize || "12px";
}, function (_a) {
    var dropActive = _a.dropActive;
    return dropActive && react.css(templateObject_18 || (templateObject_18 = tslib.__makeTemplateObject(["\n      border: 2px solid white;\n      background-color: #dadada;\n      color: white;\n    "], ["\n      border: 2px solid white;\n      background-color: #dadada;\n      color: white;\n    "])));
});
var InputSelectStyled = styled__default["default"](framerMotion.motion.select)(templateObject_20 || (templateObject_20 = tslib.__makeTemplateObject(["\n  margin: ", ";\n  padding: 0px 10px;\n  display: flex;\n  width: 100%;\n  height: ", ";\n  font-size: ", ";\n  font-weight: 500;\n  border-radius: ", ";\n  border: ", ";\n  color: ", ";\n  option {\n    margin: 5px 0px;\n    font-size: ", ";\n    font-weight: 600;\n    color: ", ";\n    border: ", ";\n  }\n  ", ";\n"], ["\n  margin: ", ";\n  padding: 0px 10px;\n  display: flex;\n  width: 100%;\n  height: ", ";\n  font-size: ", ";\n  font-weight: 500;\n  border-radius: ", ";\n  border: ", ";\n  color: ", ";\n  option {\n    margin: 5px 0px;\n    font-size: ", ";\n    font-weight: 600;\n    color: ", ";\n    border: ", ";\n  }\n  ", ";\n"])), function (_a) {
    var margin = _a.margin;
    return margin || "0px 0px 0px 0px";
}, function (_a) {
    var height = _a.height;
    return height || "35px";
}, function (_a) {
    var fontSize = _a.fontSize;
    return fontSize || "12px";
}, function (_a) {
    var borderRadius = _a.borderRadius;
    return borderRadius || "4px";
}, function (_a) {
    var border = _a.border;
    return border || "2px solid #c8d2dd;";
}, function (_a) {
    var optionColor = _a.optionColor;
    return optionColor || "#75758b";
}, function (_a) {
    var fontSize = _a.fontSize;
    return fontSize || "12px";
}, function (_a) {
    var optionColor = _a.optionColor;
    return optionColor || "#75758b";
}, function (_a) {
    var border = _a.border;
    return border || "2px solid #c8d2dd;";
}, function (_a) {
    var customCSS = _a.customCSS;
    return customCSS;
});
var InputOptionStyled = styled__default["default"](framerMotion.motion.option)(templateObject_21 || (templateObject_21 = tslib.__makeTemplateObject([""], [""])));
var InputRangeLabelStyled = styled__default["default"](framerMotion.motion.label)(templateObject_22 || (templateObject_22 = tslib.__makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  font-family: ", ";\n  margin: ", ";\n  color: ", ";\n  width: ", ";\n  height: ", ";\n  font-size: ", ";\n  text-align: ", ";\n  font-weight: ", ";\n  position: relative;\n\n  ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  font-family: ", ";\n  margin: ", ";\n  color: ", ";\n  width: ", ";\n  height: ", ";\n  font-size: ", ";\n  text-align: ", ";\n  font-weight: ", ";\n  position: relative;\n\n  ", ";\n"])), function (_a) {
    var labelFontFamily = _a.labelFontFamily;
    return labelFontFamily || "'Montserrat', sans-serif";
}, function (_a) {
    var labelMargin = _a.labelMargin;
    return labelMargin || "0px 0px 0px 0px";
}, function (_a) {
    var labelColor = _a.labelColor;
    return labelColor || "black";
}, function (_a) {
    var labelWidth = _a.labelWidth;
    return labelWidth || "100%";
}, function (_a) {
    var labelHeight = _a.labelHeight;
    return labelHeight || "max-content";
}, function (_a) {
    var labelFontSize = _a.labelFontSize;
    return labelFontSize || "16px";
}, function (_a) {
    var labelTextAlign = _a.labelTextAlign;
    return labelTextAlign || "left";
}, function (_a) {
    var labelFontWeight = _a.labelFontWeight;
    return labelFontWeight || "500";
}, function (_a) {
    var customCSS = _a.customCSS;
    return customCSS;
});
var InputRangeStyled = styled__default["default"](framerMotion.motion.input)(templateObject_23 || (templateObject_23 = tslib.__makeTemplateObject(["\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  width: 100%;\n  outline: none;\n  position: absolute;\n  margin: auto;\n  top: 50%;\n  background-color: transparent;\n  pointer-events: none;\n\n  ::-webkit-slider-runnable-track {\n    -webkit-appearance: none;\n    height: 5px;\n  }\n  ::-moz-range-track {\n    -moz-appearance: none;\n    height: 5px;\n  }\n  ::-ms-track {\n    appearance: none;\n    height: 5px;\n  }\n  ::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    height: 15px;\n    width: 15px;\n    background-color: ", ";\n    border: ", ";\n    cursor: pointer;\n    margin-top: -9px;\n    pointer-events: auto;\n    border-radius: 50%;\n  }\n  ::-moz-range-thumb {\n    -webkit-appearance: none;\n    height: 15px;\n    width: 15px;\n    cursor: pointer;\n    border-radius: 50%;\n    background-color: ", ";\n    border: ", ";\n    pointer-events: auto;\n  }\n  ::-ms-thumb {\n    appearance: none;\n    height: 15px;\n    width: 15px;\n    cursor: pointer;\n    border-radius: 50%;\n    background-color: ", ";\n    border: ", ";\n    pointer-events: auto;\n  }\n  :active::-webkit-slider-thumb {\n    background-color: ", ";\n    border: ", ";\n  }\n"], ["\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  width: 100%;\n  outline: none;\n  position: absolute;\n  margin: auto;\n  top: 50%;\n  background-color: transparent;\n  pointer-events: none;\n\n  ::-webkit-slider-runnable-track {\n    -webkit-appearance: none;\n    height: 5px;\n  }\n  ::-moz-range-track {\n    -moz-appearance: none;\n    height: 5px;\n  }\n  ::-ms-track {\n    appearance: none;\n    height: 5px;\n  }\n  ::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    height: 15px;\n    width: 15px;\n    background-color: ", ";\n    border: ", ";\n    cursor: pointer;\n    margin-top: -9px;\n    pointer-events: auto;\n    border-radius: 50%;\n  }\n  ::-moz-range-thumb {\n    -webkit-appearance: none;\n    height: 15px;\n    width: 15px;\n    cursor: pointer;\n    border-radius: 50%;\n    background-color: ", ";\n    border: ", ";\n    pointer-events: auto;\n  }\n  ::-ms-thumb {\n    appearance: none;\n    height: 15px;\n    width: 15px;\n    cursor: pointer;\n    border-radius: 50%;\n    background-color: ", ";\n    border: ", ";\n    pointer-events: auto;\n  }\n  :active::-webkit-slider-thumb {\n    background-color: ", ";\n    border: ", ";\n  }\n"])), function (_a) {
    var thumbColor = _a.thumbColor;
    return thumbColor || "#ffffff";
}, function (_a) {
    var thumbBorder = _a.thumbBorder;
    return thumbBorder || "2px solid #3264fe";
}, function (_a) {
    var thumbColor = _a.thumbColor;
    return thumbColor || "#ffffff";
}, function (_a) {
    var thumbBorder = _a.thumbBorder;
    return thumbBorder || "2px solid #3264fe";
}, function (_a) {
    var thumbColor = _a.thumbColor;
    return thumbColor || "#ffffff";
}, function (_a) {
    var thumbBorder = _a.thumbBorder;
    return thumbBorder || "2px solid #3264fe";
}, function (_a) {
    var thumbColor = _a.thumbColor;
    return thumbColor || "#ffffff";
}, function (_a) {
    var thumbBorder = _a.thumbBorder;
    return thumbBorder || "3px solid #3264fe";
});
var SliderTrackStyled = styled__default["default"](framerMotion.motion.div)(templateObject_24 || (templateObject_24 = tslib.__makeTemplateObject(["\n  width: 100%;\n  height: 5px;\n  position: relative;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  border-radius: 200px;\n  background: ", ";\n"], ["\n  width: 100%;\n  height: 5px;\n  position: relative;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  border-radius: 200px;\n  background: ", ";\n"])), function (_a) {
    var minTrack = _a.minTrack, maxTrack = _a.maxTrack, trackColor = _a.trackColor, trackBackground = _a.trackBackground;
    var isNegative = minTrack - maxTrack < 0;
    return isNegative
        ? "linear-gradient(to right, ".concat(trackBackground || "#dadae5", " ").concat(minTrack, "% , ").concat(trackColor || "#4271ff", " ").concat(minTrack, "% , ").concat(trackColor || "#4271ff", " ").concat(maxTrack, "%, ").concat(trackBackground || "#dadae5", " ").concat(maxTrack, "%)")
        : "linear-gradient(to right, ".concat(trackBackground || "#dadae5", " ").concat(maxTrack, "% , ").concat(trackColor || "#4271ff", " ").concat(maxTrack, "% , ").concat(trackColor || "#4271ff", " ").concat(minTrack, "%, ").concat(trackBackground || "#dadae5", " ").concat(minTrack, "%)");
});
var InputTextBoxStyled = styled__default["default"](framerMotion.motion.textarea)(templateObject_26 || (templateObject_26 = tslib.__makeTemplateObject(["\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  margin: ", ";\n  padding: ", ";\n  color: ", ";\n  ::placeholder {\n    color: ", ";\n  }\n  ", "\n  background-color: ", ";\n  height: ", ";\n  width: ", ";\n  max-width: ", ";\n  border-radius: ", ";\n  border: ", ";\n"], ["\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  margin: ", ";\n  padding: ", ";\n  color: ", ";\n  ::placeholder {\n    color: ", ";\n  }\n  ", "\n  background-color: ", ";\n  height: ", ";\n  width: ", ";\n  max-width: ", ";\n  border-radius: ", ";\n  border: ", ";\n"])), function (_a) {
    var fontFamily = _a.fontFamily;
    return fontFamily || "'Montserrat', sans-serif";
}, function (_a) {
    var fontSize = _a.fontSize;
    return fontSize || "12px";
}, function (_a) {
    var fontWeight = _a.fontWeight;
    return fontWeight || "500";
}, function (_a) {
    var margin = _a.margin;
    return margin || "0px 0px 0px 0px";
}, function (_a) {
    var padding = _a.padding;
    return padding || "0px 0px 0px 15px";
}, function (_a) {
    var color = _a.color;
    return color || "black";
}, function (_a) {
    var placeholderColor = _a.placeholderColor;
    return placeholderColor || "#1a1a1a";
}, function (_a) {
    var autoFocus = _a.autoFocus;
    return autoFocus && react.css(templateObject_25 || (templateObject_25 = tslib.__makeTemplateObject(["\n      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n      border-color: #0f1e2f;\n    "], ["\n      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n      border-color: #0f1e2f;\n    "])));
}, function (_a) {
    var backgroundColor = _a.backgroundColor;
    return backgroundColor || "#ffffff";
}, function (_a) {
    var height = _a.height;
    return height || "200px";
}, function (_a) {
    var width = _a.width;
    return width || "100%";
}, function (_a) {
    var maxWidth = _a.maxWidth;
    return maxWidth || "100%";
}, function (_a) {
    var borderRadius = _a.borderRadius;
    return borderRadius || "4px";
}, function (_a) {
    var border = _a.border;
    return border || "1px solid #c8d2dd";
});
var VideoPlayerStyledContainer = styled__default["default"](framerMotion.motion.div)(templateObject_27 || (templateObject_27 = tslib.__makeTemplateObject(["\n  overflow: hidden;\n  max-height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  overflow: hidden;\n  max-height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
var VideoPlayerStyled = styled__default["default"](framerMotion.motion.video)(templateObject_28 || (templateObject_28 = tslib.__makeTemplateObject(["\n  width: ", ";\n"], ["\n  width: ", ";\n"])), function (_a) {
    var width = _a.width;
    return width || "100%";
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28;

exports.FileInputMultipleStyled = FileInputMultipleStyled;
exports.FileInputStyled = FileInputStyled;
exports.InputCheckboxLabelStyled = InputCheckboxLabelStyled;
exports.InputCheckboxStyled = InputCheckboxStyled;
exports.InputCheckboxToggleStyled = InputCheckboxToggleStyled;
exports.InputErrorStyled = InputErrorStyled;
exports.InputOptionStyled = InputOptionStyled;
exports.InputPaginationContainerStyled = InputPaginationContainerStyled;
exports.InputPaginationStyled = InputPaginationStyled;
exports.InputRadioButtonStyled = InputRadioButtonStyled;
exports.InputRangeLabelStyled = InputRangeLabelStyled;
exports.InputRangeStyled = InputRangeStyled;
exports.InputSelectPaginationLabelStyled = InputSelectPaginationLabelStyled;
exports.InputSelectStyled = InputSelectStyled;
exports.InputTBodyStyled = InputTBodyStyled;
exports.InputTextBoxStyled = InputTextBoxStyled;
exports.InputTextLabelStyled = InputTextLabelStyled;
exports.InputTextSpanStyled = InputTextSpanStyled;
exports.InputTextStyled = InputTextStyled;
exports.LabelRadioButtonStyled = LabelRadioButtonStyled;
exports.SliderTrackStyled = SliderTrackStyled;
exports.VideoPlayerStyled = VideoPlayerStyled;
exports.VideoPlayerStyledContainer = VideoPlayerStyledContainer;
//# sourceMappingURL=style.js.map
