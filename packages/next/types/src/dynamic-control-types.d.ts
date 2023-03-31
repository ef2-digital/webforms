import { RegisterOptions } from "react-hook-form";
export type ControlType = "text" | "select" | "number" | "checkbox" | "file" | "email" | "radio" | "textarea";
export interface SelectOption {
    label: string;
    value: string;
}
export interface FieldClassNames {
    inputWrapper?: string;
    label?: string;
    error?: string;
    text?: string;
    number?: string;
    select?: string;
    checkbox?: string;
    file?: string;
    radio?: string;
    radioWrapper?: string;
    button?: string;
    textArea?: string;
}
export interface DynamicFieldData {
    label: string;
    type: ControlType;
    name: string;
    defaultValue: any;
    classNames?: FieldClassNames;
    options?: SelectOption[];
    config?: RegisterOptions;
}
export interface TranslatorProps {
    key: string;
    params?: {
        [key: string]: string | number;
    } | undefined;
}
