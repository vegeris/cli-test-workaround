import child from 'child_process';
import type { ShellProcess } from '../utils/types';
export declare const shell: {
    /**
     * Spawns a shell command
     * - Start child process with the command
     * - Listen to data output events and collect them
     * @param command The command to run, e.g. `echo "hi"`
     * @param shellOpts Options to customize shell execution
     * @returns command output
     */
    spawnProcess: (command: string, shellOpts?: Partial<child.SpawnOptionsWithoutStdio>) => ShellProcess;
    /**
     * Run shell command synchronously
     * - Execute child process with the command
     * - Wait for the command to complete and return the standard output
     * @param command cli command, e.g. <cli> --version or any shell command
     * @param shellOpts various shell spawning options available to customize
     * @returns command stdout
     */
    runCommandSync: (command: string, shellOpts?: Partial<child.SpawnOptionsWithoutStdio>) => string;
    /**
     * Logic to wait for child process to finish executing
     * - Check if the close event was emitted, else wait for 1 sec
     * - Error out if > 30 sec
     * @param shell shell object
     */
    checkIfFinished: (proc: ShellProcess) => Promise<void>;
    /**
     * Sleep function used to wait for cli to finish executing
     */
    sleep: (timeout?: number) => Promise<void>;
    /**
     * Remove all the ANSI color and style encoding
     * @param text string
     */
    removeANSIcolors: (text: string) => string;
    /**
     * Wait for output
     * @param expString expected string
     * @param shell
     */
    waitForOutput: (expString: string, proc: ShellProcess) => Promise<void>;
    assembleShellEnv: () => Record<string, string | undefined>;
    kill: (proc: ShellProcess) => Promise<boolean>;
};
//# sourceMappingURL=shell.d.ts.map