/// <reference types="node" />
import { SpawnOptionsWithoutStdio } from 'node:child_process';
import { SlackCLICommandOptions, SlackCLIGlobalOptions } from '../cli-process';
/**
 * `slack create`
 * @param opts generic command options to pass to `create`
 * @returns command output
 */
export declare const create: (appName?: string, globalOpts?: SlackCLIGlobalOptions, commandOpts?: SlackCLICommandOptions, shellOpts?: SpawnOptionsWithoutStdio) => Promise<string>;
export declare const createSync: (appName?: string, globalOpts?: SlackCLIGlobalOptions, commandOpts?: SlackCLICommandOptions, shellOpts?: SpawnOptionsWithoutStdio) => string;
/**
 * `slack create` using a template
 * Creates an app from a specified template string.
 * @param templateString template string (ex: `slack-samples/deno-hello-world`)
 * @param appName desired app name
 * @param branchName the branch to clone (default: `main`)
 * @returns command output
 */
export declare const createAppFromTemplate: ({ templateString, appName, branchName, shellOpts, }: {
    templateString: string;
    appName?: string | undefined;
    branchName?: string | undefined;
    shellOpts?: SpawnOptionsWithoutStdio | undefined;
}) => Promise<string>;
declare const _default: {
    createAppFromTemplate: ({ templateString, appName, branchName, shellOpts, }: {
        templateString: string;
        appName?: string | undefined;
        branchName?: string | undefined;
        shellOpts?: SpawnOptionsWithoutStdio | undefined;
    }) => Promise<string>;
    createApp: (appName?: string | undefined, globalOpts?: SlackCLIGlobalOptions | undefined, commandOpts?: SlackCLICommandOptions | undefined, shellOpts?: SpawnOptionsWithoutStdio | undefined) => Promise<string>;
};
export default _default;
//# sourceMappingURL=create.d.ts.map