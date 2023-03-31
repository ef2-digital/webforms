"use client";

import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { DynamicControl } from "./DynamicControl";
import { DynamicFieldData, FieldClassNames } from "./dynamic-control-types";
import { PropsWithChildren, useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import getTranslator, { ValidLocale } from "./translations/translator";
import { postSubmission } from "./utils/fetchers";

export interface FormProps extends PropsWithChildren {
  locale: ValidLocale;
  formId: string;
  fields: DynamicFieldData[];
  classNames?: FieldClassNames;
  endpoint: string;
}

const Form = ({
  locale,
  formId,
  fields,
  classNames,
  endpoint,
  children,
}: FormProps) => {
  const [success, setSuccess] = useState<boolean>(false);
  const [translator, setTranslator] = useState<
    (
      key: string,
      params?: { [key: string]: string | number } | undefined
    ) => string
  >(() => () => "");

  useEffect(() => {
    const translator = async () => {
      const data = await getTranslator(locale as ValidLocale);

      setTranslator(() => data);
    };

    translator();
  }, []);

  const formMethods = useForm();

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = formMethods;

  const formSubmit: SubmitHandler<FieldValues> = async (data) => {
    const response = await postSubmission(endpoint, formId, data);

    setSuccess(true);
  };

  return (
    <>
      {success ? (
        ""
      ) : (
        <form onSubmit={handleSubmit(formSubmit)}>
          <FormProvider {...formMethods}>
            {fields.map((field, index) => (
              <div
                key={`${field.name}-wrapper-${index}`}
                className={classNames?.inputWrapper}
              >
                <label className={classNames?.label} htmlFor={field.name}>
                  {field.label} {field.config?.required && "*"}
                </label>

                <DynamicControl {...field} classNames={classNames} />

                <ErrorMessage
                  errors={errors}
                  name={field.name}
                  classNames={classNames?.error}
                  translator={translator}
                />
              </div>
            ))}
          </FormProvider>
          {children ? (
            children
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className={classNames?.button}
            >
              {isSubmitting ? translator("submitting") : translator("submit")}
            </button>
          )}
        </form>
      )}
    </>
  );
};

export default Form;
