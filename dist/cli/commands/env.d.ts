/**
 * `slack env add`
 * @param appPath path to app
 * @param teamFlag team domain to add env var to
 * @param secretKey environment variable key
 * @param secretValue environment variable value
 * @returns command output
 */
export declare const add: (appPath: string, teamFlag: string, secretKey: string, secretValue: string, options?: {
    qa?: boolean;
}) => Promise<string>;
/**
 * `slack env list`
 * @param appPath path to app
 * @param teamFlag team domain to list env vars for
 * @returns command output
 */
export declare const list: (appPath: string, teamFlag: string, options?: {
    qa?: boolean;
}) => Promise<string>;
/**
 * `slack env remove`
 * @param appPath path to app
 * @param teamFlag team domain to remove env var from
 * @param secretKey environment variable key
 * @returns command output
 */
export declare const remove: (appPath: string, teamFlag: string, secretKey: string, options?: {
    qa?: boolean;
}) => Promise<string>;
declare const _default: {
    envAdd: (appPath: string, teamFlag: string, secretKey: string, secretValue: string, options?: {
        qa?: boolean | undefined;
    } | undefined) => Promise<string>;
    envList: (appPath: string, teamFlag: string, options?: {
        qa?: boolean | undefined;
    } | undefined) => Promise<string>;
    envRemove: (appPath: string, teamFlag: string, secretKey: string, options?: {
        qa?: boolean | undefined;
    } | undefined) => Promise<string>;
};
export default _default;
//# sourceMappingURL=env.d.ts.map