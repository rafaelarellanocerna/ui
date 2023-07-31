import { FC, ReactNode } from 'react';
import { OrganismUserDefaultProps } from '../../OrganismUser/default';
import { MoleculeSearchBarProps } from '../../../@molecules/MoleculeSearchBar';
import { AtomLinkProps } from '../../../@atoms/AtomLink/types';
import { AtomImageTypes } from '../../../@atoms/AtomImage/types';
import { AtomDropdownSidebarProps } from '../../../@atoms/AtomDropdownSidebar/types';
import { OrganismSidebarProps } from '../../OrganismSidebar/default';
export declare type DefaultHeaderTypes = {
    logo?: {
        src?: string;
        componentsProps?: {
            linkProps?: AtomLinkProps;
            imageProps?: AtomImageTypes;
        };
    };
    userAuth?: {
        component?: ReactNode;
        props?: OrganismUserDefaultProps;
    };
    searchBar?: {
        component?: ReactNode;
        searchBarProps?: MoleculeSearchBarProps;
    };
    links?: AtomDropdownSidebarProps;
    sidebar?: OrganismSidebarProps;
};
declare const DefaultHeader: FC<DefaultHeaderTypes>;
export default DefaultHeader;
