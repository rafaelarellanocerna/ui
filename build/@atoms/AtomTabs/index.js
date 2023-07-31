'use strict';

var tslib = require('tslib');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var React = require('react');
var index$2 = require('../AtomText/index.js');
var index$1 = require('../AtomButton/index.js');
var index = require('../AtomWrapper/index.js');

var AtomTabs = function (props) {
    var _a, _b, _c;
    var _d = tslib.__read(React.useState(0), 2), activeTab = _d[0], setActiveTab = _d[1];
    var tabs = props.tabs, componentsProps = props.componentsProps;
    return (jsxRuntime.jsxs(index, tslib.__assign({ width: "100%", flexDirection: "column" }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.containerProps, { children: [jsxRuntime.jsx(index, tslib.__assign({ flexDirection: "row", width: "100%", justifyContent: "flex-start" }, (_a = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.tabsProps) === null || _a === void 0 ? void 0 : _a.wrapperProps, { children: tabs === null || tabs === void 0 ? void 0 : tabs.map(function (tab, index) {
                    var _a, _b, _c, _d, _e;
                    var buttonProps = index === activeTab
                        ? (_a = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.tabsProps) === null || _a === void 0 ? void 0 : _a.buttonActiveProps
                        : (_b = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.tabsProps) === null || _b === void 0 ? void 0 : _b.buttonDisabledProps;
                    return (jsxRuntime.jsx(index$1, tslib.__assign({ onClick: function () {
                            var _a;
                            setActiveTab(index);
                            (_a = tab === null || tab === void 0 ? void 0 : tab.onClick) === null || _a === void 0 ? void 0 : _a.call(tab);
                        }, backgroundColor: index === activeTab ? '#00abb9' : '#b2b1af', padding: "10px 30px", borderRadius: "0px" }, buttonProps, { children: (tab === null || tab === void 0 ? void 0 : tab.button) ? ((_c = tab === null || tab === void 0 ? void 0 : tab.button) === null || _c === void 0 ? void 0 : _c.call(tab, index === activeTab)) : (jsxRuntime.jsx(index$2, tslib.__assign({ color: "white", fontSize: "14px", fontWeight: "bold", cursor: "pointer" }, { children: (_d = tab === null || tab === void 0 ? void 0 : tab.title) !== null && _d !== void 0 ? _d : "Tab ".concat(index + 1) }))) }), (_e = tab.id) !== null && _e !== void 0 ? _e : index + 1));
                }) })), jsxRuntime.jsx(index, tslib.__assign({ border: "1px solid #e6e6e6" }, (_b = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.contentProps) === null || _b === void 0 ? void 0 : _b.wrapperProps, { children: (_c = tabs === null || tabs === void 0 ? void 0 : tabs.find(function (_, index) { return index === activeTab; })) === null || _c === void 0 ? void 0 : _c.content }))] })));
};

module.exports = AtomTabs;
//# sourceMappingURL=index.js.map
