"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const sinon_1 = __importDefault(require("sinon"));
const _1 = require(".");
describe('main module', () => {
    const sandbox = sinon_1.default.createSandbox();
    afterEach(() => {
        sandbox.restore();
    });
    describe('exports', () => {
        it('should export a SlackCLI object', () => {
            chai_1.assert.isObject(_1.SlackCLI);
        });
        it('should export a SlackTracerId object', () => {
            chai_1.assert.isObject(_1.SlackTracerId);
        });
    });
});
//# sourceMappingURL=index.spec.js.map