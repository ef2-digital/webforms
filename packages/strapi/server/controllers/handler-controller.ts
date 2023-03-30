import {Strapi} from '@strapi/strapi';

export default ({strapi}: { strapi: Strapi }) => ({
    async enabled(ctx) {
        ctx.body = await strapi
            .plugin('webforms')
            .service('handlerService')
            .enable(ctx.request.body);
    },
});
