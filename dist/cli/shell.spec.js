"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = __importDefault(require("child_process"));
const events_1 = __importDefault(require("events"));
const stream_1 = __importDefault(require("stream"));
const chai_1 = require("chai");
const sinon_1 = __importDefault(require("sinon"));
const shell_1 = require("./shell");
describe('shell module', () => {
    const sandbox = sinon_1.default.createSandbox();
    let spawnSpy;
    let spawnProcess;
    let runSpy;
    let runOutput;
    beforeEach(() => {
        spawnProcess = new events_1.default();
        spawnProcess.stdout = new events_1.default();
        spawnProcess.stderr = new events_1.default();
        spawnProcess.stdin = new stream_1.default.Writable();
        spawnSpy = sandbox.stub(child_process_1.default, 'spawn').returns(spawnProcess);
        runOutput = { pid: 1337, output: [], stdout: Buffer.from([]), stderr: Buffer.from([]), status: 0, signal: null };
        runSpy = sandbox.stub(child_process_1.default, 'spawnSync').returns(runOutput);
        sandbox.stub(shell_1.shell, 'kill').resolves(true);
    });
    afterEach(() => {
        sandbox.restore();
    });
    describe('spawnProcess method', () => {
        it('should invoke `assembleShellEnv` and pass as child_process.spawn `env` parameter', () => {
            const fakeEnv = { HEY: 'yo' };
            const assembleSpy = sandbox.stub(shell_1.shell, 'assembleShellEnv').returns(fakeEnv);
            const fakeCmd = 'echo "hi"';
            shell_1.shell.spawnProcess(fakeCmd);
            sandbox.assert.calledOnce(assembleSpy);
            sandbox.assert.calledWithMatch(spawnSpy, fakeCmd, sinon_1.default.match({ shell: true, env: fakeEnv }));
        });
        it('should raise bubble error details up', () => {
            spawnSpy.throws(new Error('this is bat country'));
            chai_1.assert.throw(() => {
                shell_1.shell.spawnProcess('about to explode');
            }, /this is bat country/);
        });
    });
    describe('runCommandSync method', () => {
        it('should invoke `assembleShellEnv` and pass as child_process.spawnSync `env` parameter', () => {
            const fakeEnv = { HEY: 'yo' };
            const assembleSpy = sandbox.stub(shell_1.shell, 'assembleShellEnv').returns(fakeEnv);
            const fakeCmd = 'echo "hi"';
            shell_1.shell.runCommandSync(fakeCmd);
            sandbox.assert.calledOnce(assembleSpy);
            sandbox.assert.calledWithMatch(runSpy, fakeCmd, sinon_1.default.match({ shell: true, env: fakeEnv }));
        });
        it('should raise bubble error details up', () => {
            runSpy.throws(new Error('this is bat country'));
            chai_1.assert.throw(() => {
                shell_1.shell.runCommandSync('about to explode');
            }, /this is bat country/);
        });
    });
    describe('checkIfFinished method', () => {
        beforeEach(() => {
        });
        it('should resolve if underlying process raises a `close` event', (done) => {
            const proc = {
                process: spawnProcess,
                output: '',
                finished: true,
                command: 'echo "hi"',
            };
            shell_1.shell.checkIfFinished(proc).then(done);
            spawnProcess.emit('close', 0);
        });
        it('should reject if underlying process raises an `error` event', (done) => {
            const proc = {
                process: spawnProcess,
                output: '',
                finished: true,
                command: 'echo "hi"',
            };
            shell_1.shell.checkIfFinished(proc).then(() => {
                chai_1.assert.fail('checkIfFinished resolved unexpectedly');
            }, (err) => {
                chai_1.assert.include(err.message, 'boom');
                done();
            });
            spawnProcess.emit('error', new Error('boom'));
        });
    });
});
//# sourceMappingURL=shell.spec.js.map