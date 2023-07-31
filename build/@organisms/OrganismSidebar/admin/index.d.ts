import { FC, ReactNode } from 'react';
import { Link } from '../../../@atoms/AtomDropdown/types';
import { AtomWrapperTypes } from '../../../@atoms/AtomWrapper/types';
import { AtomTextTypes } from '../../../@atoms/AtomText/types';
export declare type OrganismAdminSidebarProps = {
    logo?: {
        logoMini?: string;
        logo?: string;
    };
    links?: LinkProps[];
    customIcon?: (event: LinkProps) => ReactNode;
    customLink?: (event: LinkProps) => ReactNode;
    componentsProps?: {
        containerProps?: AtomWrapperTypes;
        wrapperProps?: AtomWrapperTypes;
        sidebarProps?: {
            containerProps?: AtomWrapperTypes;
            wrapperProps?: AtomWrapperTypes;
            sidebarProps?: RecursiveSidebarLinksProps;
        };
    };
    title?: {
        title?: string;
        textProps?: AtomTextTypes;
    };
    disableSidebar?: boolean;
};
declare const OrganismAdminSidebar: FC<OrganismAdminSidebarProps>;
export default OrganismAdminSidebar;
export interface LinkProps extends Link {
    icon?: string;
    subLinks?: LinkProps[];
}
declare type RecursiveSidebarLinksProps = {
    links?: LinkProps[];
    customIcon?: (event: LinkProps) => ReactNode;
    customLink?: (event: LinkProps) => ReactNode;
    level?: number;
};
