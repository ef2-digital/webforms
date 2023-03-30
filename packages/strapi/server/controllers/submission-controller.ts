import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => ({
  async index(ctx) {
    ctx.body = await strapi
      .plugin("webforms")
      .service("submissionService")
      .getSubmissions();
  },

  async view(ctx) {
    ctx.body = await strapi
      .plugin("webforms")
      .service("submissionService")
      .viewSubmission(ctx.request.query.id);
  },

  async store(ctx) {
    return await strapi
      .plugin("webforms")
      .service("submissionService")
      .storeSubmission(ctx);
  },
});
