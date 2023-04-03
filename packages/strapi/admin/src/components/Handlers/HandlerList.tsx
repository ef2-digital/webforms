import * as React from "react";
import { useIntl } from "react-intl";
import { HandlerType } from "../../utils/types";
/*
 * Strapi Design system
 */
import {
  Flex,
  Icon,
  Link,
  LinkButton,
  Stack,
  Td,
  Tooltip,
  Tr,
  Typography,
} from "@strapi/design-system";

import { Dot, Eye } from "@strapi/icons";
import { HandlerTypeEnum } from "../../../../server/utils/enums";
import { useContext, useState } from "react";
import handlerRequests from "../../api/handler";
import { HandlerContext } from "../../hooks/useHandler";

type HandlerListItemProps = {
  item: HandlerType;
};

const HandlerList = ({ item }: HandlerListItemProps): JSX.Element => {
  const { setVisible, visible, handler, setHandler } =
    useContext(HandlerContext);
  const [active, toggleActive] = useState<boolean>(item.enabled);
  const { formatMessage } = useIntl();

  function setActiveState(item: HandlerType) {
    const status = !active;

    handlerRequests
      .toggleStatus(item.id, status)
      .then((response) => {
        setHandler(response.data);
      })
      .finally(() => toggleActive(status));
  }

  function toggle(visible: boolean, handler: HandlerType) {
    setHandler(handler);
    setVisible(visible);
  }

  return (
    <Tr>
      <Td>
        <Typography textColor="neutral800">{item.identifier}</Typography>
      </Td>
      <Td>
        <Typography textColor="neutral800">{item.type}</Typography>
      </Td>
      <Td>
        <Flex justifyContent="right" alignItems="right">
          <Stack horizontal={true} spacing={3}>
            <Tooltip
              description={formatMessage({ id: "webforms.tooltips.enabled" })}
            >
              <Link onClick={() => setActiveState(item)} to="#">
                <Icon
                  aria-hidden={true}
                  colors={(theme) => ({
                    rect: {
                      fill: active
                        ? theme.colors["success600"]
                        : theme.colors["danger600"],
                    },
                  })}
                  as={Dot}
                />
              </Link>
            </Tooltip>
            <LinkButton
              startIcon={<Eye />}
              onClick={() => toggle(!visible, item)}
            >
              {formatMessage({ id: "webforms.actions.view" })}
            </LinkButton>
            {/*<LinkButton startIcon={<Pencil/>}>*/}
            {/*    {formatMessage({id: "webforms.actions.edit"})}*/}
            {/*</LinkButton>*/}
            {item.type === HandlerTypeEnum.Email ? (
              <></>
            ) : (
              <>
                {/*<Button onClick={()=> remove(item.id)} startIcon={<Trash/>} variant="danger">*/}
                {/*    {formatMessage({id: "webforms.actions.delete"})}*/}
                {/*</Button>*/}
              </>
            )}
          </Stack>
        </Flex>
      </Td>
    </Tr>
  );
};

export default HandlerList;
