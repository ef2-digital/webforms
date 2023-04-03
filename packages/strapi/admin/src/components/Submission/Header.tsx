import * as React from "react";
import { BaseHeaderLayout, Box, Link } from "@strapi/design-system";
import { ArrowLeft } from "@strapi/icons";
import pluginId from "../../pluginId";
import { useIntl } from "react-intl";

const Header = ({ formId }: { formId: number }) => {
  const { formatMessage } = useIntl();

  return (
    <div>
      <Box background="neutral100">
        <BaseHeaderLayout
          navigationAction={
            <Link
              startIcon={<ArrowLeft />}
              to={`/plugins/${pluginId}/form/submissions/${formId}`}
            >
              {formatMessage({ id: "webforms.submissions.to_form" })}
            </Link>
          }
          title={formatMessage({ id: "webforms.submissions.submission.title" })}
          as="h2"
        />
      </Box>
    </div>
  );
};

export default Header;
