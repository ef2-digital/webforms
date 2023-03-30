export default {
  async afterCreate(event) {
    const { result, params } = event;

    if (!result) {
      return;
    }

    // console.log(result, params);
    // }
    //
    // const form = await strapi.entityService.findOne('plugin::webforms.form', data.data.form, {
    //     populate: {handlers: true},
    // });
    //
    // if (!form.handlers) {
    //     return
    // }
    //
    // const enabledHandlers = form.handlers.filter((handler) => handler.enabled);
  },
};
