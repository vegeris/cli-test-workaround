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
exports.access = void 0;
const cli_process_1 = require("../cli-process");
const command_error_1 = __importDefault(require("../command-error"));
// TODO: the "flag" param throughout here should be done in a better way.
// Perhaps expose the SlackCommandOptions type directly?
/**
 * `slack function access`
 * @param appPath path to app
 * @param teamFlag team domain for the function's app
 * @param flags specification of function distribution, i.e. --name greeting_function --app-collaborators
 * @returns command output
 */
const access = function functionAccess(appPath, teamFlag, flags, options) {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO: breaking change, separate params vs single-param-object
        const cmd = new cli_process_1.SlackCLIProcess(`function access ${flags}`, { team: teamFlag, qa: options === null || options === void 0 ? void 0 : options.qa });
        try {
            const proc = yield cmd.execAsync({
                cwd: appPath,
            });
            return proc.output;
        }
        catch (error) {
            throw (0, command_error_1.default)(error, 'functionAccess');
        }
    });
};
exports.access = access;
// TODO: (breaking change): rename properties of this default export to match actual command names
exports.default = {
    functionDistribute: exports.access,
    functionAccess: exports.access,
};
//# sourceMappingURL=function.js.map