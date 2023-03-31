import { useFormContext } from "react-hook-form";
import {
  DynamicFieldData,
  FieldClassNames,
  SelectOption,
} from "./dynamic-control-types";

export const DynamicControl = ({
  type,
  name,
  defaultValue,
  options = [],
  config = {},
  classNames = {} as FieldClassNames,
}: DynamicFieldData) => {
  const { register } = useFormContext();

  switch (type) {
    case "text":
      return (
        <input
          type="text"
          {...register(name, config)}
          defaultValue={defaultValue}
          className={classNames?.text}
        />
      );
    case "email":
      return (
        <input
          type="email"
          {...register(name, config)}
          defaultValue={defaultValue}
          className={classNames?.text}
        />
      );

    case "radio":
      return (
        <>
          {options.map((option: SelectOption, index) => {
            return (
              <div
                className={classNames?.radioWrapper}
                key={`${name}-${index}`}
              >
                <input type="radio" className={classNames?.radio} />{" "}
                {option.label}
              </div>
            );
          })}
        </>
      );

    case "textarea":
      return (
        <textarea
          {...register(name, config)}
          defaultValue={defaultValue}
          className={classNames?.textArea}
        ></textarea>
      );
    case "select": {
      return (
        <select
          {...register(name, config)}
          defaultValue={defaultValue}
          name={name}
          id={name}
          className={classNames?.select}
        >
          {options.map((o, index) => (
            <option key={`${name}-${index}`} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      );
    }
    case "number":
      return (
        <input
          type="number"
          {...register(name, config)}
          defaultValue={defaultValue}
          className={classNames?.number}
        />
      );
    case "file":
      return (
        <input
          type="file"
          {...register(name, config)}
          defaultValue={defaultValue}
          className={classNames?.file}
        />
      );
    default:
      return <></>;
  }
};
