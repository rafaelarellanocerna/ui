import { SerializedStyles } from '@emotion/react';
import { FC } from 'react';
declare type Props = {
    buttonText?: string;
    token: string;
    nameFileDownload: string;
    customCSS?: SerializedStyles;
};
export declare const DOWNLOAD_FILES: import("@apollo/client").DocumentNode;
declare const DownloadFile: FC<Props>;
export default DownloadFile;
