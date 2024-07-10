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
const chai_1 = require("chai");
const sinon_1 = __importDefault(require("sinon"));
const cli_process_1 = require("./cli-process");
const shell_1 = require("./shell");
describe('SlackCLIProcess class', () => {
    const sandbox = sinon_1.default.createSandbox();
    let spawnProcessSpy;
    beforeEach(() => {
        spawnProcessSpy = sandbox.stub(shell_1.shell, 'spawnProcess');
        sandbox.stub(shell_1.shell, 'checkIfFinished');
    });
    afterEach(() => {
        sandbox.restore();
    });
    describe('constructor', () => {
        it('should throw if `SLACK_CLI_PATH` env variable is falsy', () => {
            const orig = process.env.SLACK_CLI_PATH;
            delete process.env.SLACK_CLI_PATH;
            chai_1.assert.throws(() => {
                new cli_process_1.SlackCLIProcess('help');
            });
            process.env.SLACK_CLI_PATH = orig;
        });
    });
    describe('CLI flag handling', () => {
        describe('global options', () => {
            it('should map dev option to --slackdev', () => __awaiter(void 0, void 0, void 0, function* () {
                let cmd = new cli_process_1.SlackCLIProcess('help', { dev: true });
                yield cmd.execAsync();
                sandbox.assert.calledWithMatch(spawnProcessSpy, '--slackdev');
                spawnProcessSpy.resetHistory();
                cmd = new cli_process_1.SlackCLIProcess('help');
                yield cmd.execAsync();
                sandbox.assert.neverCalledWithMatch(spawnProcessSpy, '--slackdev');
                spawnProcessSpy.resetHistory();
            }));
            it('should map qa option to QA host', () => __awaiter(void 0, void 0, void 0, function* () {
                let cmd = new cli_process_1.SlackCLIProcess('help', { qa: true });
                yield cmd.execAsync();
                sandbox.assert.calledWithMatch(spawnProcessSpy, '--apihost qa.slack.com');
                spawnProcessSpy.resetHistory();
                cmd = new cli_process_1.SlackCLIProcess('help');
                yield cmd.execAsync();
                sandbox.assert.neverCalledWithMatch(spawnProcessSpy, '--apihost qa.slack.com');
                spawnProcessSpy.resetHistory();
            }));
            it('should default to passing --skip-update but allow overriding that', () => __awaiter(void 0, void 0, void 0, function* () {
                let cmd = new cli_process_1.SlackCLIProcess('help');
                yield cmd.execAsync();
                sandbox.assert.calledWithMatch(spawnProcessSpy, '--skip-update');
                spawnProcessSpy.resetHistory();
                cmd = new cli_process_1.SlackCLIProcess('help', { skipUpdate: false });
                yield cmd.execAsync();
                sandbox.assert.neverCalledWithMatch(spawnProcessSpy, '--skip-update');
                spawnProcessSpy.resetHistory();
                cmd = new cli_process_1.SlackCLIProcess('help', { skipUpdate: true });
                yield cmd.execAsync();
                sandbox.assert.calledWithMatch(spawnProcessSpy, '--skip-update');
                spawnProcessSpy.resetHistory();
                cmd = new cli_process_1.SlackCLIProcess('help', {}); // empty global options; so undefined skipUpdate option
                yield cmd.execAsync();
                sandbox.assert.calledWithMatch(spawnProcessSpy, '--skip-update');
            }));
        });
        describe('command options', () => {
            it('should pass command-level key/value options to command in the form `--<key> value`', () => __awaiter(void 0, void 0, void 0, function* () {
                const cmd = new cli_process_1.SlackCLIProcess('help', {}, { '--awesome': 'yes' });
                yield cmd.execAsync();
                sandbox.assert.calledWithMatch(spawnProcessSpy, '--awesome yes');
            }));
            it('should only pass command-level key option if value is true in the form `--key`', () => __awaiter(void 0, void 0, void 0, function* () {
                const cmd = new cli_process_1.SlackCLIProcess('help', {}, { '--no-prompt': true });
                yield cmd.execAsync();
                sandbox.assert.calledWithMatch(spawnProcessSpy, '--no-prompt');
            }));
            it('should not pass command-level key option if value is falsy', () => __awaiter(void 0, void 0, void 0, function* () {
                let cmd = new cli_process_1.SlackCLIProcess('help', {}, { '--no-prompt': false });
                yield cmd.execAsync();
                sandbox.assert.neverCalledWithMatch(spawnProcessSpy, '--no-prompt');
                spawnProcessSpy.resetHistory();
                cmd = new cli_process_1.SlackCLIProcess('help', {}, { '--no-prompt': '' });
                yield cmd.execAsync();
                sandbox.assert.neverCalledWithMatch(spawnProcessSpy, '--no-prompt');
                spawnProcessSpy.resetHistory();
                cmd = new cli_process_1.SlackCLIProcess('help', {}, { '--no-prompt': undefined });
                yield cmd.execAsync();
                sandbox.assert.neverCalledWithMatch(spawnProcessSpy, '--no-prompt');
            }));
        });
    });
});
//# sourceMappingURL=cli-process.spec.js.map