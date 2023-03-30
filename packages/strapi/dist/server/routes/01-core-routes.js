"use strict";
/**
 *  router
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    type: "content-api",
    routes: [
        {
            method: "GET",
            path: "/webforms",
            handler: "formController.index",
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
        // {
        //   method: "GET",
        //   path: "/webforms/:id",
        //   handler: "webform-controller.findOne",
        //   config: {
        //     auth: false,
        //     policies: [],
        //     middlewares: [],
        //   },
        // },
    ],
};
