"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const form_controller_1 = __importDefault(require("./form-controller"));
const submission_controller_1 = __importDefault(require("./submission-controller"));
const handler_controller_1 = __importDefault(require("./handler-controller"));
exports.default = {
    formController: form_controller_1.default,
    submissionController: submission_controller_1.default,
    handlerController: handler_controller_1.default,
};
