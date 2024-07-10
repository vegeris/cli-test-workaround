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
const sinon_1 = __importDefault(require("sinon"));
const index_1 = require("./index");
const logger_1 = __importDefault(require("../utils/logger"));
describe('cli module', () => {
    const sandbox = sinon_1.default.createSandbox();
    let logoutSpy;
    let warnSpy;
    let deleteSpy;
    beforeEach(() => {
        logoutSpy = sandbox.stub(index_1.SlackCLI, 'logout').resolves();
        warnSpy = sandbox.stub(logger_1.default, 'warn');
        sandbox.stub(index_1.SlackCLI.app, 'list').resolves('This thing has so many apps you would not believe');
        deleteSpy = sandbox.stub(index_1.SlackCLI.app, 'delete').resolves();
    });
    afterEach(() => {
        sandbox.restore();
    });
    describe('stopSession method', () => {
        it('should invoke logout', () => __awaiter(void 0, void 0, void 0, function* () {
            yield index_1.SlackCLI.stopSession({ appTeamID: 'T123' });
            sandbox.assert.called(logoutSpy);
        }));
        it('should warn if logout failed', () => __awaiter(void 0, void 0, void 0, function* () {
            logoutSpy.rejects('boomsies');
            yield index_1.SlackCLI.stopSession({ appTeamID: 'T123' });
            sandbox.assert.calledWithMatch(warnSpy, 'boomsies');
        }));
        it('should attempt to delete app if appPath is provided', () => __awaiter(void 0, void 0, void 0, function* () {
            yield index_1.SlackCLI.stopSession({ appTeamID: 'T123', appPath: '/some/path' });
            sandbox.assert.called(deleteSpy);
        }));
        it('should warn if app deletion fails', () => __awaiter(void 0, void 0, void 0, function* () {
            deleteSpy.rejects('explosions');
            yield index_1.SlackCLI.stopSession({ appTeamID: 'T123', appPath: '/some/path' });
            sandbox.assert.calledWithMatch(warnSpy, 'explosions');
        }));
    });
});
//# sourceMappingURL=index.spec.js.map