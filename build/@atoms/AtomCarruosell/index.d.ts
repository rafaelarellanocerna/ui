import { SerializedStyles } from '@emotion/react';
import { FC } from 'react';
import { SwiperOptions } from 'swiper';
interface AtomCarrousellType {
    width?: string;
    height?: string;
    customCSS?: SerializedStyles;
    swiperProps?: SwiperOptions;
    slides?: JSX.Element[];
    children?: JSX.Element[];
    direction?: 'horizontal' | 'vertical';
    slidesPerView?: number;
    acentColor?: string;
}
declare const AtomCarrousell: FC<AtomCarrousellType>;
export default AtomCarrousell;
