"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../utils/enums");
const data_1 = require("../utils/data");
exports.default = ({ strapi }) => ({
    async enable(data) {
        return await strapi.entityService.update("plugin::webforms.handler", data.id, {
            data: {
                enabled: data.enabled,
            },
        });
    },
    async create(formId) {
        const handlers = await strapi.entityService.findMany("plugin::webforms.handler", {
            fields: ["identifier"],
            filters: {
                form: formId,
                $or: [
                    {
                        identifier: "email_confirmation",
                    },
                    {
                        identifier: "email_notification",
                    },
                ],
            },
        });
        if (Object.keys(handlers).length !== 0) {
            return;
        }
        /** @todo - add customer confirmation email as default */
        // await strapi.entityService.create("plugin::webforms.handler", {
        //   data: {
        //     form: formId,
        //     enabled: false,
        //     identifier: "email_confirmation",
        //     type: HandlerTypeEnum.Email,
        //     data: EmailConfirmationData,
        //     service: "emailService",
        //   },
        // });
        await strapi.entityService.create("plugin::webforms.handler", {
            data: {
                form: formId,
                enabled: true,
                identifier: "email_notification",
                type: enums_1.HandlerTypeEnum.Email,
                data: data_1.EmailNotificationData,
                service: "emailService",
            },
        });
    },
    async process(handler, submission, form) {
        return await strapi
            .plugin("webforms")
            .service(handler.service)
            .process(handler, submission, form);
    },
});
