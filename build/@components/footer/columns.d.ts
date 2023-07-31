import { SerializedStyles } from '@emotion/react';
import { FC, ReactElement } from 'react';
interface FootercolumnsType {
    children?: ReactElement[];
    wrapper?: SerializedStyles;
    columns?: SerializedStyles;
}
declare const FooterColumnsComponent: FC<FootercolumnsType>;
export default FooterColumnsComponent;
