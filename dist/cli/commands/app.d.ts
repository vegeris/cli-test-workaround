/**
 * `slack app delete`
 * @param appPath path to app
 * @param teamFlag team domain for the function's app
 * @returns command output
 */
export declare const del: (appPath: string, teamFlag: string, options?: {
    isLocalApp?: boolean;
    qa?: boolean;
}) => Promise<string>;
/**
 * `slack app install`
 * @param appPath path to app
 * @param teamFlag team domain where the app will be installed
 * @returns command output
 */
export declare const install: (appPath: string, teamFlag: string, options?: {
    qa?: boolean;
}) => Promise<string>;
/**
 * `slack app list`
 * @param appPath path to app
 * @returns command output
 */
export declare const list: (appPath: string, options?: {
    qa?: boolean;
}) => Promise<string>;
declare const _default: {
    workspaceDelete: (appPath: string, teamFlag: string, options?: {
        isLocalApp?: boolean | undefined;
        qa?: boolean | undefined;
    } | undefined) => Promise<string>;
    workspaceInstall: (appPath: string, teamFlag: string, options?: {
        qa?: boolean | undefined;
    } | undefined) => Promise<string>;
    workspaceList: (appPath: string, options?: {
        qa?: boolean | undefined;
    } | undefined) => Promise<string>;
};
export default _default;
//# sourceMappingURL=app.d.ts.map