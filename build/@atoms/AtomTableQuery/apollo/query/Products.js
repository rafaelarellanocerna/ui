'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var index = require('../../../../node_modules/graphql-tag/lib/index.js');

var LISTPRODUCTS = index.gql(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n  query listProducts(\n    $filter: ProductFilterInput\n    $order: [ProductSortInput!]\n    $skip: Int\n    $take: Int\n  ) {\n    listProducts(filter: $filter, order: $order, skip: $skip, take: $take) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      totalCount\n      items {\n        id\n        photo\n        sku\n        title\n        slug\n        description\n        projectId\n        createdAt\n        updatedAt\n        shopType\n      }\n    }\n  }\n"], ["\n  query listProducts(\n    $filter: ProductFilterInput\n    $order: [ProductSortInput!]\n    $skip: Int\n    $take: Int\n  ) {\n    listProducts(filter: $filter, order: $order, skip: $skip, take: $take) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      totalCount\n      items {\n        id\n        photo\n        sku\n        title\n        slug\n        description\n        projectId\n        createdAt\n        updatedAt\n        shopType\n      }\n    }\n  }\n"])));
var templateObject_1;

exports.LISTPRODUCTS = LISTPRODUCTS;
//# sourceMappingURL=Products.js.map
