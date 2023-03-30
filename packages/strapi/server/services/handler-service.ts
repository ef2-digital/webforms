import {Strapi} from '@strapi/strapi';
import {HandlerTypeEnum} from "../utils/enums";
import {EmailConfirmationData, EmailNotificationData} from "../utils/data";

type EnabledProps = {
    id: number,
    enabled: false
}
export default ({strapi}: { strapi: Strapi }) => ({
    async enable(data: EnabledProps) {
        return await strapi.entityService.update('plugin::webforms.handler', data.id, {
            data: {
                enabled: data.enabled,
            }
        })
    },

    async create(formId) {
        const handlers = await strapi.entityService.findMany('plugin::webforms.handler', {
            fields: ['identifier'],
            filters: {
                form: formId,
                $or: [
                    {
                        identifier: 'email_confirmation',
                    },
                    {
                        identifier: 'email_notification',
                    },
                ],
            }
        })

        if (Object.keys(handlers).length !== 0) {
            return
        }

        await strapi.entityService.create('plugin::webforms.handler', {
            data:
                {
                    form: formId,
                    enabled: true,
                    identifier: 'email_confirmation',
                    type: HandlerTypeEnum.Email,
                    data: EmailConfirmationData,
                }
        });

        await strapi.entityService.create('plugin::webforms.handler', {
            data:
                {
                    form: formId,
                    enabled: true,
                    identifier: 'email_notification',
                    type: HandlerTypeEnum.Email,
                    data: EmailNotificationData,
                }
        });
    }
});

