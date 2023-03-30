import * as React from "react";
import { FormType } from "../../utils/types";
import formRequests from "../../api/form";
/*
 * Strapi Design system
 */
import {
  Button,
  Flex,
  LinkButton,
  Stack,
  Tr,
  Td,
  Typography,
} from "@strapi/design-system";
import { Pencil, Trash, Attachment, Mail } from "@strapi/icons";
import pluginId from "../../pluginId";
import { useIntl } from "react-intl";

type FormListItemProps = {
  item: FormType;
};
const FormListItem = ({ item }: FormListItemProps) => {
  const { formatMessage } = useIntl();

  const remove = (id: number) => {
    // @ts-ignore
    formRequests.deleteForm(id).then(() => window.location.reload());
  };

  return (
    <Tr>
      <Td>
        <Typography textColor="neutral800">{item.title}</Typography>
      </Td>
      <Td>
        <Flex justifyContent="right" alignItems="right">
          <Stack horizontal={true} spacing={3}>
            <LinkButton
              to={`/plugins/${pluginId}/form/submissions/${item.id}`}
              startIcon={<Mail />}
            >
              {formatMessage({ id: "webforms.submissions.label" })}
            </LinkButton>
            <LinkButton
              to={`/plugins/${pluginId}/form/edit/${item.id}`}
              startIcon={<Pencil />}
            >
              {formatMessage({ id: "webforms.actions.edit" })}
            </LinkButton>
            <LinkButton
              to={`/plugins/${pluginId}/form/handlers/${item.id}`}
              startIcon={<Attachment />}
            >
              {formatMessage({ id: "webforms.actions.handlers" })}
            </LinkButton>
            <Button
              onClick={() => remove(item.id!)}
              startIcon={<Trash />}
              variant="danger"
            >
              {formatMessage({ id: "webforms.actions.delete" })}
            </Button>
          </Stack>
        </Flex>
      </Td>
    </Tr>
  );
};

export default FormListItem;
