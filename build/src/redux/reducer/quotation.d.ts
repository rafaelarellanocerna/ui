import { Reducer } from 'react';
declare const TypesReducers: {
    SETQUOTATION: (_: QuotationReduceType, payload: QuotationReduceTypePayload) => QuotationReduceTypePayload<object>;
    ADDQUOTATION: (state: QuotationReduceType, payload: QuotationReduceTypePayload) => {
        [x: number]: QuotationReduceTypePayload<object> | {
            id: number;
            data: object;
            done: boolean;
        };
    };
    DELETEQUOTATION: () => {};
};
declare type UserAction = {
    type: keyof typeof TypesReducers;
    payload: QuotationReduceTypePayload;
};
export declare type QuotationReduceTypePayload<T = object> = {
    id: number;
    data: T;
    done: boolean;
};
export declare type QuotationReduceType<T = object> = {
    [key: number]: {
        id: number;
        data: T;
        done: boolean;
    };
};
export declare const initialState: QuotationReduceType<object>;
declare const QuotationReducer: Reducer<QuotationReduceType, UserAction>;
export default QuotationReducer;
