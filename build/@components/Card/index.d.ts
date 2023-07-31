import { FC, ReactElement } from 'react';
import { AtomWrapperTypes } from '@atoms/AtomWrapper/types';
export interface MoleculeCardTypes extends AtomWrapperTypes {
    children?: ReactElement | ReactElement[];
}
export declare const MoleculeCard: FC<MoleculeCardTypes>;
export default MoleculeCard;
