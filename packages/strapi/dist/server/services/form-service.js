"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => ({
    async getForms() {
        return await strapi.entityService.findMany("plugin::webforms.form", {
            sort: "createdAt:desc",
        });
    },
    async getForm(id) {
        return await strapi.entityService.findOne("plugin::webforms.form", id);
    },
    async getModel() {
        return strapi.getModel("plugin::webforms.form");
    },
    async updateForm(data) {
        if (data.id) {
            return await strapi.entityService.update("plugin::webforms.form", data.id, { data: { ...data } });
        }
        const form = await strapi.entityService.create("plugin::webforms.form", {
            data: { ...data },
        });
        return await strapi
            .plugin("webforms")
            .service("handlerService")
            .create(form.id);
    },
    async deleteForm(id) {
        return await strapi.entityService.delete("plugin::webforms.form", id);
    },
    async getHandlers(id) {
        return await strapi.entityService.findMany("plugin::webforms.handler", {
            filters: {
                form: id,
            },
        });
    },
    async getSubmissions(id) {
        return await strapi.entityService.findOne("plugin::webforms.form", id, {
            populate: {
                submissions: {
                    sort: "createdAt:desc",
                },
            },
        });
    },
    addForm() {
        return true;
    },
});
