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
exports.remove = exports.list = exports.add = void 0;
const cli_process_1 = require("../cli-process");
const command_error_1 = __importDefault(require("../command-error"));
/**
 * `slack env add`
 * @param appPath path to app
 * @param teamFlag team domain to add env var to
 * @param secretKey environment variable key
 * @param secretValue environment variable value
 * @returns command output
 */
const add = function envAdd(appPath, teamFlag, secretKey, secretValue, options) {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO: (breaking change) separate parameters vs single-param-object
        const cmd = new cli_process_1.SlackCLIProcess(`env add ${secretKey} ${secretValue}`, { team: teamFlag, qa: options === null || options === void 0 ? void 0 : options.qa });
        try {
            const proc = yield cmd.execAsync({
                cwd: appPath,
            });
            return proc.output;
        }
        catch (error) {
            throw (0, command_error_1.default)(error, 'envAdd');
        }
    });
};
exports.add = add;
/**
 * `slack env list`
 * @param appPath path to app
 * @param teamFlag team domain to list env vars for
 * @returns command output
 */
const list = function envList(appPath, teamFlag, options) {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO: (breaking change) separate parameters vs single-param-object
        const cmd = new cli_process_1.SlackCLIProcess('env list', { team: teamFlag, qa: options === null || options === void 0 ? void 0 : options.qa });
        try {
            const proc = yield cmd.execAsync({
                cwd: appPath,
            });
            return proc.output;
        }
        catch (error) {
            throw (0, command_error_1.default)(error, 'envList');
        }
    });
};
exports.list = list;
/**
 * `slack env remove`
 * @param appPath path to app
 * @param teamFlag team domain to remove env var from
 * @param secretKey environment variable key
 * @returns command output
 */
const remove = function envRemove(appPath, teamFlag, secretKey, options) {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO: (breaking change) separate parameters vs single-param-object
        const cmd = new cli_process_1.SlackCLIProcess(`env remove ${secretKey}`, { team: teamFlag, qa: options === null || options === void 0 ? void 0 : options.qa });
        try {
            const proc = yield cmd.execAsync({
                cwd: appPath,
            });
            return proc.output;
        }
        catch (error) {
            throw (0, command_error_1.default)(error, 'envRemove');
        }
    });
};
exports.remove = remove;
// TODO: (breaking change): rename properties of this default export to match actual command names
exports.default = {
    envAdd: exports.add,
    envList: exports.list,
    envRemove: exports.remove,
};
//# sourceMappingURL=env.js.map