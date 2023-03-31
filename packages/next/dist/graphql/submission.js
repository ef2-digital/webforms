const POST_SUBMISSION = `
mutation postSubmission($id: ID!, $submission: JSON!) {
    createWebformsSubmission(
        data: {
            form: $id,
            submission: $submission
        }
    ) {
        data {
            id
        }
    }
}
`;
const submissionRequestBody = (id, submission) => {
    return {
        query: POST_SUBMISSION,
        variables: { id, submission: JSON.stringify(submission) },
    };
};
export { submissionRequestBody, POST_SUBMISSION };
//# sourceMappingURL=submission.js.map