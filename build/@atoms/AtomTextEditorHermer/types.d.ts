import { SerializedStyles } from '@emotion/react';
import { Editor } from '@tiptap/core';
export declare type AtomTextEditorOptions = {
    notIncludeSelectFonts?: boolean;
    notincludeTableOptions?: boolean;
};
export declare type AtomTextEditorType = {
    id?: string;
    content?: string;
    onUpdate?: (e: Editor) => void;
    options?: AtomTextEditorOptions;
    onCustomCSSMain?: () => SerializedStyles;
    onCustomCSSMenuBar?: () => SerializedStyles;
    onCustomCSSContent?: () => SerializedStyles;
};
