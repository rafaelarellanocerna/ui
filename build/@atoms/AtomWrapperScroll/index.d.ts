import { SerializedStyles } from '@emotion/react';
import { FC, MutableRefObject, ReactNode } from 'react';
declare type Props = {
    children?: ReactNode;
    refObject: MutableRefObject<any>;
    minRestoffsetTop?: number;
    customCSSW?: SerializedStyles;
};
declare const AtomWrapperScroll: FC<Props>;
export default AtomWrapperScroll;
