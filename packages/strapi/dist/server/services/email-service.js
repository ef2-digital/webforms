"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_1 = __importDefault(require("lodash/get"));
const date_fns_1 = require("date-fns");
exports.default = ({ strapi }) => ({
    async process(handler, submission, form) {
        var _a;
        if (!handler.data.sendTo || !submission) {
            return;
        }
        const settings = strapi.plugins.email.config("settings");
        const users = (_a = (await strapi.plugins["email"].services.recipients)) !== null && _a !== void 0 ? _a : settings.recipients;
        const parsedData = Object.assign({
            site: {
                email: users,
            },
            form: form,
        }, {
            submission: {
                createdAt: (0, date_fns_1.format)((0, date_fns_1.parseISO)(submission.createdAt), "dd-MM-yyyy HH:mm"),
                fields: JSON.parse(submission.submission),
            },
        });
        const parsedSubmission = this.parse(handler.data, parsedData);
        try {
            await strapi.plugins["email"].services.email.send({
                to: parsedSubmission.sendTo,
                from: parsedSubmission.sendFrom,
                subject: parsedSubmission.subject,
                html: parsedSubmission.message,
            });
        }
        catch (err) {
            console.log(err);
        }
    },
    /**@todo make handler body dynamic */
    parse(from, to) {
        Object.keys(from).map((key) => {
            from[key] = from[key].replace(/{(.*?)}/g, (placeholder) => {
                let formattedPlaceholder = placeholder
                    .replace("{", "")
                    .replace("}", "");
                let found = (0, get_1.default)(to, formattedPlaceholder);
                if (!found) {
                    return;
                }
                if (typeof found === "object" &&
                    formattedPlaceholder === "submission.fields") {
                    return Object.keys(found).map((key) => {
                        return `${key}: ${found[key]} <br />`;
                    });
                }
                return found;
            });
        });
        return from;
    },
});
