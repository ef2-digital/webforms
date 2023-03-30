import * as React from "react";
import { createContext, useReducer } from "react";
import { FieldCollectionType, FormType } from "../utils/types";
import { FormActions, formReducer } from "./webFormReducer";

export interface FormContextInterface {
  fields: FieldCollectionType;
  form: FormType;
}

const initialState = {
  fields: [],
  form: {
    id: null,
    title: "",
    fields: "",
    createdAt: null,
    updatedAt: null,
  },
};

const FormContext = createContext<{
  state: FormContextInterface;
  dispatch: React.Dispatch<FormActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const WebFormProvider = ({ children }: { children: React.ReactNode }) => {
  // @ts-ignore
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, WebFormProvider };
