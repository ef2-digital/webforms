"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => ({
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
