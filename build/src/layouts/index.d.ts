import { QueryTypeNode } from '@types';
import { FC } from 'react';
export declare const AllLayouts: {
    login: FC<QueryTypeNode>;
    admin: FC<QueryTypeNode>;
    default: FC<QueryTypeNode>;
    profile: FC<QueryTypeNode>;
    dashboard: FC<QueryTypeNode>;
    customize: FC<QueryTypeNode>;
};
export declare type LayoutType = {
    Layout?: keyof typeof AllLayouts;
    role?: string | string[];
};
declare const LayoutContext: FC<LayoutType>;
export default LayoutContext;
