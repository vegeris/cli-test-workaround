/**
 * `slack function access`
 * @param appPath path to app
 * @param teamFlag team domain for the function's app
 * @param flags specification of function distribution, i.e. --name greeting_function --app-collaborators
 * @returns command output
 */
export declare const access: (appPath: string, teamFlag: string, flags: string, options?: {
    qa?: boolean;
}) => Promise<string>;
declare const _default: {
    functionDistribute: (appPath: string, teamFlag: string, flags: string, options?: {
        qa?: boolean | undefined;
    } | undefined) => Promise<string>;
    functionAccess: (appPath: string, teamFlag: string, flags: string, options?: {
        qa?: boolean | undefined;
    } | undefined) => Promise<string>;
};
export default _default;
//# sourceMappingURL=function.d.ts.map