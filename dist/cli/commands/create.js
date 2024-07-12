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
exports.createAppFromTemplate = exports.createSync = exports.create = void 0;
const cli_process_1 = require("../cli-process");
const command_error_1 = __importDefault(require("../command-error"));
/**
 * `slack create`
 * @param opts generic command options to pass to `create`
 * @returns command output
 */
const create = function create(appName, // TODO: bad arg name. it should be app path, because this is effectively how it is used
globalOpts, commandOpts, shellOpts) {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO: single object param vs separate params (breaking change)
        let cmdStr = 'create';
        if (appName) {
            cmdStr += ` ${appName}`;
        }
        const cmd = new cli_process_1.SlackCLIProcess(cmdStr, globalOpts, commandOpts);
        try {
            const proc = yield cmd.execAsync(shellOpts);
            return proc.output;
        }
        catch (error) {
            throw (0, command_error_1.default)(error, 'create');
        }
    });
};
exports.create = create;
const createSync = function createSync(appName, // TODO: bad arg name. it should be app path, because this is effectively how it is used
globalOpts, commandOpts, shellOpts) {
    // TODO: single object param vs separate params (breaking change)
    let cmdStr = 'create';
    if (appName) {
        cmdStr += ` ${appName}`;
    }
    const cmd = new cli_process_1.SlackCLIProcess(cmdStr, globalOpts, commandOpts);
    try {
        const output = cmd.execSync(shellOpts);
        console.log('createSync out ', output);
        return output;
    }
    catch (error) {
        throw (0, command_error_1.default)(error, 'create');
    }
};
exports.createSync = createSync;
// TODO: (breaking change) remove this method
/**
 * `slack create` using a template
 * Creates an app from a specified template string.
 * @param templateString template string (ex: `slack-samples/deno-hello-world`)
 * @param appName desired app name
 * @param branchName the branch to clone (default: `main`)
 * @returns command output
 */
const createAppFromTemplate = function createAppFromTemplate({ templateString, appName = '', branchName = 'main', shellOpts = {}, }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return (0, exports.createSync)(appName, {}, {
                '--template': templateString,
                '--branch': branchName,
            }, shellOpts);
        }
        catch (error) {
            throw (0, command_error_1.default)(error, 'createAppFromTemplate');
        }
    });
};
exports.createAppFromTemplate = createAppFromTemplate;
// TODO: (breaking change): rename properties of this default export to match actual command names
exports.default = {
    createAppFromTemplate: exports.createAppFromTemplate,
    createApp: exports.create,
};
//# sourceMappingURL=create.js.map