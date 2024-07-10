/**
 * Custom error class for cli methods
 */
export declare class CustomError extends Error {
    name: string;
    command: string | undefined;
    additionalInfo: string | undefined;
    /**
     * Inherit and create new instance of default Error class
     * @param message
     * @param name
     * @param stack
     * @param options
     */
    constructor(message: string, name: string, stack: string | undefined, options?: {
        /**
         * Command used
         */
        command?: string;
        /**
         * Any additional info
         */
        additionalInfo?: string;
    });
}
//# sourceMappingURL=custom-errors.d.ts.map