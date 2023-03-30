import * as React from "react";
import { useIntl } from "react-intl";

/*
 * Strapi Design system
 */
import { BaseHeaderLayout, Box, Button, Link } from "@strapi/design-system";
import { ArrowLeft } from "@strapi/icons";
import pluginId from "../../pluginId";

const Header = (): JSX.Element => {
  const { formatMessage } = useIntl();

  return (
    <div>
      <Box background="neutral100">
        <BaseHeaderLayout
          navigationAction={
            <Link startIcon={<ArrowLeft />} to={`/plugins/${pluginId}`}>
              {formatMessage({ id: "webforms.back_to_overview" })}
            </Link>
          }
          title={formatMessage({ id: "webforms.handlers.title" })}
          subtitle={formatMessage({ id: "webforms.handlers.subtitle" })}
          as="h2"
        />
      </Box>
    </div>
  );
};

export default Header;
