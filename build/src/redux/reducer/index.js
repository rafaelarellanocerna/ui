'use strict';

var redux = require('redux');
var modal = require('./modal.js');
var sidebar = require('./sidebar.js');
var user = require('./user.js');
var quotation = require('./quotation.js');
var memberId = require('./memberId.js');
var customize = require('./customize.js');
var blog = require('./blog.js');
var cartshop = require('./cartshop.js');

var RootReducer = redux.combineReducers({
    user: user.UserReducer,
    sideBar: sidebar["default"],
    modal: modal["default"],
    quotation: quotation["default"],
    memberID: memberId["default"],
    customize: customize["default"],
    survey: blog["default"],
    cartShop: cartshop,
});

module.exports = RootReducer;
//# sourceMappingURL=index.js.map
