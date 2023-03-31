declare const POST_SUBMISSION = "\nmutation postSubmission($id: ID!, $submission: JSON!) {\n    createWebformsSubmission(\n        data: {\n            form: $id,\n            submission: $submission\n        }\n    ) {\n        data {\n            id\n        }\n    }\n}\n";
declare const submissionRequestBody: (id: string, submission: object) => {
    query: string;
    variables: {
        id: string;
        submission: string;
    };
};
export { submissionRequestBody, POST_SUBMISSION };
