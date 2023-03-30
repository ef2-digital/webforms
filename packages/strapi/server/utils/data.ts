export const EmailConfirmationData = {
    sendTo: "[user:email]",
    sendFromName: "[site:email]",
    sendFrom: "[site:name]",
    subject: "Successfully sent form submission",
    message: "<p>Submitted on [webform_submission:created]</p>\n" +
        "<p>Submitted by: [webform_submission:user]</p>\n" +
        "<p>Submitted values are:</p>\n" +
        "[webform_submission:values]",
    settings: "",
}

export const EmailNotificationData = {
    sendTo: "[site:email]",
    sendFromName: "[user:name]",
    sendFrom: "[user:email]",
    subject: "Form submission",
    message: "<p>Submitted on [webform_submission:created]</p>\n" +
        "<p>Submitted by: [webform_submission:user]</p>\n" +
        "<p>Submitted values are:</p>\n" +
        "[webform_submission:values]",
    settings: "",
}
