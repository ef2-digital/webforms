import { WebformFormsResponse } from "./types";
declare const getForm: (endpoint: string, formId: number) => Promise<WebformFormsResponse>;
declare const postSubmission: (endpoint: string, formId: string, data: object) => Promise<void>;
export { getForm, postSubmission };
