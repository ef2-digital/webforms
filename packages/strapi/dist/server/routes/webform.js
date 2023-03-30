"use strict";
/**
 *  router
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
const routes = strapi_1.factories.createCoreRouter("plugin::webforms.form", {
    only: ["find"],
    config: {
        find: {
            auth: false,
            policies: [],
            middlewares: [],
        },
    },
});
exports.default = {
    type: "content-api",
    routes: [],
};
