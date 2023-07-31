import { FC } from 'react';
import { AtomIconTypes } from '../../@atoms/AtomIcon/types';
import { AtomInputTypes } from '../../@atoms/AtomInput/types';
import { AtomWrapperTypes } from '../../@atoms/AtomWrapper/types';
export declare type MoleculeSearchBarProps = {
    componentsProps?: {
        wrapperProps?: AtomWrapperTypes;
        inputProps?: AtomInputTypes;
        iconProps?: AtomIconTypes;
    };
};
declare const MoleculeSearchBar: FC<MoleculeSearchBarProps>;
export default MoleculeSearchBar;
