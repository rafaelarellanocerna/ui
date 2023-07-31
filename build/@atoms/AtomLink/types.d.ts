import { LinkProps } from 'next/link';
import { Ref } from 'react';
import { AtomTextTypes } from '../AtomText/types';
export declare type AtomLinkProps = AtomTextTypes & {
    link?: string | LinkProps['href'];
    href?: string;
    ref?: Ref<HTMLAnchorElement>;
    target?: string;
    onClick?: () => void;
};
