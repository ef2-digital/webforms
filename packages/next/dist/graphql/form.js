const FORM_QUERY = `
  query getForm($formId: ID!) {
    webformsForm(id: $formId) {
      data {
        id
        attributes {
          title
          fields
        }
      }
    }
  }
`;
const formRequestBody = (formId) => {
    return {
        query: FORM_QUERY,
        variables: { formId },
    };
};
export { formRequestBody, FORM_QUERY };
//# sourceMappingURL=form.js.map