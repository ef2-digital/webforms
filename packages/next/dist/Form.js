"use client";
import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { FormProvider, useForm, } from "react-hook-form";
import { DynamicControl } from "./DynamicControl";
import { useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import getTranslator from "./translations/translator";
import { postSubmission } from "./utils/fetchers";
const Form = ({ locale, formId, fields, classNames, endpoint, children, }) => {
    const [success, setSuccess] = useState(false);
    const [translator, setTranslator] = useState(() => () => "");
    useEffect(() => {
        const translator = async () => {
            const data = await getTranslator(locale);
            setTranslator(() => data);
        };
        translator();
    }, []);
    const formMethods = useForm();
    const { handleSubmit, formState: { isSubmitting, errors }, } = formMethods;
    const formSubmit = async (data) => {
        const response = await postSubmission(endpoint, formId, data);
        setSuccess(true);
    };
    return (_jsx(_Fragment, { children: success ? ("") : (_jsxs("form", { onSubmit: handleSubmit(formSubmit), children: [_jsx(FormProvider, { ...formMethods, children: fields.map((field, index) => {
                        var _a;
                        return (_jsxs("div", { className: classNames === null || classNames === void 0 ? void 0 : classNames.inputWrapper, children: [_jsxs("label", { className: classNames === null || classNames === void 0 ? void 0 : classNames.label, htmlFor: field.name, children: [field.label, " ", ((_a = field.config) === null || _a === void 0 ? void 0 : _a.required) && "*"] }), _jsx(DynamicControl, { ...field, classNames: classNames }), _jsx(ErrorMessage, { errors: errors, name: field.name, classNames: classNames === null || classNames === void 0 ? void 0 : classNames.error, translator: translator })] }, `${field.name}-wrapper-${index}`));
                    }) }), children ? (children) : (_jsx("button", { type: "submit", disabled: isSubmitting, className: classNames === null || classNames === void 0 ? void 0 : classNames.button, children: isSubmitting ? translator("submitting") : translator("submit") }))] })) }));
};
export default Form;
//# sourceMappingURL=Form.js.map