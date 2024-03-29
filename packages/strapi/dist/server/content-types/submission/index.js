"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_json_1 = __importDefault(require("./schema.json"));
const lifecycles_1 = __importDefault(require("./lifecycles"));
exports.default = {
    schema: schema_json_1.default,
    lifecycles: lifecycles_1.default
};
