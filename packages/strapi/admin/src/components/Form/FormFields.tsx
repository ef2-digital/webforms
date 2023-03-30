import * as React from "react";
import { useContext, useState } from "react";
import { FormContext } from "../../hooks/useWebForm";
import FormField from "./FormField";
import { FieldType, FieldTypeDefaultProps } from "../../utils/types";
import { FieldActionsEnum, FieldDirectionEnum } from "../../utils/enums";
import { Types } from "../../hooks/webFormReducer";
import FieldModal from "../Modal/FieldModal";
import { useIntl } from "react-intl";
/*
 * Strapi Design system
 */
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Stack,
} from "@strapi/design-system";
import { Plus } from "@strapi/icons";

const FormFields = () => {
  const { formatMessage } = useIntl();
  const [fieldAction, setFieldAction] = useState<FieldActionsEnum>(
    FieldActionsEnum.Add
  );
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [currentField, setCurrentField] = useState<FieldType>(
    FieldTypeDefaultProps
  );
  const { state, dispatch } = useContext(FormContext);
  const length = Object.keys(state.fields).length;

  const canMoveUp = (position: number) => position > 1 && length > 1;
  const canMoveDown = (position: number) =>
    Object.keys(state.fields).length !== position && length > 1;
  const remove = (position: number) =>
    dispatch({ type: Types.Remove_Field, payload: { position: position - 1 } });

  const move = (position: number, direction: FieldDirectionEnum) =>
    dispatch({
      type: Types.Change_Position,
      payload: { currentPosition: position, direction: direction },
    });

  const edit = (position: number) => {
    setCurrentField(state.fields[position - 1]);
    setFieldAction(FieldActionsEnum.Edit);
    setIsVisible(true);
  };

  const add = () => {
    setCurrentField(FieldTypeDefaultProps);
    setFieldAction(FieldActionsEnum.Add);
    setIsVisible(true);
  };

  return (
    <Grid gap={5}>
      <GridItem col={12} s={12}>
        <Divider />
        <Box paddingTop={2}>
          <Stack spacing={4}>
            {Object.keys(state.fields).length > 0 ? (
              state.fields.map((field, index) => (
                <FormField
                  {...field}
                  key={`${field.name}-component-${index}`}
                  position={index + 1}
                  canMoveDown={canMoveDown(index + 1)}
                  canMoveUp={canMoveUp(index + 1)}
                  move={move}
                  edit={edit}
                  remove={remove}
                />
              ))
            ) : (
              <></>
            )}
          </Stack>
        </Box>
      </GridItem>
      <GridItem col={12}>
        <Divider />
        <Box paddingTop={3}>
          <Flex justifyContent="right">
            <Button startIcon={<Plus />} onClick={() => add()} align="right">
              {formatMessage({ id: "webforms.forms.fields.add" })}
            </Button>
          </Flex>
          {isVisible ? (
            <FieldModal
              action={fieldAction}
              setIsVisible={setIsVisible}
              isVisible={isVisible}
              currentField={currentField}
              setCurrentField={setCurrentField}
            />
          ) : null}
        </Box>
      </GridItem>
    </Grid>
  );
};

export default FormFields;
