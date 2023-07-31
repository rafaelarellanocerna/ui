import { SerializedStyles } from '@emotion/react';
import { FC } from 'react';
import { Links } from './SidebarRecursive';
declare type Props = {
    links?: Links[];
    customCSS?: SerializedStyles;
};
declare const SidebarLinks: FC<Props>;
export default SidebarLinks;
