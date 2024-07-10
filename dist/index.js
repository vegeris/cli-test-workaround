"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shell = exports.SlackProduct = exports.SlackTracerId = exports.SlackCLIProcess = exports.SlackCLI = void 0;
var cli_1 = require("./cli");
Object.defineProperty(exports, "SlackCLI", { enumerable: true, get: function () { return cli_1.SlackCLI; } });
var cli_process_1 = require("./cli/cli-process");
Object.defineProperty(exports, "SlackCLIProcess", { enumerable: true, get: function () { return cli_process_1.SlackCLIProcess; } });
var constants_1 = require("./utils/constants");
Object.defineProperty(exports, "SlackTracerId", { enumerable: true, get: function () { return constants_1.SlackTracerId; } });
Object.defineProperty(exports, "SlackProduct", { enumerable: true, get: function () { return constants_1.SlackProduct; } });
var shell_1 = require("./cli/shell");
Object.defineProperty(exports, "shell", { enumerable: true, get: function () { return shell_1.shell; } });
// Check for cli binary path
if (!process.env.SLACK_CLI_PATH) {
    throw new Error('Environment variable `SLACK_CLI_PATH` is not set!');
}
//# sourceMappingURL=index.js.map