"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const custom_errors_1 = require("../utils/custom-errors");
// TODO: this error wrapper should maybe look at official node docs for how to extend errors
// https://nodejs.org/api/errors.html#errors
/**
 * Error handler for Lib
 * @param error error object to wrap
 * @param command command used
 * @param additionalInfo any extra info
 * @returns The wrapped CustomError object
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function commandError(error, command, additionalInfo) {
    // Specify error name, if it's a generic Error
    if (error.name) {
        // eslint-disable-next-line no-param-reassign
        error.name = error.name.toString() === 'Error' ? 'commandError' : 'Error';
    }
    // Create new error and return it
    const newError = new custom_errors_1.CustomError(error.message, error.name, error.stack, {
        command,
        additionalInfo,
    });
    return newError;
}
exports.default = commandError;
//# sourceMappingURL=command-error.js.map