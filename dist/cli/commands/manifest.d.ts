/**
 * `slack manifest validate`
 * @param appPath path to app
 * @returns command output
 */
export declare const validate: (appPath: string, options?: {
    qa?: boolean;
}) => Promise<string>;
declare const _default: {
    manifestValidate: (appPath: string, options?: {
        qa?: boolean | undefined;
    } | undefined) => Promise<string>;
};
export default _default;
//# sourceMappingURL=manifest.d.ts.map