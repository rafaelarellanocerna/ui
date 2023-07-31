import { ApolloError } from '@apollo/client';
import { IUploadFilePrivatePayload } from '@ixulabs/ui';
export declare type useUploadFileVariables = {
    fileInput: File;
    projectId: string;
    memberId: string;
    isProfile: boolean;
    descriptionType?: string;
};
declare type OPTIONSHOOK = {
    onCompleted?: (data: IUplaodFileProps) => void;
    onError?: (error: ApolloError) => void;
};
export declare type IuseUploadFileResult = IUploadFilePrivatePayload & {
    name: string;
    fileName: string;
    description: {
        size: string;
        type: string;
    };
};
declare type IUplaodFileProps = {
    uploadFileUrl?: {
        fileName?: string;
        url: string;
    };
};
declare type uploadAssetsProps = {
    file: File;
    name: string;
    orgcode: string;
    options: OPTIONSHOOK;
};
export declare const useUploadAssets: () => {
    uploadAsset: (props: uploadAssetsProps) => Promise<import("@apollo/client").QueryResult<any, import("@apollo/client").OperationVariables>>;
    loading: boolean;
    error: ApolloError;
};
export {};
