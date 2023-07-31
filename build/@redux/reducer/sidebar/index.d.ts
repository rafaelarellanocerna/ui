import { Reducer } from 'react';
declare const TypesReducers: {
    TOGGLESIDEBAR: (state: boolean, _: boolean) => boolean;
    CLOSESIDEBAR: () => boolean;
};
declare type UserAction = {
    type: keyof typeof TypesReducers;
    payload: boolean;
};
export declare const SideBarReducer: Reducer<boolean, UserAction>;
export default SideBarReducer;
