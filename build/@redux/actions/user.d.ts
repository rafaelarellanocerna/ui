import { IQuery } from '@types';
declare type UserState = IQuery['me'];
export declare const SetUser: (payload: UserState) => {
    type: string;
    payload: import("@types").IMember;
};
export declare const UpdateUser: (payload: UserState) => {
    type: string;
    payload: import("@types").IMember;
};
export declare const Logout: () => {
    type: string;
};
export {};
