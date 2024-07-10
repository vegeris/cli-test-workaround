"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlackCLIProcess = void 0;
const shell_1 = require("./shell");
class SlackCLIProcess {
    constructor(command, globalOptions, commandOptions) {
        if (!process.env.SLACK_CLI_PATH) {
            throw new Error('`SLACK_CLI_PATH` environment variable not found! Aborting!');
        }
        this.command = command;
        this.globalOptions = globalOptions;
        this.commandOptions = commandOptions;
    }
    /**
     * @description Executes the command asynchronously, returning the process details once the process finishes executing
     */
    execAsync(shellOpts) {
        return __awaiter(this, void 0, void 0, function* () {
            const cmd = this.assembleShellInvocation();
            const proc = shell_1.shell.spawnProcess(cmd, shellOpts);
            yield shell_1.shell.checkIfFinished(proc);
            return proc;
        });
    }
    /**
     * @description Executes the command asynchronously, returning the process details once the process finishes executing
     */
    execAsyncUntilOutputPresent(output, shellOpts) {
        return __awaiter(this, void 0, void 0, function* () {
            const cmd = this.assembleShellInvocation();
            const proc = shell_1.shell.spawnProcess(cmd, shellOpts);
            yield shell_1.shell.waitForOutput(output, proc);
            return proc;
        });
    }
    /**
     * @description Executes the command synchronously, returning the process standard output
     */
    execSync(shellOpts) {
        const cmd = this.assembleShellInvocation();
        return shell_1.shell.runCommandSync(cmd, shellOpts);
    }
    assembleShellInvocation() {
        let cmd = `${process.env.SLACK_CLI_PATH}`;
        if (this.globalOptions) {
            const opts = this.globalOptions;
            if (opts.qa) {
                cmd += ' --apihost qa.slack.com';
            }
            if (opts.dev) {
                cmd += ' --slackdev';
            }
            if (opts.skipUpdate || opts.skipUpdate === undefined) {
                cmd += ' --skip-update';
            }
            if (opts.team) {
                cmd += ` --team ${opts.team}`;
            }
        }
        else {
            cmd += ' --skip-update';
        }
        cmd += ` ${this.command}`;
        if (this.commandOptions) {
            Object.entries(this.commandOptions).forEach(([key, value]) => {
                if (key && value) {
                    cmd += ` ${key}`;
                    if (value !== true) {
                        cmd += ` ${value}`;
                    }
                }
            });
        }
        return cmd;
    }
}
exports.SlackCLIProcess = SlackCLIProcess;
//# sourceMappingURL=cli-process.js.map