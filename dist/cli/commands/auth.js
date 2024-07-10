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
const cli_process_1 = require("../cli-process");
const command_error_1 = __importDefault(require("../command-error"));
exports.default = {
    /**
     *  `slack login --no-prompt`
     */
    loginNoPrompt: function loginNoPrompt(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const cmd = new cli_process_1.SlackCLIProcess('login', options, {
                '--no-prompt': true,
            });
            try {
                const proc = yield cmd.execAsync();
                // Get auth token
                const authTicketSlashCommand = proc.output.match('/slackauthticket(.*)')[0];
                const authTicket = authTicketSlashCommand.split(' ')[1];
                return {
                    shellOutput: proc.output,
                    authTicketSlashCommand,
                    authTicket,
                };
            }
            catch (error) {
                throw (0, command_error_1.default)(error, this.loginNoPrompt.name, 'Error running command. \nTip: You must have no active authenticated sessions in cli');
            }
        });
    },
    // TODO: (breaking change) inconsistent use of object-as-params vs. separate parameters
    /**
     * `slack login --no-prompt --challenge --ticket`
     * @param challenge challenge string from UI
     * @param authTicket authTicket string from loginNoPrompt
     * @param options
     * @returns
     */
    loginChallengeExchange: function loginChallengeExchange(challenge, authTicket, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const cmd = new cli_process_1.SlackCLIProcess('login', options, {
                '--no-prompt': true,
                '--challenge': challenge,
                '--ticket': authTicket,
            });
            try {
                const proc = yield cmd.execAsync();
                return proc.output;
            }
            catch (error) {
                throw (0, command_error_1.default)(error, this.loginChallengeExchange.name, 'Error running command. \nTip: You must be authenticated in Slack client and have valid challenge and authTicket');
            }
        });
    },
    /**
     * `slack logout`
     * @returns command output
     */
    logout: function logout(options) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: (breaking change) inconsistent use of object-as-params vs. separate parameters
            // Create the command with workspaces to logout of
            const globalOpts = { qa: options === null || options === void 0 ? void 0 : options.qa };
            const cmdOpts = {};
            if (options === null || options === void 0 ? void 0 : options.teamFlag) {
                globalOpts.team = options.teamFlag;
            }
            else if (options === null || options === void 0 ? void 0 : options.allWorkspaces) {
                cmdOpts['--all'] = true;
            }
            const cmd = new cli_process_1.SlackCLIProcess('logout', globalOpts, cmdOpts);
            try {
                const proc = yield cmd.execAsync();
                return proc.output;
            }
            catch (error) {
                throw (0, command_error_1.default)(error, 'logout');
            }
        });
    },
};
//# sourceMappingURL=auth.js.map