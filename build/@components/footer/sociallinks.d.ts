import { AtomIconTypes } from '@atoms/AtomIcon/types';
import { AtomLinkProps } from '@atoms/AtomLink/types';
import { AtomWrapperTypes } from '@atoms/AtomWrapper/types';
import { FC } from 'react';
interface FooterSocialLink {
    icon?: string;
    href?: string;
    link?: string;
    styleIcon?: AtomIconTypes;
    styleLink?: AtomLinkProps;
}
interface FooterSolicialLinksType {
    socialLinks?: {
        stylesWrapper?: AtomWrapperTypes;
        styleLinks?: AtomLinkProps;
        styleIcons?: AtomIconTypes;
        links?: FooterSocialLink[];
    };
}
declare const FooterSolicialLinks: FC<FooterSolicialLinksType>;
export default FooterSolicialLinks;
