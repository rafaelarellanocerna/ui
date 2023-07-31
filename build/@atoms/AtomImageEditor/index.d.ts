import { FC } from 'react';
import { SerializedStyles } from '@emotion/react';
declare type InputImageEditorProps = {
    wrapperCSS?: SerializedStyles;
    inputCSS?: SerializedStyles;
    modalCSS?: SerializedStyles;
    onChangeImageEditor?: ({ url: string, file: File }: {
        url: any;
        file: any;
    }) => void;
    imagePreview?: string;
    aspectRatio?: number;
};
declare const InputImageEditor: FC<InputImageEditorProps>;
export default InputImageEditor;
