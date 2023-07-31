import { AtomIconTypes } from '@atoms/AtomIcon/types';
import { AtomWrapperTypes } from '@atoms/AtomWrapper/types';
import { FC } from 'react';
interface FooterLogoComponentType {
    logo: string;
    styles?: {
        stylesWrapper?: AtomWrapperTypes;
        styleIcons?: AtomIconTypes;
    };
}
declare const FooterLogoComponent: FC<FooterLogoComponentType>;
export default FooterLogoComponent;
