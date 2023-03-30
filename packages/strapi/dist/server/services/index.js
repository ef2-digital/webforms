"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const form_service_1 = __importDefault(require("./form-service"));
const submission_service_1 = __importDefault(require("./submission-service"));
const handler_service_1 = __importDefault(require("./handler-service"));
exports.default = {
    formService: form_service_1.default,
    submissionService: submission_service_1.default,
    handlerService: handler_service_1.default,
};
