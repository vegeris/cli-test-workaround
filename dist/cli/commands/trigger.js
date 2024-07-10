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
exports.update = exports.list = exports.info = exports.del = exports.create = exports.access = void 0;
const cli_process_1 = require("../cli-process");
const command_error_1 = __importDefault(require("../command-error"));
// TODO: the "flag" param throughout here should be done in a better way.
// Perhaps expose the SlackCommandOptions type directly?
/**
 * `slack trigger access`
 * @param appPath path to app
 * @param teamFlag team domain of the updating trigger
 * @param flags specification of trigger access, e.g. --trigger-id Ft0143UPTAV8 --everyone
 * @returns command output
 */
const access = function triggerAccess(appPath, teamFlag, flags, options) {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO: (breaking change) separate params vs. single-param-object
        // TODO: access requires --trigger-id so add that to parameters (breaking change)
        const cmd = new cli_process_1.SlackCLIProcess(`trigger access ${flags}`, { team: teamFlag, qa: options === null || options === void 0 ? void 0 : options.qa });
        try {
            const proc = yield cmd.execAsync({
                cwd: appPath,
            });
            return proc.output;
        }
        catch (error) {
            throw (0, command_error_1.default)(error, 'triggerAccess');
        }
    });
};
exports.access = access;
/**
 * `slack trigger create`
 * @returns command output
 */
const create = function triggerCreate({ appPath, teamFlag, flag, orgWorkspaceGrantFlag, options, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const appEnvironment = (options === null || options === void 0 ? void 0 : options.localApp) ? 'local' : 'deployed';
        const cmd = new cli_process_1.SlackCLIProcess(`trigger create ${flag}`, { team: teamFlag, qa: options === null || options === void 0 ? void 0 : options.qa }, {
            '--app': appEnvironment,
            '--org-workspace-grant': orgWorkspaceGrantFlag,
        });
        try {
            const proc = yield cmd.execAsync({
                cwd: appPath,
            });
            return proc.output;
        }
        catch (error) {
            throw (0, command_error_1.default)(error, 'triggerCreate');
        }
    });
};
exports.create = create;
/**
 * `slack trigger delete`
 * @param appPath path to the app
 * @param teamFlag team domain to delete trigger from
 * @param flag
 * @returns command output
 */
const del = function triggerDelete(appPath, teamFlag, flag, options) {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO: (breaking change) separate params vs. single-param-object
        // TODO: delete requires --trigger-id so add that to parameters (breaking change)
        const cmd = new cli_process_1.SlackCLIProcess(`trigger delete ${flag}`, { team: teamFlag, qa: options === null || options === void 0 ? void 0 : options.qa });
        try {
            const proc = yield cmd.execAsync({
                cwd: appPath,
            });
            return proc.output;
        }
        catch (error) {
            throw (0, command_error_1.default)(error, 'triggerDelete');
        }
    });
};
exports.del = del;
/**
 * `slack trigger info`
 * @param appPath path to the app
 * @param teamFlag team domain of the trigger
 * @param flag arbitrary additional flags
 * @returns command output
 */
const info = function triggerInfo(appPath, teamFlag, flag, options) {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO: getting trigger info necessitates passing a trigger ID, so that should be exposed in the parameters here
        // TODO: (breaking change) separate params vs. single-param-object
        const cmd = new cli_process_1.SlackCLIProcess(`trigger info ${flag}`, { team: teamFlag, qa: options === null || options === void 0 ? void 0 : options.qa });
        try {
            const proc = yield cmd.execAsync({
                cwd: appPath,
            });
            return proc.output;
        }
        catch (error) {
            throw (0, command_error_1.default)(error, 'triggerInfo');
        }
    });
};
exports.info = info;
/**
 * `slack trigger list`
 * @param appPath path to app
 * @param teamFlag team domain for listing all triggers
 * @param flag arbitrary additional flags to pass
 * @returns command output
 */
const list = function triggerList(appPath, teamFlag, flag, options) {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO: (breaking change) separate params vs. single-param-object
        const cmd = new cli_process_1.SlackCLIProcess(`trigger list ${flag}`, { team: teamFlag, qa: options === null || options === void 0 ? void 0 : options.qa });
        try {
            const proc = yield cmd.execAsync({
                cwd: appPath,
            });
            return proc.output;
        }
        catch (error) {
            throw (0, command_error_1.default)(error, 'triggerList');
        }
    });
};
exports.list = list;
/**
 * `slack trigger update`
 * @param appPath path to the app
 * @param teamFlag team domain for the updating trigger
 * @param flag arbitrary additional flags to pass to command
 * @returns command output
 */
const update = function triggerUpdate(appPath, teamFlag, flag, options) {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO: (breaking change) separate params vs. single-param-object
        const cmd = new cli_process_1.SlackCLIProcess(`trigger update ${flag}`, { team: teamFlag, qa: options === null || options === void 0 ? void 0 : options.qa });
        try {
            const proc = yield cmd.execAsync({
                cwd: appPath,
            });
            return proc.output;
        }
        catch (error) {
            throw (0, command_error_1.default)(error, 'triggerUpdate');
        }
    });
};
exports.update = update;
// TODO: (breaking change): rename properties of this default export to match actual command names
exports.default = {
    triggerAccess: exports.access,
    triggerCreate: exports.create,
    triggerDelete: exports.del,
    triggerInfo: exports.info,
    triggerList: exports.list,
    triggerUpdate: exports.update,
};
//# sourceMappingURL=trigger.js.map