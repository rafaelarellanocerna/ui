import { FC } from 'react';
import { AtomTextTypes } from '../../../@atoms/AtomText/types';
import { AtomIconTypes } from '../../../@atoms/AtomIcon/types';
import { AtomWrapperTypes } from '../../../@atoms/AtomWrapper/types';
import { AtomImageTypes } from '../../../@atoms/AtomImage/types';
import { AtomLinkProps } from '../../../@atoms/AtomLink/types';
import { AtomButtonTypes } from '../../../@atoms/AtomButton/types';
export interface OrganismUserDefaultProps {
    options?: {
        id?: string;
        label?: string;
        link?: string;
    }[];
    componentProps?: {
        userProps?: {
            wrapperProps?: AtomWrapperTypes;
            imageProps?: AtomImageTypes;
            menuProps?: {
                wrapperProps?: AtomWrapperTypes;
                buttonProps?: {
                    buttonProps?: AtomButtonTypes;
                    textProps?: AtomTextTypes;
                    iconProps?: AtomIconTypes;
                };
                menuDropdownProps?: {
                    wrapperProps?: AtomButtonTypes;
                    linkProps?: AtomLinkProps;
                    buttonProps?: AtomButtonTypes;
                };
            };
        };
        authProps?: {
            wrapperProps?: AtomWrapperTypes;
            loginProps?: AtomLinkProps;
            registerProps?: AtomLinkProps;
        };
    };
}
declare const OrganismUserDefault: FC<OrganismUserDefaultProps>;
export default OrganismUserDefault;
