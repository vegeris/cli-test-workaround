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
exports.validate = void 0;
const cli_process_1 = require("../cli-process");
const command_error_1 = __importDefault(require("../command-error"));
/**
 * `slack manifest validate`
 * @param appPath path to app
 * @returns command output
 */
const validate = function manifestValidate(appPath, options) {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO: breaking change, separate params vs single-param-object
        const cmd = new cli_process_1.SlackCLIProcess('manifest validate', options);
        try {
            const proc = yield cmd.execAsync({
                cwd: appPath,
            });
            return proc.output;
        }
        catch (error) {
            throw (0, command_error_1.default)(error, 'manifestValidate');
        }
    });
};
exports.validate = validate;
// TODO: (breaking change): rename properties of this default export to match actual command names
exports.default = {
    manifestValidate: exports.validate,
};
//# sourceMappingURL=manifest.js.map