import { CustomError } from '../utils/custom-errors';
/**
 * Error handler for Lib
 * @param error error object to wrap
 * @param command command used
 * @param additionalInfo any extra info
 * @returns The wrapped CustomError object
 */
export default function commandError(error: any, command: string, additionalInfo?: string): CustomError;
//# sourceMappingURL=command-error.d.ts.map