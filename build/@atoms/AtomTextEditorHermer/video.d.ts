import { Node } from '@tiptap/core';
export interface VideoOptions {
    allowFullscreen: boolean;
    controls: boolean;
    HTMLAttributes: {
        [key: string]: any;
    };
}
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        video: {
            setVideo: (options: {
                src: string;
            }) => ReturnType;
        };
    }
}
declare const _default: Node<VideoOptions, any>;
export default _default;
