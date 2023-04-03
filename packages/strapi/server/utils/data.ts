export const EmailConfirmationData = {
  sendTo: "[webform_submission.fields.email]",
  sendFromName: "[site:email]",
  sendFrom: "[site:name]",
  subject: "Successfully sent form submission",
  message:
    "<p>Submitted on [webform_submission:createdAt]</p>\n" +
    "<p>Submitted by: [webform_submission:user]</p>\n" +
    "<p>Submitted values are:</p>\n" +
    "[webform_submission.felds]",
  settings: "",
};

export const EmailNotificationData = {
  sendTo: "{site.email}",
  sendFrom: "{site.email}",
  subject: "Form {form.title} submission",
  message:
    "<p>Submitted on {submission.createdAt}</p>\n" +
    "<p>Submitted values are:</p>\n" +
    "{submission.fields}",
  settings: "",
};
