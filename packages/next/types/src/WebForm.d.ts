import { ValidLocale } from "./translations/translator";
import { FieldClassNames } from "./dynamic-control-types";
import { PropsWithChildren } from "react";
export interface WebFormProps extends PropsWithChildren {
    locale: ValidLocale;
    formId: number;
    classNames?: FieldClassNames;
    endpoint: string;
}
declare const WebForm: ({ locale, formId, classNames, endpoint, }: WebFormProps) => Promise<JSX.Element>;
export default WebForm;
