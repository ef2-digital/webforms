"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => ({
    async enabled(ctx) {
        ctx.body = await strapi
            .plugin('webforms')
            .service('handlerService')
            .enable(ctx.request.body);
    },
});
