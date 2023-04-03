import { Strapi } from "@strapi/strapi";
import { HandlerTypeEnum } from "../utils/enums";
import { EmailConfirmationData, EmailNotificationData } from "../utils/data";
import { HandlerType, FormType } from "../../admin/src/utils/types";
import submission from "../content-types/submission";
import { format, parseISO } from "date-fns";

type EnabledProps = {
  id: number;
  enabled: false;
};
export default ({ strapi }: { strapi: Strapi }) => ({
  async enable(data: EnabledProps) {
    return await strapi.entityService.update(
      "plugin::webforms.handler",
      data.id,
      {
        data: {
          enabled: data.enabled,
        },
      }
    );
  },

  async create(formId) {
    const handlers = await strapi.entityService.findMany(
      "plugin::webforms.handler",
      {
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
      }
    );

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
        type: HandlerTypeEnum.Email,
        data: EmailNotificationData,
        service: "emailService",
      },
    });
  },

  async process(handler: HandlerType, submission: any, form: FormType) {
    return await strapi
      .plugin("webforms")
      .service(handler.service)
      .process(handler, submission, form);
  },
});
