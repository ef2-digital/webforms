import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { get } from "react-hook-form";
const ErrorMessage = ({ errors, name, classNames, translator, }) => {
    const error = get(errors, name);
    if (!error) {
        return _jsx(_Fragment, {});
    }
    return (_jsx("div", { className: classNames, children: translator(`errorMessages.${error.type}`, { field: name }) }));
};
export default ErrorMessage;
//# sourceMappingURL=ErrorMessage.js.map