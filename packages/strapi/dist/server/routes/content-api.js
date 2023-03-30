"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    type: "content-api",
    routes: [
        {
            method: "GET",
            path: "/forms",
            handler: "formController.index",
        },
    ],
};
