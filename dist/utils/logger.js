"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
// Configure CLI log level
// Winston logging levels, see: https://github.com/winstonjs/winston#logging
const loggerLevel = process.env.SLACK_CLI_LOG_LEVEL || 'info';
// Create custom logging format
const logPrintFormat = winston_1.format.printf(({ level, message, label, timestamp }) => `${timestamp} - [${label}] - ${level}: ${message}`);
// Create logger
const logger = (0, winston_1.createLogger)({
    level: loggerLevel,
    format: winston_1.format.combine(winston_1.format.label({ label: 'Slack CLI' }), winston_1.format.timestamp(), winston_1.format.colorize(), logPrintFormat),
    transports: [new winston_1.transports.Console()],
});
exports.default = logger;
//# sourceMappingURL=logger.js.map