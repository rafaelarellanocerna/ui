declare const _default: ({
    input: string;
    output: {
        file: string;
        format: string;
    }[];
    plugins: any[];
    preserveModules?: undefined;
} | {
    input: string[];
    output: {
        dir: string;
        format: string;
        sourcemap: boolean;
    }[];
    preserveModules: boolean;
    plugins: any[];
})[];
export default _default;
