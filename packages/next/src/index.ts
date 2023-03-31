import getTranslator, { type ValidLocale } from "./translations/translator";
import Form, { type FormProps } from "./Form";
import { getForm, postSubmission } from "./utils/fetchers";

export type { ValidLocale, FormProps };
export { Form, getTranslator, getForm, postSubmission };
