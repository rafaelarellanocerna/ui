import { Reducer } from 'react';
declare const TypesReducers: {
    TOGGLESIDEBAR: (state: SidebarReducerType, _: boolean) => boolean;
    CLOSESIDEBAR: () => SidebarReducerType;
};
declare type UserAction = {
    type: keyof typeof TypesReducers;
    payload: SidebarReducerType;
};
export declare type SidebarReducerType = boolean;
export declare const initialState: SidebarReducerType;
declare const SideBarReducer: Reducer<SidebarReducerType, UserAction>;
export default SideBarReducer;
