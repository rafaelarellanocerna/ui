import { AtomButtonTypes } from '@atoms/AtomButton/types';
import { AtomInputTypes } from '@atoms/AtomInput/types';
import { AtomWrapperTypes } from '@atoms/AtomWrapper/types';
import { FC } from 'react';
export interface MoleculeInsertCommentProps {
    componentsProps?: {
        inputProps?: AtomInputTypes;
        buttonProps?: AtomButtonTypes;
        wrapperProps?: AtomWrapperTypes;
    };
}
declare const MoleculeInsertComment: FC<MoleculeInsertCommentProps>;
export default MoleculeInsertComment;
