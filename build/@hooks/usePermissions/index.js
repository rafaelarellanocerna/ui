'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var React = require('react');
var index = require('../../node_modules/graphql-tag/lib/index.js');
var useQuery = require('../../node_modules/@apollo/client/react/hooks/useQuery.js');

var SERVICES_BY_PROJECT = index.gql(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n  query ServicesByProject($servicesByProjectId: UUID!) {\n    servicesByProject(id: $servicesByProjectId) {\n      id\n      name\n      codeName\n      image\n      description\n      priority\n      updatedAt\n      createdAt\n      isActive\n      label\n      functions {\n        id\n        name\n        codeName\n        functionType\n        microservice {\n          id\n          description\n        }\n      }\n    }\n  }\n"], ["\n  query ServicesByProject($servicesByProjectId: UUID!) {\n    servicesByProject(id: $servicesByProjectId) {\n      id\n      name\n      codeName\n      image\n      description\n      priority\n      updatedAt\n      createdAt\n      isActive\n      label\n      functions {\n        id\n        name\n        codeName\n        functionType\n        microservice {\n          id\n          description\n        }\n      }\n    }\n  }\n"])));
var MEBYID = index.gql(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n  query meById($id: UUID!) {\n    meById(id: $id) {\n      id\n      email\n      createdAt\n      updatedAt\n      email\n      recoverToken\n      recoverRegister\n      isActive\n      firstTime\n      loginCount\n      taxonomies {\n        memberId\n        taxonomyId\n      }\n      groups {\n        id\n        name\n        description\n        groupTaxonomies {\n          taxonomy {\n            id\n            name\n          }\n        }\n      }\n      memberRoles {\n        id\n        role {\n          id\n          name\n          codeName\n        }\n        roleId\n      }\n      memberProjects {\n        id\n        projectId\n        project {\n          name\n          description\n          logo\n          tagLine\n          url\n        }\n        memberProjectRoleProject {\n          projectRoleId\n          projectRole {\n            name\n            codeName\n            projectId\n            id\n            createdAt\n            updatedAt\n          }\n          id\n          createdAt\n          updatedAt\n        }\n      }\n      memberCompanies {\n        companyId\n        company {\n          id\n          name\n        }\n      }\n      profile {\n        id\n        firstName\n        lastName\n        phone\n        photo\n        countryId\n        country {\n          name\n          code\n        }\n      }\n    }\n  }\n"], ["\n  query meById($id: UUID!) {\n    meById(id: $id) {\n      id\n      email\n      createdAt\n      updatedAt\n      email\n      recoverToken\n      recoverRegister\n      isActive\n      firstTime\n      loginCount\n      taxonomies {\n        memberId\n        taxonomyId\n      }\n      groups {\n        id\n        name\n        description\n        groupTaxonomies {\n          taxonomy {\n            id\n            name\n          }\n        }\n      }\n      memberRoles {\n        id\n        role {\n          id\n          name\n          codeName\n        }\n        roleId\n      }\n      memberProjects {\n        id\n        projectId\n        project {\n          name\n          description\n          logo\n          tagLine\n          url\n        }\n        memberProjectRoleProject {\n          projectRoleId\n          projectRole {\n            name\n            codeName\n            projectId\n            id\n            createdAt\n            updatedAt\n          }\n          id\n          createdAt\n          updatedAt\n        }\n      }\n      memberCompanies {\n        companyId\n        company {\n          id\n          name\n        }\n      }\n      profile {\n        id\n        firstName\n        lastName\n        phone\n        photo\n        countryId\n        country {\n          name\n          code\n        }\n      }\n    }\n  }\n"])));
var ROLSBYPROJECTS = index.gql(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n  query rolesByProject($id: UUID!) {\n    rolesByProject(id: $id) {\n      id\n      name\n      codeName\n      permission {\n        rules\n      }\n    }\n  }\n"], ["\n  query rolesByProject($id: UUID!) {\n    rolesByProject(id: $id) {\n      id\n      name\n      codeName\n      permission {\n        rules\n      }\n    }\n  }\n"])));
var DEFAULT_PERMISSION = 'DISABLED';
var AccessRol = {
    __owner__: 'WRITE',
    __project_manager__: 'WRITE',
    __project_user__: 'READER',
    default: DEFAULT_PERMISSION,
};
var usePermissions = function (props, deps) {
    if (props === void 0) { props = {}; }
    var userId = props.userId, projectId = props.projectId, service = props.service, role = props.role;
    var dataUser = useQuery.useQuery(MEBYID, {
        variables: {
            id: userId,
        },
        skip: !userId,
    }).data;
    var dataServices = useQuery.useQuery(SERVICES_BY_PROJECT, {
        variables: {
            servicesByProjectId: projectId,
        },
    }).data;
    var dataRoles = useQuery.useQuery(ROLSBYPROJECTS, {
        variables: {
            id: projectId,
        },
    }).data;
    var permission = React.useMemo(function () {
        var _a, _b, _c, _d, _e, _f;
        var user = dataUser === null || dataUser === void 0 ? void 0 : dataUser.meById;
        var roles = dataRoles === null || dataRoles === void 0 ? void 0 : dataRoles.rolesByProject;
        var FindRole = (_c = role !== null && role !== void 0 ? role : (_b = (_a = user === null || user === void 0 ? void 0 : user.memberProjects) === null || _a === void 0 ? void 0 : _a.find(function (e) { return e.projectId === projectId; })) === null || _b === void 0 ? void 0 : _b.memberProjectRoleProject.projectRole.codeName) !== null && _c !== void 0 ? _c : (_e = (_d = user === null || user === void 0 ? void 0 : user.memberRoles) === null || _d === void 0 ? void 0 : _d.find(function (_, idx) { return idx === 0; })) === null || _e === void 0 ? void 0 : _e.role.codeName;
        var FindRoleProject = roles === null || roles === void 0 ? void 0 : roles.find(function (e) { return e.codeName === FindRole; });
        var Rule = (_f = FindRoleProject === null || FindRoleProject === void 0 ? void 0 : FindRoleProject.permission) === null || _f === void 0 ? void 0 : _f.rules;
        var GetRule = function (rule) {
            var _a, _b;
            var ConvertJSON = JSON.parse(rule);
            var FindRule = ConvertJSON.find(function (e) { return e.codeName === service; });
            var RuleAccess = ((_a = FindRule === null || FindRule === void 0 ? void 0 : FindRule.access) !== null && _a !== void 0 ? _a : DEFAULT_PERMISSION);
            return {
                access: RuleAccess,
                permissions: (_b = FindRule === null || FindRule === void 0 ? void 0 : FindRule.permision) !== null && _b !== void 0 ? _b : [],
            };
        };
        var GetRoleByUser = function () {
            var _a;
            return ({
                access: ((_a = AccessRol[FindRole]) !== null && _a !== void 0 ? _a : DEFAULT_PERMISSION),
                permissions: [],
            });
        };
        return Rule ? GetRule(Rule) : GetRoleByUser();
    }, tslib.__spreadArray([dataServices, dataRoles, dataUser, role], tslib.__read((deps !== null && deps !== void 0 ? deps : [])), false));
    return permission;
};
var havePermission = function (permission, funcinalityConame) {
    if (permission.access === 'DISABLED') {
        return false;
    }
    var isExist = permission.permissions.some(function (e) { return e.codeName === funcinalityConame; });
    return !!isExist;
};
var templateObject_1, templateObject_2, templateObject_3;

exports.MEBYID = MEBYID;
exports.ROLSBYPROJECTS = ROLSBYPROJECTS;
exports.SERVICES_BY_PROJECT = SERVICES_BY_PROJECT;
exports["default"] = usePermissions;
exports.havePermission = havePermission;
//# sourceMappingURL=index.js.map
