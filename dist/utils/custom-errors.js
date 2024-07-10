"use strict";
// TODO: refactor this error class:
// - reuse nodejs error `cause` to encode the 'wrapping' behaviour this class intends to implement https://nodejs.org/api/errors.html#errorcause
// - instead of `name`, consider reusing node error `code` https://nodejs.org/api/errors.html#errorcode
// - review how stack traces present themselves and possibly consider using `captureStackTrace` https://nodejs.org/api/errors.html#errorcapturestacktracetargetobject-constructoropt
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
/**
 * Custom error class for cli methods
 */
class CustomError extends Error {
    /**
     * Inherit and create new instance of default Error class
     * @param message
     * @param name
     * @param stack
     * @param options
     */
    constructor(message, name, stack, options) {
        super(message);
        this.name = name;
        this.stack = stack;
        this.command = options === null || options === void 0 ? void 0 : options.command;
        this.additionalInfo = options === null || options === void 0 ? void 0 : options.additionalInfo;
        // Set a more readable error message
        this.message = `${this.name}: ${this.command}; ${this.additionalInfo}`;
        // Set the prototype explicitly
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}
exports.CustomError = CustomError;
//# sourceMappingURL=custom-errors.js.map