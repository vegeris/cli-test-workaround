/// <reference types="node" />
import type { ShellProcess } from '../utils/types';
import type { SpawnOptionsWithoutStdio } from 'node:child_process';
export interface SlackCLIGlobalOptions {
    /**
     * @description Whether the command should interact with dev.slack (`--slackdev`)
     */
    dev?: boolean;
    /**
     * @description Whether the command should interact with qa.slack (`--apihost qa.slack.com`)
     */
    qa?: boolean;
    /**
     * @description Whether the CLI should skip updating (`--skip-update`). Defaults to `true`.
     */
    skipUpdate?: boolean;
    /**
     * @description workspace or organization name or ID to scope command to
     */
    team?: string;
}
export type SlackCLICommandOptions = Record<string, string | boolean | undefined>;
export declare class SlackCLIProcess {
    /**
     * @description The CLI command to invoke
     */
    command: string;
    /**
     * @description The global CLI options to pass to the command
     */
    globalOptions: SlackCLIGlobalOptions | undefined;
    /**
     * @description The CLI command-specific options to pass to the command
     */
    commandOptions: SlackCLICommandOptions | undefined;
    constructor(command: string, globalOptions?: SlackCLIGlobalOptions, commandOptions?: SlackCLICommandOptions);
    /**
     * @description Executes the command asynchronously, returning the process details once the process finishes executing
     */
    execAsync(shellOpts?: Partial<SpawnOptionsWithoutStdio>): Promise<ShellProcess>;
    /**
     * @description Executes the command asynchronously, returning the process details once the process finishes executing
     */
    execAsyncUntilOutputPresent(output: string, shellOpts?: Partial<SpawnOptionsWithoutStdio>): Promise<ShellProcess>;
    /**
     * @description Executes the command synchronously, returning the process standard output
     */
    execSync(shellOpts?: Partial<SpawnOptionsWithoutStdio>): string;
    private assembleShellInvocation;
}
//# sourceMappingURL=cli-process.d.ts.map