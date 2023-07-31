import { FC } from 'react';
import { AtomButtonTypes } from '../../@atoms/AtomButton/types';
import { AtomInputTypes } from '../../@atoms/AtomInput/types';
import { AtomWrapperTypes } from '../../@atoms/AtomWrapper/types';
export declare type MoleculeSearchBarProps = {
    componentsProps?: {
        wrapperProps?: AtomWrapperTypes;
        inputProps?: AtomInputTypes;
        butonProps?: AtomButtonTypes;
    };
};
declare const MoleculeNewsLetter: FC<MoleculeSearchBarProps>;
export default MoleculeNewsLetter;
