declare const FORM_QUERY = "\n  query getForm($formId: ID!) {\n    webformsForm(id: $formId) {\n      data {\n        id\n        attributes {\n          title\n          fields\n        }\n      }\n    }\n  }\n";
declare const formRequestBody: (formId: number) => {
    query: string;
    variables: {
        formId: number;
    };
};
export { formRequestBody, FORM_QUERY };
