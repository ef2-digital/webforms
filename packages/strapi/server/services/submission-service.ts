import { Strapi } from "@strapi/strapi";
import { FormType } from "../../admin/src/utils/types";

type ErrorType = {
  field: string;
  error: string;
};
type ValidatedType = {
  validated: boolean;
  errors?: ErrorType | null;
};

export default ({ strapi }: { strapi: Strapi }) => ({
  async getSubmissions() {
    return await strapi.entityService.findMany("plugin::webforms.submission", {
      populate: { form: true },
      sort: { createdAt: "desc" },
    });
  },

  async storeSubmission(ctx) {
    const formId = ctx.params.id;
    const submission = ctx.request.body;

    if (!formId || Object.keys(submission).length === 0) {
      return ctx.badRequest("submission is missing");
    }

    const form: FormType = await strapi.entityService.findOne(
      "plugin::webforms.form",
      formId
    );

    const validate: ValidatedType = this.validate(form, submission);

    if (!validate.validated) {
      return ctx.badRequest(validate.errors);
    }

    return await strapi.entityService.create("plugin::webforms.submission", {
      data: {
        form: formId,
        submission: submission,
      },
    });
  },

  async viewSubmission(submissionId: number) {
    return await strapi.entityService.findOne(
      "plugin::webforms.submission",
      submissionId,
      { populate: { form: true } }
    );
  },

  /**
   * @todo implement validation backend checks
   * @param form
   * @param submission
   */
  validate(form: FormType, submission): ValidatedType {
    let errors = null;

    const fields = JSON.parse(form.fields).filter(
      (field) => field.extraProps.isRequired
    );

    if (Object.keys(fields).length === 0) {
      return {
        validated: true,
        errors: errors,
      };
    }

    return {
      validated: false,
      errors: errors,
    };
  },
});
