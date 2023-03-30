import * as React from "react";
import { useIntl } from "react-intl";

/*
 * Strapi Design system
 */
import { BaseHeaderLayout, Box, Button, Link } from "@strapi/design-system";
import { Check, ArrowLeft } from "@strapi/icons";
import pluginId from "../../pluginId";

type HeadingProps = {
  save?: () => void;
  title?: string;
  subtitle?: string;
};

const Header = ({ save, title, subtitle }: HeadingProps): JSX.Element => {
  const { formatMessage } = useIntl();

  return (
    <div>
      <Box background="neutral100">
        <BaseHeaderLayout
          primaryAction={
            save ? (
              <Button startIcon={<Check />} onClick={() => save()}>
                {formatMessage({ id: "webforms.save" })}
              </Button>
            ) : (
              <></>
            )
          }
          navigationAction={
            <Link startIcon={<ArrowLeft />} to={`/plugins/${pluginId}`}>
              {formatMessage({ id: "webforms.back_to_overview" })}
            </Link>
          }
          title={title ?? formatMessage({ id: "webforms.forms.title" })}
          subtitle={
            subtitle ?? formatMessage({ id: "webforms.forms.subtitle" })
          }
          as="h2"
        />
      </Box>
    </div>
  );
};

export default Header;
