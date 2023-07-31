/// <reference types="react" />
import { AtomTableColumnTypes } from '../types';
declare type IsLoadingProps<T extends object> = {
    take?: number;
    loading: boolean;
    columns: AtomTableColumnTypes<T>[];
    children?: React.ReactNode;
};
declare const IsLoadingTable: <T extends object>(props: IsLoadingProps<T>) => import("@emotion/react/jsx-runtime").JSX.Element;
export default IsLoadingTable;
