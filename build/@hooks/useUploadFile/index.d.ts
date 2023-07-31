import { ApolloError } from '@apollo/client';
import { IMutationFilter, IUploadFilePrivatePayload } from '@ixulabs/ui';
export declare type useUploadFileVariables = {
    fileInput: File;
    projectId: string;
    memberId: string;
    isProfile: boolean;
    descriptionType?: string;
};
declare type OPTIONSHOOK = {
    onCompleted(data: IuseUploadFileResult): void;
    onError(error: ApolloError): void;
};
export declare type IuseUploadFileResult = IUploadFilePrivatePayload & {
    name: string;
    fileName: string;
    description: {
        size: string;
        type: string;
    };
};
export declare const useUploadFile: (options?: OPTIONSHOOK) => {
    data?: IMutationFilter<"uploadFilePrivate">;
    error?: ApolloError;
    loading: boolean;
    called: boolean;
    client: import("@apollo/client").ApolloClient<object>;
    reset(): void;
    uploadFile: (values: useUploadFileVariables, optionsByFn?: OPTIONSHOOK) => Promise<import("@apollo/client").FetchResult<IMutationFilter<"uploadFilePrivate">, Record<string, any>, Record<string, any>>>;
};
export {};
