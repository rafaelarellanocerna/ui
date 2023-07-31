import { Reducer } from 'react';
declare const TypesReducers: {
    SETMODAL: (_: ModalReduceType, payload: boolean) => boolean;
    CLOSEMODAL: () => ModalReduceType;
    OPENMODAL: () => ModalReduceType;
};
declare type UserAction = {
    type: keyof typeof TypesReducers;
    payload: ModalReduceType;
};
export declare type ModalReduceType = boolean;
export declare const initialState: ModalReduceType;
declare const ModalReducer: Reducer<ModalReduceType, UserAction>;
export default ModalReducer;
