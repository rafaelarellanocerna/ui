import { FC } from 'react';
import { AtomImageTypes } from '@atoms/AtomImage/types';
export interface MoleculeImageCardTypes extends AtomImageTypes {
    background?: string;
    src?: string;
}
export declare const MoleculeCardImage: FC<MoleculeImageCardTypes>;
export default MoleculeCardImage;
