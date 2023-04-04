"use client";

import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { DynamicControl } from "./DynamicControl";
import { DynamicFieldData, FieldClassNames } from "./dynamic-control-types";
import { PropsWithChildren, ReactNode, useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import getTranslator, { ValidLocale } from "./translations/translator";
import { postSubmission } from "./utils/fetchers";

export interface FormProps extends PropsWithChildren {
  locale: ValidLocale;
  formId: string;
  fields: DynamicFieldData[];
  classNames?: FieldClassNames;
  endpoint: string;
  successMessage: ReactNode;
  errorMessage: ReactNode;
}

const Form = ({
  locale,
  formId,
  fields,
  classNames,
  endpoint,
  children,
  successMessage,
  errorMessage,
}: FormProps) => {
  const [isSuccess, setSuccess] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
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
    if (data.honeypot) {
      setError(true);
      return false;
    }

    const response = await postSubmission(endpoint, formId, data);

    if (response.errors) {
      setError(true);
    }

    return setSuccess(true);
  };

  if (isError) {
    return <>{errorMessage}</>;
  }

  if (isSuccess) {
    return <>{successMessage}</>;
  }

  return (
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
        <div className="hidden">
          <DynamicControl
            defaultValue=""
            name="honeypot"
            label=">Don’t fill this out if you're human"
            type="text"
            classNames={classNames}
          />
        </div>
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
  );
};

export default Form;
