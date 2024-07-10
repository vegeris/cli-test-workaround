/// <reference types="node" />
import type { ChildProcessWithoutNullStreams } from 'child_process';
export declare const SlackProduct: {
    FREE: string;
    PRO: string;
    BUSINESS_PLUS: string;
    ENTERPRISE: string;
    ENTERPRISE_SANDBOX: string;
    ENTERPRISE_SELECT: string;
};
export interface ShellProcess {
    /**
     * Child process object
     */
    process: ChildProcessWithoutNullStreams;
    /**
     * Command output
     */
    output: string;
    /**
     * Process state
     */
    finished: boolean;
    /**
     * Command string
     */
    command: string;
}
//# sourceMappingURL=types.d.ts.map