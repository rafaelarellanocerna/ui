import { FC } from 'react';
import { AtomWrapperTypes } from '../../../@atoms/AtomWrapper/types';
import { AtomDropdownSidebarProps } from '../../../@atoms/AtomDropdownSidebar/types';
export declare type OrganismSidebarProps = {
    links?: AtomDropdownSidebarProps;
    componentsProps?: {
        wrapperProps?: AtomWrapperTypes;
    };
};
declare const OrganismSidebar: FC<OrganismSidebarProps>;
export default OrganismSidebar;
