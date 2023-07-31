import { AtomButtonTypes } from '@atoms/AtomButton/types';
import { Link } from '@atoms/AtomDropdown/types';
import { AtomIconTypes } from '@atoms/AtomIcon/types';
import { AtomWrapperTypes } from '@atoms/AtomWrapper/types';
import { SerializedStyles } from '@emotion/react';
import { FC } from 'react';
declare type Props = {
    Links: Link[];
    buttonProps?: AtomButtonTypes;
    iconProps?: AtomIconTypes;
    customCSS?: SerializedStyles;
    ContainerPublicLinks?: {
        containerProps?: AtomWrapperTypes;
        background?: string;
    };
};
declare const Sidebar: FC<Props>;
export default Sidebar;
