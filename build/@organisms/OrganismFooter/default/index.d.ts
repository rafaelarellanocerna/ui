import { FC, ReactElement } from 'react';
import { AtomContainerTypes } from '../../../@atoms/AtomContainer/types';
import { AtomIconTypes } from '../../../@atoms/AtomIcon/types';
import { AtomImageTypes } from '../../../@atoms/AtomImage/types';
import { AtomLinkProps } from '../../../@atoms/AtomLink/types';
import { AtomTextTypes } from '../../../@atoms/AtomText/types';
import { AtomWrapperTypes } from '../../../@atoms/AtomWrapper/types';
interface Link {
    label?: string;
    href?: string;
    link?: string;
    componentsProps?: {
        linkProps?: AtomLinkProps;
    };
}
interface SocialLink {
    icon?: string;
    href?: string;
    link?: string;
    componentsProps?: {
        linkProps?: AtomLinkProps;
        iconProps?: AtomIconTypes;
    };
}
interface Column {
    title?: string;
    links?: Link[];
    component?: ReactElement;
    componentsProps?: {
        wrapperProps?: AtomWrapperTypes;
        titleProps?: AtomTextTypes;
    };
}
export declare type DefaultFooterTypes = {
    imageLogo?: string;
    links?: SocialLink[];
    columns?: Column[];
    componentsProps?: {
        containerProps?: AtomContainerTypes;
        wrapperProps?: AtomWrapperTypes;
        logoProps?: {
            wrapperProps?: AtomWrapperTypes;
            logoProps?: {
                linkProps?: AtomLinkProps;
                imageProps?: AtomImageTypes;
            };
            linksProps?: {
                wrapperProps?: AtomWrapperTypes;
                linkProps?: AtomLinkProps;
                iconProps?: AtomIconTypes;
            };
            columnProps?: {
                wrapperProps?: AtomWrapperTypes;
                titleProps?: AtomTextTypes;
                linkProps?: AtomLinkProps;
            };
        };
    };
};
declare const DefaultFooter: FC<DefaultFooterTypes>;
export default DefaultFooter;
