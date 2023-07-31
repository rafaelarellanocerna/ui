import { FC } from 'react';
import { AtomWrapperTypes } from '../AtomWrapper/types';
import { AtomButtonTypes } from '../AtomButton/types';
interface AtomTabsProps {
    tabs?: {
        id?: string;
        title?: string;
        content: React.ReactNode;
        button?: (state: boolean) => React.ReactNode;
        onClick?: () => void;
    }[];
    componentsProps?: {
        containerProps?: AtomWrapperTypes;
        tabsProps?: {
            wrapperProps?: AtomWrapperTypes;
            buttonActiveProps?: AtomButtonTypes;
            buttonDisabledProps?: AtomButtonTypes;
        };
        contentProps?: {
            wrapperProps?: AtomWrapperTypes;
        };
    };
}
declare const AtomTabs: FC<AtomTabsProps>;
export default AtomTabs;
