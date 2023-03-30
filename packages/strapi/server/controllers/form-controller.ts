import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => ({
  async index(ctx) {
    ctx.body = await strapi
      .plugin("webforms")
      .service("formService")
      .getForms();
  },

  async model(ctx) {
    ctx.body = await strapi
      .plugin("webforms")
      .service("formService")
      .getModel();
  },

  async add(ctx) {
    ctx.body = await strapi.plugin("webforms").service("formService").addForm();
  },

  async edit(ctx) {
    ctx.body = await strapi
      .plugin("webforms")
      .service("formService")
      .getForm(ctx.request.query.id);
  },

  async handlers(ctx) {
    ctx.body = await strapi
      .plugin("webforms")
      .service("formService")
      .getHandlers(ctx.request.query.id);
  },

  async submissions(ctx) {
    ctx.body = await strapi
      .plugin("webforms")
      .service("formService")
      .getSubmissions(ctx.request.query.id);
  },

  async delete(ctx) {
    ctx.body = await strapi
      .plugin("webforms")
      .service("formService")
      .deleteForm(ctx.request.query.id);
  },

  async update(ctx) {
    ctx.body = await strapi
      .plugin("webforms")
      .service("formService")
      .updateForm(ctx.request.body);
  },
});
