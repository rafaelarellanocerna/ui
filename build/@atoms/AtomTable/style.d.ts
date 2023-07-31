/// <reference types="react" />
import { SerializedStyles } from '@emotion/utils';
import { AtomTableTypes } from './types';
declare type Types = {
    customCSS?: SerializedStyles;
};
export declare const AtomTableStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & AtomTableTypes<Types>, import("react").DetailedHTMLProps<import("react").TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, {}>;
export declare const AtomTbodyStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & Types, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, {}>;
export declare const TDStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & Types, import("react").DetailedHTMLProps<import("react").TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, {}>;
export {};
