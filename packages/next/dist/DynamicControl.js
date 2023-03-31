import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useFormContext } from "react-hook-form";
export const DynamicControl = ({ type, name, defaultValue, options = [], config = {}, classNames = {}, }) => {
    const { register } = useFormContext();
    switch (type) {
        case "text":
            return (_jsx("input", { type: "text", ...register(name, config), defaultValue: defaultValue, className: classNames === null || classNames === void 0 ? void 0 : classNames.text }));
        case "email":
            return (_jsx("input", { type: "email", ...register(name, config), defaultValue: defaultValue, className: classNames === null || classNames === void 0 ? void 0 : classNames.text }));
        case "radio":
            return (_jsx(_Fragment, { children: options.map((option, index) => {
                    return (_jsxs("div", { className: classNames === null || classNames === void 0 ? void 0 : classNames.radioWrapper, children: [_jsx("input", { type: "radio", className: classNames === null || classNames === void 0 ? void 0 : classNames.radio }), " ", option.label] }, `${name}-${index}`));
                }) }));
        case "textarea":
            return (_jsx("textarea", { ...register(name, config), defaultValue: defaultValue, className: classNames === null || classNames === void 0 ? void 0 : classNames.textArea }));
        case "select": {
            return (_jsx("select", { ...register(name, config), defaultValue: defaultValue, name: name, id: name, className: classNames === null || classNames === void 0 ? void 0 : classNames.select, children: options.map((o, index) => (_jsx("option", { value: o.value, children: o.label }, `${name}-${index}`))) }));
        }
        case "number":
            return (_jsx("input", { type: "number", ...register(name, config), defaultValue: defaultValue, className: classNames === null || classNames === void 0 ? void 0 : classNames.number }));
        case "file":
            return (_jsx("input", { type: "file", ...register(name, config), defaultValue: defaultValue, className: classNames === null || classNames === void 0 ? void 0 : classNames.file }));
        default:
            return _jsx(_Fragment, {});
    }
};
//# sourceMappingURL=DynamicControl.js.map