import { Strapi } from "@strapi/strapi";
import get from "lodash/get";

import {
  FormType,
  HandlerType,
  SubmissionType,
} from "../../admin/src/utils/types";
import { format, parseISO } from "date-fns";

export default ({ strapi }: { strapi: Strapi }) => ({
  async process(
    handler: HandlerType,
    submission: SubmissionType,
    form: FormType
  ) {
    if (!handler.data.sendTo || !submission) {
      return;
    }

    const settings = strapi.plugins.email.config("settings");
    const users =
      (await strapi.plugins["email"].services.recipients) ??
      settings.recipients;

    const parsedData = Object.assign(
      {
        site: {
          email: users,
        },
        form: form,
      },
      {
        submission: {
          createdAt: format(parseISO(submission.createdAt), "dd-MM-yyyy HH:mm"),
          fields: JSON.parse(submission.submission),
        },
      }
    );

    const parsedSubmission = this.parse(handler.data, parsedData);

    try {
      await strapi.plugins["email"].services.email.send({
        to: parsedSubmission.sendTo.split(","),
        from: settings.defaultFrom,
        subject: parsedSubmission.subject,
        html: parsedSubmission.message.replace(/,/g, "<br />"),
      });
    } catch (err) {
      console.log(err);
    }
  },

  /**@todo make handler body dynamic */
  parse(from: object, to: object) {
    Object.keys(from).map((key) => {
      from[key] = from[key].replace(/{(.*?)}/g, (placeholder) => {
        let formattedPlaceholder = placeholder
          .replace("{", "")
          .replace("}", "");

        let found = get(to, formattedPlaceholder);

        if (!found) {
          return;
        }

        if (
          typeof found === "object" &&
          formattedPlaceholder === "submission.fields"
        ) {
          return Object.keys(found).map((key) => {
            return `<strong>${
              key.charAt(0).toUpperCase() + key.slice(1)
            }</strong>: ${found[key]}`;
          });
        }

        return found;
      });
    });

    return from;
  },
});
