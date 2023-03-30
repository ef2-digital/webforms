"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    type: "content-api",
    routes: [
        {
            method: "GET",
            path: "/forms",
            handler: "formController.index",
            config: {
                auth: false,
                policies: [],
            },
        },
        {
            method: "GET",
            path: "/form/add",
            handler: "formController.add",
            config: {
                auth: false,
                policies: [],
            },
        },
        {
            method: "GET",
            path: "/form",
            handler: "formController.edit",
            config: {
                auth: false,
                policies: [],
            },
        },
        {
            method: "POST",
            path: "/form/:id/submission",
            handler: "submissionController.store",
            config: {
                auth: false,
                policies: [],
            },
        },
        {
            method: "GET",
            path: "/form/handlers",
            handler: "formController.handlers",
            config: {
                auth: false,
                policies: [],
            },
        },
        {
            method: "DELETE",
            path: "/form",
            handler: "formController.delete",
            config: {
                auth: false,
                policies: [],
            },
        },
        {
            method: "POST",
            path: "/form",
            handler: "formController.update",
            config: {
                auth: false,
                policies: [],
            },
        },
        {
            method: "GET",
            path: "/form/model",
            handler: "formController.model",
            config: {
                auth: false,
                policies: [],
            },
        },
        {
            method: "GET",
            path: "/submissions",
            handler: "submissionController.index",
            config: {
                auth: false,
                policies: [],
            },
        },
        {
            method: "POST",
            path: "/handler/enabled",
            handler: "handlerController.enabled",
            config: {
                auth: false,
                policies: [],
            },
        },
    ],
};
