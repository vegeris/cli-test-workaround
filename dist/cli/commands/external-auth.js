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
exports.externalAuth = void 0;
const cli_process_1 = require("../cli-process");
const command_error_1 = __importDefault(require("../command-error"));
/**
 * `slack external-auth`
 * @param appPath path to app
 * @param teamFlag team domain of the relevant app
 * @param provider provider to add external auth for
 * @param flags specification of external-auth, e.g. add or add-secret
 * @returns command output
 */
const externalAuth = function externalAuth(appPath, teamFlag, provider, flags, options) {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO: (breaking change) separate parameters vs single-param-object
        // TODO: this is a generic entry point to the `external-auth` suite of commands, and today `flags` is abused to
        // specify the actual sub-command. easy, but lazy, not sure if best approach
        const cmd = new cli_process_1.SlackCLIProcess(`external-auth ${flags}`, { team: teamFlag, qa: options === null || options === void 0 ? void 0 : options.qa }, {
            '--provider': provider,
        });
        try {
            const proc = yield cmd.execAsync({
                cwd: appPath,
            });
            return proc.output;
        }
        catch (error) {
            throw (0, command_error_1.default)(error, 'externalAuth');
        }
    });
};
exports.externalAuth = externalAuth;
exports.default = {
    externalAuth: exports.externalAuth,
};
//# sourceMappingURL=external-auth.js.map