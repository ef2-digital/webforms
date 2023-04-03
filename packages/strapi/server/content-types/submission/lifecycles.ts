export default {
  async afterCreate(event) {
    const { result, params } = event;

    if (!result || !params.data.form) {
      return;
    }

    const form = await strapi.entityService.findOne(
      "plugin::webforms.form",
      params.data.form.connect.pop(),
      {
        populate: { handlers: true },
      }
    );

    if (!form.handlers) {
      return;
    }

    const enabledHandlers = form.handlers.filter((handler) => handler.enabled);

    if (!enabledHandlers) {
      return;
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
