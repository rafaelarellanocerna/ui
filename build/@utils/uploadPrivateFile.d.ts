interface propsPrivate {
    memberId: string;
    projectId: string;
    folderId?: string;
    fileId?: string;
    token?: string;
    fileInput: File;
    isProfile?: boolean;
}
export declare const uploadFile: (url: string, file: File) => Promise<void | Response>;
declare const uploadPrivateFile: (data: propsPrivate) => propsPrivate | Promise<{
    url: any;
    partialUrl: any;
    fileName: string;
    fileId: any;
    token: any;
}>;
export default uploadPrivateFile;
