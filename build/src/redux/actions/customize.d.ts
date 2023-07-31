import { initialState } from '../reducer/customize';
declare type PayloadType = {
    key: keyof typeof initialState;
    value: object;
};
export declare const setCustomize: (payload: PayloadType) => {
    type: string;
    payload: PayloadType;
};
export declare const setAllCustomize: (payload: PayloadType) => {
    type: string;
    payload: PayloadType;
};
export {};
