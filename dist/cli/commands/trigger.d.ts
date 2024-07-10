/**
 * `slack trigger access`
 * @param appPath path to app
 * @param teamFlag team domain of the updating trigger
 * @param flags specification of trigger access, e.g. --trigger-id Ft0143UPTAV8 --everyone
 * @returns command output
 */
export declare const access: (appPath: string, teamFlag: string, flags: string, options?: {
    qa?: boolean;
}) => Promise<string>;
/**
 * `slack trigger create`
 * @returns command output
 */
export declare const create: ({ appPath, teamFlag, flag, orgWorkspaceGrantFlag, options, }: {
    /** path to app */
    appPath: string;
    /** team domain where the trigger will be created */
    teamFlag: string;
    /** any additional flags to provide i.e. method of trigger creation + ref, e.g. --trigger-def triggers/add-pin.json */
    flag: string;
    /** supplies additional workspace within an org to grant app access to as part of install */
    orgWorkspaceGrantFlag?: string | undefined;
    options?: {
        /** Local app for local run sessions */
        localApp?: boolean | undefined;
        /** Whether to run against --slackdev or production */
        qa?: boolean | undefined;
    } | undefined;
}) => Promise<string>;
/**
 * `slack trigger delete`
 * @param appPath path to the app
 * @param teamFlag team domain to delete trigger from
 * @param flag
 * @returns command output
 */
export declare const del: (appPath: string, teamFlag: string, flag: string, options?: {
    qa?: boolean;
}) => Promise<string>;
/**
 * `slack trigger info`
 * @param appPath path to the app
 * @param teamFlag team domain of the trigger
 * @param flag arbitrary additional flags
 * @returns command output
 */
export declare const info: (appPath: string, teamFlag: string, flag: string, options?: {
    qa?: boolean;
}) => Promise<string>;
/**
 * `slack trigger list`
 * @param appPath path to app
 * @param teamFlag team domain for listing all triggers
 * @param flag arbitrary additional flags to pass
 * @returns command output
 */
export declare const list: (appPath: string, teamFlag: string, flag: string, options?: {
    qa?: boolean;
}) => Promise<string>;
/**
 * `slack trigger update`
 * @param appPath path to the app
 * @param teamFlag team domain for the updating trigger
 * @param flag arbitrary additional flags to pass to command
 * @returns command output
 */
export declare const update: (appPath: string, teamFlag: string, flag: string, options?: {
    qa?: boolean;
}) => Promise<string>;
declare const _default: {
    triggerAccess: (appPath: string, teamFlag: string, flags: string, options?: {
        qa?: boolean | undefined;
    } | undefined) => Promise<string>;
    triggerCreate: ({ appPath, teamFlag, flag, orgWorkspaceGrantFlag, options, }: {
        /** path to app */
        appPath: string;
        /** team domain where the trigger will be created */
        teamFlag: string;
        /** any additional flags to provide i.e. method of trigger creation + ref, e.g. --trigger-def triggers/add-pin.json */
        flag: string;
        /** supplies additional workspace within an org to grant app access to as part of install */
        orgWorkspaceGrantFlag?: string | undefined;
        options?: {
            /** Local app for local run sessions */
            localApp?: boolean | undefined;
            /** Whether to run against --slackdev or production */
            qa?: boolean | undefined;
        } | undefined;
    }) => Promise<string>;
    triggerDelete: (appPath: string, teamFlag: string, flag: string, options?: {
        qa?: boolean | undefined;
    } | undefined) => Promise<string>;
    triggerInfo: (appPath: string, teamFlag: string, flag: string, options?: {
        qa?: boolean | undefined;
    } | undefined) => Promise<string>;
    triggerList: (appPath: string, teamFlag: string, flag: string, options?: {
        qa?: boolean | undefined;
    } | undefined) => Promise<string>;
    triggerUpdate: (appPath: string, teamFlag: string, flag: string, options?: {
        qa?: boolean | undefined;
    } | undefined) => Promise<string>;
};
export default _default;
//# sourceMappingURL=trigger.d.ts.map