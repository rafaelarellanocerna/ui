import { LinkProps } from 'next/link';
import { AtomLinkProps } from '../AtomLink/types';
import { AtomTextTypes } from '../AtomText/types';
import { AtomWrapperTypes } from '../AtomWrapper/types';
export interface Link {
    id?: string;
    type?: string;
    direction?: string;
    label?: string;
    link?: string | LinkProps['href'];
    subFields?: Link[];
}
export interface RecursiveDropdownHook {
    data?: Link[];
    recursive?: boolean;
    stylesWrapper?: AtomWrapperTypes;
    stylesText?: AtomTextTypes;
    stylesLink?: AtomLinkProps;
}
