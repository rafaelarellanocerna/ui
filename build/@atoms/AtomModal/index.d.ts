import { ReactNode } from 'react';
import { AtomWrapperTypes } from '../AtomWrapper/types';
import { AtomContainerTypes } from '../AtomContainer/types';
interface Props {
    isOpen?: boolean;
    component?: ReactNode;
    componentProps?: {
        containerProps?: AtomContainerTypes;
        wrapperProps?: AtomWrapperTypes;
    };
    key?: string;
}
declare const AtomModal: (props: Props) => import("@emotion/react/jsx-runtime").JSX.Element;
export default AtomModal;
