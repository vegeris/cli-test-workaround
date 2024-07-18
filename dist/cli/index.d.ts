/// <reference types="node" />
/**
 * Set of functions to spawn and interact with Slack Platform CLI processes and commands
 */
export declare const SlackCLI: {
    trigger: {
        access: (appPath: string, teamFlag: string, flags: string, options?: {
            qa?: boolean | undefined;
        } | undefined) => Promise<string>;
        create: ({ appPath, teamFlag, flag, orgWorkspaceGrantFlag, options, }: {
            appPath: string;
            teamFlag: string;
            flag: string;
            orgWorkspaceGrantFlag?: string | undefined;
            options?: {
                localApp?: boolean | undefined;
                qa?: boolean | undefined;
            } | undefined;
        }) => Promise<string>;
        delete: (appPath: string, teamFlag: string, flag: string, options?: {
            qa?: boolean | undefined;
        } | undefined) => Promise<string>;
        info: (appPath: string, teamFlag: string, flag: string, options?: {
            qa?: boolean | undefined;
        } | undefined) => Promise<string>;
        list: (appPath: string, teamFlag: string, flag: string, options?: {
            qa?: boolean | undefined;
        } | undefined) => Promise<string>;
        update: (appPath: string, teamFlag: string, flag: string, options?: {
            qa?: boolean | undefined;
        } | undefined) => Promise<string>;
    };
    /**
     * Delete app and Log out of all sessions
     * @param options
     */
    stopSession: ({ appPath, appTeamID, isLocalApp, qa, }: {
        /** Path to app. If not provided, will not interact with any app */
        appPath?: string | undefined;
        /** Team domain or ID where app is installed */
        appTeamID: string;
        isLocalApp?: boolean | undefined;
        qa?: boolean | undefined;
    }) => Promise<void>;
    triggerAccess: (appPath: string, teamFlag: string, flags: string, options?: {
        qa?: boolean | undefined;
    } | undefined) => Promise<string>;
    triggerCreate: ({ appPath, teamFlag, flag, orgWorkspaceGrantFlag, options, }: {
        appPath: string;
        teamFlag: string;
        flag: string;
        orgWorkspaceGrantFlag?: string | undefined;
        options?: {
            localApp?: boolean | undefined;
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
    platform: {
        activity: ({ appPath, teamFlag, flag, localApp, qa, }: {
            appPath: string;
            /**
             * Set of functions to spawn and interact with Slack Platform CLI processes and commands
             */
            teamFlag: string;
            flag?: string | undefined;
            localApp?: boolean | undefined;
            qa?: boolean | undefined;
        }) => Promise<string>;
        activityTailStart: ({ appPath, teamFlag, stringToWaitFor, localApp, qa, }: {
            appPath: string;
            teamFlag: string;
            stringToWaitFor: string;
            localApp?: boolean | undefined;
            qa?: boolean | undefined;
        }) => Promise<import("../utils/types").ShellProcess>;
        activityTailStop: ({ proc, stringToWait, }: {
            proc: import("../utils/types").ShellProcess;
            stringToWait: string;
        }) => Promise<string>;
        deploy: ({ appPath, teamFlag, hideTriggers, orgWorkspaceGrantFlag, qa, }: {
            appPath: string;
            teamFlag: string;
            hideTriggers?: boolean | undefined;
            orgWorkspaceGrantFlag?: string | undefined;
            qa?: boolean | undefined;
        }) => Promise<string>;
        runStart: ({ appPath, teamFlag, cleanup, hideTriggers, orgWorkspaceGrantFlag, qa, }: {
            appPath: string;
            teamFlag: string;
            cleanup?: boolean | undefined;
            hideTriggers?: boolean | undefined;
            orgWorkspaceGrantFlag?: string | undefined;
            qa?: boolean | undefined;
        }) => Promise<import("../utils/types").ShellProcess>;
        runStop: (proc: import("../utils/types").ShellProcess, teamName?: string | undefined) => Promise<void>;
    };
    activity: ({ appPath, teamFlag, flag, localApp, qa, }: {
        appPath: string;
        /**
         * Set of functions to spawn and interact with Slack Platform CLI processes and commands
         */
        teamFlag: string;
        flag?: string | undefined;
        localApp?: boolean | undefined;
        qa?: boolean | undefined;
    }) => Promise<string>;
    activityTailStart: ({ appPath, teamFlag, stringToWaitFor, localApp, qa, }: {
        appPath: string;
        teamFlag: string;
        stringToWaitFor: string;
        localApp?: boolean | undefined;
        qa?: boolean | undefined;
    }) => Promise<import("../utils/types").ShellProcess>;
    activityTailStop: ({ proc, stringToWait, }: {
        proc: import("../utils/types").ShellProcess;
        stringToWait: string;
    }) => Promise<string>;
    deploy: ({ appPath, teamFlag, hideTriggers, orgWorkspaceGrantFlag, qa, }: {
        appPath: string;
        teamFlag: string;
        hideTriggers?: boolean | undefined;
        orgWorkspaceGrantFlag?: string | undefined;
        qa?: boolean | undefined;
    }) => Promise<string>;
    runStart: ({ appPath, teamFlag, cleanup, hideTriggers, orgWorkspaceGrantFlag, qa, }: {
        appPath: string;
        teamFlag: string;
        cleanup?: boolean | undefined;
        hideTriggers?: boolean | undefined;
        orgWorkspaceGrantFlag?: string | undefined;
        qa?: boolean | undefined;
    }) => Promise<import("../utils/types").ShellProcess>;
    runStop: (proc: import("../utils/types").ShellProcess, teamName?: string | undefined) => Promise<void>;
    manifest: {
        validate: (appPath: string, options?: {
            qa?: boolean | undefined;
        } | undefined) => Promise<string>;
    };
    manifestValidate: (appPath: string, options?: {
        qa?: boolean | undefined;
    } | undefined) => Promise<string>;
    function: {
        access: (appPath: string, teamFlag: string, flags: string, options?: {
            qa?: boolean | undefined;
        } | undefined) => Promise<string>;
    };
    functionDistribute: (appPath: string, teamFlag: string, flags: string, options?: {
        qa?: boolean | undefined;
    } | undefined) => Promise<string>;
    functionAccess: (appPath: string, teamFlag: string, flags: string, options?: {
        qa?: boolean | undefined;
    } | undefined) => Promise<string>;
    externalAuth: (appPath: string, teamFlag: string, provider: string, flags: string, options?: {
        qa?: boolean | undefined;
    } | undefined) => Promise<string>;
    env: {
        add: (appPath: string, teamFlag: string, secretKey: string, secretValue: string, options?: {
            qa?: boolean | undefined;
        } | undefined) => Promise<string>;
        list: (appPath: string, teamFlag: string, options?: {
            qa?: boolean | undefined;
        } | undefined) => Promise<string>;
        remove: (appPath: string, teamFlag: string, secretKey: string, options?: {
            qa?: boolean | undefined;
        } | undefined) => Promise<string>;
    };
    envAdd: (appPath: string, teamFlag: string, secretKey: string, secretValue: string, options?: {
        qa?: boolean | undefined;
    } | undefined) => Promise<string>;
    envList: (appPath: string, teamFlag: string, options?: {
        qa?: boolean | undefined;
    } | undefined) => Promise<string>;
    envRemove: (appPath: string, teamFlag: string, secretKey: string, options?: {
        qa?: boolean | undefined;
    } | undefined) => Promise<string>;
    createAppFromTemplate: ({ templateString, appName, branchName, shellOpts, }: {
        templateString: string;
        appName?: string | undefined;
        branchName?: string | undefined;
        shellOpts?: import("child_process").SpawnOptionsWithoutStdio | undefined;
    }) => Promise<string>;
    createApp: (appName?: string | undefined, globalOpts?: import("./cli-process").SlackCLIGlobalOptions | undefined, commandOpts?: import("./cli-process").SlackCLICommandOptions | undefined, shellOpts?: import("child_process").SpawnOptionsWithoutStdio | undefined) => Promise<string>;
    collaborators: {
        add: (appPath: string, teamFlag: string, collaboratorEmail: string, options?: {
            qa?: boolean | undefined;
        } | undefined) => Promise<string>;
        list: (appPath: string, teamFlag: string, options?: {
            qa?: boolean | undefined;
        } | undefined) => Promise<string>;
        remove: (appPath: string, teamFlag: string, collaboratorEmail: string, options?: {
            qa?: boolean | undefined;
        } | undefined) => Promise<string>;
    };
    collaboratorsAdd: (appPath: string, teamFlag: string, collaboratorEmail: string, options?: {
        qa?: boolean | undefined;
    } | undefined) => Promise<string>;
    /** Path to app. If not provided, will not interact with any app */
    collaboratorsList: (appPath: string, teamFlag: string, options?: {
        qa?: boolean | undefined;
    } | undefined) => Promise<string>;
    collaboratorsRemove: (appPath: string, teamFlag: string, collaboratorEmail: string, options?: {
        qa?: boolean | undefined;
    } | undefined) => Promise<string>;
    auth: {
        loginNoPrompt: (options?: {
            qa?: boolean | undefined;
        } | undefined) => Promise<{
            shellOutput: string;
            authTicketSlashCommand: string;
            authTicket: string;
        }>;
        loginChallengeExchange: (challenge: string, authTicket: string, options?: {
            qa?: boolean | undefined;
        } | undefined) => Promise<string>; /** Path to app. If not provided, will not interact with any app */
        logout: (options?: {
            teamFlag?: string | undefined;
            allWorkspaces?: boolean | undefined;
            qa?: boolean | undefined;
        } | undefined) => Promise<string>;
    };
    loginNoPrompt: (options?: {
        qa?: boolean | undefined;
    } | undefined) => Promise<{
        shellOutput: string;
        authTicketSlashCommand: string;
        authTicket: string;
    }>;
    loginChallengeExchange: (challenge: string, authTicket: string, options?: {
        qa?: boolean | undefined;
    } | undefined) => Promise<string>; /** Path to app. If not provided, will not interact with any app */
    logout: (options?: {
        teamFlag?: string | undefined;
        allWorkspaces?: boolean | undefined;
        qa?: boolean | undefined;
    } | undefined) => Promise<string>;
    app: {
        delete: (appPath: string, teamFlag: string, options?: {
            isLocalApp?: boolean | undefined;
            qa?: boolean | undefined;
        } | undefined) => Promise<string>;
        install: (appPath: string, teamFlag: string, options?: {
            qa?: boolean | undefined;
        } | undefined) => Promise<string>;
        list: (appPath: string, options?: {
            qa?: boolean | undefined;
        } | undefined) => Promise<string>;
    };
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
//# sourceMappingURL=index.d.ts.map