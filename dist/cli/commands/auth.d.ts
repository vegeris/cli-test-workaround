import type { ShellProcess } from '../../utils/types';
declare const _default: {
    /**
     *  `slack login --no-prompt`
     */
    loginNoPrompt: (options?: {
        qa?: boolean;
    }) => Promise<{
        /**
         * Command output
         */
        shellOutput: ShellProcess['output'];
        /**
         * Slash command with auth ticket, e.g. '/slackauthticket MTMxNjgxMDUtYTYwOC00NzRhLWE3M2YtMjVmZTQyMjc1MDg4'
         */
        authTicketSlashCommand: string;
        /**
         * An auth ticket is a A UUID sequence granted by Slack to a CLI auth requestor.
         * That ticket must then be submitted via slash command by a user logged in to Slack and permissions accepted to be
         * granted a token for use.
         */
        authTicket: string;
    }>;
    /**
     * `slack login --no-prompt --challenge --ticket`
     * @param challenge challenge string from UI
     * @param authTicket authTicket string from loginNoPrompt
     * @param options
     * @returns
     */
    loginChallengeExchange: (challenge: string, authTicket: string, options?: {
        qa?: boolean;
    }) => Promise<string>;
    /**
     * `slack logout`
     * @returns command output
     */
    logout: (options?: {
        /** team domain to logout from */
        teamFlag?: string;
        /** perform the logout for all authentications */
        allWorkspaces?: boolean;
        qa?: boolean;
    }) => Promise<string>;
};
export default _default;
//# sourceMappingURL=auth.d.ts.map