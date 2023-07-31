/// <reference types="redux-persist/types/persistreducer" />
/// <reference types="redux-persist/types/types" />
/// <reference types="redux-persist" />
declare const useStore: () => {
    store: import("redux").Store<import("redux").EmptyObject & {
        user: import("../..").IMember;
        sideBar: boolean;
        modal: boolean;
        quotation: import("./reducer/quotation").QuotationReduceType<object>;
        memberID: string;
        customize: {
            fonts: {
                title: string;
                description: string;
            };
            colors: {
                primary: string;
                secondary: string;
                background: string;
            };
            image: {
                main: {
                    url: string;
                    file: File;
                };
            };
            logo: {
                main: {
                    url: string;
                    file: File;
                };
                tagline: string;
            };
            button: {
                color: string;
                radius: string;
            };
        };
        survey: import("./reducer/blog").SurveyDetailReducer;
        cartShop: import("./reducer/cartshop").CartShopReducerType;
    } & import("redux-persist/es/persistReducer").PersistPartial, import("redux").AnyAction>;
    persistor: import("redux-persist").Persistor;
};
export default useStore;
