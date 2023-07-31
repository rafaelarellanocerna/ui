import { OperationVariables, QueryResult } from '@apollo/client';
import { ReactNode } from 'react';
import { NextComponentType, NextPage, NextPageContext } from 'next';
import { AppInitialProps } from 'next/app';
import { Router } from 'next/router';
import { IQuery, IMutation } from './schemas';
export type { Editor } from '@tiptap/core';
export * from './schemas';
export declare type Layout = (page: ReactNode) => ReactNode;
export declare type NextPageFC<L = any, P = any, IP = P> = NextPage<P, IP> & L;
export declare type QueryTypeChildren = {
    children: ReactNode;
};
export declare type QueryType = QueryResult<IQueryFilter<'me'>, OperationVariables>;
export declare type QueryTypeNode = {
    query: QueryType;
    role?: string | string[];
};
export declare type AppPropsWithLayout<L = any, P = any> = AppInitialProps & {
    Component: NextComponentType<NextPageContext, any, P> & L;
    router: Router;
    __N_SSG?: boolean | undefined;
    __N_SSP?: boolean | undefined;
};
export declare type IQueryFilter<T extends keyof IQuery> = Pick<IQuery, T>;
export declare type IMutationFilter<T extends keyof IMutation> = Pick<IMutation, T>;
export declare type IGraphQLResponseRoot = {
    data?: IQuery | IMutation;
    errors?: Array<IGraphQLResponseError>;
};
interface IGraphQLResponseError {
    message: string;
    locations?: Array<IGraphQLResponseErrorLocation>;
    [propName: string]: any;
}
interface IGraphQLResponseErrorLocation {
    line: number;
    column: number;
}
