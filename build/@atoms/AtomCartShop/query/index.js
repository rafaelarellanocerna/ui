'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var index = require('../../../node_modules/graphql-tag/lib/index.js');

var GETPRODUCTBYID = index.gql(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n  query productById($id: UUID!) {\n    productById(id: $id) {\n      projectId\n      memberId\n      title\n      photo\n      slug\n      sku\n      price\n      offerPrice\n      stock\n      active\n      seoProduct\n      shippingType\n      shippingPrice\n      description\n      publishDate\n      shopType\n      views\n      status\n      seoProduct\n      categories {\n        name\n        id\n        parentId\n        subCategories {\n          name\n          parentId\n          id\n        }\n      }\n      images {\n        id\n        title\n        original\n      }\n      id\n      createdAt\n      updatedAt\n    }\n  }\n"], ["\n  query productById($id: UUID!) {\n    productById(id: $id) {\n      projectId\n      memberId\n      title\n      photo\n      slug\n      sku\n      price\n      offerPrice\n      stock\n      active\n      seoProduct\n      shippingType\n      shippingPrice\n      description\n      publishDate\n      shopType\n      views\n      status\n      seoProduct\n      categories {\n        name\n        id\n        parentId\n        subCategories {\n          name\n          parentId\n          id\n        }\n      }\n      images {\n        id\n        title\n        original\n      }\n      id\n      createdAt\n      updatedAt\n    }\n  }\n"])));
var templateObject_1;

exports.GETPRODUCTBYID = GETPRODUCTBYID;
//# sourceMappingURL=index.js.map
