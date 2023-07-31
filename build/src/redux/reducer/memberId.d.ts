import { Reducer } from 'react';
declare const TypesReducers: {
    SETMEMBER: (_: MemberIDReduceType, payload: string) => string;
};
declare type UserAction = {
    type: keyof typeof TypesReducers;
    payload: MemberIDReduceType;
};
export declare type MemberIDReduceType = string;
export declare const initialState: MemberIDReduceType;
declare const memberID: Reducer<MemberIDReduceType, UserAction>;
export default memberID;
