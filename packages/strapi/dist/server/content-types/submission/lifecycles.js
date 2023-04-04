"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { ForbiddenError } = require("@strapi/utils").errors;
exports.default = {
    async beforeCreate(event) {
        const { result, params } = event;
        if (!params.data.submission) {
            throw new ForbiddenError("No submission");
        }
        const submission = JSON.parse(params.data.submission);
        if ("honeypot" in submission && submission.honeypot !== "") {
            throw new ForbiddenError("Honeypot filled");
        }
        delete submission.honeypot;
        params.data.submission = JSON.stringify(submission);
        return;
    },
    async afterCreate(event) {
        const { result, params } = event;
        if (!result || !params.data.form) {
            throw new ForbiddenError("No submission");
        }
        const form = await strapi.entityService.findOne("plugin::webforms.form", params.data.form.connect.pop(), {
            populate: { handlers: true },
        });
        if (!form.handlers) {
            throw new ForbiddenError("No handlers");
        }
        const enabledHandlers = form.handlers.filter((handler) => handler.enabled);
        if (!enabledHandlers) {
            throw new ForbiddenError("No enabledHandlers");
        }
        enabledHandlers.forEach(async (handler) => {
            if (!handler.service) {
                return;
            }
            return await strapi
                .plugin("webforms")
                .service("handlerService")
                .process(handler, result, form);
        });
    },
};
