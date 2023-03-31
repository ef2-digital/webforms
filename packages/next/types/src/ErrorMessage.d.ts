/// <reference types="react" />
import { FieldErrors } from "react-hook-form";
type ErrorMessageProps = {
    errors: FieldErrors;
    name: string;
    classNames?: string;
    translator: (key: string, params?: {
        [key: string]: string | number;
    }) => string;
};
declare const ErrorMessage: ({ errors, name, classNames, translator, }: ErrorMessageProps) => JSX.Element;
export default ErrorMessage;
