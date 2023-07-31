import { LoaderProps } from '@atoms/AtomLoader/types';
import { AtomWrapperTypes } from '@atoms/AtomWrapper/types';
import { SerializedStyles } from '@emotion/utils';
import { Dispatch, RefObject, SetStateAction, UIEventHandler } from 'react';
export declare type StatePagination = {
    page: number;
    limit: number;
    hasnextpage: boolean;
    hasprevpage: boolean;
    pagingcounter: number;
    totaldocs: number;
};
export declare type AtomTableTypes<T extends object> = {
    tableWidth?: string;
    id?: string;
    width?: string;
    height?: string;
    margin?: string;
    color?: string;
    loaderProps?: LoaderProps;
    loading?: boolean;
    borderRadius?: string;
    data?: T[];
    columns: AtomTableColumnTypes<T>[];
    refObject?: RefObject<any>;
    state?: StatePagination;
    dispatch?: Dispatch<SetStateAction<StatePagination>>;
    onScroll?: UIEventHandler<HTMLDivElement | HTMLFormElement | HTMLLIElement>;
    customCSS?: SerializedStyles;
    loaderWrapper?: AtomWrapperTypes;
};
export declare type AtomTableColumnTypes<T extends object> = {
    id?: string;
    title?: string | JSX.Element;
    width?: string;
    view: (data?: T) => JSX.Element;
    customCSS?: SerializedStyles;
};
