import { formRequestBody } from "../graphql/form";
import { submissionRequestBody } from "../graphql/submission";
import { WebformFormsResponse } from "./types";

const getForm = async (
  endpoint: string,
  formId: number
): Promise<WebformFormsResponse> => {
  const response = await fetch(`${endpoint}/graphql`, {
    cache: "no-store",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formRequestBody(formId)),
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));

  return response;
};

const postSubmission = async (
  endpoint: string,
  formId: string,
  data: object
) => {
  const response = await fetch(`${endpoint}/graphql`, {
    cache: "no-store",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(submissionRequestBody(formId, data)),
  })
    .then((res) => res.json())
    .then((result) => console.log(result));

  return response;
};

export { getForm, postSubmission };