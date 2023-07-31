import { AtomContainerTypes } from '@atoms/AtomContainer/types';
import { AtomWrapperTypes } from '@atoms/AtomWrapper/types';
import { FC, ReactNode } from 'react';
declare type Props = {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    componentProps?: {
        containerProps?: AtomContainerTypes;
        wrapperProps?: AtomWrapperTypes;
    };
    key?: string;
};
declare const AtomModalBox: FC<Props>;
export default AtomModalBox;
