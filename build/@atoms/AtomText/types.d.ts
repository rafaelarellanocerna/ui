import { SerializedStyles } from '@emotion/utils';
import { MotionProps } from 'framer-motion';
import { Ref } from 'react';
export declare type AtomTextTypes = MotionProps & {
    as?: 'p' | 'span' | 'a' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    color?: string;
    font?: string;
    className?: string;
    href?: string;
    children?: React.ReactNode | string | number | boolean | null;
    align?: 'center' | 'left' | 'right' | 'inherit';
    padding?: string;
    margin?: string;
    width?: string;
    maxWidth?: string;
    fontSize?: string;
    textDecoration?: 'underline' | 'line-through' | 'none' | 'inherit';
    ref?: Ref<any>;
    fontWeight?: 'bold' | 'normal' | 'light' | 'inherit' | 'semibold' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    cursor?: 'pointer' | 'default' | 'inherit' | 'text' | 'wait' | 'move' | 'not-allowed' | 'help' | 'zoom-in' | 'zoom-out' | 'context-menu' | 'cell' | 'crosshair' | 'vertical-text' | 'alias' | 'progress' | 'no-drop' | 'copy' | 'grab' | 'grabbing' | 'all-scroll' | 'col-resize' | 'row-resize' | 'n-resize' | 'e-resize' | 's-resize' | 'w-resize' | 'ne-resize' | 'nw-resize' | 'se-resize' | 'sw-resize' | 'ew-resize' | 'ns-resize' | 'nesw-resize' | 'nwse-resize' | 'zoom-in' | 'zoom-out' | 'grab' | 'grabbing' | 'custom';
    customCSS?: SerializedStyles;
    dangerouslySetInnerHTML?: {
        __html: string;
    };
};
