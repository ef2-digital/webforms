import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import Form from "./Form";
import { getForm } from "./utils/fetchers";
const WebForm = async ({ locale, formId, classNames, endpoint, }) => {
    var _a, _b, _c;
    const form = await getForm(endpoint, formId);
    if (!form) {
        return _jsx(_Fragment, {});
    }
    return (_jsx(_Fragment, { children: _jsx(Form, { formId: (_a = form.data.webformsForm) === null || _a === void 0 ? void 0 : _a.data.id, endpoint: endpoint, locale: locale, classNames: classNames, fields: JSON.parse((_c = (_b = form.data.webformsForm) === null || _b === void 0 ? void 0 : _b.data.attributes) === null || _c === void 0 ? void 0 : _c.fields) }) }));
};
export default WebForm;
//# sourceMappingURL=WebForm.js.map