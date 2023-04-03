import * as React from "react";
import { SubmissionType } from "../../utils/types";
import { format, parseISO } from "date-fns";

/*
 * Strapi Design system
 */
import {
  Flex,
  Tr,
  Td,
  Link,
  LinkButton,
  Typography,
  Stack,
} from "@strapi/design-system";
import pluginId from "../../pluginId";
import { useIntl } from "react-intl";
import { Eye } from "@strapi/icons";

type SubmissionListItemProps = {
  item: SubmissionType;
};
const SubmissionListItem = ({ item }: SubmissionListItemProps) => {
  const { formatMessage } = useIntl();

  return (
    <Tr>
      <Td>
        <Typography textColor="neutral800">
          {item.form ? (
            <Link to={`/plugins/${pluginId}/form/edit/${item.form.id}`}>
              {item.form.title!}
            </Link>
          ) : (
            <i style={{ fontStyle: "italic" }}>
              {formatMessage({ id: "webforms.forms.deleted" })}
            </i>
          )}
        </Typography>
      </Td>
      <Td>
        {
          //@ts-ignore
          format(parseISO(item.createdAt!), "dd-MM-yyyy HH:mm")
        }
      </Td>
      <Td>
        <Flex justifyContent="right" alignItems="right">
          <Stack horizontal={true} spacing={3}>
            <LinkButton
              to={`/plugins/${pluginId}/submission/${item.id}`}
              startIcon={<Eye />}
            >
              {formatMessage({ id: "webforms.actions.view" })}
            </LinkButton>
          </Stack>
        </Flex>
      </Td>
    </Tr>
  );
};

export default SubmissionListItem;
