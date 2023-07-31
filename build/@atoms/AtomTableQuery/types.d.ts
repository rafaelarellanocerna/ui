import { ApolloError, OperationVariables, QueryHookOptions, QueryResult } from '@apollo/client';
import { SerializedStyles } from '@emotion/utils';
import { DocumentNode } from 'graphql';
import { ICollectionSegmentInfo } from '../../@types';
export declare type StatePagination = {
    page: number;
    limit: number;
    hasnextpage: boolean;
    hasprevpage: boolean;
    pagingcounter: number;
    totaldocs: number;
};
export declare type ParamsTypes = {
    pageInfo: ICollectionSegmentInfo;
    totalCount: number;
};
export declare type AtomTableTypes<T extends object, P extends object> = {
    customCSS?: SerializedStyles;
    id?: string;
    columnscss?: (data: T) => SerializedStyles;
    data?: (data: P) => T[];
    options?: QueryHookOptions;
    QUERY: DocumentNode;
    columns: AtomTableColumnTypes<T>[];
    onCompleted?: (data: P) => void;
    onError?: (error: ApolloError) => void;
    onLoading?: (loading: boolean) => void;
    onUpdated?: (query: QueryResult<P, OperationVariables>) => void;
    searchBar?: JSX.Element;
    customCSST?: SerializedStyles;
};
export declare type AtomTableColumnTypes<T extends object> = {
    key?: string;
    sortable?: boolean;
    searchable?: boolean;
    title?: JSX.Element;
    view: (data?: T) => JSX.Element;
    css?: (data?: T) => SerializedStyles;
};
