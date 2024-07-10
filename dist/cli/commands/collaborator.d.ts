/**
 * `slack collaborators add`
 * @param appPath path to app
 * @param teamFlag team domain to add collaborators to
 * @param collaboratorEmail email of the user to be added as a collaborator
 * @returns command output
 */
export declare const add: (appPath: string, teamFlag: string, collaboratorEmail: string, options?: {
    qa?: boolean;
}) => Promise<string>;
/**
 * `slack collaborators list`
 * @param appPath path to app
 * @param teamFlag team domain to list collaborators for
 * @returns command output
 */
export declare const list: (appPath: string, teamFlag: string, options?: {
    qa?: boolean;
}) => Promise<string>;
/**
 * `slack collaborators remove`
 * @param appPath path to app
 * @param teamFlag team domain to remove collaborators from
 * @param collaboratorEmail email of the user to be removed as a collaborator
 * @returns command output
 */
export declare const remove: (appPath: string, teamFlag: string, collaboratorEmail: string, options?: {
    qa?: boolean;
}) => Promise<string>;
declare const _default: {
    collaboratorsAdd: (appPath: string, teamFlag: string, collaboratorEmail: string, options?: {
        qa?: boolean | undefined;
    } | undefined) => Promise<string>;
    collaboratorsList: (appPath: string, teamFlag: string, options?: {
        qa?: boolean | undefined;
    } | undefined) => Promise<string>;
    collaboratorsRemove: (appPath: string, teamFlag: string, collaboratorEmail: string, options?: {
        qa?: boolean | undefined;
    } | undefined) => Promise<string>;
};
export default _default;
//# sourceMappingURL=collaborator.d.ts.map