interface PropsSettings {
    onCompleted?: () => void;
    onError?: () => void;
}
declare type UseLazyFetchType = [
    lazyFetch: () => void,
    fetch: {
        data: any;
        loading: boolean;
        error: any;
        isFetch: boolean;
        refetch: () => void;
    }
];
declare const useLazyFetch: (url: RequestInfo, setings?: PropsSettings, options?: RequestInit) => UseLazyFetchType;
export default useLazyFetch;
