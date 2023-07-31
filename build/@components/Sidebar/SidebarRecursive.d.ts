import { FC } from 'react';
export interface Links {
    id?: string;
    type?: string;
    direction?: string;
    icon?: string;
    label?: string;
    link?: string;
    subFields?: Links[];
}
declare type SidebarRecursiveProps = {
    data?: Links[];
    level?: number;
    isOpen?: boolean;
};
declare const SidebarRecursive: FC<SidebarRecursiveProps>;
export default SidebarRecursive;
