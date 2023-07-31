import { Reducer } from 'react';
declare const TypesReducers: {
    SETALLCUSTOMIZE: (_: CustomizeReducerType, payload: PayloadType) => {
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
    SETCUSTOMIZE: (state: CustomizeReducerType, payload: PayloadType) => {
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
};
declare type PayloadType = {
    key: keyof typeof initialState;
    value: object;
};
declare type Action = {
    type: keyof typeof TypesReducers;
    payload: PayloadType;
};
export declare type CustomizeReducerType = typeof initialState;
export declare const initialState: {
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
declare const Customize: Reducer<CustomizeReducerType, Action>;
export default Customize;
