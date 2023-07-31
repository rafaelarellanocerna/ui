import { ModalReduceType } from './modal';
import { SidebarReducerType } from './sidebar';
import { UserReducerType } from './user';
import { QuotationReduceType } from './quotation';
import { MemberIDReduceType } from './memberId';
import { CustomizeReducerType } from './customize';
import { SurveyDetailReducer } from './blog';
import { CartShopReducerType } from './cartshop';
declare const RootReducer: import("redux").Reducer<import("redux").CombinedState<{
    user: import("../../..").IMember;
    sideBar: boolean;
    modal: boolean;
    quotation: QuotationReduceType<object>;
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
    survey: SurveyDetailReducer;
    cartShop: CartShopReducerType;
}>, import("redux").AnyAction>;
export declare type RootStateType = {
    user: UserReducerType;
    sideBar: SidebarReducerType;
    modal: ModalReduceType;
    quotation: QuotationReduceType;
    memberID: MemberIDReduceType;
    customize: CustomizeReducerType;
    survey: SurveyDetailReducer;
    cartShop: CartShopReducerType;
};
export default RootReducer;
