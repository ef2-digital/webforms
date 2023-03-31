import { get, FieldErrors } from "react-hook-form";
import { FieldError } from "react-hook-form/dist/types/errors";

type ErrorMessageProps = {
  errors: FieldErrors;
  name: string;
  classNames?: string;
  translator: (
    key: string,
    params?: { [key: string]: string | number }
  ) => string;
};

const ErrorMessage = ({
  errors,
  name,
  classNames,
  translator,
}: ErrorMessageProps) => {
  const error = get(errors, name) as FieldError;

  if (!error) {
    return <></>;
  }

  return (
    <div className={classNames}>
      {translator(`errorMessages.${error.type}`, { field: name })}
    </div>
  );
};

export default ErrorMessage;
