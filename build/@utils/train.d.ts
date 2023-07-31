declare const net: ({
    input: {
        r: number;
        g: number;
        b: number;
    };
    output: {
        white: number;
        black?: undefined;
    };
} | {
    input: {
        r: number;
        g: number;
        b: number;
    };
    output: {
        black: number;
        white?: undefined;
    };
})[];
export default net;
