import type { ShellProcess } from '../../utils/types';
declare const _default: {
    /**
     * `slack platform activity`
     * @param flag
     * @returns command output
     */
    activity: ({ appPath, teamFlag, flag, localApp, qa, }: {
        /** Path to app */
        appPath: string;
        /** workspace or organization name or ID to deploy the app to */
        teamFlag: string;
        /** Arbitrary flags to provide to the command */
        flag?: string | undefined;
        /** Whether to operate on the local or deployed app */
        localApp?: boolean | undefined;
        /** Whether to operate against --slackdev or production */
        qa?: boolean | undefined;
    }) => Promise<string>;
    /**
     * waits for a specified sequence then returns the shell
     * At the specific point where the sequence is found to continue with test
     * @returns command output
     */
    activityTailStart: ({ appPath, teamFlag, stringToWaitFor, localApp, qa, }: {
        /** Path to app */
        appPath: string;
        /** workspace or organization name or ID to deploy the app to */
        teamFlag: string;
        /** expected string to be present in the output before this function returns */
        stringToWaitFor: string;
        /** Whether to operate on the local or deployed app */
        localApp?: boolean | undefined;
        /** Whether to operate against --slackdev or production */
        qa?: boolean | undefined;
    }) => Promise<ShellProcess>;
    /**
     * waits for a specified string in the `activity` output, kills the process then returns the output
     * @returns command output
     */
    activityTailStop: ({ proc, stringToWait, }: {
        proc: ShellProcess;
        /** expected string to be present in the output before process is killed */
        stringToWait: string;
    }) => Promise<string>;
    /**
     * `slack deploy`
     */
    deploy: ({ appPath, teamFlag, hideTriggers, orgWorkspaceGrantFlag, qa, }: {
        /** Path to app */
        appPath: string;
        /** workspace or organization name or ID to deploy the app to */
        teamFlag: string;
        /** hides output and prompts related to triggers. Defaults to `true`. */
        hideTriggers?: boolean | undefined;
        /**
         * Org workspace ID, or the string `all` to request access to all workspaces in the org,
         * to request grant access to in AAA scenarios
         */
        orgWorkspaceGrantFlag?: string | undefined;
        /** Whether to operate against --slackdev or production */
        qa?: boolean | undefined;
    }) => Promise<string>;
    /**
     * start `slack run`
     * - `runStop` must be used to stop `run` process
     * @returns shell object to kill it explicitly in the test case
     */
    runStart: ({ appPath, teamFlag, cleanup, hideTriggers, orgWorkspaceGrantFlag, qa, }: {
        /** Path to app */
        appPath: string;
        /** workspace or organization name or ID to deploy the app to */
        teamFlag: string;
        /** delete the app after `run` completes */
        cleanup?: boolean | undefined;
        /** hides output and prompts related to triggers. Defaults to `true`. */
        hideTriggers?: boolean | undefined;
        /**
         * Org workspace ID, or the string `all` to request access to all workspaces in the org,
         * to request grant access to in AAA scenarios
         */
        orgWorkspaceGrantFlag?: string | undefined;
        /** Whether to operate against --slackdev or production */
        qa?: boolean | undefined;
    }) => Promise<ShellProcess>;
    /**
     * stop `slack run`
     * @param shell object with process to kill
     * @param teamName to check that app was deleted from that team
     */
    runStop: (proc: ShellProcess, teamName?: string) => Promise<void>;
};
export default _default;
//# sourceMappingURL=platform.d.ts.map