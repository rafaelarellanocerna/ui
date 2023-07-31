import { Reducer } from 'react';
declare const TypesReducers: {
    ADDCART: (state: CartShopReducerType, payload: string) => {
        id: string;
        quantity: number;
    }[];
    DELETECART: (state: CartShopReducerType, payload: string) => {
        id: string;
        quantity: number;
    }[];
    DELETEALLITEMCART: (state: CartShopReducerType, payload: string) => {
        id: string;
        quantity: number;
    }[];
    DELETEALLCART: () => any[];
    SETCART: (state: CartShopReducerType, payload: string) => {
        id: string;
        quantity: number;
    }[];
};
declare type UserAction = {
    type: keyof typeof TypesReducers;
    payload: string;
};
export declare type CartShopReducerType = {
    id: string;
    quantity: number;
}[];
declare const CartShopReducer: Reducer<CartShopReducerType, UserAction>;
export default CartShopReducer;
