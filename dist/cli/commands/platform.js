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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../utils/constants");
const logger_1 = __importDefault(require("../../utils/logger"));
const cli_process_1 = require("../cli-process");
const command_error_1 = __importDefault(require("../command-error"));
const shell_1 = require("../shell");
const ctrlc_windows_1 = require("ctrlc-windows");
// TODO: the options for these methods could be DRYed up
exports.default = {
    /**
     * `slack platform activity`
     * @param flag
     * @returns command output
     */
    activity: function activity({ appPath, teamFlag, flag, localApp = true, qa = false, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const appEnvironment = localApp ? 'local' : 'deployed';
            const cmd = new cli_process_1.SlackCLIProcess(`activity ${flag}`, { team: teamFlag, qa }, {
                '--app': appEnvironment,
            });
            try {
                const proc = yield cmd.execAsync({
                    cwd: appPath,
                });
                return proc.output;
            }
            catch (error) {
                throw (0, command_error_1.default)(error, 'activity');
            }
        });
    },
    /**
     * waits for a specified sequence then returns the shell
     * At the specific point where the sequence is found to continue with test
     * @returns command output
     */
    activityTailStart: function activityTailStart({ appPath, teamFlag, stringToWaitFor, localApp = true, qa = false, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const appEnvironment = localApp ? 'local' : 'deployed';
            const cmd = new cli_process_1.SlackCLIProcess('activity --tail', { team: teamFlag, qa }, {
                '--app': appEnvironment,
            });
            try {
                const proc = yield cmd.execAsyncUntilOutputPresent(stringToWaitFor, {
                    cwd: appPath,
                });
                return proc;
            }
            catch (error) {
                throw (0, command_error_1.default)(error, 'activityTailStart');
            }
        });
    },
    /**
     * waits for a specified string in the `activity` output, kills the process then returns the output
     * @returns command output
     */
    activityTailStop: function activityTailStop({ 
    /** The ShellProcess to check */
    proc, stringToWait, }) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                // Wait for output
                shell_1.shell.waitForOutput(stringToWait, proc).then(() => {
                    // kill the shell process
                    shell_1.shell.kill(proc).then(() => {
                        resolve(proc.output);
                    }, (err) => {
                        const msg = `activityTailStop command failed to kill process: ${err}`;
                        logger_1.default.warn(msg);
                        reject(new Error(msg));
                    });
                }, reject);
            });
        });
    },
    /**
     * `slack deploy`
     */
    deploy: function deploy({ appPath, teamFlag, hideTriggers = true, orgWorkspaceGrantFlag, qa = false, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const cmd = new cli_process_1.SlackCLIProcess('deploy', { team: teamFlag, qa }, {
                '--hide-triggers': hideTriggers,
                '--org-workspace-grant': orgWorkspaceGrantFlag,
            });
            try {
                const proc = yield cmd.execAsync({
                    cwd: appPath,
                });
                return proc.output;
            }
            catch (error) {
                throw (0, command_error_1.default)(error, 'deploy');
            }
        });
    },
    /**
     * start `slack run`
     * - `runStop` must be used to stop `run` process
     * @returns shell object to kill it explicitly in the test case
     */
    runStart: function runStart({ appPath, teamFlag, cleanup = true, hideTriggers = true, orgWorkspaceGrantFlag, qa = false, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const cmd = new cli_process_1.SlackCLIProcess('run', { team: teamFlag, qa }, {
                '--cleanup': cleanup,
                '--hide-triggers': hideTriggers,
                '--org-workspace-grant': orgWorkspaceGrantFlag,
            });
            try {
                const proc = yield cmd.execAsyncUntilOutputPresent('Connected, awaiting events', {
                    cwd: appPath,
                });
                return proc;
            }
            catch (error) {
                throw (0, command_error_1.default)(error, 'runStart');
            }
        });
    },
    /**
     * stop `slack run`
     * @param shell object with process to kill
     * @param teamName to check that app was deleted from that team
     */
    runStop: function runStop(proc, teamName) {
        return __awaiter(this, void 0, void 0, function* () {
            if (process.platform === 'win32') {
                (0, ctrlc_windows_1.ctrlc)(proc.process.pid);
                //await new Promise((resolve) => setTimeout(resolve, 2000 ));
                return new Promise((resolve, reject) => {
                    // kill? then 
                    shell_1.shell.waitForOutput(constants_1.SlackTracerId.SLACK_TRACE_PLATFORM_RUN_STOP, proc).then(resolve, reject);
                });
            }
            else {
                // TODO: teamName param should be changed to something else. 'wait for shutdown' or some such (breaking change)
                return new Promise((resolve, reject) => {
                    // kill the shell process
                    shell_1.shell.kill(proc).then(() => {
                        // TODO: summarize issues
                        if (process.platform === 'win32') {
                            resolve();
                            return;
                        }
                        if (teamName) {
                            // TODO: this is messed up. does not match to parameter name at all - team name has nothing to do with this.
                            // Check if local app was deleted automatically, if --cleanup was passed to `runStart`
                            // Wait for the output to verify process stopped
                            shell_1.shell.waitForOutput(constants_1.SlackTracerId.SLACK_TRACE_PLATFORM_RUN_STOP, proc).then(resolve, reject);
                        }
                        else {
                            resolve();
                        }
                    }, (err) => {
                        const msg = `runStop command failed to kill process: ${err}`;
                        logger_1.default.warn(msg);
                        reject(new Error(msg));
                    });
                });
            }
        });
    },
};
//# sourceMappingURL=platform.js.map