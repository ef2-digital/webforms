import Form from "./Form";
import { ValidLocale } from "./translations/translator";
import { FieldClassNames } from "./dynamic-control-types";
import { getForm } from "./utils/fetchers";
import { PropsWithChildren } from "react";

export interface WebFormProps extends PropsWithChildren {
  locale: ValidLocale;
  formId: number;
  classNames?: FieldClassNames;
  endpoint: string;
}

const WebForm = async ({
  locale,
  formId,
  classNames,
  endpoint,
}: WebFormProps) => {
  const form = await getForm(endpoint, formId);

  if (!form) {
    return <></>;
  }

  return (
    <>
      <Form
        formId={form.data.webformsForm?.data.id!}
        endpoint={endpoint}
        locale={locale}
        classNames={classNames}
        fields={JSON.parse(form.data.webformsForm?.data.attributes?.fields)}
      ></Form>
    </>
  );
};

export default WebForm;
