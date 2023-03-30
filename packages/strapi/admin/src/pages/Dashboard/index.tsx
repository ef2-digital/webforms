/*
 *
 * Dashboard
 *
 */

import * as React from "react";
import { useState, useEffect } from "react";
import { useIntl } from "react-intl";

import formRequests from "../../api/form";
import Header from "../../components/Layout/Header";
import List from "../../components/Layout/List";
import {
  FormCollectionType,
  FormType,
  SubmissionCollectionType,
  SubmissionType,
} from "../../utils/types";
import submissionRequests from "../../api/submission";
import FormListItem from "../../components/Form/FormListItem";
import SubmissionList from "../../components/Submission/SubmissionList";

/*
 * Strapi Design system
 */

import {
  Box,
  Loader,
  Tabs,
  Tab,
  TabGroup,
  TabPanels,
  TabPanel,
  Thead,
  Tr,
  Th,
  Typography,
} from "@strapi/design-system";

const Dashboard = () => {
  const { formatMessage } = useIntl();
  const [isLoading, setIsLoading] = useState(true);
  const [forms, setForms] = useState<FormCollectionType>([]);
  const [submissions, setSubmissions] = useState<SubmissionCollectionType>([]);

  useEffect(() => {
    formRequests.getForms().then((res) => {
      setForms(res.data);
    });
    submissionRequests.getSubmissions().then((res) => setSubmissions(res.data));

    setIsLoading(false);
  }, []);

  return (
    <>
      <Header title={formatMessage({ id: "webforms.heading.dashboard" })} />
      <Box padding={8}>
        <TabGroup label="Some stuff for the label" id="tabs" variant="simple">
          <Tabs>
            <Tab>{formatMessage({ id: "webforms.forms.label" })}</Tab>
            <Tab>
              {formatMessage({ id: "webforms.submissions.last_submissions" })}
            </Tab>
          </Tabs>
          <TabPanels>
            <TabPanel>
              <Box color="neutral800" background="neutral0">
                {isLoading ? (
                  <Loader />
                ) : (
                  <List rowCount={forms.length}>
                    {Object.values(forms).map((item: FormType, index) => (
                      <FormListItem item={item} key={index} />
                    ))}
                  </List>
                )}
              </Box>
            </TabPanel>
            <TabPanel>
              <Box color="neutral800" background="neutral0">
                {isLoading ? (
                  <Loader />
                ) : (
                  <SubmissionList submissions={submissions} />
                )}
              </Box>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </Box>
    </>
  );
};

export default Dashboard;
