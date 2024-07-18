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
exports.list = exports.install = exports.del = void 0;
const cli_process_1 = require("../cli-process");
const command_error_1 = __importDefault(require("../command-error"));
/**
 * `slack app delete`
 * @param appPath path to app
 * @param teamFlag team domain for the function's app
 * @returns command output
 */
const del = function appDelete(appPath, teamFlag, options) {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO: breaking change, separate params vs single-param-object, probably should reflect global vs command CLI flags
        const appEnvironment = (options === null || options === void 0 ? void 0 : options.isLocalApp) ? 'local' : 'deployed';
        const cmd = new cli_process_1.SlackCLIProcess('app delete --force', { team: teamFlag, qa: options === null || options === void 0 ? void 0 : options.qa }, {
            '--app': appEnvironment,
        });
        try {
            const proc = yield cmd.execAsync({
                cwd: appPath,
            });
            return proc.output;
        }
        catch (error) {
            throw (0, command_error_1.default)(error, 'appDelete');
        }
    });
};
exports.del = del;
/**
 * `slack app install`
 * @param appPath path to app
 * @param teamFlag team domain where the app will be installed
 * @returns command output
 */
const install = function workspaceInstall(appPath, teamFlag, options) {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO: breaking change, separate params vs single-param-object, probably should reflect global vs command CLI flags
        const cmd = new cli_process_1.SlackCLIProcess('app install', { team: teamFlag, qa: options === null || options === void 0 ? void 0 : options.qa });
        try {
            const proc = yield cmd.execAsync({
                cwd: appPath,
            });
            return proc.output;
        }
        catch (error) {
            throw (0, command_error_1.default)(error, 'appInstall');
        }
    });
};
exports.install = install;
/**
 * `slack app list`
 * @param appPath path to app
 * @returns command output
 */
const list = function appList(appPath, options) {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO: (breaking change) separate parameters vs single-param-object
        const cmd = new cli_process_1.SlackCLIProcess('app list', options);
        try {
            const proc = yield cmd.execAsync({
                cwd: appPath,
            });
            return proc.output;
        }
        catch (error) {
            throw (0, command_error_1.default)(error, 'appList');
        }
    });
};
exports.list = list;
// TODO: (breaking change): rename properties of this default export to match actual command names
exports.default = {
    workspaceDelete: exports.del,
    workspaceInstall: exports.install,
    workspaceList: exports.list,
};
//# sourceMappingURL=app.js.map