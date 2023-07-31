import { FC } from 'react';
import { AtomContainerTypes } from '../../../@atoms/AtomContainer/types';
import { AtomImageTypes } from '../../../@atoms/AtomImage/types';
import { AtomLinkProps } from '../../../@atoms/AtomLink/types';
import { AtomWrapperTypes } from '../../../@atoms/AtomWrapper/types';
import { OrganismUserDefaultProps } from '../../OrganismUser/default';
export declare type AdminHeaderTypes = {
    logo?: {
        src: string;
        componentsProps?: {
            linkProps?: AtomLinkProps;
            imageProps?: AtomImageTypes;
        };
    };
    componentsProps?: {
        containerProps?: AtomContainerTypes;
        wrapperProps?: AtomWrapperTypes;
    };
    organismUser?: OrganismUserDefaultProps;
};
declare const AdminHeader: FC<AdminHeaderTypes>;
export default AdminHeader;
