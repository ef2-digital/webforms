"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => {
    const extensionService = strapi.plugin("graphql").service("extension");
    extensionService.use({
        typeDefs: `
      type createWebformsSubmission {
        fullName: String
      }
      `,
        resolvers: {
            Mutation: {
                createWebformsSubmission: {
                    resolve: async (parent, args, context) => {
                        //@ts-ignore
                        const { toEntityResponse } = strapi.service("plugin::graphql.format").returnTypes;
                        const formId = args.data.form;
                        const submission = args.data.submission;
                        const entry = await strapi.entityService.create("plugin::webforms.submission", {
                            data: {
                                submission: submission,
                                form: {
                                    connect: [formId],
                                },
                            },
                        });
                        return toEntityResponse(entry);
                    },
                },
            },
        },
        resolversConfig: {
            "Query.webformsForms": {
                auth: false,
            },
            "Query.webformsForm": {
                auth: false,
            },
            "Query.webformsSubmissions": {
                auth: false,
            },
            "Query.webformsSubmission": {
                auth: false,
            },
            "Mutation.createWebformsSubmission": {
                auth: false,
            },
        },
    });
};
