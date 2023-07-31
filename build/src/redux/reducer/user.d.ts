import { Reducer } from 'redux';
import { IMember } from '@types';
export declare type UserReducerType = IMember;
declare const TypesReducers: {
    SETUSER: (_: UserReducerType, payload: UserReducerType) => IMember;
    UPDATEUSER: (state: UserReducerType, payload: UserReducerType) => UserReducerType;
    LOGOUT: () => IMember;
};
declare type UserAction = {
    type: keyof typeof TypesReducers;
    payload: UserReducerType;
};
export declare const initialState: IMember;
export declare const UserReducer: Reducer<UserReducerType, UserAction>;
export default UserReducer;
