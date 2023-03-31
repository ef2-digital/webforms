import { DynamicFieldData, FieldClassNames } from "./dynamic-control-types";
import { PropsWithChildren } from "react";
import { ValidLocale } from "./translations/translator";
export interface FormProps extends PropsWithChildren {
    locale: ValidLocale;
    formId: string;
    fields: DynamicFieldData[];
    classNames?: FieldClassNames;
    endpoint: string;
}
declare const Form: ({ locale, formId, fields, classNames, endpoint, children, }: FormProps) => JSX.Element;
export default Form;
