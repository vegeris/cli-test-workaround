"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.SlackCLI = void 0;
const fs = __importStar(require("node:fs"));
const path = __importStar(require("node:path"));
const app_1 = __importDefault(require("./commands/app"));
const auth_1 = __importDefault(require("./commands/auth"));
const collaborator_1 = __importDefault(require("./commands/collaborator"));
const create_1 = __importDefault(require("./commands/create"));
const env_1 = __importDefault(require("./commands/env"));
const external_auth_1 = __importDefault(require("./commands/external-auth"));
const function_1 = __importDefault(require("./commands/function"));
const manifest_1 = __importDefault(require("./commands/manifest"));
const platform_1 = __importDefault(require("./commands/platform"));
const trigger_1 = __importDefault(require("./commands/trigger"));
const logger_1 = __importDefault(require("../utils/logger"));
/**
 * Set of functions to spawn and interact with Slack Platform CLI processes and commands
 */
exports.SlackCLI = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, app_1.default), { app: {
        delete: app_1.default.workspaceDelete,
        install: app_1.default.workspaceInstall,
        list: app_1.default.workspaceList,
        listSync: app_1.default.workspaceListSync,
    } }), auth_1.default), { auth: auth_1.default }), collaborator_1.default), { collaborators: {
        add: collaborator_1.default.collaboratorsAdd,
        list: collaborator_1.default.collaboratorsList,
        remove: collaborator_1.default.collaboratorsRemove,
    } }), create_1.default), env_1.default), { env: {
        add: env_1.default.envAdd,
        list: env_1.default.envList,
        remove: env_1.default.envRemove,
    } }), external_auth_1.default), function_1.default), { function: {
        access: function_1.default.functionAccess,
    } }), manifest_1.default), { manifest: {
        validate: manifest_1.default.manifestValidate,
    } }), platform_1.default), { platform: platform_1.default }), trigger_1.default), { trigger: {
        access: trigger_1.default.triggerAccess,
        create: trigger_1.default.triggerCreate,
        delete: trigger_1.default.triggerDelete,
        info: trigger_1.default.triggerInfo,
        list: trigger_1.default.triggerList,
        update: trigger_1.default.triggerUpdate,
    }, 
    /**
     * Delete app and Log out of all sessions
     * @param options
     */
    stopSession: function stopSession({ appPath, appTeamID, isLocalApp, qa, }) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: perhaps appPath does not exist, should guard against that.
            console.log('stopSession: await SlackCLI.app.listsync ', appPath);
            if (appPath) {
                // List instances of app installation if app path provided
                const installedAppsOutput = yield exports.SlackCLI.app.listSync(appPath, { qa });
                // If app is installed
                if (!installedAppsOutput.includes('This project has no apps')) {
                    // Soft app delete
                    try {
                        yield exports.SlackCLI.app.delete(appPath, appTeamID, { isLocalApp, qa });
                    }
                    catch (error) {
                        logger_1.default.warn(`stopSession could not delete app gracefully, continuing. Error: ${error}`);
                    }
                    // Delete app.json file. Needed for retries. Otherwise asks for collaborator, if old file is present
                    fs.rmSync(path.join(appPath, '.slack'), {
                        force: true,
                        recursive: true,
                    });
                }
            }
            // Log out if logged in
            try {
                yield exports.SlackCLI.logout({ allWorkspaces: true, qa });
            }
            catch (error) {
                // TODO: maybe should error instead? this seems pretty bad
                logger_1.default.warn(`Could not logout gracefully. Error: ${error}`);
            }
        });
    } });
//# sourceMappingURL=index.js.map