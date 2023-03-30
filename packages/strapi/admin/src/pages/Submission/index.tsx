import * as React from "react";
import { useIntl } from "react-intl";
import Header from "../../components/Submission/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import formRequests from "../../api/form";
import { FormType, SubmissionType } from "../../utils/types";
import { format, parseISO } from "date-fns";

/*
 * Strapi Design system
 */
import { Box, Typography, Grid, GridItem } from "@strapi/design-system";

const Submission = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [submission, setSubmission] = useState<SubmissionType | null>();

  useEffect(() => {
    formRequests
      .getSubmission(id)
      .then((result) => {
        setSubmission(result.data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (!submission || isLoading) {
    return <></>;
  }

  return (
    <>
      <Header formId={submission.form.id!} />
      <Box paddingLeft={10} paddingRight={10}>
        <Box
          background="neutral0"
          padding={5}
          marginBottom={5}
          shadow="filterShadow"
          hasRadius
        >
          {!submission.submission ? (
            <></>
          ) : (
            <SubmissionBox submission={submission} form={submission.form} />
          )}
        </Box>
      </Box>
    </>
  );
};

const SubmissionBox = ({
  submission,
  form,
}: {
  submission: SubmissionType;
  form: FormType;
}) => {
  const { formatMessage } = useIntl();
  const parsedSubmission = JSON.parse(submission.submission);
  // @ts-ignore
  const submissionDate = format(parseISO(form.createdAt!), "dd-MM-yyyy H:ss");

  return (
    <Grid gap={5}>
      <GridItem padding={1} col={3} s={3}>
        <Box background="neutral100" padding={4}>
          <Box paddingBottom={2}>
            <Typography variant="omega" fontWeight="bold">
              {formatMessage({
                id: "webforms.submissions.submission.info_title",
              })}
            </Typography>
          </Box>
          <Box>
            <Grid>
              <GridItem col={6}>
                <Typography variant="omega" fontWeight="semiBold">
                  {formatMessage({
                    id: "webforms.submissions.submission_date",
                  })}
                  :
                </Typography>
              </GridItem>
              <GridItem col={6}>
                <Typography variant="omega">{submissionDate}</Typography>
              </GridItem>
            </Grid>
          </Box>
          <Box>
            <Grid>
              <GridItem col={6}>
                <Typography variant="omega" fontWeight="semiBold">
                  {formatMessage({
                    id: "webforms.submissions.form_name",
                  })}
                  :
                </Typography>
              </GridItem>
              <GridItem col={6}>
                <Typography variant="omega">{form.title}</Typography>
              </GridItem>
            </Grid>
          </Box>
        </Box>
      </GridItem>
      <GridItem padding={1} col={9} s={9}>
        <Box background="neutral100" padding={4}>
          <Box paddingBottom={2}>
            <Typography variant="omega" fontWeight="bold">
              {formatMessage({
                id: "webforms.submissions.submission.info_submission",
              })}
            </Typography>
          </Box>
          {Object.keys(parsedSubmission).map((field) => {
            return (
              <SubmissionField
                label={field}
                field={parsedSubmission[field]}
              ></SubmissionField>
            );
          })}
        </Box>
      </GridItem>
    </Grid>
  );
};

const SubmissionField = ({
  label,
  field,
}: {
  label: string;
  field: string;
}) => {
  return (
    <Box>
      <Grid>
        <GridItem col={3}>
          <Typography variant="omega" fontWeight="semiBold">
            {label}:
          </Typography>
        </GridItem>
        <GridItem col={9}>
          <Typography>{field}</Typography>
        </GridItem>
      </Grid>
    </Box>
  );
};
export { Submission, SubmissionField, SubmissionBox };
