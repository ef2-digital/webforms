import * as React from "react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { FormContext } from "../../hooks/useWebForm";
import formRequests from "../../api/form";
import { Types } from "../../hooks/webFormReducer";
import Header from "../../components/Form/Header";
import { useIntl } from "react-intl";

/*
 * Strapi Design system
 */
import {
  Box,
  Divider,
  Field,
  FieldInput,
  FieldLabel,
  Grid,
  GridItem,
  Stack,
} from "@strapi/design-system";
import FormFields from "../../components/Form/FormFields";
import AlertWrapper from "../../components/Layout/AlertWrapper";
import {
  FormType,
  SubmissionCollectionType,
  SubmissionType,
} from "../../utils/types";
import { SubmissionBox } from "../Submission";
import SubmissionList from "../../components/Submission/SubmissionList";

const Form = () => {
  const { formatMessage } = useIntl();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [submissions, setSubmissions] = useState<SubmissionCollectionType>();
  const [form, setForm] = useState<FormType>();

  useEffect(() => {
    formRequests
      .getFormSubmissions(id)
      .then((result) => {
        setForm(result.data);
        setSubmissions(
          result.data.submissions.map((submission) => ({
            ...submission,
            form: result.data,
          }))
        );
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading || !form) {
    return <></>;
  }

  return (
    <>
      <Header
        title={form.title}
        subtitle={formatMessage({ id: "webforms.submissions.label" })}
      />
      {!submissions ? (
        <></>
      ) : (
        <Box paddingLeft={10} paddingRight={10}>
          <SubmissionList submissions={submissions} />
        </Box>
      )}
    </>
  );
};

export default Form;
