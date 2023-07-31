declare type IOptions = {
    error?: string;
    prefix?: string;
    suffix?: string;
};
declare const numberWithCommas: (x: number, opt?: IOptions) => string;
export default numberWithCommas;
