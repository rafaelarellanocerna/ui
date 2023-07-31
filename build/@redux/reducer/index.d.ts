declare const RootReducer: import("redux").Reducer<import("redux").CombinedState<{
    user: import("../..").IMember;
    sideBar: boolean;
}>, import("redux").AnyAction>;
export declare type RootStateType = ReturnType<typeof RootReducer>;
export default RootReducer;
