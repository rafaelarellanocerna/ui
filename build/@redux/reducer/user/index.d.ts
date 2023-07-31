import { Reducer } from 'redux';
import { IMember } from '@types';
declare const TypesReducers: {
    SETUSER: (_: IMember, payload: IMember) => IMember;
    UPDATEUSER: (state: IMember, payload: IMember) => IMember;
    LOGOUT: () => IMember;
};
declare type UserAction = {
    type: keyof typeof TypesReducers;
    payload: IMember;
};
export declare const initialState: IMember;
export declare const UserReducer: Reducer<IMember, UserAction>;
export default UserReducer;
