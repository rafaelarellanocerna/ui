declare type UploadFile = {
    name: string;
    orgcode: string;
};
declare const uploadImage: (image: File, options?: UploadFile) => Promise<any>;
export default uploadImage;
