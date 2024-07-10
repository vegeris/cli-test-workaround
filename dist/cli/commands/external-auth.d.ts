/**
 * `slack external-auth`
 * @param appPath path to app
 * @param teamFlag team domain of the relevant app
 * @param provider provider to add external auth for
 * @param flags specification of external-auth, e.g. add or add-secret
 * @returns command output
 */
export declare const externalAuth: (appPath: string, teamFlag: string, provider: string, flags: string, options?: {
    qa?: boolean;
}) => Promise<string>;
declare const _default: {
    externalAuth: (appPath: string, teamFlag: string, provider: string, flags: string, options?: {
        qa?: boolean | undefined;
    } | undefined) => Promise<string>;
};
export default _default;
//# sourceMappingURL=external-auth.d.ts.map