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
exports.shell = void 0;
const child_process_1 = __importDefault(require("child_process"));
const tree_kill_1 = __importDefault(require("tree-kill"));
const constants_1 = require("../utils/constants");
const logger_1 = __importDefault(require("../utils/logger"));
exports.shell = {
    /**
     * Spawns a shell command
     * - Start child process with the command
     * - Listen to data output events and collect them
     * @param command The command to run, e.g. `echo "hi"`
     * @param shellOpts Options to customize shell execution
     * @returns command output
     */
    spawnProcess: function spawnProcess(command, shellOpts) {
        try {
            // Start child process
            const childProcess = child_process_1.default.spawn(`${command}`, Object.assign({ shell: true, env: exports.shell.assembleShellEnv() }, shellOpts));
            // Set shell object
            const sh = {
                process: childProcess,
                output: '',
                finished: false,
                command,
            };
            // Log command
            logger_1.default.info(`CLI Command started: ${sh.command}`);
            // If is deploy command
            // Listen to data event that returns all the output and collect it
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            childProcess.stdout.on('data', (data) => {
                sh.output += this.removeANSIcolors(data.toString());
                logger_1.default.verbose(`Output: ${this.removeANSIcolors(data.toString())}`);
            });
            // Collect error output
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            childProcess.stderr.on('data', (data) => {
                sh.output += this.removeANSIcolors(data.toString());
                logger_1.default.error(`Error: ${this.removeANSIcolors(data.toString())}`);
            });
            // Set the finished flag to true on close event
            childProcess.on('close', () => {
                sh.finished = true;
                logger_1.default.info(`CLI Command finished: ${sh.command}`);
            });
            return sh;
        }
        catch (error) {
            throw new Error(`spawnProcess failed!\nCommand: ${command}\nError: ${error}`);
        }
    },
    /**
     * Run shell command synchronously
     * - Execute child process with the command
     * - Wait for the command to complete and return the standard output
     * @param command cli command, e.g. <cli> --version or any shell command
     * @param shellOpts various shell spawning options available to customize
     * @returns command stdout
     */
    runCommandSync: function runSyncCommand(command, shellOpts) {
        try {
            // Log command
            logger_1.default.info(`CLI Command started: ${command}`);
            // Start child process
            const result = child_process_1.default.spawnSync(`${command}`, Object.assign({ shell: true, env: exports.shell.assembleShellEnv() }, shellOpts));
            // Log command
            logger_1.default.info(`CLI Command finished: ${command}`);
            // TODO: this method only returns stdout and not stderr...
            return this.removeANSIcolors(result.stdout.toString());
        }
        catch (error) {
            throw new Error(`runCommandSync failed!\nCommand: ${command}\nError: ${error}`);
        }
    },
    /**
     * Logic to wait for child process to finish executing
     * - Check if the close event was emitted, else wait for 1 sec
     * - Error out if > 30 sec
     * @param shell shell object
     */
    checkIfFinished: function checkIfFinished(proc) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let timeout;
                const killIt = (reason) => {
                    exports.shell.kill(proc).then(() => {
                        reject(new Error(`${reason}\nCommand: ${proc.command}, output: ${proc.output}`));
                    }, (err) => {
                        reject(new Error(`${reason}\nCommand: ${proc.command}, output: ${proc.output}\nAlso errored killing process: ${err.message}`));
                    });
                };
                const closeHandler = (code, signal) => {
                    clearTimeout(timeout);
                    logger_1.default.debug(`CLI Command "${proc.command}" closed with code ${code}, signal ${signal}`);
                    resolve();
                };
                const errorHandler = (err) => {
                    clearTimeout(timeout);
                    proc.process.off('close', closeHandler);
                    logger_1.default.error(`CLI Command "${proc.command}" errored with ${err}`);
                    killIt(`Command raised an error: ${err.message}`);
                };
                // Timeout the process if necessary
                timeout = setTimeout(() => {
                    // Remove process event listeners
                    proc.process.off('close', closeHandler);
                    proc.process.off('error', errorHandler);
                    killIt(`shell.checkIfFinished timed out after ${constants_1.timeouts.waitingGlobal} ms.`);
                }, constants_1.timeouts.waitingGlobal);
                proc.process.on('close', closeHandler);
                proc.process.on('error', errorHandler);
            });
        });
    },
    /**
     * Sleep function used to wait for cli to finish executing
     */
    sleep: function sleep(timeout = 1000) {
        return new Promise((resolve) => {
            setTimeout(resolve, timeout);
        });
    },
    /**
     * Remove all the ANSI color and style encoding
     * @param text string
     */
    removeANSIcolors: function removeANSIcolors(text) {
        const cleanText = text.replace(
        // eslint-disable-next-line no-control-regex
        /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '');
        return cleanText;
    },
    /**
     * Wait for output
     * @param expString expected string
     * @param shell
     */
    waitForOutput: function waitForOutput(expString, proc) {
        return __awaiter(this, void 0, void 0, function* () {
            const delay = 1000;
            let waitedFor = 0;
            let timedOut = false;
            while (!proc.output.includes(expString)) {
                // eslint-disable-next-line no-await-in-loop
                yield this.sleep(delay);
                waitedFor += delay;
                if (waitedFor > constants_1.timeouts.waitingAction) {
                    timedOut = true;
                    break;
                }
            }
            return new Promise((resolve, reject) => {
                if (timedOut) {
                    // Kill the process
                    const reason = `shell.waitForOutput timed out after ${waitedFor} ms. \nExpected output to include: ${expString}\nActual: ${proc.output}`;
                    exports.shell.kill(proc).then(() => {
                        reject(new Error(`${reason}\nCommand: ${proc.command}, output: ${proc.output}`));
                    }, (err) => {
                        reject(new Error(`${reason}\nCommand: ${proc.command}, output: ${proc.output}\nAlso errored killing process: ${err.message}`));
                    });
                }
                else {
                    resolve();
                }
            });
        });
    },
    assembleShellEnv: function assembleShellEnv() {
        const spawnedEnv = Object.assign({}, process.env);
        if (process.platform === "win32") {
            spawnedEnv.PATH = process.env.PATH;
        }
        // Always enable test trace output
        spawnedEnv.SLACK_TEST_TRACE = 'true';
        // Skip prompts for AAA request and directly send a request
        spawnedEnv.SLACK_AUTO_REQUEST_AAA = 'true';
        // Never post to metrics store
        spawnedEnv.SLACK_DISABLE_TELEMETRY = 'true';
        return spawnedEnv;
    },
    kill: function kill(proc) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                (0, tree_kill_1.default)(proc.process.pid, (err) => {
                    if (err) {
                        reject(new Error(`Failed to kill command "${proc.command}": errored with ${err.message}\nOutput: ${proc.output}`));
                    }
                    else {
                        resolve(true);
                    }
                });
            });
        });
    },
};
//# sourceMappingURL=shell.js.map