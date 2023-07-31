import { IFunctionArrayInput } from '@types';
import { DependencyList } from 'react';
export declare const SERVICES_BY_PROJECT: import("@apollo/client").DocumentNode;
export declare const MEBYID: import("@apollo/client").DocumentNode;
export declare const ROLSBYPROJECTS: import("@apollo/client").DocumentNode;
declare type Props = {
    userId?: string;
    role?: string;
    projectId?: string;
    service?: string;
};
declare const DEFAULT_PERMISSION = "DISABLED";
export declare type PermissionType = {
    access: 'READER' | 'WRITE' | 'CUSTOM' | 'DISABLED' | typeof DEFAULT_PERMISSION;
    permissions: IFunctionArrayInput[];
};
declare const usePermissions: (props?: Props, deps?: DependencyList) => PermissionType;
export declare const havePermission: (permission: PermissionType, funcinalityConame: string) => boolean;
export default usePermissions;
