import { SerializedStyles } from '@emotion/utils';
export declare type LoaderProps = {
    isLoading?: boolean;
    widthLoader?: string;
    type?: 'fullscreen' | 'small';
    width?: string;
    height?: string;
    backgroundColor?: string;
    backgroundImage?: string;
    colorLoading?: string;
    customCSS?: SerializedStyles;
};
