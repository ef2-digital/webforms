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

const formRequestBody = (formId: number) => {
  return {
    query: FORM_QUERY,
    variables: { formId },
  };
};

export { formRequestBody, FORM_QUERY };
