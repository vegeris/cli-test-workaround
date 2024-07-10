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
 * `slack collaborators add`
 * @param appPath path to app
 * @param teamFlag team domain to add collaborators to
 * @param collaboratorEmail email of the user to be added as a collaborator
 * @returns command output
 */
const add = function collaboratorsAdd(appPath, teamFlag, collaboratorEmail, options) {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO: (breaking change) separate parameters vs single-param-object
        const cmd = new cli_process_1.SlackCLIProcess(`collaborators add ${collaboratorEmail}`, { team: teamFlag, qa: options === null || options === void 0 ? void 0 : options.qa });
        try {
            const proc = yield cmd.execAsync({
                cwd: appPath,
            });
            return proc.output;
        }
        catch (error) {
            throw (0, command_error_1.default)(error, 'collaboratorsAdd');
        }
    });
};
exports.add = add;
/**
 * `slack collaborators list`
 * @param appPath path to app
 * @param teamFlag team domain to list collaborators for
 * @returns command output
 */
const list = function collaboratorsList(appPath, teamFlag, options) {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO: (breaking change) separate parameters vs single-param-object
        const cmd = new cli_process_1.SlackCLIProcess('collaborators list', { team: teamFlag, qa: options === null || options === void 0 ? void 0 : options.qa });
        try {
            const proc = yield cmd.execAsync({
                cwd: appPath,
            });
            return proc.output;
        }
        catch (error) {
            throw (0, command_error_1.default)(error, 'collaboratorsList');
        }
    });
};
exports.list = list;
/**
 * `slack collaborators remove`
 * @param appPath path to app
 * @param teamFlag team domain to remove collaborators from
 * @param collaboratorEmail email of the user to be removed as a collaborator
 * @returns command output
 */
const remove = function collaboratorsRemove(appPath, teamFlag, collaboratorEmail, options) {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO: (breaking change) separate parameters vs single-param-object
        const cmd = new cli_process_1.SlackCLIProcess(`collaborators remove ${collaboratorEmail}`, { team: teamFlag, qa: options === null || options === void 0 ? void 0 : options.qa });
        try {
            const proc = yield cmd.execAsync({
                cwd: appPath,
            });
            return proc.output;
        }
        catch (error) {
            throw (0, command_error_1.default)(error, 'collaboratorsRemove');
        }
    });
};
exports.remove = remove;
// TODO: (breaking change): rename properties of this default export to match actual command names
exports.default = {
    collaboratorsAdd: exports.add,
    collaboratorsList: exports.list,
    collaboratorsRemove: exports.remove,
};
//# sourceMappingURL=collaborator.js.map