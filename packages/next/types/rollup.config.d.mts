declare const _default: ({
    input: string;
    output: {
        dir: string;
        format: string;
    }[];
    external: string[];
    plugins: any[];
} | {
    input: string;
    output: {
        file: string;
        format: string;
    }[];
    plugins: import("rollup").Plugin[];
    external?: undefined;
})[];
export default _default;
