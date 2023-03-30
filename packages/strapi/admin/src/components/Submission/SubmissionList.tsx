import * as React from "react";
import { SubmissionCollectionType, SubmissionType } from "../../utils/types";
import List from "../Layout/List";
import SubmissionListItem from "./SubmissionListItem";
import { Thead, Tr, Th, Typography } from "@strapi/design-system";
import { useIntl } from "react-intl";

const SubmissionList = ({
  submissions,
}: {
  submissions: SubmissionCollectionType;
}) => {
  const { formatMessage } = useIntl();

  return (
    <List
      rowCount={submissions.length}
      rowHeader={
        <Thead>
          <Tr>
            <Th>
              <Typography variant="sigma">
                {formatMessage({
                  id: "webforms.submissions.form_name",
                })}
              </Typography>
            </Th>
            <Th>
              <Typography variant="sigma">
                {formatMessage({
                  id: "webforms.submissions.submission_date",
                })}
              </Typography>
            </Th>
          </Tr>
        </Thead>
      }
    >
      {Object.values(submissions).map((item: SubmissionType, index) => (
        <SubmissionListItem item={item} key={index} />
      ))}
    </List>
  );
};

export default SubmissionList;
