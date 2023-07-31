import { AtomTextTypes } from '@atoms/AtomText/types';
import { AtomWrapperTypes } from '@atoms/AtomWrapper/types';
import { FC } from 'react';
interface AtomBannerProps {
    title?: string;
    description?: string;
    componentsProps?: {
        containerProps?: AtomWrapperTypes;
        wrapperProps?: AtomWrapperTypes;
        titleProps?: AtomTextTypes;
        descriptionProps?: AtomTextTypes;
    };
}
declare const AtomBanner: FC<AtomBannerProps>;
export default AtomBanner;
